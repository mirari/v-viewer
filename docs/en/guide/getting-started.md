# Quick start

::: warning Upgrading an existing project
This major rewrite includes breaking API changes. Components now recommend direct props, Vue events and ref methods. The legacy options prop remains compatible, but is deprecated. Read the [migration examples](./component#migration) before upgrading.
:::

<ClientOnly><ViewerConfigurator /></ClientOnly>

## Installation

```sh
npm install v-viewer
```

::: warning Upgrading an existing project
The new version no longer requires you to explicitly install `viewerjs` or import its CSS file.
:::

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
import { Viewer } from 'v-viewer/unstyled'
import './viewer-theme.css'
```

Provide complete layout and control styles. Use the unstyled entry throughout the project; any `v-viewer` import still loads the default stylesheet.

## Basic usage

### Component

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
