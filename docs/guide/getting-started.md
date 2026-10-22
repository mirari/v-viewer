# 快速上手

基于 [Viewer.js](https://github.com/fengyuanchen/viewerjs) 的 Vue 3 图片预览。点击图片，可以缩放、旋转或浏览下一张。

::: warning 旧项目升级注意
本次主版本重构包含破坏性 API 变更。组件推荐改用直接属性、Vue 事件和 ref 方法；旧 options 传参保留兼容，但不推荐继续使用。升级前请对照[迁移示例](./component#migration)调整写法。
:::

<ClientOnly><ViewerConfigurator /></ClientOnly>

## 安装

```sh
pnpm add v-viewer
```

Viewer.js 会作为依赖自动安装。在使用的页面按需引入组件、指令或组合式函数，浏览器构建会自动加载对应版本的样式，无需单独导入 CSS。

### 自定义样式

引入全局 CSS 覆盖默认样式：

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

以上样式作用于所有查看器。若只修改某个实例，组件使用 `class-name="custom-viewer"`；指令和 API 在配置中设置 `className: 'custom-viewer'`。将 CSS 选择器中的 `.viewer-container` 替换为 `.custom-viewer`。

使用全局 CSS 或不带 `scoped` 的 `<style>`。弹窗默认挂载到 `body`，覆盖样式时不要依赖页面容器的父级选择器。

#### 完全替换默认样式

使用 `v-viewer/unstyled` 保留全部功能，关闭自动加载 CSS：

```js
import { Viewer } from 'v-viewer/unstyled'
import './viewer-theme.css'
```

自定义样式需包含完整布局和控件。项目内统一使用无样式入口，避免其他 `v-viewer` 导入再次加载默认样式。

## 基本使用方式

### 组件

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

### 指令

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

## 其他导入方式

### CommonJS

```js
const { Viewer, vViewer, useViewer } = require('v-viewer')
```

### 浏览器全局

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
