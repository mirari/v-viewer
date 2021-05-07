<template>
  <div>
    <div class="field is-grouped is-grouped-multiline">
      <p class="control">
        <button
          type="button"
          class="button"
          @click="add"
          :disabled="images.length===10"
        >
          Add
        </button>
      </p>
      <p class="control">
        <button
          type="button"
          class="button"
          @click="remove"
          :disabled="images.length===0"
        >
          Remove
        </button>
      </p>
      <p class="control">
        <button
          type="button"
          class="button"
          @click="show"
        >
          Show
        </button>
      </p>
      <div class="field has-addons">
        <p class="control">
          <button
            type="button"
            class="button is-primary"
            @click="toggleToolbar(true)"
            :class="{' is-active': options.toolbar}"
          >
            Show Toolbar
          </button>
        </p>
        <p class="control">
          <button
            type="button"
            class="button is-primary"
            @click="toggleToolbar(false)"
            :class="{' is-active': !options.toolbar}"
          >
            Hide Toolbar
          </button>
        </p>
      </div>
    </div>
    <p>
      To show the viewer, you can click these images too.
    </p>
    <div
      v-viewer="options"
      class="images clearfix"
    >
      <template v-for="{source, thumbnail} in images">
        <img
          :src="thumbnail"
          :data-source="source"
          class="image"
          :key="source"
          :alt="source.split('?image=').pop()"
        >
      </template>
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
    zIndex: 9999,
  },
})

const sourceImages = []
const base = parseInt((Math.random() * 60), 10) + 10
for (let i = 0; i < 10; i++) {
  sourceImages.push({
    thumbnail: `https://picsum.photos/id/${base + i}/346/216`,
    source: `https://picsum.photos/id/${base + i}/1440/900`,
  })
}

export default {

  data () {
    return {
      options: {
        toolbar: true,
        url: 'data-source',
      },
      images: [...sourceImages].splice(0, 5),
    }
  },

  computed: {
  },

  methods: {
    toggleToolbar (toolbar) {
      // this.options = Object.assign({}, this.options, {toolbar})
      this.options.toolbar = toolbar
    },
    add () {
      this.images.push(sourceImages[this.images.length])
    },
    remove () {
      this.images.pop()
    },
    show () {
      const viewer = this.$el.querySelector('.images').$viewer
      viewer.show()
    },
  },
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  .image {
    width: calc(20% - 10px);
    cursor: pointer;
    margin: 5px;
    display: inline-block;
  }
</style>
