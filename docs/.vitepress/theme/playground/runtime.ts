import { withBase } from 'vitepress'
import { moduleUrl } from './compile'

export async function loadViewerRuntime(vue2: boolean) {
  const base = withBase(`/playground/${vue2 ? 'vue2' : 'vue3'}/`)
  const entries = await Promise.all(
    ['vue', 'v-viewer', 'viewerjs'].map(async (name) => {
      const response = await fetch(base + name + '.js', { cache: 'no-cache' })
      if (!response.ok)
        throw new Error(`Unable to load ${name}: HTTP ${response.status}`)
      return [name, moduleUrl(await response.text())]
    }),
  )
  const response = await fetch(base + 'viewer.css', { cache: 'no-cache' })
  if (!response.ok) throw new Error('Unable to load Viewer.js styles')
  const css = await response.text()
  const styleModule = moduleUrl(
    `const style=document.createElement('style');style.textContent=${JSON.stringify(css)};document.head.appendChild(style)`,
  )
  entries.push(['v-viewer/style.css', styleModule])
  const viewer = entries.find(([name]) => name === 'v-viewer')!
  entries.push(['v-viewer/unstyled', viewer[1]])
  const implementation = JSON.stringify(viewer[1])
  // Mirror the published browser entry inside the sandbox's import map.
  viewer[1] = moduleUrl(
    `import ${JSON.stringify(styleModule)};export * from ${implementation};` +
      (vue2 ? `export { default } from ${implementation};` : ''),
  )
  return Object.fromEntries(entries)
}
