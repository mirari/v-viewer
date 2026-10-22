# Quick start

Image viewing for Vue 2, powered by [Viewer.js](https://github.com/fengyuanchen/viewerjs). Click an image to zoom, rotate and navigate.

<ClientOnly><ViewerConfigurator vue2 /></ClientOnly>

## Installation

```sh
pnpm add v-viewer@legacy
```

Viewer.js is installed automatically as a dependency. Register the plugin once in your application entry; browser builds automatically include the matching stylesheet without a separate CSS import.

```js
import Vue from 'vue'
import VueViewer from 'v-viewer'
Vue.use(VueViewer)
```

### Custom styles

The default stylesheet loads automatically. To customize its appearance, import your own global CSS in the page using v-viewer or in your application entry:

```js
import './viewer.css'
```

```css
/* viewer.css */
.viewer-container.viewer-backdrop {
  background-color: rgba(0, 0, 0, 0.85);
}

.viewer-container .viewer-title {
  color: #fff;
  font-size: 14px;
}
```

These styles apply to all viewers. To customize one instance, set `className: 'custom-viewer'` in its `options` and replace `.viewer-container` in the selectors with `.custom-viewer`. Components, directives and the API all support this option.

Use global CSS or a `<style>` block without `scoped`. Modals mount to `body` by default, so overrides should not depend on an ancestor selector from the page container.

#### Replace the default stylesheet

Import from `v-viewer/unstyled` to disable automatic CSS loading. It provides the same exports as `v-viewer`:

```js
import Vue from 'vue'
import VueViewer from 'v-viewer/unstyled'
import './viewer-theme.css'

Vue.use(VueViewer)
```

`viewer-theme.css` must provide the complete viewer styles, including layout and controls. Use the unstyled entry consistently throughout your project; importing from `v-viewer` anywhere still loads the default stylesheet.

## Basic usage

### Component

```vue
<template>
  <viewer :images="images">
    <img v-for="src in images" :key="src" :src="src" />
  </viewer>
</template>
<script>
export default { data: () => ({ images: ['/photo.jpg'] }) }
</script>
```

### Directive

```vue
<template>
  <div v-viewer="{ toolbar: true }">
    <img src="/photo.jpg" alt="Landscape" />
  </div>
</template>
```

### API

```vue
<template><button @click="show">Open gallery</button></template>
<script>
export default {
  methods: {
    show() {
      this.$viewerApi({ images: ['/photo.jpg'] })
    },
  },
}
</script>
```

## Other import methods

### CommonJS

```js
const VueViewer = require('v-viewer')
Vue.use(VueViewer.default)
```

### Browser global

```html
<link rel="stylesheet" href="https://unpkg.com/viewerjs/dist/viewer.css" />
<script src="https://unpkg.com/vue@legacy"></script>
<script src="https://unpkg.com/viewerjs"></script>
<script src="https://unpkg.com/v-viewer@legacy"></script>
<div id="app">
  <div v-viewer><img src="photo.jpg" /></div>
</div>
<script>
  Vue.use(VueViewer.default)
  new Vue({ el: '#app' })
</script>
```
