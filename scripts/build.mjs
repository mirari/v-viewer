import { build } from 'vite'
import { transformAsync } from '@babel/core'
import presetEnv from '@babel/preset-env'
import { execFileSync } from 'node:child_process'
import { cp, mkdir, readFile, rm, writeFile, readdir } from 'node:fs/promises'
import { resolve } from 'node:path'

// All generated output stays below this checkout.
const root = resolve('.')
async function clear(relative) {
  const target = resolve(relative)
  if (!target.startsWith(root + (process.platform === 'win32' ? '\\' : '/')))
    throw new Error('Unsafe output directory')
  await rm(target, { recursive: true, force: true })
}
async function cjsTypes(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const file = `${directory}/${entry.name}`
    if (entry.isDirectory()) await cjsTypes(file)
    else if (file.endsWith('.d.ts')) {
      const text = (await readFile(file, 'utf8')).replace(
        /(from\s+['"]\.[^'"]+)\.js(['"])/g,
        '$1.cjs$2',
      )
      await writeFile(file.replace(/\.d\.ts$/, '.d.cts'), text)
    }
  }
}
for (const line of ['vue2', 'vue3']) {
  const destination = `dist/${line}`
  await clear(destination)
  await build({
    configFile: false,
    build: {
      target: 'es2018',
      outDir: destination,
      lib: {
        entry: resolve(`packages/${line}/src/index.ts`),
        name: 'VueViewer',
        formats: ['es', 'cjs', 'umd'],
        fileName: (format) =>
          ({ es: 'index.js', cjs: 'index.cjs', umd: 'index.umd.js' })[format],
      },
      rolldownOptions: {
        external: ['vue', 'viewerjs'],
        output: {
          globals: { vue: 'Vue', viewerjs: 'Viewer' },
          exports: 'named',
        },
      },
    },
  })
  if (line === 'vue2') {
    await build({
      configFile: false,
      build: {
        target: 'es2018',
        outDir: destination,
        emptyOutDir: false,
        lib: {
          entry: resolve('scripts/polyfills.js'),
          name: 'VueViewerPolyfills',
          formats: ['iife'],
          fileName: () => 'polyfills.js',
        },
      },
    })
    for (const name of [
      'index.js',
      'index.cjs',
      'index.umd.js',
      'polyfills.js',
    ]) {
      const file = `${destination}/${name}`
      const result = await transformAsync(await readFile(file, 'utf8'), {
        babelrc: false,
        configFile: false,
        sourceType: name === 'index.js' ? 'module' : 'script',
        presets: [
          [
            presetEnv,
            {
              targets: { ie: '11' },
              modules: false,
              useBuiltIns: false,
              exclude: ['transform-typeof-symbol'],
            },
          ],
        ],
        comments: false,
        compact: true,
      })
      await writeFile(file, result.code + '\n')
    }
    await cp(`${destination}/polyfills.js`, `${destination}/polyfills.cjs`)
    await writeFile(`${destination}/polyfills.d.ts`, 'export {}\n')
    await writeFile(`${destination}/polyfills.d.cts`, 'export {}\n')
    await cp('node_modules/core-js/LICENSE', `${destination}/CORE-JS-LICENSE`)
  }
  await clear(`.types/${line}`)
  execFileSync(
    process.execPath,
    ['node_modules/typescript/bin/tsc', '-p', `packages/${line}/tsconfig.json`],
    { stdio: 'inherit' },
  )
  await mkdir(`${destination}/types`, { recursive: true })
  await cp(`.types/${line}`, `${destination}/types`, { recursive: true })
  await cjsTypes(`${destination}/types`)
  const { version } = JSON.parse(
    await readFile(`packages/${line}/package.json`, 'utf8'),
  )
  const declaration = `./types/${line}/src/index`
  const metadata = {
    name: 'v-viewer',
    version,
    type: 'module',
    description:
      'Image viewer components, directives and composables for Vue, powered by Viewer.js',
    main: './index.cjs',
    module: './browser.js',
    browser: './browser.js',
    types: `${declaration}.d.ts`,
    unpkg: './index.umd.js',
    jsdelivr: './index.umd.js',
    exports: {
      '.': {
        import: {
          types: `${declaration}.d.ts`,
          browser: './browser.js',
          default: './index.js',
        },
        require: {
          types: `${declaration}.d.cts`,
          browser: './browser.cjs',
          default: './index.cjs',
        },
      },
      './unstyled': {
        import: {
          types: `${declaration}.d.ts`,
          default: './index.js',
        },
        require: {
          types: `${declaration}.d.cts`,
          default: './index.cjs',
        },
      },
      './package.json': './package.json',
      './style.css': './style.css',
      ...(line === 'vue2'
        ? {
            './polyfills': {
              import: { types: './polyfills.d.ts', default: './polyfills.js' },
              require: {
                types: './polyfills.d.cts',
                default: './polyfills.cjs',
              },
            },
          }
        : {}),
    },
    files: [
      '*.js',
      '*.cjs',
      '*.css',
      '*.d.ts',
      '*.d.cts',
      'types',
      'LICENSE',
      'README.md',
      'CHANGELOG.md',
      ...(line === 'vue2' ? ['CORE-JS-LICENSE'] : []),
    ],
    sideEffects: [
      './browser.js',
      './browser.cjs',
      './style.css',
      ...(line === 'vue2' ? ['./polyfills.js', './polyfills.cjs'] : []),
    ],
    dependencies: { viewerjs: '^1.11.7' },
    peerDependencies: {
      vue: line === 'vue2' ? '^2.4.0' : '^3.0.0',
    },
    license: 'MIT',
    author: 'mirari',
    repository: {
      type: 'git',
      url: 'git+https://github.com/mirari/v-viewer.git',
    },
    bugs: { url: 'https://github.com/mirari/v-viewer/issues' },
    homepage: 'https://github.com/mirari/v-viewer#readme',
    keywords: ['vue', 'viewer', 'gallery', 'image'],
  }
  await writeFile(
    `${destination}/package.json`,
    JSON.stringify(metadata, null, 2) + '\n',
  )
  await cp('LICENSE', `${destination}/LICENSE`)
  // Keep CSS in browser-only entry points so native Node SSR imports remain valid.
  await writeFile(
    `${destination}/browser.js`,
    "import './style.css';\nexport * from './index.js';\n" +
      (line === 'vue2' ? "export { default } from './index.js';\n" : ''),
  )
  await writeFile(
    `${destination}/browser.cjs`,
    "require('./style.css');\nmodule.exports = require('./index.cjs');\n",
  )
  await writeFile(
    `${destination}/style.css`,
    "@import 'viewerjs/dist/viewer.css';\n",
  )
  await cp('README.md', `${destination}/README.md`)
  await cp(`packages/${line}/CHANGELOG.md`, `${destination}/CHANGELOG.md`)
}
