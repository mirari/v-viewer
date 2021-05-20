<template>
  <div>
    <div class="">
      <p>
        Click the button to use api preview. Only available in modal mode.
      </p>
      <div class="control">
        <button type="button" class="button" @click="previewLink">
          Use image link preview
        </button>
        <p>
          Demo Data：['1.png', '2.png']
        </p>
      </div>
      <div class="control">
        <button type="button" class="button" @click="previewAttribute">
          Use image attribute preview
        </button>
        <p>
          Demo Data：[{'src':'thumbnail.png', 'data-source':'source.png'}, {'src':'thumbnail.png', 'data-source':'source.png'}]
        </p>
      </div>
      <br>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
} from 'vue'
import VueViewer, { viewer } from '../../../src'

VueViewer.setDefaults({
  zIndexInline: 2017,
})

const sourceImagesLink: string[] = []
const sourceImagesAttribute: object[] = []
const base = Math.floor(Math.random() * 60) + 10
for (let i = 0; i < 10; i++) {
  sourceImagesLink.push(`https://picsum.photos/id/${base + i}/1440/900`)
  sourceImagesAttribute.push({
    'src': `https://picsum.photos/id/${base + i}/1440/900`,
    'data-source': `https://picsum.photos/id/${base + i}/346/216`,
  })
}

export default defineComponent({
  name: 'ViewerExample',
  setup() {
    function previewLink() {
      const $viewer = viewer({
        options: {},
        images: sourceImagesLink,
      })
      console.log($viewer)

      // setTimeout(() => {
      //   $viewer.destroy()
      // }, 10000)
    }

    function previewAttribute() {
      const $viewer = viewer({
        options: {
          toolbar: true,
          url: 'data-source',
          initialViewIndex: 2,
        },
        images: sourceImagesAttribute,
      })
      console.log($viewer)

      // setTimeout(() => {
      //   $viewer.destroy()
      // }, 10000)
    }

    return {
      previewLink,
      previewAttribute,
    }
  },
})
</script>

<style lang="scss" scoped>
  p {
    margin: 2em 0;
  }
</style>
