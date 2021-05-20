import { App } from 'vue'
import defaults from 'lodash/defaults'
import ViewerJs from 'viewerjs'
import viewer from './viewer'
import directive from './directive'
import component from './component.vue'

export interface InstallationOptions {
  name?: string
  debug?: boolean
  defaultOptions?: ViewerJs.Options
}

export {
  ViewerJs,
  viewer,
  directive,
  component,
}

export default {
  install(app: App, { name = 'viewer', debug = false, defaultOptions }: InstallationOptions = {}) {
    if (defaultOptions) {
      ViewerJs.setDefaults(defaultOptions)
    }

    app.config.globalProperties.$viewer = viewer
    app.component(name, defaults(component, { name }))
    app.directive(name, directive({ name, debug }))
  },
  setDefaults(defaultOptions: ViewerJs.Options) {
    ViewerJs.setDefaults(defaultOptions)
  },
}
