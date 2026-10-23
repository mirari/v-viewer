# v-viewer

Image viewer components, directives and composables for Vue, powered by [Viewer.js](https://github.com/fengyuanchen/viewerjs).

| Vue  | New version line | npm tag |
| ---- | ---------------- | ------- |
| 3.0+ | 5.x              | latest  |
| 2.4+ | 4.x              | legacy  |

The rewrite is under development on v4. The new version lines have not been published yet.

> [!WARNING]
> The Vue 2 (4.x) and Vue 3 (5.x) lines are a major rewrite with breaking changes. You can now use Viewer.js props, events and methods directly on the component. The old `options` prop is retained for gradual migration, but is deprecated. See the migration examples in the [Vue 3 component guide](docs/guide/component.md#migration) or [Vue 2 component guide](docs/vue2/guide/component.md#migration).

## Vue 3

```sh
npm install v-viewer
```

```vue
<script setup>
import { Viewer } from 'v-viewer'
const images = ['/photo.jpg']
</script>

<template>
  <Viewer :toolbar="true">
    <img v-for="src in images" :key="src" :src="src" />
  </Viewer>
</template>
```

The component’s `images` and `trigger` props and the `images` slot parameter have been removed. Render images in the slot; for image-array input use `useViewer({ images })` (Vue 3) or `viewerApi({ images })` (Vue 2).

The `inited` event has been removed. Call methods on the component ref (`gallery.value.show()` in Vue 3, `this.$refs.gallery.show()` in Vue 2).

The component accepts Viewer.js settings directly as props (`:toolbar="false"`, `inline`), emits Vue events (`@viewed`, `@show.prevent`), and exposes methods on its ref (`gallery.value.show()`). The legacy `options` prop and callbacks remain compatible but are deprecated. Explicit props take precedence; legacy callbacks and Vue listeners both run when provided together. `showTooltip()` forwards Viewer.js’s `tooltip()` method while `tooltip` remains a Boolean prop.

Use `vViewer` for existing galleries or `useViewer` for image arrays with scope cleanup. `useViewer({ images, options })` reads the latest images and options when `show()` opens a new temporary gallery. Changes during a preview apply the next time it opens. `ViewerJs` exposes the underlying Viewer.js class. No global plugin is installed in Vue 3. The script setup example requires Vue 3.2+.

## Vue 2

```sh
npm install v-viewer@legacy
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

Viewer.js is installed automatically as a dependency. Browser builds automatically load its stylesheet; Node.js / SSR imports do not load CSS. Direct CDN/UMD usage requires a Viewer.js CSS link. Viewer.js options and callbacks are passed unchanged through the component's options prop, the directive binding or API options.

To replace the default stylesheet entirely, import from `v-viewer/unstyled` and load your own complete viewer CSS. This entry provides the same exports without automatic CSS loading, for both Vue versions.

## License

MIT
