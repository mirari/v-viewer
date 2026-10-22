import Vue from 'vue'
import type { DirectiveOptions, PluginObject, VueConstructor } from 'vue'
import type { Vue as VueInstanceType } from 'vue/types/vue.js'
import type ViewerJsType from 'viewerjs'
import { createToolbarBridge, toolbarState } from '../../core/src/toolbar.js'
import type {
  ToolbarMount,
  ViewerToolbarScope,
} from '../../core/src/toolbar.js'
import type { VNode } from 'vue'
export type { ViewerToolbarScope } from '../../core/src/toolbar.js'
export interface ViewerSlots {
  default?: (scope: { options: ViewerOptions }) => VNode[]
  toolbar?: (scope: ViewerToolbarScope) => VNode[]
  'toolbar-append'?: (scope: ViewerToolbarScope) => VNode[]
}
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
  bindViewerMethods,
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
const toolbars = new WeakMap<
  Vue,
  {
    bridge: ReturnType<typeof createToolbarBridge>
    portals: Map<ToolbarMount, Vue>
  }
>()
function clearToolbar(vm: Vue) {
  vm.$viewer = undefined
  const state = toolbars.get(vm)
  if (!state) return
  for (const portal of state.portals.values()) {
    portal.$destroy()
    portal.$el.remove()
  }
  state.portals.clear()
  state.bridge.clear()
}
function syncToolbar(vm: Vue) {
  const state = toolbars.get(vm)
  if (!state) return
  const mounts = state.bridge.sync(vm.$viewer, (name) => {
    // Vue 2's legacy slot-scope syntax keeps a function for v-if=false.
    // Treat its empty result as an absent replacement slot.
    if (name === 'toolbar') {
      const owner = vm as ViewerInstance
      const content =
        vm.$scopedSlots.toolbar?.({
          ...bindViewerMethods(() => vm.$viewer),
          update: () => owner.update(),
          destroy: () => owner.destroy(),
          ...toolbarState(vm.$viewer),
        }) || vm.$slots.toolbar
      return !!content?.some(
        (node) => !node.isComment && (!!node.tag || !!node.text?.trim()),
      )
    }
    return !!vm.$scopedSlots[name] || !!vm.$slots[name]
  })
  for (const [mount, portal] of state.portals) {
    if (mounts.indexOf(mount) !== -1) continue
    portal.$destroy()
    portal.$el.remove()
    state.portals.delete(mount)
  }
  for (const mount of mounts) {
    const existing = state.portals.get(mount)
    if (existing) {
      existing.$forceUpdate()
      continue
    }
    const methods = bindViewerMethods(() => vm.$viewer)
    const portal = new Vue({
      parent: vm,
      render(h) {
        const owner = vm as ViewerInstance
        const scope: ViewerToolbarScope = {
          ...methods,
          update: () => owner.update(),
          destroy: () => owner.destroy(),
          ...toolbarState(vm.$viewer),
        }
        return h(
          'span',
          { style: { display: 'contents' } },
          vm.$scopedSlots[mount.slot]?.(scope) || vm.$slots[mount.slot],
        )
      },
    }).$mount()
    mount.target.appendChild(portal.$el)
    state.portals.set(mount, portal)
  }
}
export type ViewerInstance = VueInstanceType &
  ViewerOptionProps &
  ViewerMethods & {
    $scopedSlots: ViewerSlots
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
  updated() {
    syncToolbar(this)
  },
  beforeDestroy() {
    this._viewerDisposed = true
    this.destroyViewer()
    toolbars.delete(this)
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
          onEvent: (name, event) => {
            syncToolbar(this)
            this.$emit(name, event)
          },
          onDestroy: () => clearToolbar(this),
          onInit: (viewer) => {
            this.$viewer = viewer
            syncToolbar(this)
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
    toolbars.set(this, { bridge: createToolbarBridge(), portals: new Map() })
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
