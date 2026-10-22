# API

适合按钮触发后打开指定图片数组的场景。

[演练场](/playground?example=api)

<ClientOnly><ViewerDemo mode="api" /></ClientOnly>

```viewer-example
api vue3 zh
```

## 参数和返回值 {#reference}

`useViewer({ images?, options?, target?, rebuild?, observe? })`

| 参数    | 说明                                                                                                                                                |
| ------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| images  | 临时图库的图片数组、ref 或 getter。                                                                                                                 |
| options | Viewer.js 配置、ref 或 getter。                                                                                                                     |
| target  | HTML 元素、id、CSS 选择器、ref 或 getter；省略时使用临时图库。                                                                                      |
| rebuild | 图片 DOM 变化时重建，默认 false。                                                                                                                   |
| observe | 仅用于 `target`。默认 `true` 在固定 50ms 窗口内合并图片 DOM 变化；`false` 关闭监听；非负数字指定窗口毫秒数（`0`：下一个任务）。支持 ref 或 getter。 |

| 返回值       | 说明                               |
| ------------ | ---------------------------------- |
| viewer       | ShallowRef<ViewerJs \| undefined>  |
| isShown      | 弹层是否显示的响应式状态。         |
| show(index?) | 打开图库，可指定图片下标。         |
| hide()       | 关闭预览。                         |
| update()     | 更新现有目标的图片。               |
| destroy()    | 释放实例；再次 show() 可重新创建。 |

在 setup 中调用 useViewer，作用域结束时自动清理。选择器在挂载或打开时解析，未匹配到元素会抛出错误。

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { useViewer } from 'v-viewer'
const target = ref<HTMLElement | null>(null)
const { show } = useViewer({ target })
</script>
<template>
  <div ref="target"><img src="/photo.jpg" /></div>
  <button @click="show()">Open</button>
</template>
```

## 临时图库

不指定 `target` 时，`show()` 根据 `images` 创建弹窗图库。关闭或销毁后会自动删除临时 DOM，离开所属组件时也会自动清理。

```vue
<script setup>
import { useViewer } from 'v-viewer'

const { show } = useViewer({
  images: [
    { src: '/thumb.jpg', 'data-source': '/large.jpg', alt: 'Landscape' },
  ],
  options: { url: 'data-source', initialViewIndex: 0 },
})
</script>

<template>
  <button @click="show()">显示viewer</button>
</template>
```

通过 `viewer.value` 调用 Viewer.js 的全部方法。 [Viewer.js methods](https://github.com/fengyuanchen/viewerjs#methods)
