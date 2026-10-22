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
  ViewerImage,
  ViewerOptions,
} from '../../core/src/index.js'

export { ViewerJs } from '../../core/src/index.js'
export type {
  ViewerOptions,
  ViewerImage,
  ViewerApiOptions,
  ViewerElement,
} from '../../core/src/index.js'
export const viewerApi = showViewer

const controllers = new WeakMap<Vue, ViewerController>()
export type ViewerInstance = VueInstanceType & {
  images: ViewerImage[]
  options: ViewerOptions
  rebuild: boolean
  trigger?: unknown
  createViewer(): void
  updateViewer(): void
  rebuildViewer(): void
  destroyViewer(): void
  changeViewer(): void
}
export const Viewer: ReturnType<typeof VueInstanceType.extend> &
  (new (...args: any[]) => ViewerInstance) = Vue.extend({
  name: 'Viewer',
  props: {
    images: { type: Array, default: () => [] as ViewerImage[] },
    options: { type: Object, default: () => ({}) as ViewerOptions },
    rebuild: Boolean,
    trigger: { default: undefined },
  },
  mounted() {
    this.createViewer()
  },
  beforeDestroy() {
    this._viewerDisposed = true
    this.destroyViewer()
  },
  watch: {
    options: {
      deep: true,
      handler() {
        this.$nextTick(() => this.rebuildViewer())
      },
    },
    images: {
      deep: true,
      handler() {
        this.$nextTick(() => this.changeViewer())
      },
    },
    trigger: {
      deep: true,
      handler() {
        this.$nextTick(() => this.changeViewer())
      },
    },
    rebuild() {
      this.$nextTick(() => this.changeViewer())
    },
  },
  methods: {
    createViewer() {
      if (controllers.has(this) || this.$isServer || this._viewerDisposed)
        return
      controllers.set(
        this,
        createViewerController(this.$el as HTMLElement, {
          options: this.options,
          rebuild: this.rebuild,
          onInit: (viewer) => {
            this.$viewer = viewer
            this.$emit('inited', viewer)
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
            .configure({ options: this.options, rebuild: this.rebuild })
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
        images: this.images,
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
