# 常见问题

## 为什么按钮没有样式？

Vite / Webpack 等浏览器构建会自动引入样式。直接通过 CDN 使用 UMD 脚本时，需要同时引入 Viewer.js 的 CSS，见快速上手中的浏览器全局示例。

## 如何用缩略图预览原图？

将 `options.url` 设置为图片上的原图属性，例如 `data-source`。

```html
<img src="thumb.jpg" data-source="large.jpg" />
```

## 如何定制工具栏和回调？

通过组件/API 的 `options` 或指令绑定值传入 Viewer.js 配置。 [Viewer.js options](https://github.com/fengyuanchen/viewerjs#options)

## 如何从旧版本迁移？

使用 v-viewer@legacy。保留全局插件和 $viewerApi；具名导出改为 Viewer（组件）、vViewer（指令）、viewerApi（API）、ViewerJs（底层类）。
