# Quick start

::: warning Upgrading an existing project
This major rewrite includes breaking API changes. Components now recommend direct props, Vue events and ref methods. The legacy options prop remains compatible, but is deprecated. Read the [migration examples](./guide/component#migration) before upgrading.
:::

<ClientOnly><ViewerConfigurator vue2 /></ClientOnly>

## Installation

```sh
npm install v-viewer@legacy
```

::: warning Upgrading an existing project
The new version no longer requires you to explicitly install `viewerjs` or import its CSS file.
:::

```js
import Vue from 'vue'
import VueViewer from 'v-viewer'
Vue.use(VueViewer)
```

### Custom styles

Import global CSS to override the default styles:

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

#### Replace the default stylesheet

Import from `v-viewer/unstyled` to disable automatic CSS loading. It provides the same exports as `v-viewer`:

```js
import Vue from 'vue'
import VueViewer from 'v-viewer/unstyled'
import './viewer-theme.css'

Vue.use(VueViewer)
```

Provide complete layout and control styles.

## Basic usage

### Component

Wrap image content in a component and customize it with props, events and slots; see the [component guide](/en/vue2/guide/component).

```vue
<template>
  <viewer :toolbar="true">
    <img v-for="src in images" :key="src" :src="src" />
  </viewer>
</template>
<script>
export default { data: () => ({ images: ['/photo.jpg'] }) }
</script>
```

### Directive

Attach a viewer to images inside an existing element; see the [directive guide](/en/vue2/guide/directive).

```vue
<template>
  <div v-viewer="{ toolbar: true }">
    <img src="/photo.jpg" alt="Landscape" />
  </div>
</template>
```

### API

Open a gallery from an image array with `this.$viewerApi()`; see the [API guide](/en/vue2/guide/api).

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
