# v-viewer
Image viewer component for vue, supports rotation, scale, zoom and so on, based on [viewer.js](https://github.com/fengyuanchen/viewerjs)

[![npm version](https://badge.fury.io/js/v-viewer.svg)](https://badge.fury.io/js/v-viewer)

## [Live demo](http://mirari.github.io/v-viewer/)

## [中文文档](http://mirari.cc/2017/08/27/Vue%E5%9B%BE%E7%89%87%E6%B5%8F%E8%A7%88%E7%BB%84%E4%BB%B6v-viewer%EF%BC%8C%E6%94%AF%E6%8C%81%E6%97%8B%E8%BD%AC%E3%80%81%E7%BC%A9%E6%94%BE%E3%80%81%E7%BF%BB%E8%BD%AC%E7%AD%89%E6%93%8D%E4%BD%9C/)

## Installation 
Install from GitHub via NPM
```bash
npm install v-viewer
```

## Usage

To use `v-viewer`, simply import it, and call `Vue.use()` to install.

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
      <template scope="scope">
        <img v-for="src in scope.images" :src="src" :key="src">
        {{scope.options}}
      </template>
    </viewer>
    <button type="button" @click="show">Show</button>
  </div>
</template>
<script>
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
import Viewer from 'src'
import Vue from 'vue'
Vue.use(Viewer, {
  defaultOptions: {
    zIndex: 9999
  }
})
```

And you can reset the default options at any other time:
```javascript
import Viewer from 'src'
import Vue from 'vue'
Vue.use(Viewer)
Viewer.setDefaults({
  zIndexInline: 2017
})
```
