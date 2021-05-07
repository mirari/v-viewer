import { App } from 'vue'
import defaults from 'lodash/defaults'
import Component from './component.vue'
// import directive from './directive'

import Viewer from 'viewerjs'
import 'viewerjs/dist/viewer.css'

export interface InstallationOptions {
  name?: string;
  debug?: boolean;
  defaultOptions?: Viewer.Options;
}

export {
  Component,
  Viewer,
}

export default {
  install (app: App, { name = 'viewer', debug = false, defaultOptions }: InstallationOptions = {}): void {
    if (defaultOptions) {
      Viewer.setDefaults(defaultOptions)
    }
    app.component(name, defaults(Component, { name }))
    // Vue.use(directive, { name, debug })
    console.log(debug)
  },
  setDefaults (defaultOptions: Viewer.Options): void {
    Viewer.setDefaults(defaultOptions)
  },
}
