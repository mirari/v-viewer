import Viewer from 'viewerjs'

const install = (Vue, {name = 'viewer', debug = false}) => {
  function createViewer (el, binding) {
    el[`$${name}`] && el[`$${name}`].destroy()
    Vue.nextTick(() => {
      const options = binding.value
      el[`$${name}`] = new Viewer(el, options)
    })
  }

  function createObserver (el, binding) {
    const MutationObserver = global.MutationObserver || global.WebKitMutationObserver || global.MozMutationObserver
    const observer = new MutationObserver(function (mutations) {
      mutations.forEach(function (mutation) {
        log('viewer mutation:' + mutation.type)
        createViewer(el, binding)
      })
    })
    const config = { attributes: true, childList: true, characterData: true, subtree: true }
    observer.observe(el, config)
    el['$viewerMutationObserver'] = observer
  }

  function log (content) {
    debug && console.log(content)
  }

  Vue.directive('viewer', {
    bind (el, binding) {
      log('viewer bind')
      createViewer(el, binding)
      // 增加dom变化监听
      createObserver(el, binding)
    },
    unbind (el, binding) {
      log('viewer unbind')
      // 销毁dom变化监听
      el['$viewerMutationObserver'] && el['$viewerMutationObserver'].disconnect()
      el[`$${name}`] && el[`$${name}`].destroy()
    }
  })
}

export default {
  install
}
