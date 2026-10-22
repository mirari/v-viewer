# v-viewer

Image viewer components, directives and composables for Vue, powered by [Viewer.js](https://github.com/fengyuanchen/viewerjs).

| Vue  | New version line | npm tag |
| ---- | ---------------- | ------- |
| 3.0+ | 5.x              | latest  |
| 2.4+ | 4.x              | legacy  |

The rewrite is under development on v4. The new version lines have not been published yet.

## Vue 3

```sh
pnpm add v-viewer
```

```vue
<script setup>
import { Viewer } from 'v-viewer'
const images = ['/photo.jpg']
</script>

<template>
  <Viewer :images="images">
    <img v-for="src in images" :key="src" :src="src" />
  </Viewer>
</template>
```

Use `vViewer` for existing galleries or `useViewer` for a reactive API with scope cleanup. `useViewer({ images, options })` returns a `show()` method that opens a temporary gallery; pass `target` in the same configuration object to control an existing gallery. `ViewerJs` exposes the underlying Viewer.js class. No global plugin is installed in Vue 3. The script setup example requires Vue 3.2+.

## Vue 2

```sh
pnpm add v-viewer@legacy
```

```js
import Vue from 'vue'
import VueViewer from 'v-viewer'
Vue.use(VueViewer)
```

Use `<viewer>`, `v-viewer` or `this.$viewerApi({ images })`. You can also import `viewerApi` directly to open a temporary gallery without registering the plugin. IE 11 requires the optional `v-viewer/polyfills` entry before the plugin.

## Documentation

- [Vue 3 quick start](https://github.com/mirari/v-viewer/blob/master/docs/guide/getting-started.md)
- [Vue 2 quick start](https://github.com/mirari/v-viewer/blob/master/docs/vue2/index.md)
- [Development and releases](https://github.com/mirari/v-viewer/blob/master/CONTRIBUTING.md)
- [Vue 2 changelog](https://github.com/mirari/v-viewer/blob/master/packages/vue2/CHANGELOG.md) · [Vue 3 changelog](https://github.com/mirari/v-viewer/blob/master/packages/vue3/CHANGELOG.md)

Viewer.js is installed automatically as a dependency. Browser builds include its stylesheet automatically through the browser entry; Node.js / SSR imports use a CSS-free entry. Both use the same runtime implementation, and styles come from the installed Viewer.js version. Direct CDN/UMD usage still needs the Viewer.js CSS link. Viewer.js options and callbacks are passed unchanged through the component's options prop, the directive binding or API options.

To replace the default stylesheet entirely, import from `v-viewer/unstyled` and load your own complete viewer CSS. This entry provides the same exports without automatic CSS loading, for both Vue versions. Use it consistently: importing from `v-viewer` elsewhere still includes the default stylesheet.

## License

MIT
