(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("viewerjs"));
	else if(typeof define === 'function' && define.amd)
		define(["viewerjs"], factory);
	else if(typeof exports === 'object')
		exports["VueViewer"] = factory(require("viewerjs"));
	else
		root["VueViewer"] = factory(root["Viewer"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_viewerjs__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_viewerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_viewerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_throttle_debounce__ = __webpack_require__(5);



var install = function install(Vue, _ref) {
  var _ref$name = _ref.name,
      name = _ref$name === undefined ? 'viewer' : _ref$name,
      _ref$debug = _ref.debug,
      debug = _ref$debug === undefined ? false : _ref$debug;

  function createViewer(el, binding) {
    Vue.nextTick(function () {
      destroyViewer(el);
      var options = binding.value;
      el['$' + name] = new __WEBPACK_IMPORTED_MODULE_0_viewerjs___default.a(el, options);
      log('viewer created');
    });
  }

  function createObserver(el, binding, debouncedCreateViewer) {
    destroyObserver(el);
    var MutationObserver = global.MutationObserver || global.WebKitMutationObserver || global.MozMutationObserver;
    var observer = new MutationObserver(function (mutations) {
      mutations.forEach(function (mutation) {
        log('viewer mutation:' + mutation.type);
        debouncedCreateViewer(el, binding);
      });
    });
    var config = { attributes: true, childList: true, characterData: true, subtree: true };
    observer.observe(el, config);
    el['$viewerMutationObserver'] = observer;
    log('observer created');
  }

  function destroyViewer(el) {
    if (!el['$' + name]) {
      return;
    }
    el['$' + name].destroy();
    delete el['$' + name];
    log('viewer destroyed');
  }

  function destroyObserver(el) {
    if (!el['$viewerMutationObserver']) {
      return;
    }
    el['$viewerMutationObserver'].disconnect();
    delete el['$viewerMutationObserver'];
    log('observer destroyed');
  }

  function log(content) {
    debug && console.log(content);
  }

  Vue.directive('viewer', {
    bind: function bind(el, binding) {
      log('viewer bind');
      var debouncedCreateViewer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_throttle_debounce__["a" /* debounce */])(50, createViewer);
      debouncedCreateViewer(el, binding);

      if (!binding.modifiers.static) {
        createObserver(el, binding, debouncedCreateViewer);
      }
    },
    unbind: function unbind(el, binding) {
      log('viewer unbind');

      destroyObserver(el);

      destroyViewer(el);
    }
  });
};

/* harmony default export */ __webpack_exports__["a"] = ({
  install: install
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(7)))

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = extend;

function extend() {
  var extended = {};
  var deep = false;
  var i = 0;
  var length = arguments.length;

  if (Object.prototype.toString.call(arguments[0]) === '[object Boolean]') {
    deep = arguments[0];
    i++;
  }

  function merge(obj) {
    for (var prop in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, prop)) {
        if (deep && Object.prototype.toString.call(obj[prop]) === '[object Object]') {
          extended[prop] = extend(true, extended[prop], obj[prop]);
        } else {
          extended[prop] = obj[prop];
        }
      }
    }
  }

  for (; i < length; i++) {
    var obj = arguments[i];
    merge(obj);
  }

  return extended;
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(8)(
  /* script */
  __webpack_require__(6),
  /* template */
  __webpack_require__(9),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\Workspaces\\Web\\Git\\v-viewer\\src\\component.vue"
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__component_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__component_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__component_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__directive__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_viewerjs__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_viewerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_viewerjs__);





/* harmony default export */ __webpack_exports__["default"] = ({
  install: function install(Vue) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref$name = _ref.name,
        name = _ref$name === undefined ? 'viewer' : _ref$name,
        _ref$debug = _ref.debug,
        debug = _ref$debug === undefined ? false : _ref$debug,
        defaultOptions = _ref.defaultOptions;

    __WEBPACK_IMPORTED_MODULE_3_viewerjs___default.a.setDefaults(defaultOptions);

    Vue.component(name, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* extend */])(__WEBPACK_IMPORTED_MODULE_1__component_vue___default.a, { name: name }));
    Vue.use(__WEBPACK_IMPORTED_MODULE_2__directive__["a" /* default */], { name: name, debug: debug });
  },
  setDefaults: function setDefaults(defaultOptions) {
    __WEBPACK_IMPORTED_MODULE_3_viewerjs___default.a.setDefaults(defaultOptions);
  }
});

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export throttle */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return debounce; });

function throttle(delay, noTrailing, callback, debounceMode) {
	var timeoutID;

	var lastExec = 0;

	if (typeof noTrailing !== 'boolean') {
		debounceMode = callback;
		callback = noTrailing;
		noTrailing = undefined;
	}

	function wrapper() {

		var self = this;
		var elapsed = Number(new Date()) - lastExec;
		var args = arguments;

		function exec() {
			lastExec = Number(new Date());
			callback.apply(self, args);
		}

		function clear() {
			timeoutID = undefined;
		}

		if (debounceMode && !timeoutID) {
			exec();
		}

		if (timeoutID) {
			clearTimeout(timeoutID);
		}

		if (debounceMode === undefined && elapsed > delay) {
			exec();
		} else if (noTrailing !== true) {
			timeoutID = setTimeout(debounceMode ? clear : exec, debounceMode === undefined ? delay - elapsed : delay);
		}
	}

	return wrapper;
}

function debounce(delay, atBegin, callback) {
	return callback === undefined ? throttle(delay, atBegin, false) : throttle(delay, callback, atBegin !== false);
}



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_viewerjs__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_viewerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_viewerjs__);




/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    images: {
      type: Array
    },
    trigger: {},
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
      this.$viewer && this.$viewer.destroy();
      this.$viewer = new __WEBPACK_IMPORTED_MODULE_0_viewerjs___default.a(this.$el, this.options);
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

    trigger: {
      handler: function handler() {
        var _this2 = this;

        this.$nextTick(function () {
          _this2.createViewer();
        });
      },
      deep: true
    },
    options: {
      handler: function handler() {
        var _this3 = this;

        this.$nextTick(function () {
          _this3.createViewer();
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
/* 7 */
/***/ (function(module, exports) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var g;

g = function () {
	return this;
}();

try {
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
}

module.exports = g;

/***/ }),
/* 8 */
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
/* 9 */
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