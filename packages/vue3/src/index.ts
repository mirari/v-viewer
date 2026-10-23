import {
  defineComponent,
  h,
  onMounted,
  onBeforeUnmount,
  shallowRef,
  ref,
  watch,
  unref,
  Teleport,
  onUpdated,
} from 'vue'
import * as VueRuntime from 'vue'
import type {
  DefineComponent,
  ObjectDirective,
  PropType,
  Ref,
  ShallowRef,
} from 'vue'
import {
  createViewerController,
  createDirectiveHooks,
  showViewer,
} from '../../core/src/index.js'
import type {
  ViewerController,
  ViewerImage,
  ViewerOptions,
  ViewerObserve,
  ViewerDirectiveOptions,
} from '../../core/src/index.js'
import type ViewerJs from 'viewerjs'
import { createToolbarBridge, toolbarState } from '../../core/src/toolbar.js'
import type {
  ToolbarMount,
  ViewerToolbarScope,
} from '../../core/src/toolbar.js'
export type { ViewerToolbarScope } from '../../core/src/toolbar.js'
import type { VNode } from 'vue'
export interface ViewerSlots {
  default?: (scope: { options: ViewerOptions }) => VNode[]
  toolbar?: (scope: ViewerToolbarScope) => VNode[]
  'toolbar-append'?: (scope: ViewerToolbarScope) => VNode[]
}
const ToolbarContent = defineComponent({
  props: {
    content: {
      type: Function as PropType<() => VNode[] | undefined>,
      required: true,
    },
  },
  render() {
    return h('span', { style: { display: 'contents' } }, this.content())
  },
})
import {
  viewerOptionProps,
  viewerEvents,
  collectViewerOptions,
  bindViewerMethods,
} from '../../core/src/component.js'
import type {
  ViewerOptionProps,
  ViewerEventListeners,
  ViewerMethods,
} from '../../core/src/component.js'
export type {
  ViewerOptionProps,
  ViewerEventMap,
  ViewerMethods,
} from '../../core/src/component.js'

export { ViewerJs } from '../../core/src/index.js'
export type {
  ViewerOptions,
  ViewerImage,
  ViewerElement,
  ViewerObserve,
  ViewerDirectiveOptions,
} from '../../core/src/index.js'

export interface ViewerProps extends ViewerOptionProps, ViewerEventListeners {
  /** @deprecated Bind Viewer.js settings as props and callbacks as Vue events. */
  options?: ViewerOptions
  rebuild?: boolean
  observe?: ViewerObserve
}
export interface ViewerExposed extends ViewerMethods {
  $slots: ViewerSlots
  viewer: ShallowRef<ViewerJs | undefined>
  createViewer: () => void
  updateViewer: () => void
  rebuildViewer: () => void
  destroyViewer: () => void
}
export const Viewer: DefineComponent<ViewerProps, ViewerExposed> =
  defineComponent({
    name: 'Viewer',
    props: {
      ...viewerOptionProps,
      options: { type: Object as PropType<ViewerOptions>, default: () => ({}) },
      rebuild: Boolean,
      observe: { type: [Boolean, Number], default: true },
    },
    emits: [...viewerEvents],
    setup(props, { emit, expose, slots }) {
      const root = ref<HTMLElement>()
      const viewer = shallowRef<ViewerJs>()
      let controller: ViewerController | undefined
      let disposed = false
      const bridge = createToolbarBridge()
      const toolbarMounts = shallowRef<ToolbarMount[]>([])
      const state = shallowRef(toolbarState(undefined))
      const syncToolbar = () => {
        toolbarMounts.value = bridge.sync(viewer.value, (name) => !!slots[name])
        const next = toolbarState(viewer.value)
        if (
          next.image !== state.value.image ||
          next.index !== state.value.index
        )
          state.value = next
      }
      const clearToolbar = () => {
        viewer.value = undefined
        bridge.clear()
        toolbarMounts.value = []
        state.value = toolbarState(undefined)
      }
      const optionValues = () => collectViewerOptions(props)
      const createViewer = () => {
        if (disposed || !root.value || controller) return
        controller = createViewerController(root.value, {
          options: optionValues(),
          rebuild: props.rebuild,
          observe: props.observe,
          onEvent: (name, event) => {
            syncToolbar()
            emit(name, event)
          },
          onDestroy: clearToolbar,
          onInit: (instance) => {
            viewer.value = instance
            syncToolbar()
          },
        })
      }
      const destroyViewer = () => {
        controller?.dispose()
        controller = undefined
        viewer.value = undefined
      }
      const updateViewer = () =>
        controller ? controller.refresh(false) : createViewer()
      const rebuildViewer = () =>
        controller
          ? controller.configure({
              options: optionValues(),
              rebuild: props.rebuild,
            })
          : createViewer()
      watch(optionValues, rebuildViewer, { deep: true, flush: 'post' })
      watch(
        () => props.observe,
        (observe) => controller?.configure({ observe }),
        { flush: 'post' },
      )
      watch(
        () => props.rebuild,
        () => {
          controller?.configure({ rebuild: props.rebuild }, props.rebuild)
        },
        { flush: 'post' },
      )
      onMounted(createViewer)
      onUpdated(syncToolbar)
      onBeforeUnmount(() => {
        disposed = true
        destroyViewer()
      })
      const publicApi = {
        ...bindViewerMethods(() => viewer.value),
        update: updateViewer,
        destroy: destroyViewer,
        viewer,
        createViewer,
        updateViewer,
        rebuildViewer,
        destroyViewer,
      }
      // Vue 3.0/3.1 expose setup bindings via the public instance;
      // newer runtimes can explicitly restrict that surface with expose().
      expose?.(publicApi)
      const toolbarScope = (): ViewerToolbarScope => ({
        ...publicApi,
        ...state.value,
      })
      return { ...publicApi, root, toolbarMounts, toolbarScope }
    },
    render() {
      return h('div', { ref: 'root' }, [
        this.$slots.default?.({ options: this.options }),
        ...this.toolbarMounts.map((mount) =>
          h(Teleport, { to: mount.target, key: mount.key }, [
            h(ToolbarContent, {
              content: () => this.$slots[mount.slot]?.(this.toolbarScope()),
            }),
          ]),
        ),
      ])
    },
  }) as unknown as DefineComponent<ViewerProps, ViewerExposed>

const hooks = createDirectiveHooks()
export const vViewer: ObjectDirective<
  HTMLElement,
  ViewerDirectiveOptions | undefined
> = {
  deep: true,
  mounted: hooks.mount,
  updated: hooks.update,
  beforeUnmount: hooks.unmount,
  getSSRProps: () => ({}),
}

export type MaybeRefOrGetter<T> = T | Ref<T> | (() => T)
export interface UseViewerOptions {
  options?: MaybeRefOrGetter<ViewerOptions>
  /** Images are read when opening a new temporary gallery. */
  images?: MaybeRefOrGetter<readonly ViewerImage[]>
}
const read = <T>(value: MaybeRefOrGetter<T>): T =>
  typeof value === 'function' ? (value as () => T)() : unref(value)

export interface UseViewerReturn {
  viewer: ShallowRef<ViewerJs | undefined>
  isShown: Ref<boolean>
  show: (index?: number) => ViewerJs | undefined
  hide: () => void
  destroy: () => void
}
export function useViewer(config: UseViewerOptions = {}): UseViewerReturn {
  const viewer = shallowRef<ViewerJs>()
  const isShown = ref(false)
  let disposed = false
  function destroy() {
    viewer.value?.destroy()
    viewer.value = undefined
    isShown.value = false
  }
  function show(index?: number) {
    if (disposed || typeof document === 'undefined') return undefined
    const existing = viewer.value
    if (existing) {
      if (index === undefined) existing.show()
      else existing.view(index)
      return existing
    }
    const options = config.options ? read(config.options) : {}
    const { shown, hidden } = options
    let current: ViewerJs
    try {
      current = showViewer({
        images: config.images ? read(config.images) : [],
        options: {
          ...options,
          ...(index === undefined ? {} : { initialViewIndex: index }),
          shown(event) {
            isShown.value = true
            shown?.call(this, event)
          },
          hidden(event) {
            isShown.value = false
            viewer.value = undefined
            hidden?.call(this, event)
          },
        },
      })
    } catch (error) {
      isShown.value = false
      throw error
    }
    const originalDestroy = current.destroy.bind(current)
    current.destroy = () => {
      try {
        return originalDestroy()
      } finally {
        if (viewer.value === current) {
          viewer.value = undefined
          isShown.value = false
        }
      }
    }
    viewer.value = current
    return current
  }
  function hide() {
    viewer.value?.hide()
  }
  const dispose = () => {
    disposed = true
    destroy()
  }
  // Vue 3.0 has component cleanup but no effect scopes yet.
  if (VueRuntime.getCurrentScope?.()) VueRuntime.onScopeDispose(dispose)
  else onBeforeUnmount(dispose)
  return { viewer, isShown, show, hide, destroy }
}
