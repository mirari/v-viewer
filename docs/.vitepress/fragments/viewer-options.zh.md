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
