<template>
  <div>
    <div class="field is-grouped is-grouped-multiline">
      <p class="control">
        <button type="button" class="button" @click="add" :disabled="images.length===10">Add</button>
      </p>
      <p class="control">
        <button type="button" class="button" @click="remove" :disabled="images.length===0">Remove</button>
      </p>
      <p class="control">
        <button type="button" class="button" @click="show">Show</button>
      </p>
    </div>
    <p>
      To show the viewer, you can click these images too.
    </p>
    <div v-viewer="options" class="images clearfix">
      <template v-for="{source, thumbnail} in images">
        <img :src="thumbnail" :data-source="source" class="image" :key="source" :alt="source.split('/').pop()">
      </template>
    </div>
  </div>
</template>

<script>
import Viewer from 'src'
import Vue from 'vue'
Vue.use(Viewer, {
  defaultOptions: {
    zIndex: 9999
  }
})
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
      options: {
        url: 'data-source'
      },
      images: [...sourceImages].splice(0, 5)
    }
  },

  computed: {
  },

  methods: {
    add () {
      this.images.push(sourceImages[this.images.length])
    },
    remove () {
      this.images.pop()
    },
    show () {
      const viewer = this.$el.querySelector('.images').$viewer
      viewer.show()
    }
  }
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
