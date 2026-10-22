import {
  defineComponent,
  h,
  onMounted,
  onBeforeUnmount,
  shallowRef,
  ref,
  watch,
  unref,
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
  resolveTarget,
  showViewer,
} from '../../core/src/index.js'
import type {
  ViewerController,
  ViewerImage,
  ViewerOptions,
  ViewerTarget,
} from '../../core/src/index.js'
import type ViewerJs from 'viewerjs'

export { ViewerJs } from '../../core/src/index.js'
export type {
  ViewerOptions,
  ViewerImage,
  ViewerElement,
} from '../../core/src/index.js'

export interface ViewerProps {
  images?: ViewerImage[]
  options?: ViewerOptions
  rebuild?: boolean
  trigger?: unknown
  onInited?: (viewer: ViewerJs) => void
}
export interface ViewerExposed {
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
      images: { type: Array as PropType<ViewerImage[]>, default: () => [] },
      options: { type: Object as PropType<ViewerOptions>, default: () => ({}) },
      rebuild: Boolean,
      trigger: null,
    },
    emits: { inited: (_viewer: ViewerJs) => true },
    setup(props, { slots, emit, expose }) {
      const root = ref<HTMLElement>()
      const viewer = shallowRef<ViewerJs>()
      let controller: ViewerController | undefined
      const createViewer = () => {
        if (!root.value || controller) return
        controller = createViewerController(root.value, {
          options: props.options,
          rebuild: props.rebuild,
          onInit: (instance) => {
            viewer.value = instance
            emit('inited', instance)
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
              options: props.options,
              rebuild: props.rebuild,
            })
          : createViewer()
      watch(() => props.options, rebuildViewer, { deep: true, flush: 'post' })
      watch(
        () => [props.images, props.trigger, props.rebuild],
        () => {
          controller?.configure({ rebuild: props.rebuild }, props.rebuild)
        },
        { deep: true, flush: 'post' },
      )
      onMounted(createViewer)
      onBeforeUnmount(destroyViewer)
      expose({
        viewer,
        createViewer,
        updateViewer,
        rebuildViewer,
        destroyViewer,
      })
      return () =>
        h(
          'div',
          { ref: root },
          slots.default?.({ images: props.images, options: props.options }),
        )
    },
  }) as unknown as DefineComponent<ViewerProps, ViewerExposed>

const hooks = createDirectiveHooks()
export const vViewer: ObjectDirective<HTMLElement, ViewerOptions | undefined> =
  {
    deep: true,
    mounted: hooks.mount,
    updated: hooks.update,
    beforeUnmount: hooks.unmount,
    getSSRProps: () => ({}),
  }

export type MaybeRefOrGetter<T> = T | Ref<T> | (() => T)
export interface UseViewerOptions {
  /** Omit to create a temporary gallery from images. */
  target?: MaybeRefOrGetter<ViewerTarget>
  options?: MaybeRefOrGetter<ViewerOptions>
  /** Without a target, show() creates a temporary gallery from these images. */
  images?: MaybeRefOrGetter<readonly ViewerImage[]>
  rebuild?: boolean
}
const read = <T>(value: MaybeRefOrGetter<T>): T =>
  typeof value === 'function' ? (value as () => T)() : unref(value)

export interface UseViewerReturn {
  viewer: ShallowRef<ViewerJs | undefined>
  isShown: Ref<boolean>
  show: (index?: number) => ViewerJs | undefined
  hide: () => void
  update: () => void
  destroy: () => void
}
export function useViewer(config: UseViewerOptions = {}): UseViewerReturn {
  const target = config.target
  const viewer = shallowRef<ViewerJs>()
  const isShown = ref(false)
  let controller: ViewerController | undefined
  let element: HTMLElement | undefined
  let disposed = false
  const options = (): ViewerOptions => {
    const value = config.options ? read(config.options) : {}
    return {
      ...value,
      shown(event) {
        isShown.value = true
        value.shown?.call(this, event)
      },
      hidden(event) {
        isShown.value = false
        if (!controller) viewer.value = undefined
        value.hidden?.call(this, event)
      },
    }
  }
  function destroy() {
    controller?.dispose()
    if (!controller) viewer.value?.destroy()
    controller = undefined
    element = undefined
    viewer.value = undefined
    isShown.value = false
  }
  function ensure() {
    if (disposed || typeof document === 'undefined') return undefined
    const nextElement =
      target === undefined ? undefined : resolveTarget(read(target))
    if (target !== undefined && !nextElement) return undefined
    if (nextElement !== element) destroy()
    if (nextElement && !controller) {
      element = nextElement
      controller = createViewerController(nextElement, {
        options: options(),
        rebuild: config.rebuild,
        onInit: (instance) => {
          viewer.value = instance
        },
      })
    }
    return viewer.value
  }
  function show(index?: number) {
    if (disposed || typeof document === 'undefined') return undefined
    let current = ensure()
    if (!current && target === undefined) {
      current = showViewer({
        images: config.images ? read(config.images) : [],
        options: {
          ...options(),
          ...(index === undefined ? {} : { initialViewIndex: index }),
        },
      })
      viewer.value = current
    } else if (current) {
      if (index === undefined) current.show()
      else current.view(index)
    }
    return current
  }
  function hide() {
    viewer.value?.hide()
  }
  function update() {
    ensure()
    controller?.refresh(false)
  }
  if (target !== undefined)
    watch(
      () => read(target),
      () => {
        destroy()
        ensure()
      },
      { flush: 'post' },
    )
  if (config.options)
    watch(
      () => read(config.options!),
      () => {
        if (controller) controller.configure({ options: options() })
        else destroy()
      },
      { deep: true, flush: 'post' },
    )
  if (config.images)
    watch(
      () => read(config.images!),
      () => {
        if (!controller) destroy()
      },
      { deep: true, flush: 'post' },
    )
  onMounted(() => {
    if (target !== undefined) ensure()
  })
  const dispose = () => {
    disposed = true
    destroy()
  }
  // Vue 3.0 has component cleanup but no effect scopes yet.
  if (VueRuntime.getCurrentScope?.()) VueRuntime.onScopeDispose(dispose)
  else onBeforeUnmount(dispose)
  return { viewer, isShown, show, hide, update, destroy }
}
