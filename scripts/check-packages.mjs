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
            // DOM style.cssText is not a stylesheet import.
            assert.doesNotMatch(file.code, /style\.css(?:['"]|\?)/)
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
;(async () => {
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
const app = new Vue({render(h){return h(pkg.Viewer,{ref:'gallery'},[h('img',{attrs:{src:'photo.jpg'}})])}}).$mount('#app')
instance=app.$refs.gallery.$viewer
assert.ok(instance)
instance.show(true)
assert.ok(document.querySelector('.viewer-container'))
app.$destroy()
assert.equal(document.querySelector('.viewer-container'),null)
`
    : `
const app=Vue.createApp({setup(){api=pkg.useViewer({images:Vue.ref(['photo.jpg']),options:{transition:false}});return()=>Vue.h('div')}})
app.mount('#app')
assert.equal(api.viewer.value,undefined)
api.show()
assert.ok(api.viewer.value)
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
const componentHost=document.createElement('div')
document.body.appendChild(componentHost)
let component
let shown=0
let legacyShown=0
let blocked=true
const legacyOptions={toolbar:true,title:false,shown:()=>legacyShown++}
const onShow=event=>{if(blocked)event.preventDefault()}
${
  line === 'vue2'
    ? `const componentApp=new Vue({render(h){return h(pkg.Viewer,{ref:'gallery',props:{options:legacyOptions,toolbar:false,transition:false},on:{show:onShow,shown:()=>shown++}},[h('img',{attrs:{src:'photo.jpg'}})])}}).$mount(componentHost)
component=componentApp.$refs.gallery`
    : `const componentRef=Vue.ref(null)
const componentApp=Vue.createApp({render(){return Vue.h(pkg.Viewer,{ref:componentRef,options:legacyOptions,toolbar:false,transition:false,onShow,onShown:()=>shown++},()=>Vue.h('img',{src:'photo.jpg'}))}})
componentApp.mount(componentHost)
component=componentRef.value`
}
component.show(true)
assert.equal(shown,0)
blocked=false
component.show(true)
assert.equal(shown,1)
assert.equal(legacyShown,1)
assert.ok(document.querySelector('.viewer-container'))
assert.equal(document.querySelector('.viewer-toolbar').classList.contains('viewer-hide'),true)
assert.equal(document.querySelector('.viewer-title').classList.contains('viewer-hide'),true)
component.destroy()
assert.equal(document.querySelector('.viewer-container'),null)
component.createViewer()
component.show(true)
assert.equal(shown,2)
assert.equal(legacyShown,2)
${line === 'vue2' ? 'componentApp.$destroy()' : 'componentApp.unmount()'}
assert.equal(document.querySelector('.viewer-container'),null)
const toolbarHost=document.createElement('div')
document.body.appendChild(toolbarHost)
let toolbarComponent
let toolbarCalls=0
${
  line === 'vue2'
    ? `
const toolbarApp=new Vue({render(h){return h(pkg.Viewer,{ref:'gallery',props:{transition:false},scopedSlots:{
default:()=>[h('img',{attrs:{src:'photo.jpg'}})],
toolbar:()=>[h('b',{attrs:{'data-toolbar':'custom'}},['Custom toolbar'])],
'toolbar-append':({rotate})=>[h('button',{attrs:{'data-action':'custom'},on:{click:()=>rotate(90)}},['Rotate'])]
}})}}).$mount(toolbarHost)
toolbarComponent=toolbarApp.$refs.gallery
`
    : `
const toolbarRef=Vue.ref(null)
const toolbarApp=Vue.createApp({render(){return Vue.h(pkg.Viewer,{ref:toolbarRef,transition:false},{
default:()=>[Vue.h('img',{src:'photo.jpg'})],
toolbar:()=>[Vue.h('b',{'data-toolbar':'custom'},'Custom toolbar')],
'toolbar-append':({rotate})=>[Vue.h('button',{'data-action':'custom',onClick:()=>rotate(90)},'Rotate')]
})}})
toolbarApp.mount(toolbarHost)
toolbarComponent=toolbarRef.value
`
}
toolbarComponent.show(true)
await Vue.nextTick()
await Vue.nextTick()
const toolbarInstance=${line === 'vue2' ? 'toolbarComponent.$viewer' : 'toolbarComponent.viewer'}
toolbarInstance.rotate=function(degree){assert.equal(degree,90);toolbarCalls++;return this}
assert.ok(document.querySelector('.v-viewer-toolbar-slot [data-toolbar="custom"]'))
assert.equal(document.querySelector('.viewer-toolbar ul').style.display,'none')
document.querySelector('[data-action="custom"]').click()
assert.equal(toolbarCalls,1)
toolbarComponent.rebuildViewer()
toolbarComponent.show(true)
await Vue.nextTick()
await Vue.nextTick()
assert.equal(document.querySelectorAll('[data-action="custom"]').length,1)
${line === 'vue2' ? 'toolbarApp.$destroy()' : 'toolbarApp.unmount()'}
await Vue.nextTick()
assert.equal(document.querySelector('.viewer-container'),null)
dom.window.close()
})().catch(error=>{console.error(error);global.window?.close();process.exitCode=1})
`,
    )
    execFileSync(process.execPath, [`${fixture}/runtime.cjs`], {
      stdio: 'inherit',
    })
    const use =
      line === 'vue3'
        ? `import {ref} from 'vue'\nimport {useViewer} from 'v-viewer'\nconst api=useViewer({images:ref(['photo.jpg']),options:ref({toolbar:true})})\napi.show(0)\n`
        : `import {Vue} from 'vue/types/vue.js'\nimport plugin from 'v-viewer'\nVue.use(plugin)\n`
    const source =
      `import {Viewer,vViewer,ViewerJs} from 'v-viewer'\nimport type {ViewerOptions,ViewerImage} from 'v-viewer'\nconst options:ViewerOptions={toolbar:true}\nconst images:ViewerImage[]=['photo.jpg']\n${line === 'vue2' ? "import {viewerApi} from 'v-viewer'\nconst viewer:ViewerJs=viewerApi({images,options})\nviewer.destroy()\n// @ts-expect-error showViewer is no longer a Vue 2 export\nimport {showViewer} from 'v-viewer'" : "import type {UseViewerOptions} from 'v-viewer'\nconst config:UseViewerOptions={images,options}\nconst viewer:ViewerJs|undefined=useViewer(config).show()\nviewer?.destroy()\nuseViewer({images:()=>images,options:()=>options})\nuseViewer()\n// @ts-expect-error showViewer is no longer a Vue 3 export\nimport {showViewer} from 'v-viewer'\n// @ts-expect-error DOM targets are no longer supported\nuseViewer(document.body)\n// @ts-expect-error the old two-argument signature is removed\nuseViewer(undefined,{images})"}\nvoid Viewer;void vViewer\n` +
      use +
      `
import type {ViewerOptionProps,ViewerEventMap,ViewerMethods} from 'v-viewer'
import type {ViewerObserve,ViewerDirectiveOptions} from 'v-viewer'
import type {ViewerToolbarScope,ViewerSlots} from 'v-viewer'
const toolbarSlots:ViewerSlots={toolbar:({zoom,image,index})=>{zoom(0.1);image?.src;index.toFixed();return []},'toolbar-append':({rotate})=>{rotate(90);return []}}
const toolbarScope={} as ViewerToolbarScope
toolbarScope.rotate(90)
// @ts-expect-error toolbar methods retain their argument types
toolbarScope.rotate('90')
const observe:ViewerObserve=100
const directiveOptions:ViewerDirectiveOptions={toolbar:false,observe}
const disabledObservation:ViewerDirectiveOptions={observe:false}
// @ts-expect-error observe is a boolean or a number
const invalidObservation:ViewerDirectiveOptions={observe:'100'}
const props:ViewerOptionProps={inline:true,toolbar:false,initialViewIndex:1,filter:(image:HTMLImageElement)=>!!image.src}
// @ts-expect-error ViewerOptionProps contains only direct Viewer.js settings
const obsolete:ViewerOptionProps={options:{toolbar:false}}
const viewed=(event:ViewerEventMap['viewed'])=>event.detail.index
const methods={} as ViewerMethods
methods.show(true)
methods.view(1)
methods.zoomTo(1)
methods.showTooltip()
methods.destroy()
// @ts-expect-error view takes a numeric index
methods.view('one')
${
  line === 'vue3'
    ? `import type {ViewerProps} from 'v-viewer'
const componentProps:ViewerProps={toolbar:false,observe:100,onViewed:event=>event.detail.index}
// @ts-expect-error API galleries do not observe DOM changes
useViewer({images,observe:true})
// @ts-expect-error API galleries do not rebuild on DOM changes
useViewer({images,rebuild:true})
// @ts-expect-error use the component or directive for an existing DOM target
useViewer({target:document.body})
// @ts-expect-error the composable no longer exposes a target update method
api.update()
// @ts-expect-error inited was removed; read the instance through the component ref
const removedEvent:ViewerProps={onInited:()=>{}}
// @ts-expect-error component images are rendered in the slot
const removedImages:ViewerProps={images:['photo.jpg']}
// @ts-expect-error internal image DOM changes no longer need a trigger prop
const removedTrigger:ViewerProps={trigger:{}}
const exposed={} as InstanceType<typeof Viewer>
exposed.show(true)
exposed.showTooltip()
const oldProps:ViewerProps={options:{toolbar:false,viewed:event=>event.detail.index}}
// @ts-expect-error legacy options must still be type checked
const invalidOptions:ViewerProps={options:{toolbar:'invalid'}}`
    : `import type {ViewerInstance} from 'v-viewer'
const exposed={} as ViewerInstance
exposed.observe=100
exposed.observe=false
// @ts-expect-error observe is not a string
exposed.observe='100'
// @ts-expect-error the component no longer exposes an images prop
exposed.images=['photo.jpg']
// @ts-expect-error the component no longer exposes a trigger prop
exposed.trigger={}
exposed.show(true)
exposed.showTooltip()
exposed.options={toolbar:false,viewed:event=>event.detail.index}
// @ts-expect-error legacy options must still be type checked
exposed.options={toolbar:'invalid'}`
}
void props;void viewed
`
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
