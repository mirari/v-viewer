<template>
  <div ref="root">
    <slot
      :images="images"
      :options="options"
    />
  </div>
</template>
<script lang="ts">
import {
  defineComponent,
  nextTick,
  onUnmounted,
  onMounted,
  PropType,
  ref,
  watch,
} from 'vue'
import Viewer from 'viewerjs'

export default defineComponent({
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

  setup (props, { emit }) {
    let $viewer:Viewer
    const root = ref()
    function onChange (): void {
      if (props.rebuild) {
        rebuildViewer()
      } else {
        updateViewer()
      }
    }
    function rebuildViewer (): void {
      destroyViewer()
      createViewer()
    }
    function updateViewer (): void {
      if ($viewer) {
        $viewer.update()
        emit('inited', $viewer)
      } else {
        createViewer()
      }
    }
    function destroyViewer (): void {
      $viewer && $viewer.destroy()
    }
    function createViewer (): void {
      $viewer = new Viewer(root.value, props.options)
      emit('inited', $viewer)
    }

    onMounted(() => {
      createViewer()
    })
    onUnmounted(() => {
      destroyViewer()
    })
    watch(
      () => props.images,
      async () => {
        nextTick(async () => {
          onChange()
        })
      },
      { deep: true },
    )
    watch(
      () => props.trigger,
      async () => {
        nextTick(async () => {
          onChange()
        })
      },
      { deep: true },
    )
    watch(
      () => props.options,
      async () => {
        nextTick(async () => {
          onChange()
        })
      },
      { deep: true },
    )
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
