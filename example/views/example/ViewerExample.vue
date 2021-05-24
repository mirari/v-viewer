<template>
  <div>
    <div class="">
      <p>
        Click the button to use api preview. Only available in modal mode.
      </p>
      <div class="control">
        <button type="button" class="button" @click="previewLink">Use image link preview</button>
        <p>
          Demo Data：['1.png', '2.png']
        </p>
      </div>
      <div class="control">
        <button type="button" class="button" @click="previewAttribute">Use image attribute preview</button>
        <p>
          Demo Data：[{'src':'thumbnail.png', 'data-source':'source.png'}, {'src':'thumbnail.png', 'data-source':'source.png'}]
        </p>
      </div>
      <br>
    </div>
  </div>
</template>

<script>
import 'viewerjs/dist/viewer.css'
import Viewer from 'src'
import Vue from 'vue'
Vue.use(Viewer, {
  debug: true,
  defaultOptions: {
    zIndex: 9999
  }
})

const sourceImagesLink = []
const sourceImagesAttribute = []
const base = parseInt((Math.random() * 60), 10) + 10
for (let i = 0; i < 10; i++) {
  sourceImagesLink.push(`https://picsum.photos/id/${base + i}/1440/900`)
  sourceImagesAttribute.push({
    'src': `https://picsum.photos/id/${base + i}/1440/900`,
    'data-source': `https://picsum.photos/id/${base + i}/346/216`
  })
}

export default {

  data () {
    return {
      sourceImagesLink: sourceImagesLink,
      sourceImagesAttribute: sourceImagesAttribute
    }
  },

  computed: {
  },

  methods: {
    previewLink () {
      const $viewer = this.$viewer({
        options: {},
        images: this.sourceImagesLink
      })
      console.log($viewer)

      // setTimeout(() => {
      //   $viewer.destroy()
      // }, 10000)
    },
    previewAttribute () {
      const $viewer = this.$viewer({
        options: {
          toolbar: true,
          url: 'data-source',
          initialViewIndex: 2
        },
        images: this.sourceImagesAttribute
      })
      console.log($viewer)

      // setTimeout(() => {
      //   $viewer.destroy()
      // }, 10000)
    }
  }
}
</script>

<style lang="scss" scoped>
p {
  margin: 2em 0;
}
</style>
