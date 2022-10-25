<script lang="ts">
import {
  defineComponent,
  nextTick,
  onMounted,
  onUnmounted,
  ref,
  watch,
} from 'vue'
import Viewer from 'viewerjs'
import type { PropType } from 'vue'

export default defineComponent({
  name: 'Viewer',
  props: {
    images: {
      type: Array,
      default: () => [],
    },
    rebuild: {
      type: Boolean,
      default: false,
    },
    trigger: {
      type: Object,
      default: null,
    },
    options: {
      type: Object as PropType<Viewer.Options>,
      default: () => null,
    },
  },
  emits: ['inited'],
  setup(props, { emit }) {
    let $viewer: Viewer
    const root = ref()

    // create、destroy
    function createViewer() {
      $viewer = new Viewer(root.value, props.options)
      emit('inited', $viewer)
    }
    function destroyViewer() {
      $viewer && $viewer.destroy()
    }
    function rebuildViewer() {
      destroyViewer()
      createViewer()
    }

    // create、update
    function updateViewer() {
      if ($viewer) {
        $viewer.update()
        emit('inited', $viewer)
      }
      else {
        createViewer()
      }
    }
    function changeViewer() {
      if (props.rebuild) {
        rebuildViewer()
      }
      else {
        updateViewer()
      }
    }

    // watch effect
    const options = { deep: true }
    watch(() => props.images, () => {
      nextTick(() => {
        changeViewer()
      })
    }, options)
    watch(() => props.trigger, () => {
      nextTick(() => {
        changeViewer()
      })
    }, options)
    watch(() => props.options, () => {
      nextTick(() => {
        rebuildViewer()
      })
    }, options)

    // lifecycle hooks
    onMounted(() => createViewer())
    onUnmounted(() => destroyViewer())

    return {
      root,
      createViewer,
      rebuildViewer,
      updateViewer,
      destroyViewer,
    }
  },
})
</script>

<template>
  <div ref="root">
    <slot
      :images="images"
      :options="options"
    />
  </div>
</template>
