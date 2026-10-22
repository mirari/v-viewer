# Quick start

Image viewing for Vue 3, powered by [Viewer.js](https://github.com/fengyuanchen/viewerjs). Click an image to zoom, rotate and navigate.

<ClientOnly><ViewerConfigurator /></ClientOnly>

## Installation

```sh
pnpm add v-viewer
```

Viewer.js is installed automatically as a dependency. Import the component, directive or composable where you use it; browser builds automatically include the matching stylesheet without a separate CSS import.

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
import { Viewer } from 'v-viewer/unstyled'
import './viewer-theme.css'
```

`viewer-theme.css` must provide the complete viewer styles, including layout and controls. Use the unstyled entry consistently throughout your project; importing from `v-viewer` anywhere still loads the default stylesheet.

## Basic usage

### Component

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

### Directive

```vue
<script setup>
import { vViewer } from 'v-viewer'
</script>

<template>
  <div v-viewer="{ toolbar: true }">
    <img src="/photo.jpg" alt="Landscape" />
  </div>
</template>
```

### API

```vue
<script setup>
import { useViewer } from 'v-viewer'
const { show } = useViewer({ images: ['/photo.jpg'] })
</script>

<template><button @click="show()">Open gallery</button></template>
```

## Other import methods

### CommonJS

```js
const { Viewer, vViewer, useViewer } = require('v-viewer')
```

### Browser global

```html
<link rel="stylesheet" href="https://unpkg.com/viewerjs/dist/viewer.css" />
<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/viewerjs"></script>
<script src="https://unpkg.com/v-viewer"></script>
<div id="app">
  <div v-viewer><img src="photo.jpg" /></div>
</div>
<script>
  Vue.createApp({ directives: { viewer: VueViewer.vViewer } }).mount('#app')
</script>
```
