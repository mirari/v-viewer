import { defaults, eventNames, presets } from './options'

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
let getViewer = () => undefined
let index = 0
let revision = 0
let send = () => {}
function state() {
  const instance = getViewer()
  const shown = !!(instance?.isShown || instance?.showing)
  send({ type: 'state', revision, index, shown,
    credit: instance?.image?.getAttribute('data-credit') || '',
    container: instance?.viewer?.parentElement?.id || instance?.viewer?.parentElement?.tagName || '',
    width: instance?.options.inline ? instance?.parent?.clientWidth || 0 : innerWidth })
}
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
    if (['ready', 'viewed', 'show', 'shown', 'hidden'].includes(name)) setTimeout(state, 0)
  }
  options.className = 'viewer-config-viewer ' + (options.className || '')
  return options
}
export default {
  props: { report: Function },
  beforeMount() {
    getViewer = () => this.$refs.gallery?.${vue2 ? '$viewer' : 'viewer'}
    index = 0
    revision = 0
    send = this.report
  },
  data() { return { images: ${JSON.stringify(imageUrls)}, options: createOptions(initial) } },
  computed: {
    viewerProps() { return Object.fromEntries(Object.entries(this.options).filter(([key]) => !eventNames.includes(key))) },
    viewerListeners() { return Object.fromEntries(Object.entries(this.options).filter(([key]) => eventNames.includes(key))) },
  },
  mounted() {
    this.receive = command => {
      if (command.type === 'options') {
        const values = command.settings
        revision = command.revision
        const changedIndex = values.initialViewIndex !== this.previousIndex
        this.previousIndex = values.initialViewIndex
        const options = createOptions(values)
        options.initialViewIndex = changedIndex ? values.initialViewIndex : Math.min(index, values.filter === 'first' ? 0 : values.filter === 'lastTwo' ? 1 : this.images.length - 1)
        this.options = options
        // Vue 2 rebuilds the child on its next tick; report after that completes.
        this.$nextTick(() => this.$nextTick(state))
      }
    }
    this.previousIndex = initial.initialViewIndex
    window.addEventListener('resize', state)
    this.$nextTick(() => {
      state()
      send({ type: 'ready' })
    })
  },
  ${vue2 ? 'beforeDestroy' : 'beforeUnmount'}() {
    window.removeEventListener('resize', state)
    getViewer = () => undefined
    send = () => {}
  },
}
</script>
<template>
  <div id="preview-container" class="viewer-config-preview">
    <Viewer ref="gallery" v-bind="viewerProps" v-on="viewerListeners" class="photos" :class="{ 'inline-source': options.inline }">
      <img v-for="(src, i) in images" :key="src" :src="src" :alt="'Landscape ' + (i + 1)"
        :data-index="i" :data-source="images[(i + 1) % images.length]" data-credit="Lorem Picsum"
        tabindex="0" @keydown.enter="$event.target.click()" />
    </Viewer>
    <span class="layer-reference">z-index: 1</span>
  </div>
</template>
`
}
