# v-viewer

[![npm version](https://img.shields.io/npm/v/v-viewer?label=npm)](https://www.npmjs.com/package/v-viewer)
[![npm legacy version](https://img.shields.io/npm/v/v-viewer/legacy?label=Vue%202)](https://www.npmjs.com/package/v-viewer?activeTab=versions)
[![npm downloads](https://img.shields.io/npm/dm/v-viewer)](https://www.npmjs.com/package/v-viewer)
[![CI](https://github.com/mirari/v-viewer/actions/workflows/ci.yml/badge.svg)](https://github.com/mirari/v-viewer/actions/workflows/ci.yml)
[![Vue](https://img.shields.io/badge/Vue-3%20%7C%202-42b883?logo=vuedotjs)](https://v-viewer.mirari.cc/en/guide/compatibility)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/mirari/v-viewer)](https://github.com/mirari/v-viewer/stargazers)

An image viewer for Vue with zoom, rotation, image navigation and custom toolbars, powered by [Viewer.js](https://github.com/fengyuanchen/viewerjs).

**[English documentation](https://v-viewer.mirari.cc/en/)** · **[中文文档](https://v-viewer.mirari.cc/)** · **[Live demo / 在线演示](https://v-viewer.mirari.cc/playground)**

## Install

```sh
npm install v-viewer         # Vue 3 (5.x)
npm install v-viewer@legacy  # Vue 2 (4.x)
```

Supports Vue 3.0+ and Vue 2.4+. For upgrades from older major versions, see the [Vue 3 migration guide](https://v-viewer.mirari.cc/en/guide/component#migration) or [Vue 2 migration guide](https://v-viewer.mirari.cc/en/vue2/guide/component#migration).

Viewer.js and its browser styles are included automatically.

## Quick start

Vue 3.2+:

```vue
<script setup>
import { Viewer } from 'v-viewer'

const images = ['/photo.jpg']
</script>

<template>
  <Viewer :toolbar="true">
    <img v-for="src in images" :key="src" :src="src" alt="Gallery image" />
  </Viewer>
</template>
```

For Vue 2, directives, API usage and more examples, see the [Vue 3 guide](https://v-viewer.mirari.cc/en/guide/getting-started) or [Vue 2 guide](https://v-viewer.mirari.cc/en/vue2/).

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=mirari/v-viewer&type=Date)](https://star-history.com/#mirari/v-viewer&Date)

## License

[MIT](./LICENSE)
