# FAQ

## Why are the controls unstyled?

Browser builds with Vite / Webpack include styles automatically. When using the UMD script directly from a CDN, also load the Viewer.js CSS as shown in the browser-global quick start.

## How do thumbnails open the original image?

Set the component’s `url` prop, or `options.url` for the API / directive, to an image attribute such as `data-source`.

```html
<img src="thumb.jpg" data-source="large.jpg" />
```

## How do I migrate from the previous release?

Replace the default plugin with local imports. component becomes Viewer; directive() becomes vViewer; api becomes useViewer, with images and options in one configuration object and automatic scope cleanup. The old Viewer class export is now ViewerJs.

The component’s `options` prop remains compatible but is deprecated. See [component migration](./component#migration) for direct props, Vue events and ref methods.

The `inited` event has been removed. Call methods on the component ref instead, such as `gallery.value.show()`.

The component’s `images` and `trigger` props have also been removed. Render images in its slot; DOM changes are observed automatically. Use `useViewer({ images })` for an image-array API.
