import { build } from 'vite'
import { cp, mkdir } from 'node:fs/promises'
import { resolve } from 'node:path'
import { sample } from '../docs/.vitepress/theme/playground/samples.ts'
import { compile } from '../docs/.vitepress/theme/playground/compile.ts'

function demoExamples(vue2) {
  const sources = new Map()
  for (const mode of ['component', 'directive', 'api']) {
    for (const language of ['zh', 'en']) {
      const id = `virtual:viewer-example/${mode}-${language}`
      const base = process.env.DOCS_BASE || '/'
      sources.set(
        id,
        compile(
          sample(
            mode,
            vue2,
            language === 'en',
            (path) => base.replace(/\/$/, '') + path,
          ),
          vue2,
        ).code,
      )
    }
  }
  const ids = [...sources.keys()]
  sources.set(
    'virtual:viewer-examples',
    ids
      .map((id, index) => `import example${index} from ${JSON.stringify(id)}`)
      .join('\n') +
      '\nexport default {' +
      ids
        .map(
          (id, index) =>
            `${JSON.stringify(id.split('/').pop())}: example${index}`,
        )
        .join(',') +
      '}',
  )
  return {
    name: 'viewer-demo-examples',
    resolveId(id) {
      if (sources.has(id)) return '\0' + id
    },
    load(id) {
      return sources.get(id.replace(/^\0/, ''))
    },
  }
}

for (const line of ['vue2', 'vue3']) {
  const destination = resolve(`docs/public/playground/${line}`)
  await build({
    configFile: false,
    build: {
      outDir: destination,
      emptyOutDir: true,
      lib: {
        entry: resolve(`packages/${line}/src/index.ts`),
        formats: ['es'],
        fileName: () => 'v-viewer.js',
      },
      rolldownOptions: { external: ['vue', 'viewerjs'] },
    },
  })
  await mkdir(destination, { recursive: true })
  await cp(
    `packages/${line}/node_modules/vue/dist/${line === 'vue2' ? 'vue.esm.browser.js' : 'vue.esm-browser.js'}`,
    `${destination}/vue.js`,
  )
  await cp(
    'node_modules/viewerjs/dist/viewer.esm.js',
    `${destination}/viewerjs.js`,
  )
  await cp('node_modules/viewerjs/dist/viewer.css', `${destination}/viewer.css`)
  await cp('node_modules/viewerjs/LICENSE', `${destination}/VIEWERJS-LICENSE`)
  await cp(
    `packages/${line}/node_modules/vue/LICENSE`,
    `${destination}/VUE-LICENSE`,
  )
  // Trusted demos run in the page; editable playground code stays sandboxed.
  for (const runtime of ['configurator', 'demos']) {
    await build({
      configFile: false,
      plugins: runtime === 'demos' ? [demoExamples(line === 'vue2')] : [],
      resolve: {
        alias: {
          'v-viewer': resolve(`packages/${line}/src/index.ts`),
          vue: resolve(
            `packages/${line}/node_modules/vue/dist/${line === 'vue2' ? 'vue.esm.js' : 'vue.esm-bundler.js'}`,
          ),
        },
      },
      define: {
        'process.env.NODE_ENV': JSON.stringify('production'),
        __VUE_OPTIONS_API__: 'true',
        __VUE_PROD_DEVTOOLS__: 'false',
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false',
      },
      build: {
        outDir: destination,
        emptyOutDir: false,
        lib: {
          entry: resolve(`docs/.vitepress/theme/${runtime}/mount-${line}.mjs`),
          formats: ['es'],
          fileName: () => `${runtime}.js`,
        },
      },
    })
  }
}
