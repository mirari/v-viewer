import { sampleStyles } from './samples.ts'

export function toolbarSample(
  vue2: boolean,
  english: boolean,
  withBase = (path: string) => path,
) {
  const images = ['valley', 'river', 'ridge'].map((name) =>
    withBase(`/images/${name}.jpg`),
  )
  const script = vue2
    ? `import { Viewer } from 'v-viewer'
export default {
  components: { Viewer },
  data: () => ({ images: ${JSON.stringify(images)}, inline: true, custom: false }),
}`
    : `import { ref } from 'vue'
import { Viewer } from 'v-viewer'
const images = ${JSON.stringify(images)}
const inline = ref(true)
const custom = ref(false)`
  const slot = (name: string, scope: string) =>
    vue2 ? `slot="${name}" slot-scope="${scope}"` : `#${name}="${scope}"`
  return `<script${vue2 ? '' : ' setup'}>
${script}
</script>

<template>
  <main class="viewer-example toolbar-example">
    <div class="controls">
      <label><input v-model="inline" type="checkbox" /> ${english ? 'Inline mode' : '内嵌模式'}</label>
      <label><input v-model="custom" type="checkbox" /> ${english ? 'Replace the toolbar' : '替换整个工具栏'}</label>
    </div>
    <div class="toolbar-stage" :class="{ 'is-inline': inline }">
    <Viewer :inline="inline" :min-height="320">
      <div v-show="!inline" class="gallery">
        <img v-for="(src, index) in images" :key="src" :src="src" :alt="'Landscape ' + (index + 1)" />
      </div>
      <template v-if="custom" ${slot('toolbar', '{ zoom, rotate, reset }')}>
        <button type="button" class="viewer-slot-button viewer-custom-button" title="${english ? 'Zoom in' : '放大'}" aria-label="${english ? 'Zoom in' : '放大'}" @click="zoom(0.1)">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="10" cy="10" r="6.5" /><path d="m15 15 5.5 5.5M7 10h6m-3-3v6" /></svg>
        </button>
        <button type="button" class="viewer-slot-button viewer-custom-button" title="${english ? 'Rotate' : '旋转'}" aria-label="${english ? 'Rotate' : '旋转'}" @click="rotate(90)">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="11" width="9" height="9" rx="1.5" /><path d="M5 7a9 9 0 0 1 15 7m0-5v5h-5" /></svg>
        </button>
        <button type="button" class="viewer-slot-button viewer-custom-button" title="${english ? 'Reset' : '重置'}" aria-label="${english ? 'Reset' : '重置'}" @click="reset()">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5M8 12a4 4 0 1 0 1-2.6M8 7v3h3" /></svg>
        </button>
      </template>
      <template ${slot('toolbar-append', '{ image, index }')}>
        <a v-if="image" class="viewer-slot-button" :class="{ 'viewer-custom-button': custom }" :href="image.src" :download="image.alt" :title="'${english ? 'Download image' : '下载图片'} ' + (index + 1)" :aria-label="'${english ? 'Download image' : '下载图片'} ' + (index + 1)">
          <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M10 2v10m-4-4 4 4 4-4M3 12v5h14v-5" /></svg>
        </a>
      </template>
    </Viewer>
    </div>
  </main>
</template>

<style>
${sampleStyles}
${toolbarStyles}
</style>`
}

export const toolbarStyles = `.toolbar-example .controls { margin-bottom: 16px; font-size: 14px; }
.toolbar-example .toolbar-stage { position: relative; }
.toolbar-example .toolbar-stage.is-inline { min-height: 360px; }
.toolbar-example .controls label { display: inline-flex; gap: 6px; align-items: center; }
.viewer-toolbar .viewer-slot-button { display: inline-flex; align-items: center; justify-content: center; flex: 0 0 24px; width: 24px; height: 24px; padding: 0; border: 0; border-radius: 50%; background: rgba(0, 0, 0, .5); color: #fff; text-decoration: none; cursor: pointer; transition: background-color .15s; }
.viewer-toolbar .viewer-slot-button:hover, .viewer-toolbar .viewer-slot-button:focus-visible { background: rgba(0, 0, 0, .8); }
.viewer-toolbar .viewer-slot-button:focus-visible { outline: 2px solid #fff; outline-offset: 2px; }
.viewer-toolbar .viewer-slot-button svg { display: block; flex-shrink: 0; }
.viewer-toolbar .viewer-custom-button { flex-basis: 34px; width: 34px; height: 34px; border: 1px solid #94c6a880; border-radius: 8px; background: #162c25; color: #b8f0ce; box-shadow: 0 2px 6px #0003; }
.viewer-toolbar .viewer-custom-button:hover, .viewer-toolbar .viewer-custom-button:focus-visible { background: #28513e; border-color: #b8f0ce; }
.viewer-toolbar .viewer-custom-button:focus-visible { outline-color: #b8f0ce; }
.viewer-toolbar .v-viewer-toolbar-slot { padding: 6px 0; }`
