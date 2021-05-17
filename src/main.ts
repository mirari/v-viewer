import { App } from 'vue'
import defaults from 'lodash/defaults'
import Viewer from 'viewerjs'
import Component from './component'
import Directive from './directive'

export interface InstallationOptions {
  name?: string
  debug?: boolean
  defaultOptions?: Viewer.Options
}

export {
  Component,
  Viewer,
}

export default {
  install(app: App, { name = 'viewer', debug = false, defaultOptions }: InstallationOptions = {}): void {
    if (defaultOptions) {
      Viewer.setDefaults(defaultOptions)
    }

    app.component(name, defaults(Component, { name }))
    app.use(Directive, { name, debug })
  },
  setDefaults(defaultOptions: Viewer.Options): void {
    Viewer.setDefaults(defaultOptions)
  },
}
