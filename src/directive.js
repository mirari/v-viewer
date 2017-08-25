import Viewer from 'viewerjs'
import 'viewerjs/dist/viewer.css'

const defaults = {
  zIndex: 100000000
}

const install = (Vue, opts = {}) => {
  const name = opts.name || 'viewer'

  function createViewer (el, binding) {
    const options = Object.assign({}, defaults, binding.value)
    el[`$${name}`] && el[`$${name}`].destroy()
    el[`$${name}`] = new Viewer(el, options)
  }

  Vue.directive('viewer', {
    bind (el, binding) {
      console.log('viewer bind')
    },
    inserted: function (el, binding) {
      console.log('viewer inserted')
      createViewer(el, binding)
    },
    componentUpdated: function (el, binding) {
      console.log('viewer componentUpdated')
      createViewer(el, binding)
    },
    unbind (el, binding) {
      console.log('viewer unbind')
      el[`$${name}`] && el[`$${name}`].destroy()
    }
  })
}

export default {
  install
}
