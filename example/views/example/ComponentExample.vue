<template>
  <div>
    <div class="methods is-flex">
      <div class="field has-addons">
        <p class="control">
          <button
            type="button"
            class="button is-primary"
            @click="toggleInline(false)"
            :class="{' is-active': !options.inline}"
          >
            Modal
          </button>
        </p>
        <p class="control">
          <button
            type="button"
            class="button is-primary"
            @click="toggleInline(true)"
            :class="{' is-active': options.inline}"
          >
            Inline
          </button>
        </p>
      </div>
      <button
        type="button"
        class="button"
        @click="add"
        :disabled="images.length===9"
      >
        Add
      </button>
      <button
        type="button"
        class="button"
        @click="remove"
        :disabled="images.length===1"
      >
        Remove
      </button>
      <template v-if="options.inline">
        <div
          class="field has-addons"
          style="width: 110px"
        >
          <div class="control">
            <span class="button is-static">View</span>
          </div>
          <div class="control">
            <input
              class="input"
              type="text"
              v-model.number="form.view"
              @keyup="view"
            >
          </div>
        </div>
        <div
          class="field has-addons"
          style="width: 140px"
        >
          <div class="control">
            <input
              class="input"
              type="text"
              v-model.number="form.zoom"
            >
          </div>
          <div class="control">
            <span
              class="button"
              @click="zoom()"
            >Zoom</span>
          </div>
        </div>
        <div
          class="field has-addons"
          style="width: 140px"
        >
          <div class="control">
            <input
              class="input"
              type="text"
              v-model.number="form.zoomTo"
            >
          </div>
          <div class="control">
            <span
              class="button"
              @click="zoomTo"
            >Zoom to</span>
          </div>
        </div>
        <div
          class="field has-addons"
          style="width: 140px"
        >
          <div class="control">
            <input
              class="input"
              type="text"
              v-model.number="form.rotate"
            >
          </div>
          <div class="control">
            <span
              class="button"
              @click="rotate()"
            >Rotate</span>
          </div>
        </div>
        <div
          class="field has-addons"
          style="width: 160px"
        >
          <div class="control">
            <input
              class="input"
              type="text"
              v-model.number="form.rotateTo"
            >
          </div>
          <div class="control">
            <span
              class="button"
              @click="rotateTo"
            >Rotate to</span>
          </div>
        </div>
        <div class="field has-addons">
          <div class="control">
            <button
              type="button"
              class="button"
              @click="zoom(0.5)"
            >
              Zoom In
            </button>
          </div>
          <div class="control">
            <button
              type="button"
              class="button"
              @click="zoom(-0.5)"
            >
              Zoom Out
            </button>
          </div>
        </div>
        <div class="field has-addons">
          <div class="control">
            <button
              type="button"
              class="button"
              @click="rotate(-90)"
            >
              Rotate Left
            </button>
          </div>
          <div class="control">
            <button
              type="button"
              class="button"
              @click="rotate(90)"
            >
              Rotate Right
            </button>
          </div>
        </div>
        <div class="field has-addons">
          <div class="control">
            <button
              type="button"
              class="button"
              @click="scaleX()"
            >
              Flip Horizontal
            </button>
          </div>
          <div class="control">
            <button
              type="button"
              class="button"
              @click="scaleY()"
            >
              Flip Vertical
            </button>
          </div>
        </div>
        <div class="field has-addons">
          <div class="control">
            <button
              type="button"
              class="button"
              @click="move(-10, 0)"
            >
              Left
            </button>
          </div>
          <div class="control">
            <button
              type="button"
              class="button"
              @click="move(10, 0)"
            >
              Right
            </button>
          </div>
          <div class="control">
            <button
              type="button"
              class="button"
              @click="move(0, -10)"
            >
              Up
            </button>
          </div>
          <div class="control">
            <button
              type="button"
              class="button"
              @click="move(0, 10)"
            >
              Down
            </button>
          </div>
        </div>
        <div class="field has-addons">
          <div class="control">
            <button
              type="button"
              class="button"
              @click="prev"
            >
              Prev
            </button>
          </div>
          <div class="control">
            <button
              type="button"
              class="button"
              @click="next"
            >
              Next
            </button>
          </div>
          <div class="control">
            <button
              type="button"
              class="button"
              @click="play"
            >
              Play
            </button>
          </div>
          <div class="control">
            <button
              type="button"
              class="button"
              @click="stop"
            >
              Stop
            </button>
          </div>
        </div>
        <button
          type="button"
          class="button"
          @click="full"
        >
          Full
        </button>
        <button
          type="button"
          class="button"
          @click="tooltip"
        >
          Tooltip
        </button>
        <button
          type="button"
          class="button"
          @click="reset"
        >
          Reset
        </button>
      </template>
      <template v-else>
        <button
          type="button"
          class="button"
          @click="show"
        >
          Show
        </button>
      </template>
    </div>
    <div class="tile is-ancestor">
      <div class="tile is-2 is-vertical is-parent">
        <div class="tile is-child">
          <nav class="panel options-panel">
            <p class="panel-heading">
              Options
            </p>
            <div
              class="panel-block"
              v-for="item of toggleOptions"
              :key="item"
            >
              <label class="checkbox">
                <input
                  type="checkbox"
                  name="button"
                  v-model="options[item]"
                > {{ item }}
              </label>
            </div>
          </nav>
        </div>
      </div>
      <div class="tile is-10 is-vertical is-parent">
        <div class="viewer-wrapper">
          <viewer
            :options="options"
            :images="images"
            rebuild
            @inited="inited"
            class="viewer"
            ref="viewer"
          >
            <template #default="scope">
              <figure class="images">
                <div
                  class="image-wrapper"
                  v-for="{source, thumbnail} in scope.images"
                  :key="source"
                >
                  <img
                    class="image"
                    :src="thumbnail"
                    :data-source="source"
                    :alt="source.split('?image=').pop()"
                  >
                </div>
              </figure>
              <p><strong>Options: </strong>{{ scope.options }}</p>
            </template>
          </viewer>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import VueViewer, { Viewer } from '@/main'
import {
  defineComponent,
  toRefs,
  reactive,
} from 'vue'
// import { app } from '../../main'
// app.use(VueViewer)
VueViewer.setDefaults({
  zIndexInline: 2017,
})

class ImageData {
  thumbnail: string
  source: string

  constructor (source: string, thumbnail: string) {
    this.source = source
    this.thumbnail = thumbnail
  }
}

const sourceImages:ImageData[] = []
const base = Math.floor(Math.random() * 60) + 10
for (let i = 0; i < 10; i++) {
  const data = new ImageData(`https://picsum.photos/id/${base + i}/1440/900`, `https://picsum.photos/id/${base + i}/346/216`)
  sourceImages.push(data)
}

export default defineComponent({
  name: 'ComponentExample',
  setup () {
    let $viewer:Viewer

    const state = reactive({
      form: {
        view: 2,
        zoom: -0.1,
        zoomTo: 0.8,
        rotate: 90,
        rotateTo: 180,
        scaleX: 1,
        scaleY: 1,
      },
      toggleOptions: [
        'button',
        'navbar',
        'title',
        'toolbar',
        'tooltip',
        'movable',
        'zoomable',
        'rotatable',
        'scalable',
        'transition',
        'fullscreen',
        'keyboard',
      ],
      options: {
        inline: true,
        button: true,
        navbar: true,
        title: true,
        toolbar: true,
        tooltip: true,
        movable: true,
        zoomable: true,
        rotatable: true,
        scalable: true,
        transition: true,
        fullscreen: true,
        keyboard: true,
        url: 'data-source',
      },
      images: [...sourceImages].splice(0, 5),
    })

    function inited (viewer: Viewer) {
      $viewer = viewer
    }
    function add () {
      state.images.push(sourceImages[state.images.length])
    }
    function remove () {
      state.images.pop()
    }
    function view () {
      if (state.form.view >= 0 && state.form.view < state.images.length) {
        $viewer.view(state.form.view)
      }
    }
    function zoom (value:number) {
      $viewer.zoom(value || state.form.zoom)
    }
    function zoomTo () {
      $viewer.zoomTo(state.form.zoomTo)
    }
    function rotate (value:number) {
      $viewer.rotate(value || state.form.rotate)
    }
    function rotateTo () {
      $viewer.rotateTo(state.form.rotateTo)
    }
    function scaleX (value:number) {
      if (value) {
        $viewer.scaleX(value)
      } else {
        state.form.scaleX = -state.form.scaleX
        $viewer.scaleX(state.form.scaleX)
      }
    }
    function scaleY (value:number) {
      if (value) {
        $viewer.scaleY(value)
      } else {
        state.form.scaleY = -state.form.scaleY
        $viewer.scaleY(state.form.scaleY)
      }
    }
    function move (x:number, y:number) {
      $viewer.move(x, y)
    }
    function prev () {
      $viewer.prev()
    }
    function next () {
      $viewer.next()
    }
    function play () {
      $viewer.play()
    }
    function stop () {
      $viewer.stop()
    }
    function show () {
      $viewer.show()
    }
    function full () {
      $viewer.full()
    }
    function tooltip () {
      $viewer.tooltip()
    }
    function reset () {
      $viewer.reset()
    }
    function toggleInline (inline: boolean) {
      state.options.inline = inline
    }

    return {
      ...toRefs(state),
      inited,
      add,
      remove,
      view,
      zoom,
      zoomTo,
      rotate,
      rotateTo,
      scaleX,
      scaleY,
      move,
      prev,
      next,
      play,
      stop,
      show,
      full,
      tooltip,
      reset,
      toggleInline,
    }
  },

  methods: {

  },
})
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  .viewer-wrapper {
    position: relative;
    background: #333;
    height: 100%;
  }

  .methods {
    margin-bottom: 1em;
    flex-wrap: wrap;

    & > * {
      margin-right: 0.75rem;
    }
  }

  .options-panel {
    .panel-block {
      padding: 0;

      .checkbox {
        display: block;
        width: 100%;
        margin: 0;
        padding: 0.5em 0.75em;
      }
    }
  }

  .viewer {
    height: 100%;

    .images {
      height: 100%;
      display: flex;
      justify-content: center;
      align-content: center;
      align-items: center;
      flex-wrap: wrap;
      padding: 5px;

      .image-wrapper {
        display: inline-block;
        width: calc(33% - 20px);
        margin: 5px 5px 0 5px;

        .image {
          width: 100%;
          cursor: pointer;
          display: inline-block;
        }
      }
    }
  }
</style>
