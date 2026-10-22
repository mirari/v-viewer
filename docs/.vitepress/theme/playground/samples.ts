import { defaultImageCount, sampleImages } from '../sample-images.ts'

export type Example = 'component' | 'directive' | 'api'

export function sample(
  kind: Example,
  vue2: boolean,
  english: boolean,
  withBase = (path: string) => path,
) {
  // Use absolute URLs inside the opaque-origin preview frame.
  const base = typeof location === 'undefined' ? '' : location.origin
  const images = sampleImages.map((path) => base + withBase(path))
  const sourceImages = `const sourceImages = ${JSON.stringify(images, null, 2)}`
  const add = english ? 'Add image' : '添加图片'
  const remove = english ? 'Remove image' : '删除图片'
  const showLabel = english ? 'Show viewer' : '显示viewer'
  const toolbar = english ? 'Toggle toolbar' : '切换工具栏'
  const toolbarValue = kind === 'component' ? 'toolbar' : 'options.toolbar'
  let script: string
  let gallery: string
  const imageTemplate =
    '<img v-for="(src, index) in images" :key="src" :src="src" :alt="`Landscape ${index + 1}`" />'
  if (vue2) {
    const show =
      kind === 'api'
        ? 'this.viewerInstance?.destroy(); this.viewerInstance = this.$viewerApi({ images: this.images, options: this.options })'
        : kind === 'component'
          ? 'this.$refs.gallery.show()'
          : 'this.$refs.gallery.$viewer.show()'
    script = `import Vue from 'vue'
import VueViewer from 'v-viewer'
Vue.use(VueViewer)
${sourceImages}
export default {
  data() {
    return { sourceImages, images: sourceImages.slice(0, ${defaultImageCount}), ${kind === 'component' ? 'toolbar: true' : 'options: { toolbar: true }'} }
  },
  ${kind === 'api' ? 'beforeDestroy() { this.viewerInstance?.destroy() },' : ''}
  methods: {
    add() { this.images.push(this.sourceImages[this.images.length]) },
    remove() { this.images.pop() },
    show() { ${show} },
    ${kind === 'component' ? 'onViewed(event) { console.log(event.detail.index) },' : ''}
  },
}`
    gallery =
      kind === 'component'
        ? `<viewer ref="gallery" :toolbar="toolbar" @viewed="onViewed" class="gallery">${imageTemplate}</viewer>`
        : kind === 'directive'
          ? `<div ref="gallery" v-viewer="options" class="gallery">${imageTemplate}</div>`
          : ''
  } else {
    const imports =
      kind === 'component'
        ? 'Viewer'
        : kind === 'directive'
          ? 'vViewer'
          : 'useViewer'
    const show =
      kind === 'api'
        ? 'const { show, isShown } = useViewer({ images, options })'
        : `const gallery = ref(null)
function show() { gallery.value.${kind === 'component' ? '' : '$viewer.'}show() }`
    script = `import { ref } from 'vue'
import { ${imports} } from 'v-viewer'
${sourceImages}
const images = ref(sourceImages.slice(0, ${defaultImageCount}))
${kind === 'component' ? 'const toolbar = ref(true)\nfunction onViewed(event) { console.log(event.detail.index) }' : 'const options = ref({ toolbar: true })'}
${show}
function add() { images.value.push(sourceImages[images.value.length]) }
function remove() { images.value.pop() }`
    gallery =
      kind === 'component'
        ? `<Viewer ref="gallery" :toolbar="toolbar" @viewed="onViewed" class="gallery">${imageTemplate}</Viewer>`
        : kind === 'directive'
          ? `<div ref="gallery" v-viewer="options" class="gallery">${imageTemplate}</div>`
          : `<p>{{ isShown ? '${english ? 'Gallery open' : '正在预览'}' : '${english ? 'Ready to explore' : '等待预览'}' }}</p>`
  }
  if (kind === 'api')
    gallery = `<p>${english ? 'Images: {{ images.length }}' : '图片数量：{{ images.length }}'}</p>${gallery}`
  return `<script${vue2 ? '' : ' setup'}>
${script}
</script>

<template>
  <main class="viewer-example">
    <div class="controls">
      <button :disabled="images.length === sourceImages.length" @click="add">${add}</button>
      <button :disabled="images.length === 0" @click="remove">${remove}</button>
      <button class="open" :disabled="images.length === 0" @click="show()">${showLabel}</button>
      <div class="toolbar" role="group" aria-label="${toolbar}">
        <span>${toolbar}</span>
        <button :aria-pressed="${toolbarValue} ? 'true' : 'false'" @click="${toolbarValue} = true">${english ? 'On' : '开启'}</button>
        <button :aria-pressed="${toolbarValue} ? 'false' : 'true'" @click="${toolbarValue} = false">${english ? 'Off' : '关闭'}</button>
      </div>
    </div>
    ${gallery}
  </main>
</template>

<style>
${sampleStyles}
</style>`
}

export const sampleStyles = `.viewer-example { --demo-bg: #f6f6f7; --demo-text: #3c3c43; --demo-border: #c2c2c4; --demo-hover: #e0f3ef; --demo-accent: #007f6d; --demo-on-accent: #fff; }
.dark .viewer-example { --demo-bg: #202127; --demo-text: #dfdfe5; --demo-border: #51515c; --demo-hover: #233d39; --demo-accent: #00d1b2; --demo-on-accent: #073b33; }
.viewer-example { background: var(--demo-bg); color: var(--demo-text); font-family: 'Segoe UI', 'Microsoft YaHei', 'PingFang SC', 'Noto Sans CJK SC', sans-serif; }
.viewer-example { padding: 28px; box-sizing: border-box; border-radius: inherit; }
.viewer-example p { font-size: 14px; line-height: 1.8; }
.viewer-example .controls { display: flex; flex-wrap: wrap; gap: 8px; }
.viewer-example .toolbar { display: flex; align-items: center; margin-left: auto; font-size: 14px; }
.viewer-example .toolbar > span { margin-right: 8px; }
.viewer-example .toolbar button { border-radius: 4px 0 0 4px; }
.viewer-example .toolbar button + button { border-radius: 0 4px 4px 0; margin-left: -1px; }
.viewer-example .toolbar button[aria-pressed="true"] { background: var(--demo-accent); border-color: var(--demo-accent); color: var(--demo-on-accent); }
.viewer-example .gallery { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin: 24px 0 0; }
.viewer-example .gallery img { width: 100%; height: clamp(110px, 24vw, 180px); object-fit: cover; cursor: zoom-in; border-radius: 3px; }
.viewer-example button { font: inherit; font-size: 14px; cursor: pointer; border: 1px solid var(--demo-border); border-radius: 4px; padding: 8px 12px; background: transparent; color: inherit; }
.viewer-example button:hover { background: var(--demo-hover); }
.viewer-example button.open { background: var(--demo-accent); color: var(--demo-on-accent); }
.viewer-example button:disabled { opacity: .45; cursor: not-allowed; }
.viewer-example :focus-visible { outline: 2px solid var(--demo-accent); outline-offset: 3px; }`
