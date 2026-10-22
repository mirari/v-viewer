import { expect, test, vi } from 'vitest'
import ViewerJs from 'viewerjs'
import { createViewerController } from '../packages/core/src/index'
import {
  defaults,
  eventNames,
  groups,
  optionsCode,
} from '../docs/.vitepress/theme/configurator/options'

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

test('generated options contain executable presets and optional event handlers', () => {
  const values = {
    ...defaults(),
    filter: 'first',
    toolbar: 'compact',
    inheritedAttributes: 'custom',
  }
  const options = Function(`return (${optionsCode(values)})`)()
  const first = document.createElement('img')
  first.dataset.index = '0'
  const second = document.createElement('img')
  second.dataset.index = '1'
  expect(options.filter(first)).toBe(true)
  expect(options.filter(second)).toBe(false)
  expect(options.toolbar.zoomIn).toBe(true)
  expect(options.toolbar.rotateLeft).toBeUndefined()
  expect(options.inheritedAttributes).toEqual(['data-credit'])
  for (const name of eventNames)
    expect(typeof options[name]).toBe(values[name] ? 'function' : 'object')
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
