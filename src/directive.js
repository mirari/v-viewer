import Viewer from 'viewerjs'
import { debounce } from 'throttle-debounce'

const install = (Vue, {name = 'viewer', debug = false}) => {
  function createViewer (el, options, rebuild = false, observer = false) {
    // nextTick执行，否则可能漏掉未渲染完的子元素
    Vue.nextTick(() => {
      // 如果无图片或者和上次比较没有变化，那么就没有必要重新初始化或更新
      if (observer && !imageDiff(el)) return
      if (rebuild || !el[`$${name}`]) {
        destroyViewer(el)
        el[`$${name}`] = new Viewer(el, options)
        log('Viewer created')
      } else {
        el[`$${name}`].update()
        log('Viewer updated')
      }
    })
  }

  function imageDiff (el) {
    const imageContent = el.innerHTML.match(/<img([\w\W]+?)[\\/]?>/g)
    const viewerImageText = imageContent ? imageContent.join('') : undefined
    if (el.__viewerImageDiffCache === viewerImageText) {
      log('Element change detected, but image(s) has not changed')
      return false
    } else {
      log('Image change detected')
      el.__viewerImageDiffCache = viewerImageText
      return true
    }
  }

  function createObserver (el, options, debouncedCreateViewer, rebuild) {
    destroyObserver(el)
    const MutationObserver = global.MutationObserver || global.WebKitMutationObserver || global.MozMutationObserver
    if (!MutationObserver) {
      log('Observer not supported')
      return
    }
    const observer = new MutationObserver(function (mutations) {
      mutations.forEach(function (mutation) {
        log('Viewer mutation:' + mutation.type)
        debouncedCreateViewer(el, options, rebuild, true)
      })
    })
    const config = { attributes: true, childList: true, characterData: true, subtree: true }
    observer.observe(el, config)
    el.__viewerMutationObserver = observer
    log('Observer created')
  }

  function createWatcher (el, {expression}, vnode, debouncedCreateViewer) {
    const simplePathRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/
    if (!expression || !simplePathRE.test(expression)) {
      log('Only simple dot-delimited paths can create watcher')
      return
    }
    el.__viewerUnwatch = vnode.context.$watch(expression, function (newVal, oldVal) {
      log('Change detected by watcher: ', expression)
      debouncedCreateViewer(el, newVal, true)
    }, {
      deep: true
    })
    log('Watcher created, expression: ', expression)
  }

  function destroyViewer (el) {
    if (!el[`$${name}`]) {
      return
    }
    el[`$${name}`].destroy()
    delete el[`$${name}`]
    log('Viewer destroyed')
  }

  function destroyObserver (el) {
    if (!el.__viewerMutationObserver) {
      return
    }
    el.__viewerMutationObserver.disconnect()
    delete el.__viewerMutationObserver
    log('Observer destroyed')
  }

  function destroyWatcher (el) {
    if (!el.__viewerUnwatch) {
      return
    }
    el.__viewerUnwatch()
    delete el.__viewerUnwatch
    log('Watcher destroyed')
  }

  function log () {
    debug && console.log(...arguments)
  }

  Vue.directive('viewer', {
    bind (el, binding, vnode) {
      log('Viewer bind')
      const debouncedCreateViewer = debounce(50, createViewer)
      debouncedCreateViewer(el, binding.value)

      // 创建watch监听options表达式变化
      createWatcher(el, binding, vnode, debouncedCreateViewer)

      // 是否监听dom变化
      if (!binding.modifiers.static) {
        // 增加dom变化监听
        createObserver(el, binding.value, debouncedCreateViewer, binding.modifiers.rebuild)
      }
    },
    unbind (el, binding) {
      log('Viewer unbind')
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
