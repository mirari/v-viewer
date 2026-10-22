# FAQ

## Why are the controls unstyled?

Browser builds with Vite / Webpack include styles automatically. When using the UMD script directly from a CDN, also load the Viewer.js CSS as shown in the browser-global quick start.

## How do thumbnails open the original image?

Set `options.url` to an image attribute such as `data-source`.

```html
<img src="thumb.jpg" data-source="large.jpg" />
```

## How do I customize the toolbar or callbacks?

Pass Viewer.js options through `options` (component/API) or the directive binding. [Viewer.js options](https://github.com/fengyuanchen/viewerjs#options)

## How do I migrate from the previous release?

Use v-viewer@legacy. Global plugin registration and $viewerApi remain. Named imports are now Viewer (component), vViewer (directive), viewerApi (API), and ViewerJs (the underlying class).
