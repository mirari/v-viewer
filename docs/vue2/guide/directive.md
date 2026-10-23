# 指令

适合无需复杂定制需求的简单浏览场景，同时支持动态渲染 Markdown 或 HTML 等未知图片内容。默认监听指令绑定元素内部 `<img>` 元素的增删和属性变化，自动更新图库。

## 演练场 {#playground}

[演练场](/vue2/playground?example=directive)

<ClientOnly><ViewerDemo vue2 mode="directive" /></ClientOnly>

```viewer-example
directive vue2 zh
```

渲染得到的 HTML 同样适用：

```vue
<article v-viewer v-html="html" />
```

## 绑定值与修饰符 {#reference}

| 用法                            | 说明                                                                      |
| ------------------------------- | ------------------------------------------------------------------------- |
| v-viewer="options"              | 接受 Viewer.js 配置，深层修改会重建实例。                                 |
| `v-viewer="{ observe: false }"` | 关闭图片 DOM 自动更新。                                                   |
| `v-viewer="{ observe: 100 }"`   | 在 100ms 窗口内合并图片 DOM 变化；默认 `true` 使用 50ms，`0` 不额外等待。 |
| `v-viewer="{ rebuild: true }"`  | 图片变化时重建实例；默认 `false`，支持动态切换。                          |
| `.rebuild`                      | `rebuild: true` 的简写。                                                  |

绑定值中的 `rebuild` 优先于 `.rebuild`，显式设置 `false` 可关闭重建；未设置或为 `undefined` 时沿用修饰符。`rebuild` 和 `observe` 是 v-viewer 的扩展配置，不会传给 Viewer.js。

默认监听指令绑定元素内部 `<img>` 元素的增删和属性变化，自动更新图库。可通过 `element.$viewer` 获取实例；卸载时会断开监听并销毁实例。

取值、更新时机及适用场景详见[自动更新 observe](/guide/observe)。

```ts
import type { ViewerElement } from 'v-viewer'
const element = document.querySelector<ViewerElement>('#gallery')
element?.$viewer?.show()
```

## 配置项 {#options}

直接放入 `v-viewer="options"` 绑定的配置对象。配置及其嵌套值变化后会重建实例；`observe` 和 `rebuild` 属于 v-viewer 扩展配置，见上方说明。

对应 [Viewer.js 配置项](https://github.com/fengyuanchen/viewerjs#options)，点击属性名可查看原文档。可用配置和默认值以安装的 Viewer.js 版本为准。

<!--@include: ../../.vitepress/fragments/viewer-options.zh.md-->

## 回调 {#callbacks}

在 `options` 中设置 `viewed(event)` 等回调函数，对应 [Viewer.js 原生事件](https://github.com/fengyuanchen/viewerjs#events)。回调参数为原始 DOM 事件，操作数据位于 `event.detail`；点击名称可查看原文档。

<!--@include: ../../.vitepress/fragments/viewer-events.zh.md-->

## 旧版本迁移 {#migration}

旧版 `.static` 修饰符已移除，请替换为 `{ observe: false }`。
