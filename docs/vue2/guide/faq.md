# 常见问题

## 为什么按钮没有样式？

Vite / Webpack 等浏览器构建会自动引入样式。直接通过 CDN 使用 UMD 脚本时，需要同时引入 Viewer.js 的 CSS，见快速上手中的浏览器全局示例。

## 如何用缩略图预览原图？

组件使用 `url="data-source"`；指令和 API 将 `options.url` 设置为 `data-source`，读取图片上的原图地址。

```html
<img src="thumb.jpg" data-source="large.jpg" />
```

## 如何从旧版本迁移？

使用 v-viewer@legacy。保留全局插件和 $viewerApi；具名导出改为 Viewer（组件）、vViewer（指令）、viewerApi（API）、ViewerJs（底层类）。

组件的 `options` 保留兼容但不推荐使用，迁移为直接属性、Vue 事件和 ref 方法的示例见[组件迁移说明](./component#migration)。

`inited` 事件已移除，改为通过组件 ref 调用方法，如 `this.$refs.gallery.show()`。

组件的 `images` 和 `trigger` 属性也已移除，图片由插槽渲染并自动监听 DOM 变化；只传图片数组时使用 `viewerApi({ images })`。
