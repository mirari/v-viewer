# 组件

组件负责创建 Viewer.js 实例，并在卸载时自动销毁。

[演练场](/playground?example=component)

<ClientOnly><ViewerDemo mode="component" /></ClientOnly>

```viewer-example
component vue3 zh
```

## 属性 {#props}

| 属性    | 类型            | 默认值      | 作用                                                                                       |
| ------- | --------------- | ----------- | ------------------------------------------------------------------------------------------ |
| images  | `ViewerImage[]` | `[]`        | 传给默认插槽的数据；深层变化后，等待 Vue 更新 DOM，再刷新图库。                            |
| options | `ViewerOptions` | `{}`        | Viewer.js 配置；深层变化时销毁旧实例，并使用最新配置重新创建。                             |
| rebuild | `boolean`       | `false`     | 控制图片变化时的处理方式：关闭时更新现有实例，开启时销毁并重建。                           |
| trigger | `unknown`       | `undefined` | 值变化后，在 DOM 更新完成时按 `rebuild` 的设置刷新图库，适用于图库内容依赖其他状态的情况。 |

`ViewerImage` 可以是图片地址，也可以是 `{ src: '/thumb.jpg', 'data-source': '/large.jpg' }` 这样的属性对象。组件读取插槽内实际渲染的 `<img>` 元素；只传入 `images` 不会自动生成图片，需要在插槽中绑定相应属性。

组件也会自动观察图片 DOM 的增删和属性变化。需要显式通知外部更新时，可以改变 `trigger` 或调用 `updateViewer()`。修改 `options` 始终会重建实例，不受 `rebuild` 开关影响。

`inline`、`toolbar`、`url` 等配置通过 `options` 传入，取值与默认值见 [Viewer.js 配置](https://github.com/fengyuanchen/viewerjs#options)。

## 事件 {#events}

### 组件事件：inited

| 事件     | 参数               | 触发时机                                                             |
| -------- | ------------------ | -------------------------------------------------------------------- |
| `inited` | `viewer: ViewerJs` | 实例创建、刷新或重建完成后触发，通过 `@inited="handleInited"` 监听。 |

`inited` 可能触发多次：刷新时可能传回同一个实例，重建时会传回新实例。保存参数时，应每次更新引用。它表示组件已有实例，不代表图片加载或查看器显示完成；这些时机应使用 `ready`、`viewed` 或 `shown` 回调。

### Viewer.js 回调

通过 `options` 传入回调函数，参数为 DOM 事件，操作相关的数据位于 `event.detail`。

| 回调                 | 触发时机 / 常用参数                                                                                                    |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `ready`              | 查看器界面初始化完成；弹窗模式下可能在首次打开时才触发。                                                               |
| `show` / `shown`     | 弹窗打开前 / 打开过渡动画完成后。                                                                                      |
| `hide` / `hidden`    | 弹窗关闭前 / 关闭过渡动画完成后。                                                                                      |
| `view` / `viewed`    | 图片显示前 / 显示完成后；`detail.index` 为从 0 开始的图片下标，`image` 和 `originalImage` 分别为预览图片与源图片元素。 |
| `move` / `moved`     | 移动前 / 后；`detail.x`、`y`、`oldX`、`oldY` 表示位置变化。                                                            |
| `rotate` / `rotated` | 旋转前 / 后；`detail.degree`、`oldDegree` 表示角度变化。                                                               |
| `scale` / `scaled`   | 按轴缩放或翻转前 / 后；`detail.scaleX`、`scaleY`、`oldScaleX`、`oldScaleY` 表示变化。                                  |
| `zoom` / `zoomed`    | 缩放前 / 后；`detail.ratio`、`oldRatio` 表示缩放比例。                                                                 |
| `play` / `stop`      | 开始 / 停止幻灯片播放前。                                                                                              |

```vue
<script setup>
import { Viewer } from 'v-viewer'

const images = ['/photo-1.jpg', '/photo-2.jpg']
const options = {
  viewed(event) {
    console.log('viewed', event.detail.index)
  },
}
function handleInited(viewer) {
  console.log('inited', viewer)
}
</script>

<template>
  <Viewer :images="images" :options="options" @inited="handleInited">
    <img v-for="src in images" :key="src" :src="src" />
  </Viewer>
</template>
```

当 `event.cancelable` 为 `true` 时，可以调用 `event.preventDefault()` 阻止对应操作。这些回调请通过 `options` 使用，组件没有将其逐一声明为 Vue 事件。完整参数见 [Viewer.js 事件](https://github.com/fengyuanchen/viewerjs#events)。

## 方法 {#methods}

### 管理组件实例

在组件上设置 `ref="gallery"`，在 `<script setup>` 中声明 `const gallery = ref(null)`，挂载后通过 `gallery.value` 获取组件。

| 方法              | 作用                                                                                       |
| ----------------- | ------------------------------------------------------------------------------------------ |
| `createViewer()`  | 没有实例时创建；已有实例时不重复创建。可用于手动销毁后恢复查看器。                         |
| `updateViewer()`  | 根据当前 DOM 刷新图片列表，不强制重建，即使 `rebuild` 为 `true` 也如此；没有实例时会创建。 |
| `rebuildViewer()` | 销毁旧实例，使用当前 `options` 重新创建；没有实例时会创建。                                |
| `destroyViewer()` | 销毁实例、断开观察并清空 `viewer` 引用，保留源图片 DOM。                                   |

以上方法均无参数。组件在挂载时自动创建实例，卸载时自动销毁，通常修改图片或配置即可自动更新。如果修改 Vue 状态后立即手动刷新，应先等待 `nextTick()`，确保 DOM 已包含新图片。

### 操作查看器

`gallery.value.viewer` 是当前 Viewer.js 实例，创建前或销毁后为 `undefined`。通过组件 ref 访问时会自动解包，无需再加 `.value`。重建后应重新读取，避免使用已销毁的旧实例。

| Viewer.js 方法                        | 作用                                                                                    |
| ------------------------------------- | --------------------------------------------------------------------------------------- |
| `show()` / `hide()`                   | 打开 / 关闭弹窗模式的查看器。                                                           |
| `view(index)`                         | 显示指定下标的图片，下标从 0 开始。                                                     |
| `prev()` / `next()`                   | 显示上一张 / 下一张图片。                                                               |
| `zoom(ratio)` / `zoomTo(ratio)`       | 在当前比例上缩放 / 设置绝对缩放比例；`zoom(0.1)` 放大，`zoomTo(1)` 按图片原始尺寸显示。 |
| `rotate(degree)` / `rotateTo(degree)` | 按增量旋转 / 设置绝对角度，单位为度。                                                   |
| `move(x, y)` / `moveTo(x, y)`         | 按偏移量移动 / 移动到指定位置，单位为像素。                                             |
| `scaleX(value)` / `scaleY(value)`     | 按轴缩放；`-1` 为翻转，`1` 为恢复该轴方向。                                             |
| `play()` / `stop()`                   | 开始 / 停止幻灯片播放。                                                                 |
| `full()` / `exit()`                   | 将内嵌查看器展开 / 恢复为内嵌显示。                                                     |
| `reset()`                             | 将当前图片恢复到初始状态。                                                              |

图片操作需要当前图片已显示，首次打开后执行这类操作时可等待 `viewed` 回调。以上 Viewer.js 方法返回实例，支持链式调用；可选参数和其他方法见 [Viewer.js 方法](https://github.com/fengyuanchen/viewerjs#methods)。

在页面顶部的示例中，可以这样通过组件 ref 显示图片，或手动管理实例：

```js
function showSecondImage() {
  gallery.value.viewer?.view(1)
}

function recreateViewer() {
  gallery.value.destroyViewer()
  gallery.value.createViewer()
}
```

需要手动释放实例时，使用组件的 `destroyViewer()`，以便同时清理组件内部的实例引用。

## 默认插槽 {#slot}

| 插槽参数  | 说明                            |
| --------- | ------------------------------- |
| `images`  | 通过 `images` 属性传入的数组。  |
| `options` | 通过 `options` 属性传入的对象。 |

在插槽内渲染图片元素，也可以像页面顶部的示例一样，直接使用父组件的数据。

```vue
<Viewer :images="images" :options="options" v-slot="{ images, options }">
  <img v-for="src in images" :key="src" :src="src" />
  <p>toolbar: {{ options.toolbar }}</p>
</Viewer>
```
