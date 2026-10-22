# 快速上手

::: warning 旧项目升级注意
本次主版本重构包含破坏性变更。组件推荐改用直接属性、Vue 事件和 ref 方法；旧 options 传参保留兼容，但不推荐继续使用。升级前请对照[迁移示例](./guide/component#migration)调整写法。
:::

<ClientOnly><ViewerConfigurator vue2 /></ClientOnly>

## 安装

```sh
npm install v-viewer@legacy
```

::: warning 旧项目升级注意
新版本无需显式安装 `viewerjs` 依赖，也无需在使用时引入 `viewerjs` 的 CSS 文件了。
:::

```js
import Vue from 'vue'
import VueViewer from 'v-viewer'
Vue.use(VueViewer)
```

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

#### 完全替换默认样式

使用 `v-viewer/unstyled` 保留全部功能，关闭自动加载 CSS：

```js
import Vue from 'vue'
import VueViewer from 'v-viewer/unstyled'
import './viewer-theme.css'

Vue.use(VueViewer)
```

可从 Viewer.js 仓库下载[默认样式 viewer.css](https://github.com/fengyuanchen/viewerjs/blob/main/dist/viewer.css)，保存为 `viewer-theme.css` 后修改。

## 基本使用方式

### 组件

适合对工具栏有定制需求、动态渲染 Markdown 或 HTML 等未知图片内容的复杂场景。默认监听组件内部 `<img>` 元素的增删和属性变化，自动更新图库。详细用法见[组件](/vue2/guide/component)。

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

### 指令

适合无需复杂定制需求的简单浏览场景，同时支持动态渲染 Markdown 或 HTML 等未知图片内容。默认监听指令绑定元素内部 `<img>` 元素的增删和属性变化，自动更新图库。详细用法见[指令](/vue2/guide/directive)。

```vue
<template>
  <div v-viewer="{ toolbar: true }">
    <img src="/photo.jpg" alt="Landscape" />
  </div>
</template>
```

### API

适合按钮触发后打开指定图片数组的场景。详细用法见 [API](/vue2/guide/api)。

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
