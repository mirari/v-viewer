# 指令

适合无需复杂定制需求的简单浏览场景，同时支持动态渲染 Markdown 或 HTML 等未知图片内容。默认监听指令绑定元素内部 `<img>` 元素的增删和属性变化，自动更新图库。

[演练场](/playground?example=directive)

<ClientOnly><ViewerDemo mode="directive" /></ClientOnly>

```viewer-example
directive vue3 zh
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

## 自动更新 observe {#observe}

`observe` 控制图片 DOM 的自动监听和更新频率。监听范围包括容器内部 `<img>` 元素的增删、排序和属性变化（如 `src`、`alt`），也包括整段 Markdown 或 HTML 替换后产生的图片变化。无关的文字、样式容器和 Viewer.js 自身生成的界面不会触发图库更新。

| 值             | 行为                                                                           | 适用场景                                           |
| -------------- | ------------------------------------------------------------------------------ | -------------------------------------------------- |
| `true`（默认） | 从首次图片变化开始等待 50ms，将期间的变化合并更新。                            | 分批渲染的 Markdown、HTML 或短时间连续变化的图片。 |
| `0`            | 不额外设置等待窗口，异步执行一次更新；在该次更新执行前发生的图片变化仍会合并。 | 变化不频繁、希望尽快更新的图库。                   |
| 正数，如 `100` | 将指定毫秒数内的图片变化合并更新。                                             | 更新较频繁，尤其是开启 `rebuild` 的场景。          |
| `false`        | 关闭图片 DOM 自动监听；仍会初始化图库，配置变化和手动 `update()` 仍然生效。    | 内容固定，或由调用者控制更新时间。                 |

例如，同一次同步操作中连续添加 10 个 `<img>`，`0` 也可以合并为一次更新；如果图片分多次异步操作添加，`0` 可能更新多次，而 `50` 会合并同一 50ms 窗口内的变化。

计时从首次图片变化开始，后续变化不会重新计时。因此持续更新内容时，图库仍会定期更新，不必等所有变化停止。等待时间只影响后续图片 DOM 的自动更新，不延迟首次初始化，也不控制图片下载。

默认更新复用实例并调用 `update()`；开启 `rebuild` 后，每批变化改为销毁并重建实例。`observe` 可动态修改，设为 `false` 会取消尚未执行的自动更新。

旧版 `.static` 修饰符已移除，请替换为 `{ observe: false }`。

```ts
import type { ViewerElement } from 'v-viewer'
const element = document.querySelector<ViewerElement>('#gallery')
element?.$viewer?.show()
```
