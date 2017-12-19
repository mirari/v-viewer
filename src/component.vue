<template>
  <div>
    <slot :images="images" :options="options">
    </slot>
  </div>
</template>
<script>
import Viewer from 'viewerjs'
import 'viewerjs/dist/viewer.css'
import {extend} from './utils'

const defaults = {
  zIndex: 100000000
}
export default {
  props: {
    images: {
      type: Array,
      required: true
    },
    options: {
      type: Object
    }
  },

  data () {
    return {
    }
  },

  computed: {
  },

  methods: {
    createViewer () {
      const options = extend(true, {}, defaults, this.options)
      this.$viewer && this.$viewer.destroy()
      this.$viewer = new Viewer(this.$el, options)
      this.$emit('inited', this.$viewer)
    }
  },

  watch: {
    images () {
      this.$nextTick(() => {
        this.createViewer()
      })
    },
    options: {
      handler: function () {
        this.$nextTick(() => {
          this.createViewer()
        })
      },
      deep: true
    }
  },

  mounted () {
    this.createViewer()
  },

  destroyed () {
    this.$viewer && this.$viewer.destroy()
  }
}
</script>
