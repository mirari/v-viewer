import Viewer from 'viewerjs'
import debounce from 'lodash/debounce'
import { App, nextTick } from 'vue'

const install = (app: App, { name = 'viewer', debug = false }) => {
  async function createViewer (el: HTMLElement, options: Viewer.Options, rebuild = false) {
    // nextTick执行，否则可能漏掉未渲染完的子元素
    await nextTick()
    if (rebuild || !el[`$${name}`]) {
      destroyViewer(el)
      el[`$${name}`] = new Viewer(el, options)
      log('viewer created')
    } else {
      el[`$${name}`].update()
      log('viewer updated')
    }
  }

  function createObserver (el: HTMLElement, options: Viewer.Options, debouncedCreateViewer, rebuild: boolean) {
    destroyObserver(el)
    const MutationObserver = global.MutationObserver || global.WebKitMutationObserver || global.MozMutationObserver
    if (!MutationObserver) {
      log('observer not supported')
      return
    }
    const observer = new MutationObserver(function (mutations) {
      mutations.forEach(function (mutation) {
        log('viewer mutation:' + mutation.type)
        debouncedCreateViewer(el, options, rebuild)
      })
    })
    const config = { attributes: true, childList: true, characterData: true, subtree: true }
    observer.observe(el, config)
    el.$viewerMutationObserver = observer
    log('observer created')
  }

  function createWatcher (el: HTMLElement, { expression }, vnode, debouncedCreateViewer) {
    const simplePathRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/
    if (!expression || !simplePathRE.test(expression)) {
      log('only simple dot-delimited paths can create watcher')
      return
    }
    el.$viewerUnwatch = vnode.context.$watch(expression, function (newVal, oldVal) {
      log('change detected by watcher: ', expression)
      debouncedCreateViewer(el, newVal, true)
    }, {
      deep: true,
    })
    log('watcher created, expression: ', expression)
  }

  function destroyViewer (el: HTMLElement) {
    if (!el[`$${name}`]) {
      return
    }
    el[`$${name}`].destroy()
    delete el[`$${name}`]
    log('viewer destroyed')
  }

  function destroyObserver (el: HTMLElement) {
    if (!el.$viewerMutationObserver) {
      return
    }
    el.$viewerMutationObserver.disconnect()
    delete el.$viewerMutationObserver
    log('observer destroyed')
  }

  function destroyWatcher (el: HTMLElement) {
    if (!el.$viewerUnwatch) {
      return
    }
    el.$viewerUnwatch()
    delete el.$viewerUnwatch
    log('watcher destroyed')
  }

  function log (...args: any[]) {
    debug && console.log(...args)
  }

  Vue.directive('viewer', {
    bind (el: HTMLElement, binding, vnode) {
      log('viewer bind')
      const debouncedCreateViewer = debounce(createViewer, 50)
      debouncedCreateViewer(el, binding.value)

      // 创建watch监听options表达式变化
      createWatcher(el, binding, vnode, debouncedCreateViewer)

      // 是否监听dom变化
      if (!binding.modifiers.static) {
        // 增加dom变化监听
        createObserver(el, binding.value, debouncedCreateViewer, binding.modifiers.rebuild)
      }
    },
    unbind (el: HTMLElement, binding) {
      log('viewer unbind')
      // 销毁dom变化监听
      destroyObserver(el)
      // 销毁指令表达式监听
      destroyWatcher(el)
      // 销毁viewer
      destroyViewer(el)
    },
  })
}

export default {
  install,
}
