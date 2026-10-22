import { afterEach, expect, test, vi } from 'vitest'
import { createApp, h, nextTick, reactive, ref } from 'vue'
import { Viewer } from '../packages/vue3/src/index'
import { Viewer as Viewer2 } from '../packages/vue2/src/index'

const Vue2 = (Viewer2 as any).super
const cleanups: (() => void)[] = []
afterEach(() => {
  for (const cleanup of cleanups.splice(0)) cleanup()
  document.body.innerHTML = ''
})
async function flush() {
  await nextTick()
  await Vue2.nextTick()
  await nextTick()
}

for (const vue2 of [false, true]) {
  async function mount(inline = false) {
    const values = {
      full: false,
      append: true,
      label: 'Download',
      toolbar: true,
      inline,
    }
    const state = vue2 ? values : reactive(values)
    const host = document.createElement('div')
    document.body.append(host)
    const exposed = ref()
    let app: any
    let lastScope: any
    const download = vi.fn()
    const customZoom = vi.fn()
    const toolbarOptions = {
      zoomIn: { click: customZoom },
      zoomOut: true,
      prev: true,
    }
    const Icon = {
      inject: ['marker'],
      render(this: any, create: any) {
        const render = vue2 ? create : h
        const attrs = {
          'data-test': 'zoom-icon',
          'data-marker': this.marker,
          viewBox: '0 0 20 20',
        }
        return render('svg', vue2 ? { attrs } : attrs, [
          render(
            'path',
            vue2 ? { attrs: { d: 'M0 0L20 20' } } : { d: 'M0 0L20 20' },
          ),
        ])
      },
    }
    const render = (create: any, data: typeof values) => {
      const node = (
        tag: string,
        attrs: any = {},
        children: any = [],
        click?: () => void,
      ) =>
        create(
          tag,
          vue2
            ? { attrs, on: click ? { click } : {} }
            : { ...attrs, onClick: click },
          children,
        )
      const slotScope = (scope: any) => {
        lastScope = scope
        return scope
      }
      const slots: any = {
        default: () => [
          node('img', { src: 'one.jpg' }),
          node('img', { src: 'two.jpg' }),
        ],
      }
      if (data.append)
        slots['toolbar-append'] = (scope: any) => {
          slotScope(scope)
          return [
            node(
              'button',
              { 'data-test': 'download' },
              [data.label + ':' + scope.index],
              () => download(scope.image),
            ),
          ]
        }
      if (data.full || vue2)
        slots.toolbar = (scope: any) => {
          if (!data.full) return []
          slotScope(scope)
          return [
            node(
              'button',
              { 'data-test': 'rotate' },
              [create(Icon), 'Rotate'],
              () => scope.rotate(90),
            ),
          ]
        }
      const props = {
        transition: false,
        inline: data.inline,
        toolbar: data.toolbar ? toolbarOptions : false,
      }
      return vue2
        ? create(Viewer2, { ref: 'gallery', props, scopedSlots: slots })
        : create(Viewer, { ...props, ref: exposed }, slots)
    }
    if (vue2) {
      app = new Vue2({
        provide: { marker: 'parent-context' },
        data: () => ({ state }),
        render(this: any, create: any) {
          return render(create, this.state)
        },
      }).$mount(host)
    } else {
      app = createApp({
        provide: { marker: 'parent-context' },
        render: () => render(h, state),
      })
      app.mount(host)
    }
    const component = vue2 ? app.$refs.gallery : exposed.value
    const instance = () => (vue2 ? component.$viewer : component.viewer)
    const open = async () => {
      if (inline) instance().build()
      else component.show(true)
      await flush()
    }
    await open()
    let removed = false
    const unmount = () => {
      if (removed) return
      removed = true
      vue2 ? app.$destroy() : app.unmount()
    }
    cleanups.push(unmount)
    return {
      component,
      instance,
      state,
      open,
      download,
      customZoom,
      unmount,
      scope: () => lastScope,
    }
  }

  test(`${vue2 ? 'Vue 2' : 'Vue 3'} appended controls preserve native actions`, async () => {
    const { instance, customZoom } = await mount()
    instance().toolbar.querySelector('.viewer-zoom-in').click()
    expect(customZoom).toHaveBeenCalledOnce()
    expect(customZoom.mock.instances[0]).toBe(instance())
  })

  test(`${vue2 ? 'Vue 2' : 'Vue 3'} replacement, append and reactive content do not rebuild the gallery`, async () => {
    const { instance, state, download } = await mount()
    const previous = instance()
    state.full = true
    await flush()
    const toolbar = instance().toolbar as HTMLElement
    expect(toolbar.querySelector('ul')!.style.display).toBe('none')
    expect(toolbar.querySelector('svg')!.getAttribute('data-marker')).toBe(
      'parent-context',
    )
    const rotate = vi.spyOn(instance(), 'rotate')
    toolbar
      .querySelector('path')!
      .dispatchEvent(new MouseEvent('click', { bubbles: true }))
    expect(rotate).toHaveBeenCalledExactlyOnceWith(90)
    state.label = 'Save'
    await flush()
    expect(toolbar.querySelector('[data-test="download"]')!.textContent).toBe(
      'Save:0',
    )
    ;(toolbar.querySelector('[data-test="download"]') as HTMLElement).click()
    expect(download).toHaveBeenCalledOnce()
    await new Promise((resolve) => setTimeout(resolve, 80))
    expect(instance()).toBe(previous)
    state.full = false
    state.append = false
    await flush()
    expect(toolbar.querySelector('ul')!.style.display).toBe('')
    expect(toolbar.querySelector('[data-test="rotate"]')).toBeNull()
    expect(toolbar.querySelector('[data-test="download"]')).toBeNull()
    expect(toolbar.querySelector('svg')).toBeNull()
  })

  test(`${vue2 ? 'Vue 2' : 'Vue 3'} scope follows viewed images and methods follow rebuilt instances`, async () => {
    const { component, instance, scope, open, state, download } = await mount()
    const previous = instance()
    expect(scope().image).toBeUndefined()
    const image = instance().image as HTMLImageElement
    image.src = 'large.jpg'
    Object.assign(instance(), { image, index: 1, viewed: true })
    component.$el.dispatchEvent(new CustomEvent('viewed'))
    await flush()
    expect(scope().image).toBe(image)
    expect(scope().index).toBe(1)
    instance().toolbar.querySelector('[data-test="download"]').click()
    expect(download).toHaveBeenCalledWith(image)
    const oldScope = scope()
    component.rebuildViewer()
    await open()
    expect(instance()).not.toBe(previous)
    const rotate = vi.spyOn(instance(), 'rotate')
    oldScope.rotate(45)
    expect(rotate).toHaveBeenCalledExactlyOnceWith(45)
    expect(document.querySelectorAll('[data-test="download"]')).toHaveLength(1)
    state.toolbar = false
    await flush()
    await open()
    expect(
      document.querySelectorAll(
        '[data-test="download"], [data-test="zoom-icon"]',
      ),
    ).toHaveLength(0)
  })

  test.each([false, true])(
    `${vue2 ? 'Vue 2' : 'Vue 3'} cleans up toolbar portals (inline=%s)`,
    async (inline) => {
      const { component, instance, unmount, open } = await mount(inline)
      const oldToolbar = instance().toolbar as HTMLElement
      expect(oldToolbar.querySelector('[data-test="download"]')).not.toBeNull()
      component.destroy()
      await flush()
      expect(
        oldToolbar.querySelector('[data-test="download"], style'),
      ).toBeNull()
      component.createViewer()
      await open()
      const newToolbar = instance().toolbar as HTMLElement
      expect(
        newToolbar.querySelectorAll('[data-test="download"]'),
      ).toHaveLength(1)
      unmount()
      await flush()
      expect(
        newToolbar.querySelector('[data-test="download"], style'),
      ).toBeNull()
      expect(document.querySelector('.viewer-container')).toBeNull()
    },
  )
}
