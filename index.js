(function(e, a) { for(var i in a) e[i] = a[i]; }(this, /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/*! exports provided: GigGizmoPropTypes, API, Band, Conversation, ErrorReport, FacebookAccount, Gig, GooglePlace, Location, Notification, Page, Post, Request, RESTModel, TwitterAccount, Upload, User, Venue, ModelNameToModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _src_PropTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/PropTypes */ "./src/PropTypes/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GigGizmoPropTypes", function() { return _src_PropTypes__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _src_API__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/API */ "./src/API.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "API", function() { return _src_API__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _src_Band__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/Band */ "./src/Band.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Band", function() { return _src_Band__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _src_Conversation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/Conversation */ "./src/Conversation.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Conversation", function() { return _src_Conversation__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _src_ErrorReport__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/ErrorReport */ "./src/ErrorReport.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorReport", function() { return _src_ErrorReport__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _src_FacebookAccount__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/FacebookAccount */ "./src/FacebookAccount.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FacebookAccount", function() { return _src_FacebookAccount__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _src_Gig__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/Gig */ "./src/Gig.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Gig", function() { return _src_Gig__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _src_GooglePlace__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/GooglePlace */ "./src/GooglePlace.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GooglePlace", function() { return _src_GooglePlace__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _src_Location__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./src/Location */ "./src/Location.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Location", function() { return _src_Location__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _src_Notification__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./src/Notification */ "./src/Notification.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Notification", function() { return _src_Notification__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _src_Page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./src/Page */ "./src/Page.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Page", function() { return _src_Page__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _src_Post__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./src/Post */ "./src/Post.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Post", function() { return _src_Post__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _src_Request__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./src/Request */ "./src/Request.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Request", function() { return _src_Request__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _src_RESTModel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./src/RESTModel */ "./src/RESTModel.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RESTModel", function() { return _src_RESTModel__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _src_TwitterAccount__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./src/TwitterAccount */ "./src/TwitterAccount.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TwitterAccount", function() { return _src_TwitterAccount__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _src_Upload__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./src/Upload */ "./src/Upload.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Upload", function() { return _src_Upload__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _src_User__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./src/User */ "./src/User.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "User", function() { return _src_User__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _src_Venue__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./src/Venue */ "./src/Venue.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Venue", function() { return _src_Venue__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony import */ var _src_ModelNameToModel__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./src/ModelNameToModel */ "./src/ModelNameToModel.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModelNameToModel", function() { return _src_ModelNameToModel__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/**
 * Created by corynull on 7/15/17.
 */
// Extras


// Models

















if (typeof window !== "undefined") {
    window.GigGizmoAPI = module.exports;
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/cookie/index.js":
/*!**************************************!*\
  !*** ./node_modules/cookie/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module exports.
 * @public
 */

exports.parse = parse;
exports.serialize = serialize;

/**
 * Module variables.
 * @private
 */

var decode = decodeURIComponent;
var encode = encodeURIComponent;
var pairSplitRegExp = /; */;

/**
 * RegExp to match field-content in RFC 7230 sec 3.2
 *
 * field-content = field-vchar [ 1*( SP / HTAB ) field-vchar ]
 * field-vchar   = VCHAR / obs-text
 * obs-text      = %x80-FF
 */

var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;

/**
 * Parse a cookie header.
 *
 * Parse the given cookie header string into an object
 * The object has the various cookies as keys(names) => values
 *
 * @param {string} str
 * @param {object} [options]
 * @return {object}
 * @public
 */

function parse(str, options) {
  if (typeof str !== 'string') {
    throw new TypeError('argument str must be a string');
  }

  var obj = {}
  var opt = options || {};
  var pairs = str.split(pairSplitRegExp);
  var dec = opt.decode || decode;

  for (var i = 0; i < pairs.length; i++) {
    var pair = pairs[i];
    var eq_idx = pair.indexOf('=');

    // skip things that don't look like key=value
    if (eq_idx < 0) {
      continue;
    }

    var key = pair.substr(0, eq_idx).trim()
    var val = pair.substr(++eq_idx, pair.length).trim();

    // quoted values
    if ('"' == val[0]) {
      val = val.slice(1, -1);
    }

    // only assign once
    if (undefined == obj[key]) {
      obj[key] = tryDecode(val, dec);
    }
  }

  return obj;
}

/**
 * Serialize data into a cookie header.
 *
 * Serialize the a name value pair into a cookie string suitable for
 * http headers. An optional options object specified cookie parameters.
 *
 * serialize('foo', 'bar', { httpOnly: true })
 *   => "foo=bar; httpOnly"
 *
 * @param {string} name
 * @param {string} val
 * @param {object} [options]
 * @return {string}
 * @public
 */

function serialize(name, val, options) {
  var opt = options || {};
  var enc = opt.encode || encode;

  if (typeof enc !== 'function') {
    throw new TypeError('option encode is invalid');
  }

  if (!fieldContentRegExp.test(name)) {
    throw new TypeError('argument name is invalid');
  }

  var value = enc(val);

  if (value && !fieldContentRegExp.test(value)) {
    throw new TypeError('argument val is invalid');
  }

  var str = name + '=' + value;

  if (null != opt.maxAge) {
    var maxAge = opt.maxAge - 0;
    if (isNaN(maxAge)) throw new Error('maxAge should be a Number');
    str += '; Max-Age=' + Math.floor(maxAge);
  }

  if (opt.domain) {
    if (!fieldContentRegExp.test(opt.domain)) {
      throw new TypeError('option domain is invalid');
    }

    str += '; Domain=' + opt.domain;
  }

  if (opt.path) {
    if (!fieldContentRegExp.test(opt.path)) {
      throw new TypeError('option path is invalid');
    }

    str += '; Path=' + opt.path;
  }

  if (opt.expires) {
    if (typeof opt.expires.toUTCString !== 'function') {
      throw new TypeError('option expires is invalid');
    }

    str += '; Expires=' + opt.expires.toUTCString();
  }

  if (opt.httpOnly) {
    str += '; HttpOnly';
  }

  if (opt.secure) {
    str += '; Secure';
  }

  if (opt.sameSite) {
    var sameSite = typeof opt.sameSite === 'string'
      ? opt.sameSite.toLowerCase() : opt.sameSite;

    switch (sameSite) {
      case true:
        str += '; SameSite=Strict';
        break;
      case 'lax':
        str += '; SameSite=Lax';
        break;
      case 'strict':
        str += '; SameSite=Strict';
        break;
      default:
        throw new TypeError('option sameSite is invalid');
    }
  }

  return str;
}

/**
 * Try decoding a string using a decoding function.
 *
 * @param {string} str
 * @param {function} decode
 * @private
 */

function tryDecode(str, decode) {
  try {
    return decode(str);
  } catch (e) {
    return str;
  }
}


/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        if (getPropType(value) === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/API.ts":
/*!********************!*\
  !*** ./src/API.ts ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return API; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cookie */ "./node_modules/cookie/index.js");
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "socket.io-client");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/**
 * Created by corynull on 6/19/17.
 */



class API {
    constructor() {
        throw new Error("Cannot instantiate.");
    }
    static get expires() {
        if (!API._expires && API.LocalStorageSupported) {
            const expires = localStorage.getItem("expires") || null;
            API._expires = new Date(expires);
        }
        return API._expires;
    }
    static set expires(value) {
        let dateExpires = null;
        if (typeof value === "string" || typeof value === "number") {
            dateExpires = new Date(value);
        }
        else if (value instanceof Date) {
            dateExpires = value;
        }
        if (dateExpires === null) {
            throw new Error(`value for date expires is invalid, expected string, number, or date. Got: ${value}`);
        }
        else {
            API._expires = dateExpires;
            if (API.LocalStorageSupported) {
                localStorage.setItem("expires", API._expires.toISOString());
            }
        }
    }
    static get token() {
        const dateNow = new Date();
        if (API.expires && dateNow > API.expires) {
            API._token = null;
            if (API.LocalStorageSupported) {
                localStorage.removeItem("token");
            }
            return null;
        }
        if (!API._token && API.LocalStorageSupported) {
            // We store it in local storage.
            API._token = JSON.parse(localStorage.getItem("token") || "");
        }
        if (!API._token && typeof document !== "undefined" && document.cookie) {
            // We store it in the cookie.
            API._token = Object(cookie__WEBPACK_IMPORTED_MODULE_1__["parse"])(document.cookie)["gig-gizmo-token"];
        }
        if (API._token && API.LocalStorageSupported) {
            // We store it in local storage if found.
            localStorage.setItem("token", JSON.stringify(API._token));
        }
        return API._token;
    }
    static set token(value) {
        if (typeof value === "string" && value.length !== 124 && value !== null) {
            throw new Error(`Token is not valid: ${value}`);
        }
        else {
            if (typeof value === "string" && value.length !== 0) {
                if (API.LocalStorageSupported) {
                    localStorage.setItem("token", JSON.stringify(value));
                }
                API._token = value;
            }
            else {
                if (API.LocalStorageSupported) {
                    localStorage.removeItem("token");
                }
                API._token = null;
            }
            if (typeof document !== "undefined") {
                document.cookie = Object(cookie__WEBPACK_IMPORTED_MODULE_1__["serialize"])("gig-gizmo-token", API._token || "", {
                    path: "/",
                    sameSite: "strict"
                });
            }
        }
    }
    static get rootURL() {
        let url = "";
        if (API.secure) {
            url += "https://";
        }
        else {
            url += "http://";
        }
        url += `${API.hostname}`;
        if (API.port !== 80 && !API.secure) {
            url += `:${API.port}`;
        }
        else if (API.securePort !== 443 && API.secure) {
            url += `:${API.securePort}`;
        }
        return url;
    }
    static get webSocketRootURL() {
        let url = "";
        if (API.secure) {
            url += "wss://";
        }
        else {
            url += "ws://";
        }
        url += `${API.hostname}`;
        if (API.port !== 80 && !API.secure) {
            url += `:${API.port}`;
        }
        else if (API.securePort !== 443 && API.secure) {
            url += `:${API.securePort}`;
        }
        return url;
    }
    static call(method, route, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const headers = {
                "x-gig-gizmo-token": API.token ? API._token : null
            };
            const fetchRequest = {
                data: null,
                headers,
                method: method.toLowerCase(),
                params: null,
                responseType: "json",
                url: `${API.rootURL}${route}`,
                xsrfCookieName: "gig-gizmo-token",
                xsrfHeaderName: "x-gig-gizmo-token",
            };
            if (data) {
                if (method === "HEAD" || method === "GET") {
                    fetchRequest.params = data;
                }
                else {
                    fetchRequest.data = data;
                }
            }
            const response = yield API.axios(fetchRequest);
            if (response.data) {
                return response.data;
            }
            else if (response.statusText) {
                return response.statusText;
            }
            else if (response.status) {
                return null;
            }
        });
    }
    static getSocket() {
        return __awaiter(this, void 0, void 0, function* () {
            const killSocket = (error) => {
                if (error) {
                    console.error(error);
                }
                if (API.webSocket) {
                    API.webSocket.open();
                }
            };
            const onReady = () => {
                if (!API.webSocket) {
                    API.webSocket = API.WebSocket.default();
                    API.webSocket.on("connect_timeout", killSocket);
                    API.webSocket.on("connect_error", killSocket);
                    API.webSocket.on("disconnect", killSocket);
                    API.webSocket.on("error", killSocket);
                    API.webSocket.open();
                }
                return API.webSocket;
            };
            if (API.WebSocket) {
                if (typeof document !== "undefined") {
                    switch (document.readyState) {
                        case "loading":
                            yield new Promise((resolve) => {
                                document.addEventListener("DOMContentLoaded", resolve);
                            });
                            return onReady();
                        case "interactive":
                        case "complete":
                            return onReady();
                        default:
                            throw new Error(`Unexpected readyState: ${document.readyState}`);
                    }
                }
                else {
                    return onReady();
                }
            }
            return null;
        });
    }
}
API.WebSocket = socket_io_client__WEBPACK_IMPORTED_MODULE_2__;
API.axios = axios__WEBPACK_IMPORTED_MODULE_0___default.a;
API.SessionStorageSupported = typeof Storage !== "undefined";
API.LocalStorageSupported = typeof window !== "undefined" && typeof window.localStorage !== "undefined";
API.ShouldUseSocketIO = true;
API.dev = false;
API.secure = !API.dev;
API.port = 80;
API.securePort = 443;
API.hostname = "giggizmo.com";
API._token = null;
API._expires = null;
API.useSocketIO = false;
API.webSocket = null;
if (typeof API.axios !== "undefined") {
    API.axios.defaults.withCredentials = true;
}


/***/ }),

/***/ "./src/Band.ts":
/*!*********************!*\
  !*** ./src/Band.ts ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Band; });
/* harmony import */ var _FacebookAccount__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FacebookAccount */ "./src/FacebookAccount.ts");
/* harmony import */ var _Gig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Gig */ "./src/Gig.ts");
/* harmony import */ var _RESTModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RESTModel */ "./src/RESTModel.ts");
/* harmony import */ var _TwitterAccount__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TwitterAccount */ "./src/TwitterAccount.ts");
/* harmony import */ var _Upload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Upload */ "./src/Upload.ts");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./User */ "./src/User.ts");
/**
 * Created by corynull on 4/3/17.
 */






class Band extends _RESTModel__WEBPACK_IMPORTED_MODULE_2__["default"] {
    get name() {
        return this.getField("name");
    }
    set name(value) {
        this.setField("name", value);
    }
    get website() {
        return this.getField("website");
    }
    set website(value) {
        this.setField("website", value);
    }
    get email() {
        return this.getField("email");
    }
    set email(value) {
        this.setField("email", value);
    }
    get cityName() {
        return this.getField("cityName");
    }
    set cityName(value) {
        this.setField("cityName", value);
    }
    get cityPlaceID() {
        return this.getField("cityPlaceID");
    }
    set cityPlaceID(value) {
        this.setField("cityPlaceID", value);
    }
    get description() {
        return this.getField("description");
    }
    set description(value) {
        this.setField("description", value);
    }
    get metadata() {
        return this.getField("metadata");
    }
    set metadata(value) {
        this.setField("metadata", value);
    }
    get icon() {
        return this.getField("icon");
    }
    set icon(value) {
        this.setField("icon", value);
    }
    get photos() {
        return this.getField("photos");
    }
    set photos(value) {
        this.setField("photos", value);
    }
    get owners() {
        return this.getField("owners");
    }
    set owners(value) {
        this.setField("owners", value);
    }
    get facebook() {
        return this.getField("facebook");
    }
    set facebook(value) {
        this.setField("facebook", value);
    }
    get facebookPageId() {
        return this.getField("facebookPageId");
    }
    set facebookPageId(value) {
        this.setField("facebookPageId", value);
    }
    get facebookPageName() {
        return this.getField("facebookPageName");
    }
    set facebookPageName(value) {
        this.setField("facebookPageName", value);
    }
    get facebookPageToken() {
        return this.getField("facebookPageToken");
    }
    set facebookPageToken(value) {
        this.setField("facebookPageToken", value);
    }
    get twitter() {
        return this.getField("twitter");
    }
    set twitter(value) {
        this.setField("twitter", value);
    }
    get google() {
        return this.getField("google");
    }
    set google(value) {
        this.setField("google", value);
    }
    static findOne(criteria) {
        return _RESTModel__WEBPACK_IMPORTED_MODULE_2__["default"].findOneBase(Band, criteria, true);
    }
    static findMany(criteria) {
        return _RESTModel__WEBPACK_IMPORTED_MODULE_2__["default"].findManyBase(Band, criteria, true);
    }
    static findById(id) {
        return _RESTModel__WEBPACK_IMPORTED_MODULE_2__["default"].findByIdBase(Band, id, true);
    }
    static getAllOwned() {
        return _RESTModel__WEBPACK_IMPORTED_MODULE_2__["default"].findManyBase(Band, null, true);
    }
    save() {
        return super.save(true);
    }
    remove() {
        return super.remove(true);
    }
    getIcon() {
        return _RESTModel__WEBPACK_IMPORTED_MODULE_2__["default"].findByIdBase(_Upload__WEBPACK_IMPORTED_MODULE_4__["default"], this.icon, true);
    }
    getPhotos() {
        const photos = Array.from(this.photos);
        if (photos.length !== 0) {
            return _RESTModel__WEBPACK_IMPORTED_MODULE_2__["default"].findManyBase(_Upload__WEBPACK_IMPORTED_MODULE_4__["default"], {
                _id: photos
            }, true);
        }
        return Promise.resolve([]);
    }
    getOwners() {
        const owners = Array.from(this.owners);
        if (owners.length !== 0) {
            return _RESTModel__WEBPACK_IMPORTED_MODULE_2__["default"].findManyBase(_User__WEBPACK_IMPORTED_MODULE_5__["default"], {
                _id: owners
            }, true);
        }
        return Promise.resolve([]);
    }
    getGigs() {
        return _Gig__WEBPACK_IMPORTED_MODULE_1__["default"].findByBand(this._id);
    }
    getTwitterAccount() {
        return _RESTModel__WEBPACK_IMPORTED_MODULE_2__["default"].findByIdBase(_TwitterAccount__WEBPACK_IMPORTED_MODULE_3__["default"], this.twitter, true);
    }
    getFacebookAccount() {
        return _RESTModel__WEBPACK_IMPORTED_MODULE_2__["default"].findByIdBase(_FacebookAccount__WEBPACK_IMPORTED_MODULE_0__["default"], this.facebook, true);
    }
    isValid() {
        const self = this;
        if (!super.isValid()) {
            return false;
        }
        if (typeof this.cityPlaceID !== "string") {
            return false;
        }
        if (this.cityPlaceID === "") {
            return false;
        }
        if (typeof this.name !== "string") {
            return false;
        }
        if (this.name === "") {
            return false;
        }
        if (typeof this.description !== "string") {
            return false;
        }
        if (this.description === "") {
            return false;
        }
        if (this.description === "<p><br></p>") {
            return false;
        }
        if (!Array.isArray(this.owners)) {
            return false;
        }
        if (this.owners.length === 0) {
            return false;
        }
        if (!this.owners.every((owner) => self.userIsOwner(owner))) {
            return false;
        }
        return true;
    }
    userIsOwner(user) {
        if (Array.isArray(this.owners)) {
            let userId;
            if (typeof user === "string") {
                userId = user;
            }
            else if (typeof user === "object" && user) {
                userId = user._id;
            }
            return this.owners.find((id) => id === userId) !== undefined;
        }
        return false;
    }
}
Band.ModelName = "Band";


/***/ }),

/***/ "./src/Conversation.ts":
/*!*****************************!*\
  !*** ./src/Conversation.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Conversation; });
/* harmony import */ var _API__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./API */ "./src/API.ts");
/* harmony import */ var _RESTModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RESTModel */ "./src/RESTModel.ts");
/**
 * Created by corynull on Dec 30 2017 11:14:11 AM.
 */


class Conversation extends _RESTModel__WEBPACK_IMPORTED_MODULE_1__["default"] {
    get events() {
        return this.getField("events") || [];
    }
    set events(value) {
        this.setField("events", value);
    }
    get users() {
        return this.getField("users") || [];
    }
    set users(value) {
        this.setField("users", value);
    }
    static newCallback(callback) {
        const callbackId = Date.now();
        Conversation.Callbacks.set(callbackId, callback);
        return () => Conversation.Callbacks.delete(callbackId);
    }
    static connectSocket() {
        _API__WEBPACK_IMPORTED_MODULE_0__["default"].getSocket().then((socket) => {
            if (socket) {
                socket.on("/API/Conversation/Update", (data) => {
                    if (data) {
                        let conv = _RESTModel__WEBPACK_IMPORTED_MODULE_1__["default"].Cache.get(data._id) || null;
                        if (conv) {
                            Object.assign(conv, data);
                        }
                        else {
                            conv = new Conversation(data);
                        }
                        _RESTModel__WEBPACK_IMPORTED_MODULE_1__["default"].Cache.set(conv._id, conv);
                        Conversation.Callbacks.forEach((cb) => cb(conv));
                    }
                });
            }
        }, console.error);
    }
    static findById(id) {
        return _RESTModel__WEBPACK_IMPORTED_MODULE_1__["default"].findByIdBase(Conversation, id, true);
    }
    static getAllOwned() {
        return _RESTModel__WEBPACK_IMPORTED_MODULE_1__["default"].findManyBase(Conversation, null, true);
    }
    isValid() {
        if (!super.isValid()) {
            return false;
        }
        // TODO: do more tests...
        return true;
    }
    pushMessage(user, message) {
        this.events.push({
            dateTimePosted: new Date(),
            message,
            user,
        });
        return this.save();
    }
}
Conversation.ModelName = "Conversation";
Conversation.Callbacks = new Map();


/***/ }),

/***/ "./src/ErrorReport.ts":
/*!****************************!*\
  !*** ./src/ErrorReport.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ErrorReport; });
/* harmony import */ var _RESTModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RESTModel */ "./src/RESTModel.ts");
/**
 * Created by corynull on Jan 8 2018 8:58:54 PM.
 */

class ErrorReport extends _RESTModel__WEBPACK_IMPORTED_MODULE_0__["default"] {
    get version() {
        return this.getField("version");
    }
    set version(value) {
        this.setField("version", value);
    }
    get userId() {
        return this.getField("userId");
    }
    set userId(value) {
        this.setField("userId", value);
    }
    get stack() {
        return this.getField("stack");
    }
    set stack(value) {
        this.setField("stack", value);
    }
    get message() {
        return this.getField("message");
    }
    set message(value) {
        this.setField("message", value);
    }
    get name() {
        return this.getField("name");
    }
    set name(value) {
        this.setField("name", value);
    }
    get fileName() {
        return this.getField("fileName");
    }
    set fileName(value) {
        this.setField("fileName", value);
    }
    get columnNumber() {
        return this.getField("columnNumber");
    }
    set columnNumber(value) {
        this.setField("columnNumber", value);
    }
    get lineNumber() {
        return this.getField("lineNumber");
    }
    set lineNumber(value) {
        this.setField("lineNumber", value);
    }
    static findById(id) {
        return _RESTModel__WEBPACK_IMPORTED_MODULE_0__["default"].findByIdBase(ErrorReport, id);
    }
    static findMany(criteria) {
        return _RESTModel__WEBPACK_IMPORTED_MODULE_0__["default"].findManyBase(ErrorReport, criteria);
    }
    isValid() {
        if (!super.isValid()) {
            return false;
        }
        // TODO: do more tests...
        return true;
    }
}
ErrorReport.ModelName = "ErrorReport";


/***/ }),

/***/ "./src/FacebookAccount.ts":
/*!********************************!*\
  !*** ./src/FacebookAccount.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FacebookAccount; });
/* harmony import */ var _API__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./API */ "./src/API.ts");
/* harmony import */ var _RESTModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RESTModel */ "./src/RESTModel.ts");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./User */ "./src/User.ts");
/**
 * Created by corynull on Nov 30 2017 9:08 AM.
 */



class FacebookAccount extends _RESTModel__WEBPACK_IMPORTED_MODULE_1__["default"] {
    get userId() {
        return this.getField("userId");
    }
    set userId(value) {
        this.setField("userId", value);
    }
    get accountId() {
        return this.getField("accountId");
    }
    set accountId(value) {
        this.setField("accountId", value);
    }
    get userAccessToken() {
        return this.getField("userAccessToken");
    }
    set userAccessToken(value) {
        this.setField("userAccessToken", value);
    }
    get userRefreshToken() {
        return this.getField("userRefreshToken");
    }
    set userRefreshToken(value) {
        this.setField("userRefreshToken", value);
    }
    get profile() {
        return this.getField("profile");
    }
    static findById(id) {
        return new Promise((resolve, reject) => {
            if (typeof id === "string" && id !== "") {
                _API__WEBPACK_IMPORTED_MODULE_0__["default"].call("GET", `/API/FacebookAccount/${id}`, null).then((found) => {
                    const account = found || null;
                    if (account) {
                        resolve(new FacebookAccount(account));
                    }
                    else {
                        reject(new Error(`${account} returned`));
                    }
                }, reject);
            }
            else {
                resolve();
            }
        });
    }
    static findPage(pageName) {
        return new Promise((resolve, reject) => {
            if (typeof pageName !== "string") {
                reject(new Error("pageName is not a string!"));
            }
            else {
                _API__WEBPACK_IMPORTED_MODULE_0__["default"].call("GET", "/API/Facebook/Page/Find", {
                    name: pageName
                }).then(resolve, reject);
            }
        });
    }
    static PostToPage(format, text, pageId, postDateTime) {
        return new Promise((resolve, reject) => {
            _API__WEBPACK_IMPORTED_MODULE_0__["default"].call("POST", "/API/Facebook/Page/Post", {
                fb_page_id: pageId,
                post_format: format,
                post_text: text,
                publish_time: postDateTime // .getTime() / 1000
            }).then(resolve, reject);
        });
    }
    getUser() {
        return _RESTModel__WEBPACK_IMPORTED_MODULE_1__["default"].findManyBase(_User__WEBPACK_IMPORTED_MODULE_2__["default"], this.userId, true);
    }
    userIsOwner(user) {
        if (typeof user === "string") {
            return user === this.userId;
        }
        else if (typeof user === "object" && user) {
            return user._id === this.userId;
        }
        return false;
    }
    isValid() {
        if (!super.isValid()) {
            return false;
        }
        if (!this.userId || typeof this.userId !== "string") {
            return false;
        }
        if (!this.profile || typeof this.profile !== "object") {
            return false;
        }
        if (!this.accountId || typeof this.accountId !== "string") {
            return false;
        }
        return true;
    }
}
FacebookAccount.ModelName = "FacebookAccount";


/***/ }),

/***/ "./src/Gig.ts":
/*!********************!*\
  !*** ./src/Gig.ts ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Gig; });
/* harmony import */ var _API__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./API */ "./src/API.ts");
/* harmony import */ var _Band__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Band */ "./src/Band.ts");
/* harmony import */ var _Location__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Location */ "./src/Location.ts");
/* harmony import */ var _RESTModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RESTModel */ "./src/RESTModel.ts");
/* harmony import */ var _Venue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Venue */ "./src/Venue.ts");
/**
 * Created by corynull on 4/5/17.
 */
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





class Gig extends _RESTModel__WEBPACK_IMPORTED_MODULE_3__["default"] {
    get startTime() {
        const startTime = this.getField("startTime");
        return startTime ? new Date(startTime) : startTime;
    }
    set startTime(value) {
        this.setField("startTime", value);
    }
    get stopTime() {
        const stopTime = this.getField("stopTime");
        return stopTime ? new Date(stopTime) : stopTime;
    }
    set stopTime(value) {
        this.setField("stopTime", value.toJSON());
    }
    get location() {
        return this.getField("location");
    }
    set location(value) {
        this.setField("location", value);
    }
    get venue() {
        return this.getField("venue");
    }
    set venue(value) {
        this.setField("venue", value);
    }
    get bands() {
        return this.getField("bands");
    }
    set bands(value) {
        this.setField("bands", value);
    }
    get active() {
        return this.getField("active");
    }
    get toBeAnnounced() {
        return this.getField("toBeAnnounced");
    }
    set toBeAnnounced(value) {
        this.setField("toBeAnnounced", value);
    }
    get bandOwnersAccepted() {
        return this.getField("bandOwnersAccepted");
    }
    set bandOwnersAccepted(value) {
        this.setField("bandOwnersAccepted", value);
    }
    get venueOwnerAccepted() {
        return this.getField("venueOwnerAccepted");
    }
    set venueOwnerAccepted(value) {
        this.setField("venueOwnerAccepted", value);
    }
    get owners() {
        return this.getField("owners");
    }
    set owners(value) {
        this.setField("owners", value);
    }
    static findById(id) {
        return _RESTModel__WEBPACK_IMPORTED_MODULE_3__["default"].findByIdBase(Gig, id, true);
    }
    static findByBand(bandId) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield _API__WEBPACK_IMPORTED_MODULE_0__["default"].call("GET", `/API/Band/${bandId}/Gigs`, null);
            if (data && Array.isArray(data)) {
                return data.map((itemData) => {
                    const item = new Gig(itemData);
                    _RESTModel__WEBPACK_IMPORTED_MODULE_3__["default"].Cache.set(item._id, item);
                    return item;
                });
            }
            throw new Error(`Expected Array, got ${data}`);
        });
    }
    static findByVenue(venueId) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield _API__WEBPACK_IMPORTED_MODULE_0__["default"].call("GET", `/API/Venue/${venueId}/Gigs`, null);
            if (data && Array.isArray(data)) {
                return data.map((itemData) => {
                    const item = new Gig(itemData);
                    _RESTModel__WEBPACK_IMPORTED_MODULE_3__["default"].Cache.set(item._id, item);
                    return item;
                });
            }
            throw new Error(`Expected Array, got ${data}`);
        });
    }
    static getAllOwned() {
        return _RESTModel__WEBPACK_IMPORTED_MODULE_3__["default"].findManyBase(Gig, null, true);
    }
    static findMany(criteria) {
        return _RESTModel__WEBPACK_IMPORTED_MODULE_3__["default"].findManyBase(Gig, criteria, true);
    }
    static createGigs(gigData) {
        return new Promise((resolve, reject) => {
            const data = gigData || {};
            if (data && typeof data === "object") {
                if (!data.band || data.band === "") {
                    return reject(new Error("Band is required"));
                }
                if (!data.venue || data.venue === "") {
                    return reject(new Error("Venue is required"));
                }
                if (!data.times || data.times.length === 0) {
                    return reject(new Error("Times is required"));
                }
                const filtered = data.times.filter((time, i) => {
                    if (time.dayDate && time.startTime && time.stopTime) {
                        const dayDate = new Date(time.dayDate);
                        const startTime = new Date(time.startTime);
                        startTime.setFullYear(dayDate.getFullYear());
                        startTime.setMonth(dayDate.getMonth());
                        startTime.setDate(dayDate.getDay());
                        const stopTime = new Date(time.stopTime);
                        stopTime.setFullYear(dayDate.getFullYear());
                        stopTime.setMonth(dayDate.getMonth());
                        stopTime.setDate(dayDate.getDay());
                        data.times[i] = {
                            startTime: time.startTime,
                            stopTime: time.stopTime
                        };
                        return true;
                    }
                    else if (time.startTime && time.stopTime) {
                        data.times[i] = {
                            startTime: time.startTime,
                            stopTime: time.stopTime
                        };
                        return true;
                    }
                    return false;
                });
                if (filtered.length !== data.times.length) {
                    return reject(new Error("Not all times were valid"));
                }
                data.times = filtered;
                const request = _API__WEBPACK_IMPORTED_MODULE_0__["default"].call("POST", "/API/Gig", data);
                return request.then(((response) => {
                    let gigs = [];
                    gigs = Array.from(response || []).map((itemData) => {
                        const gig = new Gig(itemData);
                        return gig;
                    });
                    resolve(gigs);
                }), reject);
            }
            return null;
        });
    }
    static getAllInDistance(location, distance) {
        return new Promise((resolve, reject) => {
            if (typeof location !== "object") {
                return reject(new Error("location is not a object!"));
            }
            if (typeof location.lat !== "number" ||
                typeof location.lng !== "number") {
                return reject(new Error("location does not contain lat or lng!"));
            }
            if (typeof distance !== "number") {
                return reject(new Error("radius is not a number!"));
            }
            return _API__WEBPACK_IMPORTED_MODULE_0__["default"].call("GET", "/API/Gig/InDistance", {
                dis: distance,
                lat: location.lat,
                lng: location.lng
            }).then(((gigs) => {
                resolve(Array.from(gigs).map((item) => {
                    const gig = new Gig(item);
                    return gig;
                }));
            }), reject);
        });
    }
    getBands() {
        return _RESTModel__WEBPACK_IMPORTED_MODULE_3__["default"].findManyBase(_Band__WEBPACK_IMPORTED_MODULE_1__["default"], { _id: this.bands }, true);
    }
    getVenue() {
        return _RESTModel__WEBPACK_IMPORTED_MODULE_3__["default"].findByIdBase(_Venue__WEBPACK_IMPORTED_MODULE_4__["default"], this.venue, true);
    }
    getLocation() {
        return _RESTModel__WEBPACK_IMPORTED_MODULE_3__["default"].findByIdBase(_Location__WEBPACK_IMPORTED_MODULE_2__["default"], this.location, true);
    }
    isValid() {
        if (!super.isValid()) {
            return false;
        }
        if (!Array.isArray(this.owners)) {
            return false;
        }
        if (this.owners.length === 0) {
            return false;
        }
        return true;
    }
    userIsOwner(user) {
        if (Array.isArray(this.owners)) {
            let userId;
            if (typeof user === "string") {
                userId = user;
            }
            else if (typeof user === "object" && user) {
                userId = user._id;
            }
            return this.owners.find((id) => id === userId) !== undefined;
        }
        return false;
    }
}
Gig.ModelName = "Gig";


/***/ }),

/***/ "./src/GooglePlace.ts":
/*!****************************!*\
  !*** ./src/GooglePlace.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GooglePlace; });
/* harmony import */ var _API__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./API */ "./src/API.ts");
/* harmony import */ var _RESTModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RESTModel */ "./src/RESTModel.ts");
/**
 * Created by corynull on 4/7/17.
 */


class GooglePlace extends _RESTModel__WEBPACK_IMPORTED_MODULE_1__["default"] {
    get placeId() {
        return this.getField("placeId");
    }
    set placeId(value) {
        this.setField("placeId", value);
    }
    get details() {
        return this.getField("details");
    }
    set details(value) {
        this.setField("details", value);
    }
    static getPlaceDetails(placeId) {
        return new Promise((resolve, reject) => {
            if (typeof placeId !== "string") {
                return reject(new Error("placeId is not a string!"));
            }
            return _API__WEBPACK_IMPORTED_MODULE_0__["default"].call("GET", "/API/GooglePlace", { placeId }).then(resolve, reject);
        });
    }
    static queryPlace(text, maybeType) {
        return new Promise((resolve, reject) => {
            const type = maybeType || "locality";
            if (typeof text !== "string") {
                return reject(new Error("text is not a string!"));
            }
            if (text.length === 0) {
                return reject(new Error("text is blank"));
            }
            return _API__WEBPACK_IMPORTED_MODULE_0__["default"].call("GET", "/API/GooglePlace/Query", {
                term: text,
                type
            }).then(resolve, reject);
        });
    }
}
GooglePlace.ModelName = "GooglePlace";


/***/ }),

/***/ "./src/Location.ts":
/*!*************************!*\
  !*** ./src/Location.ts ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Location; });
/* harmony import */ var _API__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./API */ "./src/API.ts");
/* harmony import */ var _GooglePlace__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GooglePlace */ "./src/GooglePlace.ts");
/* harmony import */ var _RESTModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RESTModel */ "./src/RESTModel.ts");
/**
 * Created by corynull on 9/7/17.
 */



class Location extends _RESTModel__WEBPACK_IMPORTED_MODULE_2__["default"] {
    get type() {
        return this.getField("type") || "Point";
    }
    set type(value) {
        this.setField("type", value);
    }
    get placeId() {
        return this.getField("placeId");
    }
    set placeId(value) {
        this.setField("placeId", value);
    }
    get address() {
        return this.getField("address");
    }
    set address(value) {
        this.setField("address", value);
    }
    get point() {
        return this.getField("point");
    }
    set point(value) {
        this.setField("point", value);
    }
    get utcOffset() {
        return this.getField("utcOffset");
    }
    set utcOffset(value) {
        this.setField("utcOffset", value);
    }
    static getLocationByPlaceId(placeId) {
        return new Promise((resolve, reject) => {
            if (!placeId) {
                reject(new Error(`Invaild placeId: ${placeId}`));
            }
            else {
                _API__WEBPACK_IMPORTED_MODULE_0__["default"].call("GET", `/API/Place/${placeId}`, null).then(((location) => {
                    if (location) {
                        resolve(new Location(location));
                    }
                    else {
                        reject(new Error(`${location} returned`));
                    }
                }), reject);
            }
        });
    }
    static findById(id) {
        return _RESTModel__WEBPACK_IMPORTED_MODULE_2__["default"].findByIdBase(Location, id);
    }
    isValid() {
        if (!super.isValid()) {
            return false;
        }
        if (!this.placeId) {
            return false;
        }
        if (!this.address) {
            return false;
        }
        if (!this.utcOffset) {
            return false;
        }
        if (!Array.isArray(this.point)) {
            return false;
        }
        return true;
    }
    getPlaceDetails() {
        return _GooglePlace__WEBPACK_IMPORTED_MODULE_1__["default"].getPlaceDetails(this.placeId);
    }
}
Location.ModelName = "Location";


/***/ }),

/***/ "./src/ModelNameToModel.ts":
/*!*********************************!*\
  !*** ./src/ModelNameToModel.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ModelNameToModel; });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function ModelNameToModel(name) {
    return __awaiter(this, void 0, void 0, function* () {
        switch (name) {
            case "Band":
                return (yield Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./Band */ "./src/Band.ts"))).default;
            case "Conversation":
                return (yield Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./Conversation */ "./src/Conversation.ts"))).default;
            case "ErrorReport":
                return (yield Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./ErrorReport */ "./src/ErrorReport.ts"))).default;
            case "FacebookAccount":
                return (yield Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./FacebookAccount */ "./src/FacebookAccount.ts"))).default;
            case "Gig":
                return (yield Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./Gig */ "./src/Gig.ts"))).default;
            case "GooglePlace":
                return (yield Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./GooglePlace */ "./src/GooglePlace.ts"))).default;
            case "Location":
                return (yield Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./Location */ "./src/Location.ts"))).default;
            case "Notification":
                return (yield Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./Notification */ "./src/Notification.ts"))).default;
            case "Page":
                return (yield Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./Page */ "./src/Page.ts"))).default;
            case "Post":
                return (yield Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./Post */ "./src/Post.ts"))).default;
            case "Request":
                return (yield Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./Request */ "./src/Request.ts"))).default;
            case "TwitterAccount":
                return (yield Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./TwitterAccount */ "./src/TwitterAccount.ts"))).default;
            case "Upload":
                return (yield Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./Upload */ "./src/Upload.ts"))).default;
            case "User":
                return (yield Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./User */ "./src/User.ts"))).default;
            case "Venue":
                return (yield Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./Venue */ "./src/Venue.ts"))).default;
            default:
                return Promise.resolve(null);
        }
    });
}


/***/ }),

/***/ "./src/Notification.ts":
/*!*****************************!*\
  !*** ./src/Notification.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Notification; });
/* harmony import */ var _API__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./API */ "./src/API.ts");
/* harmony import */ var _RESTModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RESTModel */ "./src/RESTModel.ts");
/**
 * Created by corynull on 8/15/17.
 */
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


class Notification extends _RESTModel__WEBPACK_IMPORTED_MODULE_1__["default"] {
    constructor() {
        super(...arguments);
        this.changeCallbacks = new Map();
    }
    get userId() {
        return this.getField("userId");
    }
    set userId(value) {
        this.setField("userId", value);
    }
    get label() {
        return this.getField("label");
    }
    set label(value) {
        this.setField("label", value);
    }
    get message() {
        return this.getField("message");
    }
    set message(value) {
        this.setField("message", value);
    }
    get actions() {
        return this.getField("actions");
    }
    set actions(value) {
        this.setField("actions", value);
    }
    get seenByUser() {
        return this.getField("seenByUser");
    }
    set seenByUser(value) {
        this.setField("seenByUser", value);
    }
    static onNewNotification(note) {
        Notification.Callbacks.forEach((callback) => callback(note));
    }
    static newCallback(callback) {
        const callbackId = Date.now();
        Notification.Callbacks.set(callbackId, callback);
        return () => Notification.Callbacks.delete(callbackId);
    }
    static getNewNotifications() {
        return __awaiter(this, void 0, void 0, function* () {
            if (_API__WEBPACK_IMPORTED_MODULE_0__["default"].token !== null) {
                const notes = yield _API__WEBPACK_IMPORTED_MODULE_0__["default"].call("GET", "/API/Notification", {
                    returnNew: true
                });
                return Array.from(notes).map((item) => new Notification(item));
            }
            else {
                return [];
            }
        });
    }
    static getAllOwned() {
        return _RESTModel__WEBPACK_IMPORTED_MODULE_1__["default"].findManyBase("Notification", null, true);
    }
    static findById(id) {
        return _RESTModel__WEBPACK_IMPORTED_MODULE_1__["default"].findByIdBase("Notification", id, true);
    }
    static connectSocket() {
        _API__WEBPACK_IMPORTED_MODULE_0__["default"].getSocket().then((socket) => {
            if (socket) {
                socket.on("notification", (data) => Notification.onNewNotification(new Notification(data)));
            }
        }, console.error);
    }
    static setUpPushNotifications() {
        const PushSupported = typeof window !== "undefined" &&
            typeof window.Notification !== "undefined";
        const webNotification = (PushSupported) ? window.Notification : null;
        if (PushSupported) {
            const setup = (permission) => {
                if (permission === "granted") {
                    Notification.onNewNotification((note) => {
                        return new webNotification(note.label, {
                            body: note.message,
                            data: note,
                            icon: "/LogoSmall.png",
                            timestamp: note.dateCreated
                        });
                    });
                }
            };
            if (webNotification.permission === "granted") {
                setup(webNotification.permission);
            }
            else {
                webNotification.requestPermission(setup);
            }
        }
    }
    newChangeCallback(callback) {
        const i = Date.now();
        this.changeCallbacks.set(i, callback);
        return () => this.changeCallbacks.delete(i);
    }
}
Notification.ModelName = "Notification";
Notification.Callbacks = new Map();


/***/ }),

/***/ "./src/Page.ts":
/*!*********************!*\
  !*** ./src/Page.ts ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Page; });
/* harmony import */ var _API__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./API */ "./src/API.ts");
/* harmony import */ var _RESTModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RESTModel */ "./src/RESTModel.ts");
/**
 * Created by corynull on 8/1/17.
 */


class Page extends _RESTModel__WEBPACK_IMPORTED_MODULE_1__["default"] {
    get data() {
        return this.getField("data");
    }
    set data(value) {
        this.setField("data", value);
    }
    get metadata() {
        return this.getField("metadata");
    }
    set metadata(value) {
        this.setField("metadata", value);
    }
    get title() {
        return this.getField("title");
    }
    set title(value) {
        this.setField("title", value);
    }
    get link() {
        return this.getField("link");
    }
    set link(value) {
        this.setField("link", value);
    }
    get visits() {
        return this.getField("visits") || 0;
    }
    set visits(value) {
        this.setField("visits", value);
    }
    get revisions() {
        return this.getField("revisions") || 0;
    }
    set revisions(value) {
        this.setField("revisions", value);
    }
    get hide() {
        const value = this.getField("hide");
        return value === null ? true : Boolean(value);
    }
    set hide(value) {
        this.setField("hide", value);
    }
    get blog() {
        const value = this.getField("blog");
        return Boolean(value);
    }
    set blog(value) {
        this.setField("blog", value);
    }
    get doc() {
        const value = this.getField("doc");
        return Boolean(value);
    }
    set doc(value) {
        this.setField("doc", value);
    }
    get admin() {
        return this.getField("admin");
    }
    set admin(value) {
        this.setField("admin", value);
    }
    static findMany(criteria, skip, limit) {
        return _RESTModel__WEBPACK_IMPORTED_MODULE_1__["default"].findManyBase(Page, criteria);
    }
    static findOne(criteria) {
        return _RESTModel__WEBPACK_IMPORTED_MODULE_1__["default"].findOneBase(Page, criteria);
    }
    static findById(id) {
        return _RESTModel__WEBPACK_IMPORTED_MODULE_1__["default"].findByIdBase(Page, id);
    }
    static findByLink(link) {
        return new Promise((resolve, reject) => {
            _API__WEBPACK_IMPORTED_MODULE_0__["default"].call("GET", `/API/Link/${link}`, null).then((page) => {
                resolve(new Page(page));
            }, reject);
        });
    }
    isValid() {
        if (!super.isValid()) {
            return false;
        }
        if (!this.title) {
            return false;
        }
        if (this.title === "") {
            return false;
        }
        return true;
    }
    userIsOwner(user) {
        if (typeof user === "string") {
            return user === this.admin;
        }
        if (typeof user === "function" && user && user.isValid()) {
            return user._id === this.admin || user.admin;
        }
        return false;
    }
}
Page.ModelName = "Page";


/***/ }),

/***/ "./src/Post.ts":
/*!*********************!*\
  !*** ./src/Post.ts ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Post; });
/* harmony import */ var _RESTModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RESTModel */ "./src/RESTModel.ts");
/**
 * Created by corynull on 5/23/17.
 */

class Post extends _RESTModel__WEBPACK_IMPORTED_MODULE_0__["default"] {
    get userId() {
        return this.getField("userId");
    }
    set userId(value) {
        this.setField("userId", value);
    }
    get network() {
        return this.getField("network");
    }
    set network(value) {
        this.setField("network", value);
    }
    get accountId() {
        return this.getField("accountId");
    }
    set accountId(value) {
        this.setField("accountId", value);
    }
    get pageId() {
        return this.getField("pageId");
    }
    set pageId(value) {
        this.setField("pageId", value);
    }
    get postText() {
        return this.getField("postText");
    }
    set postText(value) {
        this.setField("postText", value);
    }
    get postDate() {
        return this.getField("postDate");
    }
    set postDate(value) {
        this.setField("postDate", value);
    }
    get coordinates() {
        return this.getField("coordinates");
    }
    set coordinates(value) {
        this.setField("coordinates", value);
    }
    get error() {
        return this.getField("error");
    }
    set error(value) {
        this.setField("error", value);
    }
    get done() {
        return this.getField("done");
    }
    set done(value) {
        this.setField("done", value);
    }
    static findById(id) {
        return _RESTModel__WEBPACK_IMPORTED_MODULE_0__["default"].findByIdBase(Post, id);
    }
    static getAllOwned() {
        return _RESTModel__WEBPACK_IMPORTED_MODULE_0__["default"].findManyBase(Post, null);
    }
    static findMany(criteria) {
        return _RESTModel__WEBPACK_IMPORTED_MODULE_0__["default"].findManyBase(Post, criteria);
    }
    isValid() {
        if (!super.isValid()) {
            return false;
        }
        return true;
    }
    canSave() {
        if (!this.postDate) {
            return false;
        }
        if (!this.postText || this.postText === "") {
            return false;
        }
        if (!this.network) {
            // TODO: Do network validation
            return false;
        }
        return true;
    }
    userIsOwner(user) {
        if (typeof user === "string") {
            return user === this.userId;
        }
        if (typeof user === "function" && user && user.isValid()) {
            return user._id === this.userId;
        }
        return false;
    }
}
Post.ModelName = "Post";


/***/ }),

/***/ "./src/PropTypes/Band.ts":
/*!*******************************!*\
  !*** ./src/PropTypes/Band.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (prop_types__WEBPACK_IMPORTED_MODULE_0__["shape"]({
    _id: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"].isRequired,
    cityName: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"],
    cityPlaceID: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"],
    dateCreated: prop_types__WEBPACK_IMPORTED_MODULE_0__["oneOfType"]([
        prop_types__WEBPACK_IMPORTED_MODULE_0__["string"],
        prop_types__WEBPACK_IMPORTED_MODULE_0__["instanceOf"](Date)
    ]).isRequired,
    dateModified: prop_types__WEBPACK_IMPORTED_MODULE_0__["oneOfType"]([
        prop_types__WEBPACK_IMPORTED_MODULE_0__["string"],
        prop_types__WEBPACK_IMPORTED_MODULE_0__["instanceOf"](Date)
    ]).isRequired,
    description: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"],
    email: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"],
    facebook: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"],
    facebookPageId: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"],
    facebookPageName: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"],
    facebookPageToken: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"],
    google: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"],
    icon: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"],
    metadata: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"],
    name: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"].isRequired,
    owners: prop_types__WEBPACK_IMPORTED_MODULE_0__["arrayOf"](prop_types__WEBPACK_IMPORTED_MODULE_0__["string"]),
    photos: prop_types__WEBPACK_IMPORTED_MODULE_0__["arrayOf"](prop_types__WEBPACK_IMPORTED_MODULE_0__["string"]),
    twitter: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"],
    website: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"]
}));


/***/ }),

/***/ "./src/PropTypes/Conversation.ts":
/*!***************************************!*\
  !*** ./src/PropTypes/Conversation.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (prop_types__WEBPACK_IMPORTED_MODULE_0__["shape"]({
    _id: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"].isRequired,
    dateCreated: prop_types__WEBPACK_IMPORTED_MODULE_0__["oneOfType"]([
        prop_types__WEBPACK_IMPORTED_MODULE_0__["string"],
        prop_types__WEBPACK_IMPORTED_MODULE_0__["instanceOf"](Date)
    ]).isRequired,
    dateModified: prop_types__WEBPACK_IMPORTED_MODULE_0__["oneOfType"]([
        prop_types__WEBPACK_IMPORTED_MODULE_0__["string"],
        prop_types__WEBPACK_IMPORTED_MODULE_0__["instanceOf"](Date)
    ]).isRequired,
    events: prop_types__WEBPACK_IMPORTED_MODULE_0__["arrayOf"](prop_types__WEBPACK_IMPORTED_MODULE_0__["shape"]({
        dateTimePosted: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"].isRequired,
        message: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"].isRequired,
        user: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"].isRequired
    })),
    users: prop_types__WEBPACK_IMPORTED_MODULE_0__["arrayOf"](prop_types__WEBPACK_IMPORTED_MODULE_0__["string"].isRequired)
}));


/***/ }),

/***/ "./src/PropTypes/ErrorReport.ts":
/*!**************************************!*\
  !*** ./src/PropTypes/ErrorReport.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (prop_types__WEBPACK_IMPORTED_MODULE_0__["shape"]({
    _id: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"].isRequired,
    columnNumber: prop_types__WEBPACK_IMPORTED_MODULE_0__["number"],
    dateCreated: prop_types__WEBPACK_IMPORTED_MODULE_0__["oneOfType"]([
        prop_types__WEBPACK_IMPORTED_MODULE_0__["string"],
        prop_types__WEBPACK_IMPORTED_MODULE_0__["instanceOf"](Date)
    ]).isRequired,
    dateModified: prop_types__WEBPACK_IMPORTED_MODULE_0__["oneOfType"]([
        prop_types__WEBPACK_IMPORTED_MODULE_0__["string"],
        prop_types__WEBPACK_IMPORTED_MODULE_0__["instanceOf"](Date)
    ]).isRequired,
    fileName: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"],
    lineNumber: prop_types__WEBPACK_IMPORTED_MODULE_0__["number"],
    message: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"].isRequired,
    name: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"].isRequired,
    stack: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"].isRequired,
    userId: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"].isRequired,
    version: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"].isRequired,
}));


/***/ }),

/***/ "./src/PropTypes/FacebookAccount.ts":
/*!******************************************!*\
  !*** ./src/PropTypes/FacebookAccount.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (prop_types__WEBPACK_IMPORTED_MODULE_0__["shape"]({
    _id: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"].isRequired,
    accountId: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"].isRequired,
    dateCreated: prop_types__WEBPACK_IMPORTED_MODULE_0__["oneOfType"]([
        prop_types__WEBPACK_IMPORTED_MODULE_0__["string"],
        prop_types__WEBPACK_IMPORTED_MODULE_0__["instanceOf"](Date)
    ]).isRequired,
    dateModified: prop_types__WEBPACK_IMPORTED_MODULE_0__["oneOfType"]([
        prop_types__WEBPACK_IMPORTED_MODULE_0__["string"],
        prop_types__WEBPACK_IMPORTED_MODULE_0__["instanceOf"](Date)
    ]).isRequired,
    profile: prop_types__WEBPACK_IMPORTED_MODULE_0__["any"],
    userAccessToken: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"],
    userId: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"].isRequired,
    userRefreshToken: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"],
}));


/***/ }),

/***/ "./src/PropTypes/Gig.ts":
/*!******************************!*\
  !*** ./src/PropTypes/Gig.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (prop_types__WEBPACK_IMPORTED_MODULE_0__["shape"]({
    _id: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"].isRequired,
    bandOwnerAccepted: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"],
    bands: prop_types__WEBPACK_IMPORTED_MODULE_0__["arrayOf"](prop_types__WEBPACK_IMPORTED_MODULE_0__["string"]).isRequired,
    dateCreated: prop_types__WEBPACK_IMPORTED_MODULE_0__["oneOfType"]([
        prop_types__WEBPACK_IMPORTED_MODULE_0__["string"],
        prop_types__WEBPACK_IMPORTED_MODULE_0__["instanceOf"](Date)
    ]).isRequired,
    dateModified: prop_types__WEBPACK_IMPORTED_MODULE_0__["oneOfType"]([
        prop_types__WEBPACK_IMPORTED_MODULE_0__["string"],
        prop_types__WEBPACK_IMPORTED_MODULE_0__["instanceOf"](Date)
    ]).isRequired,
    location: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"].isRequired,
    owners: prop_types__WEBPACK_IMPORTED_MODULE_0__["arrayOf"](prop_types__WEBPACK_IMPORTED_MODULE_0__["string"]),
    startTime: prop_types__WEBPACK_IMPORTED_MODULE_0__["oneOfType"]([
        prop_types__WEBPACK_IMPORTED_MODULE_0__["string"],
        prop_types__WEBPACK_IMPORTED_MODULE_0__["instanceOf"](Date)
    ]).isRequired,
    stopTime: prop_types__WEBPACK_IMPORTED_MODULE_0__["oneOfType"]([
        prop_types__WEBPACK_IMPORTED_MODULE_0__["string"],
        prop_types__WEBPACK_IMPORTED_MODULE_0__["instanceOf"](Date)
    ]).isRequired,
    toBeAnnounced: prop_types__WEBPACK_IMPORTED_MODULE_0__["bool"],
    venue: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"].isRequired,
    venueOwnerAccepted: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"]
}));


/***/ }),

/***/ "./src/PropTypes/Location.ts":
/*!***********************************!*\
  !*** ./src/PropTypes/Location.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (prop_types__WEBPACK_IMPORTED_MODULE_0__["shape"]({
    _id: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"].isRequired,
    address: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"].isRequired,
    dateCreated: prop_types__WEBPACK_IMPORTED_MODULE_0__["oneOfType"]([
        prop_types__WEBPACK_IMPORTED_MODULE_0__["string"],
        prop_types__WEBPACK_IMPORTED_MODULE_0__["instanceOf"](Date)
    ]).isRequired,
    dateModified: prop_types__WEBPACK_IMPORTED_MODULE_0__["oneOfType"]([
        prop_types__WEBPACK_IMPORTED_MODULE_0__["string"],
        prop_types__WEBPACK_IMPORTED_MODULE_0__["instanceOf"](Date)
    ]).isRequired,
    placeId: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"].isRequired,
    point: prop_types__WEBPACK_IMPORTED_MODULE_0__["arrayOf"](prop_types__WEBPACK_IMPORTED_MODULE_0__["number"]).isRequired,
    type: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"].isRequired,
    utcOffset: prop_types__WEBPACK_IMPORTED_MODULE_0__["number"].isRequired
}));


/***/ }),

/***/ "./src/PropTypes/Notification.ts":
/*!***************************************!*\
  !*** ./src/PropTypes/Notification.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (prop_types__WEBPACK_IMPORTED_MODULE_0__["shape"]({
    _id: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"].isRequired,
    actions: prop_types__WEBPACK_IMPORTED_MODULE_0__["arrayOf"](prop_types__WEBPACK_IMPORTED_MODULE_0__["shape"]({
        label: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"].isRequired,
        link: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"],
        request: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"]
    })),
    dateCreated: prop_types__WEBPACK_IMPORTED_MODULE_0__["oneOfType"]([
        prop_types__WEBPACK_IMPORTED_MODULE_0__["string"],
        prop_types__WEBPACK_IMPORTED_MODULE_0__["instanceOf"](Date)
    ]).isRequired,
    dateModified: prop_types__WEBPACK_IMPORTED_MODULE_0__["oneOfType"]([
        prop_types__WEBPACK_IMPORTED_MODULE_0__["string"],
        prop_types__WEBPACK_IMPORTED_MODULE_0__["instanceOf"](Date)
    ]).isRequired,
    label: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"].isRequired,
    message: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"].isRequired,
    seenByUser: prop_types__WEBPACK_IMPORTED_MODULE_0__["bool"],
    userId: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"].isRequired
}));


/***/ }),

/***/ "./src/PropTypes/Page.ts":
/*!*******************************!*\
  !*** ./src/PropTypes/Page.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (prop_types__WEBPACK_IMPORTED_MODULE_0__["shape"]({
    _id: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"].isRequired,
    blog: prop_types__WEBPACK_IMPORTED_MODULE_0__["bool"],
    data: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"],
    dateCreated: prop_types__WEBPACK_IMPORTED_MODULE_0__["oneOfType"]([
        prop_types__WEBPACK_IMPORTED_MODULE_0__["string"],
        prop_types__WEBPACK_IMPORTED_MODULE_0__["instanceOf"](Date)
    ]).isRequired,
    dateModified: prop_types__WEBPACK_IMPORTED_MODULE_0__["oneOfType"]([
        prop_types__WEBPACK_IMPORTED_MODULE_0__["string"],
        prop_types__WEBPACK_IMPORTED_MODULE_0__["instanceOf"](Date)
    ]).isRequired,
    doc: prop_types__WEBPACK_IMPORTED_MODULE_0__["bool"],
    hide: prop_types__WEBPACK_IMPORTED_MODULE_0__["bool"],
    link: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"],
    metadata: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"],
    revisions: prop_types__WEBPACK_IMPORTED_MODULE_0__["number"],
    title: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"],
    visits: prop_types__WEBPACK_IMPORTED_MODULE_0__["number"]
}));


/***/ }),

/***/ "./src/PropTypes/Post.ts":
/*!*******************************!*\
  !*** ./src/PropTypes/Post.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (prop_types__WEBPACK_IMPORTED_MODULE_0__["shape"]({
    _id: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"].isRequired,
    accountId: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"].isRequired,
    coordinates: prop_types__WEBPACK_IMPORTED_MODULE_0__["arrayOf"](prop_types__WEBPACK_IMPORTED_MODULE_0__["number"]),
    dateCreated: prop_types__WEBPACK_IMPORTED_MODULE_0__["oneOfType"]([
        prop_types__WEBPACK_IMPORTED_MODULE_0__["string"],
        prop_types__WEBPACK_IMPORTED_MODULE_0__["instanceOf"](Date)
    ]).isRequired,
    dateModified: prop_types__WEBPACK_IMPORTED_MODULE_0__["oneOfType"]([
        prop_types__WEBPACK_IMPORTED_MODULE_0__["string"],
        prop_types__WEBPACK_IMPORTED_MODULE_0__["instanceOf"](Date)
    ]).isRequired,
    done: prop_types__WEBPACK_IMPORTED_MODULE_0__["bool"].isRequired,
    error: prop_types__WEBPACK_IMPORTED_MODULE_0__["any"],
    network: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"].isRequired,
    pageId: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"].isRequired,
    postDate: prop_types__WEBPACK_IMPORTED_MODULE_0__["oneOfType"]([
        prop_types__WEBPACK_IMPORTED_MODULE_0__["string"],
        prop_types__WEBPACK_IMPORTED_MODULE_0__["instanceOf"](Date)
    ]).isRequired,
    postText: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"].isRequired,
    userId: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"].isRequired,
}));


/***/ }),

/***/ "./src/PropTypes/TwitterAccount.ts":
/*!*****************************************!*\
  !*** ./src/PropTypes/TwitterAccount.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (prop_types__WEBPACK_IMPORTED_MODULE_0__["shape"]({
    _id: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"].isRequired,
    accessToken: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"],
    accountId: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"].isRequired,
    dateCreated: prop_types__WEBPACK_IMPORTED_MODULE_0__["oneOfType"]([
        prop_types__WEBPACK_IMPORTED_MODULE_0__["string"],
        prop_types__WEBPACK_IMPORTED_MODULE_0__["instanceOf"](Date)
    ]).isRequired,
    dateModified: prop_types__WEBPACK_IMPORTED_MODULE_0__["oneOfType"]([
        prop_types__WEBPACK_IMPORTED_MODULE_0__["string"],
        prop_types__WEBPACK_IMPORTED_MODULE_0__["instanceOf"](Date)
    ]).isRequired,
    profile: prop_types__WEBPACK_IMPORTED_MODULE_0__["any"],
    tokenSecret: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"],
    userId: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"].isRequired
}));


/***/ }),

/***/ "./src/PropTypes/Upload.ts":
/*!*********************************!*\
  !*** ./src/PropTypes/Upload.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (prop_types__WEBPACK_IMPORTED_MODULE_0__["shape"]({
    _id: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"].isRequired,
    dateCreated: prop_types__WEBPACK_IMPORTED_MODULE_0__["oneOfType"]([
        prop_types__WEBPACK_IMPORTED_MODULE_0__["string"],
        prop_types__WEBPACK_IMPORTED_MODULE_0__["instanceOf"](Date)
    ]).isRequired,
    dateModified: prop_types__WEBPACK_IMPORTED_MODULE_0__["oneOfType"]([
        prop_types__WEBPACK_IMPORTED_MODULE_0__["string"],
        prop_types__WEBPACK_IMPORTED_MODULE_0__["instanceOf"](Date)
    ]).isRequired,
    description: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"],
    fileData: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"].isRequired,
    fileName: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"].isRequired,
    owners: prop_types__WEBPACK_IMPORTED_MODULE_0__["arrayOf"](prop_types__WEBPACK_IMPORTED_MODULE_0__["string"]).isRequired,
    title: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"].isRequired
}));


/***/ }),

/***/ "./src/PropTypes/User.ts":
/*!*******************************!*\
  !*** ./src/PropTypes/User.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (prop_types__WEBPACK_IMPORTED_MODULE_0__["shape"]({
    _id: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"].isRequired,
    active: prop_types__WEBPACK_IMPORTED_MODULE_0__["bool"],
    admin: prop_types__WEBPACK_IMPORTED_MODULE_0__["bool"],
    attempts: prop_types__WEBPACK_IMPORTED_MODULE_0__["number"],
    bandManager: prop_types__WEBPACK_IMPORTED_MODULE_0__["bool"],
    betaFeatureUser: prop_types__WEBPACK_IMPORTED_MODULE_0__["bool"],
    birthday: prop_types__WEBPACK_IMPORTED_MODULE_0__["oneOfType"]([
        prop_types__WEBPACK_IMPORTED_MODULE_0__["string"],
        prop_types__WEBPACK_IMPORTED_MODULE_0__["instanceOf"](Date)
    ]).isRequired,
    country: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"].isRequired,
    dateCreated: prop_types__WEBPACK_IMPORTED_MODULE_0__["oneOfType"]([
        prop_types__WEBPACK_IMPORTED_MODULE_0__["string"],
        prop_types__WEBPACK_IMPORTED_MODULE_0__["instanceOf"](Date)
    ]).isRequired,
    dateModified: prop_types__WEBPACK_IMPORTED_MODULE_0__["oneOfType"]([
        prop_types__WEBPACK_IMPORTED_MODULE_0__["string"],
        prop_types__WEBPACK_IMPORTED_MODULE_0__["instanceOf"](Date)
    ]).isRequired,
    description: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"],
    email: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"],
    emailVerified: prop_types__WEBPACK_IMPORTED_MODULE_0__["bool"],
    facebook: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"],
    firstName: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"].isRequired,
    icon: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"],
    lastLogin: prop_types__WEBPACK_IMPORTED_MODULE_0__["oneOfType"]([
        prop_types__WEBPACK_IMPORTED_MODULE_0__["string"],
        prop_types__WEBPACK_IMPORTED_MODULE_0__["instanceOf"](Date)
    ]).isRequired,
    lastLoginIP: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"].isRequired,
    lastName: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"].isRequired,
    middleName: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"],
    payment: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"],
    paypal: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"],
    sendAnonymousReports: prop_types__WEBPACK_IMPORTED_MODULE_0__["bool"],
    sendEmails: prop_types__WEBPACK_IMPORTED_MODULE_0__["bool"],
    sendErrorReports: prop_types__WEBPACK_IMPORTED_MODULE_0__["bool"],
    sendPromotions: prop_types__WEBPACK_IMPORTED_MODULE_0__["bool"],
    twitter: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"],
    useCookies: prop_types__WEBPACK_IMPORTED_MODULE_0__["bool"],
    venueManager: prop_types__WEBPACK_IMPORTED_MODULE_0__["bool"],
}));


/***/ }),

/***/ "./src/PropTypes/Venue.ts":
/*!********************************!*\
  !*** ./src/PropTypes/Venue.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (prop_types__WEBPACK_IMPORTED_MODULE_0__["shape"]({
    _id: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"].isRequired,
    dateCreated: prop_types__WEBPACK_IMPORTED_MODULE_0__["oneOfType"]([
        prop_types__WEBPACK_IMPORTED_MODULE_0__["string"],
        prop_types__WEBPACK_IMPORTED_MODULE_0__["instanceOf"](Date)
    ]).isRequired,
    dateModified: prop_types__WEBPACK_IMPORTED_MODULE_0__["oneOfType"]([
        prop_types__WEBPACK_IMPORTED_MODULE_0__["string"],
        prop_types__WEBPACK_IMPORTED_MODULE_0__["instanceOf"](Date)
    ]).isRequired,
    description: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"].isRequired,
    email: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"],
    facebook: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"],
    facebookPageId: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"],
    facebookPageName: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"],
    facebookPageToken: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"],
    google: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"],
    icon: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"],
    location: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"].isRequired,
    metaData: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"],
    name: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"].isRequired,
    openCloseTimes: prop_types__WEBPACK_IMPORTED_MODULE_0__["arrayOf"](prop_types__WEBPACK_IMPORTED_MODULE_0__["shape"]({
        closingTime: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"],
        open: prop_types__WEBPACK_IMPORTED_MODULE_0__["bool"],
        openingTime: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"]
    })),
    owners: prop_types__WEBPACK_IMPORTED_MODULE_0__["arrayOf"](prop_types__WEBPACK_IMPORTED_MODULE_0__["string"]),
    phone: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"],
    photos: prop_types__WEBPACK_IMPORTED_MODULE_0__["arrayOf"](prop_types__WEBPACK_IMPORTED_MODULE_0__["string"]),
    twitter: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"],
    website: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"]
}));


/***/ }),

/***/ "./src/PropTypes/index.ts":
/*!********************************!*\
  !*** ./src/PropTypes/index.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Band__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Band */ "./src/PropTypes/Band.ts");
/* harmony import */ var _Conversation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Conversation */ "./src/PropTypes/Conversation.ts");
/* harmony import */ var _ErrorReport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ErrorReport */ "./src/PropTypes/ErrorReport.ts");
/* harmony import */ var _FacebookAccount__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FacebookAccount */ "./src/PropTypes/FacebookAccount.ts");
/* harmony import */ var _Gig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Gig */ "./src/PropTypes/Gig.ts");
/* harmony import */ var _Location__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Location */ "./src/PropTypes/Location.ts");
/* harmony import */ var _Notification__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Notification */ "./src/PropTypes/Notification.ts");
/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Page */ "./src/PropTypes/Page.ts");
/* harmony import */ var _Post__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Post */ "./src/PropTypes/Post.ts");
/* harmony import */ var _TwitterAccount__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./TwitterAccount */ "./src/PropTypes/TwitterAccount.ts");
/* harmony import */ var _Upload__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Upload */ "./src/PropTypes/Upload.ts");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./User */ "./src/PropTypes/User.ts");
/* harmony import */ var _Venue__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Venue */ "./src/PropTypes/Venue.ts");













/* harmony default export */ __webpack_exports__["default"] = ({
    Band: _Band__WEBPACK_IMPORTED_MODULE_0__["default"],
    Conversation: _Conversation__WEBPACK_IMPORTED_MODULE_1__["default"],
    ErrorReport: _ErrorReport__WEBPACK_IMPORTED_MODULE_2__["default"],
    FacebookAccount: _FacebookAccount__WEBPACK_IMPORTED_MODULE_3__["default"],
    Gig: _Gig__WEBPACK_IMPORTED_MODULE_4__["default"],
    Location: _Location__WEBPACK_IMPORTED_MODULE_5__["default"],
    Notification: _Notification__WEBPACK_IMPORTED_MODULE_6__["default"],
    Page: _Page__WEBPACK_IMPORTED_MODULE_7__["default"],
    Post: _Post__WEBPACK_IMPORTED_MODULE_8__["default"],
    TwitterAccount: _TwitterAccount__WEBPACK_IMPORTED_MODULE_9__["default"],
    Upload: _Upload__WEBPACK_IMPORTED_MODULE_10__["default"],
    User: _User__WEBPACK_IMPORTED_MODULE_11__["default"],
    Venue: _Venue__WEBPACK_IMPORTED_MODULE_12__["default"]
});


/***/ }),

/***/ "./src/RESTModel.ts":
/*!**************************!*\
  !*** ./src/RESTModel.ts ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RESTModel; });
/* harmony import */ var _API__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./API */ "./src/API.ts");
/* harmony import */ var _ModelNameToModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ModelNameToModel */ "./src/ModelNameToModel.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


class RESTModel {
    constructor(dataMaybe) {
        this.expiration = ((new Date())
            .getTime() +
            1 * // Hours
                60 * // Minutes
                60 * // Seconds
                1000 // Milliseconds
        );
        this.changes = new Object();
        this.document = new Object();
        this.document = new Object();
        this.changes = new Object();
        if (typeof dataMaybe === "string") {
            try {
                const data = JSON.parse(dataMaybe);
                if (data !== null && typeof data.ModelName !== "undefined") {
                    delete data.ModelName;
                }
                Object.assign(this.document, data);
            }
            catch (e) {
                console.log(dataMaybe);
                console.error(e);
            }
        }
        else if (dataMaybe) {
            if (typeof dataMaybe.document === "object" && dataMaybe.document) {
                Object.assign(this.document, dataMaybe.document);
            }
            if (typeof dataMaybe.changes === "object" && dataMaybe.changes) {
                Object.assign(this.changes, dataMaybe.changes);
            }
            else {
                Object.assign(this.document, dataMaybe);
            }
        }
    }
    get dateCreated() {
        const dateCreated = this.document.dateCreated || null;
        return dateCreated ? new Date(dateCreated) : dateCreated;
    }
    get dateModified() {
        const dateModified = this.getField("dateModified") || null;
        return dateModified ? new Date(dateModified) : dateModified;
    }
    set dateModified(value) {
        this.changes.dateModified = new Date(value || undefined).toJSON();
    }
    get id() {
        return this.getField("_id");
    }
    set id(value) {
        this.setField("_id", value);
    }
    get _id() {
        return this.getField("_id");
    }
    set _id(value) {
        this.setField("_id", value);
    }
    static deduceModelAndName(ModelMaybe) {
        return __awaiter(this, void 0, void 0, function* () {
            if (ModelMaybe === null) {
                throw new Error("Model Name or Model Missing");
            }
            let Model = null;
            let modelName = null;
            if (typeof ModelMaybe === "string") {
                Model = yield Object(_ModelNameToModel__WEBPACK_IMPORTED_MODULE_1__["default"])(ModelMaybe);
                modelName = ModelMaybe;
            }
            else if (typeof ModelMaybe === "function") {
                Model = ModelMaybe;
                modelName = RESTModel.getModelName(ModelMaybe);
            }
            else {
                throw new Error(`Invalid first agument, expected string or function, got ${ModelMaybe}`);
            }
            if (typeof modelName !== "string") {
                throw new Error(`Missing model name from ${Model}`);
            }
            if (typeof Model !== "function") {
                throw new Error(`Model name (${modelName}) did not map to constructor`);
            }
            return {
                Model,
                modelName
            };
        });
    }
    static isValidId(id) {
        const pattern = RegExp("^([0-9a-fA-F]{24}|[0-9a-fA-F]{12})$", "g");
        return (typeof id === "string" && pattern.test(id));
    }
    static getModelName(Model) {
        if (Model == null) {
            return null;
        }
        if (Model.ModelName) {
            return Model.ModelName;
        }
        if (Model.constructor && (Model.constructor.ModelName)) {
            return Model.constructor.ModelName;
        }
    }
    static findByIdBase(ModelMaybe, id, hasWebSocket = false) {
        return __awaiter(this, void 0, void 0, function* () {
            if (RESTModel.isValidId(id)) {
                if (RESTModel.Cache.has(id)) {
                    const cache = RESTModel.Cache.get(id);
                    if (cache && new Date(cache.expiration) < new Date()) {
                        return cache;
                    }
                }
                let data = null;
                const { Model, modelName } = yield RESTModel.deduceModelAndName(ModelMaybe);
                if (_API__WEBPACK_IMPORTED_MODULE_0__["default"].useSocketIO && _API__WEBPACK_IMPORTED_MODULE_0__["default"].ShouldUseSocketIO && hasWebSocket) {
                    data = yield new Promise((resolve, reject) => _API__WEBPACK_IMPORTED_MODULE_0__["default"].getSocket().then((socket) => {
                        if (socket) {
                            socket.emit(`/API/${modelName}/Retreive`, id, resolve);
                        }
                    }, reject));
                }
                if (!data) {
                    data = yield _API__WEBPACK_IMPORTED_MODULE_0__["default"].call("GET", `/API/${modelName}/${id}`, null);
                }
                if (data && RESTModel.isValidId(data._id)) {
                    data = new Model(data);
                    RESTModel.Cache.set(data._id, data);
                    return data;
                }
            }
            return null;
        });
    }
    static findOneBase(ModelMaybe, criteria = {}, hasWebSocket = false) {
        return __awaiter(this, void 0, void 0, function* () {
            if (criteria === null) {
                criteria = {};
            }
            if (Array.from(Object.keys(criteria)).length === 1 && typeof criteria._id === "string") {
                const id = criteria._id;
                if (RESTModel.Cache.has(id)) {
                    const cache = RESTModel.Cache.get(id);
                    if (cache && new Date(cache.expiration) < new Date()) {
                        return cache;
                    }
                }
            }
            let data = null;
            const { Model, modelName } = yield RESTModel.deduceModelAndName(ModelMaybe);
            const route = `/API/${modelName}/FindOne`;
            if (_API__WEBPACK_IMPORTED_MODULE_0__["default"].useSocketIO && _API__WEBPACK_IMPORTED_MODULE_0__["default"].ShouldUseSocketIO && hasWebSocket) {
                const socket = yield _API__WEBPACK_IMPORTED_MODULE_0__["default"].getSocket();
                if (socket) {
                    data = yield new Promise((resolve, reject) => {
                        try {
                            socket.emit(route, criteria, resolve);
                        }
                        catch (e) {
                            reject(e);
                        }
                    });
                }
            }
            if (!data) {
                data = yield _API__WEBPACK_IMPORTED_MODULE_0__["default"].call("GET", route, criteria);
            }
            if (data && RESTModel.isValidId(data._id)) {
                data = new Model(data);
                RESTModel.Cache.set(data._id, data);
                return data;
            }
            return null;
        });
    }
    static findManyBase(ModelMaybe, criteria = {}, hasWebSocket = false) {
        return __awaiter(this, void 0, void 0, function* () {
            if (criteria === null) {
                criteria = {};
            }
            if (Array.from(Object.keys(criteria)).length === 1 && Array.isArray((criteria._id || criteria.id))) {
                const items = [];
                (criteria._id || criteria.id).forEach((id) => {
                    if (typeof id === "string" && RESTModel.Cache.has(id)) {
                        const cache = RESTModel.Cache.get(id);
                        if (cache && new Date(cache.expiration) < new Date()) {
                            items.push(cache);
                        }
                    }
                });
                if (items.length === (criteria._id || criteria.id)) {
                    return items;
                }
            }
            let data = null;
            const { Model, modelName } = yield RESTModel.deduceModelAndName(ModelMaybe);
            const route = `/API/${modelName}/FindMany`;
            if (_API__WEBPACK_IMPORTED_MODULE_0__["default"].useSocketIO && _API__WEBPACK_IMPORTED_MODULE_0__["default"].ShouldUseSocketIO && hasWebSocket) {
                data = yield new Promise((resolve, reject) => _API__WEBPACK_IMPORTED_MODULE_0__["default"].getSocket().then((socket) => {
                    if (socket) {
                        socket.emit(route, criteria, resolve);
                    }
                }, reject));
            }
            criteria = criteria || {};
            if (!data) {
                data = yield _API__WEBPACK_IMPORTED_MODULE_0__["default"].call("GET", route, criteria);
            }
            if (Array.isArray(data)) {
                return data.map((itemData) => {
                    const item = new Model(itemData);
                    RESTModel.Cache.set(item._id, item);
                    return item;
                });
            }
            return [];
        });
    }
    setField(name, value) {
        if (this) {
            const currentValue = this.getField(name) || undefined;
            if (currentValue !== value) {
                this.changes[name] = value;
                this.dateModified = Date.now();
            }
        }
    }
    getField(name) {
        if (this) {
            let data = this.changes[name];
            if (typeof data !== "undefined") {
                return data;
            }
            data = this.document[name];
            if (typeof data !== "undefined") {
                return data;
            }
        }
        return null;
    }
    toObject() {
        const object = this.valid() ? Object.assign({}, this.changes, this.document) : null;
        if (typeof object === "object" && object) {
            if (typeof object.id !== "undefined") {
                delete object.id;
            }
            if (typeof object._id !== "undefined") {
                object._id = (object._id.toString() ? object._id : null);
            }
        }
        return object;
    }
    toString() {
        const object = this.toObject();
        return JSON.stringify(object);
    }
    valid() {
        if (!RESTModel.isValidId(this.id)) {
            throw new Error(`Invalid id: ${this.id}`);
        }
        if (!this.dateModified || isNaN(Date.parse(this.dateModified))) {
            throw new Error(`Invalid dateModified: ${this.dateModified}`);
        }
        if (!this.dateCreated || isNaN(Date.parse(this.dateCreated))) {
            throw new Error(`Invalid dateCreated: ${this.dateCreated}`);
        }
        return true;
    }
    isValid() {
        if (!RESTModel.isValidId(this.id)) {
            return false;
        }
        if (!this.dateModified || isNaN(Date.parse(this.dateModified))) {
            return false;
        }
        if (!this.dateCreated || isNaN(Date.parse(this.dateCreated))) {
            return false;
        }
        return true;
    }
    assign(data = {}) {
        Object.assign(this.changes, data);
        return this;
    }
    save(hasWebSocket = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const modelName = this.constructor.ModelName;
            let response = null;
            const id = this.document._id || null;
            const data = this.changes;
            Object.keys(this.changes).forEach((key) => {
                if (data[key] === this.document[key]) {
                    delete data[key];
                }
            });
            data.id = this.changes._id || this.document._id || null;
            if (_API__WEBPACK_IMPORTED_MODULE_0__["default"].useSocketIO && _API__WEBPACK_IMPORTED_MODULE_0__["default"].ShouldUseSocketIO && hasWebSocket) {
                if (RESTModel.isValidId(id)) {
                    response = yield new Promise((resolve, reject) => _API__WEBPACK_IMPORTED_MODULE_0__["default"].getSocket().then((socket) => {
                        if (socket) {
                            socket.emit(`/API/${modelName}/Update`, data, resolve);
                        }
                    }, reject));
                }
                else {
                    response = yield new Promise((resolve, reject) => _API__WEBPACK_IMPORTED_MODULE_0__["default"].getSocket().then((socket) => {
                        if (socket) {
                            socket.emit(`/API/${modelName}/Create`, data, resolve);
                        }
                    }, reject));
                }
            }
            else {
                if (RESTModel.isValidId(id)) {
                    response = yield _API__WEBPACK_IMPORTED_MODULE_0__["default"].call("PUT", `/API/${modelName}/${id}`, data);
                }
                else {
                    response = yield _API__WEBPACK_IMPORTED_MODULE_0__["default"].call("POST", `/API/${modelName}/`, data);
                }
            }
            if (response && response._id) {
                this.document = response;
                this.changes = {};
                RESTModel.Cache.delete(id);
                RESTModel.Cache.set(response._id, this);
                return this;
            }
            throw new Error(`returned ${response}`);
        });
    }
    remove(hasWebSocket = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = this._id || "";
            if (RESTModel.isValidId(id)) {
                let response = null;
                const modelName = this.constructor.ModelName;
                if (_API__WEBPACK_IMPORTED_MODULE_0__["default"].useSocketIO && _API__WEBPACK_IMPORTED_MODULE_0__["default"].ShouldUseSocketIO && hasWebSocket) {
                    response = yield new Promise((resolve, reject) => _API__WEBPACK_IMPORTED_MODULE_0__["default"].getSocket().then((socket) => {
                        if (socket) {
                            socket.emit(`/API/${modelName}/Delete`, id, (res) => resolve(res));
                        }
                    }, reject));
                }
                else {
                    response = yield _API__WEBPACK_IMPORTED_MODULE_0__["default"].call("DELETE", `/API/${modelName}/${id}`, null);
                }
                RESTModel.Cache.set(id, null);
                return response;
            }
            throw new Error(`Invalid id: ${id}`);
        });
    }
}
RESTModel.ModelName = "RESTModel";
RESTModel.Cache = new Map();


/***/ }),

/***/ "./src/Request.ts":
/*!************************!*\
  !*** ./src/Request.ts ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Request; });
/* harmony import */ var _API__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./API */ "./src/API.ts");
/* harmony import */ var _RESTModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RESTModel */ "./src/RESTModel.ts");
/**
 * Created by corynull on Nov 30 2017 5:27 AM.
 */
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


class Request extends _RESTModel__WEBPACK_IMPORTED_MODULE_1__["default"] {
    get to() {
        return this.getField("to");
    }
    set to(value) {
        this.setField("to", value);
    }
    get from() {
        return this.getField("from");
    }
    set from(value) {
        this.setField("from", value);
    }
    get status() {
        return this.getField("status");
    }
    set status(value) {
        this.setField("status", value);
    }
    get options() {
        return this.getField("options");
    }
    set options(value) {
        this.setField("options", value);
    }
    get type() {
        return this.getField("type");
    }
    set type(value) {
        this.setField("type", value);
    }
    get userData() {
        return this.getField("userData");
    }
    set userData(value) {
        this.setField("userData", value);
    }
    get emailSent() {
        return this.getField("emailSent");
    }
    set emailSent(value) {
        this.setField("emailSent", value);
    }
    static createBandOwnershipRequest(band, from, to) {
        return new Promise((resolve, reject) => {
            _API__WEBPACK_IMPORTED_MODULE_0__["default"].call("POST", "/API/Request", {
                from,
                to,
                type: "BandOwnership",
                userData: {
                    bandId: band
                }
            }).then((data) => {
                resolve(new Request(data));
            }, reject);
        });
    }
    static createVenueOwnershipRequest(venue, from, to) {
        return new Promise((resolve, reject) => {
            _API__WEBPACK_IMPORTED_MODULE_0__["default"].call("POST", "/API/Request", {
                from,
                to,
                type: "VenueOwnership",
                userData: {
                    venueId: venue
                }
            }).then((data) => {
                resolve(new Request(data));
            }, reject);
        });
    }
    static createGigNegotiation(gig, from, to) {
        return new Promise((resolve, reject) => {
            _API__WEBPACK_IMPORTED_MODULE_0__["default"].call("POST", "/API/Request", {
                from,
                to,
                type: "GigNegotiation",
                userData: {
                    gigId: gig
                }
            }).then((data) => {
                resolve(new Request(data));
            }, reject);
        });
    }
    static getAllOwned() {
        return _RESTModel__WEBPACK_IMPORTED_MODULE_1__["default"].findManyBase(Request, null);
    }
    static findById(id) {
        return _RESTModel__WEBPACK_IMPORTED_MODULE_1__["default"].findByIdBase(Request, id);
    }
    execute(option) {
        return __awaiter(this, void 0, void 0, function* () {
            const request = yield _API__WEBPACK_IMPORTED_MODULE_0__["default"].call("POST", `/API/Request/${this._id}/${option}`, null);
            this.assign(request);
            return this;
        });
    }
}
Request.ModelName = "Request";


/***/ }),

/***/ "./src/TwitterAccount.ts":
/*!*******************************!*\
  !*** ./src/TwitterAccount.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TwitterAccount; });
/* harmony import */ var _API__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./API */ "./src/API.ts");
/* harmony import */ var _RESTModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RESTModel */ "./src/RESTModel.ts");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./User */ "./src/User.ts");
/**
 * Created by corynull on 5/17/17.
 */



class TwitterAccount extends _RESTModel__WEBPACK_IMPORTED_MODULE_1__["default"] {
    get userId() {
        return this.getField("userId");
    }
    set userId(value) {
        this.setField("userId", value);
    }
    get accessToken() {
        return this.getField("accessToken");
    }
    set accessToken(value) {
        this.setField("accessToken", value);
    }
    get tokenSecret() {
        return this.getField("tokenSecret");
    }
    set tokenSecret(value) {
        this.setField("tokenSecret", value);
    }
    get profile() {
        return this.getField("profile");
    }
    set profile(value) {
        this.setField("profile", value);
    }
    get accountId() {
        return this.getField("accountId");
    }
    set accountId(value) {
        this.setField("accountId", value);
    }
    static findById(id) {
        return new Promise((resolve, reject) => {
            if (typeof id === "string" && id !== "") {
                _API__WEBPACK_IMPORTED_MODULE_0__["default"].call("GET", `/API/TwitterAccount/${id}`, null).then((response) => {
                    const account = response || null;
                    if (account) {
                        resolve(new TwitterAccount(account));
                    }
                    else {
                        reject(new Error(`${account} returned`));
                    }
                }, reject);
            }
            else {
                resolve();
            }
        });
    }
    getUser() {
        return _RESTModel__WEBPACK_IMPORTED_MODULE_1__["default"].findByIdBase(_User__WEBPACK_IMPORTED_MODULE_2__["default"], this.userId, true);
    }
    userIsOwner(user) {
        if (typeof user === "string") {
            return user === this.userId;
        }
        if (typeof user === "function") {
            return user._id === this.userId;
        }
        return false;
    }
    goToTwitterAccount() {
        if (typeof window !== "undefined") {
            // We are on a browser
            window.location.href = `https://twitter.com?profile_id=${this.accountId}`;
        }
    }
    isValid() {
        if (!super.isValid()) {
            return false;
        }
        if (!this.userId || typeof this.userId !== "string") {
            return false;
        }
        if (!this.profile || typeof this.profile !== "object") {
            return false;
        }
        return true;
    }
}
TwitterAccount.ModelName = "TwitterAccount";


/***/ }),

/***/ "./src/Upload.ts":
/*!***********************!*\
  !*** ./src/Upload.ts ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Upload; });
/* harmony import */ var _RESTModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RESTModel */ "./src/RESTModel.ts");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./User */ "./src/User.ts");
/**
 * Created by corynull on 4/10/17.
 */
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


class Upload extends _RESTModel__WEBPACK_IMPORTED_MODULE_0__["default"] {
    get fileName() {
        return this.getField("fileName");
    }
    set fileName(value) {
        this.setField("fileName", value);
    }
    get fileData() {
        return this.getField("fileData");
    }
    set fileData(value) {
        this.setField("fileData", value);
    }
    get title() {
        return this.getField("title");
    }
    set title(value) {
        this.setField("title", value);
    }
    get description() {
        return this.getField("description");
    }
    set description(value) {
        this.setField("description", value);
    }
    get owners() {
        return this.getField("owners");
    }
    set owners(value) {
        this.setField("owners", value);
    }
    static uploadFile(dataUrl, fileName) {
        return __awaiter(this, void 0, void 0, function* () {
            let upload = new Upload({ fileData: dataUrl, fileName });
            upload = yield upload.save(true);
            return upload;
        });
    }
    static findById(id) {
        return _RESTModel__WEBPACK_IMPORTED_MODULE_0__["default"].findByIdBase(Upload, id);
    }
    static findMany(criteria) {
        return _RESTModel__WEBPACK_IMPORTED_MODULE_0__["default"].findManyBase(Upload, criteria, true);
    }
    static getAllOwned() {
        return _RESTModel__WEBPACK_IMPORTED_MODULE_0__["default"].findManyBase(Upload, null, true);
    }
    getOwners() {
        const owners = Array.from(this.owners);
        if (owners.length !== 0) {
            return _RESTModel__WEBPACK_IMPORTED_MODULE_0__["default"].findManyBase(_User__WEBPACK_IMPORTED_MODULE_1__["default"], {
                _id: owners
            }, true);
        }
        return Promise.resolve([]);
    }
    userIsOwner(user) {
        if (Array.isArray(this.owners)) {
            let userId;
            if (typeof user === "string") {
                userId = user;
            }
            else if (typeof user === "object" && user) {
                userId = user._id;
            }
            return this.owners.find((id) => id === userId) !== undefined;
        }
        return false;
    }
    isValid() {
        if (!super.isValid()) {
            return false;
        }
        if (!this.title) {
            return false;
        }
        if (!this.description) {
            return false;
        }
        if (!this.fileData) {
            return false;
        }
        if (!this.fileName) {
            return false;
        }
        if (!Array.isArray(this.owners)) {
            return false;
        }
        if (this.owners.length === 0) {
            return false;
        }
        return true;
    }
}
Upload.ModelName = "Upload";


/***/ }),

/***/ "./src/User.ts":
/*!*********************!*\
  !*** ./src/User.ts ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return User; });
/* harmony import */ var _API__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./API */ "./src/API.ts");
/* harmony import */ var _Band__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Band */ "./src/Band.ts");
/* harmony import */ var _Conversation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Conversation */ "./src/Conversation.ts");
/* harmony import */ var _FacebookAccount__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FacebookAccount */ "./src/FacebookAccount.ts");
/* harmony import */ var _Gig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Gig */ "./src/Gig.ts");
/* harmony import */ var _Location__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Location */ "./src/Location.ts");
/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Page */ "./src/Page.ts");
/* harmony import */ var _Post__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Post */ "./src/Post.ts");
/* harmony import */ var _RESTModel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./RESTModel */ "./src/RESTModel.ts");
/* harmony import */ var _TwitterAccount__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./TwitterAccount */ "./src/TwitterAccount.ts");
/* harmony import */ var _Upload__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Upload */ "./src/Upload.ts");
/* harmony import */ var _Venue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Venue */ "./src/Venue.ts");
/**
 * Created by corynull on 4/1/17.
 */
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};












class User extends _RESTModel__WEBPACK_IMPORTED_MODULE_8__["default"] {
    get password() {
        return this.getField("password");
    }
    set password(value) {
        this.setField("password", value);
    }
    get confirmPassword() {
        return this.getField("confirmPassword");
    }
    set confirmPassword(value) {
        this.setField("confirmPassword", value);
    }
    get icon() {
        return this.getField("icon");
    }
    set icon(value) {
        this.setField("icon", value);
    }
    set active(value) {
        this.setField("active", value);
    }
    get active() {
        return this.getField("active");
    }
    set admin(value) {
        this.setField("admin", value);
    }
    get admin() {
        return this.getField("admin") === true;
    }
    get firstName() {
        return this.getField("firstName");
    }
    set firstName(value) {
        this.setField("firstName", value);
    }
    get middleName() {
        return this.getField("middleName");
    }
    set middleName(value) {
        this.setField("middleName", value);
    }
    get lastName() {
        return this.getField("lastName");
    }
    set lastName(value) {
        this.setField("lastName", value);
    }
    get birthday() {
        const birthday = this.getField("birthday") || null;
        return birthday ? new Date(birthday) : birthday;
    }
    set birthday(value) {
        this.setField("birthday", value.toJSON());
    }
    get country() {
        return this.getField("country");
    }
    set country(value) {
        this.setField("country", value);
    }
    get bandManager() {
        return this.getField("bandManager") === true;
    }
    set bandManager(value) {
        this.setField("bandManager", value);
    }
    get venueManager() {
        return this.getField("venueManager") === true;
    }
    set venueManager(value) {
        this.setField("venueManager", value);
    }
    get betaFeatureUser() {
        return this.getField("betaFeatureUser") === true;
    }
    set betaFeatureUser(value) {
        this.setField("betaFeatureUser", value);
    }
    get sendAnonymousReports() {
        return this.getField("sendAnonymousReports") === true;
    }
    set sendAnonymousReports(value) {
        this.setField("sendAnonymousReports", value);
    }
    get sendErrorReports() {
        return this.getField("sendErrorReports") === true;
    }
    set sendErrorReports(value) {
        this.setField("sendErrorReports", value);
    }
    get sendEmails() {
        return this.getField("sendEmails") === true;
    }
    set sendEmails(value) {
        this.setField("sendEmails", value);
    }
    get sendPromotions() {
        return this.getField("sendPromotions") === true;
    }
    set sendPromotions(value) {
        this.setField("sendPromotions", value);
    }
    get useCookies() {
        return this.getField("useCookies") === true;
    }
    set useCookies(value) {
        this.setField("useCookies", value);
    }
    get fullName() {
        return `${this.firstName || ""} ${this.middleName || ""} ${this.lastName ||
            ""}`;
    }
    get email() {
        return this.getField("email");
    }
    set email(value) {
        this.setField("email", value);
    }
    get salt() {
        return this.getField("salt");
    }
    get hash() {
        return this.getField("hash");
    }
    get facebook() {
        return this.getField("facebook");
    }
    set facebook(value) {
        this.setField("facebook", value);
    }
    get twitter() {
        return this.getField("twitter");
    }
    set twitter(value) {
        this.setField("twitter", value);
    }
    get description() {
        return this.getField("description");
    }
    set description(value) {
        this.setField("description", value);
    }
    get emailVerified() {
        return this.getField("emailVerified");
    }
    set emailVerified(value) {
        this.setField("emailVerified", value);
    }
    get attempts() {
        return this.getField("attempts");
    }
    get lastLoginIP() {
        return this.getField("lastLoginIP");
    }
    set lastLoginIP(value) {
        this.setField("lastLoginIP", value);
    }
    get lastLogin() {
        const lastLogin = this.getField("lastLogin") || null;
        return lastLogin ? new Date(lastLogin) : lastLogin;
    }
    set lastLogin(value) {
        this.setField("lastLogin", value.toJSON());
    }
    get canContact() {
        return this.getField("canContact") === true;
    }
    set canContact(value) {
        this.setField("canContact", value);
    }
    get canFind() {
        return this.getField("canFind") === true;
    }
    set canFind(value) {
        this.setField("canFind", value);
    }
    get options() {
        return this.getField("options");
    }
    set options(value) {
        this.setField("options", value);
    }
    static verifyEmail(id, secret) {
        return _API__WEBPACK_IMPORTED_MODULE_0__["default"].call("GET", "/API/User/Verify", {
            id,
            secret
        });
    }
    static sendEmailVerification() {
        return _API__WEBPACK_IMPORTED_MODULE_0__["default"].call("POST", "/API/User/Verify", null);
    }
    static getAllConversations() {
        return _RESTModel__WEBPACK_IMPORTED_MODULE_8__["default"].findManyBase(_Conversation__WEBPACK_IMPORTED_MODULE_2__["default"], null, true);
    }
    static getAllNotifications() {
        return _RESTModel__WEBPACK_IMPORTED_MODULE_8__["default"].findManyBase("Notification", null, true);
    }
    static getAllPosts() {
        return _RESTModel__WEBPACK_IMPORTED_MODULE_8__["default"].findManyBase(_Post__WEBPACK_IMPORTED_MODULE_7__["default"], null, true);
    }
    static getAllBands() {
        return _RESTModel__WEBPACK_IMPORTED_MODULE_8__["default"].findManyBase(_Band__WEBPACK_IMPORTED_MODULE_1__["default"], null, true);
    }
    static getAllVenues() {
        return _RESTModel__WEBPACK_IMPORTED_MODULE_8__["default"].findManyBase(_Venue__WEBPACK_IMPORTED_MODULE_11__["default"], null, true);
    }
    static getAllGigs() {
        return _RESTModel__WEBPACK_IMPORTED_MODULE_8__["default"].findManyBase(_Gig__WEBPACK_IMPORTED_MODULE_4__["default"], null, true);
    }
    static getAllUploads() {
        return _RESTModel__WEBPACK_IMPORTED_MODULE_8__["default"].findManyBase(_Upload__WEBPACK_IMPORTED_MODULE_10__["default"], null, true);
    }
    static findFacebookPages(term) {
        return new Promise((resolve, reject) => {
            if (term === "") {
                resolve();
            }
            else {
                _API__WEBPACK_IMPORTED_MODULE_0__["default"].call("GET", "/API/FacebookAccount/FindPages", { term }).then(resolve, reject);
            }
        });
    }
    static search(q, modelName = null, skip = 0, limit = Number.POSITIVE_INFINITY) {
        return new Promise((resolve, reject) => {
            if (q === "" || q === undefined) {
                resolve();
            }
            else {
                const data = {
                    limit: undefined,
                    model: undefined,
                    q: undefined,
                    skip: undefined
                };
                data.q = q;
                if (modelName !== null && modelName !== "Any") {
                    data.model = modelName;
                }
                if (Number.isFinite(Number(skip))) {
                    data.skip = Number(skip);
                }
                if (Number.isFinite(Number(limit))) {
                    data.limit = Number(limit);
                }
                const Return = (results) => {
                    const query = results.query;
                    const totalFound = results.totalFound;
                    if (!query) {
                        reject(query);
                    }
                    const bands = [];
                    const venues = [];
                    const users = [];
                    const pages = [];
                    const locations = [];
                    const uploads = [];
                    query.forEach((item) => __awaiter(this, void 0, void 0, function* () {
                        if (item && item.ModelName) {
                            const mName = item.ModelName;
                            if (mName === "Band") {
                                bands.push(new _Band__WEBPACK_IMPORTED_MODULE_1__["default"](item));
                            }
                            else if (mName === "Venue") {
                                venues.push(new _Venue__WEBPACK_IMPORTED_MODULE_11__["default"](item));
                            }
                            else if (mName === "User") {
                                users.push(new User(item));
                            }
                            else if (mName === "Page") {
                                pages.push(new _Page__WEBPACK_IMPORTED_MODULE_6__["default"](item));
                            }
                            else if (mName === "Location") {
                                locations.push(new _Location__WEBPACK_IMPORTED_MODULE_5__["default"](item));
                            }
                            else if (mName === "Upload") {
                                uploads.push(new _Upload__WEBPACK_IMPORTED_MODULE_10__["default"](item));
                            }
                        }
                    }));
                    const sorted = {
                        bands,
                        locations,
                        pages,
                        totalFound,
                        uploads,
                        users,
                        venues
                    };
                    resolve(sorted);
                };
                if (_API__WEBPACK_IMPORTED_MODULE_0__["default"].useSocketIO && _API__WEBPACK_IMPORTED_MODULE_0__["default"].ShouldUseSocketIO) {
                    _API__WEBPACK_IMPORTED_MODULE_0__["default"].getSocket().then((socket) => {
                        if (socket) {
                            socket.emit("/API/TextSearch", data, Return);
                        }
                    }, reject);
                }
                else {
                    _API__WEBPACK_IMPORTED_MODULE_0__["default"].call("GET", "/API/TextSearch", data).then(Return, reject);
                }
            }
        });
    }
    static findMany(criteria) {
        return _RESTModel__WEBPACK_IMPORTED_MODULE_8__["default"].findManyBase(User, criteria, true);
    }
    static findOne(criteria) {
        return _RESTModel__WEBPACK_IMPORTED_MODULE_8__["default"].findOneBase(User, criteria, true);
    }
    static onChange(callback) {
        const id = Date.now();
        User.Callbacks.set(id, callback);
        return () => {
            User.Callbacks.delete(id);
        };
    }
    static setUser(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (typeof data === "object" && data) {
                    User.Current = new User(data);
                    if (_API__WEBPACK_IMPORTED_MODULE_0__["default"].SessionStorageSupported) {
                        sessionStorage.setItem("user", JSON.stringify(data));
                    }
                    User.Callbacks.forEach((callback) => callback(User.Current));
                }
                else {
                    User.Current = null;
                    _API__WEBPACK_IMPORTED_MODULE_0__["default"].token = null;
                    if (_API__WEBPACK_IMPORTED_MODULE_0__["default"].SessionStorageSupported) {
                        sessionStorage.removeItem("user");
                    }
                    User.Callbacks.forEach((callback) => callback(null));
                }
            }
            catch (e) {
                console.error(e);
            }
            return User.Current;
        });
    }
    static getUser(force) {
        return __awaiter(this, void 0, void 0, function* () {
            let data = null;
            const dateNow = new Date();
            if (!force && _API__WEBPACK_IMPORTED_MODULE_0__["default"].expires && dateNow < _API__WEBPACK_IMPORTED_MODULE_0__["default"].expires) {
                if (User.Current !== null) {
                    /* If we already have the current user cached, return it... */
                    return User.Current;
                }
                else if (_API__WEBPACK_IMPORTED_MODULE_0__["default"].SessionStorageSupported) {
                    /* If the user is stored in session storage. */
                    data = JSON.parse(sessionStorage.getItem("user") || "");
                    if (data) {
                        return User.setUser(data);
                    }
                }
            }
            if (_API__WEBPACK_IMPORTED_MODULE_0__["default"].useSocketIO && _API__WEBPACK_IMPORTED_MODULE_0__["default"].ShouldUseSocketIO) {
                data = yield new Promise((resolve, reject) => {
                    _API__WEBPACK_IMPORTED_MODULE_0__["default"].getSocket().then((socket) => {
                        if (socket) {
                            socket.emit("/API/User/Retreive", resolve);
                        }
                    }, reject);
                });
            }
            else {
                data = yield _API__WEBPACK_IMPORTED_MODULE_0__["default"].call("GET", "/API/User", null);
            }
            if (data) {
                return User.setUser(data);
            }
            return User.setUser(null);
        });
    }
    static findById(id) {
        return _RESTModel__WEBPACK_IMPORTED_MODULE_8__["default"].findByIdBase(User, id, true);
    }
    static connectFacebook() {
        window.location.href = `${_API__WEBPACK_IMPORTED_MODULE_0__["default"].rootURL}/API/Auth/Facebook`;
    }
    static facebookLogIn() {
        window.location.href = `${_API__WEBPACK_IMPORTED_MODULE_0__["default"].rootURL}/API/Login/Facebook`;
    }
    static payPalLogIn() {
        window.location.href = `${_API__WEBPACK_IMPORTED_MODULE_0__["default"].rootURL}/API/Auth/PayPal`;
    }
    static userLogIn(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!email) {
                throw new Error("No email");
            }
            else if (!password) {
                throw new Error("No password");
            }
            else {
                let response = null;
                if (_API__WEBPACK_IMPORTED_MODULE_0__["default"].useSocketIO && _API__WEBPACK_IMPORTED_MODULE_0__["default"].ShouldUseSocketIO) {
                    response = yield new Promise((resolve, reject) => {
                        _API__WEBPACK_IMPORTED_MODULE_0__["default"].getSocket().then((socket) => {
                            if (socket) {
                                socket.emit("/API/User/SignIn", {
                                    email,
                                    password
                                }, resolve);
                            }
                        }, reject);
                    });
                }
                else {
                    response = yield _API__WEBPACK_IMPORTED_MODULE_0__["default"].call("POST", "/API/User/SignIn", {
                        email,
                        password
                    });
                }
                // TODO: Create error for unauthorized access vs general error
                if (response && response.user && response.token) {
                    _API__WEBPACK_IMPORTED_MODULE_0__["default"].expires = response.expires;
                    _API__WEBPACK_IMPORTED_MODULE_0__["default"].token = response.token.toString();
                    return User.setUser(response.user);
                }
                else {
                    throw new Error(`Unauthorized`);
                }
            }
        });
    }
    static userLogOut() {
        return __awaiter(this, void 0, void 0, function* () {
            let response = null;
            if (_API__WEBPACK_IMPORTED_MODULE_0__["default"].useSocketIO && _API__WEBPACK_IMPORTED_MODULE_0__["default"].ShouldUseSocketIO) {
                response = yield new Promise((resolve, reject) => {
                    _API__WEBPACK_IMPORTED_MODULE_0__["default"].getSocket().then((socket) => {
                        if (socket) {
                            socket.emit("/API/User/SignOut", null, resolve);
                        }
                    }, reject);
                });
            }
            else {
                response = yield _API__WEBPACK_IMPORTED_MODULE_0__["default"].call("POST", "/API/User/SignOut", null);
            }
            const user = yield User.setUser(null);
            if (user && user.valid()) {
                throw new Error(`${JSON.stringify(user)} returned, failed to log out?`);
            }
            else {
                return user;
            }
        });
    }
    static sendPasswordResetEmail(email) {
        return _API__WEBPACK_IMPORTED_MODULE_0__["default"].call("POST", "/User/Reset", { email });
    }
    static registerUser(userData) {
        return new Promise((resolve, reject) => {
            if (userData && typeof userData === "object") {
                if (userData.email) {
                    const re = new RegExp([`^(([^<>()[\].,;:\s@"]+`,
                        `(\.[^<>()[\].,;:\s@"]+)*)|(".+"))`,
                        `@(([^<>()[\].,;:\s@"]+\.)+`,
                        `[^<>()[\].,;:\s@"]{2,})$`].join(""), "i");
                    if (re[Symbol.search](userData.email) !== 0) {
                        return reject(new Error("Invalid email address"));
                    }
                }
                else {
                    return reject(new Error("Email is required"));
                }
                if (userData.password) {
                    const symbolTest = /[^a-zA-Z0-9]/gu;
                    const numberTest = /[0-9]/g;
                    const lowercasePassword = userData.password.toLowerCase();
                    if (userData.password === "") {
                        return reject(new Error("Password is required"));
                    }
                    else if (userData.password.length < 8) {
                        return reject(new Error("Password is too short"));
                    }
                    else if (userData.password.length > 256) {
                        return reject(new Error("Password is too long"));
                    }
                    else if (!symbolTest.test(userData.password)) {
                        return reject(new Error("Password does not contain at least one symbol"));
                    }
                    else if (!numberTest.test(userData.password)) {
                        return reject(new Error("Password does not contain at least one number"));
                    }
                    else if (userData.firstName &&
                        userData.firstName.length !== 0 &&
                        lowercasePassword.indexOf(userData.firstName.toLowerCase()) !== -1) {
                        return reject(new Error("Password can not contain your first name"));
                    }
                    else if (userData.lastName &&
                        userData.lastName.length !== 0 &&
                        lowercasePassword.indexOf(userData.lastName.toLowerCase()) !== -1) {
                        return reject(new Error("Password can not contain your last name"));
                    }
                }
                else {
                    return reject(new Error("Password is required"));
                }
                if (userData.firstName) {
                    if (userData.firstName.length !== 0) {
                        if (userData.firstName[0] === userData.firstName[0].toLowerCase()) {
                            return reject(new Error("First name is not title case"));
                        }
                    }
                    else {
                        return reject(new Error("First name is required"));
                    }
                }
                else {
                    return reject(new Error("First name is required"));
                }
                if (userData.lastName) {
                    if (userData.lastName.length !== 0) {
                        if (userData.lastName[0] === userData.lastName[0].toLowerCase()) {
                            return reject(new Error("Last name is not title case"));
                        }
                    }
                    else {
                        return reject(new Error("Last name is required"));
                    }
                }
                else {
                    return reject(new Error("Last name is required"));
                }
            }
            else {
                return reject(new Error("User data is not an object"));
            }
            if (_API__WEBPACK_IMPORTED_MODULE_0__["default"].useSocketIO && _API__WEBPACK_IMPORTED_MODULE_0__["default"].ShouldUseSocketIO) {
                return new Promise((res, rej) => {
                    _API__WEBPACK_IMPORTED_MODULE_0__["default"].getSocket().then((socket) => {
                        if (socket) {
                            socket.emit("/API/User/Create", userData, res);
                        }
                    }, rej);
                });
            }
            return _API__WEBPACK_IMPORTED_MODULE_0__["default"].call("POST", "/API/User", userData).then((data) => {
                if (data) {
                    User.setUser(data).then((user) => {
                        resolve(user);
                    }, reject);
                }
                else {
                    reject(new Error(`${JSON.stringify(data)} returned`));
                }
            }, reject);
        });
    }
    static NotifyAdminsOfError() {
        console.error("Not implemented yet.");
    }
    getIcon() {
        return _RESTModel__WEBPACK_IMPORTED_MODULE_8__["default"].findByIdBase(_Upload__WEBPACK_IMPORTED_MODULE_10__["default"], this.icon, true);
    }
    getTwitterAccount() {
        return _RESTModel__WEBPACK_IMPORTED_MODULE_8__["default"].findByIdBase(_TwitterAccount__WEBPACK_IMPORTED_MODULE_9__["default"], this.twitter);
    }
    getFacebookAccount() {
        return _RESTModel__WEBPACK_IMPORTED_MODULE_8__["default"].findByIdBase(_FacebookAccount__WEBPACK_IMPORTED_MODULE_3__["default"], this.facebook);
    }
    validatePassword(maybePassword) {
        const password = maybePassword || "";
        const decimalTest = /\d/;
        const symbolTest = /\W/;
        const lowercasePassword = password.toLowerCase();
        const lowercaseFirstName = this.firstName.toLowerCase();
        const lowercaseLastName = this.lastName.toLowerCase();
        if (password === "") {
            return new Error("Password missing");
        }
        else if (password.length < 8) {
            return new Error("Password is too short");
        }
        else if (password.length > 256) {
            return new Error("Password is too long");
        }
        else if (!decimalTest.test(password)) {
            return new Error("Password does not have atleast one number");
        }
        else if (!symbolTest.test(password)) {
            return new Error("Password does not have atleast one symbol");
        }
        else if (lowercasePassword.indexOf(lowercaseFirstName) !== -1) {
            return new Error("Password cannot contain your first name");
        }
        else if (lowercasePassword.indexOf(lowercaseLastName) !== -1) {
            return new Error("Password cannot contain your last name");
        }
        return null;
    }
    isValid() {
        if (!super.isValid()) {
            return false;
        }
        // Type checks
        if (typeof this.firstName !== "string") {
            return false;
        }
        if (typeof this.lastName !== "string") {
            return false;
        }
        if (typeof this.email !== "string") {
            return false;
        }
        // Value checks
        if (this.firstName === "") {
            return false;
        }
        if (this.lastName === "") {
            return false;
        }
        if (this.email === "") {
            return false;
        }
        // TODO: More validation checks?
        return true;
    }
    valid() {
        super.valid();
        // Type checks
        if (typeof this.firstName !== "string") {
            throw new Error(`Invalid firstName: ${this.firstName}`);
        }
        if (typeof this.lastName !== "string") {
            throw new Error(`Invalid lastName: ${this.lastName}`);
        }
        // Value checks
        if (this.firstName === "") {
            throw new Error("Blank firstName");
        }
        if (this.lastName === "") {
            throw new Error("Blank lastName");
        }
        // TODO: More validation checks?
        return true;
    }
    save() {
        return super.save(true);
    }
    remove() {
        return super.remove(true);
    }
}
User.ModelName = "User";
User.Current = null;
User.Callbacks = new Map();
User.agreement = null;
User.EmailRegex = new RegExp([`^(([^<>()[\].,;:\s@"]+`,
    `(\.[^<>()[\].,;:\s@"]+)*)|(".+"))`,
    `@(([^<>()[\].,;:\s@"]+\.)+`,
    `[^<>()[\].,;:\s@"]{2,})$`].join(""), "i");


/***/ }),

/***/ "./src/Venue.ts":
/*!**********************!*\
  !*** ./src/Venue.ts ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Venue; });
/* harmony import */ var _FacebookAccount__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FacebookAccount */ "./src/FacebookAccount.ts");
/* harmony import */ var _Gig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Gig */ "./src/Gig.ts");
/* harmony import */ var _Location__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Location */ "./src/Location.ts");
/* harmony import */ var _RESTModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RESTModel */ "./src/RESTModel.ts");
/* harmony import */ var _TwitterAccount__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TwitterAccount */ "./src/TwitterAccount.ts");
/* harmony import */ var _Upload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Upload */ "./src/Upload.ts");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./User */ "./src/User.ts");
/**
 * Created by corynull on 4/5/17.
 */







class Venue extends _RESTModel__WEBPACK_IMPORTED_MODULE_3__["default"] {
    get name() {
        return this.getField("name");
    }
    set name(value) {
        this.setField("name", value);
    }
    get description() {
        return this.getField("description");
    }
    set description(value) {
        this.setField("description", value);
    }
    get email() {
        return this.getField("email");
    }
    set email(value) {
        this.setField("email", value);
    }
    get website() {
        return this.getField("website");
    }
    set website(value) {
        this.setField("website", value);
    }
    get phone() {
        return this.getField("phone");
    }
    set phone(value) {
        this.setField("phone", value);
    }
    get location() {
        return this.getField("location");
    }
    set location(value) {
        this.setField("location", value);
    }
    get openCloseTimes() {
        return this.getField("openCloseTimes");
    }
    set openCloseTimes(value) {
        this.setField("openCloseTimes", value);
    }
    get icon() {
        return this.getField("icon");
    }
    set icon(value) {
        this.setField("icon", value);
    }
    get photos() {
        return this.getField("photos");
    }
    set photos(value) {
        this.setField("photos", value);
    }
    get owners() {
        return this.getField("owners");
    }
    set owners(value) {
        this.setField("owners", value);
    }
    get facebook() {
        return this.getField("facebook");
    }
    set facebook(value) {
        this.setField("facebook", value);
    }
    get facebookPageId() {
        return this.getField("facebookPageId");
    }
    set facebookPageId(value) {
        this.setField("facebookPageId", value);
    }
    get facebookPageName() {
        return this.getField("facebookPageName");
    }
    set facebookPageName(value) {
        this.setField("facebookPageName", value);
    }
    get facebookPageToken() {
        return this.getField("facebookPageToken");
    }
    set facebookPageToken(value) {
        this.setField("facebookPageToken", value);
    }
    get twitter() {
        return this.getField("twitter");
    }
    set twitter(value) {
        this.setField("twitter", value);
    }
    get google() {
        return this.getField("google");
    }
    set google(value) {
        this.setField("google", value);
    }
    static findOne(criteria) {
        return _RESTModel__WEBPACK_IMPORTED_MODULE_3__["default"].findOneBase(Venue, criteria, true);
    }
    static findMany(criteria) {
        return _RESTModel__WEBPACK_IMPORTED_MODULE_3__["default"].findManyBase(Venue, criteria, true);
    }
    static findById(id) {
        return _RESTModel__WEBPACK_IMPORTED_MODULE_3__["default"].findByIdBase(Venue, id, true);
    }
    static getAllOwned() {
        return _RESTModel__WEBPACK_IMPORTED_MODULE_3__["default"].findManyBase(Venue, null, true);
    }
    save() {
        return super.save(true);
    }
    remove() {
        return super.remove(true);
    }
    getIcon() {
        return _RESTModel__WEBPACK_IMPORTED_MODULE_3__["default"].findByIdBase(_Upload__WEBPACK_IMPORTED_MODULE_5__["default"], this.icon, true);
    }
    getPhotos() {
        const photos = Array.from(this.photos);
        if (photos.length !== 0) {
            return _RESTModel__WEBPACK_IMPORTED_MODULE_3__["default"].findManyBase(_Upload__WEBPACK_IMPORTED_MODULE_5__["default"], {
                _id: photos
            }, true);
        }
        return Promise.resolve([]);
    }
    getOwners() {
        const owners = Array.from(this.owners);
        if (owners.length !== 0) {
            return _RESTModel__WEBPACK_IMPORTED_MODULE_3__["default"].findManyBase(_User__WEBPACK_IMPORTED_MODULE_6__["default"], {
                _id: owners
            }, true);
        }
        return Promise.resolve([]);
    }
    getGigs() {
        return _Gig__WEBPACK_IMPORTED_MODULE_1__["default"].findByVenue(this._id);
    }
    getTwitterAccount() {
        return _RESTModel__WEBPACK_IMPORTED_MODULE_3__["default"].findByIdBase(_TwitterAccount__WEBPACK_IMPORTED_MODULE_4__["default"], this.twitter, true);
    }
    getFacebookAccount() {
        return _RESTModel__WEBPACK_IMPORTED_MODULE_3__["default"].findByIdBase(_FacebookAccount__WEBPACK_IMPORTED_MODULE_0__["default"], this.facebook, true);
    }
    getLocation() {
        return _RESTModel__WEBPACK_IMPORTED_MODULE_3__["default"].findByIdBase(_Location__WEBPACK_IMPORTED_MODULE_2__["default"], this.location, true);
    }
    isValid() {
        const self = this;
        if (!super.isValid()) {
            return false;
        }
        if (!_RESTModel__WEBPACK_IMPORTED_MODULE_3__["default"].isValidId(this.location)) {
            return false;
        }
        if (this.location === "") {
            return false;
        }
        if (typeof this.name !== "string") {
            return false;
        }
        if (this.name === "") {
            return false;
        }
        if (typeof this.description !== "string") {
            return false;
        }
        if (this.description === "") {
            return false;
        }
        if (this.description === "<p><br></p>") {
            return false;
        }
        if (!Array.isArray(this.owners)) {
            return false;
        }
        if (this.owners.length === 0) {
            return false;
        }
        if (!this.owners.every((owner) => self.userIsOwner(owner))) {
            return false;
        }
        return true;
    }
    // TODO: Create isOpen method
    userIsOwner(user) {
        if (Array.isArray(this.owners)) {
            let userId;
            if (typeof user === "string") {
                userId = user;
            }
            else if (typeof user === "object" && user) {
                userId = user._id;
            }
            return this.owners.find((id) => id === userId) !== undefined;
        }
        return false;
    }
}
Venue.ModelName = "Venue";


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["axios"]; }());

/***/ }),

/***/ "socket.io-client":
/*!***********************************!*\
  !*** external "socket.io-client" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["socket.io-client"]; }());

/***/ })

/******/ })));
//# sourceMappingURL=index.js.map