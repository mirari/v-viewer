# v-viewer
Image viewer component for vue, supports rotation, scale, zoom and so on, based on [viewer.js](https://github.com/fengyuanchen/viewerjs)

[![npm version](https://badge.fury.io/js/v-viewer.svg)](https://badge.fury.io/js/v-viewer)

## [Live demo](https://mirari.github.io/v-viewer/)

## Quick Example
- [CodePen](https://codepen.io/mirari/pen/PePrVq)
- [JSFiddle](https://jsfiddle.net/mirari/n1L0gxtv/)

## [中文文档](https://mirari.cc/2017/08/27/Vue%E5%9B%BE%E7%89%87%E6%B5%8F%E8%A7%88%E7%BB%84%E4%BB%B6v-viewer%EF%BC%8C%E6%94%AF%E6%8C%81%E6%97%8B%E8%BD%AC%E3%80%81%E7%BC%A9%E6%94%BE%E3%80%81%E7%BF%BB%E8%BD%AC%E7%AD%89%E6%93%8D%E4%BD%9C/)

## Migration from 0.x
- The only change you have to make is to manually import the `.css` file:
```
import 'viewerjs/dist/viewer.css'
```

## Installation 
Install from GitHub via NPM
```bash
npm install v-viewer
```

## Usage

To use `v-viewer`, simply import it and the `css` file, and call `Vue.use()` to install.

```html
<template>
  <div id="app">
    <!-- directive -->
    <div class="images" v-viewer>
      <img src="1.jpg">
      <img src="2.jpg">
      ...
    </div>
    <!-- component -->
    <viewer :images="images">
      <img v-for="src in images" :src="src" :key="src">
    </viewer>
  </div>
</template>
<script>
  import 'viewerjs/dist/viewer.css'
  import Viewer from 'v-viewer'
  import Vue from 'vue'
  Vue.use(Viewer)
  export default {
    data() {
      images: ['1.jpg', '2.jpg']
    }
  }
</script>
```


### Support UMD

#### Browser
```html
<link href="//path/viewer.css" rel="stylesheet">
<script src="//path/vue.js"></script>
<script src="//path/viewer.js"></script>
<script src="//path/v-viewer.js"></script>
...
<script>
  Vue.use(VueViewer.default)
</script>
```

#### CommonJS
```javascript
var VueViewer = require('VueViewer')
```

#### AMD
```javascript
require(['VueViewer'], function (VueViewer) {});
```

### Usage of directive
Just add the directive `v-viewer` to any element, then all `img` elements in it will be handled by `viewer`.

You can set the options like this: `v-viewer="{inline: true}"`

Get the element by selector and then use `el.$viewer` to get the `viewer` instance if you need.

```html
<template>
  <div id="app">
    <div class="images" v-viewer="{movable: false}">
      <img v-for="src in images" :src="src" :key="src">
    </div>
    <button type="button" @click="show">Show</button>
  </div>
</template>
<script>
  import 'viewerjs/dist/viewer.css'
  import Viewer from 'v-viewer'
  import Vue from 'vue'
  Vue.use(Viewer)
  export default {
    data() {
      images: ['1.jpg', '2.jpg']
    },
    methods: {
      show () {
        const viewer = this.$el.querySelector('.images').$viewer
        viewer.show()
      }
    }
  }
</script>
```

#### Direcitve modifiers
##### static
The `viewer` renderer will be executed only once after the directive binded.

If you're sure the images inside this element won't change again, use it to avoid unnecessary re-render.

```
<div class="images" v-viewer.static="{inline: true}">
  <img v-for="src in images" :src="src" :key="src">
</div>
```

### Usage of component
You can simply import the component and register it locally too.

Use [scoped slot](https://vuejs.org/v2/guide/components.html#Scoped-Slots) to customize the presentation of your images.

Listen for the `inited` event to get the `viewer` instance, or use `this.refs.xxx.$viewer`.

```html
<template>
  <div id="app">
    <viewer :options="options" :images="images"
            @inited="inited"
            class="viewer" ref="viewer"
    >
      <template slot-scope="scope">
        <img v-for="src in scope.images" :src="src" :key="src">
        {{scope.options}}
      </template>
    </viewer>
    <button type="button" @click="show">Show</button>
  </div>
</template>
<script>
  import 'viewerjs/dist/viewer.css'
  import Viewer from "v-viewer/src/component.vue"
  export default {
    components: {
      Viewer
    },
    data() {
      images: ['1.jpg', '2.jpg']
    },
    methods: {
      inited (viewer) {
        this.$viewer = viewer
      },
      show () {
        this.$viewer.show()
      }
    }
  }
</script>
```

You can replace `images` with `trigger`, to accept any type of prop.
when the `trigger` changes, the component will re-render the viewer.
```html
<viewer :trigger="externallyGeneratedHtmlWithImages">
  <div v-html="externallyGeneratedHtmlWithImages"/>
</viewer>
```

## Options & Methods 

Refer to [viewer.js](https://github.com/fengyuanchen/viewerjs).

## Plugin options
### name

- Type: `String`
- Default: `viewer`

If you need to avoid name conflict, you can import it like this:

```html
<template>
  <div id="app">
    <div class="images" v-vuer="{movable: false}">
      <img v-for="src in images" :src="src" :key="src">
    </div>
    <button type="button" @click="show">Show</button>
  </div>
</template>
<script>
  import 'viewerjs/dist/viewer.css'
  import Vuer from 'v-viewer'
  import Vue from 'vue'
  Vue.use(Vuer, {name: 'vuer'})
  export default {
    data() {
      images: ['1.jpg', '2.jpg']
    },
    methods: {
      show () {
        const vuer = this.$el.querySelector('.images').$vuer
        vuer.show()
      }
    }
  }
</script>
```

### defaultOptions

- Type: `Object`
- Default: `undefined`

If you need to set the viewer default options, you can import it like this:
```javascript
import Viewer from 'v-viewer'
import Vue from 'vue'
Vue.use(Viewer, {
  defaultOptions: {
    zIndex: 9999
  }
})
```

And you can reset the default options at any other time:
```javascript
import Viewer from 'v-viewer'
import Vue from 'vue'
Vue.use(Viewer)
Viewer.setDefaults({
  zIndexInline: 2017
})
```
