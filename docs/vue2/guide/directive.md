# 指令

直接增强已有的图片或图片容器，适用于 Markdown 渲染内容、HTML 片段等动态 DOM。

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

| 用法                            | 说明                                                                              |
| ------------------------------- | --------------------------------------------------------------------------------- |
| v-viewer="options"              | 接受 Viewer.js 配置，深层修改会重建实例。                                         |
| `v-viewer="{ observe: false }"` | 关闭图片 DOM 自动更新。                                                           |
| `v-viewer="{ observe: 100 }"`   | 在 100ms 窗口内合并图片 DOM 变化；默认 `true` 使用 50ms，`0` 仅合并至下一个任务。 |
| .rebuild                        | 图片变化时重建实例。                                                              |

默认监听图片增删和属性修改，自动更新图库。可通过 `element.$viewer` 获取实例；卸载时会断开监听并销毁实例。

等待窗口从首次图片变化开始，后续变化不会推迟更新。`observe` 接受 `true`、`false` 或非负数字；关闭监听后，配置变更和手动调用 `update()` 仍然生效。旧版 `.static` 修饰符已移除，请替换为 `{ observe: false }`。

```ts
import type { ViewerElement } from 'v-viewer'
const element = document.querySelector<ViewerElement>('#gallery')
element?.$viewer?.show()
```
