import {
  h,
  ref,
  watch,
  nextTick,
  onMounted,
  onUnmounted,
  defineComponent,
} from 'vue'
import Viewer from 'viewerjs'
import type { PropType } from 'vue'

export default defineComponent({
  props: {
    tag: {
      type: String,
      default: 'div',
    },
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
    watch(
      () => props.images,
      () => nextTick(() => changeViewer()),
      { deep: true },
    )
    watch(
      () => props.trigger,
      () => nextTick(() => changeViewer()),
      { deep: true },
    )
    watch(
      () => props.options,
      () => nextTick(() => changeViewer()),
      { deep: true },
    )

    // lifecycle hooks
    onMounted(() => {
      createViewer()
    })
    onUnmounted(() => {
      destroyViewer()
    })

    return {
      root,
      createViewer,
      rebuildViewer,
      updateViewer,
      destroyViewer,
    }
  },
  render() {
    return h(
      this.$props.tag,
      { ref: 'root' },
      this.$slots.default && this.$slots.default({ ...this.$props }),
    )
  },
})
