import ViewerJs from 'viewerjs'

export { ViewerJs }
export type ViewerOptions = ViewerJs.Options
export type ViewerImage = string | { src: string; [attribute: string]: string }
export interface ViewerApiOptions {
  images: readonly ViewerImage[]
  options?: ViewerOptions
}
export interface ViewerElement extends HTMLElement {
  $viewer?: ViewerJs
}
export type ViewerTarget = HTMLElement | string | null | undefined

export function resolveTarget(target: ViewerTarget): HTMLElement | undefined {
  if (typeof document === 'undefined' || !target) return undefined
  if (typeof target !== 'string') return target
  const element =
    document.getElementById(target) || document.querySelector(target)
  if (!element) throw new Error(`v-viewer: target "${target}" was not found`)
  if (!(element instanceof HTMLElement))
    throw new Error('v-viewer: target must be an HTML element')
  return element
}

// Image attributes alone determine whether Viewer.js needs an update. Ignore its
// own inline UI: observing that UI would otherwise trigger a rebuild loop.
function imageSignature(element: HTMLElement): string {
  const images =
    element.tagName === 'IMG'
      ? [element]
      : Array.from(element.querySelectorAll('img'))
  return JSON.stringify(
    images
      .filter((image) => !image.closest('.viewer-container'))
      .map((image) =>
        Array.from(image.attributes).map((attribute) => [
          attribute.name,
          attribute.value,
        ]),
      ),
  )
}

export interface ViewerControllerOptions {
  options?: ViewerOptions
  rebuild?: boolean
  observe?: boolean
  onInit?: (viewer: ViewerJs) => void
}

export function createViewerController(
  element: ViewerElement,
  configuration: ViewerControllerOptions = {},
) {
  let config = { ...configuration }
  let instance: ViewerJs | undefined
  let observer: MutationObserver | undefined
  let signature = ''
  let timer: ReturnType<typeof setTimeout> | undefined
  let disposed = false

  function destroyInstance() {
    const previous = instance
    instance = undefined
    if (element.$viewer === previous) delete element.$viewer
    previous?.destroy()
  }
  function refresh(rebuild = config.rebuild ?? false) {
    if (disposed) return
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
      signature = imageSignature(element)
    } finally {
      observe()
    }
    config.onInit?.(instance!)
    return instance
  }
  function observe() {
    observer?.disconnect()
    if (
      disposed ||
      config.observe === false ||
      typeof MutationObserver === 'undefined'
    )
      return
    observer ??= new MutationObserver(() => {
      if (timer !== undefined) clearTimeout(timer)
      timer = setTimeout(() => {
        timer = undefined
        if (!disposed && imageSignature(element) !== signature) refresh()
      }, 0)
    })
    observer.observe(element, {
      attributes: true,
      childList: true,
      subtree: true,
    })
  }
  function configure(next: ViewerControllerOptions, rebuild = true) {
    config = { ...config, ...next }
    return refresh(rebuild)
  }
  function dispose() {
    disposed = true
    if (timer !== undefined) clearTimeout(timer)
    observer?.disconnect()
    destroyInstance()
  }
  refresh()
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
    viewer = new ViewerJs(element, { ...options, inline: false })
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
  value?: ViewerOptions
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
    { controller: ViewerController; options: unknown }
  >()
  return {
    mount(element: ViewerElement, binding: DirectiveValue) {
      states.get(element)?.controller.dispose()
      states.set(element, {
        options: snapshot(binding.value),
        controller: createViewerController(element, {
          options: binding.value,
          rebuild: !!binding.modifiers.rebuild,
          observe: !binding.modifiers.static,
        }),
      })
    },
    update(element: ViewerElement, binding: DirectiveValue) {
      const state = states.get(element)
      if (!state) return
      const changed = !equal(state.options, binding.value)
      state.options = snapshot(binding.value)
      if (changed)
        state.controller.configure({
          options: binding.value,
          rebuild: !!binding.modifiers.rebuild,
          observe: !binding.modifiers.static,
        })
    },
    unmount(element: ViewerElement) {
      states.get(element)?.controller.dispose()
      states.delete(element)
    },
  }
}
