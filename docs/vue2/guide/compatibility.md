# 兼容性

| 环境      | 支持                                 |
| --------- | ------------------------------------ |
| Vue       | 2.4+                                 |
| Viewer.js | 1.11.7+ (1.x)                        |
| SSR       | 支持导入；DOM 操作仅在浏览器中执行。 |

Vue 2 运行时代码转译为 ES5；IE 11 需在插件之前加载可选 polyfills。

```js
import 'v-viewer/polyfills'
```

## SSR / Nuxt

组件在挂载后初始化。SSR 应用可使用组件；指令在客户端插件中注册。viewerApi 或 this.$viewerApi 只在浏览器事件处理函数中调用。

样式由浏览器构建自动加载，服务端导入不加载 CSS。Nuxt 的客户端和服务端均可直接导入 `v-viewer`。
