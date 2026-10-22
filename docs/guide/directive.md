# 指令

将指令添加到图片或已有的图片容器上。

[演练场](/playground?example=directive)

<ClientOnly><ViewerDemo mode="directive" /></ClientOnly>

```viewer-example
directive vue3 zh
```

## 绑定值与修饰符 {#reference}

| 用法               | 说明                                           |
| ------------------ | ---------------------------------------------- |
| v-viewer="options" | 接受 Viewer.js 配置，深层修改会重建实例。      |
| .static            | 不监听图片 DOM 变化；需要时手动调用 update()。 |
| .rebuild           | 图片变化时重建实例。                           |

默认监听图片增删和属性修改，自动更新图库。可通过 `element.$viewer` 获取实例；卸载时会断开监听并销毁实例。

```ts
import type { ViewerElement } from 'v-viewer'
const element = document.querySelector<ViewerElement>('#gallery')
element?.$viewer?.show()
```
