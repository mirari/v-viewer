import { extend } from './utils'
import Viewer from 'viewerjs'
import component from './component.vue'
import directive from './directive'
import api from './api'

export {
  component,
  directive,
  api,
  Viewer
}

export default {
  install (Vue, {name = 'viewer', debug = false, defaultOptions} = {}) {
    Viewer.setDefaults(defaultOptions)

    Vue.component(name, extend(component, { name }))
    Vue.directive(name, directive({ name, debug }))
    Vue.prototype[`$${name}Api`] = api
  },
  setDefaults (defaultOptions) {
    Viewer.setDefaults(defaultOptions)
  }
}
