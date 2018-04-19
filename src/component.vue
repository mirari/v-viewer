<template>
  <div>
    <slot :options="options">
    </slot>
  </div>
</template>
<script>
import Viewer from 'viewerjs'

export default {
  props: {
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
