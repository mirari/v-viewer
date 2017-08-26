(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("viewerjs"), require("viewerjs/dist/viewer.css"));
	else if(typeof define === 'function' && define.amd)
		define(["viewerjs", "viewerjs/dist/viewer.css"], factory);
	else if(typeof exports === 'object')
		exports["VueViewer"] = factory(require("viewerjs"), require("viewerjs/dist/viewer.css"));
	else
		root["VueViewer"] = factory(root["viewerjs"], root["viewerjs/dist/viewer.css"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_viewerjs__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_viewerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_viewerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_viewerjs_dist_viewer_css__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_viewerjs_dist_viewer_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_viewerjs_dist_viewer_css__);



var defaults = {
  zIndex: 100000000
};

var install = function install(Vue) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var name = opts.name || 'viewer';

  function createViewer(el, binding) {
    var options = Object.assign({}, defaults, binding.value);
    el['$' + name] && el['$' + name].destroy();
    el['$' + name] = new __WEBPACK_IMPORTED_MODULE_0_viewerjs___default.a(el, options);
  }

  Vue.directive('viewer', {
    bind: function bind(el, binding) {
      console.log('viewer bind');
    },

    inserted: function inserted(el, binding) {
      console.log('viewer inserted');
      createViewer(el, binding);
    },
    componentUpdated: function componentUpdated(el, binding) {
      console.log('viewer componentUpdated');
      createViewer(el, binding);
    },
    unbind: function unbind(el, binding) {
      console.log('viewer unbind');
      el['$' + name] && el['$' + name].destroy();
    }
  });
};

/* harmony default export */ __webpack_exports__["a"] = ({
  install: install
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(5),
  /* template */
  __webpack_require__(7),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\Workspaces\\Git\\v-viewer\\src\\component.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] component.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3091014c", Component.options)
  } else {
    hotAPI.reload("data-v-3091014c", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__component_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__component_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__component_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__directive__ = __webpack_require__(2);



/* harmony default export */ __webpack_exports__["default"] = ({
  install: function install(Vue) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var name = opts.name || 'viewer';
    Vue.component(name, Object.assign(__WEBPACK_IMPORTED_MODULE_0__component_vue___default.a, { name: name }));
    Vue.use(__WEBPACK_IMPORTED_MODULE_1__directive__["a" /* default */], { name: name });
  }
});

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_viewerjs__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_viewerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_viewerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_viewerjs_dist_viewer_css__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_viewerjs_dist_viewer_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_viewerjs_dist_viewer_css__);




var defaults = {
  zIndex: 100000000
};
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    images: {
      type: Array,
      required: true
    },
    options: {
      type: Object
    }
  },

  data: function data() {
    return {};
  },


  computed: {},

  methods: {
    createViewer: function createViewer() {
      var options = Object.assign({}, defaults, this.options);
      this.$viewer && this.$viewer.destroy();
      this.$viewer = new __WEBPACK_IMPORTED_MODULE_0_viewerjs___default.a(this.$el, options);
      this.$emit('inited', this.$viewer);
    }
  },

  watch: {
    images: function images() {
      var _this = this;

      this.$nextTick(function () {
        _this.createViewer();
      });
    },

    options: {
      handler: function handler() {
        var _this2 = this;

        this.$nextTick(function () {
          _this2.createViewer();
        });
      },
      deep: true
    }
  },

  mounted: function mounted() {
    this.createViewer();
  },
  destroyed: function destroyed() {
    this.$viewer && this.$viewer.destroy();
  }
});

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = Object.create(options.computed || null)
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
    options.computed = computed
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_vm._t("default", null, {
    images: _vm.images,
    options: _vm.options
  })], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3091014c", module.exports)
  }
}

/***/ })
/******/ ]);
});