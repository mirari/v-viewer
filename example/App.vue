<template>
  <div id="app">
    <a class="github-fork-ribbon" href="https://github.com/mirari/v-viewer" title="Fork me on GitHub">Fork me on GitHub</a>
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-vcentered">
            <div class="column">
              <p class="title is-1">
                v-viewer
              </p>
              <p class="subtitle is-4">
                Image viewer component for vue, supports rotation, scale, zoom and so on, based on <a href="https://github.com/fengyuanchen/viewerjs" target="_blank">viewer.js</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="container" style="margin-bottom: 30px">
      <example style="margin-bottom: 100px;"></example>
      <doc class="markdown-body"></doc>
    </div>
    <footer class="footer">
      <div class="container">
        <div class="content has-text-centered">
          <p>
            <a href="http://mirari.cc" target="_blank" title="mirari.cc">
              <strong>mirari.cc</strong>
            </a>
            ·  GitHub
            <a href="https://github.com/mirari" target="_blank" title="GitHub">
              @mirari
            </a>
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import Doc from '../README.md'
import Example from './views/example'
import 'github-markdown-css'
import 'highlight.js/styles/github.css'

export default {
  components: {
    Doc,
    Example
  }
}
</script>
<style lang="scss" rel="stylesheet/scss">
  .hero.is-primary {
    margin-bottom: 2em;

    .column {
      padding: 4em;
    }
  }

  a:not(.button) {
    text-decoration: underline;
  }
</style>
<style lang="sass" rel="stylesheet/sass">
  @import "~bulma/sass/utilities/initial-variables"
  $primary: #41b883
  @import "~bulma"
</style>
<style lang="scss" rel="stylesheet/scss">
.viewer-loading > img {
  display: none;
}
</style>
