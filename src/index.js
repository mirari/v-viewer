import {extend} from './utils'
import Component from './component.vue'
import directive from './directive'

export default {
  install (Vue, opts = {}) {
    const name = opts.name || 'viewer'
    Vue.component(name, extend(Component, { name }))
    Vue.use(directive, {name})
  }
}
