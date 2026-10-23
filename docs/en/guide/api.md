# API

Suitable for scenarios such as opening a specified image array after a button click.

## Playground {#playground}

[Playground](/en/playground?example=api)

<ClientOnly><ViewerDemo mode="api" /></ClientOnly>

```viewer-example
api vue3 en
```

`url: 'data-source'` uses the image’s `data-source` attribute as the preview URL; `initialViewIndex` sets the starting image index (from 0).

## Parameters and return values {#reference}

`useViewer({ images?, options? })`

| Parameter | Description                                         |
| --------- | --------------------------------------------------- |
| images    | Image array, ref or getter for temporary galleries. |
| options   | Viewer.js options, ref or getter.                   |

| Return value | Description                                   |
| ------------ | --------------------------------------------- |
| viewer       | ShallowRef<ViewerJs \| undefined>             |
| isShown      | Reactive modal visibility.                    |
| show(index?) | Open at an optional image index.              |
| hide()       | Close the preview.                            |
| destroy()    | Release the instance; show() can recreate it. |

Call useViewer inside setup. It cleans up on scope disposal.

Closing or destroying the preview removes its temporary DOM. Changes to images or options during a preview apply the next time it opens. Calling `show(index)` again switches images within the current gallery.

Use `viewer.value` to call all Viewer.js methods. [Viewer.js methods](https://github.com/fengyuanchen/viewerjs#methods)
