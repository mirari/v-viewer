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
    rebuild: {
      type: Boolean,
      default: false
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
    onChange () {
      if (this.rebuild) {
        this.rebuildViewer()
      } else {
        this.updateViewer()
      }
    },
    rebuildViewer () {
      this.destroyViewer()
      this.createViewer()
    },
    updateViewer () {
      if (this.$viewer) {
        this.$viewer.update()
      } else {
        this.createViewer()
      }
    },
    destroyViewer () {
      this.$viewer && this.$viewer.destroy()
    },
    createViewer () {
      this.$viewer = new Viewer(this.$el, this.options)
      this.$emit('inited', this.$viewer)
    }
  },

  watch: {
    images () {
      this.$nextTick(() => {
        this.onChange()
      })
    },
    trigger: {
      handler () {
        this.$nextTick(() => {
          this.onChange()
        })
      },
      deep: true
    },
    options: {
      handler () {
        this.$nextTick(() => {
          this.rebuildViewer()
        })
      },
      deep: true
    }
  },

  mounted () {
    this.createViewer()
  },

  destroyed () {
    this.destroyViewer()
  }
}
</script>
