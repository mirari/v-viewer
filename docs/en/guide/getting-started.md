# Quick start

<ClientOnly><ViewerConfigurator /></ClientOnly>

## Installation

```sh
npm install v-viewer
```

::: warning Upgrading an existing project
The new version no longer requires you to explicitly install `viewerjs` or import the CSS file from `viewerjs`.
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

Download the [default stylesheet viewer.css](https://github.com/fengyuanchen/viewerjs/blob/main/dist/viewer.css) from the Viewer.js repository, save it as `viewer-theme.css` and customize it.

## Basic usage

### Component

Suitable for complex scenarios involving custom toolbars or images in dynamically rendered Markdown or HTML whose content is not known in advance. By default, it watches additions, removals and attribute changes of `<img>` elements inside the component and automatically updates the gallery. See the [component guide](/en/guide/component).

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

Suitable for simple image browsing without complex customization, while also supporting images in dynamically rendered Markdown or HTML whose content is not known in advance. By default, it watches additions, removals and attribute changes of `<img>` elements inside the element the directive is bound to and automatically updates the gallery. See the [directive guide](/en/guide/directive).

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

Suitable for scenarios such as opening a specified image array after a button click. See the [API guide](/en/guide/api).

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
<script src="https://unpkg.com/viewerjs/dist/viewer.min.js"></script>
<script src="https://unpkg.com/v-viewer"></script>
<div id="app">
  <div v-viewer><img src="photo.jpg" /></div>
</div>
<script>
  Vue.createApp({ directives: { viewer: VueViewer.vViewer } }).mount('#app')
</script>
```
