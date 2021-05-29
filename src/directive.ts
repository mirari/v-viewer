import ViewerJs from 'viewerjs'
import debounce from 'lodash/debounce'
import { nextTick, watch } from 'vue'
import type { Directive, DirectiveBinding, VNode } from 'vue'

export type ICreateViewer = (el: HTMLElement, options: ViewerJs.Options, rebuild: boolean, observer: boolean) => void

const directive = ({ name = 'viewer', debug = false }) => {
  async function createViewer(el: HTMLElement, options: ViewerJs.Options, rebuild = false, observer = false) {
    await nextTick()
    // 如果启用了元素监听，但和上次比较没有变化，就不重新初始化或更新
    if (observer && !imageDiff(el)) return
    if (rebuild || !el[`$${name}`]) {
      destroyViewer(el)
      el[`$${name}`] = new ViewerJs(el, options)
      log('Viewer created')
    }
    else {
      el[`$${name}`].update()
      log('Viewer updated')
    }
  }

  function imageDiff(el: HTMLElement) {
    const imageContent = el.innerHTML.match(/<img([\w\W]+?)[\\/]?>/g)
    const viewerImageText = imageContent ? imageContent.join('') : undefined
    if (el.__viewerImageDiffCache === viewerImageText) {
      log('Element change detected, but image(s) has not changed')
      return false
    }
    else {
      log('Image change detected')
      el.__viewerImageDiffCache = viewerImageText
      return true
    }
  }

  function createObserver(el: HTMLElement, options: ViewerJs.Options, debouncedCreateViewer: ICreateViewer, rebuild: boolean) {
    destroyObserver(el)
    const MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver
    if (!MutationObserver) {
      log('Observer not supported')
      return
    }
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        log(`Viewer mutation:${mutation.type}`)
        debouncedCreateViewer(el, options, rebuild, true)
      })
    })
    const config = { attributes: true, childList: true, characterData: true, subtree: true }
    observer.observe(el, config)
    el.__viewerMutationObserver = observer
    log('Observer created')
  }

  function createWatcher(el: HTMLElement, binding: DirectiveBinding, vnode: VNode, debouncedCreateViewer: ICreateViewer) {
    // const simplePathRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/
    // if (!binding.value || !simplePathRE.test(binding.value)) {
    //   log('Only simple dot-delimited paths can create watcher')
    //   return
    // }
    el.__viewerUnwatch = watch(() => binding.value, (newVal, oldVal) => {
      log('Change detected by watcher: ', binding.value)
      debouncedCreateViewer(el, newVal, true, false)
    }, { deep: true })
    log('Watcher created, expression: ', binding.value)
  }

  function destroyViewer(el: HTMLElement) {
    if (!el[`$${name}`]) {
      return
    }
    el[`$${name}`].destroy()
    delete el[`$${name}`]
    log('Viewer destroyed')
  }

  function destroyObserver(el: HTMLElement) {
    if (!el.__viewerMutationObserver) {
      return
    }
    el.__viewerMutationObserver.disconnect()
    delete el.__viewerMutationObserver
    log('observer destroyed')
  }

  function destroyWatcher(el: HTMLElement) {
    if (!el.__viewerUnwatch) {
      return
    }
    el.__viewerUnwatch()
    delete el.__viewerUnwatch
    log('Watcher destroyed')
  }

  function log(...args: any[]) {
    debug && console.log(...args)
  }

  const directive: Directive = {
    mounted(el, binding, vnode) {
      log('Viewer bind')
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
      log('Viewer unbind')
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
