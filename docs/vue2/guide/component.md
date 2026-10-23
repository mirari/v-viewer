# 组件

适合对工具栏有定制需求、动态渲染 Markdown 或 HTML 等未知图片内容的复杂场景。默认监听组件内部 `<img>` 元素的增删和属性变化，自动更新图库。

::: warning 旧版本升级提醒
Vue 2 的 4.x 是包含破坏性变更的主版本重构。现在可以在组件上直接使用 Viewer.js 的属性、事件和方法。**旧的 options 属性保留兼容，但不推荐继续使用**，现有项目可以逐步迁移。
:::

## 演练场 {#playground}

[编辑此示例](/vue2/playground?example=component)

<ClientOnly><ViewerDemo vue2 mode="component" /></ClientOnly>

```viewer-example
component vue2 zh
```

## 属性 {#props}

### Viewer.js 原生属性 {#viewerjs-props}

对应 [Viewer.js 配置项](https://github.com/fengyuanchen/viewerjs#options)，点击属性名可查看原文档。可用配置和默认值以安装的 Viewer.js 版本为准；配置及其嵌套值变化后，组件会在 DOM 更新后重建实例。

<!--@include: ../../.vitepress/fragments/viewer-options.zh.md-->

### v-viewer 独有属性 {#v-viewer-props}

| 属性      | 类型             | 作用                                                                      |
| --------- | ---------------- | ------------------------------------------------------------------------- |
| `options` | `ViewerOptions`  | 默认 `{}`；保留兼容但不推荐，优先使用直接属性和 Vue 事件。                |
| `rebuild` | boolean          | 默认 `false`；图片变化时是否销毁并重建实例。                              |
| `observe` | boolean / number | 默认 `true`（50ms）；`false` 关闭监听；非负数字指定合并更新的等待毫秒数。 |

组件自动监听内部 `<img>` 元素的增删和属性变化，包括整段 HTML 的替换；默认调用 `update()` 更新图库，设置 `rebuild` 时改为重建。

取值、更新时机及适用场景详见[自动更新 observe](/guide/observe)。

## 事件 {#events}

以下均为 [Viewer.js 原生事件](https://github.com/fengyuanchen/viewerjs#events)，通过 Vue 事件使用；点击事件名可查看原文档。

事件参数为原始 DOM 事件，操作数据位于 `event.detail`。对于支持取消的操作，可使用 `@show.prevent` 或 `event.preventDefault()` 阻止执行。

<!--@include: ../../.vitepress/fragments/viewer-events.zh.md-->

## 回调 {#callbacks}

兼容入口 `options` 仍支持 `options.viewed` 等 Viewer.js 回调，但不推荐继续使用，优先使用 `@viewed` 等 Vue 事件。回调参数与组件事件是同一个原始 DOM 事件；同时设置时，两者都会执行。

## 方法 {#methods}

### Viewer.js 原生方法 {#viewerjs-methods}

通过组件 ref 调用，点击方法名可查看对应的 [Viewer.js 原文档](https://github.com/fengyuanchen/viewerjs#methods)。

| 方法                                                                                                            | 作用                                                                                       |
| --------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| [`show(immediate?)`](https://github.com/fengyuanchen/viewerjs#showimmediate)                                    | 显示弹窗；`true` 表示立即显示。仅弹窗模式可用。                                            |
| [`hide(immediate?)`](https://github.com/fengyuanchen/viewerjs#hideimmediate)                                    | 隐藏弹窗；`true` 表示立即隐藏。仅弹窗模式可用。                                            |
| [`view(index?)`](https://github.com/fengyuanchen/viewerjs#viewindex)                                            | 按下标查看图片；省略时使用 `initialViewIndex`，隐藏时会先显示查看器。                      |
| [`prev(loop?)`](https://github.com/fengyuanchen/viewerjs#prevloopfalse)                                         | 查看上一张；`loop` 控制是否从首张跳到末张，默认 `false`。                                  |
| [`next(loop?)`](https://github.com/fengyuanchen/viewerjs#nextloopfalse)                                         | 查看下一张；`loop` 控制是否从末张跳到首张，默认 `false`。                                  |
| [`move(x, y?)`](https://github.com/fengyuanchen/viewerjs#movex-y--x)                                            | 按相对偏移量移动图片；省略 `y` 时使用 `x`。                                                |
| [`moveTo(x, y?)`](https://github.com/fengyuanchen/viewerjs#movetox-y--x)                                        | 将图片移动到绝对位置；省略 `y` 时使用 `x`。                                                |
| [`rotate(degree)`](https://github.com/fengyuanchen/viewerjs#rotatedegree)                                       | 按相对角度旋转；正数向右，负数向左。                                                       |
| [`rotateTo(degree)`](https://github.com/fengyuanchen/viewerjs#rotatetodegree)                                   | 旋转到指定的绝对角度。                                                                     |
| [`scale(scaleX, scaleY?)`](https://github.com/fengyuanchen/viewerjs#scalescalex-scaley)                         | 按轴缩放；省略 `scaleY` 时使用 `scaleX`，负值可翻转图片。                                  |
| [`scaleX(scaleX)`](https://github.com/fengyuanchen/viewerjs#scalexscalex)                                       | 按水平方向缩放；`-1` 水平翻转。                                                            |
| [`scaleY(scaleY)`](https://github.com/fengyuanchen/viewerjs#scaleyscaley)                                       | 按垂直方向缩放；`-1` 垂直翻转。                                                            |
| [`zoom(ratio, showTooltip?, pivot?)`](https://github.com/fengyuanchen/viewerjs#zoomratio-showtooltip-pivot)     | 按相对比例缩放；正数放大、负数缩小，可指定提示和缩放中心。                                 |
| [`zoomTo(ratio, showTooltip?, pivot?)`](https://github.com/fengyuanchen/viewerjs#zoomtoratio-showtooltip-pivot) | 缩放到绝对比例，`1` 为自然尺寸；可指定提示和缩放中心。                                     |
| [`play(fullscreen?)`](https://github.com/fengyuanchen/viewerjs#playfullscreen)                                  | 开始播放图片；参数控制是否请求浏览器全屏。                                                 |
| [`stop()`](https://github.com/fengyuanchen/viewerjs#stop-1)                                                     | 停止播放图片。                                                                             |
| [`full()`](https://github.com/fengyuanchen/viewerjs#full)                                                       | 从内嵌模式进入弹窗模式，仅内嵌查看器可用。                                                 |
| [`exit()`](https://github.com/fengyuanchen/viewerjs#exit)                                                       | 退出弹窗模式并恢复内嵌显示，仅内嵌查看器可用。                                             |
| [`showTooltip()`](https://github.com/fengyuanchen/viewerjs#tooltip-1)                                           | 显示当前图片比例的百分比，需要开启 `tooltip`；对应原生 `tooltip()`，为避免属性重名而改名。 |
| [`toggle()`](https://github.com/fengyuanchen/viewerjs#toggle)                                                   | 在当前尺寸和自然尺寸之间切换图片大小。                                                     |
| [`reset()`](https://github.com/fengyuanchen/viewerjs#reset)                                                     | 将图片恢复到初始状态。                                                                     |
| [`update()`](https://github.com/fengyuanchen/viewerjs#updateoptions)                                            | 源图片增删或排序变化后，更新查看器的图片列表。                                             |
| [`destroy()`](https://github.com/fengyuanchen/viewerjs#destroy)                                                 | 销毁查看器并移除实例。                                                                     |

图片操作需等待 `@viewed`。除 `update()` 和 `destroy()` 外，上述方法返回 Viewer.js 实例；没有实例时返回 `undefined`。

`update()` 和 `destroy()` 均无返回值。`update()` 会在实例不存在时创建实例，不接收 options，配置通过属性修改；`destroy()` 同时断开监听并清空组件的实例引用，保留源图片。

### v-viewer 独有方法 {#v-viewer-methods}

| 方法              | 作用                                                          |
| ----------------- | ------------------------------------------------------------- |
| `createViewer()`  | 使用当前属性和图片 DOM 创建实例；已有实例时不重复创建。       |
| `rebuildViewer()` | 销毁当前实例，按最新属性和图片 DOM 重建；没有实例时直接创建。 |

需要访问底层实例数据时，可读取 `this.$refs.gallery.$viewer`。

## 插槽 {#slot}

### 默认插槽 {#default-slot}

在默认插槽中渲染图片及自定义布局。

```vue
<viewer :toolbar="false">
  <img v-for="src in images" :key="src" :src="src" />
</viewer>
```

渲染得到的 HTML 也可直接作为插槽内容：

```vue
<viewer>
  <article v-html="html" />
</viewer>
```

### 工具栏插槽 {#toolbar-slots}

通过 Vue 模板、图标组件和事件绑定定制工具栏。

| 插槽             | 作用                                                  |
| ---------------- | ----------------------------------------------------- |
| `toolbar-append` | 在工具栏后追加内容，也可与自定义 `toolbar` 同时使用。 |
| `toolbar`        | 替换全部内置工具栏按钮，自定义图标、排列和交互。      |

两个插槽均提供 `image`（当前预览图片的 HTMLImageElement，图片显示前为 undefined）、`index`（从 0 开始），以及 `zoom`、`rotate`、`reset`、`next` 等组件上的 Viewer.js 方法。插槽参数随预览状态更新。

`toolbar: false` 会隐藏整个工具栏，包括插槽内容。不使用完整替换插槽时，原 toolbar 配置仍决定按钮是否显示。

示例使用 Vue 2.5+ 的 `slot-scope` 写法；Vue 2.4 请改用 `scope`。

<ClientOnly><ViewerDemo vue2 mode="toolbar" /></ClientOnly>

::: details 示例代码

```viewer-example
toolbar vue2 zh
```

:::

## 旧版本迁移 {#migration}

```vue
<!-- 旧写法：仍兼容，但不推荐 -->
<viewer :options="{ toolbar: false, viewed: onViewed }">
  <img src="/photo.jpg" />
</viewer>

<!-- 推荐写法 -->
<viewer :toolbar="false" @viewed="onViewed">
  <img src="/photo.jpg" />
</viewer>
```
