# FAQ

## Why are the controls unstyled?

Browser builds with Vite / Webpack include styles automatically. When using the UMD script directly from a CDN, also load the Viewer.js CSS as shown in the browser-global quick start.

## How do thumbnails open the original image?

Set the component’s `url` prop, or `options.url` for the API / directive, to an image attribute such as `data-source`.

```html
<img src="thumb.jpg" data-source="large.jpg" />
```

## How do I migrate from the previous release?

Use v-viewer@legacy. Global plugin registration and $viewerApi remain. Named imports are now Viewer (component), vViewer (directive), viewerApi (API), and ViewerJs (the underlying class).

The component’s `options` prop remains compatible but is deprecated. See [component migration](./component#migration) for direct props, Vue events and ref methods.

The `inited` event has been removed. Call methods on the component ref instead, such as `this.$refs.gallery.show()`.

The component’s `images` and `trigger` props have also been removed. Render images in its slot; DOM changes are observed automatically. Use `viewerApi({ images })` for an image-array API.
