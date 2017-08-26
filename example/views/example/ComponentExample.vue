<template>
  <div>
    <div class="methods is-flex">
      <div class="field has-addons">
        <p class="control">
          <button type="button" class="button is-primary"
                  @click="toggleInline(false)"
                  :class="{' is-active': !options.inline}"
          >Modal</button>
        </p>
        <p class="control">
          <button type="button" class="button is-primary"
                  @click="toggleInline(true)"
                  :class="{' is-active': options.inline}"
          >Inline</button>
        </p>
      </div>
      <button type="button" class="button" @click="add" :disabled="images.length===9">Add</button>
      <button type="button" class="button" @click="remove" :disabled="images.length===1">Remove</button>
      <template v-if="options.inline">
        <div class="field has-addons" style="width: 110px">
          <div class="control">
            <span class="button is-static">View</span>
          </div>
          <div class="control">
            <input class="input" type="text" v-model.number="form.view" @keyup="view">
          </div>
        </div>
        <div class="field has-addons" style="width: 120px">
          <div class="control">
            <input class="input" type="text" v-model.number="form.zoom">
          </div>
          <div class="control">
            <span class="button" @click="zoom">Zoom</span>
          </div>
        </div>
        <div class="field has-addons" style="width: 140px">
          <div class="control">
            <input class="input" type="text" v-model.number="form.zoomTo">
          </div>
          <div class="control">
            <span class="button" @click="zoomTo">Zoom to</span>
          </div>
        </div>
        <div class="field has-addons" style="width: 120px">
          <div class="control">
            <input class="input" type="text" v-model.number="form.rotate">
          </div>
          <div class="control">
            <span class="button" @click="rotate">Rotate</span>
          </div>
        </div>
        <div class="field has-addons" style="width: 140px">
          <div class="control">
            <input class="input" type="text" v-model.number="form.rotateTo">
          </div>
          <div class="control">
            <span class="button" @click="rotateTo">Rotate to</span>
          </div>
        </div>
        <div class="field has-addons">
          <div class="control">
            <button type="button" class="button" @click="zoom(0.5)">Zoom In</button>
          </div>
          <div class="control">
            <button type="button" class="button" @click="zoom(-0.5)">Zoom Out</button>
          </div>
        </div>
        <div class="field has-addons">
          <div class="control">
            <button type="button" class="button" @click="rotate(-90)">Rotate Left</button>
          </div>
          <div class="control">
            <button type="button" class="button" @click="rotate(90)">Rotate Right</button>
          </div>
        </div>
        <div class="field has-addons">
          <div class="control">
            <button type="button" class="button" @click="scaleX()">Flip Horizontal</button>
          </div>
          <div class="control">
            <button type="button" class="button" @click="scaleY()">Flip Vertical</button>
          </div>
        </div>
        <div class="field has-addons">
          <div class="control">
            <button type="button" class="button" @click="move(-10, 0)">Left</button>
          </div>
          <div class="control">
            <button type="button" class="button" @click="move(10, 0)">Right</button>
          </div>
          <div class="control">
            <button type="button" class="button" @click="move(0, -10)">Up</button>
          </div>
          <div class="control">
            <button type="button" class="button" @click="move(0, 10)">Down</button>
          </div>
        </div>
        <div class="field has-addons">
          <div class="control">
            <button type="button" class="button" @click="prev">Prev</button>
          </div>
          <div class="control">
            <button type="button" class="button" @click="next">Next</button>
          </div>
          <div class="control">
            <button type="button" class="button" @click="play">Play</button>
          </div>
          <div class="control">
            <button type="button" class="button" @click="stop">Stop</button>
          </div>
        </div>
        <button type="button" class="button" @click="full">Full</button>
        <button type="button" class="button" @click="tooltip">Tooltip</button>
      </template>
      <template v-else>
        <button type="button" class="button" @click="show">Show</button>
      </template>
    </div>
    <div class="tile is-ancestor">
      <div class="tile is-2 is-vertical is-parent">
        <div class="tile is-child">
          <nav class="panel options-panel">
            <p class="panel-heading">
              Options
            </p>
            <div class="panel-block" v-for="item of toggleOptions" :key="item">
              <label class="checkbox">
                <input type="checkbox" name="button" v-model="options[item]"> {{item}}
              </label>
            </div>
          </nav>
        </div>
      </div>
      <div class="tile is-10 is-vertical is-parent">
        <div class="viewer-wrapper">
          <viewer :options="options" :images="images"
                  @inited="inited"
                  class="viewer" ref="viewer"
          >
            <template scope="scope">
              <figure class="images">
                <div class="image-wrapper" v-for="{source, thumbnail} in images" :key="source">
                  <img class="image"
                       :src="thumbnail" :data-source="source" :alt="source.split('/').pop()"
                  >
                </div>
              </figure>
            </template>
          </viewer>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Viewer from 'src'
import Vue from 'vue'
Vue.use(Viewer)
import img1 from './source/losglaciares_1920_1200_ss_01.jpg'
import img2 from './source/losglaciares_1920_1200_ss_02.jpg'
import img3 from './source/losglaciares_1920_1200_ss_03.jpg'
import img4 from './source/losglaciares_1920_1200_ss_04.jpg'
import img5 from './source/losglaciares_1920_1200_ss_05.jpg'
import img6 from './source/losglaciares_1920_1200_ss_06.jpg'
import img7 from './source/losglaciares_1920_1200_ss_07.jpg'
import img8 from './source/losglaciares_1920_1200_ss_08.jpg'
import img9 from './source/losglaciares_1920_1200_ss_09.jpg'
import img10 from './source/losglaciares_1920_1200_ss_10.jpg'

import thumbnail1 from './thumbnail/losglaciares_1920_1200_ss_01_thumbnail.jpg'
import thumbnail2 from './thumbnail/losglaciares_1920_1200_ss_02_thumbnail.jpg'
import thumbnail3 from './thumbnail/losglaciares_1920_1200_ss_03_thumbnail.jpg'
import thumbnail4 from './thumbnail/losglaciares_1920_1200_ss_04_thumbnail.jpg'
import thumbnail5 from './thumbnail/losglaciares_1920_1200_ss_05_thumbnail.jpg'
import thumbnail6 from './thumbnail/losglaciares_1920_1200_ss_06_thumbnail.jpg'
import thumbnail7 from './thumbnail/losglaciares_1920_1200_ss_07_thumbnail.jpg'
import thumbnail8 from './thumbnail/losglaciares_1920_1200_ss_08_thumbnail.jpg'
import thumbnail9 from './thumbnail/losglaciares_1920_1200_ss_09_thumbnail.jpg'
import thumbnail10 from './thumbnail/losglaciares_1920_1200_ss_10_thumbnail.jpg'

const sourceImages = [
  {
    thumbnail: thumbnail1,
    source: img1
  },
  {
    thumbnail: thumbnail2,
    source: img2
  },
  {
    thumbnail: thumbnail3,
    source: img3
  },
  {
    thumbnail: thumbnail4,
    source: img4
  },
  {
    thumbnail: thumbnail5,
    source: img5
  },
  {
    thumbnail: thumbnail6,
    source: img6
  },
  {
    thumbnail: thumbnail7,
    source: img7
  },
  {
    thumbnail: thumbnail8,
    source: img8
  },
  {
    thumbnail: thumbnail9,
    source: img9
  },
  {
    thumbnail: thumbnail10,
    source: img10
  }
]

export default {

  data () {
    return {
      form: {
        view: 2,
        zoom: -0.1,
        zoomTo: 0.8,
        rotate: 90,
        rotateTo: 180,
        scaleX: 1,
        scaleY: 1
      },
      toggleOptions: [
        'button',
        'navbar',
        'title',
        'toobar',
        'tooltip',
        'movable',
        'zoomable',
        'rotatable',
        'scalable',
        'transition',
        'fullscreen',
        'keyboard'
      ],
      options: {
        inline: true,
        button: true,
        navbar: true,
        title: true,
        toobar: true,
        tooltip: true,
        movable: true,
        zoomable: true,
        rotatable: true,
        scalable: true,
        transition: true,
        fullscreen: true,
        keyboard: true,
        url: 'data-source'
      },
      images: [...sourceImages].splice(0, 5)
    }
  },

  computed: {
  },

  methods: {
    inited (viewer) {
      this.$viewer = viewer
    },
    add () {
      this.images.push(sourceImages[this.images.length])
    },
    remove () {
      this.images.pop()
    },
    view () {
      if (this.form.view >= 0 && this.form.view < this.images.length) {
        this.$viewer.view(this.form.view)
      }
    },
    zoom (value) {
      this.$viewer.zoom(value || this.form.zoom)
    },
    zoomTo () {
      this.$viewer.zoomTo(this.form.zoomTo)
    },
    rotate (value) {
      this.$viewer.rotate(value || this.form.rotate)
    },
    rotateTo () {
      this.$viewer.rotateTo(this.form.rotateTo)
    },
    scaleX (value) {
      if (value) {
        this.$viewer.scaleX(value)
      } else {
        this.form.scaleX = -this.form.scaleX
        this.$viewer.scaleX(this.form.scaleX)
      }
    },
    scaleY (value) {
      if (value) {
        this.$viewer.scaleY(value)
      } else {
        this.form.scaleY = -this.form.scaleY
        this.$viewer.scaleY(this.form.scaleY)
      }
    },
    move (x, y) {
      this.$viewer.move(x, y)
    },
    prev () {
      this.$viewer.prev()
    },
    next () {
      this.$viewer.next()
    },
    play () {
      this.$viewer.play()
    },
    stop () {
      this.$viewer.stop()
    },
    show () {
      this.$viewer.show()
    },
    full () {
      this.$viewer.full()
    },
    tooltip () {
      this.$viewer.tooltip()
    },
    toggleInline (inline) {
      this.options.inline = inline
    }
  }
}
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
