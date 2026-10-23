# API

适合按钮触发后打开指定图片数组等场景。

## 演练场 {#playground}

[演练场](/playground?example=api)

<ClientOnly><ViewerDemo mode="api" /></ClientOnly>

```viewer-example
api vue3 zh
```

`url: 'data-source'` 使用图片的 `data-source` 属性作为预览地址；`initialViewIndex` 指定首次显示的图片下标（从 0 开始）。

## 参数和返回值 {#reference}

`useViewer({ images?, options? })`

| 参数    | 说明                                |
| ------- | ----------------------------------- |
| images  | 临时图库的图片数组、ref 或 getter。 |
| options | Viewer.js 配置、ref 或 getter。     |

| 返回值       | 说明                                                                                                    |
| ------------ | ------------------------------------------------------------------------------------------------------- |
| viewer       | ShallowRef<ViewerJs \| undefined>                                                                       |
| isShown      | 弹层是否显示的响应式状态。                                                                              |
| show(index?) | 打开图库，可指定图片下标。                                                                              |
| hide()       | 正常关闭预览，按配置播放退出动画并触发 `hide` / `hidden` 事件；关闭完成后自动销毁实例并清理临时 DOM。   |
| destroy()    | 立即销毁实例并清理临时 DOM，不播放退出动画，也不触发 `hide` / `hidden` 事件；再次 `show()` 可重新创建。 |

在 setup 中调用 useViewer，作用域结束时自动清理。

关闭或销毁预览后会删除临时 DOM。打开期间修改图片数组或配置，下次打开时生效；重复调用 `show(index)` 会在当前图库内切换图片。

通过 `viewer.value` 调用 Viewer.js 的全部方法。 [Viewer.js methods](https://github.com/fengyuanchen/viewerjs#methods)

## Viewer.js 配置项 {#options}

通过 `useViewer({ images, options })` 的 `options` 传入。API 固定使用弹窗模式，`inline` 会被设为 `false`，仅用于内嵌模式的配置不生效。

对应 [Viewer.js 配置项](https://github.com/fengyuanchen/viewerjs#options)，点击属性名可查看原文档。可用配置和默认值以安装的 Viewer.js 版本为准。

<!--@include: ../.vitepress/fragments/viewer-options.zh.md-->

### 事件回调 {#callbacks}

在同一个 `options` 对象中设置 `viewed(event)` 等回调。参数为原始 DOM 事件，操作数据位于 `event.detail`；点击事件名可查看 [Viewer.js 原文档](https://github.com/fengyuanchen/viewerjs#events)。

<!--@include: ../.vitepress/fragments/viewer-events.zh.md-->
