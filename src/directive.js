import Viewer from 'viewerjs'
import 'viewerjs/dist/viewer.css'
import {extend} from './utils'

const defaults = {
  debug: false,
  zIndex: 100000000
}

const install = (Vue, opts = {}) => {
  const name = opts.name || 'viewer'

  function createViewer (el, binding) {
    const options = extend(true, {}, defaults, binding.value)
    el[`$${name}`] && el[`$${name}`].destroy()
    el[`$${name}`] = new Viewer(el, options)
  }

  function log (content, binding) {
    const {debug} = extend(true, {}, defaults, binding.value)
    debug && console.log(content)
  }

  Vue.directive('viewer', {
    bind (el, binding) {
      log('viewer bind', binding)
    },
    inserted: function (el, binding) {
      log('viewer inserted', binding)
      createViewer(el, binding)
    },
    componentUpdated: function (el, binding) {
      log('viewer componentUpdated', binding)
      createViewer(el, binding)
    },
    unbind (el, binding) {
      log('viewer unbind', binding)
      el[`$${name}`] && el[`$${name}`].destroy()
    }
  })
}

export default {
  install
}
