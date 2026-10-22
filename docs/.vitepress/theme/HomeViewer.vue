<script setup lang="ts">
import { computed } from 'vue'
import { useData, withBase } from 'vitepress'
import { vViewer } from 'v-viewer'
import 'viewerjs/dist/viewer.css'

const { lang } = useData()
const english = computed(() => lang.value.startsWith('en'))
const images = ['/images/valley.jpg', '/images/river.jpg', '/images/ridge.jpg']
const options = { inline: true, button: false, title: false }
</script>

<template>
  <section
    class="home-demo vp-raw"
    :aria-label="english ? 'Image viewer' : '图片浏览'"
  >
    <div class="demo-card">
      <div v-viewer="options" class="home-gallery">
        <img
          v-for="src in images"
          :key="src"
          :src="withBase(src)"
          alt="Landscape"
          width="960"
          height="640"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.home-demo {
  max-width: 1280px;
  margin: 0 auto 32px;
  padding: 0 24px;
}
.demo-card {
  height: clamp(320px, 50vw, 520px);
  overflow: hidden;
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
}
.home-gallery {
  display: none;
}
@media (min-width: 640px) {
  .home-demo {
    padding: 0 48px;
  }
}
@media (min-width: 960px) {
  .home-demo {
    padding: 0 64px;
  }
}
</style>
