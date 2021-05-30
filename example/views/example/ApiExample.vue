<template>
  <div>
    <p>
      Click to show the gallery without rendering the images yourself. <strong>Only available in modal mode.</strong>
    </p>
    <div class="control">
      <button type="button" class="button" @click="previewURL">
        URL Array
      </button>
      <p>
        ['1.png', '2.png']
      </p>
    </div>
    <div class="control">
      <button type="button" class="button" @click="previewImgObject">
        Img-Object Array
      </button>
      <p>
        [{'src':'thumbnail.png', 'data-source':'source.png'}, {'src':'thumbnail.png', 'data-source':'source.png'}]
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
} from 'vue'
import VueViewer, { viewerApi } from '../../../src'

VueViewer.setDefaults({
  zIndexInline: 2017,
})

const sourceImageURLs = []
const sourceImageObjects = []
const base = Math.floor(Math.random() * 60) + 10
for (let i = 0; i < 5; i++) {
  sourceImageURLs.push(`https://picsum.photos/id/${base + i}/1440/900`)
  sourceImageObjects.push({
    'data-source': `https://picsum.photos/id/${base + i}/1440/900`,
    'src': `https://picsum.photos/id/${base + i}/346/216`,
    'alt': `Image: ${base + i}`,
  })
}

export default defineComponent({
  name: 'ViewerExample',
  setup() {
    function previewURL() {
      const $viewer = viewerApi({
        images: sourceImageURLs,
      })
      console.log($viewer)
    }

    function previewImgObject() {
      const $viewer = viewerApi({
        options: {
          toolbar: true,
          url: 'data-source',
          initialViewIndex: 2,
        },
        images: sourceImageObjects,
      })
      console.log($viewer)
    }

    return {
      previewURL,
      previewImgObject,
    }
  },
})
</script>

<style lang="scss" scoped>
  p {
    margin: 2em 0;
  }
</style>
