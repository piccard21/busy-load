(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("jQuery"));
	else if(typeof define === 'function' && define.amd)
		define(["jQuery"], factory);
	else if(typeof exports === 'object')
		exports["busyLoad"] = factory(require("jQuery"));
	else
		root["busyLoad"] = factory(root["jQuery"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_64__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(18);

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Component = exports.Component = function () {
    function Component(tag, options, busyLoadOptions) {
        _classCallCheck(this, Component);

        this._options = options;
        this._busyLoadOptions = busyLoadOptions;

        this.setTag(tag);
        // this.debugOptions();
    }

    /**
     * OPTIONS
     */

    _createClass(Component, [{
        key: "debugOptions",
        value: function debugOptions() {
            console.log(this._options);
        }
    }, {
        key: "extendOptions",
        value: function extendOptions(options) {
            $.extend(this._options, options);
        }

        /**
         * TAG
         */

    }, {
        key: "setTag",
        value: function setTag(tag) {
            if (tag instanceof jQuery) {
                this._$tag = tag;
            } else if (typeof tag === 'string' || tag instanceof String) {
                this._$tag = $("<" + tag + "/>", this._options);
            } else {
                throw "wrong type for creating a tag";
            }
        }
    }, {
        key: "options",
        get: function get() {
            return this._options;
        },
        set: function set(newOptions) {
            this._options = newOptions;
        }
    }, {
        key: "tag",
        get: function get() {
            return this._$tag;
        },
        set: function set($tag) {
            this._$tag = $tag;
        }
    }]);

    return Component;
}();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(10);

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(46);

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(52);

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),
/* 5 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(9),
    isObjectLike = __webpack_require__(25);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(8);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(21);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(7),
    getRawTag = __webpack_require__(23),
    objectToString = __webpack_require__(24);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(33),
    getValue = __webpack_require__(38);

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),
/* 11 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    spinner: "pump", // pump, accordion, pulsar, cube, cubes, circle-line, circles, cube-grid
    image: false,
    fontawesome: false, // "fa fa-refresh fa-spin fa-2x fa-fw"
    custom: false, // jQuery Object
    color: "#fff",
    background: "rgba(0, 0, 0, 0.21)",
    maxSize: "50px", // Integer/String only for spinners & images, not fontawesome & custom
    minSize: "20px", // Integer/String only for spinners & images, not fontawesome & custom
    text: false,
    textColor: false, // default is color
    textMargin: ".5rem",
    textPosition: "right", // left, right, top, bottom  
    fontSize: "1rem",
    fullScreen: false,
    animation: false, // fade, slide
    animationDuration: "fast", // String, Integer 
    containerClass: "busy-load-container",
    containerItemClass: "busy-load-container-item",
    spinnerClass: "busy-load-spinner",
    textClass: "busy-load-text"
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(14);

var _busyLoad = __webpack_require__(15);

var _defaults = __webpack_require__(12);

var _defaults2 = _interopRequireDefault(_defaults);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var jQuery = __webpack_require__(64);

(function ($) {
    $.fn.busyLoad = _busyLoad.busyLoad;
    $.busyLoadSetup = _busyLoad.busyLoadSetup;
    $.busyLoadFull = _busyLoad.busyLoadFull;
    $.fn.busyLoad.defaults = _defaults2.default;
})(jQuery);

/***/ }),
/* 14 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.busyLoadSetup = busyLoadSetup;
exports.busyLoad = busyLoad;
exports.busyLoadFull = busyLoadFull;

var _classBusyLoad = __webpack_require__(16);

var _defaults = __webpack_require__(12);

var _defaults2 = _interopRequireDefault(_defaults);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function busyLoadSetup(settings) {
    $.extend(true, _defaults2.default, settings);
}

function busyLoad(action, options) {

    return this.each(function () {
        var bl = new _classBusyLoad.BusyLoad($(this), JSON.parse(JSON.stringify(_defaults2.default)), options);

        switch (action) {
            case "show":
                bl.show();
                break;
            case "hide":
                bl.hide();
                break;
            default:
                throw 'don\'t know action \'' + action + '\'';
        }
    });
}

function busyLoadFull(action, options) {

    var $body = $('body');
    var bl = new _classBusyLoad.BusyLoad($body, JSON.parse(JSON.stringify(_defaults2.default)), options);

    switch (action.toLowerCase()) {
        case "show":
            $body.addClass("no-scroll");
            bl.caller = $body;
            bl.extendSettings({
                fullScreen: true
            });
            bl.show();

            break;

        case "hide":
            bl.hide();
            $body.removeClass("no-scroll");
            break;
    }

    return $body;
}

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BusyLoad = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classContainer = __webpack_require__(17);

var _classContainerItem = __webpack_require__(60);

var _classText = __webpack_require__(61);

var _classSpinner = __webpack_require__(62);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var get = __webpack_require__(0);

var BusyLoad = exports.BusyLoad = function () {
    function BusyLoad(caller, defaults, options) {
        _classCallCheck(this, BusyLoad);

        this._settings = defaults;
        this._caller = caller;

        this.extendSettings(options);
        // this.debugSettings();
    }

    _createClass(BusyLoad, [{
        key: 'debugSettings',
        value: function debugSettings() {
            console.log(this._settings.fullScreen);
        }
    }, {
        key: 'extendSettings',
        value: function extendSettings(options) {
            $.extend(this._settings, options);
        }
    }, {
        key: 'animateShow',
        value: function animateShow($tag) {
            var _this = this;

            var callback = function callback() {
                return $tag.trigger("bl.shown", [$tag, $(_this.caller)]);
            };

            this.caller.append($tag); // already hidden
            $tag.trigger("bl.show", [$tag, $(this.caller)]);

            if (get(this.settings, "animation", false)) {

                switch (get(this.settings, "animation").toLowerCase()) {
                    case "fade":
                        $tag = $tag.fadeIn(get(this.settings, "animationDuration", "fast"), callback);
                        break;
                    case "slide":
                        $tag = $tag.slideDown(get(this.settings, "animationDuration", "fast"), callback);
                        break;
                    default:
                        throw "don't know animation: " + get(this.settings, "animation");
                }
            } else {
                $tag.show(0, callback);
            }

            return $tag;
        }
    }, {
        key: 'animateHide',
        value: function animateHide($tag) {
            var _this2 = this;

            var callback = function callback() {
                $tag.trigger("bl.hidden", [$tag, $(_this2.caller)]);
                $tag.remove();
            };

            $tag.trigger("bl.hide", [$tag, $(this.caller)]);

            if (get(this.settings, "animation", false)) {
                switch (get(this.settings, "animation").toLowerCase()) {
                    case "fade":
                        $tag = $tag.fadeOut(get(this.settings, "animationDuration", "fast"), callback);
                        break;
                    case "slide":
                        $tag = $tag.slideUp(get(this.settings, "animationDuration", "fast"), callback);
                        break;
                    default:
                        throw "don't know animation: " + get(this.settings, "animation");
                }
            } else {
                $tag.hide(0, callback);
            }
        }
    }, {
        key: 'getOverlay',
        value: function getOverlay() {
            // already existent?
            if (this._caller.data("busy-load-container")) {
                return $("#" + this._caller.data("busy-load-container"));
            }
            // no ... create one
            else {
                    // container & elements
                    this._container = new _classContainer.Container(this._settings);
                    this._containerItem = new _classContainerItem.ContainerItem(this._settings);

                    // append text 
                    if (get(this.settings, "text", false)) {
                        this._loadingText = new _classText.Text(this._settings);
                        this._containerItem.tag.append(this._loadingText.tag);
                    }
                    // append spinner 
                    if (get(this.settings, "spinner", "pump") !== false) {
                        this._spinner = new _classSpinner.Spinner(this._settings);
                        this._containerItem.tag.append(this._spinner.tag);
                    }

                    // container
                    this._container.tag.append(this._containerItem.tag).hide();
                }

            return this._container.tag;
        }
    }, {
        key: 'createRandomString',
        value: function createRandomString() {
            return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        }
    }, {
        key: 'toggle',
        value: function toggle($tag, action) {
            // show
            if (action == 'show') {
                var randomString = this.createRandomString();

                // position static?
                if (this.caller.css('position') === 'static') {
                    this.caller.css('position', 'relative');
                }

                this._caller.addClass('busy-load-active');
                $tag.attr('id', randomString);
                $tag = this.animateShow($tag);

                this._caller.data("busy-load-container", randomString);
            }
            // hide
            else {
                    this.animateHide($tag);
                    this._caller.removeData("busy-load-container");
                    this._caller.removeClass('busy-load-active');
                }
        }
    }, {
        key: 'show',
        value: function show() {
            this.toggle(this.getOverlay(), "show");
        }
    }, {
        key: 'hide',
        value: function hide() {
            var containerId = this._caller.data('busy-load-container');
            this.toggle($("#" + containerId), "hide");
        }
    }, {
        key: 'settings',
        get: function get() {
            return this._settings;
        },
        set: function set(newOptions) {
            this._settings = newOptions;
        }
    }, {
        key: 'caller',
        get: function get() {
            return this._caller;
        },
        set: function set(newOptions) {
            this._caller = newOptions;
        }
    }]);

    return BusyLoad;
}();

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Container = undefined;

var _classComponent = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var get = __webpack_require__(0);

var Container = exports.Container = function (_Component) {
    _inherits(Container, _Component);

    function Container(busyLoadOptions) {
        _classCallCheck(this, Container);

        return _possibleConstructorReturn(this, (Container.__proto__ || Object.getPrototypeOf(Container)).call(this, 'div', {
            "class": get(busyLoadOptions, "containerClass"),
            "css": {
                "position": get(busyLoadOptions, "fullScreen", false) ? "fixed" : "absolute",
                "top": 0,
                "left": 0,
                "background": get(busyLoadOptions, "background", "#fff"),
                "color": get(busyLoadOptions, "color", "#0000001a"),
                "display": "flex",
                "align-items": "center",
                "justify-content": "center",
                "width": "100%",
                "height": "100%",
                "z-index": 9999
            }
        }, busyLoadOptions));
    }

    return Container;
}(_classComponent.Component);

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(19),
    toKey = __webpack_require__(59);

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(5),
    isKey = __webpack_require__(20),
    stringToPath = __webpack_require__(26),
    toString = __webpack_require__(56);

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(5),
    isSymbol = __webpack_require__(6);

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(22)))

/***/ }),
/* 22 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(7);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),
/* 24 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),
/* 25 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var memoizeCapped = __webpack_require__(27);

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var memoize = __webpack_require__(28);

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(29);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(30),
    mapCacheDelete = __webpack_require__(51),
    mapCacheGet = __webpack_require__(53),
    mapCacheHas = __webpack_require__(54),
    mapCacheSet = __webpack_require__(55);

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(31),
    ListCache = __webpack_require__(43),
    Map = __webpack_require__(50);

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(32),
    hashDelete = __webpack_require__(39),
    hashGet = __webpack_require__(40),
    hashHas = __webpack_require__(41),
    hashSet = __webpack_require__(42);

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(2);

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(34),
    isMasked = __webpack_require__(35),
    isObject = __webpack_require__(11),
    toSource = __webpack_require__(37);

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(9),
    isObject = __webpack_require__(11);

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(36);

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(8);

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),
/* 37 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),
/* 38 */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),
/* 39 */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(2);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(2);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(2);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(44),
    listCacheDelete = __webpack_require__(45),
    listCacheGet = __webpack_require__(47),
    listCacheHas = __webpack_require__(48),
    listCacheSet = __webpack_require__(49);

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),
/* 44 */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(3);

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),
/* 46 */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(3);

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(3);

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(3);

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(10),
    root = __webpack_require__(8);

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(4);

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),
/* 52 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(4);

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(4);

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(4);

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(57);

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(7),
    arrayMap = __webpack_require__(58),
    isArray = __webpack_require__(5),
    isSymbol = __webpack_require__(6);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),
/* 58 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(6);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ContainerItem = undefined;

var _classComponent = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var get = __webpack_require__(0);

var ContainerItem = exports.ContainerItem = function (_Component) {
    _inherits(ContainerItem, _Component);

    function ContainerItem(busyLoadOptions) {
        _classCallCheck(this, ContainerItem);

        var flexDirection = get(busyLoadOptions, "textPosition", "right");

        switch (flexDirection) {
            case "top":
                flexDirection = "column";
                break;
            case "bottom":
                flexDirection = "column-reverse";
                break;
            case "right":
                flexDirection = "row-reverse";
                break;
            case "left":
                flexDirection = "row";
                break;
            default:
                throw "don't know textPosition: " + flexDirection;
        }

        return _possibleConstructorReturn(this, (ContainerItem.__proto__ || Object.getPrototypeOf(ContainerItem)).call(this, 'div', {
            "class": get(busyLoadOptions, "containerItemClass"),
            "css": {
                "background": "none",
                "display": "flex",
                "justify-content": "center",
                "align-items": "center",
                "flex-direction": flexDirection
            }
        }, busyLoadOptions));
    }

    return ContainerItem;
}(_classComponent.Component);

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Text = undefined;

var _classComponent = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var get = __webpack_require__(0);

var Text = exports.Text = function (_Component) {
    _inherits(Text, _Component);

    function Text(busyLoadOptions) {
        _classCallCheck(this, Text);

        // set margin
        var _this = _possibleConstructorReturn(this, (Text.__proto__ || Object.getPrototypeOf(Text)).call(this, 'span', {
            "class": get(busyLoadOptions, "textClass"),
            "css": {
                "color": get(busyLoadOptions, 'textColor', get(busyLoadOptions, 'color', "#fff")),
                "font-size": get(busyLoadOptions, 'fontSize', "1rem")
            },
            "text": get(busyLoadOptions, "text", "Loading ...")
        }, busyLoadOptions));

        var flexDirection = get(busyLoadOptions, "textPosition", "right");
        var marginDirection = "margin-left";

        switch (flexDirection) {
            case "top":
                marginDirection = "margin-bottom";
                break;
            case "bottom":
                marginDirection = "margin-top";
                break;
            case "left":
                marginDirection = "margin-right";
                break;
        }

        _this.tag.css(marginDirection, get(busyLoadOptions, 'textMargin', ".5rem"));
        return _this;
    }

    return Text;
}(_classComponent.Component);

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Spinner = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classComponent = __webpack_require__(1);

var _classSpinnerLib = __webpack_require__(63);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var get = __webpack_require__(0);

var Spinner = exports.Spinner = function (_Component) {
    _inherits(Spinner, _Component);

    function Spinner(busyLoadOptions) {
        _classCallCheck(this, Spinner);

        var _this = _possibleConstructorReturn(this, (Spinner.__proto__ || Object.getPrototypeOf(Spinner)).call(this, "span", {}, busyLoadOptions));

        if (get(_this._busyLoadOptions, 'fontawesome')) {
            _this.createFontAwesomeTag();
        } else if (get(_this._busyLoadOptions, 'custom')) {
            _this.createCustomTag();
        } else if (get(_this._busyLoadOptions, 'image')) {
            _this.createImageTag();
        } else if (get(_this._busyLoadOptions, 'spinner')) {
            _this.createCssTag(get(_this._busyLoadOptions, 'spinner'));
        } else {
            _this.createCssTag("pump");
        }

        _this.tag.addClass(get(_this._busyLoadOptions, "spinnerClass"));
        return _this;
    }

    _createClass(Spinner, [{
        key: 'createCssTag',
        value: function createCssTag(spinnerType) {
            var spinnerLib = new _classSpinnerLib.SpinnerLib(spinnerType, this._busyLoadOptions);
            this.setTag(spinnerLib.spinner);
            this.tag.addClass("busy-load-spinner-css");
            this.setMaxMinSize();
        }
    }, {
        key: 'createImageTag',
        value: function createImageTag() {
            this.options = {
                "class": "loader-image",
                "src": this._busyLoadOptions.image
            };

            this.setTag('img');
            this.setMaxMinSize();
            this.tag.addClass("busy-load-spinner-image");
        }
    }, {
        key: 'createFontAwesomeTag',
        value: function createFontAwesomeTag() {
            this.options = {
                "class": get(this._busyLoadOptions, 'fontawesome', "fa fa-refresh fa-spin fa-2x fa-fw"),
                "css": {
                    "color": get(this._busyLoadOptions, 'color', "#fff")
                }
            };

            this.setTag('span');
            this.tag.addClass("busy-load-spinner-fontawesome");

            this._$tag.append($("<span/>", {
                "class": "sr-only",
                "text": "Loading ..."
            }));
        }
    }, {
        key: 'createCustomTag',
        value: function createCustomTag() {
            var custom = get(this._busyLoadOptions, 'custom');
            var isJqueryObject = custom instanceof jQuery;

            if (!isJqueryObject) {
                throw "wrong type for creating a tag";
            }

            this.setTag(custom);
            this.tag.addClass("busy-load-spinner-custom");
        }
    }, {
        key: 'setMaxMinSize',
        value: function setMaxMinSize() {
            this.tag.css({
                "max-height": get(this._busyLoadOptions, 'maxSize'),
                "max-width": get(this._busyLoadOptions, 'maxSize'),
                "min-height": get(this._busyLoadOptions, 'minSize'),
                "min-width": get(this._busyLoadOptions, 'minSize')
            });
        }

        // https://projects.lukehaas.me/css-loaders/

    }]);

    return Spinner;
}(_classComponent.Component);

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var get = __webpack_require__(0);

var SpinnerLib = exports.SpinnerLib = function () {
    function SpinnerLib(spinner) {
        var busyLoadOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _classCallCheck(this, SpinnerLib);

        this._busyLoadOptions = busyLoadOptions;

        switch (spinner.toLowerCase()) {
            case "pump":
                this.createPump();
                break;
            case "pulsar":
                this.createPulsar();
                break;
            case "accordion":
                this.createAccordion();
                break;
            case "cube":
                this.createCube();
                break;
            case "cubes":
                this.createCubes();
                break;
            case "circles":
                this.createCircles();
                break;
            case "circle-line":
                this.createCircleLine();
                break;
            case "cube-grid":
                this.createCubeGrid();
                break;
            default:
                throw "don't know spinner: " + spinner;
        }
    }

    _createClass(SpinnerLib, [{
        key: "createCubeGrid",
        value: function createCubeGrid() {
            this._spinner = $("<div class=\"spinner-cube-grid\"> \n              <div class=\"sk-cube sk-cube1\"></div>\n              <div class=\"sk-cube sk-cube2\"></div>\n              <div class=\"sk-cube sk-cube3\"></div>\n              <div class=\"sk-cube sk-cube4\"></div>\n              <div class=\"sk-cube sk-cube5\"></div>\n              <div class=\"sk-cube sk-cube6\"></div>\n              <div class=\"sk-cube sk-cube7\"></div>\n              <div class=\"sk-cube sk-cube8\"></div>\n              <div class=\"sk-cube sk-cube9\"></div>\n        </div>");
            this._spinner.find(".sk-cube").css({
                "background-color": get(this._busyLoadOptions, "color", "#333")
            });
        }
    }, {
        key: "createCircleLine",
        value: function createCircleLine() {
            this._spinner = $("<div class=\"spinner-circle-line\">\n              <div class=\"bounce1\"></div>\n              <div class=\"bounce2\"></div>\n              <div class=\"bounce3\"></div>\n        </div>");
            this._spinner.find(".bounce1, .bounce2, .bounce3").css({
                "background-color": get(this._busyLoadOptions, "color", "#333")
            });
        }
    }, {
        key: "createCircles",
        value: function createCircles() {
            this._spinner = $("<div class=\"spinner-circles\">\n              <div class=\"dot1\"></div>\n              <div class=\"dot2\"></div>\n        </div>");
            this._spinner.css({
                "margin-right": "0.4rem"
            }).find(".dot1, .dot2").css({
                "background-color": get(this._busyLoadOptions, "color", "#333")
            });
        }
    }, {
        key: "createPump",
        value: function createPump() {
            this._spinner = $("<div class=\"spinner-pump\">\n            <div class=\"double-bounce1\"></div>\n            <div class=\"double-bounce2\"></div>\n        </div>");

            this._spinner.find(".double-bounce1, .double-bounce2").css({
                "background-color": get(this._busyLoadOptions, "color", "#333"),
                "margin-right": "0.9rem"
            });
        }
    }, {
        key: "createPulsar",
        value: function createPulsar() {
            this._spinner = $("<div class=\"spinner-pulsar\"></div>");
            this._spinner.css({
                "background-color": get(this._busyLoadOptions, "color", "#333")
            });
        }
    }, {
        key: "createAccordion",
        value: function createAccordion() {
            this._spinner = $("<div class=\"spinner-accordion\">\n    \t\t  <div class=\"rect1\"></div>\n    \t\t  <div class=\"rect2\"></div>\n    \t\t  <div class=\"rect3\"></div>\n    \t\t  <div class=\"rect4\"></div>\n    \t\t  <div class=\"rect5\"></div>\n    \t\t</div>");
            this._spinner.find("div").css({
                "background-color": get(this._busyLoadOptions, "color", "#333")
            });
        }
    }, {
        key: "createCube",
        value: function createCube() {
            this._spinner = $("<div class=\"spinner-cube\"></div>");
            this._spinner.css({
                "background-color": get(this._busyLoadOptions, "color", "#333")
            });
        }
    }, {
        key: "createCubes",
        value: function createCubes() {
            this._spinner = $("<div class=\"spinner-cubes\">  \n            <div class=\"cube1\"></div>\n            <div class=\"cube2\"></div>\n        </div>");

            this._spinner.css({
                "margin-right": "0.9rem"
            }).find(".cube1, .cube2").css({
                "background-color": get(this._busyLoadOptions, "color", "#333")
            });
        }
    }, {
        key: "spinner",
        get: function get() {
            return this._spinner;
        },
        set: function set(spinner) {
            this._spinner = spinner;
        }
    }]);

    return SpinnerLib;
}();

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_64__;

/***/ })
/******/ ]);
});