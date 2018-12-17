import Viewer from 'viewerjs'
import { debounce } from 'throttle-debounce'

const install = (Vue, {name = 'viewer', debug = false}) => {
  function createViewer (el, options) {
    // nextTick执行，否则可能漏掉未渲染完的子元素
    Vue.nextTick(() => {
      destroyViewer(el)
      el[`$${name}`] = new Viewer(el, options)
      log('viewer created')
    })
  }

  function createObserver (el, options, debouncedCreateViewer) {
    destroyObserver(el)
    const MutationObserver = global.MutationObserver || global.WebKitMutationObserver || global.MozMutationObserver
    if (!MutationObserver) {
      log('observer not supported')
      return
    }
    const observer = new MutationObserver(function (mutations) {
      mutations.forEach(function (mutation) {
        log('viewer mutation:' + mutation.type)
        debouncedCreateViewer(el, options)
      })
    })
    const config = { attributes: true, childList: true, characterData: true, subtree: true }
    observer.observe(el, config)
    el['$viewerMutationObserver'] = observer
    log('observer created')
  }

  function createWatcher (el, {expression}, vnode, debouncedCreateViewer) {
    const simplePathRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/
    if (!simplePathRE.test(expression)) {
      log('only simple dot-delimited paths can create watcher')
      return
    }
    el['$viewerUnwatch'] = vnode.context.$watch(expression, function (newVal, oldVal) {
      log('change detected by watcher: ', expression)
      debouncedCreateViewer(el, newVal)
    }, {
      deep: true
    })
    log('watcher created, expression: ', expression)
  }

  function destroyViewer (el) {
    if (!el[`$${name}`]) {
      return
    }
    el[`$${name}`].destroy()
    delete el[`$${name}`]
    log('viewer destroyed')
  }

  function destroyObserver (el) {
    if (!el['$viewerMutationObserver']) {
      return
    }
    el['$viewerMutationObserver'].disconnect()
    delete el['$viewerMutationObserver']
    log('observer destroyed')
  }

  function destroyWatcher (el) {
    if (!el['$viewerUnwatch']) {
      return
    }
    el['$viewerUnwatch']()
    delete el['$viewerUnwatch']
    log('watcher destroyed')
  }

  function log () {
    debug && console.log(...arguments)
  }

  Vue.directive('viewer', {
    bind (el, binding, vnode) {
      log('viewer bind')
      const debouncedCreateViewer = debounce(50, createViewer)
      debouncedCreateViewer(el, binding.value)

      // 创建watch监听options表达式变化
      createWatcher(el, binding, vnode, debouncedCreateViewer)

      // 是否监听dom变化
      if (!binding.modifiers.static) {
        // 增加dom变化监听
        createObserver(el, binding.value, debouncedCreateViewer)
      }
    },
    unbind (el, binding) {
      log('viewer unbind')
      // 销毁dom变化监听
      destroyObserver(el)
      // 销毁指令表达式监听
      destroyWatcher(el)
      // 销毁viewer
      destroyViewer(el)
    }
  })
}

export default {
  install
}
