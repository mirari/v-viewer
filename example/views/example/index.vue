<template>
  <div>
    <h1 class="title">Demo</h1>
    <hr>
    <div style="margin-bottom: 3em">
      <h2 class="title is-4">Directive</h2>
      <p class="subtitle"><a href="https://github.com/mirari/v-viewer/blob/master/example/views/example/DirectiveExample.vue" target="_blank">Source</a></p>
      <directive-example></directive-example>
    </div>
    <div>
      <h2 class="title is-4">Component</h2>
      <p class="subtitle"><a href="https://github.com/mirari/v-viewer/blob/master/example/views/example/ComponentExample.vue" target="_blank">Source</a></p>
      <component-example></component-example>
    </div>
  </div>
</template>

<script>
import DirectiveExample from './DirectiveExample'
import ComponentExample from './ComponentExample'

export default {
  components: {
    ComponentExample,
    DirectiveExample
  },

  data () {
    return {
    }
  },

  computed: {

  },

  mounted () {

  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
</style>
