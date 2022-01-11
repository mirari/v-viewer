import Viewer from 'viewerjs'
import { assign } from './util'
import component from './component.vue'
import directive from './directive'
import api from './api'

export {
  component,
  directive,
  api,
  Viewer,
}

export default {
  install(Vue, { name = 'viewer', debug = false, defaultOptions } = {}) {
    Viewer.setDefaults(defaultOptions)

    Vue.component(name, assign(component, { name }))
    Vue.directive(name, directive({ name, debug }))
    Vue.prototype[`$${name}Api`] = api
  },
  setDefaults(defaultOptions) {
    Viewer.setDefaults(defaultOptions)
  },
}
