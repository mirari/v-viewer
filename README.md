# v-viewer

[![npm version](https://img.shields.io/npm/v/v-viewer?label=npm)](https://www.npmjs.com/package/v-viewer)
[![npm legacy version](https://img.shields.io/npm/v/v-viewer/legacy?label=Vue%202)](https://www.npmjs.com/package/v-viewer?activeTab=versions)
[![npm downloads](https://img.shields.io/npm/dm/v-viewer)](https://www.npmjs.com/package/v-viewer)
[![CI](https://github.com/mirari/v-viewer/actions/workflows/ci.yml/badge.svg)](https://github.com/mirari/v-viewer/actions/workflows/ci.yml)
[![Vue](https://img.shields.io/badge/Vue-3%20%7C%202-42b883?logo=vuedotjs)](https://v-viewer.mirari.cc/en/guide/compatibility)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/mirari/v-viewer)](https://github.com/mirari/v-viewer/stargazers)

Image viewer components and directives for **Vue 2 and Vue 3**, with a `useViewer()` composable for Vue 3 and a `viewerApi()` function for Vue 2. Supports zooming, rotation, image navigation and custom toolbars, powered by [Viewer.js](https://github.com/fengyuanchen/viewerjs).

**[English documentation](https://v-viewer.mirari.cc/en/)** · **[中文文档](https://v-viewer.mirari.cc/)** · [Documentation source](https://github.com/mirari/v-viewer/tree/master/docs) · [Contributing](https://github.com/mirari/v-viewer/blob/master/CONTRIBUTING.md)

**5.x supports Vue 3.0+**; **4.x supports Vue 2.4+** through the `legacy` channel. Both are new major versions of the rewritten library; upgrade explicitly from the previous 1.x/3.x releases. See [migration notes](#migration) before upgrading an existing project.

## Install

```sh
npm install v-viewer         # Vue 3
npm install v-viewer@legacy  # Vue 2
```

Viewer.js is installed automatically as a dependency. Browser builds automatically load its stylesheet, so you do not need to install `viewerjs` separately or import its CSS. Node.js / SSR imports do not load CSS.

## Quick start

### Vue 3

Import only what you need; no global plugin is required. This example uses `<script setup>` (Vue 3.2+):

```vue
<script setup>
import { Viewer } from 'v-viewer'

const images = ['/photo.jpg']
</script>

<template>
  <Viewer :toolbar="true">
    <img v-for="src in images" :key="src" :src="src" alt="Gallery image" />
  </Viewer>
</template>
```

Import `vViewer` to add a viewer to an existing gallery, or `useViewer` to open an image array with automatic scope cleanup:

```vue
<script setup>
import { useViewer } from 'v-viewer'

const { show } = useViewer({ images: ['/photo.jpg'] })
</script>

<template>
  <button @click="show()">Open gallery</button>
</template>
```

`useViewer({ images, options })` reads the latest images and options when `show()` opens a new temporary gallery. Changes during a preview apply the next time it opens. See the [Vue 3 quick start](https://v-viewer.mirari.cc/en/guide/getting-started) · [Vue 3 中文指南](https://v-viewer.mirari.cc/guide/getting-started).

### Vue 2

Register the plugin in your application entry:

```js
// main.js
import Vue from 'vue'
import VueViewer from 'v-viewer'
import App from './App.vue'

Vue.use(VueViewer)
new Vue({ render: (h) => h(App) }).$mount('#app')
```

```vue
<!-- App.vue -->
<template>
  <viewer :toolbar="true">
    <img v-for="src in images" :key="src" :src="src" alt="Gallery image" />
  </viewer>
</template>

<script>
export default {
  data: () => ({ images: ['/photo.jpg'] }),
}
</script>
```

The plugin also registers `v-viewer` and `$viewerApi`. Use `this.$viewerApi({ images })` to open an image array, or import `viewerApi` directly without registering the plugin. See the [Vue 2 quick start](https://v-viewer.mirari.cc/en/vue2/) · [Vue 2 中文指南](https://v-viewer.mirari.cc/vue2/).

### Viewer options and styles

- Pass Viewer.js settings directly as component props, such as `:toolbar="false"` or `inline`, and listen to Vue events such as `@viewed` or `@show.prevent`.
- Call methods on the component ref, such as `gallery.value.show()` in Vue 3 or `this.$refs.gallery.show()` in Vue 2. `showTooltip()` forwards Viewer.js's `tooltip()` method while `tooltip` remains a Boolean prop.
- Components and directives observe image additions, removals and attribute changes by default. Use toolbar slots for custom controls.
- Override the default stylesheet with your own CSS, or import from `v-viewer/unstyled` to replace it entirely. The unstyled entry provides the same exports for both Vue versions without loading CSS; supply your own complete viewer stylesheet.

See the [component guide](https://v-viewer.mirari.cc/en/guide/component), [directive guide](https://v-viewer.mirari.cc/en/guide/directive) and [API guide](https://v-viewer.mirari.cc/en/guide/api) for options and examples.

## Migration

The Vue 2 (4.x) and Vue 3 (5.x) lines introduce breaking changes:

- Render component images in the default slot. The old `images` and `trigger` props and the `images` slot parameter have been removed. For image-array input, use `useViewer({ images })` in Vue 3 or `viewerApi({ images })` in Vue 2.
- Use the component ref to call viewer methods. The `inited` event has been removed.
- Prefer direct component props and Vue events. The legacy `options` prop and its callbacks remain compatible but are deprecated. Explicit props take precedence; legacy callbacks and Vue listeners both run when provided together. Directive bindings and API options still accept Viewer.js settings and callbacks.

See the [Vue 3 migration examples](https://v-viewer.mirari.cc/en/guide/component#migration) or [Vue 2 migration examples](https://v-viewer.mirari.cc/en/vue2/guide/component#migration).

## Other import methods

Package-root imports support ESM and CommonJS, with TypeScript declarations. `ViewerJs` exposes the underlying Viewer.js class. Vue is a peer dependency; Viewer.js 1.11.7+ (1.x) is installed as a dependency.

Browser-global builds expose `VueViewer` from `index.umd.js`. For script tags, load the matching Vue global build, Viewer.js and its stylesheet before v-viewer:

```html
<link rel="stylesheet" href="https://unpkg.com/viewerjs/dist/viewer.css" />
<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/viewerjs/dist/viewer.min.js"></script>
<script src="https://unpkg.com/v-viewer"></script>
```

Register `VueViewer.Viewer` or `VueViewer.vViewer` locally in Vue 3. For Vue 2, use `vue@legacy` and `v-viewer@legacy` in the CDN URLs, then register the plugin with `Vue.use(VueViewer.default)`. See the [Vue 3 import examples](https://v-viewer.mirari.cc/en/guide/getting-started#other-import-methods) or [Vue 2 import examples](https://v-viewer.mirari.cc/en/vue2/#other-import-methods) for complete browser-global and CommonJS examples.

For IE 11 with Vue 2, load `import 'v-viewer/polyfills'` before the plugin, or supply equivalent global polyfills. Modern browsers can omit this import. See [Vue 2 compatibility](https://v-viewer.mirari.cc/en/vue2/guide/compatibility).

SSR imports are safe; viewer instances initialize after mounting. Call `show()` or `viewerApi()` only in browser event handlers. See [SSR / Nuxt compatibility](https://v-viewer.mirari.cc/en/guide/compatibility#ssr-nuxt).

## Development

Use Node 24 (24.15.0+, recommended) or Node 22 (22.22.2+). See the root `engines` field for the full supported version ranges.

Use the pnpm version pinned in the root `packageManager` field.

```sh
pnpm install --frozen-lockfile
pnpm run dev           # VitePress documentation and interactive examples
pnpm run check         # formatting, types, tests, packages and documentation
pnpm run test:docs     # production documentation browser checks
```

See [CONTRIBUTING.md](https://github.com/mirari/v-viewer/blob/master/CONTRIBUTING.md) for browser setup, CI/CD and release channels. Both adapters are maintained on `master`. Release history is maintained separately for [Vue 3](https://github.com/mirari/v-viewer/blob/master/packages/vue3/CHANGELOG.md) and [Vue 2](https://github.com/mirari/v-viewer/blob/master/packages/vue2/CHANGELOG.md).

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=mirari/v-viewer&type=Date)](https://star-history.com/#mirari/v-viewer&Date)

## License

[MIT](./LICENSE)
