import ViewerJs from 'viewerjs'
import { forwardViewerEvents } from './component.js'
import type { ViewerEventName } from './component.js'

export { ViewerJs }
export type ViewerOptions = ViewerJs.Options
export type ViewerObserve = boolean | number
export type ViewerDirectiveOptions = ViewerOptions & {
  observe?: ViewerObserve
  rebuild?: boolean
}
export type ViewerImage = string | { src: string; [attribute: string]: string }
export interface ViewerApiOptions {
  images: readonly ViewerImage[]
  options?: ViewerOptions
}
export interface ViewerElement extends HTMLElement {
  $viewer?: ViewerJs
}
// Track identity as well as attributes: replacing identical HTML creates new
// source nodes that Viewer.js must pick up. Ignore its own generated UI.
function imageState(element: HTMLElement) {
  const images =
    element.tagName === 'IMG'
      ? [element]
      : Array.from(element.querySelectorAll('img'))
  const sources = images.filter((image) => !image.closest('.viewer-container'))
  return {
    sources,
    attributes: JSON.stringify(
      sources.map((image) =>
        Array.from(image.attributes)
          .map((attribute) => [attribute.name, attribute.value])
          .sort(([a], [b]) => a.localeCompare(b)),
      ),
    ),
  }
}
function containsSourceImage(node: Node): boolean {
  if (node.nodeType !== 1) return false
  const element = node as Element
  if (element.closest('.viewer-container')) return false
  return (
    element.tagName === 'IMG' ||
    Array.from(element.querySelectorAll('img')).some(
      (image) => !image.closest('.viewer-container'),
    )
  )
}
function imageMutation(record: MutationRecord): boolean {
  if (record.type === 'attributes')
    return (
      (record.target as Element).tagName === 'IMG' &&
      !(record.target as Element).closest('.viewer-container')
    )
  return [
    ...Array.from(record.addedNodes),
    ...Array.from(record.removedNodes),
  ].some(containsSourceImage)
}

export interface ViewerControllerOptions {
  options?: ViewerOptions
  rebuild?: boolean
  observe?: ViewerObserve
  onInit?: (viewer: ViewerJs) => void
  onDestroy?: () => void
  onEvent?: (name: ViewerEventName, event: CustomEvent) => void
}

export function createViewerController(
  element: ViewerElement,
  configuration: ViewerControllerOptions = {},
) {
  let config = { ...configuration }
  let instance: ViewerJs | undefined
  let observer: MutationObserver | undefined
  let previous = imageState(element)
  let timer: ReturnType<typeof setTimeout> | undefined
  let scheduledAt = 0
  let disposed = false
  // Listen before constructing Viewer.js so synchronous ready events are kept.
  // Native forwarding also preserves callbacks installed through setDefaults.
  const stopEvents = config.onEvent
    ? forwardViewerEvents(element, (name, event) =>
        config.onEvent?.(name, event),
      )
    : undefined

  function destroyInstance() {
    config.onDestroy?.()
    const previous = instance
    instance = undefined
    if (element.$viewer === previous) delete element.$viewer
    previous?.destroy()
  }
  function refresh(rebuild = config.rebuild ?? false) {
    if (disposed) return
    cancelPending()
    observer?.disconnect()
    try {
      if (rebuild) destroyInstance()
      if (instance) instance.update()
      else {
        instance = new ViewerJs(element, { ...config.options })
        // Viewer.js 1.x can retain inline image-load callbacks after destroy().
        // Its delayed build must not resurrect an instance replaced or disposed
        // while those images were still loading.
        const pending = instance as ViewerJs & {
          destroyed?: boolean
          build: () => void
        }
        const build = pending.build
        pending.build = function () {
          if (!this.destroyed) return build.call(this)
        }
      }
      element.$viewer = instance
      previous = imageState(element)
    } finally {
      observe()
    }
    config.onInit?.(instance!)
    return instance
  }
  function cancelPending() {
    if (timer !== undefined) clearTimeout(timer)
    timer = undefined
  }
  function delay() {
    return typeof config.observe === 'number' &&
      Number.isFinite(config.observe) &&
      config.observe >= 0
      ? Math.min(config.observe, 2147483647)
      : 50
  }
  function schedule() {
    if (disposed || config.observe === false || timer !== undefined) return
    scheduledAt = Date.now()
    armTimer()
  }
  function armTimer() {
    timer = setTimeout(
      () => {
        timer = undefined
        if (disposed || config.observe === false) return
        const current = imageState(element)
        if (
          current.attributes !== previous.attributes ||
          current.sources.length !== previous.sources.length ||
          current.sources.some(
            (image, index) => image !== previous.sources[index],
          )
        )
          refresh()
      },
      Math.max(0, delay() - (Date.now() - scheduledAt)),
    )
  }
  function observe() {
    observer?.disconnect()
    if (
      disposed ||
      config.observe === false ||
      typeof MutationObserver === 'undefined'
    )
      return
    observer ??= new MutationObserver((records) => {
      if (records.some(imageMutation)) schedule()
    })
    observer.observe(element, {
      attributes: true,
      childList: true,
      subtree: true,
    })
  }
  function configure(next: ViewerControllerOptions, rebuild = true) {
    if (disposed) return
    config = { ...config, ...next }
    // Observer settings alone do not require a Viewer.js update or rebuild.
    if (!('options' in next) && !('rebuild' in next) && 'observe' in next) {
      const pending = timer !== undefined
      cancelPending()
      observe()
      if (config.observe !== false) {
        if (pending) armTimer()
        else schedule()
      }
      return instance
    }
    return refresh(rebuild)
  }
  function dispose() {
    disposed = true
    cancelPending()
    observer?.disconnect()
    try {
      destroyInstance()
    } finally {
      stopEvents?.()
    }
  }
  try {
    refresh()
  } catch (error) {
    dispose()
    throw error
  }
  return {
    get viewer() {
      return instance
    },
    refresh,
    configure,
    dispose,
  }
}
export type ViewerController = ReturnType<typeof createViewerController>

/** Creates a temporary gallery. Closing or destroying it removes its DOM. */
export function showViewer({
  images,
  options = {},
}: ViewerApiOptions): ViewerJs {
  if (typeof document === 'undefined')
    throw new Error('v-viewer: showViewer must be called in a browser')
  const element = document.createElement('div')
  element.hidden = true
  element.className = 'v-viewer-token'
  for (const image of images) {
    const img = document.createElement('img')
    const attributes = typeof image === 'string' ? { src: image } : image
    for (const [name, value] of Object.entries(attributes)) {
      // Attribute objects are image data, never event handlers or HTML.
      if (!/^on/i.test(name)) img.setAttribute(name, value)
    }
    element.appendChild(img)
  }
  document.body.appendChild(element)
  let viewer: ViewerJs
  try {
    viewer = new ViewerJs(element, {
      ...(snapshot(options) as ViewerOptions),
      inline: false,
    })
  } catch (error) {
    element.remove()
    throw error
  }
  const originalDestroy = viewer.destroy.bind(viewer)
  let destroyed = false
  const hidden = (event: Event) => {
    if (event.target === element) viewer.destroy()
  }
  viewer.destroy = () => {
    if (destroyed) return viewer
    destroyed = true
    element.removeEventListener('hidden', hidden)
    try {
      originalDestroy()
    } finally {
      element.remove()
    }
    return viewer
  }
  element.addEventListener('hidden', hidden)
  try {
    viewer.show()
  } catch (error) {
    viewer.destroy()
    throw error
  }
  return viewer
}

export interface DirectiveValue {
  value?: ViewerDirectiveOptions
  modifiers: Record<string, boolean | undefined>
}
function snapshot(value: unknown): unknown {
  if (Array.isArray(value)) return value.map(snapshot)
  if (value && Object.prototype.toString.call(value) === '[object Object]') {
    return Object.fromEntries(
      Object.entries(value).map(([key, entry]) => [key, snapshot(entry)]),
    )
  }
  return value
}
function equal(a: unknown, b: unknown): boolean {
  if (a === b) return true
  if (!a || !b || typeof a !== 'object' || typeof b !== 'object') return false
  const plain = (value: object) =>
    Array.isArray(value) ||
    Object.prototype.toString.call(value) === '[object Object]'
  if (!plain(a) || !plain(b)) return false
  const keys = Object.keys(a)
  return (
    keys.length === Object.keys(b).length &&
    keys.every(
      (key) =>
        Object.prototype.hasOwnProperty.call(b, key) &&
        equal(
          (a as Record<string, unknown>)[key],
          (b as Record<string, unknown>)[key],
        ),
    )
  )
}
/** Shared directive lifecycle; Vue adapters only map hook names. */
export function createDirectiveHooks() {
  const states = new WeakMap<
    ViewerElement,
    {
      controller: ViewerController
      options: unknown
      observe: ViewerObserve | undefined
      rebuild: boolean
    }
  >()
  return {
    mount(element: ViewerElement, binding: DirectiveValue) {
      states.get(element)?.controller.dispose()
      const {
        observe,
        rebuild: rebuildOption,
        ...options
      } = binding.value ?? {}
      const rebuild = rebuildOption ?? !!binding.modifiers.rebuild
      states.set(element, {
        options: snapshot(options),
        observe,
        rebuild,
        controller: createViewerController(element, {
          options,
          rebuild,
          observe,
        }),
      })
    },
    update(element: ViewerElement, binding: DirectiveValue) {
      const state = states.get(element)
      if (!state) return
      const {
        observe,
        rebuild: rebuildOption,
        ...options
      } = binding.value ?? {}
      const rebuild = rebuildOption ?? !!binding.modifiers.rebuild
      const changed = !equal(state.options, options)
      if (changed || rebuild !== state.rebuild)
        state.controller.configure(
          {
            options,
            rebuild,
            observe,
          },
          changed || rebuild,
        )
      else if (observe !== state.observe)
        state.controller.configure({ observe })
      state.options = snapshot(options)
      state.observe = observe
      state.rebuild = rebuild
    },
    unmount(element: ViewerElement) {
      states.get(element)?.controller.dispose()
      states.delete(element)
    },
  }
}
