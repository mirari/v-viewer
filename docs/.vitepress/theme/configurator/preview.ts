import { defaults, eventNames, presets } from './options'
import { defaultImageCount } from '../sample-images'

export function previewSample(
  vue2: boolean,
  english: boolean,
  imageUrls: string[],
) {
  const presetSource =
    '{' +
    Object.entries(presets)
      .map(
        ([key, values]) =>
          `${JSON.stringify(key)}: {${Object.entries(values)
            .map(([name, code]) => `${JSON.stringify(name)}: (${code})`)
            .join(',')}}`,
      )
      .join(',') +
    '}'
  return `<script>
const presets = ${presetSource}
const eventNames = ${JSON.stringify(eventNames)}
const initial = ${JSON.stringify(defaults())}
const sourceImages = ${JSON.stringify(imageUrls)}
let index = 0
let send = () => {}
function createOptions(settings) {
  const options = {}
  for (const [key, value] of Object.entries(settings)) {
    if (!eventNames.includes(key)) options[key] = presets[key]?.[String(value)] ?? value
    // Null is a meaningful preset (no image filter).
    if (presets[key] && Object.prototype.hasOwnProperty.call(presets[key], String(value))) options[key] = presets[key][String(value)]
  }
  for (const name of eventNames) options[name] = event => {
    if (name === 'view') index = event.detail.index
    if (settings[name]) {
      const detail = {}
      for (const [key, value] of Object.entries(event.detail || {})) {
        if (typeof value === 'number' || typeof value === 'string') detail[key] = value
      }
      send({ type: 'event', name, detail })
    }
  }
  options.className = 'viewer-config-viewer ' + (options.className || '')
  // Inline previews must not move the documentation page to a focused thumbnail.
  options.focus = !options.inline
  return options
}
export default {
  props: { report: Function },
  beforeMount() {
    index = 0
    send = this.report
  },
  data() { return { images: sourceImages.slice(0, ${defaultImageCount}), options: createOptions(initial) } },
  computed: {
    viewerProps() { return Object.fromEntries(Object.entries(this.options).filter(([key]) => !eventNames.includes(key))) },
    viewerListeners() { return Object.fromEntries(Object.entries(this.options).filter(([key]) => eventNames.includes(key))) },
  },
  mounted() {
    this.receive = command => {
      if (command.type === 'images') {
        this.images = sourceImages.slice(0, command.count)
        index = Math.max(0, Math.min(index, this.images.length - 1))
      }
      if (command.type === 'options') {
        const values = command.settings
        const changedIndex = values.initialViewIndex !== this.previousIndex
        this.previousIndex = values.initialViewIndex
        const options = createOptions(values)
        options.initialViewIndex = changedIndex ? values.initialViewIndex : Math.max(0, Math.min(index, values.filter === 'first' ? 0 : values.filter === 'lastTwo' ? Math.min(1, this.images.length - 1) : this.images.length - 1))
        this.options = options
      }
    }
    this.previousIndex = initial.initialViewIndex
    this.$nextTick(() => {
      send({ type: 'ready' })
    })
  },
  ${vue2 ? 'beforeDestroy' : 'beforeUnmount'}() {
    send = () => {}
  },
}
</script>
<template>
  <div id="preview-container" class="viewer-config-preview">
    <Viewer ref="gallery" v-bind="viewerProps" v-on="viewerListeners" class="photos" :class="{ 'inline-source': options.inline }">
      <img v-for="(src, i) in images" :key="src" :src="src" :alt="'Landscape ' + (i + 1)"
        :data-index="i" :data-count="images.length" :data-source="images[(i + 1) % images.length]"
        tabindex="0" @keydown.enter="$event.target.click()" />
    </Viewer>
  </div>
</template>
`
}
