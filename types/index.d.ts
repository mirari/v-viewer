import { App } from 'vue'
import Viewer from 'viewerjs'

declare namespace VueViewer {
  export interface InstallationOptions {
    name: string;
    debug: boolean;
    defaultOptions: Viewer.Options;
  }

  export function install(app: App, options?: InstallationOptions): void;

  export function setDefaults(defaultOptions: Viewer.Options): void;

  export {
    Viewer,
  }
}

export default VueViewer
