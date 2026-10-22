import { afterEach, expect, test, vi } from 'vitest'
import { createApp, h, nextTick, reactive, ref } from 'vue'
import ViewerJs from 'viewerjs'
import { Viewer } from '../packages/vue3/src/index'
import { Viewer as Viewer2 } from '../packages/vue2/src/index'
import {
  viewerOptionProps,
  viewerEvents,
  viewerMethods,
} from '../packages/core/src/component'

// Use the same Vue 2 constructor as the component, including its observer runtime.
const Vue2 = (Viewer2 as any).super

const cleanups: (() => void)[] = []
afterEach(() => {
  for (const cleanup of cleanups.splice(0)) cleanup()
  document.body.innerHTML = ''
})

test('component props and events cover every Viewer.js option', () => {
  const viewer = new ViewerJs(document.createElement('div'))
  try {
    expect([...Object.keys(viewerOptionProps), ...viewerEvents].sort()).toEqual(
      Object.keys((viewer as any).options).sort(),
    )
  } finally {
    viewer.destroy()
  }
})

for (const vue2 of [false, true]) {
  async function mount(
    values: Record<string, unknown> = {},
    listeners: Record<string, (event: any) => void> = {},
    captureSlot?: (data: any) => void,
  ) {
    const host = document.createElement('div')
    document.body.append(host)
    let component: any
    let patch: (value: Record<string, unknown>) => Promise<void>
    let unmount: () => void
    if (vue2) {
      const app = new Vue2({
        data: () => ({ values, listeners }),
        render(this: any, create: any) {
          return create(
            Viewer2,
            {
              ref: 'viewer',
              props: this.values,
              attrs: { id: 'gallery', 'aria-label': 'Photos' },
              on: this.listeners,
              scopedSlots: captureSlot
                ? {
                    default: (data: any) => {
                      captureSlot(data)
                      return [create('img', { attrs: { src: 'a.jpg' } })]
                    },
                  }
                : undefined,
            },
            [create('img', { attrs: { src: 'a.jpg' } })],
          )
        },
      }).$mount(host)
      component = app.$refs.viewer
      patch = async (value) => {
        app.values = { ...app.values, ...value }
        await Vue2.nextTick()
        await Vue2.nextTick()
      }
      unmount = () => app.$destroy()
    } else {
      const state = reactive(values)
      const exposed = ref()
      const app = createApp({
        render: () =>
          h(
            Viewer,
            {
              ...state,
              ...Object.fromEntries(
                Object.entries(listeners).map(([name, handler]) => [
                  'on' + name[0].toUpperCase() + name.slice(1),
                  handler,
                ]),
              ),
              ref: exposed,
              id: 'gallery',
              'aria-label': 'Photos',
            },
            (data: any) => {
              captureSlot?.(data)
              return h('img', { src: 'a.jpg' })
            },
          ),
      })
      app.mount(host)
      component = exposed.value
      patch = async (value) => {
        Object.assign(state, value)
        await nextTick()
      }
      unmount = () => app.unmount()
    }
    cleanups.push(unmount)
    return {
      component,
      patch,
      unmount,
      instance: () => (vue2 ? component.$viewer : component.viewer),
    }
  }

  test(`${vue2 ? 'Vue 2' : 'Vue 3'} legacy options merge with direct props and remain reactive`, async () => {
    const captureSlot = vi.fn()
    const { component, patch, instance } = await mount(
      {
        options: {
          toolbar: { zoomIn: true, zoomOut: true },
          title: true,
          initialViewIndex: 1,
        },
        title: false,
        initialViewIndex: 0,
      },
      {},
      captureSlot,
    )
    expect(instance().options.title).toBe(false)
    expect(instance().options.initialViewIndex).toBe(0)
    expect(instance().options.toolbar.zoomOut).toBe(true)
    expect(component.$el.hasAttribute('options')).toBe(false)
    expect(captureSlot.mock.lastCall?.[0].options).toBe(
      component.$props.options,
    )
    expect(captureSlot.mock.lastCall?.[0]).not.toHaveProperty('images')
    component.$props.options.toolbar.zoomIn = false
    await patch({})
    expect(instance().options.toolbar.zoomIn).toBe(false)
    await patch({ toolbar: { prev: true }, title: undefined })
    expect(instance().options.title).toBe(true)
    expect(instance().options.toolbar).toEqual({ prev: true })
    expect(component.$props.options.toolbar).toEqual({
      zoomIn: false,
      zoomOut: true,
    })
    await patch({ options: { toolbar: false }, toolbar: undefined })
    expect(instance().options.toolbar).toBe(false)
    await patch({ options: undefined })
    expect(instance().options.toolbar).toBe(true)
  })

  test(`${vue2 ? 'Vue 2' : 'Vue 3'} legacy callbacks coexist with Vue events and can cancel operations`, async () => {
    const legacyShow = vi.fn((event: Event) => event.preventDefault())
    const legacyShown = vi.fn()
    const shown = vi.fn()
    const show = vi.fn()
    const { component, patch, instance } = await mount(
      {
        options: { transition: false, show: legacyShow, shown: legacyShown },
      },
      { shown, show },
    )
    component.show(true)
    expect(legacyShow).toHaveBeenCalledOnce()
    expect(show).toHaveBeenCalledOnce()
    expect(instance().isShown).toBe(false)
    expect(shown).not.toHaveBeenCalled()
    legacyShow.mockImplementation(() => {})
    component.show(true)
    expect(legacyShown).toHaveBeenCalledOnce()
    expect(shown).toHaveBeenCalledOnce()
    expect(legacyShown.mock.calls[0][0]).toBe(shown.mock.calls[0][0])
    expect(legacyShown.mock.contexts[0]).toBe(component.$el)
    await patch({ options: { transition: false } })
    component.show(true)
    expect(legacyShown).toHaveBeenCalledOnce()
    expect(shown).toHaveBeenCalledTimes(2)
  })

  test(`${vue2 ? 'Vue 2' : 'Vue 3'} direct props preserve defaults and rebuild reactively`, async () => {
    const toolbar = { zoomIn: true }
    const filter = vi.fn(() => true)
    const { component, patch, instance } = await mount({
      toolbar,
      filter,
      title: false,
      inline: false,
      initialViewIndex: 0,
    })
    const first = instance()
    expect(first.options.button).toBe(true)
    expect(first.options.toolbar.zoomIn).toBe(true)
    expect(first.options.title).toBe(false)
    expect(first.options.filter).toBe(filter)
    expect(component.$el.getAttribute('id')).toBe('gallery')
    expect(component.$el.getAttribute('aria-label')).toBe('Photos')
    expect(component.$el.hasAttribute('toolbar')).toBe(false)
    const destroy = vi.spyOn(first, 'destroy')
    // Deep object mutations and omission must retain Vue's reactive behavior.
    if (vue2) {
      component.toolbar.zoomIn = false
      await Vue2.nextTick()
      await Vue2.nextTick()
    } else {
      component.$props.toolbar.zoomIn = false
      await nextTick()
    }
    expect(destroy).toHaveBeenCalledOnce()
    expect(instance().options.toolbar.zoomIn).toBe(false)
    await patch({ button: false, title: undefined })
    expect(instance().options.button).toBe(false)
    expect(instance().options.title).toBe(true)
  })

  test(`${vue2 ? 'Vue 2' : 'Vue 3'} Vue events preserve cancellation and fire once`, async () => {
    const prevent = vi.fn((event: Event) => event.preventDefault())
    const shown = vi.fn()
    const hidden = vi.fn()
    const ready = vi.fn()
    const { component, instance } = await mount(
      { transition: false },
      { show: prevent, shown, hidden, ready },
    )
    component.show(true)
    expect(prevent).toHaveBeenCalledOnce()
    expect(prevent.mock.calls[0][0].defaultPrevented).toBe(true)
    expect(shown).not.toHaveBeenCalled()
    prevent.mockImplementation(() => {})
    component.show(true)
    expect(shown).toHaveBeenCalledOnce()
    expect(ready).toHaveBeenCalledOnce()
    expect(shown.mock.calls[0][0].target).toBe(component.$el)
    component.hide(true)
    expect(hidden).toHaveBeenCalledOnce()
    expect(instance().isShown).toBe(false)
  })

  test(`${vue2 ? 'Vue 2' : 'Vue 3'} event forwarding preserves global callbacks and cleans up`, async () => {
    const globalShown = vi.fn()
    const shown = vi.fn()
    ViewerJs.setDefaults({ shown: globalShown })
    try {
      const { component } = await mount({ transition: false }, { shown })
      component.show(true)
      expect(globalShown).toHaveBeenCalledOnce()
      expect(shown).toHaveBeenCalledOnce()
      component.hide(true)
      component.$el
        .querySelector('img')
        .dispatchEvent(new CustomEvent('shown', { bubbles: true }))
      expect(shown).toHaveBeenCalledOnce()
      component.destroy()
      component.$el.dispatchEvent(new CustomEvent('shown'))
      expect(shown).toHaveBeenCalledOnce()
      component.createViewer()
      component.show(true)
      expect(shown).toHaveBeenCalledTimes(2)
      expect(globalShown).toHaveBeenCalledTimes(2)
    } finally {
      ViewerJs.setDefaults({ shown: undefined })
    }
  })

  for (const rebuild of [false, true]) {
    test(`${vue2 ? 'Vue 2' : 'Vue 3'} observes image DOM ${rebuild ? 'with rebuilding' : 'without rebuilding'} and no images prop`, async () => {
      const { component, instance } = await mount({ rebuild })
      expect(component.$options.props).not.toHaveProperty('images')
      expect(component.$options.props).not.toHaveProperty('trigger')
      const first = instance()
      const source = component.$el.querySelector('img')
      const added = document.createElement('img')
      added.src = 'b.jpg'
      component.$el.append(added)
      await vi.waitFor(() => expect(instance().images).toHaveLength(2))
      if (rebuild) expect(instance()).not.toBe(first)
      else expect(instance()).toBe(first)
      const beforeChange = instance()
      const update = vi.spyOn(beforeChange, 'update')
      source.setAttribute('data-source', 'large.jpg')
      await vi.waitFor(() => {
        if (rebuild) expect(instance()).not.toBe(beforeChange)
        else expect(update).toHaveBeenCalledOnce()
      })
      added.remove()
      await vi.waitFor(() => expect(instance().images).toHaveLength(1))
      expect(instance().images[0].getAttribute('data-source')).toBe('large.jpg')
      // Markdown/v-html can replace whole subtrees without reactive image data.
      component.$el.innerHTML =
        '<article><figure><img src="markdown.jpg"></figure><p><img src="html.jpg"></p></article>'
      await vi.waitFor(() =>
        expect(
          Array.from(instance().images as HTMLImageElement[], (image) =>
            image.getAttribute('src'),
          ),
        ).toEqual(['markdown.jpg', 'html.jpg']),
      )
    })
  }

  test(`${vue2 ? 'Vue 2' : 'Vue 3'} component ref exposes the current instance without inited`, async () => {
    const inited = vi.fn()
    const { component, patch, instance } = await mount(
      { transition: false },
      { inited },
    )
    const first = instance()
    expect(first).toBeInstanceOf(ViewerJs)
    first.show(true)
    expect(first.isShown).toBe(true)
    await patch({ toolbar: false })
    const current = instance()
    expect(current).not.toBe(first)
    expect(current.options.toolbar).toBe(false)
    current.show(true)
    expect(current.isShown).toBe(true)
    component.update()
    expect(instance()).toBe(current)
    component.destroy()
    expect(instance()).toBeUndefined()
    expect(inited).not.toHaveBeenCalled()
  })

  test(`${vue2 ? 'Vue 2' : 'Vue 3'} component methods forward arguments and clean up`, async () => {
    const { component, instance, unmount } = await mount({
      tooltip: false,
      transition: false,
    })
    for (const name of viewerMethods)
      expect(typeof component[name]).toBe('function')
    const viewer = instance()
    const zoom = vi.spyOn(viewer, 'zoom')
    const pivot = { x: 10, y: 20 }
    expect(component.zoom(0.25, true, pivot)).toBe(viewer)
    expect(zoom).toHaveBeenCalledWith(0.25, true, pivot)
    const tooltip = vi.spyOn(viewer, 'tooltip')
    component.showTooltip()
    expect(tooltip).toHaveBeenCalledOnce()
    expect(viewer.options.tooltip).toBe(false)
    component.destroy()
    expect(instance()).toBeUndefined()
    expect(component.show()).toBeUndefined()
    expect(document.querySelector('.viewer-container')).toBeNull()
    component.createViewer()
    expect(instance()).not.toBe(viewer)
    const update = vi.spyOn(instance(), 'update')
    component.update()
    expect(update).toHaveBeenCalledOnce()
    unmount()
    component.createViewer()
    component.show()
    expect(instance()).toBeUndefined()
    expect(document.querySelector('.viewer-container')).toBeNull()
  })
}
