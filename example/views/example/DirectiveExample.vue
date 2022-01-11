<template>
  <div>
    <div class="field is-grouped is-grouped-multiline">
      <p class="control">
        <button type="button" class="button" :disabled="images.length===10" @click="add">
          Add
        </button>
      </p>
      <p class="control">
        <button type="button" class="button" :disabled="images.length===0" @click="remove">
          Remove
        </button>
      </p>
      <p class="control">
        <button type="button" class="button" @click="show">
          Show
        </button>
      </p>
      <div class="field has-addons">
        <p class="control">
          <button
            type="button"
            class="button is-primary"
            :class="{' is-active': options.toolbar}"
            @click="toggleToolbar(true)"
          >
            Show Toolbar
          </button>
        </p>
        <p class="control">
          <button
            type="button"
            class="button is-primary"
            :class="{' is-active': !options.toolbar}"
            @click="toggleToolbar(false)"
          >
            Hide Toolbar
          </button>
        </p>
      </div>
    </div>
    <p>
      To show the viewer, you can click these images too.
    </p>
    <div v-viewer="options" class="images clearfix">
      <img
        v-for="{source, thumbnail} in images"
        :key="source"
        :src="thumbnail"
        :data-source="source"
        class="image"
        :alt="source.split('?image=').pop()"
      >
    </div>
  </div>
</template>

<script>
import { directive } from '../../../src'

const sourceImages = []
const base = Math.floor(Math.random() * 60) + 10
for (let i = 0; i < 10; i++) {
  sourceImages.push({
    thumbnail: `https://picsum.photos/id/${base + i}/346/216`,
    source: `https://picsum.photos/id/${base + i}/1440/900`,
  })
}

export default {
  directives: {
    viewer: directive({
      debug: true,
    }),
  },
  data() {
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
    toggleToolbar(toolbar) {
      // this.options = Object.assign({}, this.options, {toolbar})
      this.options.toolbar = toolbar
    },
    add() {
      this.images.push(sourceImages[this.images.length])
    },
    remove() {
      this.images.pop()
    },
    show() {
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
