import { expect, test, vi } from 'vitest'
import ViewerJs from 'viewerjs'
import { createViewerController } from '../packages/core/src/index'
import { groups } from '../docs/.vitepress/theme/configurator/options'

test('quick start covers every installed Viewer.js option without duplicate controls', () => {
  const element = document.createElement('div')
  const viewer = new ViewerJs(element)
  try {
    const keys = groups.flatMap((group) =>
      group.controls.map((control) => control.key),
    )
    expect(new Set(keys).size).toBe(keys.length)
    expect(keys.sort()).toEqual(Object.keys(viewer.options).sort())
  } finally {
    viewer.destroy()
  }
})

test.each(['replace', 'dispose'])(
  'late inline image loads cannot resurrect a viewer after %s',
  async (action) => {
    vi.useFakeTimers()
    const parent = document.createElement('div')
    const root = document.createElement('div')
    const img = document.createElement('img')
    img.src = '/delayed.jpg'
    root.appendChild(img)
    parent.appendChild(root)
    document.body.appendChild(parent)
    const controller = createViewerController(root, {
      options: { inline: true },
    })
    try {
      if (action === 'replace')
        controller.configure({ options: { inline: true, toolbar: false } })
      else controller.dispose()
      img.dispatchEvent(new Event('load'))
      await vi.advanceTimersByTimeAsync(20)
      expect(parent.querySelectorAll('.viewer-container')).toHaveLength(
        action === 'replace' ? 1 : 0,
      )
      if (action === 'replace')
        expect(controller.viewer?.options.toolbar).toBe(false)
    } finally {
      controller.dispose()
      parent.remove()
      vi.useRealTimers()
    }
  },
)
