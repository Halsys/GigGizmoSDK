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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Created by corynull on 7/15/17.
 */
Object.defineProperty(exports, "__esModule", { value: true });
// Extras
var PropTypes_1 = __webpack_require__(/*! ./src/PropTypes */ "./src/PropTypes/index.ts");
exports.GigGizmoPropTypes = PropTypes_1.default;
var API_1 = __webpack_require__(/*! ./src/API */ "./src/API.ts");
exports.API = API_1.default;
// Models
var Band_1 = __webpack_require__(/*! ./src/Band */ "./src/Band.ts");
exports.Band = Band_1.default;
var Conversation_1 = __webpack_require__(/*! ./src/Conversation */ "./src/Conversation.ts");
exports.Conversation = Conversation_1.default;
var ErrorReport_1 = __webpack_require__(/*! ./src/ErrorReport */ "./src/ErrorReport.ts");
exports.ErrorReport = ErrorReport_1.default;
var FacebookAccount_1 = __webpack_require__(/*! ./src/FacebookAccount */ "./src/FacebookAccount.ts");
exports.FacebookAccount = FacebookAccount_1.default;
var Gig_1 = __webpack_require__(/*! ./src/Gig */ "./src/Gig.ts");
exports.Gig = Gig_1.default;
var GooglePlace_1 = __webpack_require__(/*! ./src/GooglePlace */ "./src/GooglePlace.ts");
exports.GooglePlace = GooglePlace_1.default;
var Location_1 = __webpack_require__(/*! ./src/Location */ "./src/Location.ts");
exports.Location = Location_1.default;
var Notification_1 = __webpack_require__(/*! ./src/Notification */ "./src/Notification.ts");
exports.Notification = Notification_1.default;
var Page_1 = __webpack_require__(/*! ./src/Page */ "./src/Page.ts");
exports.Page = Page_1.default;
var Post_1 = __webpack_require__(/*! ./src/Post */ "./src/Post.ts");
exports.Post = Post_1.default;
var Request_1 = __webpack_require__(/*! ./src/Request */ "./src/Request.ts");
exports.Request = Request_1.default;
var RESTModel_1 = __webpack_require__(/*! ./src/RESTModel */ "./src/RESTModel.ts");
exports.RESTModel = RESTModel_1.default;
var TwitterAccount_1 = __webpack_require__(/*! ./src/TwitterAccount */ "./src/TwitterAccount.ts");
exports.TwitterAccount = TwitterAccount_1.default;
var Upload_1 = __webpack_require__(/*! ./src/Upload */ "./src/Upload.ts");
exports.Upload = Upload_1.default;
var User_1 = __webpack_require__(/*! ./src/User */ "./src/User.ts");
exports.User = User_1.default;
var Venue_1 = __webpack_require__(/*! ./src/Venue */ "./src/Venue.ts");
exports.Venue = Venue_1.default;
var ModelNameToModel_1 = __webpack_require__(/*! ./src/ModelNameToModel */ "./src/ModelNameToModel.ts");
exports.ModelNameToModel = ModelNameToModel_1.default;
if (typeof window !== "undefined") {
    window.GigGizmoAPI = module.exports;
}


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
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
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
          )

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



var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

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
       true ? printWarning('Invalid argument supplied to oneOf, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
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
        if (propValue.hasOwnProperty(key)) {
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
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(isValidElement, throwOnDirectAccess);
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

/***/ "./src/API.ts":
/*!********************!*\
  !*** ./src/API.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var cookie_1 = __webpack_require__(/*! cookie */ "./node_modules/cookie/index.js");
__webpack_require__(/*! socket.io-client */ "socket.io-client");
if (typeof global.axios === "undefined") {
    global.axios = Promise.resolve().then(function () { return __webpack_require__(/*! axios */ "axios"); });
    if (typeof global.axios === "undefined") {
        throw new Error("Missing axios in global");
    }
}
if (typeof global["socket.io-client"] === "undefined") {
    global["socket.io-client"] = Promise.resolve().then(function () { return __webpack_require__(/*! socket.io-client */ "socket.io-client"); });
    if (typeof global["socket.io-client"] === "undefined") {
        throw new Error("Missing socket.io-client in global");
    }
}
var API = /** @class */ (function () {
    function API() {
        throw new Error("Cannot instantiate.");
    }
    Object.defineProperty(API, "expires", {
        get: function () {
            if (!API._expires && API.LocalStorageSupported) {
                API._expires = new Date(localStorage.getItem("expires") || null);
            }
            return API._expires;
        },
        set: function (value) {
            var dateExpires = null;
            if (typeof value === "string" || typeof value === "number") {
                dateExpires = new Date(value);
            }
            else if (value instanceof Date) {
                dateExpires = value;
            }
            if (dateExpires === null) {
                throw new Error("value for date expires is invalid, expected string, number, or date. Got: " + value);
            }
            else {
                API._expires = dateExpires;
                if (API.LocalStorageSupported) {
                    localStorage.setItem("expires", API._expires.toISOString());
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(API, "token", {
        get: function () {
            var dateNow = new Date();
            if (API.expires && dateNow > API.expires) {
                API._token = null;
                if (API.LocalStorageSupported) {
                    localStorage.removeItem("token");
                }
                return null;
            }
            if (!API._token && API.LocalStorageSupported) {
                // We store it in local storage.
                API._token = JSON.parse(localStorage.getItem("token")) || null;
            }
            if (!API._token && typeof document !== "undefined" && document.cookie) {
                // We store it in the cookie.
                API._token = cookie_1.parse(document.cookie)["gig-gizmo-token"];
            }
            if (API._token && API.LocalStorageSupported) {
                // We store it in local storage if found.
                localStorage.setItem("token", JSON.stringify(API._token));
            }
            return API._token;
        },
        set: function (value) {
            if (typeof value === "string" && value.length !== 124 && value !== null) {
                throw new Error("Token is not valid: " + value);
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
                    document.cookie = cookie_1.serialize("gig-gizmo-token", API._token, {
                        path: "/",
                        sameSite: "strict"
                    });
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(API, "rootURL", {
        get: function () {
            var url = "";
            if (API.secure) {
                url += "https://";
            }
            else {
                url += "http://";
            }
            url += "" + API.hostname;
            if (API.port !== 80 && !API.secure) {
                url += ":" + API.port;
            }
            else if (API.securePort !== 443 && API.secure) {
                url += ":" + API.securePort;
            }
            return url;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(API, "webSocketRootURL", {
        get: function () {
            var url = "";
            if (API.secure) {
                url += "wss://";
            }
            else {
                url += "ws://";
            }
            url += "" + API.hostname;
            if (API.port !== 80 && !API.secure) {
                url += ":" + API.port;
            }
            else if (API.securePort !== 443 && API.secure) {
                url += ":" + API.securePort;
            }
            return url;
        },
        enumerable: true,
        configurable: true
    });
    API.call = function (method, route, data) {
        return __awaiter(this, void 0, void 0, function () {
            var headers, fetchRequest, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        headers = {
                            "x-gig-gizmo-token": API.token ? API._token : null
                        };
                        fetchRequest = {
                            data: null,
                            headers: headers,
                            method: method.toLowerCase(),
                            params: null,
                            responseType: "json",
                            url: "" + API.rootURL + route,
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
                        return [4 /*yield*/, API.axios(fetchRequest)];
                    case 1:
                        response = _a.sent();
                        if (response.data) {
                            return [2 /*return*/, response.data];
                        }
                        else if (response.statusText) {
                            return [2 /*return*/, response.statusText];
                        }
                        else if (response.status) {
                            return [2 /*return*/, null];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    API.getSocket = function () {
        return new Promise(function (resolve, reject) {
            try {
                var killSocket_1 = function (error) {
                    if (error) {
                        console.error(error);
                    }
                    API.webSocket.open();
                };
                var onReady = function () {
                    if (!API.webSocket) {
                        API.webSocket = API.WebSocket();
                        API.webSocket.on("connect_timeout", killSocket_1);
                        API.webSocket.on("connect_error", killSocket_1);
                        API.webSocket.on("disconnect", killSocket_1);
                        API.webSocket.on("error", killSocket_1);
                        API.webSocket.open();
                    }
                    return resolve(API.webSocket);
                };
                if (API.WebSocket) {
                    if (typeof document !== "undefined") {
                        switch (document.readyState) {
                            case "loading":
                                document.addEventListener("DOMContentLoaded", onReady);
                                break;
                            case "interactive":
                            case "complete":
                                onReady();
                                break;
                            default:
                                throw new Error("Unexpected readyState: " + document.readyState);
                        }
                    }
                    else {
                        onReady();
                    }
                }
                return resolve(null);
            }
            catch (e) {
                reject(e);
            }
        });
    };
    API.WebSocket = global["socket.io-client"];
    API.axios = global.axios;
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
    return API;
}());
exports.default = API;
if (typeof API.axios !== "undefined") {
    API.axios.defaults.withCredentials = true;
}


/***/ }),

/***/ "./src/Band.ts":
/*!*********************!*\
  !*** ./src/Band.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Created by corynull on 4/3/17.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var FacebookAccount_1 = __webpack_require__(/*! ./FacebookAccount */ "./src/FacebookAccount.ts");
var Gig_1 = __webpack_require__(/*! ./Gig */ "./src/Gig.ts");
var RESTModel_1 = __webpack_require__(/*! ./RESTModel */ "./src/RESTModel.ts");
var TwitterAccount_1 = __webpack_require__(/*! ./TwitterAccount */ "./src/TwitterAccount.ts");
var Upload_1 = __webpack_require__(/*! ./Upload */ "./src/Upload.ts");
var User_1 = __webpack_require__(/*! ./User */ "./src/User.ts");
var Band = /** @class */ (function (_super) {
    __extends(Band, _super);
    function Band() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Band.prototype, "name", {
        get: function () {
            return this.getField("name");
        },
        set: function (value) {
            this.setField("name", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Band.prototype, "website", {
        get: function () {
            return this.getField("website");
        },
        set: function (value) {
            this.setField("website", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Band.prototype, "email", {
        get: function () {
            return this.getField("email");
        },
        set: function (value) {
            this.setField("email", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Band.prototype, "cityName", {
        get: function () {
            return this.getField("cityName");
        },
        set: function (value) {
            this.setField("cityName", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Band.prototype, "cityPlaceID", {
        get: function () {
            return this.getField("cityPlaceID");
        },
        set: function (value) {
            this.setField("cityPlaceID", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Band.prototype, "description", {
        get: function () {
            return this.getField("description");
        },
        set: function (value) {
            this.setField("description", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Band.prototype, "metadata", {
        get: function () {
            return this.getField("metadata");
        },
        set: function (value) {
            this.setField("metadata", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Band.prototype, "icon", {
        get: function () {
            return this.getField("icon");
        },
        set: function (value) {
            this.setField("icon", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Band.prototype, "photos", {
        get: function () {
            return this.getField("photos");
        },
        set: function (value) {
            this.setField("photos", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Band.prototype, "owners", {
        get: function () {
            return this.getField("owners");
        },
        set: function (value) {
            this.setField("owners", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Band.prototype, "facebook", {
        get: function () {
            return this.getField("facebook");
        },
        set: function (value) {
            this.setField("facebook", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Band.prototype, "facebookPageId", {
        get: function () {
            return this.getField("facebookPageId");
        },
        set: function (value) {
            this.setField("facebookPageId", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Band.prototype, "facebookPageName", {
        get: function () {
            return this.getField("facebookPageName");
        },
        set: function (value) {
            this.setField("facebookPageName", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Band.prototype, "facebookPageToken", {
        get: function () {
            return this.getField("facebookPageToken");
        },
        set: function (value) {
            this.setField("facebookPageToken", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Band.prototype, "twitter", {
        get: function () {
            return this.getField("twitter");
        },
        set: function (value) {
            this.setField("twitter", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Band.prototype, "google", {
        get: function () {
            return this.getField("google");
        },
        set: function (value) {
            this.setField("google", value);
        },
        enumerable: true,
        configurable: true
    });
    Band.findOne = function (criteria) {
        return RESTModel_1.default.findOneBase(Band, criteria, true);
    };
    Band.findMany = function (criteria) {
        return RESTModel_1.default.findManyBase(Band, criteria, true);
    };
    Band.findById = function (id) {
        return RESTModel_1.default.findByIdBase(Band, id, true);
    };
    Band.getAllOwned = function () {
        return RESTModel_1.default.findManyBase(Band, null, true);
    };
    Band.prototype.save = function () {
        return RESTModel_1.default.prototype.save.call(this, true);
    };
    Band.prototype.remove = function () {
        return RESTModel_1.default.prototype.remove.call(this, true);
    };
    Band.prototype.getIcon = function () {
        return RESTModel_1.default.findByIdBase(Upload_1.default, this.icon, true);
    };
    Band.prototype.getPhotos = function () {
        var photos = Array.from(this.photos);
        if (photos.length !== 0) {
            return RESTModel_1.default.findManyBase(Upload_1.default, {
                _id: photos
            }, true);
        }
        return Promise.resolve([]);
    };
    Band.prototype.getOwners = function () {
        var owners = Array.from(this.owners);
        if (owners.length !== 0) {
            return RESTModel_1.default.findManyBase(User_1.default, {
                _id: owners
            }, true);
        }
        return Promise.resolve([]);
    };
    Band.prototype.getGigs = function () {
        return Gig_1.default.findByBand(this._id);
    };
    Band.prototype.getTwitterAccount = function () {
        return RESTModel_1.default.findByIdBase(TwitterAccount_1.default, this.twitter, true);
    };
    Band.prototype.getFacebookAccount = function () {
        return RESTModel_1.default.findByIdBase(FacebookAccount_1.default, this.facebook, true);
    };
    Band.prototype.isValid = function () {
        var self = this;
        if (!_super.prototype.isValid.call(this)) {
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
        if (!this.owners.every(function (owner) { return self.userIsOwner(owner); })) {
            return false;
        }
        return true;
    };
    Band.prototype.userIsOwner = function (user) {
        if (Array.isArray(this.owners)) {
            var userId_1;
            if (typeof user === "string") {
                userId_1 = user;
            }
            else if (typeof user === "object" && user) {
                userId_1 = user._id;
            }
            return this.owners.find(function (id) { return id === userId_1; }) !== undefined;
        }
        return false;
    };
    Band.ModelName = "Band";
    return Band;
}(RESTModel_1.default));
exports.default = Band;


/***/ }),

/***/ "./src/Conversation.ts":
/*!*****************************!*\
  !*** ./src/Conversation.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Created by corynull on Dec 30 2017 11:14:11 AM.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var API_1 = __webpack_require__(/*! ./API */ "./src/API.ts");
var RESTModel_1 = __webpack_require__(/*! ./RESTModel */ "./src/RESTModel.ts");
var Conversation = /** @class */ (function (_super) {
    __extends(Conversation, _super);
    function Conversation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Conversation.prototype, "events", {
        get: function () {
            return this.getField("events") || [];
        },
        set: function (value) {
            this.setField("events", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Conversation.prototype, "users", {
        get: function () {
            return this.getField("users") || [];
        },
        set: function (value) {
            this.setField("users", value);
        },
        enumerable: true,
        configurable: true
    });
    Conversation.newCallback = function (callback) {
        var callbackId = Date.now();
        Conversation.Callbacks.set(callbackId, callback);
        return function () { return Conversation.Callbacks.delete(callbackId); };
    };
    Conversation.connectSocket = function () {
        API_1.default.getSocket().then(function (socket) {
            if (socket) {
                socket.on("/API/Conversation/Update", function (data) {
                    if (data) {
                        var conv_1 = RESTModel_1.default.Cache.get(data._id) || null;
                        if (conv_1) {
                            Object.assign(conv_1, data);
                        }
                        else {
                            conv_1 = new Conversation(data);
                        }
                        RESTModel_1.default.Cache.set(conv_1._id, conv_1);
                        Conversation.Callbacks.forEach(function (cb) { return cb(conv_1); });
                    }
                });
            }
        }, console.error);
    };
    Conversation.findById = function (id) {
        return RESTModel_1.default.findByIdBase(Conversation, id, true);
    };
    Conversation.getAllOwned = function () {
        return RESTModel_1.default.findManyBase(Conversation, null, true);
    };
    Conversation.prototype.isValid = function () {
        if (!_super.prototype.isValid.call(this)) {
            return false;
        }
        // TODO: do more tests...
        return true;
    };
    Conversation.prototype.pushMessage = function (user, message) {
        this.events.push({
            dateTimePosted: new Date(),
            message: message,
            user: user,
        });
        return this.save();
    };
    Conversation.ModelName = "Conversation";
    Conversation.Callbacks = new Map();
    return Conversation;
}(RESTModel_1.default));
exports.default = Conversation;


/***/ }),

/***/ "./src/ErrorReport.ts":
/*!****************************!*\
  !*** ./src/ErrorReport.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Created by corynull on Jan 8 2018 8:58:54 PM.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var RESTModel_1 = __webpack_require__(/*! ./RESTModel */ "./src/RESTModel.ts");
var ErrorReport = /** @class */ (function (_super) {
    __extends(ErrorReport, _super);
    function ErrorReport() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ErrorReport.prototype, "version", {
        get: function () {
            return this.getField("version");
        },
        set: function (value) {
            this.setField("version", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ErrorReport.prototype, "userId", {
        get: function () {
            return this.getField("userId");
        },
        set: function (value) {
            this.setField("userId", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ErrorReport.prototype, "stack", {
        get: function () {
            return this.getField("stack");
        },
        set: function (value) {
            this.setField("stack", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ErrorReport.prototype, "message", {
        get: function () {
            return this.getField("message");
        },
        set: function (value) {
            this.setField("message", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ErrorReport.prototype, "name", {
        get: function () {
            return this.getField("name");
        },
        set: function (value) {
            this.setField("name", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ErrorReport.prototype, "fileName", {
        get: function () {
            return this.getField("fileName");
        },
        set: function (value) {
            this.setField("fileName", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ErrorReport.prototype, "columnNumber", {
        get: function () {
            return this.getField("columnNumber");
        },
        set: function (value) {
            this.setField("columnNumber", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ErrorReport.prototype, "lineNumber", {
        get: function () {
            return this.getField("lineNumber");
        },
        set: function (value) {
            this.setField("lineNumber", value);
        },
        enumerable: true,
        configurable: true
    });
    ErrorReport.findById = function (id) {
        return RESTModel_1.default.findByIdBase(ErrorReport, id);
    };
    ErrorReport.findMany = function (criteria) {
        return RESTModel_1.default.findManyBase(ErrorReport, criteria);
    };
    ErrorReport.prototype.isValid = function () {
        if (!_super.prototype.isValid.call(this)) {
            return false;
        }
        // TODO: do more tests...
        return true;
    };
    ErrorReport.ModelName = "ErrorReport";
    return ErrorReport;
}(RESTModel_1.default));
exports.default = ErrorReport;


/***/ }),

/***/ "./src/FacebookAccount.ts":
/*!********************************!*\
  !*** ./src/FacebookAccount.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Created by corynull on Nov 30 2017 9:08 AM.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var API_1 = __webpack_require__(/*! ./API */ "./src/API.ts");
var RESTModel_1 = __webpack_require__(/*! ./RESTModel */ "./src/RESTModel.ts");
var User_1 = __webpack_require__(/*! ./User */ "./src/User.ts");
var FacebookAccount = /** @class */ (function (_super) {
    __extends(FacebookAccount, _super);
    function FacebookAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(FacebookAccount.prototype, "userId", {
        get: function () {
            return this.getField("userId");
        },
        set: function (value) {
            this.setField("userId", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FacebookAccount.prototype, "accountId", {
        get: function () {
            return this.getField("accountId");
        },
        set: function (value) {
            this.setField("accountId", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FacebookAccount.prototype, "userAccessToken", {
        get: function () {
            return this.getField("userAccessToken");
        },
        set: function (value) {
            this.setField("userAccessToken", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FacebookAccount.prototype, "userRefreshToken", {
        get: function () {
            return this.getField("userRefreshToken");
        },
        set: function (value) {
            this.setField("userRefreshToken", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FacebookAccount.prototype, "profile", {
        get: function () {
            return this.getField("profile");
        },
        enumerable: true,
        configurable: true
    });
    FacebookAccount.findById = function (id) {
        return new Promise(function (resolve, reject) {
            if (typeof id === "string" && id !== "") {
                API_1.default.call("GET", "/API/FacebookAccount/" + id, null).then(function (found) {
                    var account = found || null;
                    if (account) {
                        resolve(new FacebookAccount(account));
                    }
                    else {
                        reject(new Error(account + " returned"));
                    }
                }, reject);
            }
            else {
                resolve(null);
            }
        });
    };
    FacebookAccount.findPage = function (pageName) {
        return new Promise(function (resolve, reject) {
            if (typeof pageName !== "string") {
                reject(new Error("pageName is not a string!"));
            }
            else {
                API_1.default.call("GET", "/API/Facebook/Page/Find", {
                    name: pageName
                }).then(resolve, reject);
            }
        });
    };
    FacebookAccount.PostToPage = function (format, text, pageId, postDateTime) {
        return new Promise(function (resolve, reject) {
            API_1.default.call("POST", "/API/Facebook/Page/Post", {
                fb_page_id: pageId,
                post_format: format,
                post_text: text,
                publish_time: postDateTime // .getTime() / 1000
            }).then(resolve, reject);
        });
    };
    FacebookAccount.prototype.getUser = function () {
        return RESTModel_1.default.findManyBase(User_1.default, this.userId, true);
    };
    FacebookAccount.prototype.userIsOwner = function (user) {
        if (typeof user === "string") {
            return user === this.userId;
        }
        else if (typeof user === "object" && user) {
            return user._id === this.userId;
        }
        return false;
    };
    FacebookAccount.prototype.isValid = function () {
        if (!_super.prototype.isValid.call(this)) {
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
    };
    FacebookAccount.ModelName = "FacebookAccount";
    return FacebookAccount;
}(RESTModel_1.default));
exports.default = FacebookAccount;


/***/ }),

/***/ "./src/Gig.ts":
/*!********************!*\
  !*** ./src/Gig.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Created by corynull on 4/5/17.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var API_1 = __webpack_require__(/*! ./API */ "./src/API.ts");
var Band_1 = __webpack_require__(/*! ./Band */ "./src/Band.ts");
var Location_1 = __webpack_require__(/*! ./Location */ "./src/Location.ts");
var RESTModel_1 = __webpack_require__(/*! ./RESTModel */ "./src/RESTModel.ts");
var Venue_1 = __webpack_require__(/*! ./Venue */ "./src/Venue.ts");
var Gig = /** @class */ (function (_super) {
    __extends(Gig, _super);
    function Gig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Gig.prototype, "startTime", {
        get: function () {
            var startTime = this.getField("startTime");
            return startTime ? new Date(startTime) : startTime;
        },
        set: function (value) {
            this.setField("startTime", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Gig.prototype, "stopTime", {
        get: function () {
            var stopTime = this.getField("stopTime");
            return stopTime ? new Date(stopTime) : stopTime;
        },
        set: function (value) {
            this.setField("stopTime", value.toJSON());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Gig.prototype, "location", {
        get: function () {
            return this.getField("location");
        },
        set: function (value) {
            this.setField("location", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Gig.prototype, "venue", {
        get: function () {
            return this.getField("venue");
        },
        set: function (value) {
            this.setField("venue", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Gig.prototype, "bands", {
        get: function () {
            return this.getField("bands");
        },
        set: function (value) {
            this.setField("bands", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Gig.prototype, "active", {
        get: function () {
            return this.getField("active");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Gig.prototype, "toBeAnnounced", {
        get: function () {
            return this.getField("toBeAnnounced");
        },
        set: function (value) {
            this.setField("toBeAnnounced", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Gig.prototype, "bandOwnersAccepted", {
        get: function () {
            return this.getField("bandOwnersAccepted");
        },
        set: function (value) {
            this.setField("bandOwnersAccepted", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Gig.prototype, "venueOwnerAccepted", {
        get: function () {
            return this.getField("venueOwnerAccepted");
        },
        set: function (value) {
            this.setField("venueOwnerAccepted", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Gig.prototype, "owners", {
        get: function () {
            return this.getField("owners");
        },
        set: function (value) {
            this.setField("owners", value);
        },
        enumerable: true,
        configurable: true
    });
    Gig.findById = function (id) {
        return RESTModel_1.default.findByIdBase(Gig, id, true);
    };
    Gig.findByBand = function (bandId) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, API_1.default.call("GET", "/API/Band/" + bandId + "/Gigs", null)];
                    case 1:
                        data = _a.sent();
                        if (data && Array.isArray(data)) {
                            return [2 /*return*/, data.map(function (itemData) {
                                    var item = new Gig(itemData);
                                    RESTModel_1.default.Cache.set(item._id, item);
                                    return item;
                                })];
                        }
                        throw new Error("Expected Array, got " + data);
                }
            });
        });
    };
    Gig.findByVenue = function (venueId) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, API_1.default.call("GET", "/API/Venue/" + venueId + "/Gigs", null)];
                    case 1:
                        data = _a.sent();
                        if (data && Array.isArray(data)) {
                            return [2 /*return*/, data.map(function (itemData) {
                                    var item = new Gig(itemData);
                                    RESTModel_1.default.Cache.set(item._id, item);
                                    return item;
                                })];
                        }
                        throw new Error("Expected Array, got " + data);
                }
            });
        });
    };
    Gig.getAllOwned = function () {
        return RESTModel_1.default.findManyBase(Gig, null, true);
    };
    Gig.findMany = function (criteria) {
        return RESTModel_1.default.findManyBase(Gig, criteria, true);
    };
    Gig.createGigs = function (gigData) {
        return new Promise(function (resolve, reject) {
            var data = gigData || {};
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
                var filtered = data.times.filter(function (time, i) {
                    if (time.dayDate && time.startTime && time.stopTime) {
                        var dayDate = new Date(time.dayDate);
                        var startTime = new Date(time.startTime);
                        startTime.setFullYear(dayDate.getFullYear());
                        startTime.setMonth(dayDate.getMonth());
                        startTime.setDate(dayDate.getDay());
                        var stopTime = new Date(time.stopTime);
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
                var request = API_1.default.call("POST", "/API/Gig", data);
                return request.then((function (response) {
                    var gigs = Array.from(response || []);
                    gigs = gigs.map(function (itemData) {
                        var gig = new Gig(itemData);
                        return gig;
                    });
                    resolve(gigs);
                }), reject);
            }
            return null;
        });
    };
    Gig.getAllInDistance = function (location, distance) {
        return new Promise(function (resolve, reject) {
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
            return API_1.default.call("GET", "/API/Gig/InDistance", {
                dis: distance,
                lat: location.lat,
                lng: location.lng
            }).then((function (gigs) {
                resolve(Array.from(gigs).map(function (item) {
                    var gig = new Gig(item);
                    return gig;
                }));
            }), reject);
        });
    };
    Gig.prototype.getBands = function () {
        return RESTModel_1.default.findManyBase(Band_1.default, { _id: this.bands }, true);
    };
    Gig.prototype.getVenue = function () {
        return RESTModel_1.default.findByIdBase(Venue_1.default, this.venue, true);
    };
    Gig.prototype.getLocation = function () {
        return RESTModel_1.default.findByIdBase(Location_1.default, this.location, true);
    };
    Gig.prototype.isValid = function () {
        if (!_super.prototype.isValid.call(this)) {
            return false;
        }
        if (!Array.isArray(this.owners)) {
            return false;
        }
        if (this.owners.length === 0) {
            return false;
        }
        return true;
    };
    Gig.prototype.userIsOwner = function (user) {
        if (Array.isArray(this.owners)) {
            var userId_1;
            if (typeof user === "string") {
                userId_1 = user;
            }
            else if (typeof user === "object" && user) {
                userId_1 = user._id;
            }
            return this.owners.find(function (id) { return id === userId_1; }) !== undefined;
        }
        return false;
    };
    Gig.ModelName = "Gig";
    return Gig;
}(RESTModel_1.default));
exports.default = Gig;


/***/ }),

/***/ "./src/GooglePlace.ts":
/*!****************************!*\
  !*** ./src/GooglePlace.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Created by corynull on 4/7/17.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var API_1 = __webpack_require__(/*! ./API */ "./src/API.ts");
var RESTModel_1 = __webpack_require__(/*! ./RESTModel */ "./src/RESTModel.ts");
var GooglePlace = /** @class */ (function (_super) {
    __extends(GooglePlace, _super);
    function GooglePlace() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(GooglePlace.prototype, "placeId", {
        get: function () {
            return this.getField("placeId");
        },
        set: function (value) {
            this.setField("placeId", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GooglePlace.prototype, "details", {
        get: function () {
            return this.getField("details");
        },
        set: function (value) {
            this.setField("details", value);
        },
        enumerable: true,
        configurable: true
    });
    GooglePlace.getPlaceDetails = function (placeId) {
        return new Promise(function (resolve, reject) {
            if (typeof placeId !== "string") {
                return reject(new Error("placeId is not a string!"));
            }
            return API_1.default.call("GET", "/API/GooglePlace", { placeId: placeId }).then(resolve, reject);
        });
    };
    GooglePlace.queryPlace = function (text, maybeType) {
        return new Promise(function (resolve, reject) {
            var type = maybeType || "locality";
            if (typeof text !== "string") {
                return reject(new Error("text is not a string!"));
            }
            if (text.length === 0) {
                return reject(new Error("text is blank"));
            }
            return API_1.default.call("GET", "/API/GooglePlace/Query", {
                term: text,
                type: type
            }).then(resolve, reject);
        });
    };
    GooglePlace.ModelName = "GooglePlace";
    return GooglePlace;
}(RESTModel_1.default));
exports.default = GooglePlace;


/***/ }),

/***/ "./src/Location.ts":
/*!*************************!*\
  !*** ./src/Location.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Created by corynull on 9/7/17.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var API_1 = __webpack_require__(/*! ./API */ "./src/API.ts");
var GooglePlace_1 = __webpack_require__(/*! ./GooglePlace */ "./src/GooglePlace.ts");
var RESTModel_1 = __webpack_require__(/*! ./RESTModel */ "./src/RESTModel.ts");
var Location = /** @class */ (function (_super) {
    __extends(Location, _super);
    function Location() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Location.prototype, "type", {
        get: function () {
            return this.getField("type") || "Point";
        },
        set: function (value) {
            this.setField("type", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Location.prototype, "placeId", {
        get: function () {
            return this.getField("placeId");
        },
        set: function (value) {
            this.setField("placeId", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Location.prototype, "address", {
        get: function () {
            return this.getField("address");
        },
        set: function (value) {
            this.setField("address", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Location.prototype, "point", {
        get: function () {
            return this.getField("point");
        },
        set: function (value) {
            this.setField("point", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Location.prototype, "utcOffset", {
        get: function () {
            return this.getField("utcOffset");
        },
        set: function (value) {
            this.setField("utcOffset", value);
        },
        enumerable: true,
        configurable: true
    });
    Location.getLocationByPlaceId = function (placeId) {
        return new Promise(function (resolve, reject) {
            if (!placeId) {
                reject(new Error("Invaild placeId: " + placeId));
            }
            else {
                API_1.default.call("GET", "/API/Place/" + placeId, null).then((function (location) {
                    if (location) {
                        resolve(new Location(location));
                    }
                    else {
                        reject(new Error(location + " returned"));
                    }
                }), reject);
            }
        });
    };
    Location.findById = function (id) {
        return RESTModel_1.default.findByIdBase(Location, id);
    };
    Location.prototype.isValid = function () {
        if (!_super.prototype.isValid.call(this)) {
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
    };
    Location.prototype.getPlaceDetails = function () {
        return GooglePlace_1.default.getPlaceDetails(this.placeId);
    };
    Location.ModelName = "Location";
    return Location;
}(RESTModel_1.default));
exports.default = Location;


/***/ }),

/***/ "./src/ModelNameToModel.ts":
/*!*********************************!*\
  !*** ./src/ModelNameToModel.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
function ModelNameToModel(name) {
    return __awaiter(this, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = name;
                    switch (_a) {
                        case "Band": return [3 /*break*/, 1];
                        case "Conversation": return [3 /*break*/, 3];
                        case "ErrorReport": return [3 /*break*/, 5];
                        case "FacebookAccount": return [3 /*break*/, 7];
                        case "Gig": return [3 /*break*/, 9];
                        case "GooglePlace": return [3 /*break*/, 11];
                        case "Location": return [3 /*break*/, 13];
                        case "Notification": return [3 /*break*/, 15];
                        case "Page": return [3 /*break*/, 17];
                        case "Post": return [3 /*break*/, 19];
                        case "Request": return [3 /*break*/, 21];
                        case "TwitterAccount": return [3 /*break*/, 23];
                        case "Upload": return [3 /*break*/, 25];
                        case "User": return [3 /*break*/, 27];
                        case "Venue": return [3 /*break*/, 29];
                    }
                    return [3 /*break*/, 31];
                case 1: return [4 /*yield*/, Promise.resolve().then(function () { return __webpack_require__(/*! ./Band */ "./src/Band.ts"); })];
                case 2: return [2 /*return*/, (_b.sent()).default];
                case 3: return [4 /*yield*/, Promise.resolve().then(function () { return __webpack_require__(/*! ./Conversation */ "./src/Conversation.ts"); })];
                case 4: return [2 /*return*/, (_b.sent()).default];
                case 5: return [4 /*yield*/, Promise.resolve().then(function () { return __webpack_require__(/*! ./ErrorReport */ "./src/ErrorReport.ts"); })];
                case 6: return [2 /*return*/, (_b.sent()).default];
                case 7: return [4 /*yield*/, Promise.resolve().then(function () { return __webpack_require__(/*! ./FacebookAccount */ "./src/FacebookAccount.ts"); })];
                case 8: return [2 /*return*/, (_b.sent()).default];
                case 9: return [4 /*yield*/, Promise.resolve().then(function () { return __webpack_require__(/*! ./Gig */ "./src/Gig.ts"); })];
                case 10: return [2 /*return*/, (_b.sent()).default];
                case 11: return [4 /*yield*/, Promise.resolve().then(function () { return __webpack_require__(/*! ./GooglePlace */ "./src/GooglePlace.ts"); })];
                case 12: return [2 /*return*/, (_b.sent()).default];
                case 13: return [4 /*yield*/, Promise.resolve().then(function () { return __webpack_require__(/*! ./Location */ "./src/Location.ts"); })];
                case 14: return [2 /*return*/, (_b.sent()).default];
                case 15: return [4 /*yield*/, Promise.resolve().then(function () { return __webpack_require__(/*! ./Notification */ "./src/Notification.ts"); })];
                case 16: return [2 /*return*/, (_b.sent()).default];
                case 17: return [4 /*yield*/, Promise.resolve().then(function () { return __webpack_require__(/*! ./Page */ "./src/Page.ts"); })];
                case 18: return [2 /*return*/, (_b.sent()).default];
                case 19: return [4 /*yield*/, Promise.resolve().then(function () { return __webpack_require__(/*! ./Post */ "./src/Post.ts"); })];
                case 20: return [2 /*return*/, (_b.sent()).default];
                case 21: return [4 /*yield*/, Promise.resolve().then(function () { return __webpack_require__(/*! ./Request */ "./src/Request.ts"); })];
                case 22: return [2 /*return*/, (_b.sent()).default];
                case 23: return [4 /*yield*/, Promise.resolve().then(function () { return __webpack_require__(/*! ./TwitterAccount */ "./src/TwitterAccount.ts"); })];
                case 24: return [2 /*return*/, (_b.sent()).default];
                case 25: return [4 /*yield*/, Promise.resolve().then(function () { return __webpack_require__(/*! ./Upload */ "./src/Upload.ts"); })];
                case 26: return [2 /*return*/, (_b.sent()).default];
                case 27: return [4 /*yield*/, Promise.resolve().then(function () { return __webpack_require__(/*! ./User */ "./src/User.ts"); })];
                case 28: return [2 /*return*/, (_b.sent()).default];
                case 29: return [4 /*yield*/, Promise.resolve().then(function () { return __webpack_require__(/*! ./Venue */ "./src/Venue.ts"); })];
                case 30: return [2 /*return*/, (_b.sent()).default];
                case 31: return [2 /*return*/, Promise.resolve(null)];
            }
        });
    });
}
exports.default = ModelNameToModel;


/***/ }),

/***/ "./src/Notification.ts":
/*!*****************************!*\
  !*** ./src/Notification.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Created by corynull on 8/15/17.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var API_1 = __webpack_require__(/*! ./API */ "./src/API.ts");
var RESTModel_1 = __webpack_require__(/*! ./RESTModel */ "./src/RESTModel.ts");
var Notification = /** @class */ (function (_super) {
    __extends(Notification, _super);
    function Notification() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.changeCallbacks = new Map();
        return _this;
    }
    Object.defineProperty(Notification.prototype, "userId", {
        get: function () {
            return this.getField("userId");
        },
        set: function (value) {
            this.setField("userId", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Notification.prototype, "label", {
        get: function () {
            return this.getField("label");
        },
        set: function (value) {
            this.setField("label", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Notification.prototype, "message", {
        get: function () {
            return this.getField("message");
        },
        set: function (value) {
            this.setField("message", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Notification.prototype, "actions", {
        get: function () {
            return this.getField("actions");
        },
        set: function (value) {
            this.setField("actions", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Notification.prototype, "seenByUser", {
        get: function () {
            return this.getField("seenByUser");
        },
        set: function (value) {
            this.setField("seenByUser", value);
        },
        enumerable: true,
        configurable: true
    });
    Notification.onNewNotification = function (note) {
        Notification.Callbacks.forEach(function (callback) { return callback(note); });
    };
    Notification.newCallback = function (callback) {
        var callbackId = Date.now();
        Notification.Callbacks.set(callbackId, callback);
        return function () { return Notification.Callbacks.delete(callbackId); };
    };
    Notification.getNewNotifications = function () {
        return __awaiter(this, void 0, void 0, function () {
            var notes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(API_1.default.token !== null)) return [3 /*break*/, 2];
                        return [4 /*yield*/, API_1.default.call("GET", "/API/Notification", {
                                returnNew: true
                            })];
                    case 1:
                        notes = _a.sent();
                        return [2 /*return*/, Array.from(notes).map(function (item) { return new Notification(item); })];
                    case 2: return [2 /*return*/, []];
                }
            });
        });
    };
    Notification.getAllOwned = function () {
        return RESTModel_1.default.findManyBase("Notification", null, true);
    };
    Notification.findById = function (id) {
        return RESTModel_1.default.findByIdBase("Notification", id, true);
    };
    Notification.connectSocket = function () {
        API_1.default.getSocket().then(function (socket) {
            if (socket) {
                socket.on("notification", function (data) {
                    return Notification.onNewNotification(new Notification(data));
                });
            }
        }, console.error);
    };
    Notification.setUpPushNotifications = function () {
        var PushSupported = typeof window !== "undefined" &&
            typeof window.Notification !== "undefined";
        var webNotification = (PushSupported) ? window.Notification : null;
        if (PushSupported) {
            var setup = function (permission) {
                if (permission === "granted") {
                    Notification.onNewNotification(function (note) {
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
    };
    Notification.prototype.newChangeCallback = function (callback) {
        var _this = this;
        var i = Date.now();
        this.changeCallbacks.set(i, callback);
        return function () { return _this.changeCallbacks.delete(i); };
    };
    Notification.ModelName = "Notification";
    Notification.Callbacks = new Map();
    return Notification;
}(RESTModel_1.default));
exports.default = Notification;


/***/ }),

/***/ "./src/Page.ts":
/*!*********************!*\
  !*** ./src/Page.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Created by corynull on 8/1/17.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var API_1 = __webpack_require__(/*! ./API */ "./src/API.ts");
var RESTModel_1 = __webpack_require__(/*! ./RESTModel */ "./src/RESTModel.ts");
var Page = /** @class */ (function (_super) {
    __extends(Page, _super);
    function Page() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Page.prototype, "data", {
        get: function () {
            return this.getField("data");
        },
        set: function (value) {
            this.setField("data", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Page.prototype, "metadata", {
        get: function () {
            return this.getField("metadata");
        },
        set: function (value) {
            this.setField("metadata", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Page.prototype, "title", {
        get: function () {
            return this.getField("title");
        },
        set: function (value) {
            this.setField("title", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Page.prototype, "link", {
        get: function () {
            return this.getField("link");
        },
        set: function (value) {
            this.setField("link", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Page.prototype, "visits", {
        get: function () {
            return this.getField("visits") || 0;
        },
        set: function (value) {
            this.setField("visits", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Page.prototype, "revisions", {
        get: function () {
            return this.getField("revisions") || 0;
        },
        set: function (value) {
            this.setField("revisions", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Page.prototype, "hide", {
        get: function () {
            var value = this.getField("hide");
            return value === null ? true : Boolean(value);
        },
        set: function (value) {
            this.setField("hide", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Page.prototype, "blog", {
        get: function () {
            var value = this.getField("blog");
            return Boolean(value);
        },
        set: function (value) {
            this.setField("blog", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Page.prototype, "doc", {
        get: function () {
            var value = this.getField("doc");
            return Boolean(value);
        },
        set: function (value) {
            this.setField("doc", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Page.prototype, "admin", {
        get: function () {
            return this.getField("admin");
        },
        set: function (value) {
            this.setField("admin", value);
        },
        enumerable: true,
        configurable: true
    });
    Page.findMany = function (criteria) {
        return RESTModel_1.default.findManyBase(Page, criteria);
    };
    Page.findOne = function (criteria) {
        return RESTModel_1.default.findOneBase(Page, criteria);
    };
    Page.findById = function (id) {
        return RESTModel_1.default.findByIdBase(Page, id);
    };
    Page.findByLink = function (link) {
        return new Promise(function (resolve, reject) {
            API_1.default.call("GET", "/API/Link/" + link, null).then(function (page) {
                resolve(new Page(page));
            }, reject);
        });
    };
    Page.prototype.isValid = function () {
        if (!_super.prototype.isValid.call(this)) {
            return false;
        }
        if (!this.title) {
            return false;
        }
        if (this.title === "") {
            return false;
        }
        return true;
    };
    Page.prototype.userIsOwner = function (user) {
        if (typeof user === "string") {
            return user === this.admin;
        }
        if (typeof user === "function" && user && user.isValid()) {
            return user._id === this.admin || user.admin;
        }
        return false;
    };
    Page.ModelName = "Page";
    return Page;
}(RESTModel_1.default));
exports.default = Page;


/***/ }),

/***/ "./src/Post.ts":
/*!*********************!*\
  !*** ./src/Post.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Created by corynull on 5/23/17.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var RESTModel_1 = __webpack_require__(/*! ./RESTModel */ "./src/RESTModel.ts");
var Post = /** @class */ (function (_super) {
    __extends(Post, _super);
    function Post() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Post.prototype, "userId", {
        get: function () {
            return this.getField("userId");
        },
        set: function (value) {
            this.setField("userId", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Post.prototype, "network", {
        get: function () {
            return this.getField("network");
        },
        set: function (value) {
            this.setField("network", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Post.prototype, "accountId", {
        get: function () {
            return this.getField("accountId");
        },
        set: function (value) {
            this.setField("accountId", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Post.prototype, "pageId", {
        get: function () {
            return this.getField("pageId");
        },
        set: function (value) {
            this.setField("pageId", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Post.prototype, "postText", {
        get: function () {
            return this.getField("postText");
        },
        set: function (value) {
            this.setField("postText", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Post.prototype, "postDate", {
        get: function () {
            return this.getField("postDate");
        },
        set: function (value) {
            this.setField("postDate", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Post.prototype, "coordinates", {
        get: function () {
            return this.getField("coordinates");
        },
        set: function (value) {
            this.setField("coordinates", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Post.prototype, "error", {
        get: function () {
            return this.getField("error");
        },
        set: function (value) {
            this.setField("error", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Post.prototype, "done", {
        get: function () {
            return this.getField("done");
        },
        set: function (value) {
            this.setField("done", value);
        },
        enumerable: true,
        configurable: true
    });
    Post.findById = function (id) {
        return RESTModel_1.default.findByIdBase(Post, id);
    };
    Post.getAllOwned = function () {
        return RESTModel_1.default.findManyBase(Post, null);
    };
    Post.findMany = function (criteria) {
        return RESTModel_1.default.findManyBase(Post, criteria);
    };
    Post.prototype.isValid = function () {
        if (!_super.prototype.isValid.call(this)) {
            return false;
        }
        return true;
    };
    Post.prototype.canSave = function () {
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
    };
    Post.prototype.userIsOwner = function (user) {
        if (typeof user === "string") {
            return user === this.userId;
        }
        if (typeof user === "function" && user && user.isValid()) {
            return user._id === this.userId;
        }
        return false;
    };
    Post.ModelName = "Post";
    return Post;
}(RESTModel_1.default));
exports.default = Post;


/***/ }),

/***/ "./src/PropTypes/Band.ts":
/*!*******************************!*\
  !*** ./src/PropTypes/Band.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PropTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
exports.default = PropTypes.shape({
    _id: PropTypes.string.isRequired,
    cityName: PropTypes.string,
    cityPlaceID: PropTypes.string,
    dateCreated: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.instanceOf(Date)
    ]).isRequired,
    dateModified: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.instanceOf(Date)
    ]).isRequired,
    description: PropTypes.string,
    email: PropTypes.string,
    facebook: PropTypes.string,
    facebookPageId: PropTypes.string,
    facebookPageName: PropTypes.string,
    facebookPageToken: PropTypes.string,
    google: PropTypes.string,
    icon: PropTypes.string,
    metadata: PropTypes.string,
    name: PropTypes.string.isRequired,
    owners: PropTypes.arrayOf(PropTypes.string),
    photos: PropTypes.arrayOf(PropTypes.string),
    twitter: PropTypes.string,
    website: PropTypes.string
});


/***/ }),

/***/ "./src/PropTypes/Conversation.ts":
/*!***************************************!*\
  !*** ./src/PropTypes/Conversation.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PropTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
exports.default = PropTypes.shape({
    _id: PropTypes.string.isRequired,
    dateCreated: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.instanceOf(Date)
    ]).isRequired,
    dateModified: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.instanceOf(Date)
    ]).isRequired,
    events: PropTypes.arrayOf(PropTypes.shape({
        dateTimePosted: PropTypes.string.isRequired,
        message: PropTypes.string.isRequired,
        user: PropTypes.string.isRequired
    })),
    users: PropTypes.arrayOf(PropTypes.string.isRequired)
});


/***/ }),

/***/ "./src/PropTypes/ErrorReport.ts":
/*!**************************************!*\
  !*** ./src/PropTypes/ErrorReport.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PropTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
exports.default = PropTypes.shape({
    _id: PropTypes.string.isRequired,
    columnNumber: PropTypes.number,
    dateCreated: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.instanceOf(Date)
    ]).isRequired,
    dateModified: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.instanceOf(Date)
    ]).isRequired,
    fileName: PropTypes.string,
    lineNumber: PropTypes.number,
    message: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    stack: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
    version: PropTypes.string.isRequired,
});


/***/ }),

/***/ "./src/PropTypes/FacebookAccount.ts":
/*!******************************************!*\
  !*** ./src/PropTypes/FacebookAccount.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PropTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
exports.default = PropTypes.shape({
    _id: PropTypes.string.isRequired,
    accountId: PropTypes.string.isRequired,
    dateCreated: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.instanceOf(Date)
    ]).isRequired,
    dateModified: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.instanceOf(Date)
    ]).isRequired,
    profile: PropTypes.any,
    userAccessToken: PropTypes.string,
    userId: PropTypes.string.isRequired,
    userRefreshToken: PropTypes.string,
});


/***/ }),

/***/ "./src/PropTypes/Gig.ts":
/*!******************************!*\
  !*** ./src/PropTypes/Gig.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PropTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
exports.default = PropTypes.shape({
    _id: PropTypes.string.isRequired,
    bandOwnerAccepted: PropTypes.string,
    bands: PropTypes.arrayOf(PropTypes.string).isRequired,
    dateCreated: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.instanceOf(Date)
    ]).isRequired,
    dateModified: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.instanceOf(Date)
    ]).isRequired,
    location: PropTypes.string.isRequired,
    owners: PropTypes.arrayOf(PropTypes.string),
    startTime: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.instanceOf(Date)
    ]).isRequired,
    stopTime: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.instanceOf(Date)
    ]).isRequired,
    toBeAnnounced: PropTypes.bool,
    venue: PropTypes.string.isRequired,
    venueOwnerAccepted: PropTypes.string
});


/***/ }),

/***/ "./src/PropTypes/Location.ts":
/*!***********************************!*\
  !*** ./src/PropTypes/Location.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PropTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
exports.default = PropTypes.shape({
    _id: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    dateCreated: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.instanceOf(Date)
    ]).isRequired,
    dateModified: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.instanceOf(Date)
    ]).isRequired,
    placeId: PropTypes.string.isRequired,
    point: PropTypes.arrayOf(PropTypes.number).isRequired,
    type: PropTypes.string.isRequired,
    utcOffset: PropTypes.number.isRequired
});


/***/ }),

/***/ "./src/PropTypes/Notification.ts":
/*!***************************************!*\
  !*** ./src/PropTypes/Notification.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PropTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
exports.default = PropTypes.shape({
    _id: PropTypes.string.isRequired,
    actions: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string.isRequired,
        link: PropTypes.string,
        request: PropTypes.string
    })),
    dateCreated: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.instanceOf(Date)
    ]).isRequired,
    dateModified: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.instanceOf(Date)
    ]).isRequired,
    label: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    seenByUser: PropTypes.bool,
    userId: PropTypes.string.isRequired
});


/***/ }),

/***/ "./src/PropTypes/Page.ts":
/*!*******************************!*\
  !*** ./src/PropTypes/Page.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PropTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
exports.default = PropTypes.shape({
    _id: PropTypes.string.isRequired,
    blog: PropTypes.bool,
    data: PropTypes.string,
    dateCreated: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.instanceOf(Date)
    ]).isRequired,
    dateModified: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.instanceOf(Date)
    ]).isRequired,
    doc: PropTypes.bool,
    hide: PropTypes.bool,
    link: PropTypes.string,
    metadata: PropTypes.string,
    revisions: PropTypes.number,
    title: PropTypes.string,
    visits: PropTypes.number
});


/***/ }),

/***/ "./src/PropTypes/Post.ts":
/*!*******************************!*\
  !*** ./src/PropTypes/Post.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PropTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
exports.default = PropTypes.shape({
    _id: PropTypes.string.isRequired,
    accountId: PropTypes.string.isRequired,
    coordinates: PropTypes.arrayOf(PropTypes.number),
    dateCreated: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.instanceOf(Date)
    ]).isRequired,
    dateModified: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.instanceOf(Date)
    ]).isRequired,
    done: PropTypes.bool.isRequired,
    error: PropTypes.any,
    network: PropTypes.string.isRequired,
    pageId: PropTypes.string.isRequired,
    postDate: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.instanceOf(Date)
    ]).isRequired,
    postText: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
});


/***/ }),

/***/ "./src/PropTypes/TwitterAccount.ts":
/*!*****************************************!*\
  !*** ./src/PropTypes/TwitterAccount.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PropTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
exports.default = PropTypes.shape({
    _id: PropTypes.string.isRequired,
    accessToken: PropTypes.string,
    accountId: PropTypes.string.isRequired,
    dateCreated: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.instanceOf(Date)
    ]).isRequired,
    dateModified: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.instanceOf(Date)
    ]).isRequired,
    profile: PropTypes.any,
    tokenSecret: PropTypes.string,
    userId: PropTypes.string.isRequired
});


/***/ }),

/***/ "./src/PropTypes/Upload.ts":
/*!*********************************!*\
  !*** ./src/PropTypes/Upload.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PropTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
exports.default = PropTypes.shape({
    _id: PropTypes.string.isRequired,
    dateCreated: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.instanceOf(Date)
    ]).isRequired,
    dateModified: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.instanceOf(Date)
    ]).isRequired,
    description: PropTypes.string,
    fileData: PropTypes.string.isRequired,
    fileName: PropTypes.string.isRequired,
    owners: PropTypes.arrayOf(PropTypes.string).isRequired,
    title: PropTypes.string.isRequired
});


/***/ }),

/***/ "./src/PropTypes/User.ts":
/*!*******************************!*\
  !*** ./src/PropTypes/User.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PropTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
exports.default = PropTypes.shape({
    _id: PropTypes.string.isRequired,
    active: PropTypes.bool,
    admin: PropTypes.bool,
    attempts: PropTypes.number,
    bandManager: PropTypes.bool,
    betaFeatureUser: PropTypes.bool,
    birthday: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.instanceOf(Date)
    ]).isRequired,
    country: PropTypes.string.isRequired,
    dateCreated: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.instanceOf(Date)
    ]).isRequired,
    dateModified: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.instanceOf(Date)
    ]).isRequired,
    description: PropTypes.string,
    email: PropTypes.string,
    emailVerified: PropTypes.bool,
    facebook: PropTypes.string,
    firstName: PropTypes.string.isRequired,
    icon: PropTypes.string,
    lastLogin: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.instanceOf(Date)
    ]).isRequired,
    lastLoginIP: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    middleName: PropTypes.string,
    payment: PropTypes.string,
    paypal: PropTypes.string,
    sendAnonymousReports: PropTypes.bool,
    sendEmails: PropTypes.bool,
    sendErrorReports: PropTypes.bool,
    sendPromotions: PropTypes.bool,
    twitter: PropTypes.string,
    useCookies: PropTypes.bool,
    venueManager: PropTypes.bool,
});


/***/ }),

/***/ "./src/PropTypes/Venue.ts":
/*!********************************!*\
  !*** ./src/PropTypes/Venue.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PropTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
exports.default = PropTypes.shape({
    _id: PropTypes.string.isRequired,
    dateCreated: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.instanceOf(Date)
    ]).isRequired,
    dateModified: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.instanceOf(Date)
    ]).isRequired,
    description: PropTypes.string.isRequired,
    email: PropTypes.string,
    facebook: PropTypes.string,
    facebookPageId: PropTypes.string,
    facebookPageName: PropTypes.string,
    facebookPageToken: PropTypes.string,
    google: PropTypes.string,
    icon: PropTypes.string,
    location: PropTypes.string.isRequired,
    metaData: PropTypes.string,
    name: PropTypes.string.isRequired,
    openCloseTimes: PropTypes.arrayOf(PropTypes.shape({
        closingTime: PropTypes.string,
        open: PropTypes.bool,
        openingTime: PropTypes.string
    })),
    owners: PropTypes.arrayOf(PropTypes.string),
    phone: PropTypes.string,
    photos: PropTypes.arrayOf(PropTypes.string),
    twitter: PropTypes.string,
    website: PropTypes.string
});


/***/ }),

/***/ "./src/PropTypes/index.ts":
/*!********************************!*\
  !*** ./src/PropTypes/index.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Band_1 = __webpack_require__(/*! ./Band */ "./src/PropTypes/Band.ts");
var Conversation_1 = __webpack_require__(/*! ./Conversation */ "./src/PropTypes/Conversation.ts");
var ErrorReport_1 = __webpack_require__(/*! ./ErrorReport */ "./src/PropTypes/ErrorReport.ts");
var FacebookAccount_1 = __webpack_require__(/*! ./FacebookAccount */ "./src/PropTypes/FacebookAccount.ts");
var Gig_1 = __webpack_require__(/*! ./Gig */ "./src/PropTypes/Gig.ts");
var Location_1 = __webpack_require__(/*! ./Location */ "./src/PropTypes/Location.ts");
var Notification_1 = __webpack_require__(/*! ./Notification */ "./src/PropTypes/Notification.ts");
var Page_1 = __webpack_require__(/*! ./Page */ "./src/PropTypes/Page.ts");
var Post_1 = __webpack_require__(/*! ./Post */ "./src/PropTypes/Post.ts");
var TwitterAccount_1 = __webpack_require__(/*! ./TwitterAccount */ "./src/PropTypes/TwitterAccount.ts");
var Upload_1 = __webpack_require__(/*! ./Upload */ "./src/PropTypes/Upload.ts");
var User_1 = __webpack_require__(/*! ./User */ "./src/PropTypes/User.ts");
var Venue_1 = __webpack_require__(/*! ./Venue */ "./src/PropTypes/Venue.ts");
exports.default = {
    Band: Band_1.default,
    Conversation: Conversation_1.default,
    ErrorReport: ErrorReport_1.default,
    FacebookAccount: FacebookAccount_1.default,
    Gig: Gig_1.default,
    Location: Location_1.default,
    Notification: Notification_1.default,
    Page: Page_1.default,
    Post: Post_1.default,
    TwitterAccount: TwitterAccount_1.default,
    Upload: Upload_1.default,
    User: User_1.default,
    Venue: Venue_1.default
};


/***/ }),

/***/ "./src/RESTModel.ts":
/*!**************************!*\
  !*** ./src/RESTModel.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var API_1 = __webpack_require__(/*! ./API */ "./src/API.ts");
var ModelNameToModel_1 = __webpack_require__(/*! ./ModelNameToModel */ "./src/ModelNameToModel.ts");
var RESTModel = /** @class */ (function () {
    function RESTModel(dataMaybe) {
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
                var data = JSON.parse(dataMaybe);
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
    Object.defineProperty(RESTModel.prototype, "dateCreated", {
        get: function () {
            var dateCreated = this.document.dateCreated || null;
            return dateCreated ? new Date(dateCreated) : dateCreated;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RESTModel.prototype, "dateModified", {
        get: function () {
            var dateModified = this.getField("dateModified") || null;
            return dateModified ? new Date(dateModified) : dateModified;
        },
        set: function (value) {
            this.changes.dateModified = new Date(value || undefined).toJSON();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RESTModel.prototype, "id", {
        get: function () {
            return this.getField("_id");
        },
        set: function (value) {
            this.setField("_id", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RESTModel.prototype, "_id", {
        get: function () {
            return this.getField("_id");
        },
        set: function (value) {
            this.setField("_id", value);
        },
        enumerable: true,
        configurable: true
    });
    RESTModel.deduceModelAndName = function (ModelMaybe) {
        return __awaiter(this, void 0, void 0, function () {
            var Model, modelName;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (ModelMaybe === null) {
                            throw new Error("Model Name or Model Missing");
                        }
                        Model = null;
                        modelName = null;
                        if (!(typeof ModelMaybe === "string")) return [3 /*break*/, 2];
                        return [4 /*yield*/, ModelNameToModel_1.default(ModelMaybe)];
                    case 1:
                        Model = _a.sent();
                        modelName = ModelMaybe;
                        return [3 /*break*/, 3];
                    case 2:
                        if (typeof ModelMaybe === "function") {
                            Model = ModelMaybe;
                            modelName = RESTModel.getModelName(ModelMaybe);
                        }
                        else {
                            throw new Error("Invalid first agument, expected string or function, got " + ModelMaybe);
                        }
                        _a.label = 3;
                    case 3:
                        if (typeof modelName !== "string") {
                            throw new Error("Missing model name from " + Model);
                        }
                        if (typeof Model !== "function") {
                            throw new Error("Model name (" + modelName + ") did not map to constructor");
                        }
                        return [2 /*return*/, {
                                Model: Model,
                                modelName: modelName
                            }];
                }
            });
        });
    };
    RESTModel.isValidId = function (id) {
        var pattern = RegExp("^([0-9a-fA-F]{24}|[0-9a-fA-F]{12})$", "g");
        return (typeof id === "string" && pattern.test(id));
    };
    RESTModel.getModelName = function (Model) {
        if (Model == null) {
            return null;
        }
        if (Model.ModelName) {
            return Model.ModelName;
        }
        if (Model.constructor && (Model.constructor.ModelName)) {
            return Model.constructor.ModelName;
        }
    };
    RESTModel.findByIdBase = function (ModelMaybe, id, hasWebSocket) {
        if (hasWebSocket === void 0) { hasWebSocket = false; }
        return __awaiter(this, void 0, void 0, function () {
            var cache, data, _a, Model, modelName_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!RESTModel.isValidId(id)) return [3 /*break*/, 6];
                        if (RESTModel.Cache.has(id)) {
                            cache = RESTModel.Cache.get(id);
                            if (cache && new Date(cache.expiration) < new Date()) {
                                return [2 /*return*/, cache];
                            }
                        }
                        data = null;
                        return [4 /*yield*/, RESTModel.deduceModelAndName(ModelMaybe)];
                    case 1:
                        _a = _b.sent(), Model = _a.Model, modelName_1 = _a.modelName;
                        if (!(API_1.default.useSocketIO && API_1.default.ShouldUseSocketIO && hasWebSocket)) return [3 /*break*/, 3];
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                return API_1.default.getSocket().then(function (socket) {
                                    if (socket) {
                                        return socket.emit("/API/" + modelName_1 + "/Retreive", id, resolve);
                                    }
                                }, reject);
                            })];
                    case 2:
                        data = _b.sent();
                        _b.label = 3;
                    case 3:
                        if (!!data) return [3 /*break*/, 5];
                        return [4 /*yield*/, API_1.default.call("GET", "/API/" + modelName_1 + "/" + id, null)];
                    case 4:
                        data = _b.sent();
                        _b.label = 5;
                    case 5:
                        if (data && RESTModel.isValidId(data._id)) {
                            data = new Model(data);
                            RESTModel.Cache.set(data._id, data);
                            return [2 /*return*/, data];
                        }
                        _b.label = 6;
                    case 6: return [2 /*return*/, null];
                }
            });
        });
    };
    RESTModel.findOneBase = function (ModelMaybe, criteria, hasWebSocket) {
        if (criteria === void 0) { criteria = {}; }
        if (hasWebSocket === void 0) { hasWebSocket = false; }
        return __awaiter(this, void 0, void 0, function () {
            var id, cache, data, _a, Model, modelName, route, socket_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (criteria === null) {
                            criteria = {};
                        }
                        if (Array.from(Object.keys(criteria)).length === 1 && typeof criteria._id === "string") {
                            id = criteria._id;
                            if (RESTModel.Cache.has(id)) {
                                cache = RESTModel.Cache.get(id);
                                if (cache && new Date(cache.expiration) < new Date()) {
                                    return [2 /*return*/, cache];
                                }
                            }
                        }
                        data = null;
                        return [4 /*yield*/, RESTModel.deduceModelAndName(ModelMaybe)];
                    case 1:
                        _a = _b.sent(), Model = _a.Model, modelName = _a.modelName;
                        route = "/API/" + modelName + "/FindOne";
                        if (!(API_1.default.useSocketIO && API_1.default.ShouldUseSocketIO && hasWebSocket)) return [3 /*break*/, 4];
                        return [4 /*yield*/, API_1.default.getSocket()];
                    case 2:
                        socket_1 = _b.sent();
                        if (!socket_1) return [3 /*break*/, 4];
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                try {
                                    socket_1.emit(route, criteria, resolve);
                                }
                                catch (e) {
                                    reject(e);
                                }
                            })];
                    case 3:
                        data = _b.sent();
                        _b.label = 4;
                    case 4:
                        if (!!data) return [3 /*break*/, 6];
                        return [4 /*yield*/, API_1.default.call("GET", route, criteria)];
                    case 5:
                        data = _b.sent();
                        _b.label = 6;
                    case 6:
                        if (data && RESTModel.isValidId(data._id)) {
                            data = new Model(data);
                            RESTModel.Cache.set(data._id, data);
                            return [2 /*return*/, data];
                        }
                        return [2 /*return*/, null];
                }
            });
        });
    };
    RESTModel.findManyBase = function (ModelMaybe, criteria, hasWebSocket) {
        if (criteria === void 0) { criteria = {}; }
        if (hasWebSocket === void 0) { hasWebSocket = false; }
        return __awaiter(this, void 0, void 0, function () {
            var items_1, data, _a, Model, modelName, route;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (criteria === null) {
                            criteria = {};
                        }
                        if (Array.from(Object.keys(criteria)).length === 1 && Array.isArray((criteria._id || criteria.id))) {
                            items_1 = [];
                            (criteria._id || criteria.id).forEach(function (id) {
                                if (typeof id === "string" && RESTModel.Cache.has(id)) {
                                    var cache = RESTModel.Cache.get(id);
                                    if (cache && new Date(cache.expiration) < new Date()) {
                                        items_1.push(cache);
                                    }
                                }
                            });
                            if (items_1.length === (criteria._id || criteria.id)) {
                                return [2 /*return*/, items_1];
                            }
                        }
                        data = null;
                        return [4 /*yield*/, RESTModel.deduceModelAndName(ModelMaybe)];
                    case 1:
                        _a = _b.sent(), Model = _a.Model, modelName = _a.modelName;
                        route = "/API/" + modelName + "/FindMany";
                        if (!(API_1.default.useSocketIO && API_1.default.ShouldUseSocketIO && hasWebSocket)) return [3 /*break*/, 3];
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                return API_1.default.getSocket().then(function (socket) {
                                    if (socket) {
                                        socket.emit(route, criteria, resolve);
                                    }
                                }, reject);
                            })];
                    case 2:
                        data = _b.sent();
                        _b.label = 3;
                    case 3:
                        criteria = criteria || {};
                        if (!!data) return [3 /*break*/, 5];
                        return [4 /*yield*/, API_1.default.call("GET", route, criteria)];
                    case 4:
                        data = _b.sent();
                        _b.label = 5;
                    case 5:
                        if (Array.isArray(data)) {
                            return [2 /*return*/, data.map(function (itemData) {
                                    var item = new Model(itemData);
                                    RESTModel.Cache.set(item._id, item);
                                    return item;
                                })];
                        }
                        return [2 /*return*/, []];
                }
            });
        });
    };
    RESTModel.prototype.setField = function (name, value) {
        if (this) {
            var currentValue = this.getField(name) || undefined;
            if (currentValue !== value) {
                this.changes[name] = value;
                this.dateModified = Date.now();
            }
        }
    };
    RESTModel.prototype.getField = function (name) {
        if (this) {
            var data = this.changes[name];
            if (typeof data !== "undefined") {
                return data;
            }
            data = this.document[name];
            if (typeof data !== "undefined") {
                return data;
            }
        }
        return null;
    };
    RESTModel.prototype.toObject = function () {
        var object = this.valid() ? __assign({}, this.changes, this.document) : null;
        if (typeof object === "object" && object) {
            if (typeof object.id !== "undefined") {
                delete object.id;
            }
            if (typeof object._id !== "undefined") {
                object._id = (object._id.toString() ? object._id : null);
            }
        }
        return object;
    };
    RESTModel.prototype.toString = function () {
        var object = this.toObject();
        return JSON.stringify(object);
    };
    RESTModel.prototype.valid = function () {
        if (!RESTModel.isValidId(this.id)) {
            throw new Error("Invalid id: " + this.id);
        }
        if (!this.dateModified || isNaN(Date.parse(this.dateModified))) {
            throw new Error("Invalid dateModified: " + this.dateModified);
        }
        if (!this.dateCreated || isNaN(Date.parse(this.dateCreated))) {
            throw new Error("Invalid dateCreated: " + this.dateCreated);
        }
        return true;
    };
    RESTModel.prototype.isValid = function () {
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
    };
    RESTModel.prototype.assign = function (data) {
        if (data === void 0) { data = {}; }
        Object.assign(this.changes, data);
        return this;
    };
    RESTModel.prototype.save = function (hasWebSocket) {
        if (hasWebSocket === void 0) { hasWebSocket = false; }
        return __awaiter(this, void 0, void 0, function () {
            var modelName, response, id, data;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        modelName = this.constructor.ModelName;
                        response = null;
                        id = this.document._id || null;
                        data = this.changes;
                        Object.keys(this.changes).forEach(function (key) {
                            if (data[key] === _this.document[key]) {
                                delete data[key];
                            }
                        });
                        data.id = this.changes._id || this.document._id || null;
                        if (!(API_1.default.useSocketIO && API_1.default.ShouldUseSocketIO && hasWebSocket)) return [3 /*break*/, 5];
                        if (!RESTModel.isValidId(id)) return [3 /*break*/, 2];
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                return API_1.default.getSocket().then(function (socket) {
                                    if (socket) {
                                        socket.emit("/API/" + modelName + "/Update", data, resolve);
                                    }
                                }, reject);
                            })];
                    case 1:
                        response = _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, new Promise(function (resolve, reject) {
                            return API_1.default.getSocket().then(function (socket) {
                                if (socket) {
                                    socket.emit("/API/" + modelName + "/Create", data, resolve);
                                }
                            }, reject);
                        })];
                    case 3:
                        response = _a.sent();
                        _a.label = 4;
                    case 4: return [3 /*break*/, 9];
                    case 5:
                        if (!RESTModel.isValidId(id)) return [3 /*break*/, 7];
                        return [4 /*yield*/, API_1.default.call("PUT", "/API/" + modelName + "/" + id, data)];
                    case 6:
                        response = _a.sent();
                        return [3 /*break*/, 9];
                    case 7: return [4 /*yield*/, API_1.default.call("POST", "/API/" + modelName + "/", data)];
                    case 8:
                        response = _a.sent();
                        _a.label = 9;
                    case 9:
                        if (response && response._id) {
                            this.document = response;
                            this.changes = {};
                            RESTModel.Cache.delete(id);
                            RESTModel.Cache.set(response._id, this);
                            return [2 /*return*/, this];
                        }
                        throw new Error("returned " + response);
                }
            });
        });
    };
    RESTModel.prototype.remove = function (hasWebSocket) {
        if (hasWebSocket === void 0) { hasWebSocket = false; }
        return __awaiter(this, void 0, void 0, function () {
            var id, response, modelName_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = this._id || null;
                        if (!RESTModel.isValidId(id)) return [3 /*break*/, 5];
                        response = null;
                        modelName_2 = this.constructor.ModelName;
                        if (!(API_1.default.useSocketIO && API_1.default.ShouldUseSocketIO && hasWebSocket)) return [3 /*break*/, 2];
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                return API_1.default.getSocket().then(function (socket) {
                                    if (socket) {
                                        socket.emit("/API/" + modelName_2 + "/Delete", id, function (res) {
                                            return resolve(res);
                                        });
                                    }
                                }, reject);
                            })];
                    case 1:
                        response = _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, API_1.default.call("DELETE", "/API/" + modelName_2 + "/" + id, null)];
                    case 3:
                        response = _a.sent();
                        _a.label = 4;
                    case 4:
                        RESTModel.Cache.set(id, null);
                        return [2 /*return*/, response];
                    case 5: throw new Error("Invalid id: " + id);
                }
            });
        });
    };
    RESTModel.ModelName = "RESTModel";
    RESTModel.Cache = new Map();
    return RESTModel;
}());
exports.default = RESTModel;


/***/ }),

/***/ "./src/Request.ts":
/*!************************!*\
  !*** ./src/Request.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Created by corynull on Nov 30 2017 5:27 AM.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var API_1 = __webpack_require__(/*! ./API */ "./src/API.ts");
var RESTModel_1 = __webpack_require__(/*! ./RESTModel */ "./src/RESTModel.ts");
var Request = /** @class */ (function (_super) {
    __extends(Request, _super);
    function Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Request.prototype, "to", {
        get: function () {
            return this.getField("to");
        },
        set: function (value) {
            this.setField("to", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Request.prototype, "from", {
        get: function () {
            return this.getField("from");
        },
        set: function (value) {
            this.setField("from", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Request.prototype, "status", {
        get: function () {
            return this.getField("status");
        },
        set: function (value) {
            this.setField("status", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Request.prototype, "options", {
        get: function () {
            return this.getField("options");
        },
        set: function (value) {
            this.setField("options", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Request.prototype, "type", {
        get: function () {
            return this.getField("type");
        },
        set: function (value) {
            this.setField("type", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Request.prototype, "userData", {
        get: function () {
            return this.getField("userData");
        },
        set: function (value) {
            this.setField("userData", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Request.prototype, "emailSent", {
        get: function () {
            return this.getField("emailSent");
        },
        set: function (value) {
            this.setField("emailSent", value);
        },
        enumerable: true,
        configurable: true
    });
    Request.createBandOwnershipRequest = function (band, from, to) {
        return new Promise(function (resolve, reject) {
            API_1.default.call("POST", "/API/Request", {
                from: from,
                to: to,
                type: "BandOwnership",
                userData: {
                    bandId: band
                }
            }).then(function (data) {
                resolve(new Request(data));
            }, reject);
        });
    };
    Request.createVenueOwnershipRequest = function (venue, from, to) {
        return new Promise(function (resolve, reject) {
            API_1.default.call("POST", "/API/Request", {
                from: from,
                to: to,
                type: "VenueOwnership",
                userData: {
                    venueId: venue
                }
            }).then(function (data) {
                resolve(new Request(data));
            }, reject);
        });
    };
    Request.createGigNegotiation = function (gig, from, to) {
        return new Promise(function (resolve, reject) {
            API_1.default.call("POST", "/API/Request", {
                from: from,
                to: to,
                type: "GigNegotiation",
                userData: {
                    gigId: gig
                }
            }).then(function (data) {
                resolve(new Request(data));
            }, reject);
        });
    };
    Request.getAllOwned = function () {
        return RESTModel_1.default.findManyBase(Request, null);
    };
    Request.findById = function (id) {
        return RESTModel_1.default.findByIdBase(Request, id);
    };
    Request.prototype.execute = function (option) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, API_1.default.call("POST", "/API/Request/" + this._id + "/" + option, null)];
                    case 1:
                        request = _a.sent();
                        this.assign(request);
                        return [2 /*return*/, this];
                }
            });
        });
    };
    Request.ModelName = "Request";
    return Request;
}(RESTModel_1.default));
exports.default = Request;


/***/ }),

/***/ "./src/TwitterAccount.ts":
/*!*******************************!*\
  !*** ./src/TwitterAccount.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Created by corynull on 5/17/17.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var API_1 = __webpack_require__(/*! ./API */ "./src/API.ts");
var RESTModel_1 = __webpack_require__(/*! ./RESTModel */ "./src/RESTModel.ts");
var User_1 = __webpack_require__(/*! ./User */ "./src/User.ts");
var TwitterAccount = /** @class */ (function (_super) {
    __extends(TwitterAccount, _super);
    function TwitterAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(TwitterAccount.prototype, "userId", {
        get: function () {
            return this.getField("userId");
        },
        set: function (value) {
            this.setField("userId", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TwitterAccount.prototype, "accessToken", {
        get: function () {
            return this.getField("accessToken");
        },
        set: function (value) {
            this.setField("accessToken", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TwitterAccount.prototype, "tokenSecret", {
        get: function () {
            return this.getField("tokenSecret");
        },
        set: function (value) {
            this.setField("tokenSecret", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TwitterAccount.prototype, "profile", {
        get: function () {
            return this.getField("profile");
        },
        set: function (value) {
            this.setField("profile", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TwitterAccount.prototype, "accountId", {
        get: function () {
            return this.getField("accountId");
        },
        set: function (value) {
            this.setField("accountId", value);
        },
        enumerable: true,
        configurable: true
    });
    TwitterAccount.findById = function (id) {
        return new Promise(function (resolve, reject) {
            if (typeof id === "string" && id !== "") {
                API_1.default.call("GET", "/API/TwitterAccount/" + id, null).then(function (response) {
                    var account = response || null;
                    if (account) {
                        resolve(new TwitterAccount(account));
                    }
                    else {
                        reject(new Error(account + " returned"));
                    }
                }, reject);
            }
            else {
                resolve(null);
            }
        });
    };
    TwitterAccount.prototype.getUser = function () {
        return RESTModel_1.default.findByIdBase(User_1.default, this.userId, true);
    };
    TwitterAccount.prototype.userIsOwner = function (user) {
        if (typeof user === "string") {
            return user === this.userId;
        }
        if (typeof user === "function") {
            return user._id === this.userId;
        }
        return false;
    };
    TwitterAccount.prototype.goToTwitterAccount = function () {
        if (typeof window !== "undefined") {
            // We are on a browser
            window.location.href = "https://twitter.com?profile_id=" + this.accountId;
        }
    };
    TwitterAccount.prototype.isValid = function () {
        if (!_super.prototype.isValid.call(this)) {
            return false;
        }
        if (!this.userId || typeof this.userId !== "string") {
            return false;
        }
        if (!this.profile || typeof this.profile !== "object") {
            return false;
        }
        return true;
    };
    TwitterAccount.ModelName = "TwitterAccount";
    return TwitterAccount;
}(RESTModel_1.default));
exports.default = TwitterAccount;


/***/ }),

/***/ "./src/Upload.ts":
/*!***********************!*\
  !*** ./src/Upload.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Created by corynull on 4/10/17.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var RESTModel_1 = __webpack_require__(/*! ./RESTModel */ "./src/RESTModel.ts");
var User_1 = __webpack_require__(/*! ./User */ "./src/User.ts");
var Upload = /** @class */ (function (_super) {
    __extends(Upload, _super);
    function Upload() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Upload.prototype, "fileName", {
        get: function () {
            return this.getField("fileName");
        },
        set: function (value) {
            this.setField("fileName", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Upload.prototype, "fileData", {
        get: function () {
            return this.getField("fileData");
        },
        set: function (value) {
            this.setField("fileData", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Upload.prototype, "title", {
        get: function () {
            return this.getField("title");
        },
        set: function (value) {
            this.setField("title", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Upload.prototype, "description", {
        get: function () {
            return this.getField("description");
        },
        set: function (value) {
            this.setField("description", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Upload.prototype, "owners", {
        get: function () {
            return this.getField("owners");
        },
        set: function (value) {
            this.setField("owners", value);
        },
        enumerable: true,
        configurable: true
    });
    Upload.uploadFile = function (dataUrl, fileName) {
        return __awaiter(this, void 0, void 0, function () {
            var upload;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        upload = new Upload({ fileData: dataUrl, fileName: fileName });
                        return [4 /*yield*/, upload.save(true)];
                    case 1:
                        upload = _a.sent();
                        return [2 /*return*/, upload];
                }
            });
        });
    };
    Upload.findById = function (id) {
        return RESTModel_1.default.findByIdBase(Upload, id);
    };
    Upload.findMany = function (criteria) {
        return RESTModel_1.default.findManyBase(Upload, criteria, true);
    };
    Upload.getAllOwned = function () {
        return RESTModel_1.default.findManyBase(Upload, null, true);
    };
    Upload.prototype.getOwners = function () {
        var owners = Array.from(this.owners);
        if (owners.length !== 0) {
            return RESTModel_1.default.findManyBase(User_1.default, {
                _id: owners
            }, true);
        }
        return Promise.resolve([]);
    };
    Upload.prototype.userIsOwner = function (user) {
        if (Array.isArray(this.owners)) {
            var userId_1;
            if (typeof user === "string") {
                userId_1 = user;
            }
            else if (typeof user === "object" && user) {
                userId_1 = user._id;
            }
            return this.owners.find(function (id) { return id === userId_1; }) !== undefined;
        }
        return false;
    };
    Upload.prototype.isValid = function () {
        if (!_super.prototype.isValid.call(this)) {
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
    };
    Upload.ModelName = "Upload";
    return Upload;
}(RESTModel_1.default));
exports.default = Upload;


/***/ }),

/***/ "./src/User.ts":
/*!*********************!*\
  !*** ./src/User.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Created by corynull on 4/1/17.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var API_1 = __webpack_require__(/*! ./API */ "./src/API.ts");
var Band_1 = __webpack_require__(/*! ./Band */ "./src/Band.ts");
var Conversation_1 = __webpack_require__(/*! ./Conversation */ "./src/Conversation.ts");
var FacebookAccount_1 = __webpack_require__(/*! ./FacebookAccount */ "./src/FacebookAccount.ts");
var Gig_1 = __webpack_require__(/*! ./Gig */ "./src/Gig.ts");
var Location_1 = __webpack_require__(/*! ./Location */ "./src/Location.ts");
var Page_1 = __webpack_require__(/*! ./Page */ "./src/Page.ts");
var Post_1 = __webpack_require__(/*! ./Post */ "./src/Post.ts");
var RESTModel_1 = __webpack_require__(/*! ./RESTModel */ "./src/RESTModel.ts");
var TwitterAccount_1 = __webpack_require__(/*! ./TwitterAccount */ "./src/TwitterAccount.ts");
var Upload_1 = __webpack_require__(/*! ./Upload */ "./src/Upload.ts");
var Venue_1 = __webpack_require__(/*! ./Venue */ "./src/Venue.ts");
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(User.prototype, "password", {
        get: function () {
            return this.getField("password");
        },
        set: function (value) {
            this.setField("password", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "confirmPassword", {
        get: function () {
            return this.getField("confirmPassword");
        },
        set: function (value) {
            this.setField("confirmPassword", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "icon", {
        get: function () {
            return this.getField("icon");
        },
        set: function (value) {
            this.setField("icon", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "active", {
        get: function () {
            return this.getField("active");
        },
        set: function (value) {
            this.setField("active", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "admin", {
        get: function () {
            return this.getField("admin") === true;
        },
        set: function (value) {
            this.setField("admin", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "firstName", {
        get: function () {
            return this.getField("firstName");
        },
        set: function (value) {
            this.setField("firstName", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "middleName", {
        get: function () {
            return this.getField("middleName");
        },
        set: function (value) {
            this.setField("middleName", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "lastName", {
        get: function () {
            return this.getField("lastName");
        },
        set: function (value) {
            this.setField("lastName", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "birthday", {
        get: function () {
            var birthday = this.getField("birthday") || null;
            return birthday ? new Date(birthday) : birthday;
        },
        set: function (value) {
            this.setField("birthday", new Date(value || undefined).toJSON());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "country", {
        get: function () {
            return this.getField("country");
        },
        set: function (value) {
            this.setField("country", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "bandManager", {
        get: function () {
            return this.getField("bandManager") === true;
        },
        set: function (value) {
            this.setField("bandManager", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "venueManager", {
        get: function () {
            return this.getField("venueManager") === true;
        },
        set: function (value) {
            this.setField("venueManager", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "betaFeatureUser", {
        get: function () {
            return this.getField("betaFeatureUser") === true;
        },
        set: function (value) {
            this.setField("betaFeatureUser", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "sendAnonymousReports", {
        get: function () {
            return this.getField("sendAnonymousReports") === true;
        },
        set: function (value) {
            this.setField("sendAnonymousReports", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "sendErrorReports", {
        get: function () {
            return this.getField("sendErrorReports") === true;
        },
        set: function (value) {
            this.setField("sendErrorReports", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "sendEmails", {
        get: function () {
            return this.getField("sendEmails") === true;
        },
        set: function (value) {
            this.setField("sendEmails", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "sendPromotions", {
        get: function () {
            return this.getField("sendPromotions") === true;
        },
        set: function (value) {
            this.setField("sendPromotions", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "useCookies", {
        get: function () {
            return this.getField("useCookies") === true;
        },
        set: function (value) {
            this.setField("useCookies", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "fullName", {
        get: function () {
            return (this.firstName || "") + " " + (this.middleName || "") + " " + (this.lastName ||
                "");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "email", {
        get: function () {
            return this.getField("email");
        },
        set: function (value) {
            this.setField("email", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "salt", {
        get: function () {
            return this.getField("salt");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "hash", {
        get: function () {
            return this.getField("hash");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "facebook", {
        get: function () {
            return this.getField("facebook");
        },
        set: function (value) {
            this.setField("facebook", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "twitter", {
        get: function () {
            return this.getField("twitter");
        },
        set: function (value) {
            this.setField("twitter", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "description", {
        get: function () {
            return this.getField("description");
        },
        set: function (value) {
            this.setField("description", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "emailVerified", {
        get: function () {
            return this.getField("emailVerified");
        },
        set: function (value) {
            this.setField("emailVerified", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "attempts", {
        get: function () {
            return this.getField("attempts");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "lastLoginIP", {
        get: function () {
            return this.getField("lastLoginIP");
        },
        set: function (value) {
            this.setField("lastLoginIP", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "lastLogin", {
        get: function () {
            var lastLogin = this.getField("lastLogin") || null;
            return lastLogin ? new Date(lastLogin) : lastLogin;
        },
        set: function (value) {
            this.setField("lastLogin", new Date(value).toJSON());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "canContact", {
        get: function () {
            return this.getField("canContact") === true;
        },
        set: function (value) {
            this.setField("canContact", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "canFind", {
        get: function () {
            return this.getField("canFind") === true;
        },
        set: function (value) {
            this.setField("canFind", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "options", {
        get: function () {
            return this.getField("options");
        },
        set: function (value) {
            this.setField("options", value);
        },
        enumerable: true,
        configurable: true
    });
    User.verifyEmail = function (id, secret) {
        return API_1.default.call("GET", "/API/User/Verify", {
            id: id,
            secret: secret
        });
    };
    User.sendEmailVerification = function () {
        return API_1.default.call("POST", "/API/User/Verify", null);
    };
    User.getAllConversations = function () {
        return RESTModel_1.default.findManyBase(Conversation_1.default, null, true);
    };
    User.getAllNotifications = function () {
        return RESTModel_1.default.findManyBase("Notification", null, true);
    };
    User.getAllPosts = function () {
        return RESTModel_1.default.findManyBase(Post_1.default, null, true);
    };
    User.getAllBands = function () {
        return RESTModel_1.default.findManyBase(Band_1.default, null, true);
    };
    User.getAllVenues = function () {
        return RESTModel_1.default.findManyBase(Venue_1.default, null, true);
    };
    User.getAllGigs = function () {
        return RESTModel_1.default.findManyBase(Gig_1.default, null, true);
    };
    User.getAllUploads = function () {
        return RESTModel_1.default.findManyBase(Upload_1.default, null, true);
    };
    User.findFacebookPages = function (term) {
        return new Promise(function (resolve, reject) {
            if (term === "") {
                resolve();
            }
            else {
                API_1.default.call("GET", "/API/FacebookAccount/FindPages", { term: term }).then(resolve, reject);
            }
        });
    };
    User.search = function (q, modelName, skip, limit) {
        var _this = this;
        if (modelName === void 0) { modelName = null; }
        if (skip === void 0) { skip = 0; }
        if (limit === void 0) { limit = Number.POSITIVE_INFINITY; }
        return new Promise(function (resolve, reject) {
            if (q === "" || q === undefined) {
                resolve();
            }
            else {
                var data_1 = {
                    limit: undefined,
                    model: undefined,
                    q: undefined,
                    skip: undefined
                };
                data_1.q = q;
                if (modelName !== null && modelName !== "Any") {
                    data_1.model = modelName;
                }
                if (Number.isFinite(Number(skip))) {
                    data_1.skip = Number(skip);
                }
                if (Number.isFinite(Number(limit))) {
                    data_1.limit = Number(limit);
                }
                var Return_1 = function (results) {
                    var query = results.query;
                    var totalFound = results.totalFound;
                    if (!query) {
                        reject(query);
                    }
                    var bands = [];
                    var venues = [];
                    var users = [];
                    var pages = [];
                    var locations = [];
                    var uploads = [];
                    query.forEach(function (item) { return __awaiter(_this, void 0, void 0, function () {
                        var mName;
                        return __generator(this, function (_a) {
                            if (item && item.ModelName) {
                                mName = item.ModelName;
                                if (mName === "Band") {
                                    bands.push(new Band_1.default(item));
                                }
                                else if (mName === "Venue") {
                                    venues.push(new Venue_1.default(item));
                                }
                                else if (mName === "User") {
                                    users.push(new User(item));
                                }
                                else if (mName === "Page") {
                                    pages.push(new Page_1.default(item));
                                }
                                else if (mName === "Location") {
                                    locations.push(new Location_1.default(item));
                                }
                                else if (mName === "Upload") {
                                    uploads.push(new Upload_1.default(item));
                                }
                            }
                            return [2 /*return*/];
                        });
                    }); });
                    var sorted = {
                        bands: bands,
                        locations: locations,
                        pages: pages,
                        totalFound: totalFound,
                        uploads: uploads,
                        users: users,
                        venues: venues
                    };
                    resolve(sorted);
                };
                if (API_1.default.useSocketIO && API_1.default.ShouldUseSocketIO) {
                    API_1.default.getSocket().then(function (socket) {
                        if (socket) {
                            socket.emit("/API/TextSearch", data_1, Return_1);
                        }
                    }, reject);
                }
                else {
                    API_1.default.call("GET", "/API/TextSearch", data_1).then(Return_1, reject);
                }
            }
        });
    };
    User.findMany = function (criteria) {
        return RESTModel_1.default.findManyBase(User, criteria, true);
    };
    User.findOne = function (criteria) {
        return RESTModel_1.default.findOneBase(User, criteria, true);
    };
    User.onChange = function (callback) {
        var id = Date.now();
        User.Callbacks.set(id, callback);
        return function () {
            User.Callbacks.delete(id);
        };
    };
    User.setUser = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                try {
                    if (typeof data === "object" && data) {
                        User.Current = new User(data);
                        if (API_1.default.SessionStorageSupported) {
                            sessionStorage.setItem("user", JSON.stringify(data));
                        }
                        User.Callbacks.forEach(function (callback) { return callback(User.Current); });
                    }
                    else {
                        User.Current = null;
                        API_1.default.token = null;
                        if (API_1.default.SessionStorageSupported) {
                            sessionStorage.removeItem("user");
                        }
                        User.Callbacks.forEach(function (callback) { return callback(null); });
                    }
                }
                catch (e) {
                    console.error(e);
                }
                return [2 /*return*/, User.Current];
            });
        });
    };
    User.getUser = function (force) {
        return __awaiter(this, void 0, void 0, function () {
            var data, dateNow;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        data = null;
                        dateNow = new Date();
                        if (!force && API_1.default.expires && dateNow < API_1.default.expires) {
                            if (User.Current !== null) {
                                /* If we already have the current user cached, return it... */
                                return [2 /*return*/, User.Current];
                            }
                            else if (API_1.default.SessionStorageSupported) {
                                /* If the user is stored in session storage. */
                                data = JSON.parse(sessionStorage.getItem("user"));
                                if (data) {
                                    return [2 /*return*/, User.setUser(data)];
                                }
                            }
                        }
                        if (!(API_1.default.useSocketIO && API_1.default.ShouldUseSocketIO)) return [3 /*break*/, 2];
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                API_1.default.getSocket().then(function (socket) {
                                    if (socket) {
                                        socket.emit("/API/User/Retreive", resolve);
                                    }
                                }, reject);
                            })];
                    case 1:
                        data = _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, API_1.default.call("GET", "/API/User", null)];
                    case 3:
                        data = _a.sent();
                        _a.label = 4;
                    case 4:
                        if (data) {
                            return [2 /*return*/, User.setUser(data)];
                        }
                        return [2 /*return*/, User.setUser(null)];
                }
            });
        });
    };
    User.findById = function (id) {
        return RESTModel_1.default.findByIdBase(User, id, true);
    };
    User.connectFacebook = function () {
        window.location.href = API_1.default.rootURL + "/API/Auth/Facebook";
    };
    User.facebookLogIn = function () {
        window.location.href = API_1.default.rootURL + "/API/Login/Facebook";
    };
    User.payPalLogIn = function () {
        window.location.href = API_1.default.rootURL + "/API/Auth/PayPal";
    };
    User.userLogIn = function (email, password) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!email) return [3 /*break*/, 1];
                        throw new Error("No email");
                    case 1:
                        if (!!password) return [3 /*break*/, 2];
                        throw new Error("No password");
                    case 2:
                        response = null;
                        if (!(API_1.default.useSocketIO && API_1.default.ShouldUseSocketIO)) return [3 /*break*/, 4];
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                API_1.default.getSocket().then(function (socket) {
                                    if (socket) {
                                        socket.emit("/API/User/SignIn", {
                                            email: email,
                                            password: password
                                        }, resolve);
                                    }
                                }, reject);
                            })];
                    case 3:
                        response = _a.sent();
                        return [3 /*break*/, 6];
                    case 4: return [4 /*yield*/, API_1.default.call("POST", "/API/User/SignIn", {
                            email: email,
                            password: password
                        })];
                    case 5:
                        response = _a.sent();
                        _a.label = 6;
                    case 6:
                        // TODO: Create error for unauthorized access vs general error
                        if (response && response.user && response.token) {
                            API_1.default.expires = response.expires;
                            API_1.default.token = response.token.toString();
                            return [2 /*return*/, User.setUser(response.user)];
                        }
                        else {
                            throw new Error("Unauthorized");
                        }
                        _a.label = 7;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    User.userLogOut = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        response = null;
                        if (!(API_1.default.useSocketIO && API_1.default.ShouldUseSocketIO)) return [3 /*break*/, 2];
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                API_1.default.getSocket().then(function (socket) {
                                    if (socket) {
                                        socket.emit("/API/User/SignOut", null, resolve);
                                    }
                                }, reject);
                            })];
                    case 1:
                        response = _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, API_1.default.call("POST", "/API/User/SignOut", null)];
                    case 3:
                        response = _a.sent();
                        _a.label = 4;
                    case 4: return [4 /*yield*/, User.setUser(null)];
                    case 5:
                        user = _a.sent();
                        if (user && user.valid()) {
                            throw new Error(JSON.stringify(user) + " returned, failed to log out?");
                        }
                        else {
                            return [2 /*return*/, user];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    User.sendPasswordResetEmail = function (email) {
        return API_1.default.call("POST", "/User/Reset", { email: email });
    };
    User.registerUser = function (userData) {
        return new Promise(function (resolve, reject) {
            if (userData && typeof userData === "object") {
                if (userData.email) {
                    var re = new RegExp(["^(([^<>()[].,;:s@\"]+",
                        "(.[^<>()[].,;:s@\"]+)*)|(\".+\"))",
                        "@(([^<>()[].,;:s@\"]+.)+",
                        "[^<>()[].,;:s@\"]{2,})$"].join(""), "i");
                    if (re[Symbol.search](userData.email) !== 0) {
                        return reject(new Error("Invalid email address"));
                    }
                }
                else {
                    return reject(new Error("Email is required"));
                }
                if (userData.password) {
                    var symbolTest = /[^a-zA-Z0-9]/gu;
                    var numberTest = /[0-9]/g;
                    var lowercasePassword = userData.password.toLowerCase();
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
            if (API_1.default.useSocketIO && API_1.default.ShouldUseSocketIO) {
                return new Promise(function (res, rej) {
                    API_1.default.getSocket().then(function (socket) {
                        if (socket) {
                            socket.emit("/API/User/Create", userData, res);
                        }
                    }, rej);
                });
            }
            return API_1.default.call("POST", "/API/User", userData).then(function (data) {
                if (data) {
                    User.setUser(data).then(function (user) {
                        resolve(user);
                    }, reject);
                }
                else {
                    reject(new Error(JSON.stringify(data) + " returned"));
                }
            }, reject);
        });
    };
    User.NotifyAdminsOfError = function () {
        console.error("Not implemented yet.");
    };
    User.prototype.getIcon = function () {
        return RESTModel_1.default.findByIdBase(Upload_1.default, this.icon, true);
    };
    User.prototype.getTwitterAccount = function () {
        return RESTModel_1.default.findByIdBase(TwitterAccount_1.default, this.twitter);
    };
    User.prototype.getFacebookAccount = function () {
        return RESTModel_1.default.findByIdBase(FacebookAccount_1.default, this.facebook);
    };
    User.prototype.validatePassword = function (maybePassword) {
        var password = maybePassword || "";
        var decimalTest = /\d/;
        var symbolTest = /\W/;
        var lowercasePassword = password.toLowerCase();
        var lowercaseFirstName = this.firstName.toLowerCase();
        var lowercaseLastName = this.lastName.toLowerCase();
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
    };
    User.prototype.isValid = function () {
        if (!_super.prototype.isValid.call(this)) {
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
    };
    User.prototype.valid = function () {
        _super.prototype.valid.call(this);
        // Type checks
        if (typeof this.firstName !== "string") {
            throw new Error("Invalid firstName: " + this.firstName);
        }
        if (typeof this.lastName !== "string") {
            throw new Error("Invalid lastName: " + this.lastName);
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
    };
    User.prototype.save = function () {
        return RESTModel_1.default.prototype.save.call(this, true);
    };
    User.prototype.remove = function () {
        return RESTModel_1.default.prototype.remove.call(this, true);
    };
    User.ModelName = "User";
    User.Current = null;
    User.Callbacks = new Map();
    User.agreement = null;
    return User;
}(RESTModel_1.default));
exports.default = User;


/***/ }),

/***/ "./src/Venue.ts":
/*!**********************!*\
  !*** ./src/Venue.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Created by corynull on 4/5/17.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var FacebookAccount_1 = __webpack_require__(/*! ./FacebookAccount */ "./src/FacebookAccount.ts");
var Gig_1 = __webpack_require__(/*! ./Gig */ "./src/Gig.ts");
var Location_1 = __webpack_require__(/*! ./Location */ "./src/Location.ts");
var RESTModel_1 = __webpack_require__(/*! ./RESTModel */ "./src/RESTModel.ts");
var TwitterAccount_1 = __webpack_require__(/*! ./TwitterAccount */ "./src/TwitterAccount.ts");
var Upload_1 = __webpack_require__(/*! ./Upload */ "./src/Upload.ts");
var User_1 = __webpack_require__(/*! ./User */ "./src/User.ts");
var Venue = /** @class */ (function (_super) {
    __extends(Venue, _super);
    function Venue() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Venue.prototype, "name", {
        get: function () {
            return this.getField("name");
        },
        set: function (value) {
            this.setField("name", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Venue.prototype, "description", {
        get: function () {
            return this.getField("description");
        },
        set: function (value) {
            this.setField("description", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Venue.prototype, "email", {
        get: function () {
            return this.getField("email");
        },
        set: function (value) {
            this.setField("email", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Venue.prototype, "website", {
        get: function () {
            return this.getField("website");
        },
        set: function (value) {
            this.setField("website", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Venue.prototype, "phone", {
        get: function () {
            return this.getField("phone");
        },
        set: function (value) {
            this.setField("phone", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Venue.prototype, "location", {
        get: function () {
            return this.getField("location");
        },
        set: function (value) {
            this.setField("location", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Venue.prototype, "openCloseTimes", {
        get: function () {
            return this.getField("openCloseTimes");
        },
        set: function (value) {
            this.setField("openCloseTimes", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Venue.prototype, "icon", {
        get: function () {
            return this.getField("icon");
        },
        set: function (value) {
            this.setField("icon", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Venue.prototype, "photos", {
        get: function () {
            return this.getField("photos");
        },
        set: function (value) {
            this.setField("photos", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Venue.prototype, "owners", {
        get: function () {
            return this.getField("owners");
        },
        set: function (value) {
            this.setField("owners", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Venue.prototype, "facebook", {
        get: function () {
            return this.getField("facebook");
        },
        set: function (value) {
            this.setField("facebook", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Venue.prototype, "facebookPageId", {
        get: function () {
            return this.getField("facebookPageId");
        },
        set: function (value) {
            this.setField("facebookPageId", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Venue.prototype, "facebookPageName", {
        get: function () {
            return this.getField("facebookPageName");
        },
        set: function (value) {
            this.setField("facebookPageName", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Venue.prototype, "facebookPageToken", {
        get: function () {
            return this.getField("facebookPageToken");
        },
        set: function (value) {
            this.setField("facebookPageToken", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Venue.prototype, "twitter", {
        get: function () {
            return this.getField("twitter");
        },
        set: function (value) {
            this.setField("twitter", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Venue.prototype, "google", {
        get: function () {
            return this.getField("google");
        },
        set: function (value) {
            this.setField("google", value);
        },
        enumerable: true,
        configurable: true
    });
    Venue.findOne = function (criteria) {
        return RESTModel_1.default.findOneBase(Venue, criteria, true);
    };
    Venue.findMany = function (criteria) {
        return RESTModel_1.default.findManyBase(Venue, criteria, true);
    };
    Venue.findById = function (id) {
        return RESTModel_1.default.findByIdBase(Venue, id, true);
    };
    Venue.getAllOwned = function () {
        return RESTModel_1.default.findManyBase(Venue, null, true);
    };
    Venue.prototype.save = function () {
        return RESTModel_1.default.prototype.save.call(this, true);
    };
    Venue.prototype.remove = function () {
        return RESTModel_1.default.prototype.remove.call(this, true);
    };
    Venue.prototype.getIcon = function () {
        return RESTModel_1.default.findByIdBase(Upload_1.default, this.icon, true);
    };
    Venue.prototype.getPhotos = function () {
        var photos = Array.from(this.photos);
        if (photos.length !== 0) {
            return RESTModel_1.default.findManyBase(Upload_1.default, {
                _id: photos
            }, true);
        }
        return Promise.resolve([]);
    };
    Venue.prototype.getOwners = function () {
        var owners = Array.from(this.owners);
        if (owners.length !== 0) {
            return RESTModel_1.default.findManyBase(User_1.default, {
                _id: owners
            }, true);
        }
        return Promise.resolve([]);
    };
    Venue.prototype.getGigs = function () {
        return Gig_1.default.findByVenue(this._id);
    };
    Venue.prototype.getTwitterAccount = function () {
        return RESTModel_1.default.findByIdBase(TwitterAccount_1.default, this.twitter, true);
    };
    Venue.prototype.getFacebookAccount = function () {
        return RESTModel_1.default.findByIdBase(FacebookAccount_1.default, this.facebook, true);
    };
    Venue.prototype.getLocation = function () {
        return RESTModel_1.default.findByIdBase(Location_1.default, this.location, true);
    };
    Venue.prototype.isValid = function () {
        var self = this;
        if (!_super.prototype.isValid.call(this)) {
            return false;
        }
        if (!RESTModel_1.default.isValidId(this.location)) {
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
        if (!this.owners.every(function (owner) { return self.userIsOwner(owner); })) {
            return false;
        }
        return true;
    };
    // TODO: Create isOpen method
    Venue.prototype.userIsOwner = function (user) {
        if (Array.isArray(this.owners)) {
            var userId_1;
            if (typeof user === "string") {
                userId_1 = user;
            }
            else if (typeof user === "object" && user) {
                userId_1 = user._id;
            }
            return this.owners.find(function (id) { return id === userId_1; }) !== undefined;
        }
        return false;
    };
    Venue.ModelName = "Venue";
    return Venue;
}(RESTModel_1.default));
exports.default = Venue;


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