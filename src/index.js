import { extend } from './utils'
import ViewerJs from 'viewerjs'
import component from './component.vue'
import directive from './directive'
import api from './api'

export {
  component,
  directive,
  api,
  ViewerJs
}

export default {
  install (Vue, {name = 'viewer', debug = false, defaultOptions} = {}) {
    ViewerJs.setDefaults(defaultOptions)

    Vue.component(name, extend(component, { name }))
    Vue.directive(name, directive({ name, debug }))
    Vue.prototype[`$${name}Api`] = api(Vue)
  },
  setDefaults (defaultOptions) {
    ViewerJs.setDefaults(defaultOptions)
  }
}
