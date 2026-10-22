<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useData, withBase } from 'vitepress'
import 'viewerjs/dist/viewer.css'
import { moduleUrl } from './playground/compile'
import { sampleStyles, type Example } from './playground/samples'

const props = withDefaults(defineProps<{ vue2?: boolean; mode?: Example }>(), {
  mode: 'component',
})
const { lang } = useData()
const host = ref<HTMLDivElement>()
const ready = ref(false)
const error = ref('')
let disposed = false
let unmount: (() => void) | undefined
let style: HTMLStyleElement | undefined

onMounted(async () => {
  style = document.createElement('style')
  style.textContent = sampleStyles
  document.head.appendChild(style)
  try {
    const response = await fetch(
      withBase(`/playground/${props.vue2 ? 'vue2' : 'vue3'}/demos.js`),
    )
    if (!response.ok) throw new Error(`Unable to load demo: ${response.status}`)
    const source = await response.text()
    if (disposed) return
    const { mount } = await import(/* @vite-ignore */ moduleUrl(source))
    if (disposed) return
    unmount = mount(host.value, props.mode, lang.value.startsWith('en'))
    ready.value = true
  } catch (reason) {
    if (!disposed) error.value = String(reason)
  }
})
onBeforeUnmount(() => {
  disposed = true
  unmount?.()
  style?.remove()
})
</script>

<template>
  <div class="viewer-demo vp-raw">
    <p v-if="error" role="alert">{{ error }}</p>
    <div v-else-if="!ready" class="loading" role="status">
      {{ lang.startsWith('en') ? 'Loading gallery…' : '正在加载图库…' }}
    </div>
    <div ref="host" class="demo-host"></div>
  </div>
</template>

<style scoped>
.viewer-demo {
  width: 100%;
  box-sizing: border-box;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  margin: 24px 0;
}
.demo-host {
  border-radius: inherit;
}
.loading {
  min-height: 200px;
  display: grid;
  place-items: center;
}
</style>
