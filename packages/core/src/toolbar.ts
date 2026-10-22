import type ViewerJs from 'viewerjs'
import type { ViewerMethods } from './component.js'

export interface ViewerToolbarScope extends ViewerMethods {
  /** Currently viewed image; absent until an image has been viewed. */
  image: HTMLImageElement | undefined
  index: number
}
export type ToolbarSlot = 'toolbar' | 'toolbar-append'
export interface ToolbarMount {
  key: number
  slot: ToolbarSlot
  target: HTMLElement
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
    const key = (['toolbar', 'toolbar-append'] as const)
      .map((slot) => +has(slot))
      .join('')
    if (next === toolbar && signature === key) return mounts
    clear()
    toolbar = next
    signature = key
    if (!toolbar) return mounts
    const list = toolbar.querySelector('ul')
    if (!list) return mounts // toolbar:false must hide all slot content too.
    function mount(slot: ToolbarSlot, parent: HTMLElement) {
      const listItem = slot === 'toolbar-append' && parent.tagName === 'UL'
      const target: HTMLElement = document.createElement(
        listItem ? 'li' : 'span',
      )
      target.className = `v-viewer-${slot}-slot`
      target.style.cssText =
        'display:inline-flex;align-items:center;justify-content:center;vertical-align:middle;gap:4px;color:#fff;font-size:14px;line-height:1.4'
      if (listItem)
        target.style.cssText +=
          ';width:auto;height:auto;overflow:visible;background:none;border-radius:0;float:left;margin:0 0 0 4px;padding:0'
      parent.appendChild(target)
      const stop = (event: Event) => event.stopPropagation()
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
      target.addEventListener('click', stop)
      target.addEventListener('keydown', keydown)
      for (const name of ['pointerdown', 'mousedown', 'touchstart', 'dblclick'])
        target.addEventListener(name, stop)
      cleanups.push(() => {
        target.removeEventListener('click', stop)
        target.removeEventListener('keydown', keydown)
        for (const name of [
          'pointerdown',
          'mousedown',
          'touchstart',
          'dblclick',
        ])
          target.removeEventListener(name, stop)
        target.remove()
      })
      mounts.push({ key: ++nextMountKey, slot, target })
    }
    if (has('toolbar')) {
      const display = list.style.display
      list.style.display = 'none'
      cleanups.push(() => {
        list.style.display = display
      })
      mount('toolbar', toolbar)
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

export function toolbarState(viewer: ViewerJs | undefined) {
  const current = viewer as ToolbarViewer | undefined
  return {
    image: current?.viewed ? current.image : undefined,
    index: current?.index ?? 0,
  }
}
