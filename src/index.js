import { extend } from './utils'
import ViewerJs from 'viewerjs'
import component from './component.vue'
import directive from './directive'
import viewer from './viewer'

export default {
  install (Vue, {name = 'viewer', debug = false, defaultOptions} = {}) {
    ViewerJs.setDefaults(defaultOptions)

    Vue.component(name, extend(component, { name }))
    Vue.use(directive, {name, debug})

    Vue.prototype.$viewer = viewer(Vue)
  },
  setDefaults (defaultOptions) {
    ViewerJs.setDefaults(defaultOptions)
  }
}
