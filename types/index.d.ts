import Vue from "vue";
import ViewerJS from "viewerjs";

declare namespace Viewer {
  export interface InstallationOptions {
    name: string;
    debug: boolean;
    defaultOptions: ViewerJS.Options;
  }

  export function install(vue: typeof Vue, options?: InstallationOptions): void;

  export function setDefaults(defaultOptions: ViewerJS.Options): void;
}

export default Viewer;
