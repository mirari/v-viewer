import Vue from 'vue'
import type { DirectiveOptions, PluginObject, VueConstructor } from 'vue'
import type { Vue as VueInstanceType } from 'vue/types/vue.js'
import type ViewerJsType from 'viewerjs'
import {
  ViewerJs,
  createViewerController,
  createDirectiveHooks,
  showViewer,
} from '../../core/src/index.js'
import type {
  ViewerController,
  ViewerOptions,
  ViewerObserve,
} from '../../core/src/index.js'

import {
  viewerOptionProps,
  viewerMethods,
  collectViewerOptions,
} from '../../core/src/component.js'
import type {
  ViewerOptionProps,
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
  ViewerApiOptions,
  ViewerElement,
  ViewerObserve,
  ViewerDirectiveOptions,
} from '../../core/src/index.js'
export const viewerApi = showViewer

const controllers = new WeakMap<Vue, ViewerController>()
export type ViewerInstance = VueInstanceType &
  ViewerOptionProps &
  ViewerMethods & {
    /** @deprecated Bind Viewer.js settings as props and callbacks as Vue events. */
    options: ViewerOptions
    rebuild: boolean
    observe: ViewerObserve
    createViewer(): void
    updateViewer(): void
    rebuildViewer(): void
    destroyViewer(): void
    changeViewer(): void
  }
const forwardedMethods = Object.fromEntries(
  viewerMethods.map((name) => [
    name,
    function (this: VueInstanceType, ...args: unknown[]) {
      const viewer = this.$viewer
      return (
        viewer?.[name] as ((...args: unknown[]) => ViewerJsType) | undefined
      )?.apply(viewer, args)
    },
  ]),
) as Pick<ViewerMethods, (typeof viewerMethods)[number]>

export const Viewer: ReturnType<typeof VueInstanceType.extend> &
  (new (...args: any[]) => ViewerInstance) = Vue.extend({
  name: 'Viewer',
  props: {
    ...viewerOptionProps,
    options: { type: Object, default: () => ({}) as ViewerOptions },
    rebuild: Boolean,
    observe: { type: [Boolean, Number], default: true },
  },
  computed: {
    viewerOptions(): ViewerOptions {
      return collectViewerOptions(this.$props)
    },
  },
  mounted() {
    this.createViewer()
  },
  beforeDestroy() {
    this._viewerDisposed = true
    this.destroyViewer()
  },
  watch: {
    observe(value: ViewerObserve) {
      controllers.get(this)?.configure({ observe: value })
    },
    viewerOptions: {
      deep: true,
      handler() {
        this.$nextTick(() => this.rebuildViewer())
      },
    },
    rebuild() {
      this.$nextTick(() => this.changeViewer())
    },
  },
  methods: {
    ...forwardedMethods,
    showTooltip() {
      return this.$viewer?.tooltip()
    },
    update() {
      this.updateViewer()
    },
    destroy() {
      this.destroyViewer()
    },
    createViewer() {
      if (controllers.has(this) || this.$isServer || this._viewerDisposed)
        return
      controllers.set(
        this,
        createViewerController(this.$el as HTMLElement, {
          options: this.viewerOptions,
          rebuild: this.rebuild,
          observe: this.observe,
          onEvent: (name, event) => this.$emit(name, event),
          onInit: (viewer) => {
            this.$viewer = viewer
          },
        }),
      )
    },
    destroyViewer() {
      controllers.get(this)?.dispose()
      controllers.delete(this)
      this.$viewer = undefined
    },
    updateViewer() {
      controllers.has(this)
        ? controllers.get(this)!.refresh(false)
        : this.createViewer()
    },
    rebuildViewer() {
      controllers.has(this)
        ? controllers
            .get(this)!
            .configure({ options: this.viewerOptions, rebuild: this.rebuild })
        : this.createViewer()
    },
    changeViewer() {
      controllers.get(this)?.configure({ rebuild: this.rebuild }, this.rebuild)
    },
  },
  beforeCreate() {
    this._viewerDisposed = false
  },
  destroyed() {
    this._viewerDisposed = true
  },
  render(h) {
    return h(
      'div',
      this.$scopedSlots.default?.({
        options: this.options,
      }) || this.$slots.default,
    )
  },
})

const hooks = createDirectiveHooks()
const directiveWatchers = new WeakMap<HTMLElement, () => void>()
const observeOptions: NonNullable<DirectiveOptions['inserted']> = (
  element,
  binding,
  vnode,
) => {
  directiveWatchers.get(element)?.()
  if (vnode.context) {
    const unwatch = vnode.context.$watch(
      () => binding.value,
      () => hooks.update(element, binding),
      { deep: true },
    )
    directiveWatchers.set(element, unwatch)
  }
}
export const vViewer: DirectiveOptions = {
  inserted(element, binding, vnode, oldVnode) {
    hooks.mount(element, binding)
    observeOptions(element, binding, vnode, oldVnode)
  },
  componentUpdated(element, binding, vnode, oldVnode) {
    hooks.update(element, binding)
    observeOptions(element, binding, vnode, oldVnode)
  },
  unbind(element) {
    directiveWatchers.get(element)?.()
    directiveWatchers.delete(element)
    hooks.unmount(element)
  },
}
export interface InstallationOptions {
  name?: string
  defaultOptions?: ViewerOptions
}
const plugin: PluginObject<InstallationOptions> & {
  setDefaults: typeof ViewerJs.setDefaults
} = {
  install(
    VueClass: VueConstructor,
    { name = 'viewer', defaultOptions }: InstallationOptions = {},
  ) {
    if (defaultOptions) ViewerJs.setDefaults(defaultOptions)
    VueClass.component(name, Viewer)
    VueClass.directive(name, vViewer)
    VueClass.prototype[`$${name}Api`] = viewerApi
  },
  setDefaults: (options) => ViewerJs.setDefaults(options),
}
export default plugin

declare module 'vue/types/vue' {
  interface Vue {
    $viewerApi: typeof viewerApi
    $viewer?: ViewerJsType
    /** @internal */ _viewerDisposed?: boolean
  }
}
