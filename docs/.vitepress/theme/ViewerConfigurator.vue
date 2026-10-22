<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useData, withBase } from 'vitepress'
import { compile, moduleUrl } from './playground/compile'
import 'viewerjs/dist/viewer.css'
import './configurator/preview.css'
import { previewSample } from './configurator/preview'
import { defaultImageCount, sampleImages } from './sample-images'
import {
  defaults,
  groups,
  type Control,
  type Setting,
} from './configurator/options'

const props = defineProps<{ vue2?: boolean }>()
const { lang } = useData()
const english = computed(() => lang.value.startsWith('en'))
const text = (zh: string, en: string) => (english.value ? en : zh)
const settings = ref(defaults())
const imageCount = ref(defaultImageCount)
const selectedGroup = ref('appearance')
const query = ref('')
const preview = ref<HTMLDivElement>()
let runtime:
  { send: (command: object) => void; dispose: () => void } | undefined
const ready = ref(false)
const pending = ref(false)
const error = ref('')
const logs = ref<string[]>([])
const state = ref({
  index: 0,
  shown: false,
  credit: '',
  container: '',
  width: 0,
})
let revision = 0
let disposed = false
const controls = computed(() => {
  const search = query.value.trim().toLowerCase()
  return groups
    .filter((group) => search || group.id === selectedGroup.value)
    .flatMap((group) => group.controls)
    .filter(
      (control) =>
        !search ||
        `${control.key} ${control.zh} ${control.en}`
          .toLowerCase()
          .includes(search),
    )
})
const count = groups.reduce((sum, group) => sum + group.controls.length, 0)
const lastImageIndex = (filter: Setting) =>
  Math.max(
    0,
    (filter === 'first'
      ? Math.min(1, imageCount.value)
      : filter === 'lastTwo'
        ? Math.min(2, imageCount.value)
        : imageCount.value) - 1,
  )
const hints: Record<string, [string, string]> = {
  appearance: [
    '响应式断点以浏览器窗口宽度为准。加载提示在慢速网络下更明显。',
    'Responsive breakpoints use the browser viewport width. Loading indicators are easier to see on a slow connection.',
  ],
  interaction: [
    '触屏选项需在触屏设备上体验。focus 依赖 keyboard；预加载差异在慢速网络下更明显。',
    'Try touch options on a touch device. Focus requires keyboard; preloading is easier to observe on a slow connection.',
  ],
  geometry: [
    '初始索引从 0 开始。z-index: 1 标记可用来比较层级。',
    'Image indexes start at 0. Use the z-index: 1 marker to compare stacking.',
  ],
  playback: [
    '请点击预览工具栏 ▶ 开始播放。原生全屏只能由用户操作触发。',
    'Start playback with ▶ in the preview toolbar. Native fullscreen requires a user gesture.',
  ],
  data: [
    'data-source 示例指向下一张图片。挂载位置和继承的 data-credit 显示在预览下方。',
    'The data-source preset points to the next image. The container and inherited data-credit appear below the preview.',
  ],
  events: [
    '开启事件开关后操作图片，下面的日志会显示事件名称和参数。',
    'Enable event listeners and interact with images to see event names and details below.',
  ],
}
function send(payload: object) {
  runtime?.send(payload)
}
function update(control: Control, event: Event) {
  const input = event.target as HTMLInputElement
  let value: Setting
  if (control.type === 'boolean') value = input.checked
  else if (control.type === 'radio')
    value = control.choices![Number(input.value)].value
  else if (control.type === 'select')
    value =
      control.choices![(event.target as HTMLSelectElement).selectedIndex].value
  else {
    const number = Number(input.value)
    if (!input.value || !Number.isFinite(number)) {
      input.value = String(settings.value[control.key])
      return
    }
    const max =
      control.key === 'initialViewIndex'
        ? lastImageIndex(settings.value.filter)
        : control.max!
    value = Math.min(max, Math.max(control.min!, number))
    input.value = String(value)
  }
  const next = { ...settings.value, [control.key]: value }
  const lastIndex = lastImageIndex(next.filter)
  next.initialViewIndex = Math.min(Number(next.initialViewIndex), lastIndex)
  settings.value = next
}
function sync() {
  if (!ready.value) return
  pending.value = true
  send({
    type: 'options',
    revision: ++revision,
    settings: { ...settings.value },
  })
}
function reset() {
  logs.value = []
  imageCount.value = defaultImageCount
  settings.value = defaults()
}
function chooseGroup(id: string) {
  selectedGroup.value = id
  query.value = ''
}
function receive(
  data: typeof state.value & {
    type: string
    revision?: number
    name?: string
    detail?: unknown
  },
) {
  if (disposed) return
  if (data.type === 'ready') {
    ready.value = true
    sync()
  }
  if (data.type === 'state') {
    state.value = data
    if (data.revision === revision) pending.value = false
  }
  if (data.type === 'event')
    logs.value = [
      `${data.name} ${JSON.stringify(data.detail)}`,
      ...logs.value,
    ].slice(0, 12)
}
watch(settings, sync)
watch(imageCount, (count) => {
  send({ type: 'images', count })
  const lastIndex = lastImageIndex(settings.value.filter)
  if (Number(settings.value.initialViewIndex) > lastIndex)
    settings.value = { ...settings.value, initialViewIndex: lastIndex }
})
onMounted(async () => {
  try {
    const response = await fetch(
      withBase(`/playground/${props.vue2 ? 'vue2' : 'vue3'}/configurator.js`),
    )
    if (!response.ok) throw new Error('Unable to load the viewer demo')
    const { mount } = await import(
      /* @vite-ignore */ moduleUrl(await response.text())
    )
    if (disposed) return
    const urls = sampleImages.map((path) => location.origin + withBase(path))
    const compiled = compile(
      previewSample(!!props.vue2, english.value, urls),
      !!props.vue2,
    )
    const { default: component } = await import(
      /* @vite-ignore */ moduleUrl(compiled.code)
    )
    if (disposed) return
    runtime = mount(preview.value, component, receive)
  } catch (reason) {
    error.value = String(reason)
  }
})
onBeforeUnmount(() => {
  disposed = true
  runtime?.dispose()
})
</script>

<template>
  <section
    class="configurator"
    :class="{ 'inline-preview': settings.inline }"
    :aria-label="text('图片预览配置', 'Image preview settings')"
  >
    <header class="config-header">
      <div class="image-actions">
        <button
          type="button"
          :disabled="!ready || imageCount >= sampleImages.length"
          @click="imageCount++"
        >
          {{ text('添加图片', 'Add image') }}
        </button>
        <button
          type="button"
          :disabled="!ready || imageCount === 0"
          @click="imageCount--"
        >
          {{ text('删除图片', 'Remove image') }}
        </button>
      </div>
      <button type="button" class="reset" @click="reset">
        {{ text('重置示例', 'Reset demo') }}
      </button>
    </header>
    <div class="workbench">
      <div class="preview-pane">
        <div class="preview-stage">
          <div ref="preview" class="preview-host vp-raw"></div>
          <div v-if="!ready" class="loading">
            {{ text('正在加载图片预览…', 'Loading image preview…') }}
          </div>
        </div>
        <div class="preview-status">
          <span role="status">{{
            !ready
              ? text('加载中', 'Loading')
              : pending
                ? text('应用中…', 'Applying…')
                : text('已应用', 'Applied')
          }}</span>
        </div>
        <div class="inspector">
          <span
            >{{ text('图片', 'Image') }}
            {{ imageCount ? state.index + 1 : 0 }} · {{ state.width }}px</span
          ><span>{{ state.container || '—' }}</span
          ><span v-if="state.credit">{{ state.credit }}</span>
        </div>
      </div>
      <div class="settings-slot">
        <div class="settings-pane">
          <label class="search"
            ><span class="sr-only">{{
              text('搜索配置项', 'Search options')
            }}</span
            ><input
              v-model="query"
              type="search"
              :placeholder="text('搜索配置项…', 'Find an option…')"
          /></label>
          <div class="groups" :aria-label="text('配置分组', 'Option groups')">
            <button
              v-for="group in groups"
              :key="group.id"
              type="button"
              :aria-pressed="selectedGroup === group.id && !query"
              @click="chooseGroup(group.id)"
            >
              {{ text(group.zh, group.en) }}
            </button>
          </div>
          <div class="controls">
            <component
              :is="control.type === 'radio' ? 'div' : 'label'"
              v-for="control in controls"
              :key="control.key"
              class="control"
              :class="{ toggle: control.type === 'boolean' }"
            >
              <span
                ><code>{{ control.key }}</code
                ><small>{{ text(control.zh, control.en) }}</small></span
              >
              <div
                v-if="control.type === 'radio'"
                class="mode-options"
                role="radiogroup"
                :aria-label="control.key"
              >
                <label
                  v-for="(option, index) in control.choices"
                  :key="index"
                  class="mode-choice"
                >
                  <input
                    type="radio"
                    :name="control.key"
                    :value="index"
                    :checked="settings[control.key] === option.value"
                    @change="update(control, $event)"
                  />
                  <span>{{ text(option.zh, option.en) }}</span>
                </label>
              </div>
              <input
                v-else-if="control.type === 'boolean'"
                type="checkbox"
                role="switch"
                :aria-label="control.key"
                :checked="!!settings[control.key]"
                @change="update(control, $event)"
              />
              <select
                v-else-if="control.type === 'select'"
                :aria-label="control.key"
                @change="update(control, $event)"
              >
                <option
                  v-for="(option, index) in control.choices"
                  :key="index"
                  :selected="settings[control.key] === option.value"
                >
                  {{ text(option.zh, option.en) }}
                </option>
              </select>
              <input
                v-else
                type="number"
                :aria-label="control.key"
                :value="settings[control.key]"
                :min="control.min"
                :max="
                  control.key === 'initialViewIndex'
                    ? lastImageIndex(settings.filter)
                    : control.max
                "
                :step="control.step"
                @change="update(control, $event)"
              />
            </component>
            <p v-if="!controls.length" class="hint">
              {{ text('没有匹配的配置项', 'No matching options') }}
            </p>
          </div>
          <p class="scope-hint">
            {{ count }}
            {{ text('项配置', 'options') }} ·
            {{ text(...hints[selectedGroup]) }}
          </p>
        </div>
      </div>
    </div>
    <p v-if="error" class="error" role="alert">{{ error }}</p>
    <details class="event-log" :open="selectedGroup === 'events'">
      <summary>
        {{ text('事件日志', 'Event log') }} <span>{{ logs.length }}</span>
      </summary>
      <div role="log" :aria-label="text('预览事件日志', 'Preview event log')">
        <div v-for="(entry, index) in logs" :key="index">{{ entry }}</div>
        <span v-if="!logs.length">{{
          text(
            '开启事件开关，再操作预览图片。',
            'Enable an event, then interact with the preview.',
          )
        }}</span>
      </div>
    </details>
  </section>
</template>

<style scoped>
.configurator {
  margin: 28px 0 40px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  overflow: hidden;
  background: var(--vp-c-bg);
}
.config-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 16px 20px;
}
.image-actions {
  display: flex;
  gap: 8px;
}
button {
  cursor: pointer;
  font-size: 14px;
  line-height: 1.5;
}
.config-header button {
  padding: 7px 10px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 5px;
  white-space: nowrap;
}
.config-header button:disabled {
  opacity: 0.45;
  cursor: not-allowed;
}
.config-header button:not(:disabled):hover {
  background: var(--vp-c-bg-soft);
}
.reset {
  margin-left: auto;
}
.workbench {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  border-top: 1px solid var(--vp-c-divider);
}
.preview-pane {
  min-width: 0;
  background: var(--vp-c-bg-soft);
}
.preview-stage {
  position: relative;
}
.inline-preview .preview-stage {
  height: 480px;
}
.preview-host,
.loading {
  display: block;
  width: 100%;
  border: 0;
}
.inline-preview .preview-host {
  height: 100%;
}
.loading {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  font-size: 12px;
}
.preview-status {
  padding: 10px;
  border-top: 1px solid var(--vp-c-divider);
}
.preview-status span {
  font: 14px var(--vp-font-family-base);
  color: var(--vp-c-brand-1);
}
.inspector {
  display: flex;
  flex-wrap: wrap;
  gap: 5px 12px;
  padding: 0 10px 10px;
  font: 12px/1.5 var(--vp-font-family-mono);
  color: var(--vp-c-text-2);
}
.settings-pane {
  min-width: 0;
  border-top: 1px solid var(--vp-c-divider);
  display: flex;
  flex-direction: column;
}
.settings-slot {
  min-width: 0;
}
.search {
  display: block;
  padding: 10px;
}
.search input {
  width: 100%;
  font-size: 14px;
  border: 1px solid var(--vp-c-divider);
  padding: 6px 8px;
  border-radius: 4px;
  background: var(--vp-c-bg-soft);
}
.groups {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 3px;
  padding: 0 10px 10px;
  border-bottom: 1px solid var(--vp-c-divider);
}
.groups button {
  padding: 5px 2px;
  color: var(--vp-c-text-2);
  border-radius: 4px;
  font-size: 14px;
}
.groups button[aria-pressed='true'] {
  color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
  font-weight: 600;
}
.controls {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  align-content: start;
  column-gap: 24px;
  padding: 0 12px;
}
.control {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 7px;
  padding: 10px 0;
  border-bottom: 1px solid var(--vp-c-divider);
}
.control > span {
  min-width: 0;
}
.control.toggle > span {
  flex: 1;
}
.mode-options {
  display: flex;
  width: 100%;
  padding: 3px;
  gap: 3px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  background: var(--vp-c-bg-soft);
}
.mode-choice {
  position: relative;
  flex: 1;
  padding: 6px 10px;
  border-radius: 3px;
  text-align: center;
  font: 12px/1.5 var(--vp-font-family-mono);
  color: var(--vp-c-text-2);
  cursor: pointer;
}
.mode-choice input {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  opacity: 0;
  cursor: pointer;
}
.mode-choice:has(input:checked) {
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  font-weight: 600;
}
.mode-choice:has(input:focus-visible) {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: 1px;
}
.control code {
  padding: 0;
  background: none;
  color: var(--vp-c-text-1);
  font-size: 12px;
}
.control small {
  display: block;
  color: var(--vp-c-text-2);
  font-size: 14px;
  line-height: 1.5;
}
.control input[type='checkbox'] {
  appearance: none;
  flex: 0 0 28px;
  width: 28px;
  height: 16px;
  border-radius: 10px;
  background: var(--vp-c-divider);
  cursor: pointer;
  position: relative;
}
.control input[type='checkbox']::after {
  content: '';
  position: absolute;
  width: 12px;
  height: 12px;
  top: 2px;
  left: 2px;
  background: white;
  border-radius: 50%;
  transition: transform 0.15s;
}
.control input:checked {
  background: var(--vp-c-brand-1);
}
.control input:checked::after {
  transform: translateX(12px);
}
.control select,
.control input[type='number'] {
  width: 100%;
  min-width: 0;
  padding: 4px 6px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  background: var(--vp-c-bg);
  font-size: 14px;
  line-height: 1.6;
  color: var(--vp-c-text-1);
}
.control input[type='number'] {
  width: 76px;
}
.scope-hint {
  padding: 9px 12px;
  margin: 0;
  font-size: 14px;
  line-height: 1.65;
  color: var(--vp-c-text-3);
  border-top: 1px solid var(--vp-c-divider);
}
.event-log {
  border-top: 1px solid var(--vp-c-divider);
  padding: 10px 16px;
}
summary {
  cursor: pointer;
  font-size: 14px;
  color: var(--vp-c-text-2);
}
summary span {
  font: 12px var(--vp-font-family-mono);
  color: var(--vp-c-brand-1);
}
[role='log'] {
  max-height: 120px;
  overflow: auto;
  padding-top: 8px;
  font: 12px/1.8 var(--vp-font-family-mono);
  overflow-wrap: anywhere;
}
.error {
  padding: 0 16px;
  color: var(--vp-c-danger-1);
  font-size: 14px;
}
:is(button, input, select, summary):focus-visible {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: 2px;
}
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip-path: inset(50%);
}
@media (min-width: 640px) and (max-width: 1100px) {
  .controls {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
@media (max-width: 639px) {
  .inline-preview .preview-stage {
    height: 330px;
  }
  .controls {
    grid-template-columns: minmax(0, 1fr);
  }
  .control:not(.toggle) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .config-header {
    padding: 14px;
    gap: 8px;
  }
  .config-header button {
    padding: 7px 8px;
    font-size: 12px;
  }
}
@media (prefers-reduced-motion: reduce) {
  .control input::after {
    transition: none;
  }
}
</style>
