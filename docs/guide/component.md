# 组件

适合对工具栏有定制需求、动态渲染 Markdown 或 HTML 等未知图片内容的复杂场景。默认监听组件内部 `<img>` 元素的增删和属性变化，自动更新图库。

::: warning 旧版本升级提醒
Vue 3 的 5.x 是包含破坏性变更的主版本重构。现在可以在组件上直接使用 Viewer.js 的属性、事件和方法。**旧的 options 属性保留兼容，但不推荐继续使用**，现有项目可以逐步迁移。
:::

[演练场](/playground?example=component)

<ClientOnly><ViewerDemo mode="component" /></ClientOnly>

```viewer-example
component vue3 zh
```

## 旧版本迁移 {#migration}

```vue
<!-- 旧写法：仍兼容，但不推荐 -->
<Viewer :options="{ toolbar: false, viewed: onViewed }">
  <img src="/photo.jpg" />
</Viewer>

<!-- 推荐写法 -->
<Viewer :toolbar="false" @viewed="onViewed">
  <img src="/photo.jpg" />
</Viewer>
```

## 属性 {#props}

### Viewer.js 原生属性 {#viewerjs-props}

对应 [Viewer.js 配置项](https://github.com/fengyuanchen/viewerjs#options)，点击属性名可查看原文档。可用配置和默认值以安装的 Viewer.js 版本为准；配置及其嵌套值变化后，组件会在 DOM 更新后重建实例。

| 属性                                                                                  | 类型                                | 作用                                                                 |
| ------------------------------------------------------------------------------------- | ----------------------------------- | -------------------------------------------------------------------- |
| [`backdrop`](https://github.com/fengyuanchen/viewerjs#backdrop)                       | boolean / string                    | 弹窗模式的背景遮罩；设为 `static` 时点击遮罩不关闭弹窗。             |
| [`button`](https://github.com/fengyuanchen/viewerjs#button)                           | boolean                             | 显示右上角按钮。                                                     |
| [`className`](https://github.com/fengyuanchen/viewerjs#classname)                     | string                              | 添加到查看器根元素的自定义类名。                                     |
| [`container`](https://github.com/fengyuanchen/viewerjs#container)                     | string / Element                    | 弹窗模式的挂载容器，可传元素或 CSS 选择器。                          |
| [`filter`](https://github.com/fengyuanchen/viewerjs#filter)                           | function                            | 筛选可查看的图片，返回 `true` 保留，`false` 忽略。                   |
| [`fullscreen`](https://github.com/fengyuanchen/viewerjs#fullscreen)                   | boolean / FullscreenOptions         | 播放时请求浏览器全屏，可传入 Fullscreen API 配置。                   |
| [`focus`](https://github.com/fengyuanchen/viewerjs#focus)                             | boolean                             | 初始化时聚焦缩略图导航的当前项，需要开启 `keyboard`。                |
| [`inheritedAttributes`](https://github.com/fengyuanchen/viewerjs#inheritedattributes) | array                               | 从源图片额外继承的属性；`src`、`alt` 始终继承。                      |
| [`initialCoverage`](https://github.com/fengyuanchen/viewerjs#initialcoverage)         | number                              | 图片初始覆盖比例，取值大于 0 且不超过 1。                            |
| [`initialViewIndex`](https://github.com/fengyuanchen/viewerjs#initialviewindex)       | number                              | 初始图片下标，也作为 `view()` 的默认下标。                           |
| [`inline`](https://github.com/fengyuanchen/viewerjs#inline)                           | boolean                             | 开启内嵌模式，在容器内显示；关闭时使用弹窗模式。                     |
| [`autoplay`](https://github.com/fengyuanchen/viewerjs#autoplay)                       | boolean                             | 播放时自动切换图片。                                                 |
| [`interval`](https://github.com/fengyuanchen/viewerjs#interval)                       | number                              | 播放时自动切换图片的间隔，单位毫秒。                                 |
| [`keyboard`](https://github.com/fengyuanchen/viewerjs#keyboard)                       | boolean                             | 启用键盘操作。                                                       |
| [`loading`](https://github.com/fengyuanchen/viewerjs#loading)                         | boolean                             | 加载图片时显示加载指示器。                                           |
| [`loop`](https://github.com/fengyuanchen/viewerjs#loop)                               | boolean                             | 循环浏览，首尾图片之间可继续切换。                                   |
| [`magnifier`](https://github.com/fengyuanchen/viewerjs#magnifier)                     | boolean / object                    | 全屏查看时悬停显示放大镜，可设置尺寸、倍率和透明度；触屏禁用。       |
| [`maxZoomRatio`](https://github.com/fengyuanchen/viewerjs#maxzoomratio)               | number / function                   | 最大放大比例，也可由函数根据图片和图片数据计算。                     |
| [`minHeight`](https://github.com/fengyuanchen/viewerjs#minheight)                     | number                              | 内嵌模式下查看器的最小高度，单位像素。                               |
| [`minWidth`](https://github.com/fengyuanchen/viewerjs#minwidth)                       | number                              | 内嵌模式下查看器的最小宽度，单位像素。                               |
| [`minZoomRatio`](https://github.com/fengyuanchen/viewerjs#minzoomratio)               | number / function                   | 最小缩放比例，也可由函数根据图片和图片数据计算。                     |
| [`movable`](https://github.com/fengyuanchen/viewerjs#movable)                         | boolean                             | 允许移动图片。                                                       |
| [`navbar`](https://github.com/fengyuanchen/viewerjs#navbar)                           | boolean / number / string / object  | 缩略图导航的显示、尺寸和位置；对象配置支持更多布局选项。             |
| [`navigation`](https://github.com/fengyuanchen/viewerjs#navigation)                   | boolean / number / object           | 查看器左右两侧的上一张、下一张按钮，可分别设置显示和尺寸。           |
| [`preload`](https://github.com/fengyuanchen/viewerjs#preload)                         | boolean                             | 提前加载上一张或下一张图片。                                         |
| [`rotatable`](https://github.com/fengyuanchen/viewerjs#rotatable)                     | boolean                             | 允许旋转图片。                                                       |
| [`rotateOnGesture`](https://github.com/fengyuanchen/viewerjs#rotateongesture)         | boolean                             | 通过手势事件旋转图片，例如 Mac Safari 的双指手势。                   |
| [`rotateOnTouch`](https://github.com/fengyuanchen/viewerjs#rotateontouch)             | boolean                             | 通过触屏双指手势旋转图片。                                           |
| [`scalable`](https://github.com/fengyuanchen/viewerjs#scalable)                       | boolean                             | 允许按轴缩放图片，可用于水平或垂直翻转。                             |
| [`slideOnTouch`](https://github.com/fengyuanchen/viewerjs#slideontouch)               | boolean                             | 通过触屏滑动切换上一张或下一张图片。                                 |
| [`slideOnWheel`](https://github.com/fengyuanchen/viewerjs#slideonwheel)               | boolean / string                    | 通过滚轮切图，可指定修饰键；在缩略图导航区域或滚轮缩放未生效时可用。 |
| [`title`](https://github.com/fengyuanchen/viewerjs#title)                             | boolean / number / function / array | 图片标题的显示和内容；默认使用 `alt` 或从 URL 提取的文件名。         |
| [`toggleOnDblclick`](https://github.com/fengyuanchen/viewerjs#toggleondblclick)       | boolean                             | 双击时在图片自然尺寸和初始尺寸之间切换。                             |
| [`toolbar`](https://github.com/fengyuanchen/viewerjs#toolbar)                         | boolean / number / object           | 工具栏及按钮的显示、布局、尺寸和点击行为。                           |
| [`tooltip`](https://github.com/fengyuanchen/viewerjs#tooltip)                         | boolean                             | 缩放时显示当前图片比例的百分比提示。                                 |
| [`transition`](https://github.com/fengyuanchen/viewerjs#transition)                   | boolean / object                    | 启用 CSS 过渡动画，也可通过对象关闭指定操作的动画。                  |
| [`url`](https://github.com/fengyuanchen/viewerjs#url)                                 | string / function                   | 原图地址来源；字符串指定图片属性名，函数返回图片 URL。               |
| [`zIndex`](https://github.com/fengyuanchen/viewerjs#zindex)                           | number                              | 弹窗模式下查看器的 CSS `z-index`。                                   |
| [`zIndexInline`](https://github.com/fengyuanchen/viewerjs#zindexinline)               | number                              | 内嵌模式下查看器的 CSS `z-index`。                                   |
| [`zoomOnGesture`](https://github.com/fengyuanchen/viewerjs#zoomongesture)             | boolean                             | 通过手势事件缩放图片，例如 Mac Safari 的捏合手势。                   |
| [`zoomOnTouch`](https://github.com/fengyuanchen/viewerjs#zoomontouch)                 | boolean                             | 通过触屏拖动手势缩放图片。                                           |
| [`zoomOnWheel`](https://github.com/fengyuanchen/viewerjs#zoomonwheel)                 | boolean / string                    | 通过滚轮缩放，可指定修饰键或修饰键组合。                             |
| [`zoomRatio`](https://github.com/fengyuanchen/viewerjs#zoomratio)                     | number                              | 滚轮缩放时每次变化的比例。                                           |
| [`zoomable`](https://github.com/fengyuanchen/viewerjs#zoomable)                       | boolean                             | 允许缩放图片。                                                       |

### v-viewer 独有属性 {#v-viewer-props}

| 属性      | 类型             | 作用                                                                      |
| --------- | ---------------- | ------------------------------------------------------------------------- |
| `options` | `ViewerOptions`  | 默认 `{}`；保留兼容但不推荐，优先使用直接属性和 Vue 事件。                |
| `rebuild` | boolean          | 默认 `false`；图片变化时是否销毁并重建实例。                              |
| `observe` | boolean / number | 默认 `true`（50ms）；`false` 关闭监听；非负数字指定合并更新的等待毫秒数。 |

组件自动监听内部 `<img>` 元素的增删和属性变化，包括整段 HTML 的替换；默认调用 `update()` 更新图库，设置 `rebuild` 时改为重建。

`observe` 从首次图片变化开始计时，窗口内的变化合并处理，持续变化不会推迟更新。`:observe="100"` 使用 100ms 窗口，`:observe="0"` 仅合并至下一个任务。关闭监听不影响配置变更和手动调用 `update()`。

## 事件 {#events}

以下均为 [Viewer.js 原生事件](https://github.com/fengyuanchen/viewerjs#events)，通过 Vue 事件使用；点击事件名可查看原文档。

事件参数为原始 DOM 事件，操作数据位于 `event.detail`。事件同步转发，可通过 `@show.prevent` 或 `event.preventDefault()` 取消操作。

| 事件                                                                                                                            | 触发时机 / 常用参数                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| [`ready`](https://github.com/fengyuanchen/viewerjs#ready-1)                                                                     | 查看器界面初始化完成；弹窗模式下可能在首次打开时才触发。                                                               |
| [`show`](https://github.com/fengyuanchen/viewerjs#show-1) / [`shown`](https://github.com/fengyuanchen/viewerjs#shown-1)         | 弹窗打开前 / 打开过渡动画完成后。                                                                                      |
| [`hide`](https://github.com/fengyuanchen/viewerjs#hide-1) / [`hidden`](https://github.com/fengyuanchen/viewerjs#hidden-1)       | 弹窗关闭前 / 关闭过渡动画完成后。                                                                                      |
| [`view`](https://github.com/fengyuanchen/viewerjs#view-1) / [`viewed`](https://github.com/fengyuanchen/viewerjs#viewed-1)       | 图片显示前 / 显示完成后；`detail.index` 为从 0 开始的图片下标，`image` 和 `originalImage` 分别为预览图片与源图片元素。 |
| [`move`](https://github.com/fengyuanchen/viewerjs#move-1) / [`moved`](https://github.com/fengyuanchen/viewerjs#moved-1)         | 移动前 / 后；`detail.x`、`y`、`oldX`、`oldY` 表示位置变化。                                                            |
| [`rotate`](https://github.com/fengyuanchen/viewerjs#rotate-1) / [`rotated`](https://github.com/fengyuanchen/viewerjs#rotated-1) | 旋转前 / 后；`detail.degree`、`oldDegree` 表示角度变化。                                                               |
| [`scale`](https://github.com/fengyuanchen/viewerjs#scale-1) / [`scaled`](https://github.com/fengyuanchen/viewerjs#scaled-1)     | 按轴缩放或翻转前 / 后；`detail.scaleX`、`scaleY`、`oldScaleX`、`oldScaleY` 表示变化。                                  |
| [`zoom`](https://github.com/fengyuanchen/viewerjs#zoom-1) / [`zoomed`](https://github.com/fengyuanchen/viewerjs#zoomed-1)       | 缩放前 / 后；`detail.ratio`、`oldRatio` 表示缩放比例。                                                                 |
| [`play`](https://github.com/fengyuanchen/viewerjs#play-1) / [`stop`](https://github.com/fengyuanchen/viewerjs#stop-2)           | 开始 / 停止幻灯片播放前。                                                                                              |
| [`playing`](https://github.com/fengyuanchen/viewerjs#playing-1)                                                                 | 幻灯片播放中显示每张图片之前。                                                                                         |

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

图片操作需等待 `@viewed`。转发方法返回当前 Viewer.js 实例；没有实例时返回 `undefined`。

组件对 `update()` 和 `destroy()` 增加了生命周期管理，两者均无返回值。`update()` 会在实例不存在时创建实例，不接收 options，配置通过属性修改；`destroy()` 同时断开监听并清空组件的实例引用，保留源图片。

### v-viewer 独有方法 {#v-viewer-methods}

| 方法              | 作用                                                          |
| ----------------- | ------------------------------------------------------------- |
| `createViewer()`  | 使用当前属性和图片 DOM 创建实例；已有实例时不重复创建。       |
| `rebuildViewer()` | 销毁当前实例，按最新属性和图片 DOM 重建；没有实例时直接创建。 |

需要访问底层实例数据时，可读取 `gallery.value.viewer`。

## 插槽 {#slot}

### 默认插槽 {#default-slot}

在默认插槽中渲染图片及自定义布局。插槽参数仅保留兼容用的 `options`，其内容为原始 options 属性。

```vue
<Viewer :toolbar="false">
  <img v-for="src in images" :key="src" :src="src" />
</Viewer>
```

渲染得到的 HTML 也可直接作为插槽内容：

```vue
<Viewer>
  <article v-html="html" />
</Viewer>
```

### 工具栏插槽 {#toolbar-slots}

通过 Vue 模板、图标组件和事件绑定定制工具栏。插槽属于组件能力，指令和 API 继续使用 Viewer.js 的 toolbar 配置。

| 插槽             | 作用                                                  |
| ---------------- | ----------------------------------------------------- |
| `toolbar-append` | 在工具栏后追加内容，也可与自定义 `toolbar` 同时使用。 |
| `toolbar`        | 替换全部内置工具栏按钮，自定义图标、排列和交互。      |

两个插槽均提供 `image`（当前预览图片的 HTMLImageElement，图片显示前为 undefined）、`index`（从 0 开始），以及 `zoom`、`rotate`、`reset`、`next` 等组件上的 Viewer.js 方法。方法始终作用于当前实例；状态和插槽内容响应式更新，无需重建图库。

`toolbar: false` 会隐藏整个工具栏，包括插槽内容。不使用完整替换插槽时，原 toolbar 配置仍决定按钮是否显示。自定义按钮通过插槽提供的方法绑定行为，并自行设置图标、名称和样式。

<ClientOnly><ViewerDemo mode="toolbar" /></ClientOnly>

::: details 示例代码

```viewer-example
toolbar vue3 zh
```

:::
