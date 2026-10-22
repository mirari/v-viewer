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

Replace the default plugin with local imports. component becomes Viewer; directive() becomes vViewer; api becomes useViewer, with images, options and an optional target in one configuration object and automatic scope cleanup. The old Viewer class export is now ViewerJs.
