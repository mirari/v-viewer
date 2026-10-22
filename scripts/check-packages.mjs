import { execFileSync } from 'node:child_process'
import {
  cp,
  mkdir,
  readFile,
  writeFile,
  realpath,
  symlink,
} from 'node:fs/promises'
import { resolve } from 'node:path'
import { parse } from 'acorn'
import { build } from 'vite'
import { execNpm } from './exec-npm.mjs'
import assert from 'node:assert/strict'

await mkdir('artifacts', { recursive: true })
for (const line of ['vue2', 'vue3'])
  for (const minimum of [false, true]) {
    const metadata = JSON.parse(
      await readFile(`dist/${line}/package.json`, 'utf8'),
    )
    const packed = JSON.parse(
      execNpm(
        ['pack', `./dist/${line}`, '--pack-destination', 'artifacts', '--json'],
        { encoding: 'utf8' },
      ),
    )[0]
    assert.equal(packed.name, 'v-viewer')
    assert.equal(packed.version, metadata.version)
    assert.equal(metadata.dependencies.viewerjs, '^1.11.7')
    assert.equal(metadata.peerDependencies.viewerjs, undefined)
    const files = packed.files.map((file) => file.path)
    for (const required of [
      'index.js',
      'index.cjs',
      'index.umd.js',
      'browser.js',
      'browser.cjs',
      'README.md',
      'LICENSE',
      'style.css',
      metadata.types.slice(2),
    ])
      assert.ok(files.includes(required), `Missing ${required}`)
    assert.ok(!files.some((file) => /node_modules|\.test\.|\.env/.test(file)))
    if (line === 'vue2')
      for (const filename of [
        'index.cjs',
        'browser.cjs',
        'index.umd.js',
        'polyfills.js',
      ])
        parse(await readFile(`dist/${line}/${filename}`, 'utf8'), {
          ecmaVersion: 5,
        })
    const fixture = resolve(
      `artifacts/consumers/${line}${minimum ? '-minimum' : ''}`,
    )
    await mkdir(`${fixture}/node_modules`, { recursive: true })
    execFileSync(
      'tar',
      ['-xf', resolve(`artifacts/${packed.filename}`), '-C', fixture],
      { stdio: 'inherit' },
    )
    await cp(`${fixture}/package`, `${fixture}/node_modules/v-viewer`, {
      recursive: true,
      force: true,
    })
    for (const name of ['vue', 'viewerjs']) {
      const source = await realpath(
        resolve(
          minimum
            ? `node_modules/${name === 'vue' ? line + '-min' : 'viewerjs-min'}`
            : `packages/${line}/node_modules/${name}`,
        ),
      )
      try {
        await symlink(
          source,
          `${fixture}/node_modules/${name}`,
          process.platform === 'win32' ? 'junction' : 'dir',
        )
      } catch (error) {
        if (error.code !== 'EEXIST') throw error
      }
    }
    await writeFile(`${fixture}/package.json`, '{"type":"module"}\n')
    if (!minimum) {
      for (const entry of ['v-viewer', 'v-viewer/unstyled']) {
        // Only the default browser entry should bring in CSS, even after tree shaking.
        await writeFile(
          `${fixture}/browser.js`,
          `export { Viewer } from '${entry}'\n`,
        )
        const result = await build({
          configFile: false,
          root: fixture,
          logLevel: 'silent',
          build: {
            write: false,
            lib: {
              entry: `${fixture}/browser.js`,
              formats: ['es'],
              cssFileName: 'consumer',
            },
          },
        })
        const outputs = (Array.isArray(result) ? result : [result]).flatMap(
          (bundle) => bundle.output,
        )
        assert.equal(
          outputs.some(
            (file) =>
              file.type === 'asset' &&
              file.fileName.endsWith('.css') &&
              String(file.source).includes('.viewer-container'),
          ),
          entry === 'v-viewer',
          `${entry}: unexpected automatic stylesheet inclusion`,
        )
        if (entry.endsWith('/unstyled')) {
          assert.ok(!outputs.some((file) => file.fileName.endsWith('.css')))
        }
        const server = await build({
          configFile: false,
          root: fixture,
          logLevel: 'silent',
          build: { write: false, ssr: `${fixture}/browser.js` },
          ssr: { noExternal: ['v-viewer'] },
        })
        const serverOutputs = (
          Array.isArray(server) ? server : [server]
        ).flatMap((bundle) => bundle.output)
        assert.ok(!serverOutputs.some((file) => file.fileName.endsWith('.css')))
        for (const file of serverOutputs) {
          if (file.type === 'chunk') {
            assert.ok(!file.code.includes('style.css'))
          }
        }
      }
    }
    await writeFile(
      `${fixture}/ssr.mjs`,
      `import assert from 'node:assert/strict'\nimport * as pkg from 'v-viewer'\nimport * as unstyled from 'v-viewer/unstyled'\nimport {createRequire} from 'node:module'\nconst cjs=createRequire(import.meta.url)('v-viewer')\nconst cjsUnstyled=createRequire(import.meta.url)('v-viewer/unstyled')\nassert.deepEqual(unstyled,pkg)\nassert.equal(cjsUnstyled,cjs)\nfor(const mod of [pkg,cjs,unstyled,cjsUnstyled]){assert.ok(mod.Viewer);assert.ok(mod.vViewer);assert.equal(typeof mod.ViewerJs,'function');${line === 'vue3' ? "assert.equal(typeof mod.useViewer,'function');assert.equal('showViewer' in mod,false);assert.equal(mod.default,undefined)" : "assert.equal(typeof mod.viewerApi,'function');assert.equal('showViewer' in mod,false);assert.equal(typeof mod.default.install,'function')"}}\n`,
    )
    execFileSync(process.execPath, [`${fixture}/ssr.mjs`], { stdio: 'inherit' })
    await writeFile(
      `${fixture}/runtime.cjs`,
      `
const assert = require('node:assert/strict')
const {JSDOM} = require(${JSON.stringify(await realpath('node_modules/jsdom'))})
const dom = new JSDOM('<!doctype html><html><body><div id="app"></div></body></html>',{url:'http://localhost/'})
for(const name of ['window','document','HTMLElement','Element','SVGElement','Node','CustomEvent','MutationObserver']) global[name]=dom.window[name]
Object.defineProperty(global,'navigator',{value:dom.window.navigator,configurable:true})
const Vue = require('vue')
const pkg = require('v-viewer')
let instance
let api
${
  line === 'vue2'
    ? `
const app = new Vue({render(h){return h(pkg.Viewer,{on:{inited:value=>instance=value}},[h('img',{attrs:{src:'photo.jpg'}})])}}).$mount('#app')
assert.ok(instance)
instance.show(true)
assert.ok(document.querySelector('.viewer-container'))
app.$destroy()
assert.equal(document.querySelector('.viewer-container'),null)
`
    : `
const app=Vue.createApp({setup(){const target=Vue.ref(null);api=pkg.useViewer({target});return()=>Vue.h('div',{ref:target},[Vue.h('img',{src:'photo.jpg'})])}})
app.mount('#app')
assert.ok(api.viewer.value)
api.viewer.value.show(true)
assert.equal(api.isShown.value,true)
app.unmount()
assert.equal(api.viewer.value,undefined)
assert.equal(document.querySelector('.viewer-container'),null)
`
}
${
  line === 'vue2'
    ? `const standalone=pkg.viewerApi({images:['photo.jpg'],options:{transition:false}})
standalone.destroy()`
    : `const temporary=Vue.createApp({setup(){api=pkg.useViewer({images:['photo.jpg'],options:{transition:false}});return()=>Vue.h('div')}})
temporary.mount('#app')
api.show()
assert.ok(document.querySelector('.v-viewer-token'))
temporary.unmount()
assert.equal(api.viewer.value,undefined)`
}
assert.equal(document.querySelector('.v-viewer-token'),null)
dom.window.close()
`,
    )
    execFileSync(process.execPath, [`${fixture}/runtime.cjs`], {
      stdio: 'inherit',
    })
    const use =
      line === 'vue3'
        ? `import {ref} from 'vue'\nimport {useViewer} from 'v-viewer'\nconst api=useViewer({target:ref<HTMLElement|null>(null),options:ref({toolbar:true})})\napi.show(0)\n`
        : `import {Vue} from 'vue/types/vue.js'\nimport plugin from 'v-viewer'\nVue.use(plugin)\n`
    const source =
      `import {Viewer,vViewer,ViewerJs} from 'v-viewer'\nimport type {ViewerOptions,ViewerImage} from 'v-viewer'\nconst options:ViewerOptions={toolbar:true}\nconst images:ViewerImage[]=['photo.jpg']\n${line === 'vue2' ? "import {viewerApi} from 'v-viewer'\nconst viewer:ViewerJs=viewerApi({images,options})\nviewer.destroy()\n// @ts-expect-error showViewer is no longer a Vue 2 export\nimport {showViewer} from 'v-viewer'" : "import type {UseViewerOptions} from 'v-viewer'\nconst config:UseViewerOptions={images,options}\nconst viewer:ViewerJs|undefined=useViewer(config).show()\nviewer?.destroy()\nuseViewer({target:()=>document.body})\nuseViewer({target:'photos'})\nuseViewer()\n// @ts-expect-error showViewer is no longer a Vue 3 export\nimport {showViewer} from 'v-viewer'\n// @ts-expect-error target belongs in the configuration object\nuseViewer(document.body)\n// @ts-expect-error the old two-argument signature is removed\nuseViewer(undefined,{images})"}\nvoid Viewer;void vViewer\n` +
      use
    await writeFile(`${fixture}/consumer.mts`, source)
    await writeFile(`${fixture}/consumer.cts`, source)
    const unstyledSource = source.replaceAll(
      "'v-viewer'",
      "'v-viewer/unstyled'",
    )
    await writeFile(`${fixture}/consumer-unstyled.mts`, unstyledSource)
    await writeFile(`${fixture}/consumer-unstyled.cts`, unstyledSource)
    await writeFile(
      `${fixture}/tsconfig.json`,
      JSON.stringify({
        compilerOptions: {
          target: 'ES2020',
          module: 'NodeNext',
          moduleResolution: 'NodeNext',
          strict: true,
          // Vue 3.0's own declaration files predate modern TypeScript.
          skipLibCheck: minimum,
          noEmit: true,
          types: [],
        },
        include: ['consumer*.mts', 'consumer*.cts'],
      }),
    )
    execFileSync(
      process.execPath,
      ['node_modules/typescript/bin/tsc', '-p', `${fixture}/tsconfig.json`],
      { stdio: 'inherit' },
    )
    console.log(
      `${line}${minimum ? ' minimum versions' : ''}: packed contents, SSR import, runtime mount/unmount, ESM/CommonJS types${line === 'vue2' ? ', ES5 syntax' : ''} passed`,
    )
  }
