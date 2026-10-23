<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useData, withBase } from 'vitepress'
import { basicSetup, EditorView } from 'codemirror'
import { html } from '@codemirror/lang-html'
import { Compartment } from '@codemirror/state'
import { oneDark } from '@codemirror/theme-one-dark'
import { compile, previewDocument } from './compile'
import { loadViewerRuntime } from './runtime'
import { sample, type Example } from './samples'

const props = defineProps<{ vue2?: boolean }>()
const { lang, isDark } = useData()
const english = computed(() => lang.value.startsWith('en'))
const text = computed(() =>
  english.value
    ? {
        component: 'Component',
        directive: 'Directive',
        api: 'API',
        run: 'Run',
        reset: 'Reset example',
        clear: 'Clear',
        preview: 'Preview',
        console: 'Console',
        editor: 'App.vue code editor',
        loading: 'Loading runtime…',
        running: 'Running…',
        ready: 'Ready',
        changed: 'Changes to run',
        error: 'Error',
        shortcut: 'Ctrl / ⌘ + Enter to run',
      }
    : {
        component: '组件',
        directive: '指令',
        api: 'API',
        run: '运行',
        reset: '重置示例',
        clear: '清空',
        preview: '预览',
        console: '控制台',
        editor: 'App.vue 代码编辑器',
        loading: '正在加载运行环境…',
        running: '运行中…',
        ready: '已就绪',
        changed: '有待运行的修改',
        error: '出错',
        shortcut: 'Ctrl / ⌘ + Enter 运行',
      },
)
const examples: Example[] = ['component', 'directive', 'api']
const kind = ref<Example>('component')
const drafts = new Map<Example, string>()
const editorElement = ref<HTMLElement>()
const frame = ref<HTMLIFrameElement>()
const documentSource = ref('')
const revision = ref(0)
const dirty = ref(false)
const busy = ref(false)
const status = ref<'loading' | 'running' | 'ready' | 'error'>('loading')
const logs = ref<{ level: string; text: string }[]>([])
const statusText = computed(() =>
  dirty.value ? text.value.changed : text.value[status.value],
)
let editor: EditorView | undefined
const editorTheme = new Compartment()
let runtime: Promise<Record<string, string>> | undefined
let generation = 0
let timeout: ReturnType<typeof setTimeout> | undefined

function loadRuntime() {
  return (runtime ??= loadViewerRuntime(!!props.vue2).catch((error) => {
    runtime = undefined
    throw error
  }))
}

async function run() {
  if (!editor) return
  const currentGeneration = ++generation
  const source = editor.state.doc.toString()
  drafts.set(kind.value, source)
  busy.value = true
  dirty.value = false
  logs.value = []
  clearTimeout(timeout)
  status.value = runtime ? 'running' : 'loading'
  try {
    const result = compile(source, !!props.vue2)
    const imports = await loadRuntime()
    if (currentGeneration !== generation) return
    documentSource.value = previewDocument(
      result,
      imports,
      !!props.vue2,
      english.value,
      { dark: isDark.value },
    )
    revision.value++
    status.value = 'running'
    timeout = setTimeout(() => {
      if (currentGeneration !== generation) return
      status.value = 'error'
      logs.value.push({
        level: 'error',
        text: english.value
          ? 'Preview did not start. Check the console for loading or execution errors.'
          : '预览未能启动，请检查控制台中的加载或执行错误。',
      })
    }, 15000)
  } catch (error) {
    if (currentGeneration !== generation) return
    status.value = 'error'
    logs.value.push({
      level: 'error',
      text: error instanceof Error ? error.message : String(error),
    })
  } finally {
    if (currentGeneration === generation) busy.value = false
  }
}

function replaceSource(source: string) {
  if (!editor) return
  editor.dispatch({
    changes: { from: 0, to: editor.state.doc.length, insert: source },
  })
}

function selectExample(next: Example) {
  if (next === kind.value) return
  if (editor) drafts.set(kind.value, editor.state.doc.toString())
  kind.value = next
  replaceSource(
    drafts.get(next) ?? sample(next, !!props.vue2, english.value, withBase),
  )
  void run()
}

function reset() {
  replaceSource(sample(kind.value, !!props.vue2, english.value, withBase))
  void run()
}

function receive(event: MessageEvent) {
  if (
    event.source !== frame.value?.contentWindow ||
    event.data?.source !== 'v-viewer-playground'
  )
    return
  const { level, text: message } = event.data
  if (
    !['ready', 'log', 'info', 'warn', 'error'].includes(level) ||
    typeof message !== 'string'
  )
    return
  if (level === 'ready') {
    syncTheme()
    clearTimeout(timeout)
    if (status.value !== 'error') status.value = 'ready'
    return
  }
  if (level === 'error') {
    status.value = 'error'
    clearTimeout(timeout)
  }
  logs.value = [
    ...logs.value.slice(-199),
    { level, text: message.slice(0, 4000) },
  ]
}

function shortcut(event: KeyboardEvent) {
  if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
    event.preventDefault()
    void run()
  }
}

onMounted(() => {
  const requestedExample = new URLSearchParams(window.location.search).get(
    'example',
  )
  if (examples.includes(requestedExample as Example))
    kind.value = requestedExample as Example
  window.addEventListener('message', receive)
  editor = new EditorView({
    parent: editorElement.value,
    doc: sample(kind.value, !!props.vue2, english.value, withBase),
    extensions: [
      basicSetup,
      editorTheme.of(isDark.value ? oneDark : []),
      html(),
      EditorView.lineWrapping,
      EditorView.contentAttributes.of({ 'aria-label': text.value.editor }),
      EditorView.updateListener.of((update) => {
        if (update.docChanged) dirty.value = true
      }),
      EditorView.theme({
        '&': {
          height: '100%',
          fontSize: '12px',
          backgroundColor: 'var(--vp-c-bg)',
        },
        '.cm-scroller': {
          overflow: 'auto',
          fontFamily: 'var(--vp-font-family-mono)',
          lineHeight: '1.8',
        },
        '.cm-content': { padding: '16px 0', caretColor: 'var(--vp-c-text-1)' },
        '.cm-line': { padding: '0 16px' },
        '.cm-gutters': {
          backgroundColor: 'var(--vp-c-bg-soft)',
          color: 'var(--vp-c-text-3)',
          borderRight: '1px solid var(--vp-c-divider)',
        },
        '&.cm-focused': { outline: 'none' },
        '.cm-activeLine, .cm-activeLineGutter': {
          backgroundColor: 'var(--vp-c-default-soft)',
        },
        '.cm-selectionBackground, &.cm-focused .cm-selectionBackground': {
          backgroundColor: 'var(--vp-c-brand-soft)',
        },
      }),
    ],
  })
  void run()
})

function syncTheme() {
  frame.value?.contentWindow?.postMessage(
    { source: 'v-viewer-preview-theme', dark: isDark.value },
    '*',
  )
}
watch(isDark, (dark) => {
  editor?.dispatch({ effects: editorTheme.reconfigure(dark ? oneDark : []) })
  syncTheme()
})

onBeforeUnmount(() => {
  generation++
  clearTimeout(timeout)
  window.removeEventListener('message', receive)
  editor?.destroy()
})
</script>

<template>
  <section
    class="viewer-playground"
    :class="{ 'playground-dark': isDark }"
    @keydown="shortcut"
  >
    <div class="playground-toolbar">
      <div
        class="playground-examples"
        role="group"
        :aria-label="english ? 'Example' : '示例'"
      >
        <button
          v-for="example in examples"
          :key="example"
          :aria-pressed="kind === example"
          @click="selectExample(example)"
        >
          {{ text[example] }}
        </button>
      </div>
      <div class="playground-actions">
        <button class="playground-reset" @click="reset">
          {{ text.reset }}
        </button>
        <button class="playground-run" :disabled="busy" @click="run">
          <span aria-hidden="true">▶</span> {{ text.run }}
        </button>
      </div>
    </div>
    <div class="playground-panes">
      <div class="playground-code">
        <div class="playground-pane-heading">
          <span>App.vue</span
          ><small>{{ props.vue2 ? 'Vue 2.7' : 'Vue 3' }}</small>
        </div>
        <div ref="editorElement" class="playground-editor"></div>
      </div>
      <div class="playground-output">
        <div class="playground-pane-heading">
          <span>{{ text.preview }}</span
          ><span
            role="status"
            class="playground-status"
            :data-status="status"
            >{{ statusText }}</span
          >
        </div>
        <iframe
          v-if="documentSource"
          :key="revision"
          ref="frame"
          :srcdoc="documentSource"
          :title="text.preview"
          sandbox="allow-scripts"
          allow="fullscreen *"
        ></iframe>
        <div v-else class="playground-placeholder">{{ statusText }}</div>
        <div class="playground-console-heading">
          <span
            >{{ text.console }} <small>{{ logs.length }}</small></span
          ><button @click="logs = []">{{ text.clear }}</button>
        </div>
        <div
          class="playground-console"
          role="log"
          :aria-label="text.console"
          aria-live="polite"
        >
          <pre
            v-for="(entry, index) in logs"
            :key="index"
            :class="`console-${entry.level}`"
          ><span>{{ entry.level }}</span>{{ entry.text }}</pre>
        </div>
      </div>
    </div>
    <div class="playground-footer">
      <span>{{ text.shortcut }}</span>
    </div>
  </section>
</template>

<style scoped>
.viewer-playground {
  margin: 24px 0;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  overflow: hidden;
  font-family: var(--vp-font-family-base);
}
.playground-toolbar,
.playground-actions,
.playground-examples {
  display: flex;
  align-items: center;
  gap: 8px;
}
.playground-toolbar {
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 12px;
  background: var(--vp-c-bg-soft);
  border-bottom: 1px solid var(--vp-c-divider);
}
.playground-toolbar button {
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 13px;
  line-height: 24px;
  cursor: pointer;
}
.playground-examples button {
  color: var(--vp-c-text-2);
}
.playground-examples button[aria-pressed='true'] {
  background: var(--vp-c-bg);
  box-shadow: 0 1px 4px #0001;
  color: var(--vp-c-brand-1);
  font-weight: 600;
}
.playground-reset {
  color: var(--vp-c-text-2);
}
.playground-toolbar .playground-run {
  background: var(--vp-button-brand-bg);
  color: var(--vp-button-brand-text);
  min-width: 80px;
}
.playground-run span {
  font-size: 12px;
  margin-right: 4px;
}
.playground-run:disabled {
  opacity: 0.5;
  cursor: wait;
}
.viewer-playground button:hover {
  filter: brightness(0.94);
}
.viewer-playground button:focus-visible {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: 2px;
}
.playground-panes {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
}
.playground-code {
  min-width: 0;
  border-right: 1px solid var(--vp-c-divider);
}
.playground-pane-heading,
.playground-console-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  padding: 0 16px;
  border-bottom: 1px solid var(--vp-c-divider);
  font-size: 12px;
  font-weight: 600;
}
.playground-pane-heading small,
.playground-status {
  color: var(--vp-c-text-3);
  font-size: 12px;
  font-weight: 400;
}
.playground-status[data-status='error'] {
  color: var(--vp-c-danger-1);
}
.playground-editor {
  height: 600px;
}
.playground-output {
  min-width: 0;
  display: flex;
  flex-direction: column;
}
.playground-output iframe,
.playground-placeholder {
  width: 100%;
  height: 400px;
  border: 0;
  background: #101820;
  color: #a4b5c8;
}
.playground-placeholder {
  display: grid;
  place-content: center;
  font-size: 13px;
}
.playground-console-heading {
  flex-shrink: 0;
  border-top: 1px solid var(--vp-c-divider);
}
.playground-console-heading small {
  margin-left: 6px;
  color: var(--vp-c-text-3);
}
.playground-console-heading button {
  font-size: 12px;
  color: var(--vp-c-text-2);
  cursor: pointer;
}
.playground-console {
  height: 160px;
  overflow: auto;
  background: var(--vp-c-bg-soft);
  font-size: 12px;
}
.playground-console pre {
  margin: 0;
  padding: 8px 12px;
  background: transparent;
  border-radius: 0;
  white-space: pre-wrap;
  overflow-wrap: anywhere;
  font: 12px/1.7 var(--vp-font-family-mono);
  border-bottom: 1px solid var(--vp-c-divider);
}
.playground-console pre span {
  display: inline-block;
  width: 44px;
  color: var(--vp-c-text-3);
}
.playground-console .console-error {
  color: var(--vp-c-danger-1);
}
.playground-console .console-warn {
  color: var(--vp-c-warning-1);
}
.playground-footer {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  border-top: 1px solid var(--vp-c-divider);
  padding: 8px 16px;
  font: 12px/1.6 var(--vp-font-family-mono);
  color: var(--vp-c-text-3);
}
.playground-dark :deep(.cm-content) {
  color: #d6deeb;
}
@media (max-width: 1100px) {
  .playground-panes {
    grid-template-columns: minmax(0, 1fr);
  }
  .playground-editor {
    height: 420px;
  }
  .playground-code {
    border-right: 0;
    border-bottom: 1px solid var(--vp-c-divider);
  }
}
@media (max-width: 480px) {
  .playground-toolbar {
    gap: 12px;
  }
  .playground-examples,
  .playground-actions {
    width: 100%;
    justify-content: space-between;
  }
}
</style>
