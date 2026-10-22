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
  ViewerObserve,
  ViewerDirectiveOptions,
} from '../../core/src/index.js'
import type ViewerJs from 'viewerjs'
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
    setup(props, { emit, expose }) {
      const root = ref<HTMLElement>()
      const viewer = shallowRef<ViewerJs>()
      let controller: ViewerController | undefined
      let disposed = false
      const optionValues = () => collectViewerOptions(props)
      const createViewer = () => {
        if (disposed || !root.value || controller) return
        controller = createViewerController(root.value, {
          options: optionValues(),
          rebuild: props.rebuild,
          observe: props.observe,
          onEvent: (name, event) => emit(name, event),
          onInit: (instance) => {
            viewer.value = instance
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
      return { ...publicApi, root }
    },
    render() {
      return h(
        'div',
        { ref: 'root' },
        this.$slots.default?.({ options: this.options }),
      )
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
  /** Omit to create a temporary gallery from images. */
  target?: MaybeRefOrGetter<ViewerTarget>
  options?: MaybeRefOrGetter<ViewerOptions>
  /** Without a target, show() creates a temporary gallery from these images. */
  images?: MaybeRefOrGetter<readonly ViewerImage[]>
  rebuild?: boolean
  /** Only applies when target is provided. */
  observe?: MaybeRefOrGetter<ViewerObserve>
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
        observe: config.observe === undefined ? true : read(config.observe),
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
  if (config.observe !== undefined)
    watch(
      () => read(config.observe!),
      (observe) => controller?.configure({ observe }),
      { flush: 'post' },
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
