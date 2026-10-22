import type ViewerJs from 'viewerjs'
import type { ViewerMethods } from './component.js'

export interface ViewerToolbarScope extends ViewerMethods {
  /** Currently viewed image; absent until an image has been viewed. */
  image: HTMLImageElement | undefined
  index: number
}
export interface ViewerToolbarIconScope extends ViewerToolbarScope {
  /** Toolbar option key, for example zoomIn, oneToOne or download. */
  name: string
}
export type ToolbarSlot = 'toolbar' | 'toolbar-append' | 'toolbar-icon'
export interface ToolbarMount {
  key: number
  slot: ToolbarSlot
  target: HTMLElement
  name?: string
}
type ToolbarViewer = ViewerJs & {
  image?: HTMLImageElement
  toolbar?: HTMLElement
  index?: number
  viewed?: boolean
  resize?: () => void
}
let nextMountKey = 0

/** Only owns mount points. Vue owns all content rendered into them. */
export function createToolbarBridge() {
  let toolbar: HTMLElement | undefined
  let signature = ''
  let mounts: ToolbarMount[] = []
  let cleanups: (() => void)[] = []
  function clear() {
    for (const cleanup of cleanups.splice(0)) cleanup()
    toolbar = undefined
    signature = ''
    mounts = []
  }
  function sync(
    viewer: ViewerJs | undefined,
    has: (slot: ToolbarSlot) => boolean,
  ) {
    const next = (viewer as ToolbarViewer | undefined)?.toolbar
    const key = (['toolbar', 'toolbar-append', 'toolbar-icon'] as const)
      .map((slot) => +has(slot))
      .join('')
    if (next === toolbar && signature === key) return mounts
    clear()
    toolbar = next
    signature = key
    if (!toolbar) return mounts
    const list = toolbar.querySelector('ul')
    if (!list) return mounts // toolbar:false must hide all slot content too.
    function mount(slot: ToolbarSlot, parent: HTMLElement, name?: string) {
      const listItem = slot === 'toolbar-append' && parent.tagName === 'UL'
      const target: HTMLElement = document.createElement(
        listItem ? 'li' : 'span',
      )
      target.className = `v-viewer-${slot}-slot`
      target.style.cssText =
        slot === 'toolbar-icon'
          ? 'display:flex;align-items:center;justify-content:center;width:100%;height:100%;color:#fff;font-size:20px;line-height:1'
          : 'display:inline-flex;align-items:center;justify-content:center;vertical-align:middle;gap:4px;color:#fff;font-size:14px;line-height:1.4'
      if (listItem)
        target.style.cssText +=
          ';width:auto;height:auto;overflow:visible;background:none;border-radius:0;float:left;margin:0 0 0 4px;padding:0'
      parent.appendChild(target)
      const stop = (event: Event) => event.stopPropagation()
      const click = (event: Event) => {
        event.stopPropagation()
        if (slot === 'toolbar-icon') parent.click()
      }
      const keydown = (event: KeyboardEvent) => {
        const target = event.target as HTMLElement
        if (
          event.key === 'Enter' ||
          event.key === ' ' ||
          /^(INPUT|TEXTAREA|SELECT)$/.test(target.tagName) ||
          target.isContentEditable
        )
          event.stopPropagation()
      }
      target.addEventListener('click', click)
      target.addEventListener('keydown', keydown)
      for (const name of ['pointerdown', 'mousedown', 'touchstart', 'dblclick'])
        target.addEventListener(name, stop)
      cleanups.push(() => {
        target.removeEventListener('click', click)
        target.removeEventListener('keydown', keydown)
        for (const name of [
          'pointerdown',
          'mousedown',
          'touchstart',
          'dblclick',
        ])
          target.removeEventListener(name, stop)
        target.remove()
        parent.classList.remove('v-viewer-custom-icon')
      })
      mounts.push({ key: ++nextMountKey, slot, target, name })
    }
    if (has('toolbar')) {
      const display = list.style.display
      list.style.display = 'none'
      cleanups.push(() => {
        list.style.display = display
      })
      mount('toolbar', toolbar)
    } else if (has('toolbar-icon')) {
      const style = document.createElement('style')
      style.textContent =
        '.viewer-toolbar .v-viewer-custom-icon::before{display:none}'
      toolbar.appendChild(style)
      cleanups.push(() => style.remove())
      for (const item of Array.from(list.children) as HTMLElement[]) {
        const className = Array.from(item.classList).filter(
          (name) => name.indexOf('viewer-') === 0,
        )[0]
        if (!className) continue
        const name = className
          .slice(7)
          .replace(/-([a-z])/g, (_, char: string) => char.toUpperCase())
        mount('toolbar-icon', item, name)
      }
    }
    if (has('toolbar-append'))
      mount('toolbar-append', has('toolbar') ? toolbar : list)
    if (mounts.length && typeof ResizeObserver !== 'undefined') {
      let width = -1,
        height = -1
      const observer = new ResizeObserver(() => {
        if (
          !toolbar ||
          (toolbar.offsetWidth === width && toolbar.offsetHeight === height)
        )
          return
        width = toolbar.offsetWidth
        height = toolbar.offsetHeight
        ;(viewer as ToolbarViewer).resize?.()
      })
      observer.observe(toolbar)
      cleanups.push(() => observer.disconnect())
    }
    return mounts
  }
  return { sync, clear }
}

/** An empty conditional icon slot keeps the original CSS icon. */
export function updateToolbarIcon(mount: ToolbarMount, content: HTMLElement) {
  if (mount.slot !== 'toolbar-icon') return
  const active = Array.from(content.childNodes).some(
    (node) =>
      node.nodeType === 1 ||
      (node.nodeType === 3 && !!node.textContent?.trim()),
  )
  mount.target.parentElement?.classList.toggle('v-viewer-custom-icon', active)
}

export function toolbarState(viewer: ViewerJs | undefined) {
  const current = viewer as ToolbarViewer | undefined
  return {
    image: current?.viewed ? current.image : undefined,
    index: current?.index ?? 0,
  }
}
