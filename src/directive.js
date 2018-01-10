import Viewer from 'viewerjs'
import 'viewerjs/dist/viewer.css'

const install = (Vue, {name = 'viewer', debug = false}) => {
  function createViewer (el, binding) {
    el[`$${name}`] && el[`$${name}`].destroy()
    Vue.nextTick(() => {
      const options = binding.value
      el[`$${name}`] = new Viewer(el, options)
    })
  }

  function log (content) {
    debug && console.log(content)
  }

  Vue.directive('viewer', {
    bind (el, binding) {
      log('viewer bind')
    },
    inserted: function (el, binding) {
      log('viewer inserted')
      createViewer(el, binding)
    },
    componentUpdated: function (el, binding) {
      log('viewer componentUpdated')
      createViewer(el, binding)
    },
    unbind (el, binding) {
      log('viewer unbind')
      el[`$${name}`] && el[`$${name}`].destroy()
    }
  })
}

export default {
  install
}
