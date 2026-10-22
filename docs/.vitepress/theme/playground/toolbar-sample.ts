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
    <Viewer :inline="inline" :min-height="320" :transition="false">
      <div v-show="!inline" class="gallery">
        <img v-for="(src, index) in images" :key="src" :src="src" :alt="'Landscape ' + (index + 1)" />
      </div>
      <template ${slot('toolbar-icon', '{ name }')}>
        <svg v-if="name === 'zoomIn'" width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
          <path d="M3 10h14M10 3v14" stroke="currentColor" stroke-width="2" />
        </svg>
      </template>
      <template v-if="custom" ${slot('toolbar', '{ zoom, rotate, reset }')}>
        <button class="viewer-slot-button" @click="zoom(0.1)">${english ? 'Zoom in' : '放大'}</button>
        <button class="viewer-slot-button" @click="rotate(90)">${english ? 'Rotate' : '旋转'}</button>
        <button class="viewer-slot-button" @click="reset()">${english ? 'Reset' : '重置'}</button>
      </template>
      <template ${slot('toolbar-append', '{ image, index }')}>
        <a v-if="image" class="viewer-slot-button" :href="image.src" :download="image.alt">${english ? 'Download image' : '下载图片'} {{ index + 1 }}</a>
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
.viewer-toolbar .viewer-slot-button { display: inline-flex; align-items: center; min-height: 28px; padding: 4px 10px; border: 1px solid #ffffff70; border-radius: 5px; background: #202127; color: #fff; font: 14px/1.4 'Segoe UI', 'Microsoft YaHei', sans-serif; text-decoration: none; cursor: pointer; }
.viewer-toolbar .viewer-slot-button:hover { background: #35654e; }
.viewer-toolbar .viewer-slot-button:focus-visible { outline: 2px solid #94c6a8; outline-offset: 2px; }
.viewer-toolbar .v-viewer-toolbar-append-slot { margin-left: 8px; }`
