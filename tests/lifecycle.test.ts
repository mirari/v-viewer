import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { createApp, h, nextTick, ref, reactive } from 'vue'
import Vue2 from '../packages/vue2/node_modules/vue/dist/vue.common.js'

const { instances } = vi.hoisted(() => ({ instances: [] as any[] }))
vi.mock('viewerjs', () => ({
  default: class MockViewer {
    element: HTMLElement
    options: any
    update = vi.fn(() => this)
    destroy = vi.fn(() => this)
    show = vi.fn(() => {
      this.options.shown?.call(this.element, new CustomEvent('shown'))
      return this
    })
    hide = vi.fn(() => {
      this.options.hidden?.call(this.element, new CustomEvent('hidden'))
      this.element.dispatchEvent(new CustomEvent('hidden'))
      return this
    })
    view = vi.fn((index: number) => {
      this.show()
      return this
    })
    static setDefaults = vi.fn()
    constructor(element: HTMLElement, options: any) {
      this.element = element
      this.options = options
      instances.push(this)
    }
  },
}))

import {
  createViewerController,
  createDirectiveHooks,
  resolveTarget,
  showViewer,
} from '../packages/core/src/index.js'
import { Viewer, useViewer } from '../packages/vue3/src/index.js'
import Plugin2, {
  Viewer as Viewer2,
  vViewer as directive2,
} from '../packages/vue2/src/index.js'

const cleanups: (() => void)[] = []
const gallery = () => {
  const el = document.createElement('div')
  el.innerHTML = '<img src="one.jpg">'
  document.body.append(el)
  return el
}
const mount = (setup: () => any) => {
  const app = createApp({ setup })
  app.mount(gallery())
  cleanups.push(() => app.unmount())
  return app
}
const settle = async () => {
  await nextTick()
  await new Promise((resolve) => setTimeout(resolve, 10))
}
beforeEach(() => {
  instances.length = 0
})
afterEach(() => {
  for (const cleanup of cleanups.splice(0)) cleanup()
  document.body.innerHTML = ''
})

describe('shared lifecycle', () => {
  it('updates dynamic images without recreating the viewer', async () => {
    const el = gallery()
    const controller = createViewerController(el)
    cleanups.push(controller.dispose)
    el.append(document.createElement('img'))
    await vi.waitFor(() => expect(instances[0].update).toHaveBeenCalledOnce())
    expect(instances).toHaveLength(1)
  })
  it('ignores unrelated DOM changes and inline viewer UI', async () => {
    const el = gallery()
    const controller = createViewerController(el)
    cleanups.push(controller.dispose)
    el.append(document.createElement('span'))
    const ui = document.createElement('div')
    ui.className = 'viewer-container'
    ui.innerHTML = '<img src="internal.jpg">'
    el.append(ui)
    await settle()
    expect(instances[0].update).not.toHaveBeenCalled()
  })
  it('does not recreate a disposed controller from pending observations', async () => {
    const el = gallery()
    const controller = createViewerController(el)
    el.append(document.createElement('img'))
    await Promise.resolve()
    controller.dispose()
    await settle()
    expect(instances).toHaveLength(1)
    expect(instances[0].destroy).toHaveBeenCalledOnce()
    controller.dispose()
    controller.refresh()
    expect(instances).toHaveLength(1)
    expect((el as any).$viewer).toBeUndefined()
  })
  it('honors observe and rebuild behavior', async () => {
    const el = gallery()
    const controller = createViewerController(el, { observe: false })
    cleanups.push(controller.dispose)
    el.append(document.createElement('img'))
    await settle()
    expect(instances[0].update).not.toHaveBeenCalled()
    controller.configure({ observe: true, rebuild: true })
    el.append(document.createElement('img'))
    await vi.waitFor(() => expect(instances).toHaveLength(3))
    expect(instances[1].destroy).toHaveBeenCalledOnce()
  })
  it('rebuilds options in place but keeps instances during unrelated renders', () => {
    const el = gallery()
    const hooks = createDirectiveHooks()
    const binding = { value: { toolbar: { zoomIn: true } }, modifiers: {} }
    hooks.mount(el, binding)
    hooks.update(el, binding)
    expect(instances).toHaveLength(1)
    binding.value.toolbar.zoomIn = false
    hooks.update(el, binding)
    expect(instances).toHaveLength(2)
    expect(instances[1].options.toolbar.zoomIn).toBe(false)
    hooks.unmount(el)
    expect(instances[1].destroy).toHaveBeenCalledOnce()
  })
  it('supports elements, ids and selectors; never silently targets body', () => {
    const el = gallery()
    el.id = 'gallery'
    expect(resolveTarget(el)).toBe(el)
    expect(resolveTarget('gallery')).toBe(el)
    expect(resolveTarget('#gallery')).toBe(el)
    expect(() => resolveTarget('#missing')).toThrow('not found')
  })
})

describe('batched image observation', () => {
  beforeEach(() => vi.useFakeTimers())
  afterEach(() => vi.useRealTimers())
  const advance = async (ms: number) => {
    // MutationObserver delivers records in a microtask, before the timer starts.
    await Promise.resolve()
    await vi.advanceTimersByTimeAsync(ms)
  }
  const create = (config = {}) => {
    const el = gallery()
    const controller = createViewerController(el, config)
    cleanups.push(controller.dispose)
    return { el, controller }
  }

  it('uses a 50ms fixed window and makes progress during continuous changes', async () => {
    const { el } = create()
    const img = el.querySelector('img')!
    img.src = 'two.jpg'
    await advance(30)
    img.src = 'three.jpg'
    await advance(19)
    expect(instances[0].update).not.toHaveBeenCalled()
    await advance(1)
    expect(instances[0].update).toHaveBeenCalledTimes(1)
    img.src = 'four.jpg'
    await advance(30)
    img.alt = 'Latest'
    await advance(20)
    expect(instances[0].update).toHaveBeenCalledTimes(2)
    expect(instances).toHaveLength(1)
  })

  it.each([0, 120])('supports an observe window of %i ms', async (observe) => {
    const { el } = create({ observe })
    el.append(document.createElement('img'))
    await Promise.resolve()
    expect(instances[0].update).not.toHaveBeenCalled()
    if (observe > 0) {
      await advance(observe - 1)
      expect(instances[0].update).not.toHaveBeenCalled()
      await advance(1)
    } else await advance(0)
    expect(instances[0].update).toHaveBeenCalledOnce()
  })

  it('detects replacement and reordering of identical image nodes', async () => {
    const { el } = create({ observe: 0 })
    el.innerHTML = '<img src="one.jpg">'
    await advance(0)
    expect(instances[0].update).toHaveBeenCalledTimes(1)
    el.append(el.firstElementChild!.cloneNode())
    await advance(0)
    el.append(el.firstElementChild!)
    await advance(0)
    expect(instances[0].update).toHaveBeenCalledTimes(3)
  })

  it('does not schedule work for unrelated DOM or generated Viewer UI', async () => {
    const { el } = create()
    const text = document.createElement('p')
    text.textContent = 'Caption'
    el.append(text)
    const ui = document.createElement('div')
    ui.className = 'viewer-container'
    ui.innerHTML = '<img src="preview.jpg">'
    el.append(ui)
    await Promise.resolve()
    ui.querySelector('img')!.src = 'other.jpg'
    text.textContent = 'Changed'
    await Promise.resolve()
    expect(vi.getTimerCount()).toBe(0)
    expect(instances[0].update).not.toHaveBeenCalled()
  })

  it('coalesces rebuilding and cancels pending work on explicit updates or disposal', async () => {
    const { el, controller } = create({ rebuild: true })
    el.append(document.createElement('img'))
    await advance(20)
    el.append(document.createElement('img'))
    await advance(30)
    expect(instances).toHaveLength(2)
    el.append(document.createElement('img'))
    await advance(10)
    controller.refresh(false)
    await advance(100)
    expect(instances).toHaveLength(2)
    expect(instances[1].update).toHaveBeenCalledOnce()
    el.append(document.createElement('img'))
    await advance(10)
    controller.configure({ options: { toolbar: false } })
    await advance(100)
    expect(instances).toHaveLength(3)
    el.append(document.createElement('img'))
    await advance(10)
    controller.dispose()
    await advance(100)
    expect(instances).toHaveLength(3)
    expect(instances[2].destroy).toHaveBeenCalledOnce()
    expect(vi.getTimerCount()).toBe(0)
  })

  it('disables pending observation, keeps option changes active and catches up on re-enable', async () => {
    const { el, controller } = create()
    el.append(document.createElement('img'))
    await advance(20)
    controller.configure({ observe: false })
    await advance(100)
    expect(instances[0].update).not.toHaveBeenCalled()
    controller.configure({ options: { toolbar: false } })
    expect(instances).toHaveLength(2)
    el.append(document.createElement('img'))
    await advance(100)
    expect(instances[1].update).not.toHaveBeenCalled()
    controller.configure({ observe: 10 })
    await advance(10)
    expect(instances[1].update).toHaveBeenCalledOnce()
    expect(instances).toHaveLength(2)
  })

  it('retimes a pending batch from its original start without rebuilding', async () => {
    const { el, controller } = create({ observe: 100 })
    el.append(document.createElement('img'))
    await advance(30)
    controller.configure({ observe: 50 })
    await advance(19)
    expect(instances[0].update).not.toHaveBeenCalled()
    await advance(1)
    expect(instances[0].update).toHaveBeenCalledOnce()
    expect(instances).toHaveLength(1)
  })

  it('separates directive observe from native options and removes the static modifier', async () => {
    const el = gallery()
    const hooks = createDirectiveHooks()
    cleanups.push(() => hooks.unmount(el))
    hooks.mount(el, { value: { observe: false }, modifiers: {} })
    expect(instances[0].options).not.toHaveProperty('observe')
    el.append(document.createElement('img'))
    await advance(100)
    expect(instances[0].update).not.toHaveBeenCalled()
    hooks.update(el, { value: { observe: 0 }, modifiers: { static: true } })
    await advance(0)
    expect(instances).toHaveLength(1)
    expect(instances[0].update).toHaveBeenCalledOnce()
    el.append(document.createElement('img'))
    await advance(0)
    expect(instances[0].update).toHaveBeenCalledTimes(2)
  })

  it.each(['vue2', 'vue3'])(
    '%s component reacts to observe without rebuilding',
    async (version) => {
      let change: (value: boolean | number) => void
      let el: HTMLElement
      if (version === 'vue3') {
        const observe = ref<boolean | number>(false)
        const app = mount(
          () => () =>
            h(Viewer, { observe: observe.value }, () =>
              h('img', { src: 'a.jpg' }),
            ),
        )
        el = instances[0].element
        change = (value) => {
          observe.value = value
        }
      } else {
        const app = new Vue2({
          data: () => ({ observe: false as boolean | number }),
          render(h: any) {
            return h(Viewer2, { props: { observe: this.observe } }, [
              h('img', { attrs: { src: 'a.jpg' } }),
            ])
          },
        }).$mount()
        document.body.append(app.$el)
        cleanups.push(() => app.$destroy())
        el = app.$el as HTMLElement
        change = (value) => {
          app.observe = value
        }
      }
      el.append(document.createElement('img'))
      await advance(100)
      expect(instances[0].update).not.toHaveBeenCalled()
      change(0)
      await nextTick()
      await Vue2.nextTick()
      await advance(0)
      expect(instances).toHaveLength(1)
      expect(instances[0].update).toHaveBeenCalledOnce()
      expect(instances[0].options).not.toHaveProperty('observe')
    },
  )

  it('accepts a reactive observation window for useViewer targets', async () => {
    const el = gallery()
    const observe = ref<boolean | number>(false)
    mount(() => {
      useViewer({ target: el, observe })
      return () => h('div')
    })
    el.append(document.createElement('img'))
    await advance(100)
    expect(instances[0].update).not.toHaveBeenCalled()
    observe.value = 20
    await nextTick()
    await advance(20)
    expect(instances[0].update).toHaveBeenCalledOnce()
    expect(instances).toHaveLength(1)
  })
})

describe('temporary galleries', () => {
  it('copies options, preserves attributes and removes its token on hide', () => {
    const options = Object.freeze({ inline: true })
    const viewer = showViewer({
      images: [{ src: 'thumb.jpg', 'data-source': 'large.jpg', alt: 'Photo' }],
      options,
    })
    expect(options.inline).toBe(true)
    expect(instances[0].options.inline).toBe(false)
    expect(document.querySelector('img')?.getAttribute('data-source')).toBe(
      'large.jpg',
    )
    viewer.hide()
    expect(document.querySelector('.v-viewer-token')).toBeNull()
    viewer.destroy()
    expect(document.querySelector('.v-viewer-token')).toBeNull()
  })
  it('does not interpret image attributes as HTML or event handlers', () => {
    const viewer = showViewer({
      images: [
        { src: 'photo.jpg', alt: '<script>bad</script>', onerror: 'bad()' },
      ],
    })
    expect(document.querySelector('script')).toBeNull()
    expect(document.querySelector('img')?.hasAttribute('onerror')).toBe(false)
    viewer.destroy()
  })
  it('cleans up when show throws', () => {
    const options = {
      shown() {
        throw new Error('callback failed')
      },
    }
    expect(() => showViewer({ images: ['a.jpg'], options })).toThrow(
      'callback failed',
    )
    expect(document.querySelector('.v-viewer-token')).toBeNull()
  })
})

describe('Vue 3', () => {
  it('component rebuilds reactive options and destroys on unmount', async () => {
    const options = reactive({ toolbar: true })
    const app = createApp({
      render: () =>
        h(Viewer, { toolbar: options.toolbar }, () =>
          h('img', { src: 'a.jpg' }),
        ),
    })
    app.mount(gallery())
    options.toolbar = false
    await settle()
    expect(instances.at(-1).options.toolbar).toBe(false)
    app.unmount()
    expect(instances.at(-1).destroy).toHaveBeenCalledOnce()
  })
  it('tracks visibility and retains user callbacks', () => {
    let api: ReturnType<typeof useViewer>
    const shown = vi.fn()
    const hidden = vi.fn()
    mount(() => {
      api = useViewer({
        images: ['a.jpg'],
        options: { shown, hidden },
      })
      return () => h('div')
    })
    api!.show()
    expect(api!.isShown.value).toBe(true)
    expect(shown).toHaveBeenCalledOnce()
    api!.hide()
    expect(api!.isShown.value).toBe(false)
    expect(hidden).toHaveBeenCalledOnce()
    expect(api!.viewer.value).toBeUndefined()
    api!.show()
    expect(instances).toHaveLength(2)
  })
  it('switches ref targets and clears detached instances', async () => {
    const first = gallery()
    const second = gallery()
    const target = ref<HTMLElement | null>(first)
    let api: ReturnType<typeof useViewer>
    mount(() => {
      api = useViewer({ target })
      return () => h('div')
    })
    expect(instances[0].element).toBe(first)
    target.value = second
    await settle()
    expect(instances[0].destroy).toHaveBeenCalledOnce()
    expect(instances[1].element).toBe(second)
    target.value = null
    await settle()
    expect(api!.viewer.value).toBeUndefined()
  })
  it('accepts an element or reactive getter in the configuration', async () => {
    const first = gallery()
    const second = gallery()
    const target = ref(first)
    let direct: ReturnType<typeof useViewer>
    let getter: ReturnType<typeof useViewer>
    const app = mount(() => {
      direct = useViewer({ target: first })
      getter = useViewer({ target: () => target.value })
      return () => h('div')
    })
    expect(direct!.viewer.value!.element).toBe(first)
    expect(getter!.viewer.value!.element).toBe(first)
    target.value = second
    await settle()
    expect(getter!.viewer.value!.element).toBe(second)
    app.unmount()
    expect(direct!.viewer.value).toBeUndefined()
    expect(getter!.viewer.value).toBeUndefined()
  })
  it('reopens temporary galleries with current images and options', async () => {
    const images = ref(['a.jpg'])
    const options = ref({ toolbar: true })
    let api: ReturnType<typeof useViewer>
    mount(() => {
      api = useViewer({ images, options })
      return () => h('div')
    })
    api!.show()
    const previous = instances.at(-1)
    images.value.push('b.jpg')
    options.value.toolbar = false
    await settle()
    expect(previous.element.isConnected).toBe(false)
    expect(api!.viewer.value).toBeUndefined()
    api!.show(1)
    const current = instances.at(-1)
    expect(current.element.querySelectorAll('img')).toHaveLength(2)
    expect(current.options.toolbar).toBe(false)
    expect(current.options.initialViewIndex).toBe(1)
  })
  it('resolves string targets at show time and prevents work after unmount', () => {
    const el = gallery()
    el.id = 'photos'
    let api: ReturnType<typeof useViewer>
    const app = mount(() => {
      api = useViewer({ target: 'photos' })
      return () => h('div')
    })
    api!.show(2)
    expect(instances[0].view).toHaveBeenCalledWith(2)
    app.unmount()
    expect(api!.show()).toBeUndefined()
    expect(instances).toHaveLength(1)
  })
  it('destroys a temporary gallery when its owner unmounts', () => {
    let api: ReturnType<typeof useViewer>
    const app = mount(() => {
      api = useViewer({ images: ['a.jpg'] })
      return () => h('div')
    })
    api!.show()
    app.unmount()
    expect(document.querySelector('.v-viewer-token')).toBeNull()
  })
})

describe('Vue 2', () => {
  it('observes deeply mutated directive options without an unrelated render', async () => {
    const app = new Vue2({
      data: () => ({ options: { toolbar: true } }),
      directives: { viewer: directive2 },
      render(h: any) {
        return h(
          'div',
          { directives: [{ name: 'viewer', value: this.options }] },
          [h('img', { attrs: { src: 'a.jpg' } })],
        )
      },
    }).$mount()
    document.body.append(app.$el)
    app.options.toolbar = false
    await Vue2.nextTick()
    expect(instances).toHaveLength(2)
    expect(instances[1].options.toolbar).toBe(false)
    app.$destroy()
    app.options.toolbar = true
    await Vue2.nextTick()
    expect(instances).toHaveLength(2)
  })
  it('cleans up component instances with beforeDestroy', async () => {
    const app = new Vue2({
      render: (h: any) =>
        h(Viewer2, {}, [h('img', { attrs: { src: 'a.jpg' } })]),
    }).$mount()
    document.body.append(app.$el)
    await Vue2.nextTick()
    expect(instances).toHaveLength(1)
    app.$destroy()
    expect(instances[0].destroy).toHaveBeenCalledOnce()
  })
  it('retains configurable global component, directive and API registration', () => {
    const FakeVue = {
      component: vi.fn(),
      directive: vi.fn(),
      prototype: {},
    } as any
    Plugin2.install(FakeVue, { name: 'photos' })
    expect(FakeVue.component).toHaveBeenCalledWith('photos', Viewer2)
    expect(FakeVue.directive).toHaveBeenCalledWith('photos', expect.any(Object))
    expect(FakeVue.prototype.$photosApi).toBe(showViewer)
  })
})
