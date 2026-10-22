# 快速上手

基于 [Viewer.js](https://github.com/fengyuanchen/viewerjs) 的 Vue 2 图片预览。点击图片，可以缩放、旋转或浏览下一张。

<ClientOnly><ViewerConfigurator vue2 /></ClientOnly>

## 安装

```sh
pnpm add v-viewer@legacy
```

Viewer.js 会作为依赖自动安装。在应用入口注册一次插件，浏览器构建会自动加载对应版本的样式，无需单独导入 CSS。

```js
import Vue from 'vue'
import VueViewer from 'v-viewer'
Vue.use(VueViewer)
```

### 自定义样式

默认样式会自动加载。需要调整外观时，在使用 v-viewer 的页面或应用入口引入自己的全局 CSS：

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

以上样式作用于所有查看器。若只修改某个实例，在它的 `options` 中设置 `className: 'custom-viewer'`，并将选择器中的 `.viewer-container` 替换为 `.custom-viewer`。组件、指令和 API 均支持这个选项。

使用全局 CSS 或不带 `scoped` 的 `<style>`。弹窗默认挂载到 `body`，覆盖样式时不要依赖页面容器的父级选择器。

#### 完全替换默认样式

如果要完全替换默认样式，使用 `v-viewer/unstyled` 入口。它导出相同的组件和 API，但不会自动加载 CSS：

```js
import Vue from 'vue'
import VueViewer from 'v-viewer/unstyled'
import './viewer-theme.css'

Vue.use(VueViewer)
```

`viewer-theme.css` 需要包含查看器的完整样式，包括布局和控件。项目内应统一使用无样式入口；其他地方若仍从 `v-viewer` 引入，默认样式依然会被加载。

## 基本使用方式

### 组件

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

### 指令

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

## 其他导入方式

### CommonJS

```js
const VueViewer = require('v-viewer')
Vue.use(VueViewer.default)
```

### 浏览器全局

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
