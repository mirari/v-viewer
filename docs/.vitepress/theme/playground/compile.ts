import {
  compileScript,
  compileStyle,
  parse,
  rewriteDefault,
} from '@vue/compiler-sfc'

const scopeId = 'data-v-playground'

export function compile(source: string, vue2: boolean) {
  const { descriptor, errors } = parse(source, { filename: 'App.vue' })
  if (errors.length) throw errors[0]
  for (const block of [
    descriptor.script,
    descriptor.scriptSetup,
    descriptor.template,
    ...descriptor.styles,
  ]) {
    if (block?.src)
      throw new Error(
        'Use inline blocks in App.vue; src imports are not supported.',
      )
    if (
      block?.lang &&
      !['js', 'javascript', 'html', 'css'].includes(block.lang)
    ) {
      throw new Error(
        `Unsupported language: ${block.lang}. Use JavaScript and CSS.`,
      )
    }
  }
  if (vue2 && descriptor.scriptSetup)
    throw new Error('Use a regular <script> with the Options API in Vue 2.')

  let code: string
  if (!vue2 && (descriptor.script || descriptor.scriptSetup)) {
    code = compileScript(descriptor, {
      id: scopeId,
      inlineTemplate: !!descriptor.scriptSetup,
      genDefaultAs: '__playground_component',
    }).content
  } else {
    code = rewriteDefault(
      descriptor.script?.content || 'export default {}',
      '__playground_component',
    )
  }
  if (!descriptor.scriptSetup) {
    code += `\n__playground_component.template = ${JSON.stringify(descriptor.template?.content || '<div />')}`
  }
  const styles = descriptor.styles
    .map((block) => {
      const result = compileStyle({
        filename: 'App.vue',
        source: block.content,
        id: scopeId,
        scoped: block.scoped,
      })
      if (result.errors.length) throw result.errors[0]
      return result.code
    })
    .join('\n')
  if (descriptor.styles.some((block) => block.scoped)) {
    code += `\n__playground_component.${vue2 ? '_scopeId' : '__scopeId'} = '${scopeId}'`
  }
  code += '\nexport default __playground_component'
  return { code, styles }
}

export function moduleUrl(source: string) {
  const bytes = new TextEncoder().encode(source)
  let binary = ''
  for (let i = 0; i < bytes.length; i += 8192) {
    binary += String.fromCharCode(...bytes.subarray(i, i + 8192))
  }
  return 'data:text/javascript;base64,' + btoa(binary)
}

export function previewDocument(
  compiled: ReturnType<typeof compile>,
  imports: Record<string, string>,
  vue2: boolean,
  english: boolean,
  settings: { dark?: boolean } = {},
) {
  // All scripts are data modules so the sandbox can keep its opaque origin,
  // without relying on CDNs or allowing access to the documentation's DOM.
  const bootstrap = `
const style = document.createElement('style')
style.textContent = ${JSON.stringify(compiled.styles)}
document.head.appendChild(style)
addEventListener('message', event => {
  if (event.source !== parent || event.data?.source !== 'v-viewer-preview-theme') return
  if (typeof event.data.dark !== 'boolean') return
  document.documentElement.classList.toggle('dark', event.data.dark)
  document.documentElement.style.colorScheme = event.data.dark ? 'dark' : 'light'
})
const report = (level, args) => parent.postMessage({
  source: 'v-viewer-playground', level,
  text: args.map(value => {
    if (value instanceof Error) return value.stack || value.message
    if (typeof value === 'string') return value
    try { return JSON.stringify(value) ?? String(value) } catch { return String(value) }
  }).join(' ').slice(0, 4000),
}, '*')
for (const level of ['log', 'info', 'warn', 'error']) {
  const original = console[level]
  console[level] = (...args) => { report(level, args); original.apply(console, args) }
}
addEventListener('error', event => report('error', [event.error || event.message]))
addEventListener('unhandledrejection', event => report('error', [event.reason]))
try {
  const Vue = await import('vue')
  const { default: App } = await import(${JSON.stringify(moduleUrl(compiled.code + '\n//# sourceURL=App.vue'))})
  ${
    vue2
      ? `Vue.default.config.productionTip = false
  Vue.default.config.devtools = false
  Vue.default.config.errorHandler = error => console.error(error)
  Vue.default.config.warnHandler = message => console.warn(message)
  new Vue.default({ render: h => h(App) }).$mount('#app')`
      : `const app = Vue.createApp(App)
  app.config.errorHandler = error => console.error(error)
  app.config.warnHandler = message => console.warn(message)
  app.mount('#app')`
  }
  report('ready', [])

} catch (error) { console.error(error) }
`
  return `<!doctype html><html lang="${english ? 'en' : 'zh-CN'}" class="${settings.dark ? 'dark' : ''}" style="color-scheme: ${settings.dark ? 'dark' : 'light'}"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>v-viewer preview</title>
<style>body { margin: 0; }</style>
<script type="importmap">${JSON.stringify({ imports }).replace(/</g, '\\u003c')}</script>
</head><body><div id="app"></div>
<script type="module" src="${moduleUrl(bootstrap)}"></script>
</body></html>`
}
