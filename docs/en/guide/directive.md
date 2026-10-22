# Directive

Apply the directive to an image or an existing gallery.

[Playground](/en/playground?example=directive)

<ClientOnly><ViewerDemo mode="directive" /></ClientOnly>

```viewer-example
directive vue3 en
```

## Binding and modifiers {#reference}

| Binding            | Description                                                   |
| ------------------ | ------------------------------------------------------------- |
| v-viewer="options" | Accepts Viewer.js options. Deep changes rebuild the instance. |
| .static            | Disable image mutation observation; call update() yourself.   |
| .rebuild           | Recreate the instance when images change.                     |

By default, adding, removing and changing image attributes automatically updates the gallery. Access the instance as `element.$viewer`. Unmounting disconnects the observer and destroys the instance.

```ts
import type { ViewerElement } from 'v-viewer'
const element = document.querySelector<ViewerElement>('#gallery')
element?.$viewer?.show()
```
