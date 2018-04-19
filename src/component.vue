<template>
  <div>
    <slot :images="images" :options="options">
    </slot>
  </div>
</template>
<script>
import Viewer from 'viewerjs'

export default {
  props: {
    images: {
      type: Array
    },
    trigger: {},
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
      this.$viewer && this.$viewer.destroy()
      this.$viewer = new Viewer(this.$el, this.options)
      this.$emit('inited', this.$viewer)
    }
  },

  watch: {
    images () {
      this.$nextTick(() => {
        this.createViewer()
      })
    },
    trigger: {
      handler: function () {
        this.$nextTick(() => {
          this.createViewer()
        })
      },
      deep: true
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
