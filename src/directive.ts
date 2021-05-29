import ViewerJs from 'viewerjs'
import debounce from 'lodash/debounce'
import { nextTick, watch } from 'vue'
import type { Directive, DirectiveBinding, VNode } from 'vue'

export type IcreateViewer = (el: HTMLElement, options: ViewerJs.Options, rebuild: boolean) => void

const directive = ({ name = 'viewer', debug = false }) => {
  async function createViewer(el: HTMLElement, options: ViewerJs.Options, rebuild = false) {
    await nextTick()
    if (rebuild || !el[`$${name}`]) {
      destroyViewer(el)
      el[`$${name}`] = new ViewerJs(el, options)
      log('viewer created')
    }
    else {
      el[`$${name}`].update()
      log('viewer updated')
    }
  }

  function createObserver(el: HTMLElement, options: ViewerJs.Options, debouncedCreateViewer: IcreateViewer, rebuild: boolean) {
    destroyObserver(el)
    const MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver
    if (!MutationObserver) {
      log('observer not supported')
      return
    }
    const observer = new MutationObserver((mutations) => {
      const matchImage = el.innerHTML.match(/<img([\w\W]+?)[\\/]?>/g)
      // When there is no image, it is not recreated.
      if (matchImage === null) {
        log('observer no image')
        return
      }
      // When there is no change, it is not recreated.
      const $viewerNewImage = matchImage.join('')
      if (el.$viewerOldImage === $viewerNewImage) {
        log('observer no change')
        return
      }
      else {
        el.$viewerOldImage = $viewerNewImage
      }
      mutations.forEach((mutation) => {
        log(`viewer mutation:${mutation.type}`)
        debouncedCreateViewer(el, options, rebuild)
      })
    })
    const config = { attributes: true, childList: true, characterData: true, subtree: true }
    observer.observe(el, config)
    el.$viewerMutationObserver = observer
    log('observer created')
  }

  function createWatcher(el: HTMLElement, binding: DirectiveBinding, vnode: VNode, debouncedCreateViewer: IcreateViewer) {
    // const simplePathRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/
    // if (!binding.value || !simplePathRE.test(binding.value)) {
    //   log('only simple dot-delimited paths can create watcher')
    //   return
    // }
    el.$viewerUnwatch = watch(() => binding.value, (newVal, oldVal) => {
      log('change detected by watcher: ', binding.value)
      debouncedCreateViewer(el, newVal, true)
    }, { deep: true })
    log('watcher created, expression: ', binding.value)
  }

  function destroyViewer(el: HTMLElement) {
    if (!el[`$${name}`]) {
      return
    }
    el[`$${name}`].destroy()
    delete el[`$${name}`]
    log('viewer destroyed')
  }

  function destroyObserver(el: HTMLElement) {
    if (!el.$viewerMutationObserver) {
      return
    }
    el.$viewerMutationObserver.disconnect()
    delete el.$viewerMutationObserver
    log('observer destroyed')
  }

  function destroyWatcher(el: HTMLElement) {
    if (!el.$viewerUnwatch) {
      return
    }
    el.$viewerUnwatch()
    delete el.$viewerUnwatch
    log('watcher destroyed')
  }

  function log(...args: any[]) {
    debug && console.log(...args)
  }

  const directive: Directive = {
    mounted(el, binding, vnode) {
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
    unmounted(el) {
      log('viewer unbind')
      // 销毁dom变化监听
      destroyObserver(el)
      // 销毁指令表达式监听
      destroyWatcher(el)
      // 销毁viewer
      destroyViewer(el)
    },
  }

  return directive
}

export default directive
