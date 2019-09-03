import { extend } from './utils'
import Component from './component.vue'
import directive from './directive'
import Viewer from 'viewerjs'

export default {
  install (Vue, { name = 'viewer', debug = false, defaultOptions } = {}) {
    Viewer.setDefaults(defaultOptions)

    Vue.component(name, extend(Component, { name }))
    Vue.use(directive, { name, debug })
  },
  setDefaults (defaultOptions) {
    Viewer.setDefaults(defaultOptions)
  },
}
