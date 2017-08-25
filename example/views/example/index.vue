<template>
  <div>
    <h1 class="title">Demo</h1>
    <hr>
    <div>
      <h2 class="title is-4">Usage of directive</h2>
      <directive-example></directive-example>
    </div>
    <div>
      <h2 class="title is-4">Usage of component</h2>
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
