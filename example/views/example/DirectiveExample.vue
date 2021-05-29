<template>
  <div>
    <div class="field is-grouped is-grouped-multiline">
      <p class="control">
        <button
          type="button"
          class="button"
          :disabled="images.length===10"
          @click="add"
        >
          Add
        </button>
      </p>
      <p class="control">
        <button
          type="button"
          class="button"
          :disabled="images.length===0"
          @click="remove"
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
    <div
      ref="el"
      v-viewer="options"
      class="images clearfix"
    >
      <template v-for="{source, thumbnail, title} in images" :key="source">
        <img
          class="image"
          :src="thumbnail"
          :data-source="source"
          :alt="title"
        >
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  toRefs,
  reactive,
  ref,
} from 'vue'
import VueViewer, { ViewerJs } from '../../../src'

VueViewer.setDefaults({
  zIndexInline: 2017,
})

class ImageData {
  thumbnail: string
  source: string
  title: string

  constructor(source: string, thumbnail: string, title: string) {
    this.source = source
    this.thumbnail = thumbnail
    this.title = title
  }
}

const sourceImages: ImageData[] = []
const base = Math.floor(Math.random() * 60) + 10
for (let i = 0; i < 10; i++) {
  const data = new ImageData(`https://picsum.photos/id/${base + i}/1440/900`, `https://picsum.photos/id/${base + i}/346/216`, `Image: ${base + i}`)
  sourceImages.push(data)
}

export default defineComponent({
  name: 'DirectiveExample',
  setup() {
    const el = ref<HTMLElement | null>(null)
    const state = reactive({
      options: {
        toolbar: true,
        url: 'data-source',
      },
      images: [...sourceImages].splice(0, 5),
    })

    function toggleToolbar(toolbar: boolean) {
      state.options.toolbar = toolbar
    }

    function add() {
      state.images.push(sourceImages[state.images.length])
    }

    function remove() {
      state.images.pop()
    }

    function show() {
      el.value && el.value.$viewer.show()
    }

    return {
      ...toRefs(state),
      el,
      add,
      remove,
      stop,
      show,
      toggleToolbar,
    }
  },
})
</script>

<style lang="scss" scoped>
  .image {
    width: calc(20% - 10px);
    cursor: pointer;
    margin: 5px;
    display: inline-block;
  }
</style>
