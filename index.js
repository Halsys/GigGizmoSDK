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

/***/ "./node_modules/axios/lib/adapters/http.js":
/*!*************************************************!*\
  !*** ./node_modules/axios/lib/adapters/http.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var settle = __webpack_require__(/*! ./../core/settle */ "./node_modules/axios/lib/core/settle.js");
var buildURL = __webpack_require__(/*! ./../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var http = __webpack_require__(/*! http */ "http");
var https = __webpack_require__(/*! https */ "https");
var httpFollow = __webpack_require__(/*! follow-redirects */ "./node_modules/follow-redirects/index.js").http;
var httpsFollow = __webpack_require__(/*! follow-redirects */ "./node_modules/follow-redirects/index.js").https;
var url = __webpack_require__(/*! url */ "url");
var zlib = __webpack_require__(/*! zlib */ "zlib");
var pkg = __webpack_require__(/*! ./../../package.json */ "./node_modules/axios/package.json");
var createError = __webpack_require__(/*! ../core/createError */ "./node_modules/axios/lib/core/createError.js");
var enhanceError = __webpack_require__(/*! ../core/enhanceError */ "./node_modules/axios/lib/core/enhanceError.js");

/*eslint consistent-return:0*/
module.exports = function httpAdapter(config) {
  return new Promise(function dispatchHttpRequest(resolve, reject) {
    var data = config.data;
    var headers = config.headers;
    var timer;

    // Set User-Agent (required by some servers)
    // Only set header if it hasn't been set in config
    // See https://github.com/axios/axios/issues/69
    if (!headers['User-Agent'] && !headers['user-agent']) {
      headers['User-Agent'] = 'axios/' + pkg.version;
    }

    if (data && !utils.isStream(data)) {
      if (Buffer.isBuffer(data)) {
        // Nothing to do...
      } else if (utils.isArrayBuffer(data)) {
        data = new Buffer(new Uint8Array(data));
      } else if (utils.isString(data)) {
        data = new Buffer(data, 'utf-8');
      } else {
        return reject(createError(
          'Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream',
          config
        ));
      }

      // Add Content-Length header if data exists
      headers['Content-Length'] = data.length;
    }

    // HTTP basic authentication
    var auth = undefined;
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      auth = username + ':' + password;
    }

    // Parse url
    var parsed = url.parse(config.url);
    var protocol = parsed.protocol || 'http:';

    if (!auth && parsed.auth) {
      var urlAuth = parsed.auth.split(':');
      var urlUsername = urlAuth[0] || '';
      var urlPassword = urlAuth[1] || '';
      auth = urlUsername + ':' + urlPassword;
    }

    if (auth) {
      delete headers.Authorization;
    }

    var isHttps = protocol === 'https:';
    var agent = isHttps ? config.httpsAgent : config.httpAgent;

    var options = {
      path: buildURL(parsed.path, config.params, config.paramsSerializer).replace(/^\?/, ''),
      method: config.method,
      headers: headers,
      agent: agent,
      auth: auth
    };

    if (config.socketPath) {
      options.socketPath = config.socketPath;
    } else {
      options.hostname = parsed.hostname;
      options.port = parsed.port;
    }

    var proxy = config.proxy;
    if (!proxy && proxy !== false) {
      var proxyEnv = protocol.slice(0, -1) + '_proxy';
      var proxyUrl = process.env[proxyEnv] || process.env[proxyEnv.toUpperCase()];
      if (proxyUrl) {
        var parsedProxyUrl = url.parse(proxyUrl);
        proxy = {
          host: parsedProxyUrl.hostname,
          port: parsedProxyUrl.port
        };

        if (parsedProxyUrl.auth) {
          var proxyUrlAuth = parsedProxyUrl.auth.split(':');
          proxy.auth = {
            username: proxyUrlAuth[0],
            password: proxyUrlAuth[1]
          };
        }
      }
    }

    if (proxy) {
      options.hostname = proxy.host;
      options.host = proxy.host;
      options.headers.host = parsed.hostname + (parsed.port ? ':' + parsed.port : '');
      options.port = proxy.port;
      options.path = protocol + '//' + parsed.hostname + (parsed.port ? ':' + parsed.port : '') + options.path;

      // Basic proxy authorization
      if (proxy.auth) {
        var base64 = new Buffer(proxy.auth.username + ':' + proxy.auth.password, 'utf8').toString('base64');
        options.headers['Proxy-Authorization'] = 'Basic ' + base64;
      }
    }

    var transport;
    if (config.transport) {
      transport = config.transport;
    } else if (config.maxRedirects === 0) {
      transport = isHttps ? https : http;
    } else {
      if (config.maxRedirects) {
        options.maxRedirects = config.maxRedirects;
      }
      transport = isHttps ? httpsFollow : httpFollow;
    }

    if (config.maxContentLength && config.maxContentLength > -1) {
      options.maxBodyLength = config.maxContentLength;
    }

    // Create the request
    var req = transport.request(options, function handleResponse(res) {
      if (req.aborted) return;

      // Response has been received so kill timer that handles request timeout
      clearTimeout(timer);
      timer = null;

      // uncompress the response body transparently if required
      var stream = res;
      switch (res.headers['content-encoding']) {
      /*eslint default-case:0*/
      case 'gzip':
      case 'compress':
      case 'deflate':
        // add the unzipper to the body stream processing pipeline
        stream = stream.pipe(zlib.createUnzip());

        // remove the content-encoding in order to not confuse downstream operations
        delete res.headers['content-encoding'];
        break;
      }

      // return the last request in case of redirects
      var lastRequest = res.req || req;

      var response = {
        status: res.statusCode,
        statusText: res.statusMessage,
        headers: res.headers,
        config: config,
        request: lastRequest
      };

      if (config.responseType === 'stream') {
        response.data = stream;
        settle(resolve, reject, response);
      } else {
        var responseBuffer = [];
        stream.on('data', function handleStreamData(chunk) {
          responseBuffer.push(chunk);

          // make sure the content length is not over the maxContentLength if specified
          if (config.maxContentLength > -1 && Buffer.concat(responseBuffer).length > config.maxContentLength) {
            reject(createError('maxContentLength size of ' + config.maxContentLength + ' exceeded',
              config, null, lastRequest));
          }
        });

        stream.on('error', function handleStreamError(err) {
          if (req.aborted) return;
          reject(enhanceError(err, config, null, lastRequest));
        });

        stream.on('end', function handleStreamEnd() {
          var responseData = Buffer.concat(responseBuffer);
          if (config.responseType !== 'arraybuffer') {
            responseData = responseData.toString('utf8');
          }

          response.data = responseData;
          settle(resolve, reject, response);
        });
      }
    });

    // Handle errors
    req.on('error', function handleRequestError(err) {
      if (req.aborted) return;
      reject(enhanceError(err, config, null, req));
    });

    // Handle request timeout
    if (config.timeout && !timer) {
      timer = setTimeout(function handleRequestTimeout() {
        req.abort();
        reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED', req));
      }, config.timeout);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (req.aborted) return;

        req.abort();
        reject(cancel);
      });
    }

    // Send the request
    if (utils.isStream(data)) {
      data.pipe(req);
    } else {
      req.end(data);
    }
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/adapters/xhr.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/adapters/xhr.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var settle = __webpack_require__(/*! ./../core/settle */ "./node_modules/axios/lib/core/settle.js");
var buildURL = __webpack_require__(/*! ./../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ "./node_modules/axios/lib/helpers/parseHeaders.js");
var isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ "./node_modules/axios/lib/helpers/isURLSameOrigin.js");
var createError = __webpack_require__(/*! ../core/createError */ "./node_modules/axios/lib/core/createError.js");
var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(/*! ./../helpers/btoa */ "./node_modules/axios/lib/helpers/btoa.js");

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if (true &&
        typeof window !== 'undefined' &&
        window.XDomainRequest && !('withCredentials' in request) &&
        !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || (request.readyState !== 4 && !xDomain)) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/axios/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(/*! ./../helpers/cookies */ "./node_modules/axios/lib/helpers/cookies.js");

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
          cookies.read(config.xsrfCookieName) :
          undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/axios.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/axios.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");
var Axios = __webpack_require__(/*! ./core/Axios */ "./node_modules/axios/lib/core/Axios.js");
var defaults = __webpack_require__(/*! ./defaults */ "./node_modules/axios/lib/defaults.js");

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");
axios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ "./node_modules/axios/lib/cancel/CancelToken.js");
axios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(/*! ./helpers/spread */ "./node_modules/axios/lib/helpers/spread.js");

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
/*!*************************************************!*\
  !*** ./node_modules/axios/lib/cancel/Cancel.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CancelToken.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(/*! ./Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/cancel/isCancel.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/Axios.js":
/*!**********************************************!*\
  !*** ./node_modules/axios/lib/core/Axios.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(/*! ./../defaults */ "./node_modules/axios/lib/defaults.js");
var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ "./node_modules/axios/lib/core/InterceptorManager.js");
var dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ "./node_modules/axios/lib/core/dispatchRequest.js");

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, {method: 'get'}, this.defaults, config);
  config.method = config.method.toLowerCase();

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/core/InterceptorManager.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ "./node_modules/axios/lib/core/createError.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/createError.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(/*! ./enhanceError */ "./node_modules/axios/lib/core/enhanceError.js");

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/core/dispatchRequest.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var transformData = __webpack_require__(/*! ./transformData */ "./node_modules/axios/lib/core/transformData.js");
var isCancel = __webpack_require__(/*! ../cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");
var defaults = __webpack_require__(/*! ../defaults */ "./node_modules/axios/lib/defaults.js");
var isAbsoluteURL = __webpack_require__(/*! ./../helpers/isAbsoluteURL */ "./node_modules/axios/lib/helpers/isAbsoluteURL.js");
var combineURLs = __webpack_require__(/*! ./../helpers/combineURLs */ "./node_modules/axios/lib/helpers/combineURLs.js");

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/core/enhanceError.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/core/enhanceError.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.request = request;
  error.response = response;
  return error;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/settle.js":
/*!***********************************************!*\
  !*** ./node_modules/axios/lib/core/settle.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(/*! ./createError */ "./node_modules/axios/lib/core/createError.js");

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ "./node_modules/axios/lib/core/transformData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/transformData.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),

/***/ "./node_modules/axios/lib/defaults.js":
/*!********************************************!*\
  !*** ./node_modules/axios/lib/defaults.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var normalizeHeaderName = __webpack_require__(/*! ./helpers/normalizeHeaderName */ "./node_modules/axios/lib/helpers/normalizeHeaderName.js");

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(/*! ./adapters/xhr */ "./node_modules/axios/lib/adapters/xhr.js");
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(/*! ./adapters/http */ "./node_modules/axios/lib/adapters/http.js");
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;


/***/ }),

/***/ "./node_modules/axios/lib/helpers/bind.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/bind.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/btoa.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/btoa.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error;
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
    // initialize result and counter
    var block, charCode, idx = 0, map = chars;
    // if the next str index does not exist:
    //   change the mapping table to "="
    //   check if d has no fractional digits
    str.charAt(idx | 0) || (map = '=', idx % 1);
    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
  ) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;


/***/ }),

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/buildURL.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/combineURLs.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/cookies.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/helpers/cookies.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

  // Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      var href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                  urlParsingNode.pathname :
                  '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
/*!***************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseHeaders.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/spread.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/helpers/spread.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/utils.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/utils.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");
var isBuffer = __webpack_require__(/*! is-buffer */ "./node_modules/is-buffer/index.js");

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};


/***/ }),

/***/ "./node_modules/axios/package.json":
/*!*****************************************!*\
  !*** ./node_modules/axios/package.json ***!
  \*****************************************/
/*! exports provided: _from, _id, _inBundle, _integrity, _location, _phantomChildren, _requested, _requiredBy, _resolved, _shasum, _spec, _where, author, browser, bugs, bundleDependencies, bundlesize, dependencies, deprecated, description, devDependencies, homepage, keywords, license, main, name, repository, scripts, typings, version, default */
/***/ (function(module) {

module.exports = {"_from":"axios","_id":"axios@0.18.0","_inBundle":false,"_integrity":"sha1-MtU+SFHv3AoRmTts0AB4nXDAUQI=","_location":"/axios","_phantomChildren":{},"_requested":{"type":"tag","registry":true,"raw":"axios","name":"axios","escapedName":"axios","rawSpec":"","saveSpec":null,"fetchSpec":"latest"},"_requiredBy":["#USER","/","/@types/axios"],"_resolved":"http://registry.npmjs.org/axios/-/axios-0.18.0.tgz","_shasum":"32d53e4851efdc0a11993b6cd000789d70c05102","_spec":"axios","_where":"/home/corynil/Projects/gig-gizmo-sdk","author":{"name":"Matt Zabriskie"},"browser":{"./lib/adapters/http.js":"./lib/adapters/xhr.js"},"bugs":{"url":"https://github.com/axios/axios/issues"},"bundleDependencies":false,"bundlesize":[{"path":"./dist/axios.min.js","threshold":"5kB"}],"dependencies":{"follow-redirects":"^1.3.0","is-buffer":"^1.1.5"},"deprecated":false,"description":"Promise based HTTP client for the browser and node.js","devDependencies":{"bundlesize":"^0.5.7","coveralls":"^2.11.9","es6-promise":"^4.0.5","grunt":"^1.0.1","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.0.0","grunt-contrib-nodeunit":"^1.0.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^19.0.0","grunt-karma":"^2.0.0","grunt-ts":"^6.0.0-beta.3","grunt-webpack":"^1.0.18","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1","karma":"^1.3.0","karma-chrome-launcher":"^2.0.0","karma-coverage":"^1.0.0","karma-firefox-launcher":"^1.0.0","karma-jasmine":"^1.0.2","karma-jasmine-ajax":"^0.1.13","karma-opera-launcher":"^1.0.0","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^1.1.0","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.7","karma-webpack":"^1.7.0","load-grunt-tasks":"^3.5.2","minimist":"^1.2.0","sinon":"^1.17.4","typescript":"^2.0.3","url-search-params":"^0.6.1","webpack":"^1.13.1","webpack-dev-server":"^1.14.1"},"homepage":"https://github.com/axios/axios","keywords":["xhr","http","ajax","promise","node"],"license":"MIT","main":"index.js","name":"axios","repository":{"type":"git","url":"git+https://github.com/axios/axios.git"},"scripts":{"build":"NODE_ENV=production grunt build","coveralls":"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js","examples":"node ./examples/server.js","postversion":"git push && git push --tags","preversion":"npm test","start":"node ./sandbox/server.js","test":"grunt test && bundlesize","version":"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json"},"typings":"./index.d.ts","version":"0.18.0"};

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

/***/ "./node_modules/follow-redirects/index.js":
/*!************************************************!*\
  !*** ./node_modules/follow-redirects/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var url = __webpack_require__(/*! url */ "url");
var http = __webpack_require__(/*! http */ "http");
var https = __webpack_require__(/*! https */ "https");
var assert = __webpack_require__(/*! assert */ "assert");
var Writable = __webpack_require__(/*! stream */ "stream").Writable;
var debug = __webpack_require__(/*! debug */ "./node_modules/follow-redirects/node_modules/debug/src/index.js")("follow-redirects");

// RFC7231§4.2.1: Of the request methods defined by this specification,
// the GET, HEAD, OPTIONS, and TRACE methods are defined to be safe.
var SAFE_METHODS = { GET: true, HEAD: true, OPTIONS: true, TRACE: true };

// Create handlers that pass events from native requests
var eventHandlers = Object.create(null);
["abort", "aborted", "error", "socket", "timeout"].forEach(function (event) {
  eventHandlers[event] = function (arg) {
    this._redirectable.emit(event, arg);
  };
});

// An HTTP(S) request that can be redirected
function RedirectableRequest(options, responseCallback) {
  // Initialize the request
  Writable.call(this);
  options.headers = options.headers || {};
  this._options = options;
  this._redirectCount = 0;
  this._redirects = [];
  this._requestBodyLength = 0;
  this._requestBodyBuffers = [];

  // Attach a callback if passed
  if (responseCallback) {
    this.on("response", responseCallback);
  }

  // React to responses of native requests
  var self = this;
  this._onNativeResponse = function (response) {
    self._processResponse(response);
  };

  // Complete the URL object when necessary
  if (!options.pathname && options.path) {
    var searchPos = options.path.indexOf("?");
    if (searchPos < 0) {
      options.pathname = options.path;
    }
    else {
      options.pathname = options.path.substring(0, searchPos);
      options.search = options.path.substring(searchPos);
    }
  }

  // Perform the first request
  this._performRequest();
}
RedirectableRequest.prototype = Object.create(Writable.prototype);

// Writes buffered data to the current native request
RedirectableRequest.prototype.write = function (data, encoding, callback) {
  // Validate input and shift parameters if necessary
  if (!(typeof data === "string" || typeof data === "object" && ("length" in data))) {
    throw new Error("data should be a string, Buffer or Uint8Array");
  }
  if (typeof encoding === "function") {
    callback = encoding;
    encoding = null;
  }

  // Ignore empty buffers, since writing them doesn't invoke the callback
  // https://github.com/nodejs/node/issues/22066
  if (data.length === 0) {
    if (callback) {
      callback();
    }
    return;
  }
  // Only write when we don't exceed the maximum body length
  if (this._requestBodyLength + data.length <= this._options.maxBodyLength) {
    this._requestBodyLength += data.length;
    this._requestBodyBuffers.push({ data: data, encoding: encoding });
    this._currentRequest.write(data, encoding, callback);
  }
  // Error when we exceed the maximum body length
  else {
    this.emit("error", new Error("Request body larger than maxBodyLength limit"));
    this.abort();
  }
};

// Ends the current native request
RedirectableRequest.prototype.end = function (data, encoding, callback) {
  // Shift parameters if necessary
  if (typeof data === "function") {
    callback = data;
    data = encoding = null;
  }
  else if (typeof encoding === "function") {
    callback = encoding;
    encoding = null;
  }

  // Write data and end
  var currentRequest = this._currentRequest;
  this.write(data || "", encoding, function () {
    currentRequest.end(null, null, callback);
  });
};

// Sets a header value on the current native request
RedirectableRequest.prototype.setHeader = function (name, value) {
  this._options.headers[name] = value;
  this._currentRequest.setHeader(name, value);
};

// Clears a header value on the current native request
RedirectableRequest.prototype.removeHeader = function (name) {
  delete this._options.headers[name];
  this._currentRequest.removeHeader(name);
};

// Proxy all other public ClientRequest methods
[
  "abort", "flushHeaders", "getHeader",
  "setNoDelay", "setSocketKeepAlive", "setTimeout",
].forEach(function (method) {
  RedirectableRequest.prototype[method] = function (a, b) {
    return this._currentRequest[method](a, b);
  };
});

// Proxy all public ClientRequest properties
["aborted", "connection", "socket"].forEach(function (property) {
  Object.defineProperty(RedirectableRequest.prototype, property, {
    get: function () { return this._currentRequest[property]; },
  });
});

// Executes the next native request (initial or redirect)
RedirectableRequest.prototype._performRequest = function () {
  // Load the native protocol
  var protocol = this._options.protocol;
  var nativeProtocol = this._options.nativeProtocols[protocol];
  if (!nativeProtocol) {
    this.emit("error", new Error("Unsupported protocol " + protocol));
    return;
  }

  // If specified, use the agent corresponding to the protocol
  // (HTTP and HTTPS use different types of agents)
  if (this._options.agents) {
    var scheme = protocol.substr(0, protocol.length - 1);
    this._options.agent = this._options.agents[scheme];
  }

  // Create the native request
  var request = this._currentRequest =
        nativeProtocol.request(this._options, this._onNativeResponse);
  this._currentUrl = url.format(this._options);

  // Set up event handlers
  request._redirectable = this;
  for (var event in eventHandlers) {
    /* istanbul ignore else */
    if (event) {
      request.on(event, eventHandlers[event]);
    }
  }

  // End a redirected request
  // (The first request must be ended explicitly with RedirectableRequest#end)
  if (this._isRedirect) {
    // Write the request entity and end.
    var i = 0;
    var buffers = this._requestBodyBuffers;
    (function writeNext() {
      if (i < buffers.length) {
        var buffer = buffers[i++];
        request.write(buffer.data, buffer.encoding, writeNext);
      }
      else {
        request.end();
      }
    }());
  }
};

// Processes a response from the current native request
RedirectableRequest.prototype._processResponse = function (response) {
  // Store the redirected response
  if (this._options.trackRedirects) {
    this._redirects.push({
      url: this._currentUrl,
      headers: response.headers,
      statusCode: response.statusCode,
    });
  }

  // RFC7231§6.4: The 3xx (Redirection) class of status code indicates
  // that further action needs to be taken by the user agent in order to
  // fulfill the request. If a Location header field is provided,
  // the user agent MAY automatically redirect its request to the URI
  // referenced by the Location field value,
  // even if the specific status code is not understood.
  var location = response.headers.location;
  if (location && this._options.followRedirects !== false &&
      response.statusCode >= 300 && response.statusCode < 400) {
    // RFC7231§6.4: A client SHOULD detect and intervene
    // in cyclical redirections (i.e., "infinite" redirection loops).
    if (++this._redirectCount > this._options.maxRedirects) {
      this.emit("error", new Error("Max redirects exceeded."));
      return;
    }

    // RFC7231§6.4: Automatic redirection needs to done with
    // care for methods not known to be safe […],
    // since the user might not wish to redirect an unsafe request.
    // RFC7231§6.4.7: The 307 (Temporary Redirect) status code indicates
    // that the target resource resides temporarily under a different URI
    // and the user agent MUST NOT change the request method
    // if it performs an automatic redirection to that URI.
    var header;
    var headers = this._options.headers;
    if (response.statusCode !== 307 && !(this._options.method in SAFE_METHODS)) {
      this._options.method = "GET";
      // Drop a possible entity and headers related to it
      this._requestBodyBuffers = [];
      for (header in headers) {
        if (/^content-/i.test(header)) {
          delete headers[header];
        }
      }
    }

    // Drop the Host header, as the redirect might lead to a different host
    if (!this._isRedirect) {
      for (header in headers) {
        if (/^host$/i.test(header)) {
          delete headers[header];
        }
      }
    }

    // Perform the redirected request
    var redirectUrl = url.resolve(this._currentUrl, location);
    debug("redirecting to", redirectUrl);
    Object.assign(this._options, url.parse(redirectUrl));
    this._isRedirect = true;
    this._performRequest();

    // Discard the remainder of the response to avoid waiting for data
    response.destroy();
  }
  else {
    // The response is not a redirect; return it as-is
    response.responseUrl = this._currentUrl;
    response.redirects = this._redirects;
    this.emit("response", response);

    // Clean up
    this._requestBodyBuffers = [];
  }
};

// Wraps the key/value object of protocols with redirect functionality
function wrap(protocols) {
  // Default settings
  var exports = {
    maxRedirects: 21,
    maxBodyLength: 10 * 1024 * 1024,
  };

  // Wrap each protocol
  var nativeProtocols = {};
  Object.keys(protocols).forEach(function (scheme) {
    var protocol = scheme + ":";
    var nativeProtocol = nativeProtocols[protocol] = protocols[scheme];
    var wrappedProtocol = exports[scheme] = Object.create(nativeProtocol);

    // Executes a request, following redirects
    wrappedProtocol.request = function (options, callback) {
      if (typeof options === "string") {
        options = url.parse(options);
        options.maxRedirects = exports.maxRedirects;
      }
      else {
        options = Object.assign({
          protocol: protocol,
          maxRedirects: exports.maxRedirects,
          maxBodyLength: exports.maxBodyLength,
        }, options);
      }
      options.nativeProtocols = nativeProtocols;
      assert.equal(options.protocol, protocol, "protocol mismatch");
      debug("options", options);
      return new RedirectableRequest(options, callback);
    };

    // Executes a GET request, following redirects
    wrappedProtocol.get = function (options, callback) {
      var request = wrappedProtocol.request(options, callback);
      request.end();
      return request;
    };
  });
  return exports;
}

// Exports
module.exports = wrap({ http: http, https: https });
module.exports.wrap = wrap;


/***/ }),

/***/ "./node_modules/follow-redirects/node_modules/debug/src/browser.js":
/*!*************************************************************************!*\
  !*** ./node_modules/follow-redirects/node_modules/debug/src/browser.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = __webpack_require__(/*! ./debug */ "./node_modules/follow-redirects/node_modules/debug/src/debug.js");
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = 'undefined' != typeof chrome
               && 'undefined' != typeof chrome.storage
                  ? chrome.storage.local
                  : localstorage();

/**
 * Colors.
 */

exports.colors = [
  '#0000CC', '#0000FF', '#0033CC', '#0033FF', '#0066CC', '#0066FF', '#0099CC',
  '#0099FF', '#00CC00', '#00CC33', '#00CC66', '#00CC99', '#00CCCC', '#00CCFF',
  '#3300CC', '#3300FF', '#3333CC', '#3333FF', '#3366CC', '#3366FF', '#3399CC',
  '#3399FF', '#33CC00', '#33CC33', '#33CC66', '#33CC99', '#33CCCC', '#33CCFF',
  '#6600CC', '#6600FF', '#6633CC', '#6633FF', '#66CC00', '#66CC33', '#9900CC',
  '#9900FF', '#9933CC', '#9933FF', '#99CC00', '#99CC33', '#CC0000', '#CC0033',
  '#CC0066', '#CC0099', '#CC00CC', '#CC00FF', '#CC3300', '#CC3333', '#CC3366',
  '#CC3399', '#CC33CC', '#CC33FF', '#CC6600', '#CC6633', '#CC9900', '#CC9933',
  '#CCCC00', '#CCCC33', '#FF0000', '#FF0033', '#FF0066', '#FF0099', '#FF00CC',
  '#FF00FF', '#FF3300', '#FF3333', '#FF3366', '#FF3399', '#FF33CC', '#FF33FF',
  '#FF6600', '#FF6633', '#FF9900', '#FF9933', '#FFCC00', '#FFCC33'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
    return true;
  }

  // Internet Explorer and Edge do not support colors.
  if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
    return false;
  }

  // is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
  return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
    // is firebug? http://stackoverflow.com/a/398120/376773
    (typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
    // is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
    // double check webkit in userAgent just in case we are in a worker
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

exports.formatters.j = function(v) {
  try {
    return JSON.stringify(v);
  } catch (err) {
    return '[UnexpectedJSONParseError]: ' + err.message;
  }
};


/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
  var useColors = this.useColors;

  args[0] = (useColors ? '%c' : '')
    + this.namespace
    + (useColors ? ' %c' : ' ')
    + args[0]
    + (useColors ? '%c ' : ' ')
    + '+' + exports.humanize(this.diff);

  if (!useColors) return;

  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit')

  // the final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into
  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function(match) {
    if ('%%' === match) return;
    index++;
    if ('%c' === match) {
      // we only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });

  args.splice(lastC, 0, c);
}

/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */

function log() {
  // this hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return 'object' === typeof console
    && console.log
    && Function.prototype.apply.call(console.log, console, arguments);
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  try {
    if (null == namespaces) {
      exports.storage.removeItem('debug');
    } else {
      exports.storage.debug = namespaces;
    }
  } catch(e) {}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  var r;
  try {
    r = exports.storage.debug;
  } catch(e) {}

  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = process.env.DEBUG;
  }

  return r;
}

/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */

exports.enable(load());

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
  try {
    return window.localStorage;
  } catch (e) {}
}


/***/ }),

/***/ "./node_modules/follow-redirects/node_modules/debug/src/debug.js":
/*!***********************************************************************!*\
  !*** ./node_modules/follow-redirects/node_modules/debug/src/debug.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
exports.coerce = coerce;
exports.disable = disable;
exports.enable = enable;
exports.enabled = enabled;
exports.humanize = __webpack_require__(/*! ms */ "./node_modules/ms/index.js");

/**
 * Active `debug` instances.
 */
exports.instances = [];

/**
 * The currently active debug mode names, and names to skip.
 */

exports.names = [];
exports.skips = [];

/**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
 */

exports.formatters = {};

/**
 * Select a color.
 * @param {String} namespace
 * @return {Number}
 * @api private
 */

function selectColor(namespace) {
  var hash = 0, i;

  for (i in namespace) {
    hash  = ((hash << 5) - hash) + namespace.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }

  return exports.colors[Math.abs(hash) % exports.colors.length];
}

/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */

function createDebug(namespace) {

  var prevTime;

  function debug() {
    // disabled?
    if (!debug.enabled) return;

    var self = debug;

    // set `diff` timestamp
    var curr = +new Date();
    var ms = curr - (prevTime || curr);
    self.diff = ms;
    self.prev = prevTime;
    self.curr = curr;
    prevTime = curr;

    // turn the `arguments` into a proper Array
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    args[0] = exports.coerce(args[0]);

    if ('string' !== typeof args[0]) {
      // anything else let's inspect with %O
      args.unshift('%O');
    }

    // apply any `formatters` transformations
    var index = 0;
    args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
      // if we encounter an escaped % then don't increase the array index
      if (match === '%%') return match;
      index++;
      var formatter = exports.formatters[format];
      if ('function' === typeof formatter) {
        var val = args[index];
        match = formatter.call(self, val);

        // now we need to remove `args[index]` since it's inlined in the `format`
        args.splice(index, 1);
        index--;
      }
      return match;
    });

    // apply env-specific formatting (colors, etc.)
    exports.formatArgs.call(self, args);

    var logFn = debug.log || exports.log || console.log.bind(console);
    logFn.apply(self, args);
  }

  debug.namespace = namespace;
  debug.enabled = exports.enabled(namespace);
  debug.useColors = exports.useColors();
  debug.color = selectColor(namespace);
  debug.destroy = destroy;

  // env-specific initialization logic for debug instances
  if ('function' === typeof exports.init) {
    exports.init(debug);
  }

  exports.instances.push(debug);

  return debug;
}

function destroy () {
  var index = exports.instances.indexOf(this);
  if (index !== -1) {
    exports.instances.splice(index, 1);
    return true;
  } else {
    return false;
  }
}

/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */

function enable(namespaces) {
  exports.save(namespaces);

  exports.names = [];
  exports.skips = [];

  var i;
  var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
  var len = split.length;

  for (i = 0; i < len; i++) {
    if (!split[i]) continue; // ignore empty strings
    namespaces = split[i].replace(/\*/g, '.*?');
    if (namespaces[0] === '-') {
      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
    } else {
      exports.names.push(new RegExp('^' + namespaces + '$'));
    }
  }

  for (i = 0; i < exports.instances.length; i++) {
    var instance = exports.instances[i];
    instance.enabled = exports.enabled(instance.namespace);
  }
}

/**
 * Disable debug output.
 *
 * @api public
 */

function disable() {
  exports.enable('');
}

/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */

function enabled(name) {
  if (name[name.length - 1] === '*') {
    return true;
  }
  var i, len;
  for (i = 0, len = exports.skips.length; i < len; i++) {
    if (exports.skips[i].test(name)) {
      return false;
    }
  }
  for (i = 0, len = exports.names.length; i < len; i++) {
    if (exports.names[i].test(name)) {
      return true;
    }
  }
  return false;
}

/**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */

function coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}


/***/ }),

/***/ "./node_modules/follow-redirects/node_modules/debug/src/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/follow-redirects/node_modules/debug/src/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Detect Electron renderer process, which is node, but we should
 * treat as a browser.
 */

if (typeof process === 'undefined' || process.type === 'renderer') {
  module.exports = __webpack_require__(/*! ./browser.js */ "./node_modules/follow-redirects/node_modules/debug/src/browser.js");
} else {
  module.exports = __webpack_require__(/*! ./node.js */ "./node_modules/follow-redirects/node_modules/debug/src/node.js");
}


/***/ }),

/***/ "./node_modules/follow-redirects/node_modules/debug/src/node.js":
/*!**********************************************************************!*\
  !*** ./node_modules/follow-redirects/node_modules/debug/src/node.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies.
 */

var tty = __webpack_require__(/*! tty */ "tty");
var util = __webpack_require__(/*! util */ "util");

/**
 * This is the Node.js implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = __webpack_require__(/*! ./debug */ "./node_modules/follow-redirects/node_modules/debug/src/debug.js");
exports.init = init;
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;

/**
 * Colors.
 */

exports.colors = [ 6, 2, 3, 4, 5, 1 ];

try {
  var supportsColor = __webpack_require__(/*! supports-color */ "./node_modules/supports-color/index.js");
  if (supportsColor && supportsColor.level >= 2) {
    exports.colors = [
      20, 21, 26, 27, 32, 33, 38, 39, 40, 41, 42, 43, 44, 45, 56, 57, 62, 63, 68,
      69, 74, 75, 76, 77, 78, 79, 80, 81, 92, 93, 98, 99, 112, 113, 128, 129, 134,
      135, 148, 149, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171,
      172, 173, 178, 179, 184, 185, 196, 197, 198, 199, 200, 201, 202, 203, 204,
      205, 206, 207, 208, 209, 214, 215, 220, 221
    ];
  }
} catch (err) {
  // swallow - we only care if `supports-color` is available; it doesn't have to be.
}

/**
 * Build up the default `inspectOpts` object from the environment variables.
 *
 *   $ DEBUG_COLORS=no DEBUG_DEPTH=10 DEBUG_SHOW_HIDDEN=enabled node script.js
 */

exports.inspectOpts = Object.keys(process.env).filter(function (key) {
  return /^debug_/i.test(key);
}).reduce(function (obj, key) {
  // camel-case
  var prop = key
    .substring(6)
    .toLowerCase()
    .replace(/_([a-z])/g, function (_, k) { return k.toUpperCase() });

  // coerce string value into JS value
  var val = process.env[key];
  if (/^(yes|on|true|enabled)$/i.test(val)) val = true;
  else if (/^(no|off|false|disabled)$/i.test(val)) val = false;
  else if (val === 'null') val = null;
  else val = Number(val);

  obj[prop] = val;
  return obj;
}, {});

/**
 * Is stdout a TTY? Colored output is enabled when `true`.
 */

function useColors() {
  return 'colors' in exports.inspectOpts
    ? Boolean(exports.inspectOpts.colors)
    : tty.isatty(process.stderr.fd);
}

/**
 * Map %o to `util.inspect()`, all on a single line.
 */

exports.formatters.o = function(v) {
  this.inspectOpts.colors = this.useColors;
  return util.inspect(v, this.inspectOpts)
    .split('\n').map(function(str) {
      return str.trim()
    }).join(' ');
};

/**
 * Map %o to `util.inspect()`, allowing multiple lines if needed.
 */

exports.formatters.O = function(v) {
  this.inspectOpts.colors = this.useColors;
  return util.inspect(v, this.inspectOpts);
};

/**
 * Adds ANSI color escape codes if enabled.
 *
 * @api public
 */

function formatArgs(args) {
  var name = this.namespace;
  var useColors = this.useColors;

  if (useColors) {
    var c = this.color;
    var colorCode = '\u001b[3' + (c < 8 ? c : '8;5;' + c);
    var prefix = '  ' + colorCode + ';1m' + name + ' ' + '\u001b[0m';

    args[0] = prefix + args[0].split('\n').join('\n' + prefix);
    args.push(colorCode + 'm+' + exports.humanize(this.diff) + '\u001b[0m');
  } else {
    args[0] = getDate() + name + ' ' + args[0];
  }
}

function getDate() {
  if (exports.inspectOpts.hideDate) {
    return '';
  } else {
    return new Date().toISOString() + ' ';
  }
}

/**
 * Invokes `util.format()` with the specified arguments and writes to stderr.
 */

function log() {
  return process.stderr.write(util.format.apply(util, arguments) + '\n');
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  if (null == namespaces) {
    // If you set a process.env field to null or undefined, it gets cast to the
    // string 'null' or 'undefined'. Just delete instead.
    delete process.env.DEBUG;
  } else {
    process.env.DEBUG = namespaces;
  }
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  return process.env.DEBUG;
}

/**
 * Init logic for `debug` instances.
 *
 * Create a new `inspectOpts` object in case `useColors` is set
 * differently for a particular `debug` instance.
 */

function init (debug) {
  debug.inspectOpts = {};

  var keys = Object.keys(exports.inspectOpts);
  for (var i = 0; i < keys.length; i++) {
    debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
  }
}

/**
 * Enable namespaces listed in `process.env.DEBUG` initially.
 */

exports.enable(load());


/***/ }),

/***/ "./node_modules/is-buffer/index.js":
/*!*****************************************!*\
  !*** ./node_modules/is-buffer/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),

/***/ "./node_modules/ms/index.js":
/*!**********************************!*\
  !*** ./node_modules/ms/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isNaN(val) === false) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  if (ms >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (ms >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (ms >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (ms >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  return plural(ms, d, 'day') ||
    plural(ms, h, 'hour') ||
    plural(ms, m, 'minute') ||
    plural(ms, s, 'second') ||
    ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, n, name) {
  if (ms < n) {
    return;
  }
  if (ms < n * 1.5) {
    return Math.floor(ms / n) + ' ' + name;
  }
  return Math.ceil(ms / n) + ' ' + name + 's';
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
        } else if (true && typeof console !== 'undefined') {
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

/***/ "./node_modules/socket.io-client/dist/socket.io.slim.js":
/*!**************************************************************!*\
  !*** ./node_modules/socket.io-client/dist/socket.io.slim.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Socket.IO v2.1.1
 * (c) 2014-2018 Guillermo Rauch
 * Released under the MIT License.
 */
!function(t,e){ true?module.exports=e():undefined}(this,function(){return function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return t[n].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var r={};return e.m=t,e.c=r,e.p="",e(0)}([function(t,e,r){"use strict";function n(t,e){"object"===("undefined"==typeof t?"undefined":o(t))&&(e=t,t=void 0),e=e||{};var r,n=i(t),s=n.source,h=n.id,p=n.path,u=c[h]&&p in c[h].nsps,f=e.forceNew||e["force new connection"]||!1===e.multiplex||u;return f?r=a(s,e):(c[h]||(c[h]=a(s,e)),r=c[h]),n.query&&!e.query&&(e.query=n.query),r.socket(n.path,e)}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=r(1),s=r(4),a=r(9);r(3)("socket.io-client");t.exports=e=n;var c=e.managers={};e.protocol=s.protocol,e.connect=n,e.Manager=r(9),e.Socket=r(34)},function(t,e,r){(function(e){"use strict";function n(t,r){var n=t;r=r||e.location,null==t&&(t=r.protocol+"//"+r.host),"string"==typeof t&&("/"===t.charAt(0)&&(t="/"===t.charAt(1)?r.protocol+t:r.host+t),/^(https?|wss?):\/\//.test(t)||(t="undefined"!=typeof r?r.protocol+"//"+t:"https://"+t),n=o(t)),n.port||(/^(http|ws)$/.test(n.protocol)?n.port="80":/^(http|ws)s$/.test(n.protocol)&&(n.port="443")),n.path=n.path||"/";var i=n.host.indexOf(":")!==-1,s=i?"["+n.host+"]":n.host;return n.id=n.protocol+"://"+s+":"+n.port,n.href=n.protocol+"://"+s+(r&&r.port===n.port?"":":"+n.port),n}var o=r(2);r(3)("socket.io-client:url");t.exports=n}).call(e,function(){return this}())},function(t,e){var r=/^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,n=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];t.exports=function(t){var e=t,o=t.indexOf("["),i=t.indexOf("]");o!=-1&&i!=-1&&(t=t.substring(0,o)+t.substring(o,i).replace(/:/g,";")+t.substring(i,t.length));for(var s=r.exec(t||""),a={},c=14;c--;)a[n[c]]=s[c]||"";return o!=-1&&i!=-1&&(a.source=e,a.host=a.host.substring(1,a.host.length-1).replace(/;/g,":"),a.authority=a.authority.replace("[","").replace("]","").replace(/;/g,":"),a.ipv6uri=!0),a}},function(t,e){"use strict";t.exports=function(){return function(){}}},function(t,e,r){function n(){}function o(t){var r=""+t.type;if(e.BINARY_EVENT!==t.type&&e.BINARY_ACK!==t.type||(r+=t.attachments+"-"),t.nsp&&"/"!==t.nsp&&(r+=t.nsp+","),null!=t.id&&(r+=t.id),null!=t.data){var n=i(t.data);if(n===!1)return m;r+=n}return r}function i(t){try{return JSON.stringify(t)}catch(t){return!1}}function s(t,e){function r(t){var r=l.deconstructPacket(t),n=o(r.packet),i=r.buffers;i.unshift(n),e(i)}l.removeBlobs(t,r)}function a(){this.reconstructor=null}function c(t){var r=0,n={type:Number(t.charAt(0))};if(null==e.types[n.type])return u("unknown packet type "+n.type);if(e.BINARY_EVENT===n.type||e.BINARY_ACK===n.type){for(var o="";"-"!==t.charAt(++r)&&(o+=t.charAt(r),r!=t.length););if(o!=Number(o)||"-"!==t.charAt(r))throw new Error("Illegal attachments");n.attachments=Number(o)}if("/"===t.charAt(r+1))for(n.nsp="";++r;){var i=t.charAt(r);if(","===i)break;if(n.nsp+=i,r===t.length)break}else n.nsp="/";var s=t.charAt(r+1);if(""!==s&&Number(s)==s){for(n.id="";++r;){var i=t.charAt(r);if(null==i||Number(i)!=i){--r;break}if(n.id+=t.charAt(r),r===t.length)break}n.id=Number(n.id)}if(t.charAt(++r)){var a=h(t.substr(r)),c=a!==!1&&(n.type===e.ERROR||d(a));if(!c)return u("invalid payload");n.data=a}return n}function h(t){try{return JSON.parse(t)}catch(t){return!1}}function p(t){this.reconPack=t,this.buffers=[]}function u(t){return{type:e.ERROR,data:"parser error: "+t}}var f=(r(3)("socket.io-parser"),r(5)),l=r(6),d=r(7),y=r(8);e.protocol=4,e.types=["CONNECT","DISCONNECT","EVENT","ACK","ERROR","BINARY_EVENT","BINARY_ACK"],e.CONNECT=0,e.DISCONNECT=1,e.EVENT=2,e.ACK=3,e.ERROR=4,e.BINARY_EVENT=5,e.BINARY_ACK=6,e.Encoder=n,e.Decoder=a;var m=e.ERROR+'"encode error"';n.prototype.encode=function(t,r){if(e.BINARY_EVENT===t.type||e.BINARY_ACK===t.type)s(t,r);else{var n=o(t);r([n])}},f(a.prototype),a.prototype.add=function(t){var r;if("string"==typeof t)r=c(t),e.BINARY_EVENT===r.type||e.BINARY_ACK===r.type?(this.reconstructor=new p(r),0===this.reconstructor.reconPack.attachments&&this.emit("decoded",r)):this.emit("decoded",r);else{if(!y(t)&&!t.base64)throw new Error("Unknown type: "+t);if(!this.reconstructor)throw new Error("got binary data when not reconstructing a packet");r=this.reconstructor.takeBinaryData(t),r&&(this.reconstructor=null,this.emit("decoded",r))}},a.prototype.destroy=function(){this.reconstructor&&this.reconstructor.finishedReconstruction()},p.prototype.takeBinaryData=function(t){if(this.buffers.push(t),this.buffers.length===this.reconPack.attachments){var e=l.reconstructPacket(this.reconPack,this.buffers);return this.finishedReconstruction(),e}return null},p.prototype.finishedReconstruction=function(){this.reconPack=null,this.buffers=[]}},function(t,e,r){function n(t){if(t)return o(t)}function o(t){for(var e in n.prototype)t[e]=n.prototype[e];return t}t.exports=n,n.prototype.on=n.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this},n.prototype.once=function(t,e){function r(){this.off(t,r),e.apply(this,arguments)}return r.fn=e,this.on(t,r),this},n.prototype.off=n.prototype.removeListener=n.prototype.removeAllListeners=n.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var r=this._callbacks["$"+t];if(!r)return this;if(1==arguments.length)return delete this._callbacks["$"+t],this;for(var n,o=0;o<r.length;o++)if(n=r[o],n===e||n.fn===e){r.splice(o,1);break}return this},n.prototype.emit=function(t){this._callbacks=this._callbacks||{};var e=[].slice.call(arguments,1),r=this._callbacks["$"+t];if(r){r=r.slice(0);for(var n=0,o=r.length;n<o;++n)r[n].apply(this,e)}return this},n.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]},n.prototype.hasListeners=function(t){return!!this.listeners(t).length}},function(t,e,r){(function(t){function n(t,e){if(!t)return t;if(s(t)){var r={_placeholder:!0,num:e.length};return e.push(t),r}if(i(t)){for(var o=new Array(t.length),a=0;a<t.length;a++)o[a]=n(t[a],e);return o}if("object"==typeof t&&!(t instanceof Date)){var o={};for(var c in t)o[c]=n(t[c],e);return o}return t}function o(t,e){if(!t)return t;if(t&&t._placeholder)return e[t.num];if(i(t))for(var r=0;r<t.length;r++)t[r]=o(t[r],e);else if("object"==typeof t)for(var n in t)t[n]=o(t[n],e);return t}var i=r(7),s=r(8),a=Object.prototype.toString,c="function"==typeof t.Blob||"[object BlobConstructor]"===a.call(t.Blob),h="function"==typeof t.File||"[object FileConstructor]"===a.call(t.File);e.deconstructPacket=function(t){var e=[],r=t.data,o=t;return o.data=n(r,e),o.attachments=e.length,{packet:o,buffers:e}},e.reconstructPacket=function(t,e){return t.data=o(t.data,e),t.attachments=void 0,t},e.removeBlobs=function(t,e){function r(t,a,p){if(!t)return t;if(c&&t instanceof Blob||h&&t instanceof File){n++;var u=new FileReader;u.onload=function(){p?p[a]=this.result:o=this.result,--n||e(o)},u.readAsArrayBuffer(t)}else if(i(t))for(var f=0;f<t.length;f++)r(t[f],f,t);else if("object"==typeof t&&!s(t))for(var l in t)r(t[l],l,t)}var n=0,o=t;r(o),n||e(o)}}).call(e,function(){return this}())},function(t,e){var r={}.toString;t.exports=Array.isArray||function(t){return"[object Array]"==r.call(t)}},function(t,e){(function(e){function r(t){return n&&e.Buffer.isBuffer(t)||o&&(t instanceof e.ArrayBuffer||i(t))}t.exports=r;var n="function"==typeof e.Buffer&&"function"==typeof e.Buffer.isBuffer,o="function"==typeof e.ArrayBuffer,i=function(){return o&&"function"==typeof e.ArrayBuffer.isView?e.ArrayBuffer.isView:function(t){return t.buffer instanceof e.ArrayBuffer}}()}).call(e,function(){return this}())},function(t,e,r){"use strict";function n(t,e){if(!(this instanceof n))return new n(t,e);t&&"object"===("undefined"==typeof t?"undefined":o(t))&&(e=t,t=void 0),e=e||{},e.path=e.path||"/socket.io",this.nsps={},this.subs=[],this.opts=e,this.reconnection(e.reconnection!==!1),this.reconnectionAttempts(e.reconnectionAttempts||1/0),this.reconnectionDelay(e.reconnectionDelay||1e3),this.reconnectionDelayMax(e.reconnectionDelayMax||5e3),this.randomizationFactor(e.randomizationFactor||.5),this.backoff=new f({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(null==e.timeout?2e4:e.timeout),this.readyState="closed",this.uri=t,this.connecting=[],this.lastPing=null,this.encoding=!1,this.packetBuffer=[];var r=e.parser||c;this.encoder=new r.Encoder,this.decoder=new r.Decoder,this.autoConnect=e.autoConnect!==!1,this.autoConnect&&this.open()}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=r(10),s=r(34),a=r(5),c=r(4),h=r(36),p=r(37),u=(r(3)("socket.io-client:manager"),r(33)),f=r(38),l=Object.prototype.hasOwnProperty;t.exports=n,n.prototype.emitAll=function(){this.emit.apply(this,arguments);for(var t in this.nsps)l.call(this.nsps,t)&&this.nsps[t].emit.apply(this.nsps[t],arguments)},n.prototype.updateSocketIds=function(){for(var t in this.nsps)l.call(this.nsps,t)&&(this.nsps[t].id=this.generateId(t))},n.prototype.generateId=function(t){return("/"===t?"":t+"#")+this.engine.id},a(n.prototype),n.prototype.reconnection=function(t){return arguments.length?(this._reconnection=!!t,this):this._reconnection},n.prototype.reconnectionAttempts=function(t){return arguments.length?(this._reconnectionAttempts=t,this):this._reconnectionAttempts},n.prototype.reconnectionDelay=function(t){return arguments.length?(this._reconnectionDelay=t,this.backoff&&this.backoff.setMin(t),this):this._reconnectionDelay},n.prototype.randomizationFactor=function(t){return arguments.length?(this._randomizationFactor=t,this.backoff&&this.backoff.setJitter(t),this):this._randomizationFactor},n.prototype.reconnectionDelayMax=function(t){return arguments.length?(this._reconnectionDelayMax=t,this.backoff&&this.backoff.setMax(t),this):this._reconnectionDelayMax},n.prototype.timeout=function(t){return arguments.length?(this._timeout=t,this):this._timeout},n.prototype.maybeReconnectOnOpen=function(){!this.reconnecting&&this._reconnection&&0===this.backoff.attempts&&this.reconnect()},n.prototype.open=n.prototype.connect=function(t,e){if(~this.readyState.indexOf("open"))return this;this.engine=i(this.uri,this.opts);var r=this.engine,n=this;this.readyState="opening",this.skipReconnect=!1;var o=h(r,"open",function(){n.onopen(),t&&t()}),s=h(r,"error",function(e){if(n.cleanup(),n.readyState="closed",n.emitAll("connect_error",e),t){var r=new Error("Connection error");r.data=e,t(r)}else n.maybeReconnectOnOpen()});if(!1!==this._timeout){var a=this._timeout,c=setTimeout(function(){o.destroy(),r.close(),r.emit("error","timeout"),n.emitAll("connect_timeout",a)},a);this.subs.push({destroy:function(){clearTimeout(c)}})}return this.subs.push(o),this.subs.push(s),this},n.prototype.onopen=function(){this.cleanup(),this.readyState="open",this.emit("open");var t=this.engine;this.subs.push(h(t,"data",p(this,"ondata"))),this.subs.push(h(t,"ping",p(this,"onping"))),this.subs.push(h(t,"pong",p(this,"onpong"))),this.subs.push(h(t,"error",p(this,"onerror"))),this.subs.push(h(t,"close",p(this,"onclose"))),this.subs.push(h(this.decoder,"decoded",p(this,"ondecoded")))},n.prototype.onping=function(){this.lastPing=new Date,this.emitAll("ping")},n.prototype.onpong=function(){this.emitAll("pong",new Date-this.lastPing)},n.prototype.ondata=function(t){this.decoder.add(t)},n.prototype.ondecoded=function(t){this.emit("packet",t)},n.prototype.onerror=function(t){this.emitAll("error",t)},n.prototype.socket=function(t,e){function r(){~u(o.connecting,n)||o.connecting.push(n)}var n=this.nsps[t];if(!n){n=new s(this,t,e),this.nsps[t]=n;var o=this;n.on("connecting",r),n.on("connect",function(){n.id=o.generateId(t)}),this.autoConnect&&r()}return n},n.prototype.destroy=function(t){var e=u(this.connecting,t);~e&&this.connecting.splice(e,1),this.connecting.length||this.close()},n.prototype.packet=function(t){var e=this;t.query&&0===t.type&&(t.nsp+="?"+t.query),e.encoding?e.packetBuffer.push(t):(e.encoding=!0,this.encoder.encode(t,function(r){for(var n=0;n<r.length;n++)e.engine.write(r[n],t.options);e.encoding=!1,e.processPacketQueue()}))},n.prototype.processPacketQueue=function(){if(this.packetBuffer.length>0&&!this.encoding){var t=this.packetBuffer.shift();this.packet(t)}},n.prototype.cleanup=function(){for(var t=this.subs.length,e=0;e<t;e++){var r=this.subs.shift();r.destroy()}this.packetBuffer=[],this.encoding=!1,this.lastPing=null,this.decoder.destroy()},n.prototype.close=n.prototype.disconnect=function(){this.skipReconnect=!0,this.reconnecting=!1,"opening"===this.readyState&&this.cleanup(),this.backoff.reset(),this.readyState="closed",this.engine&&this.engine.close()},n.prototype.onclose=function(t){this.cleanup(),this.backoff.reset(),this.readyState="closed",this.emit("close",t),this._reconnection&&!this.skipReconnect&&this.reconnect()},n.prototype.reconnect=function(){if(this.reconnecting||this.skipReconnect)return this;var t=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitAll("reconnect_failed"),this.reconnecting=!1;else{var e=this.backoff.duration();this.reconnecting=!0;var r=setTimeout(function(){t.skipReconnect||(t.emitAll("reconnect_attempt",t.backoff.attempts),t.emitAll("reconnecting",t.backoff.attempts),t.skipReconnect||t.open(function(e){e?(t.reconnecting=!1,t.reconnect(),t.emitAll("reconnect_error",e.data)):t.onreconnect()}))},e);this.subs.push({destroy:function(){clearTimeout(r)}})}},n.prototype.onreconnect=function(){var t=this.backoff.attempts;this.reconnecting=!1,this.backoff.reset(),this.updateSocketIds(),this.emitAll("reconnect",t)}},function(t,e,r){t.exports=r(11),t.exports.parser=r(18)},function(t,e,r){(function(e){function n(t,r){if(!(this instanceof n))return new n(t,r);r=r||{},t&&"object"==typeof t&&(r=t,t=null),t?(t=h(t),r.hostname=t.host,r.secure="https"===t.protocol||"wss"===t.protocol,r.port=t.port,t.query&&(r.query=t.query)):r.host&&(r.hostname=h(r.host).host),this.secure=null!=r.secure?r.secure:e.location&&"https:"===location.protocol,r.hostname&&!r.port&&(r.port=this.secure?"443":"80"),this.agent=r.agent||!1,this.hostname=r.hostname||(e.location?location.hostname:"localhost"),this.port=r.port||(e.location&&location.port?location.port:this.secure?443:80),this.query=r.query||{},"string"==typeof this.query&&(this.query=p.decode(this.query)),this.upgrade=!1!==r.upgrade,this.path=(r.path||"/engine.io").replace(/\/$/,"")+"/",this.forceJSONP=!!r.forceJSONP,this.jsonp=!1!==r.jsonp,this.forceBase64=!!r.forceBase64,this.enablesXDR=!!r.enablesXDR,this.timestampParam=r.timestampParam||"t",this.timestampRequests=r.timestampRequests,this.transports=r.transports||["polling","websocket"],this.transportOptions=r.transportOptions||{},this.readyState="",this.writeBuffer=[],this.prevBufferLen=0,this.policyPort=r.policyPort||843,this.rememberUpgrade=r.rememberUpgrade||!1,this.binaryType=null,this.onlyBinaryUpgrades=r.onlyBinaryUpgrades,this.perMessageDeflate=!1!==r.perMessageDeflate&&(r.perMessageDeflate||{}),!0===this.perMessageDeflate&&(this.perMessageDeflate={}),this.perMessageDeflate&&null==this.perMessageDeflate.threshold&&(this.perMessageDeflate.threshold=1024),this.pfx=r.pfx||null,this.key=r.key||null,this.passphrase=r.passphrase||null,this.cert=r.cert||null,this.ca=r.ca||null,this.ciphers=r.ciphers||null,this.rejectUnauthorized=void 0===r.rejectUnauthorized||r.rejectUnauthorized,this.forceNode=!!r.forceNode;var o="object"==typeof e&&e;o.global===o&&(r.extraHeaders&&Object.keys(r.extraHeaders).length>0&&(this.extraHeaders=r.extraHeaders),r.localAddress&&(this.localAddress=r.localAddress)),this.id=null,this.upgrades=null,this.pingInterval=null,this.pingTimeout=null,this.pingIntervalTimer=null,this.pingTimeoutTimer=null,this.open()}function o(t){var e={};for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);return e}var i=r(12),s=r(5),a=(r(3)("engine.io-client:socket"),r(33)),c=r(18),h=r(2),p=r(27);t.exports=n,n.priorWebsocketSuccess=!1,s(n.prototype),n.protocol=c.protocol,n.Socket=n,n.Transport=r(17),n.transports=r(12),n.parser=r(18),n.prototype.createTransport=function(t){var e=o(this.query);e.EIO=c.protocol,e.transport=t;var r=this.transportOptions[t]||{};this.id&&(e.sid=this.id);var n=new i[t]({query:e,socket:this,agent:r.agent||this.agent,hostname:r.hostname||this.hostname,port:r.port||this.port,secure:r.secure||this.secure,path:r.path||this.path,forceJSONP:r.forceJSONP||this.forceJSONP,jsonp:r.jsonp||this.jsonp,forceBase64:r.forceBase64||this.forceBase64,enablesXDR:r.enablesXDR||this.enablesXDR,timestampRequests:r.timestampRequests||this.timestampRequests,timestampParam:r.timestampParam||this.timestampParam,policyPort:r.policyPort||this.policyPort,pfx:r.pfx||this.pfx,key:r.key||this.key,passphrase:r.passphrase||this.passphrase,cert:r.cert||this.cert,ca:r.ca||this.ca,ciphers:r.ciphers||this.ciphers,rejectUnauthorized:r.rejectUnauthorized||this.rejectUnauthorized,perMessageDeflate:r.perMessageDeflate||this.perMessageDeflate,extraHeaders:r.extraHeaders||this.extraHeaders,forceNode:r.forceNode||this.forceNode,localAddress:r.localAddress||this.localAddress,requestTimeout:r.requestTimeout||this.requestTimeout,protocols:r.protocols||void 0});return n},n.prototype.open=function(){var t;if(this.rememberUpgrade&&n.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1)t="websocket";else{if(0===this.transports.length){var e=this;return void setTimeout(function(){e.emit("error","No transports available")},0)}t=this.transports[0]}this.readyState="opening";try{t=this.createTransport(t)}catch(t){return this.transports.shift(),void this.open()}t.open(),this.setTransport(t)},n.prototype.setTransport=function(t){var e=this;this.transport&&this.transport.removeAllListeners(),this.transport=t,t.on("drain",function(){e.onDrain()}).on("packet",function(t){e.onPacket(t)}).on("error",function(t){e.onError(t)}).on("close",function(){e.onClose("transport close")})},n.prototype.probe=function(t){function e(){if(u.onlyBinaryUpgrades){var t=!this.supportsBinary&&u.transport.supportsBinary;p=p||t}p||(h.send([{type:"ping",data:"probe"}]),h.once("packet",function(t){if(!p)if("pong"===t.type&&"probe"===t.data){if(u.upgrading=!0,u.emit("upgrading",h),!h)return;n.priorWebsocketSuccess="websocket"===h.name,u.transport.pause(function(){p||"closed"!==u.readyState&&(c(),u.setTransport(h),h.send([{type:"upgrade"}]),u.emit("upgrade",h),h=null,u.upgrading=!1,u.flush())})}else{var e=new Error("probe error");e.transport=h.name,u.emit("upgradeError",e)}}))}function r(){p||(p=!0,c(),h.close(),h=null)}function o(t){var e=new Error("probe error: "+t);e.transport=h.name,r(),u.emit("upgradeError",e)}function i(){o("transport closed")}function s(){o("socket closed")}function a(t){h&&t.name!==h.name&&r()}function c(){h.removeListener("open",e),h.removeListener("error",o),h.removeListener("close",i),u.removeListener("close",s),u.removeListener("upgrading",a)}var h=this.createTransport(t,{probe:1}),p=!1,u=this;n.priorWebsocketSuccess=!1,h.once("open",e),h.once("error",o),h.once("close",i),this.once("close",s),this.once("upgrading",a),h.open()},n.prototype.onOpen=function(){if(this.readyState="open",n.priorWebsocketSuccess="websocket"===this.transport.name,this.emit("open"),this.flush(),"open"===this.readyState&&this.upgrade&&this.transport.pause)for(var t=0,e=this.upgrades.length;t<e;t++)this.probe(this.upgrades[t])},n.prototype.onPacket=function(t){if("opening"===this.readyState||"open"===this.readyState||"closing"===this.readyState)switch(this.emit("packet",t),this.emit("heartbeat"),t.type){case"open":this.onHandshake(JSON.parse(t.data));break;case"pong":this.setPing(),this.emit("pong");break;case"error":var e=new Error("server error");e.code=t.data,this.onError(e);break;case"message":this.emit("data",t.data),this.emit("message",t.data)}},n.prototype.onHandshake=function(t){this.emit("handshake",t),this.id=t.sid,this.transport.query.sid=t.sid,this.upgrades=this.filterUpgrades(t.upgrades),this.pingInterval=t.pingInterval,this.pingTimeout=t.pingTimeout,this.onOpen(),"closed"!==this.readyState&&(this.setPing(),this.removeListener("heartbeat",this.onHeartbeat),this.on("heartbeat",this.onHeartbeat))},n.prototype.onHeartbeat=function(t){clearTimeout(this.pingTimeoutTimer);var e=this;e.pingTimeoutTimer=setTimeout(function(){"closed"!==e.readyState&&e.onClose("ping timeout")},t||e.pingInterval+e.pingTimeout)},n.prototype.setPing=function(){var t=this;clearTimeout(t.pingIntervalTimer),t.pingIntervalTimer=setTimeout(function(){t.ping(),t.onHeartbeat(t.pingTimeout)},t.pingInterval)},n.prototype.ping=function(){var t=this;this.sendPacket("ping",function(){t.emit("ping")})},n.prototype.onDrain=function(){this.writeBuffer.splice(0,this.prevBufferLen),this.prevBufferLen=0,0===this.writeBuffer.length?this.emit("drain"):this.flush()},n.prototype.flush=function(){"closed"!==this.readyState&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length&&(this.transport.send(this.writeBuffer),this.prevBufferLen=this.writeBuffer.length,this.emit("flush"))},n.prototype.write=n.prototype.send=function(t,e,r){return this.sendPacket("message",t,e,r),this},n.prototype.sendPacket=function(t,e,r,n){if("function"==typeof e&&(n=e,e=void 0),"function"==typeof r&&(n=r,r=null),"closing"!==this.readyState&&"closed"!==this.readyState){r=r||{},r.compress=!1!==r.compress;var o={type:t,data:e,options:r};this.emit("packetCreate",o),this.writeBuffer.push(o),n&&this.once("flush",n),this.flush()}},n.prototype.close=function(){function t(){n.onClose("forced close"),n.transport.close()}function e(){n.removeListener("upgrade",e),n.removeListener("upgradeError",e),t()}function r(){n.once("upgrade",e),n.once("upgradeError",e)}if("opening"===this.readyState||"open"===this.readyState){this.readyState="closing";var n=this;this.writeBuffer.length?this.once("drain",function(){this.upgrading?r():t()}):this.upgrading?r():t()}return this},n.prototype.onError=function(t){n.priorWebsocketSuccess=!1,this.emit("error",t),this.onClose("transport error",t)},n.prototype.onClose=function(t,e){if("opening"===this.readyState||"open"===this.readyState||"closing"===this.readyState){var r=this;clearTimeout(this.pingIntervalTimer),clearTimeout(this.pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),this.readyState="closed",this.id=null,this.emit("close",t,e),r.writeBuffer=[],r.prevBufferLen=0}},n.prototype.filterUpgrades=function(t){for(var e=[],r=0,n=t.length;r<n;r++)~a(this.transports,t[r])&&e.push(t[r]);return e}}).call(e,function(){return this}())},function(t,e,r){(function(t){function n(e){var r,n=!1,a=!1,c=!1!==e.jsonp;if(t.location){var h="https:"===location.protocol,p=location.port;p||(p=h?443:80),n=e.hostname!==location.hostname||p!==e.port,a=e.secure!==h}if(e.xdomain=n,e.xscheme=a,r=new o(e),"open"in r&&!e.forceJSONP)return new i(e);if(!c)throw new Error("JSONP disabled");return new s(e)}var o=r(13),i=r(15),s=r(30),a=r(31);e.polling=n,e.websocket=a}).call(e,function(){return this}())},function(t,e,r){(function(e){var n=r(14);t.exports=function(t){var r=t.xdomain,o=t.xscheme,i=t.enablesXDR;try{if("undefined"!=typeof XMLHttpRequest&&(!r||n))return new XMLHttpRequest}catch(t){}try{if("undefined"!=typeof XDomainRequest&&!o&&i)return new XDomainRequest}catch(t){}if(!r)try{return new(e[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")}catch(t){}}}).call(e,function(){return this}())},function(t,e){try{t.exports="undefined"!=typeof XMLHttpRequest&&"withCredentials"in new XMLHttpRequest}catch(e){t.exports=!1}},function(t,e,r){(function(e){function n(){}function o(t){if(c.call(this,t),this.requestTimeout=t.requestTimeout,this.extraHeaders=t.extraHeaders,e.location){var r="https:"===location.protocol,n=location.port;n||(n=r?443:80),this.xd=t.hostname!==e.location.hostname||n!==t.port,this.xs=t.secure!==r}}function i(t){this.method=t.method||"GET",this.uri=t.uri,this.xd=!!t.xd,this.xs=!!t.xs,this.async=!1!==t.async,this.data=void 0!==t.data?t.data:null,this.agent=t.agent,this.isBinary=t.isBinary,this.supportsBinary=t.supportsBinary,this.enablesXDR=t.enablesXDR,this.requestTimeout=t.requestTimeout,this.pfx=t.pfx,this.key=t.key,this.passphrase=t.passphrase,this.cert=t.cert,this.ca=t.ca,this.ciphers=t.ciphers,this.rejectUnauthorized=t.rejectUnauthorized,this.extraHeaders=t.extraHeaders,this.create()}function s(){for(var t in i.requests)i.requests.hasOwnProperty(t)&&i.requests[t].abort()}var a=r(13),c=r(16),h=r(5),p=r(28);r(3)("engine.io-client:polling-xhr");t.exports=o,t.exports.Request=i,p(o,c),o.prototype.supportsBinary=!0,o.prototype.request=function(t){return t=t||{},t.uri=this.uri(),t.xd=this.xd,t.xs=this.xs,t.agent=this.agent||!1,t.supportsBinary=this.supportsBinary,t.enablesXDR=this.enablesXDR,t.pfx=this.pfx,t.key=this.key,t.passphrase=this.passphrase,t.cert=this.cert,t.ca=this.ca,t.ciphers=this.ciphers,t.rejectUnauthorized=this.rejectUnauthorized,t.requestTimeout=this.requestTimeout,t.extraHeaders=this.extraHeaders,new i(t)},o.prototype.doWrite=function(t,e){var r="string"!=typeof t&&void 0!==t,n=this.request({method:"POST",data:t,isBinary:r}),o=this;n.on("success",e),n.on("error",function(t){o.onError("xhr post error",t)}),this.sendXhr=n},o.prototype.doPoll=function(){var t=this.request(),e=this;t.on("data",function(t){e.onData(t)}),t.on("error",function(t){e.onError("xhr poll error",t)}),this.pollXhr=t},h(i.prototype),i.prototype.create=function(){var t={agent:this.agent,xdomain:this.xd,xscheme:this.xs,enablesXDR:this.enablesXDR};t.pfx=this.pfx,t.key=this.key,t.passphrase=this.passphrase,t.cert=this.cert,t.ca=this.ca,t.ciphers=this.ciphers,t.rejectUnauthorized=this.rejectUnauthorized;var r=this.xhr=new a(t),n=this;try{r.open(this.method,this.uri,this.async);try{if(this.extraHeaders){r.setDisableHeaderCheck&&r.setDisableHeaderCheck(!0);for(var o in this.extraHeaders)this.extraHeaders.hasOwnProperty(o)&&r.setRequestHeader(o,this.extraHeaders[o])}}catch(t){}if("POST"===this.method)try{this.isBinary?r.setRequestHeader("Content-type","application/octet-stream"):r.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch(t){}try{r.setRequestHeader("Accept","*/*")}catch(t){}"withCredentials"in r&&(r.withCredentials=!0),this.requestTimeout&&(r.timeout=this.requestTimeout),this.hasXDR()?(r.onload=function(){n.onLoad()},r.onerror=function(){n.onError(r.responseText)}):r.onreadystatechange=function(){if(2===r.readyState)try{var t=r.getResponseHeader("Content-Type");n.supportsBinary&&"application/octet-stream"===t&&(r.responseType="arraybuffer")}catch(t){}4===r.readyState&&(200===r.status||1223===r.status?n.onLoad():setTimeout(function(){n.onError(r.status)},0))},r.send(this.data)}catch(t){return void setTimeout(function(){n.onError(t)},0)}e.document&&(this.index=i.requestsCount++,i.requests[this.index]=this)},i.prototype.onSuccess=function(){this.emit("success"),this.cleanup()},i.prototype.onData=function(t){this.emit("data",t),this.onSuccess()},i.prototype.onError=function(t){this.emit("error",t),this.cleanup(!0)},i.prototype.cleanup=function(t){if("undefined"!=typeof this.xhr&&null!==this.xhr){if(this.hasXDR()?this.xhr.onload=this.xhr.onerror=n:this.xhr.onreadystatechange=n,t)try{this.xhr.abort()}catch(t){}e.document&&delete i.requests[this.index],this.xhr=null}},i.prototype.onLoad=function(){var t;try{var e;try{e=this.xhr.getResponseHeader("Content-Type")}catch(t){}t="application/octet-stream"===e?this.xhr.response||this.xhr.responseText:this.xhr.responseText}catch(t){this.onError(t)}null!=t&&this.onData(t)},i.prototype.hasXDR=function(){return"undefined"!=typeof e.XDomainRequest&&!this.xs&&this.enablesXDR},i.prototype.abort=function(){this.cleanup()},i.requestsCount=0,i.requests={},e.document&&(e.attachEvent?e.attachEvent("onunload",s):e.addEventListener&&e.addEventListener("beforeunload",s,!1))}).call(e,function(){return this}())},function(t,e,r){function n(t){var e=t&&t.forceBase64;h&&!e||(this.supportsBinary=!1),o.call(this,t)}var o=r(17),i=r(27),s=r(18),a=r(28),c=r(29);r(3)("engine.io-client:polling");t.exports=n;var h=function(){var t=r(13),e=new t({xdomain:!1});return null!=e.responseType}();a(n,o),n.prototype.name="polling",n.prototype.doOpen=function(){this.poll()},n.prototype.pause=function(t){function e(){r.readyState="paused",t()}var r=this;if(this.readyState="pausing",this.polling||!this.writable){var n=0;this.polling&&(n++,this.once("pollComplete",function(){--n||e()})),this.writable||(n++,this.once("drain",function(){--n||e()}))}else e()},n.prototype.poll=function(){this.polling=!0,this.doPoll(),this.emit("poll")},n.prototype.onData=function(t){var e=this,r=function(t,r,n){return"opening"===e.readyState&&e.onOpen(),"close"===t.type?(e.onClose(),!1):void e.onPacket(t)};s.decodePayload(t,this.socket.binaryType,r),"closed"!==this.readyState&&(this.polling=!1,this.emit("pollComplete"),"open"===this.readyState&&this.poll())},n.prototype.doClose=function(){function t(){e.write([{type:"close"}])}var e=this;"open"===this.readyState?t():this.once("open",t)},n.prototype.write=function(t){var e=this;this.writable=!1;var r=function(){e.writable=!0,e.emit("drain")};s.encodePayload(t,this.supportsBinary,function(t){e.doWrite(t,r)})},n.prototype.uri=function(){var t=this.query||{},e=this.secure?"https":"http",r="";!1!==this.timestampRequests&&(t[this.timestampParam]=c()),this.supportsBinary||t.sid||(t.b64=1),t=i.encode(t),this.port&&("https"===e&&443!==Number(this.port)||"http"===e&&80!==Number(this.port))&&(r=":"+this.port),t.length&&(t="?"+t);var n=this.hostname.indexOf(":")!==-1;return e+"://"+(n?"["+this.hostname+"]":this.hostname)+r+this.path+t}},function(t,e,r){function n(t){this.path=t.path,this.hostname=t.hostname,this.port=t.port,this.secure=t.secure,this.query=t.query,this.timestampParam=t.timestampParam,this.timestampRequests=t.timestampRequests,this.readyState="",this.agent=t.agent||!1,this.socket=t.socket,this.enablesXDR=t.enablesXDR,this.pfx=t.pfx,this.key=t.key,this.passphrase=t.passphrase,this.cert=t.cert,this.ca=t.ca,this.ciphers=t.ciphers,this.rejectUnauthorized=t.rejectUnauthorized,this.forceNode=t.forceNode,this.extraHeaders=t.extraHeaders,this.localAddress=t.localAddress}var o=r(18),i=r(5);t.exports=n,i(n.prototype),n.prototype.onError=function(t,e){var r=new Error(t);return r.type="TransportError",r.description=e,this.emit("error",r),this},n.prototype.open=function(){return"closed"!==this.readyState&&""!==this.readyState||(this.readyState="opening",this.doOpen()),this},n.prototype.close=function(){return"opening"!==this.readyState&&"open"!==this.readyState||(this.doClose(),this.onClose()),this},n.prototype.send=function(t){if("open"!==this.readyState)throw new Error("Transport not open");this.write(t)},n.prototype.onOpen=function(){this.readyState="open",this.writable=!0,this.emit("open")},n.prototype.onData=function(t){var e=o.decodePacket(t,this.socket.binaryType);this.onPacket(e)},n.prototype.onPacket=function(t){this.emit("packet",t)},n.prototype.onClose=function(){this.readyState="closed",this.emit("close")}},function(t,e,r){(function(t){function n(t,r){var n="b"+e.packets[t.type]+t.data.data;return r(n)}function o(t,r,n){if(!r)return e.encodeBase64Packet(t,n);
var o=t.data,i=new Uint8Array(o),s=new Uint8Array(1+o.byteLength);s[0]=v[t.type];for(var a=0;a<i.length;a++)s[a+1]=i[a];return n(s.buffer)}function i(t,r,n){if(!r)return e.encodeBase64Packet(t,n);var o=new FileReader;return o.onload=function(){t.data=o.result,e.encodePacket(t,r,!0,n)},o.readAsArrayBuffer(t.data)}function s(t,r,n){if(!r)return e.encodeBase64Packet(t,n);if(g)return i(t,r,n);var o=new Uint8Array(1);o[0]=v[t.type];var s=new w([o.buffer,t.data]);return n(s)}function a(t){try{t=d.decode(t,{strict:!1})}catch(t){return!1}return t}function c(t,e,r){for(var n=new Array(t.length),o=l(t.length,r),i=function(t,r,o){e(r,function(e,r){n[t]=r,o(e,n)})},s=0;s<t.length;s++)i(s,t[s],o)}var h,p=r(19),u=r(20),f=r(21),l=r(22),d=r(23);t&&t.ArrayBuffer&&(h=r(25));var y="undefined"!=typeof navigator&&/Android/i.test(navigator.userAgent),m="undefined"!=typeof navigator&&/PhantomJS/i.test(navigator.userAgent),g=y||m;e.protocol=3;var v=e.packets={open:0,close:1,ping:2,pong:3,message:4,upgrade:5,noop:6},b=p(v),k={type:"error",data:"parser error"},w=r(26);e.encodePacket=function(e,r,i,a){"function"==typeof r&&(a=r,r=!1),"function"==typeof i&&(a=i,i=null);var c=void 0===e.data?void 0:e.data.buffer||e.data;if(t.ArrayBuffer&&c instanceof ArrayBuffer)return o(e,r,a);if(w&&c instanceof t.Blob)return s(e,r,a);if(c&&c.base64)return n(e,a);var h=v[e.type];return void 0!==e.data&&(h+=i?d.encode(String(e.data),{strict:!1}):String(e.data)),a(""+h)},e.encodeBase64Packet=function(r,n){var o="b"+e.packets[r.type];if(w&&r.data instanceof t.Blob){var i=new FileReader;return i.onload=function(){var t=i.result.split(",")[1];n(o+t)},i.readAsDataURL(r.data)}var s;try{s=String.fromCharCode.apply(null,new Uint8Array(r.data))}catch(t){for(var a=new Uint8Array(r.data),c=new Array(a.length),h=0;h<a.length;h++)c[h]=a[h];s=String.fromCharCode.apply(null,c)}return o+=t.btoa(s),n(o)},e.decodePacket=function(t,r,n){if(void 0===t)return k;if("string"==typeof t){if("b"===t.charAt(0))return e.decodeBase64Packet(t.substr(1),r);if(n&&(t=a(t),t===!1))return k;var o=t.charAt(0);return Number(o)==o&&b[o]?t.length>1?{type:b[o],data:t.substring(1)}:{type:b[o]}:k}var i=new Uint8Array(t),o=i[0],s=f(t,1);return w&&"blob"===r&&(s=new w([s])),{type:b[o],data:s}},e.decodeBase64Packet=function(t,e){var r=b[t.charAt(0)];if(!h)return{type:r,data:{base64:!0,data:t.substr(1)}};var n=h.decode(t.substr(1));return"blob"===e&&w&&(n=new w([n])),{type:r,data:n}},e.encodePayload=function(t,r,n){function o(t){return t.length+":"+t}function i(t,n){e.encodePacket(t,!!s&&r,!1,function(t){n(null,o(t))})}"function"==typeof r&&(n=r,r=null);var s=u(t);return r&&s?w&&!g?e.encodePayloadAsBlob(t,n):e.encodePayloadAsArrayBuffer(t,n):t.length?void c(t,i,function(t,e){return n(e.join(""))}):n("0:")},e.decodePayload=function(t,r,n){if("string"!=typeof t)return e.decodePayloadAsBinary(t,r,n);"function"==typeof r&&(n=r,r=null);var o;if(""===t)return n(k,0,1);for(var i,s,a="",c=0,h=t.length;c<h;c++){var p=t.charAt(c);if(":"===p){if(""===a||a!=(i=Number(a)))return n(k,0,1);if(s=t.substr(c+1,i),a!=s.length)return n(k,0,1);if(s.length){if(o=e.decodePacket(s,r,!1),k.type===o.type&&k.data===o.data)return n(k,0,1);var u=n(o,c+i,h);if(!1===u)return}c+=i,a=""}else a+=p}return""!==a?n(k,0,1):void 0},e.encodePayloadAsArrayBuffer=function(t,r){function n(t,r){e.encodePacket(t,!0,!0,function(t){return r(null,t)})}return t.length?void c(t,n,function(t,e){var n=e.reduce(function(t,e){var r;return r="string"==typeof e?e.length:e.byteLength,t+r.toString().length+r+2},0),o=new Uint8Array(n),i=0;return e.forEach(function(t){var e="string"==typeof t,r=t;if(e){for(var n=new Uint8Array(t.length),s=0;s<t.length;s++)n[s]=t.charCodeAt(s);r=n.buffer}e?o[i++]=0:o[i++]=1;for(var a=r.byteLength.toString(),s=0;s<a.length;s++)o[i++]=parseInt(a[s]);o[i++]=255;for(var n=new Uint8Array(r),s=0;s<n.length;s++)o[i++]=n[s]}),r(o.buffer)}):r(new ArrayBuffer(0))},e.encodePayloadAsBlob=function(t,r){function n(t,r){e.encodePacket(t,!0,!0,function(t){var e=new Uint8Array(1);if(e[0]=1,"string"==typeof t){for(var n=new Uint8Array(t.length),o=0;o<t.length;o++)n[o]=t.charCodeAt(o);t=n.buffer,e[0]=0}for(var i=t instanceof ArrayBuffer?t.byteLength:t.size,s=i.toString(),a=new Uint8Array(s.length+1),o=0;o<s.length;o++)a[o]=parseInt(s[o]);if(a[s.length]=255,w){var c=new w([e.buffer,a.buffer,t]);r(null,c)}})}c(t,n,function(t,e){return r(new w(e))})},e.decodePayloadAsBinary=function(t,r,n){"function"==typeof r&&(n=r,r=null);for(var o=t,i=[];o.byteLength>0;){for(var s=new Uint8Array(o),a=0===s[0],c="",h=1;255!==s[h];h++){if(c.length>310)return n(k,0,1);c+=s[h]}o=f(o,2+c.length),c=parseInt(c);var p=f(o,0,c);if(a)try{p=String.fromCharCode.apply(null,new Uint8Array(p))}catch(t){var u=new Uint8Array(p);p="";for(var h=0;h<u.length;h++)p+=String.fromCharCode(u[h])}i.push(p),o=f(o,c)}var l=i.length;i.forEach(function(t,o){n(e.decodePacket(t,r,!0),o,l)})}}).call(e,function(){return this}())},function(t,e){t.exports=Object.keys||function(t){var e=[],r=Object.prototype.hasOwnProperty;for(var n in t)r.call(t,n)&&e.push(n);return e}},function(t,e,r){(function(e){function n(t){if(!t||"object"!=typeof t)return!1;if(o(t)){for(var r=0,i=t.length;r<i;r++)if(n(t[r]))return!0;return!1}if("function"==typeof e.Buffer&&e.Buffer.isBuffer&&e.Buffer.isBuffer(t)||"function"==typeof e.ArrayBuffer&&t instanceof ArrayBuffer||s&&t instanceof Blob||a&&t instanceof File)return!0;if(t.toJSON&&"function"==typeof t.toJSON&&1===arguments.length)return n(t.toJSON(),!0);for(var c in t)if(Object.prototype.hasOwnProperty.call(t,c)&&n(t[c]))return!0;return!1}var o=r(7),i=Object.prototype.toString,s="function"==typeof e.Blob||"[object BlobConstructor]"===i.call(e.Blob),a="function"==typeof e.File||"[object FileConstructor]"===i.call(e.File);t.exports=n}).call(e,function(){return this}())},function(t,e){t.exports=function(t,e,r){var n=t.byteLength;if(e=e||0,r=r||n,t.slice)return t.slice(e,r);if(e<0&&(e+=n),r<0&&(r+=n),r>n&&(r=n),e>=n||e>=r||0===n)return new ArrayBuffer(0);for(var o=new Uint8Array(t),i=new Uint8Array(r-e),s=e,a=0;s<r;s++,a++)i[a]=o[s];return i.buffer}},function(t,e){function r(t,e,r){function o(t,n){if(o.count<=0)throw new Error("after called too many times");--o.count,t?(i=!0,e(t),e=r):0!==o.count||i||e(null,n)}var i=!1;return r=r||n,o.count=t,0===t?e():o}function n(){}t.exports=r},function(t,e,r){var n;(function(t,o){!function(i){function s(t){for(var e,r,n=[],o=0,i=t.length;o<i;)e=t.charCodeAt(o++),e>=55296&&e<=56319&&o<i?(r=t.charCodeAt(o++),56320==(64512&r)?n.push(((1023&e)<<10)+(1023&r)+65536):(n.push(e),o--)):n.push(e);return n}function a(t){for(var e,r=t.length,n=-1,o="";++n<r;)e=t[n],e>65535&&(e-=65536,o+=k(e>>>10&1023|55296),e=56320|1023&e),o+=k(e);return o}function c(t,e){if(t>=55296&&t<=57343){if(e)throw Error("Lone surrogate U+"+t.toString(16).toUpperCase()+" is not a scalar value");return!1}return!0}function h(t,e){return k(t>>e&63|128)}function p(t,e){if(0==(4294967168&t))return k(t);var r="";return 0==(4294965248&t)?r=k(t>>6&31|192):0==(4294901760&t)?(c(t,e)||(t=65533),r=k(t>>12&15|224),r+=h(t,6)):0==(4292870144&t)&&(r=k(t>>18&7|240),r+=h(t,12),r+=h(t,6)),r+=k(63&t|128)}function u(t,e){e=e||{};for(var r,n=!1!==e.strict,o=s(t),i=o.length,a=-1,c="";++a<i;)r=o[a],c+=p(r,n);return c}function f(){if(b>=v)throw Error("Invalid byte index");var t=255&g[b];if(b++,128==(192&t))return 63&t;throw Error("Invalid continuation byte")}function l(t){var e,r,n,o,i;if(b>v)throw Error("Invalid byte index");if(b==v)return!1;if(e=255&g[b],b++,0==(128&e))return e;if(192==(224&e)){if(r=f(),i=(31&e)<<6|r,i>=128)return i;throw Error("Invalid continuation byte")}if(224==(240&e)){if(r=f(),n=f(),i=(15&e)<<12|r<<6|n,i>=2048)return c(i,t)?i:65533;throw Error("Invalid continuation byte")}if(240==(248&e)&&(r=f(),n=f(),o=f(),i=(7&e)<<18|r<<12|n<<6|o,i>=65536&&i<=1114111))return i;throw Error("Invalid UTF-8 detected")}function d(t,e){e=e||{};var r=!1!==e.strict;g=s(t),v=g.length,b=0;for(var n,o=[];(n=l(r))!==!1;)o.push(n);return a(o)}var y="object"==typeof e&&e,m=("object"==typeof t&&t&&t.exports==y&&t,"object"==typeof o&&o);m.global!==m&&m.window!==m||(i=m);var g,v,b,k=String.fromCharCode,w={version:"2.1.2",encode:u,decode:d};n=function(){return w}.call(e,r,e,t),!(void 0!==n&&(t.exports=n))}(this)}).call(e,r(24)(t),function(){return this}())},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children=[],t.webpackPolyfill=1),t}},function(t,e){!function(){"use strict";for(var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",r=new Uint8Array(256),n=0;n<t.length;n++)r[t.charCodeAt(n)]=n;e.encode=function(e){var r,n=new Uint8Array(e),o=n.length,i="";for(r=0;r<o;r+=3)i+=t[n[r]>>2],i+=t[(3&n[r])<<4|n[r+1]>>4],i+=t[(15&n[r+1])<<2|n[r+2]>>6],i+=t[63&n[r+2]];return o%3===2?i=i.substring(0,i.length-1)+"=":o%3===1&&(i=i.substring(0,i.length-2)+"=="),i},e.decode=function(t){var e,n,o,i,s,a=.75*t.length,c=t.length,h=0;"="===t[t.length-1]&&(a--,"="===t[t.length-2]&&a--);var p=new ArrayBuffer(a),u=new Uint8Array(p);for(e=0;e<c;e+=4)n=r[t.charCodeAt(e)],o=r[t.charCodeAt(e+1)],i=r[t.charCodeAt(e+2)],s=r[t.charCodeAt(e+3)],u[h++]=n<<2|o>>4,u[h++]=(15&o)<<4|i>>2,u[h++]=(3&i)<<6|63&s;return p}}()},function(t,e){(function(e){function r(t){for(var e=0;e<t.length;e++){var r=t[e];if(r.buffer instanceof ArrayBuffer){var n=r.buffer;if(r.byteLength!==n.byteLength){var o=new Uint8Array(r.byteLength);o.set(new Uint8Array(n,r.byteOffset,r.byteLength)),n=o.buffer}t[e]=n}}}function n(t,e){e=e||{};var n=new i;r(t);for(var o=0;o<t.length;o++)n.append(t[o]);return e.type?n.getBlob(e.type):n.getBlob()}function o(t,e){return r(t),new Blob(t,e||{})}var i=e.BlobBuilder||e.WebKitBlobBuilder||e.MSBlobBuilder||e.MozBlobBuilder,s=function(){try{var t=new Blob(["hi"]);return 2===t.size}catch(t){return!1}}(),a=s&&function(){try{var t=new Blob([new Uint8Array([1,2])]);return 2===t.size}catch(t){return!1}}(),c=i&&i.prototype.append&&i.prototype.getBlob;t.exports=function(){return s?a?e.Blob:o:c?n:void 0}()}).call(e,function(){return this}())},function(t,e){e.encode=function(t){var e="";for(var r in t)t.hasOwnProperty(r)&&(e.length&&(e+="&"),e+=encodeURIComponent(r)+"="+encodeURIComponent(t[r]));return e},e.decode=function(t){for(var e={},r=t.split("&"),n=0,o=r.length;n<o;n++){var i=r[n].split("=");e[decodeURIComponent(i[0])]=decodeURIComponent(i[1])}return e}},function(t,e){t.exports=function(t,e){var r=function(){};r.prototype=e.prototype,t.prototype=new r,t.prototype.constructor=t}},function(t,e){"use strict";function r(t){var e="";do e=s[t%a]+e,t=Math.floor(t/a);while(t>0);return e}function n(t){var e=0;for(p=0;p<t.length;p++)e=e*a+c[t.charAt(p)];return e}function o(){var t=r(+new Date);return t!==i?(h=0,i=t):t+"."+r(h++)}for(var i,s="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),a=64,c={},h=0,p=0;p<a;p++)c[s[p]]=p;o.encode=r,o.decode=n,t.exports=o},function(t,e,r){(function(e){function n(){}function o(t){i.call(this,t),this.query=this.query||{},a||(e.___eio||(e.___eio=[]),a=e.___eio),this.index=a.length;var r=this;a.push(function(t){r.onData(t)}),this.query.j=this.index,e.document&&e.addEventListener&&e.addEventListener("beforeunload",function(){r.script&&(r.script.onerror=n)},!1)}var i=r(16),s=r(28);t.exports=o;var a,c=/\n/g,h=/\\n/g;s(o,i),o.prototype.supportsBinary=!1,o.prototype.doClose=function(){this.script&&(this.script.parentNode.removeChild(this.script),this.script=null),this.form&&(this.form.parentNode.removeChild(this.form),this.form=null,this.iframe=null),i.prototype.doClose.call(this)},o.prototype.doPoll=function(){var t=this,e=document.createElement("script");this.script&&(this.script.parentNode.removeChild(this.script),this.script=null),e.async=!0,e.src=this.uri(),e.onerror=function(e){t.onError("jsonp poll error",e)};var r=document.getElementsByTagName("script")[0];r?r.parentNode.insertBefore(e,r):(document.head||document.body).appendChild(e),this.script=e;var n="undefined"!=typeof navigator&&/gecko/i.test(navigator.userAgent);n&&setTimeout(function(){var t=document.createElement("iframe");document.body.appendChild(t),document.body.removeChild(t)},100)},o.prototype.doWrite=function(t,e){function r(){n(),e()}function n(){if(o.iframe)try{o.form.removeChild(o.iframe)}catch(t){o.onError("jsonp polling iframe removal error",t)}try{var t='<iframe src="javascript:0" name="'+o.iframeId+'">';i=document.createElement(t)}catch(t){i=document.createElement("iframe"),i.name=o.iframeId,i.src="javascript:0"}i.id=o.iframeId,o.form.appendChild(i),o.iframe=i}var o=this;if(!this.form){var i,s=document.createElement("form"),a=document.createElement("textarea"),p=this.iframeId="eio_iframe_"+this.index;s.className="socketio",s.style.position="absolute",s.style.top="-1000px",s.style.left="-1000px",s.target=p,s.method="POST",s.setAttribute("accept-charset","utf-8"),a.name="d",s.appendChild(a),document.body.appendChild(s),this.form=s,this.area=a}this.form.action=this.uri(),n(),t=t.replace(h,"\\\n"),this.area.value=t.replace(c,"\\n");try{this.form.submit()}catch(t){}this.iframe.attachEvent?this.iframe.onreadystatechange=function(){"complete"===o.iframe.readyState&&r()}:this.iframe.onload=r}}).call(e,function(){return this}())},function(t,e,r){(function(e){function n(t){var e=t&&t.forceBase64;e&&(this.supportsBinary=!1),this.perMessageDeflate=t.perMessageDeflate,this.usingBrowserWebSocket=p&&!t.forceNode,this.protocols=t.protocols,this.usingBrowserWebSocket||(u=o),i.call(this,t)}var o,i=r(17),s=r(18),a=r(27),c=r(28),h=r(29),p=(r(3)("engine.io-client:websocket"),e.WebSocket||e.MozWebSocket);if("undefined"==typeof window)try{o=r(32)}catch(t){}var u=p;u||"undefined"!=typeof window||(u=o),t.exports=n,c(n,i),n.prototype.name="websocket",n.prototype.supportsBinary=!0,n.prototype.doOpen=function(){if(this.check()){var t=this.uri(),e=this.protocols,r={agent:this.agent,perMessageDeflate:this.perMessageDeflate};r.pfx=this.pfx,r.key=this.key,r.passphrase=this.passphrase,r.cert=this.cert,r.ca=this.ca,r.ciphers=this.ciphers,r.rejectUnauthorized=this.rejectUnauthorized,this.extraHeaders&&(r.headers=this.extraHeaders),this.localAddress&&(r.localAddress=this.localAddress);try{this.ws=this.usingBrowserWebSocket?e?new u(t,e):new u(t):new u(t,e,r)}catch(t){return this.emit("error",t)}void 0===this.ws.binaryType&&(this.supportsBinary=!1),this.ws.supports&&this.ws.supports.binary?(this.supportsBinary=!0,this.ws.binaryType="nodebuffer"):this.ws.binaryType="arraybuffer",this.addEventListeners()}},n.prototype.addEventListeners=function(){var t=this;this.ws.onopen=function(){t.onOpen()},this.ws.onclose=function(){t.onClose()},this.ws.onmessage=function(e){t.onData(e.data)},this.ws.onerror=function(e){t.onError("websocket error",e)}},n.prototype.write=function(t){function r(){n.emit("flush"),setTimeout(function(){n.writable=!0,n.emit("drain")},0)}var n=this;this.writable=!1;for(var o=t.length,i=0,a=o;i<a;i++)!function(t){s.encodePacket(t,n.supportsBinary,function(i){if(!n.usingBrowserWebSocket){var s={};if(t.options&&(s.compress=t.options.compress),n.perMessageDeflate){var a="string"==typeof i?e.Buffer.byteLength(i):i.length;a<n.perMessageDeflate.threshold&&(s.compress=!1)}}try{n.usingBrowserWebSocket?n.ws.send(i):n.ws.send(i,s)}catch(t){}--o||r()})}(t[i])},n.prototype.onClose=function(){i.prototype.onClose.call(this)},n.prototype.doClose=function(){"undefined"!=typeof this.ws&&this.ws.close()},n.prototype.uri=function(){var t=this.query||{},e=this.secure?"wss":"ws",r="";this.port&&("wss"===e&&443!==Number(this.port)||"ws"===e&&80!==Number(this.port))&&(r=":"+this.port),this.timestampRequests&&(t[this.timestampParam]=h()),this.supportsBinary||(t.b64=1),t=a.encode(t),t.length&&(t="?"+t);var n=this.hostname.indexOf(":")!==-1;return e+"://"+(n?"["+this.hostname+"]":this.hostname)+r+this.path+t},n.prototype.check=function(){return!(!u||"__initialize"in u&&this.name===n.prototype.name)}}).call(e,function(){return this}())},function(t,e){},function(t,e){var r=[].indexOf;t.exports=function(t,e){if(r)return t.indexOf(e);for(var n=0;n<t.length;++n)if(t[n]===e)return n;return-1}},function(t,e,r){"use strict";function n(t,e,r){this.io=t,this.nsp=e,this.json=this,this.ids=0,this.acks={},this.receiveBuffer=[],this.sendBuffer=[],this.connected=!1,this.disconnected=!0,this.flags={},r&&r.query&&(this.query=r.query),this.io.autoConnect&&this.open()}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=r(4),s=r(5),a=r(35),c=r(36),h=r(37),p=(r(3)("socket.io-client:socket"),r(27)),u=r(20);t.exports=e=n;var f={connect:1,connect_error:1,connect_timeout:1,connecting:1,disconnect:1,error:1,reconnect:1,reconnect_attempt:1,reconnect_failed:1,reconnect_error:1,reconnecting:1,ping:1,pong:1},l=s.prototype.emit;s(n.prototype),n.prototype.subEvents=function(){if(!this.subs){var t=this.io;this.subs=[c(t,"open",h(this,"onopen")),c(t,"packet",h(this,"onpacket")),c(t,"close",h(this,"onclose"))]}},n.prototype.open=n.prototype.connect=function(){return this.connected?this:(this.subEvents(),this.io.open(),"open"===this.io.readyState&&this.onopen(),this.emit("connecting"),this)},n.prototype.send=function(){var t=a(arguments);return t.unshift("message"),this.emit.apply(this,t),this},n.prototype.emit=function(t){if(f.hasOwnProperty(t))return l.apply(this,arguments),this;var e=a(arguments),r={type:(void 0!==this.flags.binary?this.flags.binary:u(e))?i.BINARY_EVENT:i.EVENT,data:e};return r.options={},r.options.compress=!this.flags||!1!==this.flags.compress,"function"==typeof e[e.length-1]&&(this.acks[this.ids]=e.pop(),r.id=this.ids++),this.connected?this.packet(r):this.sendBuffer.push(r),this.flags={},this},n.prototype.packet=function(t){t.nsp=this.nsp,this.io.packet(t)},n.prototype.onopen=function(){if("/"!==this.nsp)if(this.query){var t="object"===o(this.query)?p.encode(this.query):this.query;this.packet({type:i.CONNECT,query:t})}else this.packet({type:i.CONNECT})},n.prototype.onclose=function(t){this.connected=!1,this.disconnected=!0,delete this.id,this.emit("disconnect",t)},n.prototype.onpacket=function(t){var e=t.nsp===this.nsp,r=t.type===i.ERROR&&"/"===t.nsp;if(e||r)switch(t.type){case i.CONNECT:this.onconnect();break;case i.EVENT:this.onevent(t);break;case i.BINARY_EVENT:this.onevent(t);break;case i.ACK:this.onack(t);break;case i.BINARY_ACK:this.onack(t);break;case i.DISCONNECT:this.ondisconnect();break;case i.ERROR:this.emit("error",t.data)}},n.prototype.onevent=function(t){var e=t.data||[];null!=t.id&&e.push(this.ack(t.id)),this.connected?l.apply(this,e):this.receiveBuffer.push(e)},n.prototype.ack=function(t){var e=this,r=!1;return function(){if(!r){r=!0;var n=a(arguments);e.packet({type:u(n)?i.BINARY_ACK:i.ACK,id:t,data:n})}}},n.prototype.onack=function(t){var e=this.acks[t.id];"function"==typeof e&&(e.apply(this,t.data),delete this.acks[t.id])},n.prototype.onconnect=function(){this.connected=!0,this.disconnected=!1,this.emit("connect"),this.emitBuffered()},n.prototype.emitBuffered=function(){var t;for(t=0;t<this.receiveBuffer.length;t++)l.apply(this,this.receiveBuffer[t]);for(this.receiveBuffer=[],t=0;t<this.sendBuffer.length;t++)this.packet(this.sendBuffer[t]);this.sendBuffer=[]},n.prototype.ondisconnect=function(){this.destroy(),this.onclose("io server disconnect")},n.prototype.destroy=function(){if(this.subs){for(var t=0;t<this.subs.length;t++)this.subs[t].destroy();this.subs=null}this.io.destroy(this)},n.prototype.close=n.prototype.disconnect=function(){return this.connected&&this.packet({type:i.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this},n.prototype.compress=function(t){return this.flags.compress=t,this},n.prototype.binary=function(t){return this.flags.binary=t,this}},function(t,e){function r(t,e){var r=[];e=e||0;for(var n=e||0;n<t.length;n++)r[n-e]=t[n];return r}t.exports=r},function(t,e){"use strict";function r(t,e,r){return t.on(e,r),{destroy:function(){t.removeListener(e,r)}}}t.exports=r},function(t,e){var r=[].slice;t.exports=function(t,e){if("string"==typeof e&&(e=t[e]),"function"!=typeof e)throw new Error("bind() requires a function");var n=r.call(arguments,2);return function(){return e.apply(t,n.concat(r.call(arguments)))}}},function(t,e){function r(t){t=t||{},this.ms=t.min||100,this.max=t.max||1e4,this.factor=t.factor||2,this.jitter=t.jitter>0&&t.jitter<=1?t.jitter:0,this.attempts=0}t.exports=r,r.prototype.duration=function(){var t=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),r=Math.floor(e*this.jitter*t);t=0==(1&Math.floor(10*e))?t-r:t+r}return 0|Math.min(t,this.max)},r.prototype.reset=function(){this.attempts=0},r.prototype.setMin=function(t){this.ms=t},r.prototype.setMax=function(t){this.max=t},r.prototype.setJitter=function(t){this.jitter=t}}])});


/***/ }),

/***/ "./node_modules/supports-color/index.js":
/*!**********************************************!*\
  !*** ./node_modules/supports-color/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var argv = process.argv;

var terminator = argv.indexOf('--');
var hasFlag = function (flag) {
	flag = '--' + flag;
	var pos = argv.indexOf(flag);
	return pos !== -1 && (terminator !== -1 ? pos < terminator : true);
};

module.exports = (function () {
	if ('FORCE_COLOR' in process.env) {
		return true;
	}

	if (hasFlag('no-color') ||
		hasFlag('no-colors') ||
		hasFlag('color=false')) {
		return false;
	}

	if (hasFlag('color') ||
		hasFlag('colors') ||
		hasFlag('color=true') ||
		hasFlag('color=always')) {
		return true;
	}

	if (process.stdout && !process.stdout.isTTY) {
		return false;
	}

	if (process.platform === 'win32') {
		return true;
	}

	if ('COLORTERM' in process.env) {
		return true;
	}

	if (process.env.TERM === 'dumb') {
		return false;
	}

	if (/^screen|^xterm|^vt100|color|ansi|cygwin|linux/i.test(process.env.TERM)) {
		return true;
	}

	return false;
})();


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
if (typeof global["axios"] === "undefined") {
    global["axios"] = __webpack_require__(/*! ../node_modules/axios/lib/axios.js */ "./node_modules/axios/lib/axios.js");
    if (typeof global["axios"] === "undefined")
        throw new Error("Missing axios in global");
}
if (typeof global["socket.io-client"] === "undefined") {
    global["socket.io-client"] = __webpack_require__(/*! ../node_modules/socket.io-client/dist/socket.io.slim.js */ "./node_modules/socket.io-client/dist/socket.io.slim.js");
    if (typeof global["socket.io-client"] === "undefined")
        throw new Error("Missing socket.io-client in global");
}
var API = /** @class */ (function () {
    function API() {
        throw new Error("Cannot instantiate.");
    }
    ;
    Object.defineProperty(API, "expires", {
        get: function () {
            if (!API._expires && API.LocalStorageSupported)
                API._expires = new Date(localStorage.getItem("expires") || null);
            return API._expires;
        },
        set: function (value) {
            var dateExpires = null;
            if (typeof value === "string" || typeof value === "number")
                dateExpires = new Date(value);
            else if (value instanceof Date)
                dateExpires = value;
            if (dateExpires === null) {
                throw new Error("value for date expires is invalid, expected string, number, or date. Got: " + value);
            }
            else {
                API._expires = dateExpires;
                if (API.LocalStorageSupported)
                    localStorage.setItem("expires", API._expires.toISOString());
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
                if (API.LocalStorageSupported)
                    localStorage.removeItem("token");
                return null;
            }
            if (!API._token && API.LocalStorageSupported)
                // We store it in local storage.
                API._token = JSON.parse(localStorage.getItem("token")) || null;
            if (!API._token && typeof document !== "undefined" && document.cookie)
                // We store it in the cookie.
                API._token = cookie_1.parse(document.cookie)["gig-gizmo-token"];
            if (API._token && API.LocalStorageSupported)
                // We store it in local storage if found.
                localStorage.setItem("token", JSON.stringify(API._token));
            return API._token;
        },
        set: function (value) {
            if (typeof value === "string" && value.length !== 124 && value !== null)
                throw new Error("Token is not valid: " + value);
            else {
                if (typeof value === "string" && value.length != 0) {
                    if (API.LocalStorageSupported)
                        localStorage.setItem("token", JSON.stringify(value));
                    API._token = value;
                }
                else {
                    if (API.LocalStorageSupported)
                        localStorage.removeItem("token");
                    API._token = null;
                }
                if (typeof document !== "undefined")
                    document.cookie = cookie_1.serialize("gig-gizmo-token", API._token, {
                        path: "/",
                        sameSite: "strict"
                    });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(API, "rootURL", {
        get: function () {
            var url = "";
            if (API.secure)
                url += "https://";
            else
                url += "http://";
            url += "" + API.hostname;
            if (API.port != 80 && !API.secure)
                url += ":" + API.port;
            else if (API.securePort != 443 && API.secure)
                url += ":" + API.securePort;
            return url;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(API, "webSocketRootURL", {
        get: function () {
            var url = "";
            if (API.secure)
                url += "wss://";
            else
                url += "ws://";
            url += "" + API.hostname;
            if (API.port != 80 && !API.secure)
                url += ":" + API.port;
            else if (API.securePort != 443 && API.secure)
                url += ":" + API.securePort;
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
                            url: "" + API.rootURL + route,
                            method: method.toLowerCase(),
                            data: null,
                            params: null,
                            responseType: "json",
                            xsrfCookieName: "gig-gizmo-token",
                            xsrfHeaderName: "x-gig-gizmo-token",
                            headers: headers
                        };
                        if (data) {
                            if (method === "HEAD" || method === "GET")
                                fetchRequest.params = data;
                            else
                                fetchRequest.data = data;
                        }
                        return [4 /*yield*/, API.axios(fetchRequest)];
                    case 1:
                        response = _a.sent();
                        if (response.data)
                            return [2 /*return*/, response.data];
                        else if (response.statusText)
                            return [2 /*return*/, response.statusText];
                        else if (response.status)
                            return [2 /*return*/, null];
                        return [2 /*return*/];
                }
            });
        });
    };
    API.getSocket = function () {
        return new Promise(function (resolve, reject) {
            if (API.token) {
                if (API.webSocket)
                    return resolve(API.webSocket);
                API.webSocket = API.WebSocket(API.webSocketRootURL);
                API.webSocket.on("connect", function () { return resolve(API.webSocket); });
                API.webSocket.on("connect_timeout", function () { return reject(new Error("Timeout")); });
                API.webSocket.on("connect_error", function (error) { return reject(error); });
                API.webSocket.on("disconnect", function () { return reject(new Error("Disconnected")); });
                API.webSocket.on("error", function (error) { return reject(error); });
                return null;
            }
            return resolve(null);
        });
    };
    API.WebSocket = global["socket.io-client"];
    API.axios = global["axios"];
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
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Gig_1 = __webpack_require__(/*! ./Gig */ "./src/Gig.ts");
var Upload_1 = __webpack_require__(/*! ./Upload */ "./src/Upload.ts");
var User_1 = __webpack_require__(/*! ./User */ "./src/User.ts");
var TwitterAccount_1 = __webpack_require__(/*! ./TwitterAccount */ "./src/TwitterAccount.ts");
var FacebookAccount_1 = __webpack_require__(/*! ./FacebookAccount */ "./src/FacebookAccount.ts");
var RESTModel_1 = __webpack_require__(/*! ./RESTModel */ "./src/RESTModel.ts");
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
        if (photos.length !== 0)
            return RESTModel_1.default.findManyBase(Upload_1.default, {
                _id: photos
            }, true);
        return Promise.resolve([]);
    };
    Band.prototype.getOwners = function () {
        var owners = Array.from(this.owners);
        if (owners.length !== 0)
            return RESTModel_1.default.findManyBase(User_1.default, {
                _id: owners
            }, true);
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
        if (!_super.prototype.isValid.call(this))
            return false;
        if (typeof this.cityPlaceID !== "string")
            return false;
        if (this.cityPlaceID === "")
            return false;
        if (typeof this.name !== "string")
            return false;
        if (this.name === "")
            return false;
        if (typeof this.description !== "string")
            return false;
        if (this.description === "")
            return false;
        if (this.description === "<p><br></p>")
            return false;
        if (!Array.isArray(this.owners))
            return false;
        if (this.owners.length === 0)
            return false;
        if (!this.owners.every(function (owner) { return self.userIsOwner(owner); }))
            return false;
        return true;
    };
    Band.prototype.userIsOwner = function (user) {
        if (Array.isArray(this.owners)) {
            var userId_1;
            if (typeof user === "string")
                userId_1 = user;
            else if (typeof user === "object" && user)
                userId_1 = user._id;
            return this.owners.find(function (id) { return id === userId_1; }) !== undefined;
        }
        return false;
    };
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
    }
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
    Conversation.prototype.isValid = function () {
        if (!_super.prototype.isValid.call(this))
            return false;
        // TODO: do more tests...
        return true;
    };
    Conversation.prototype.pushMessage = function (user, message) {
        var events = this.events;
        events.push({
            user: user,
            message: message,
            dateTimePosted: new Date()
        });
        this.events = events;
        return this.save();
    };
    // TODO: inviteNewUser(user, newUser, token) {}
    Conversation.newCallback = function (callback) {
        var callbackId = Date.now();
        Conversation.Callbacks.set(callbackId, callback);
        return function () { return Conversation.Callbacks.delete(callbackId); };
    };
    Conversation.connectSocket = function () {
        API_1.default.getSocket().then(function (socket) {
            socket.on("/API/Conversation/Update", function (data) {
                if (data) {
                    var conv_1 = RESTModel_1.default.Cache.get(data._id) || null;
                    if (conv_1)
                        conv_1 = Object.assign(conv_1, data);
                    else
                        conv_1 = new Conversation(data);
                    RESTModel_1.default.Cache.set(conv_1._id, conv_1);
                    Conversation.Callbacks.forEach(function (cb) { return cb(conv_1); });
                }
            });
        }, console.error);
    };
    Conversation.findById = function (id) {
        return RESTModel_1.default.findByIdBase(Conversation, id, true);
    };
    Conversation.getAllOwned = function () {
        return RESTModel_1.default.findManyBase(Conversation, null, true);
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
    }
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
    ErrorReport.prototype.isValid = function () {
        if (!_super.prototype.isValid.call(this))
            return false;
        // TODO: do more tests...
        return true;
    };
    ErrorReport.findById = function (id) {
        return RESTModel_1.default.findByIdBase(ErrorReport, id);
    };
    ErrorReport.findMany = function (criteria) {
        return RESTModel_1.default.findManyBase(ErrorReport, criteria);
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
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var RESTModel_1 = __webpack_require__(/*! ./RESTModel */ "./src/RESTModel.ts");
var User_1 = __webpack_require__(/*! ./User */ "./src/User.ts");
var API_1 = __webpack_require__(/*! ./API */ "./src/API.ts");
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
    FacebookAccount.prototype.getUser = function () {
        return RESTModel_1.default.findManyBase(User_1.default, this.userId, true);
    };
    FacebookAccount.prototype.userIsOwner = function (user) {
        if (typeof user === "string")
            return user === this.userId;
        else if (typeof user === "object" && user)
            return user._id === this.userId;
        return false;
    };
    FacebookAccount.prototype.isValid = function () {
        if (!_super.prototype.isValid.call(this))
            return false;
        if (!this.userId || typeof this.userId !== "string")
            return false;
        if (!this.profile || typeof this.profile !== "object")
            return false;
        if (!this.accountId || typeof this.accountId !== "string")
            return false;
        return true;
    };
    FacebookAccount.findById = function (id) {
        return new Promise(function (resolve, reject) {
            if (typeof id === "string" && id !== "")
                API_1.default.call("GET", "/API/FacebookAccount/" + id, null).then(function (found) {
                    var account = found || null;
                    if (account)
                        resolve(new FacebookAccount(account));
                    else
                        reject(new Error(account + " returned"));
                }, reject);
            else
                resolve(null);
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
                post_format: format,
                post_text: text,
                fb_page_id: pageId,
                publish_time: postDateTime // .getTime() / 1000
            }).then(resolve, reject);
        });
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
    }
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
var Venue_1 = __webpack_require__(/*! ./Venue */ "./src/Venue.ts");
var Location_1 = __webpack_require__(/*! ./Location */ "./src/Location.ts");
var RESTModel_1 = __webpack_require__(/*! ./RESTModel */ "./src/RESTModel.ts");
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
            this.setField("stopTime", value);
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
        if (!_super.prototype.isValid.call(this))
            return false;
        if (!Array.isArray(this.owners))
            return false;
        if (this.owners.length === 0)
            return false;
        return true;
    };
    Gig.prototype.userIsOwner = function (user) {
        if (Array.isArray(this.owners)) {
            var userId_1;
            if (typeof user === "string")
                userId_1 = user;
            else if (typeof user === "object" && user)
                userId_1 = user._id;
            return this.owners.find(function (id) { return id === userId_1; }) !== undefined;
        }
        return false;
    };
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
                        if (data && Array.isArray(data))
                            return [2 /*return*/, data.map(function (itemData) {
                                    var item = new Gig(itemData);
                                    RESTModel_1.default.Cache.set(item._id, item);
                                    return item;
                                })];
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
                        if (data && Array.isArray(data))
                            return [2 /*return*/, data.map(function (itemData) {
                                    var item = new Gig(itemData);
                                    RESTModel_1.default.Cache.set(item._id, item);
                                    return item;
                                })];
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
                if (!data.band || data.band === "")
                    return reject(new Error("Band is required"));
                if (!data.venue || data.venue === "")
                    return reject(new Error("Venue is required"));
                if (!data.times || data.times.length === 0)
                    return reject(new Error("Times is required"));
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
                if (filtered.length !== data.times.length)
                    return reject(new Error("Not all times were valid"));
                data.times = filtered;
                var request = API_1.default.call("POST", "/API/Gig", data);
                return request.then(function (response) {
                    var gigs = Array.from(response || []);
                    gigs = gigs.map(function (itemData) {
                        var gig = new Gig(itemData);
                        return gig;
                    });
                    resolve(gigs);
                }, reject);
            }
            return null;
        });
    };
    Gig.getAllInDistance = function (location, distance) {
        return new Promise(function (resolve, reject) {
            if (typeof location !== "object")
                return reject(new Error("location is not a object!"));
            if (typeof location.lat !== "number" || typeof location.lng !== "number")
                return reject(new Error("location does not contain lat or lng!"));
            if (typeof distance !== "number")
                return reject(new Error("radius is not a number!"));
            return API_1.default.call("GET", "/API/Gig/InDistance", {
                lat: location.lat,
                lng: location.lng,
                dis: distance
            }).then(function (gigs) {
                resolve(Array.from(gigs).map(function (item) {
                    var gig = new Gig(item);
                    return gig;
                }));
            }, reject);
        });
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
    }
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
            if (typeof placeId !== "string")
                return reject(new Error("placeId is not a string!"));
            return API_1.default.call("GET", "/API/GooglePlace", { placeId: placeId }).then(resolve, reject);
        });
    };
    GooglePlace.queryPlace = function (text, maybeType) {
        return new Promise(function (resolve, reject) {
            var type = maybeType || "locality";
            if (typeof text !== "string")
                return reject(new Error("text is not a string!"));
            if (text === "")
                return reject(new Error("text is blank"));
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
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var API_1 = __webpack_require__(/*! ./API */ "./src/API.ts");
var RESTModel_1 = __webpack_require__(/*! ./RESTModel */ "./src/RESTModel.ts");
var GooglePlace_1 = __webpack_require__(/*! ./GooglePlace */ "./src/GooglePlace.ts");
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
    Location.prototype.isValid = function () {
        if (!_super.prototype.isValid.call(this))
            return false;
        if (!this.placeId)
            return false;
        if (!this.address)
            return false;
        if (!this.utcOffset)
            return false;
        if (!Array.isArray(this.point))
            return false;
        return true;
    };
    Location.prototype.getPlaceDetails = function () {
        return GooglePlace_1.default.getPlaceDetails(this.placeId);
    };
    Location.getLocationByPlaceId = function (placeId) {
        return new Promise(function (resolve, reject) {
            if (!placeId) {
                reject(new Error("Invaild placeId: " + placeId));
            }
            else {
                API_1.default.call("GET", "/API/Place/" + placeId, null).then(function (location) {
                    if (location) {
                        resolve(new Location(location));
                    }
                    else {
                        reject(new Error(location + " returned"));
                    }
                }, reject);
            }
        });
    };
    Location.findById = function (id) {
        return RESTModel_1.default.findByIdBase(Location, id);
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
    }
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
    Notification.prototype.newChangeCallback = function (callback) {
        var _this = this;
        var i = Date.now();
        this.changeCallbacks.set(i, callback);
        return function () { return _this.changeCallbacks.delete(i); };
    };
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
        return RESTModel_1.default.findManyBase(Notification, null, true);
    };
    Notification.findById = function (id) {
        return RESTModel_1.default.findByIdBase(Notification, id, true);
    };
    Notification.connectSocket = function () {
        API_1.default.getSocket().then(function (socket) {
            socket.on("notification", function (data) {
                return Notification.onNewNotification(new Notification(data));
            });
        }, console.error);
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
    }
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
    Page.prototype.isValid = function () {
        if (!_super.prototype.isValid.call(this))
            return false;
        if (!this.title)
            return false;
        if (this.title === "")
            return false;
        return true;
    };
    Page.prototype.userIsOwner = function (user) {
        if (typeof user === "string")
            return user === this.admin;
        if (typeof user === "function" && user && user.isValid()) {
            return user._id === this.admin || user.admin;
        }
        return false;
    };
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
    }
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
    Post.prototype.isValid = function () {
        if (!_super.prototype.isValid.call(this))
            return false;
        return true;
    };
    Post.prototype.canSave = function () {
        if (!this.postDate)
            return false;
        if (!this.postText || this.postText === "")
            return false;
        if (!this.network)
            // TODO: Do network validation
            return false;
        return true;
    };
    Post.prototype.userIsOwner = function (user) {
        if (typeof user === "string")
            return user === this.userId;
        if (typeof user === "function" && user && user.isValid())
            return user._id === this.userId;
        return false;
    };
    Post.findById = function (id) {
        return RESTModel_1.default.findByIdBase(Post, id);
    };
    Post.getAllOwned = function () {
        return RESTModel_1.default.findManyBase(Post, null);
    };
    Post.findMany = function (criteria) {
        return RESTModel_1.default.findManyBase(Post, criteria);
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
    dateCreated: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.instanceOf(Date)
    ]).isRequired,
    dateModified: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.instanceOf(Date)
    ]).isRequired,
    name: PropTypes.string.isRequired,
    website: PropTypes.string,
    email: PropTypes.string,
    cityName: PropTypes.string,
    cityPlaceID: PropTypes.string,
    description: PropTypes.string,
    icon: PropTypes.string,
    photos: PropTypes.arrayOf(PropTypes.string),
    owners: PropTypes.arrayOf(PropTypes.string),
    facebook: PropTypes.string,
    twitter: PropTypes.string,
    google: PropTypes.string,
    metadata: PropTypes.string,
    facebookPageId: PropTypes.string,
    facebookPageName: PropTypes.string,
    facebookPageToken: PropTypes.string
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
    users: PropTypes.arrayOf(PropTypes.string.isRequired),
    events: PropTypes.arrayOf(PropTypes.shape({
        user: PropTypes.string.isRequired,
        message: PropTypes.string.isRequired,
        dateTimePosted: PropTypes.string.isRequired
    }))
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
    dateCreated: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.instanceOf(Date)
    ]).isRequired,
    dateModified: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.instanceOf(Date)
    ]).isRequired,
    userId: PropTypes.string.isRequired,
    version: PropTypes.string.isRequired,
    stack: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    fileName: PropTypes.string,
    columnNumber: PropTypes.number,
    lineNumber: PropTypes.number
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
    dateCreated: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.instanceOf(Date)
    ]).isRequired,
    dateModified: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.instanceOf(Date)
    ]).isRequired,
    userId: PropTypes.string.isRequired,
    accountId: PropTypes.string.isRequired,
    userAccessToken: PropTypes.string,
    userRefreshToken: PropTypes.string,
    profile: PropTypes.any
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
    dateCreated: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.instanceOf(Date)
    ]).isRequired,
    dateModified: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.instanceOf(Date)
    ]).isRequired,
    startTime: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.instanceOf(Date)
    ]).isRequired,
    stopTime: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.instanceOf(Date)
    ]).isRequired,
    location: PropTypes.string.isRequired,
    venue: PropTypes.string.isRequired,
    bands: PropTypes.arrayOf(PropTypes.string).isRequired,
    toBeAnnounced: PropTypes.bool,
    bandOwnerAccepted: PropTypes.string,
    venueOwnerAccepted: PropTypes.string,
    owners: PropTypes.arrayOf(PropTypes.string)
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
    dateCreated: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.instanceOf(Date)
    ]).isRequired,
    dateModified: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.instanceOf(Date)
    ]).isRequired,
    placeId: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    point: PropTypes.arrayOf(PropTypes.number).isRequired,
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
    dateCreated: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.instanceOf(Date)
    ]).isRequired,
    dateModified: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.instanceOf(Date)
    ]).isRequired,
    userId: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    actions: PropTypes.arrayOf(PropTypes.shape({
        request: PropTypes.string,
        link: PropTypes.string,
        label: PropTypes.string.isRequired
    })),
    seenByUser: PropTypes.bool
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
    dateCreated: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.instanceOf(Date)
    ]).isRequired,
    dateModified: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.instanceOf(Date)
    ]).isRequired,
    data: PropTypes.string,
    metadata: PropTypes.string,
    title: PropTypes.string,
    link: PropTypes.string,
    visits: PropTypes.number,
    revisions: PropTypes.number,
    hide: PropTypes.bool,
    blog: PropTypes.bool,
    doc: PropTypes.bool
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
    dateCreated: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.instanceOf(Date)
    ]).isRequired,
    dateModified: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.instanceOf(Date)
    ]).isRequired,
    userId: PropTypes.string.isRequired,
    network: PropTypes.string.isRequired,
    accountId: PropTypes.string.isRequired,
    pageId: PropTypes.string.isRequired,
    postText: PropTypes.string.isRequired,
    postDate: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.instanceOf(Date)
    ]).isRequired,
    coordinates: PropTypes.arrayOf(PropTypes.number),
    error: PropTypes.any,
    done: PropTypes.bool.isRequired
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
    dateCreated: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.instanceOf(Date)
    ]).isRequired,
    dateModified: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.instanceOf(Date)
    ]).isRequired,
    userId: PropTypes.string.isRequired,
    accountId: PropTypes.string.isRequired,
    accessToken: PropTypes.string,
    tokenSecret: PropTypes.string,
    profile: PropTypes.any
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
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    fileName: PropTypes.string.isRequired,
    fileData: PropTypes.string.isRequired,
    owners: PropTypes.arrayOf(PropTypes.string).isRequired
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
    dateCreated: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.instanceOf(Date)
    ]).isRequired,
    dateModified: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.instanceOf(Date)
    ]).isRequired,
    icon: PropTypes.string,
    email: PropTypes.string,
    firstName: PropTypes.string.isRequired,
    middleName: PropTypes.string,
    lastName: PropTypes.string.isRequired,
    birthday: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.instanceOf(Date)
    ]).isRequired,
    country: PropTypes.string.isRequired,
    bandManager: PropTypes.bool,
    venueManager: PropTypes.bool,
    betaFeatureUser: PropTypes.bool,
    sendAnonymousReports: PropTypes.bool,
    sendErrorReports: PropTypes.bool,
    sendEmails: PropTypes.bool,
    sendPromotions: PropTypes.bool,
    useCookies: PropTypes.bool,
    description: PropTypes.string,
    active: PropTypes.bool,
    paypal: PropTypes.string,
    facebook: PropTypes.string,
    twitter: PropTypes.string,
    emailVerified: PropTypes.bool,
    payment: PropTypes.string,
    admin: PropTypes.bool,
    attempts: PropTypes.number,
    lastLogin: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.instanceOf(Date)
    ]).isRequired,
    lastLoginIP: PropTypes.string.isRequired
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
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    website: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string,
    location: PropTypes.string.isRequired,
    openCloseTimes: PropTypes.arrayOf(PropTypes.shape({
        open: PropTypes.bool,
        openingTime: PropTypes.string,
        closingTime: PropTypes.string
    })),
    icon: PropTypes.string,
    photos: PropTypes.arrayOf(PropTypes.string),
    owners: PropTypes.arrayOf(PropTypes.string),
    facebook: PropTypes.string,
    twitter: PropTypes.string,
    google: PropTypes.string,
    metaData: PropTypes.string,
    facebookPageId: PropTypes.string,
    facebookPageName: PropTypes.string,
    facebookPageToken: PropTypes.string
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
var ModelNameToModel_1 = __webpack_require__(/*! ./ModelNameToModel */ "./src/ModelNameToModel.ts");
var API_1 = __webpack_require__(/*! ./API */ "./src/API.ts");
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
                if (data !== null && typeof data.ModelName !== "undefined")
                    delete data.ModelName;
                Object.assign(this.document, data);
            }
            catch (e) {
                console.log(dataMaybe);
                console.error(e);
            }
        }
        else if (dataMaybe) {
            if (typeof dataMaybe.document === "object" && dataMaybe.document)
                Object.assign(this.document, dataMaybe.document);
            if (typeof dataMaybe.changes === "object" && dataMaybe.changes)
                Object.assign(this.changes, dataMaybe.changes);
            else
                Object.assign(this.document, dataMaybe);
        }
    }
    RESTModel.deduceModelAndName = function (ModelMaybe) {
        return __awaiter(this, void 0, void 0, function () {
            var Model, modelName;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (ModelMaybe === null)
                            throw new Error("Model Name or Model Missing");
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
            if (typeof data !== "undefined")
                return data;
            data = this.document[name];
            if (typeof data !== "undefined")
                return data;
        }
        return null;
    };
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
    RESTModel.prototype.toObject = function () {
        var object = this.valid() ?
            Object.assign({}, this.changes, this.document) : null;
        if (typeof object === "object" && object) {
            if (typeof object.id !== "undefined")
                delete object.id;
            if (typeof object._id !== "undefined")
                object._id = (object._id.toString() ? object._id : null);
        }
        return object;
    };
    RESTModel.prototype.toString = function () {
        var object = this.toObject();
        return JSON.stringify(object);
    };
    RESTModel.prototype.valid = function () {
        if (!RESTModel.isValidId(this.id))
            throw new Error("Invalid id: " + this.id);
        if (!this.dateModified || Date.parse(this.dateModified) === NaN)
            throw new Error("Invalid dateModified: " + this.dateModified);
        if (!this.dateCreated || Date.parse(this.dateCreated) === NaN)
            throw new Error("Invalid dateCreated: " + this.dateCreated);
        return true;
    };
    RESTModel.prototype.isValid = function () {
        if (!RESTModel.isValidId(this.id))
            return false;
        if (!this.dateModified || Date.parse(this.dateModified) === NaN)
            return false;
        if (!this.dateCreated || Date.parse(this.dateCreated) === NaN)
            return false;
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
                            if (data[key] === _this.document[key])
                                delete data[key];
                        });
                        data.id = this.changes._id || this.document._id || null;
                        if (!(API_1.default.useSocketIO && API_1.default.ShouldUseSocketIO && hasWebSocket)) return [3 /*break*/, 5];
                        if (!RESTModel.isValidId(id)) return [3 /*break*/, 2];
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                return API_1.default.getSocket().then(function (socket) {
                                    return socket.emit("/API/" + modelName + "/Update", data, resolve);
                                }, reject);
                            })];
                    case 1:
                        response = _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, new Promise(function (resolve, reject) {
                            return API_1.default.getSocket().then(function (socket) {
                                return socket.emit("/API/" + modelName + "/Create", data, resolve);
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
            var id, response, modelName_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = this._id || null;
                        if (!RESTModel.isValidId(id)) return [3 /*break*/, 5];
                        response = null;
                        modelName_1 = this.constructor.ModelName;
                        if (!(API_1.default.useSocketIO && API_1.default.ShouldUseSocketIO && hasWebSocket)) return [3 /*break*/, 2];
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                return API_1.default.getSocket().then(function (socket) {
                                    return socket.emit("/API/" + modelName_1 + "/Delete", id, function (res) {
                                        return resolve(res);
                                    });
                                }, reject);
                            })];
                    case 1:
                        response = _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, API_1.default.call("DELETE", "/API/" + modelName_1 + "/" + id, null)];
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
    RESTModel.isValidId = function (id) {
        var pattern = RegExp("^([0-9a-fA-F]{24}|[0-9a-fA-F]{12})$", "g");
        return (typeof id === "string" && pattern.test(id));
    };
    RESTModel.getModelName = function (Model) {
        if (Model == null)
            return null;
        if (Model.ModelName)
            return Model.ModelName;
        if (Model.constructor && Model.constructor.ModelName)
            return Model.constructor.ModelName;
    };
    RESTModel.findByIdBase = function (ModelMaybe, id, hasWebSocket) {
        if (hasWebSocket === void 0) { hasWebSocket = false; }
        return __awaiter(this, void 0, void 0, function () {
            var cache, data, _a, Model, modelName_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!RESTModel.isValidId(id)) return [3 /*break*/, 6];
                        if (RESTModel.Cache.has(id)) {
                            cache = RESTModel.Cache.get(id);
                            if (cache && new Date(cache.expiration) < new Date())
                                return [2 /*return*/, cache];
                        }
                        data = null;
                        return [4 /*yield*/, RESTModel.deduceModelAndName(ModelMaybe)];
                    case 1:
                        _a = _b.sent(), Model = _a.Model, modelName_2 = _a.modelName;
                        if (!(API_1.default.useSocketIO && API_1.default.ShouldUseSocketIO && hasWebSocket)) return [3 /*break*/, 3];
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                return API_1.default.getSocket().then(function (socket) {
                                    return socket.emit("/API/" + modelName_2 + "/Retreive", id, resolve);
                                }, reject);
                            })];
                    case 2:
                        data = _b.sent();
                        _b.label = 3;
                    case 3:
                        if (!!data) return [3 /*break*/, 5];
                        return [4 /*yield*/, API_1.default.call("GET", "/API/" + modelName_2 + "/" + id, null)];
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
                        if (criteria === null)
                            criteria = {};
                        if (Array.from(Object.keys(criteria)).length === 1 && typeof criteria._id === "string") {
                            id = criteria._id;
                            if (RESTModel.Cache.has(id)) {
                                cache = RESTModel.Cache.get(id);
                                if (cache && new Date(cache.expiration) < new Date())
                                    return [2 /*return*/, cache];
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
                        if (criteria === null)
                            criteria = {};
                        if (Array.from(Object.keys(criteria)).length === 1 && Array.isArray((criteria._id || criteria.id))) {
                            items_1 = [];
                            (criteria._id || criteria.id).forEach(function (id) {
                                if (typeof id === "string" && RESTModel.Cache.has(id)) {
                                    var cache = RESTModel.Cache.get(id);
                                    if (cache && new Date(cache.expiration) < new Date())
                                        items_1.push(cache);
                                }
                            });
                            if (items_1.length === (criteria._id || criteria.id))
                                return [2 /*return*/, items_1];
                        }
                        data = null;
                        return [4 /*yield*/, RESTModel.deduceModelAndName(ModelMaybe)];
                    case 1:
                        _a = _b.sent(), Model = _a.Model, modelName = _a.modelName;
                        route = "/API/" + modelName + "/FindMany";
                        if (!(API_1.default.useSocketIO && API_1.default.ShouldUseSocketIO && hasWebSocket)) return [3 /*break*/, 3];
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                return API_1.default.getSocket().then(function (socket) {
                                    return socket.emit(route, criteria, resolve);
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
                        if (Array.isArray(data))
                            return [2 /*return*/, data.map(function (itemData) {
                                    var item = new Model(itemData);
                                    RESTModel.Cache.set(item._id, item);
                                    return item;
                                })];
                        return [2 /*return*/, []];
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
    }
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
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var RESTModel_1 = __webpack_require__(/*! ./RESTModel */ "./src/RESTModel.ts");
var User_1 = __webpack_require__(/*! ./User */ "./src/User.ts");
var API_1 = __webpack_require__(/*! ./API */ "./src/API.ts");
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
    TwitterAccount.prototype.getUser = function () {
        return RESTModel_1.default.findByIdBase(User_1.default, this.userId, true);
    };
    TwitterAccount.prototype.userIsOwner = function (user) {
        if (typeof user === "string")
            return user === this.userId;
        if (typeof user === "function")
            return user._id === this.userId;
        return false;
    };
    TwitterAccount.prototype.goToTwitterAccount = function () {
        if (typeof window !== "undefined") {
            // We are on a browser
            window.location.href = "https://twitter.com?profile_id=" + this.accountId;
        }
    };
    TwitterAccount.prototype.isValid = function () {
        if (!_super.prototype.isValid.call(this))
            return false;
        if (!this.userId || typeof this.userId !== "string")
            return false;
        if (!this.profile || typeof this.profile !== "object")
            return false;
        return true;
    };
    TwitterAccount.findById = function (id) {
        return new Promise(function (resolve, reject) {
            if (typeof id === "string" && id !== "")
                API_1.default.call("GET", "/API/TwitterAccount/" + id, null).then(function (response) {
                    var account = response || null;
                    if (account)
                        resolve(new TwitterAccount(account));
                    else
                        reject(new Error(account + " returned"));
                }, reject);
            else
                resolve(null);
        });
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
    }
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
    Upload.prototype.getOwners = function () {
        var owners = Array.from(this.owners);
        if (owners.length !== 0)
            return RESTModel_1.default.findManyBase(User_1.default, {
                _id: owners
            }, true);
        return Promise.resolve([]);
    };
    Upload.prototype.userIsOwner = function (user) {
        if (Array.isArray(this.owners)) {
            var userId_1;
            if (typeof user === "string")
                userId_1 = user;
            else if (typeof user === "object" && user)
                userId_1 = user._id;
            return this.owners.find(function (id) { return id === userId_1; }) !== undefined;
        }
        return false;
    };
    Upload.prototype.isValid = function () {
        if (!_super.prototype.isValid.call(this))
            return false;
        if (!this.title)
            return false;
        if (!this.description)
            return false;
        if (!this.fileData)
            return false;
        if (!this.fileName)
            return false;
        if (!Array.isArray(this.owners))
            return false;
        if (this.owners.length === 0)
            return false;
        return true;
    };
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
    }
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
var Venue_1 = __webpack_require__(/*! ./Venue */ "./src/Venue.ts");
var Page_1 = __webpack_require__(/*! ./Page */ "./src/Page.ts");
var Upload_1 = __webpack_require__(/*! ./Upload */ "./src/Upload.ts");
var Location_1 = __webpack_require__(/*! ./Location */ "./src/Location.ts");
var Gig_1 = __webpack_require__(/*! ./Gig */ "./src/Gig.ts");
var FacebookAccount_1 = __webpack_require__(/*! ./FacebookAccount */ "./src/FacebookAccount.ts");
var TwitterAccount_1 = __webpack_require__(/*! ./TwitterAccount */ "./src/TwitterAccount.ts");
var Conversation_1 = __webpack_require__(/*! ./Conversation */ "./src/Conversation.ts");
var Post_1 = __webpack_require__(/*! ./Post */ "./src/Post.ts");
var RESTModel_1 = __webpack_require__(/*! ./RESTModel */ "./src/RESTModel.ts");
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
        if (!_super.prototype.isValid.call(this))
            return false;
        // Type checks
        if (typeof this.firstName !== "string")
            return false;
        if (typeof this.lastName !== "string")
            return false;
        if (typeof this.email !== "string")
            return false;
        // Value checks
        if (this.firstName === "")
            return false;
        if (this.lastName === "")
            return false;
        if (this.email === "")
            return false;
        // TODO: More validation checks?
        return true;
    };
    User.prototype.valid = function () {
        _super.prototype.valid.call(this);
        // Type checks
        if (typeof this.firstName !== "string")
            throw new Error("Invalid firstName: " + this.firstName);
        if (typeof this.lastName !== "string")
            throw new Error("Invalid lastName: " + this.lastName);
        // Value checks
        if (this.firstName === "")
            throw new Error("Blank firstName");
        if (this.lastName === "")
            throw new Error("Blank lastName");
        // TODO: More validation checks?
        return true;
    };
    User.prototype.save = function () {
        return RESTModel_1.default.prototype.save.call(this, true);
    };
    User.prototype.remove = function () {
        return RESTModel_1.default.prototype.remove.call(this, true);
    };
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
        return RESTModel_1.default.findManyBase(Notification, null, true);
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
                    model: undefined,
                    q: undefined,
                    skip: undefined,
                    limit: undefined
                };
                data_1.q = q;
                if (modelName !== null && modelName !== "Any")
                    data_1.model = modelName;
                if (Number.isFinite(Number(skip)))
                    data_1.skip = Number(skip);
                if (Number.isFinite(Number(limit)))
                    data_1.limit = Number(limit);
                var Return_1 = function (results) {
                    var query = results.query;
                    var totalFound = results.totalFound;
                    if (!query)
                        reject(query);
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
                                if (mName === "Band")
                                    bands.push(new Band_1.default(item));
                                else if (mName === "Venue")
                                    venues.push(new Venue_1.default(item));
                                else if (mName === "User")
                                    users.push(new User(item));
                                else if (mName === "Page")
                                    pages.push(new Page_1.default(item));
                                else if (mName === "Location")
                                    locations.push(new Location_1.default(item));
                                else if (mName === "Upload")
                                    uploads.push(new Upload_1.default(item));
                            }
                            return [2 /*return*/];
                        });
                    }); });
                    var sorted = {
                        totalFound: totalFound,
                        bands: bands,
                        venues: venues,
                        users: users,
                        pages: pages,
                        locations: locations,
                        uploads: uploads
                    };
                    resolve(sorted);
                };
                if (API_1.default.useSocketIO && API_1.default.ShouldUseSocketIO) {
                    API_1.default.getSocket().then(function (socket) {
                        socket.emit("/API/TextSearch", data_1, Return_1);
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
                        if (API_1.default.SessionStorageSupported)
                            sessionStorage.setItem("user", JSON.stringify(data));
                        User.Callbacks.forEach(function (callback) { return callback(User.Current); });
                    }
                    else {
                        User.Current = null;
                        API_1.default.token = null;
                        if (API_1.default.SessionStorageSupported)
                            sessionStorage.removeItem("user");
                        if (typeof document !== "undefined")
                            document.cookie = "";
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
                            if (User.Current !== null)
                                /* If we already have the current user cached, return it... */
                                return [2 /*return*/, User.Current];
                            else if (API_1.default.SessionStorageSupported) {
                                /* If the user is stored in session storage. */
                                data = JSON.parse(sessionStorage.getItem("user"));
                                if (data)
                                    return [2 /*return*/, User.setUser(data)];
                            }
                        }
                        if (!(API_1.default.useSocketIO && API_1.default.ShouldUseSocketIO)) return [3 /*break*/, 2];
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                API_1.default.getSocket().then(function (socket) {
                                    socket.emit("/API/User/Retreive", null, resolve);
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
                        if (data)
                            return [2 /*return*/, User.setUser(data)];
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
        return new Promise(function (resolve, reject) {
            function onError(error) {
                User.setUser(null).then(function () {
                    reject(error);
                });
            }
            if (!email)
                onError(new Error("No email"));
            else if (!password)
                onError(new Error("No password"));
            else {
                API_1.default.call("POST", "/API/User/SignIn", {
                    email: email,
                    password: password
                }).then(function (response) {
                    //TODO: Create error for unauthorized access vs general error
                    if (response && response.user && response.token) {
                        API_1.default.expires = response.expires;
                        API_1.default.token = response.token.toString();
                        User.setUser(response.user).then(resolve, onError);
                    }
                    else
                        onError(new Error("Unauthorized"));
                }, onError);
            }
        });
    };
    User.userLogOut = function () {
        return new Promise(function (resolve, reject) {
            API_1.default.call("POST", "/API/User/SignOut", null).then(function () {
                User.setUser(null).then(function (user) {
                    if (user && user.valid())
                        reject(new Error(JSON.stringify(user) + " returned, failed to log out?"));
                    else
                        resolve(user);
                });
            }, reject);
        });
    };
    User.sendPasswordResetEmail = function (email) {
        return API_1.default.call("POST", "/User/Reset", { email: email });
    };
    User.registerUser = function (userData) {
        return new Promise(function (resolve, reject) {
            if (userData && typeof userData === "object") {
                if (userData.email) {
                    var re = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
                    if (re[Symbol.search](userData.email) !== 0)
                        return reject(new Error("Invalid email address"));
                }
                else
                    return reject(new Error("Email is required"));
                if (userData.password) {
                    var symbolTest = /[^a-zA-Z0-9]/gu;
                    var numberTest = /[0-9]/g;
                    var lowercasePassword = userData.password.toLowerCase();
                    if (userData.password === "")
                        return reject(new Error("Password is required"));
                    else if (userData.password.length < 8)
                        return reject(new Error("Password is too short"));
                    else if (userData.password.length > 256)
                        return reject(new Error("Password is too long"));
                    else if (!symbolTest.test(userData.password))
                        return reject(new Error("Password does not contain at least one symbol"));
                    else if (!numberTest.test(userData.password))
                        return reject(new Error("Password does not contain at least one number"));
                    else if (userData.firstName &&
                        userData.firstName.length !== 0 &&
                        lowercasePassword.indexOf(userData.firstName.toLowerCase()) !== -1)
                        return reject(new Error("Password can not contain your first name"));
                    else if (userData.lastName &&
                        userData.lastName.length !== 0 &&
                        lowercasePassword.indexOf(userData.lastName.toLowerCase()) !== -1)
                        return reject(new Error("Password can not contain your last name"));
                }
                else
                    return reject(new Error("Password is required"));
                if (userData.firstName) {
                    if (userData.firstName.length !== 0) {
                        if (userData.firstName[0] === userData.firstName[0].toLowerCase())
                            return reject(new Error("First name is not title case"));
                    }
                    else
                        return reject(new Error("First name is required"));
                }
                else
                    return reject(new Error("First name is required"));
                if (userData.lastName) {
                    if (userData.lastName.length !== 0) {
                        if (userData.lastName[0] === userData.lastName[0].toLowerCase())
                            return reject(new Error("Last name is not title case"));
                    }
                    else
                        return reject(new Error("Last name is required"));
                }
                else
                    return reject(new Error("Last name is required"));
            }
            else
                return reject(new Error("User data is not an object"));
            if (API_1.default.useSocketIO && API_1.default.ShouldUseSocketIO) {
                return new Promise(function (resolve, reject) {
                    API_1.default.getSocket().then(function (socket) {
                        socket.emit("/API/User/Create", userData, resolve);
                    }, reject);
                });
            }
            return API_1.default.call("POST", "/API/User", userData).then(function (data) {
                if (data)
                    User.setUser(data).then(function (user) {
                        resolve(user);
                    }, reject);
                else
                    reject(new Error(JSON.stringify(data) + " returned"));
            }, reject);
        });
    };
    User.NotifyAdminsOfError = function () {
        console.error("Not implemented yet.");
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
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Gig_1 = __webpack_require__(/*! ./Gig */ "./src/Gig.ts");
var User_1 = __webpack_require__(/*! ./User */ "./src/User.ts");
var Upload_1 = __webpack_require__(/*! ./Upload */ "./src/Upload.ts");
var Location_1 = __webpack_require__(/*! ./Location */ "./src/Location.ts");
var TwitterAccount_1 = __webpack_require__(/*! ./TwitterAccount */ "./src/TwitterAccount.ts");
var FacebookAccount_1 = __webpack_require__(/*! ./FacebookAccount */ "./src/FacebookAccount.ts");
var RESTModel_1 = __webpack_require__(/*! ./RESTModel */ "./src/RESTModel.ts");
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
        if (photos.length !== 0)
            return RESTModel_1.default.findManyBase(Upload_1.default, {
                _id: photos
            }, true);
        return Promise.resolve([]);
    };
    Venue.prototype.getOwners = function () {
        var owners = Array.from(this.owners);
        if (owners.length !== 0)
            return RESTModel_1.default.findManyBase(User_1.default, {
                _id: owners
            }, true);
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
        if (!_super.prototype.isValid.call(this))
            return false;
        if (!RESTModel_1.default.isValidId(this.location))
            return false;
        if (this.location === "")
            return false;
        if (typeof this.name !== "string")
            return false;
        if (this.name === "")
            return false;
        if (typeof this.description !== "string")
            return false;
        if (this.description === "")
            return false;
        if (this.description === "<p><br></p>")
            return false;
        if (!Array.isArray(this.owners))
            return false;
        if (this.owners.length === 0)
            return false;
        if (!this.owners.every(function (owner) { return self.userIsOwner(owner); }))
            return false;
        return true;
    };
    // TODO: Create isOpen method
    Venue.prototype.userIsOwner = function (user) {
        if (Array.isArray(this.owners)) {
            var userId_1;
            if (typeof user === "string")
                userId_1 = user;
            else if (typeof user === "object" && user)
                userId_1 = user._id;
            return this.owners.find(function (id) { return id === userId_1; }) !== undefined;
        }
        return false;
    };
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
    Venue.ModelName = "Venue";
    return Venue;
}(RESTModel_1.default));
exports.default = Venue;


/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("assert");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("https");

/***/ }),

/***/ "socket.io-client":
/*!***********************************!*\
  !*** external "socket.io-client" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["socket.io-client"]; }());

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("stream");

/***/ }),

/***/ "tty":
/*!**********************!*\
  !*** external "tty" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("tty");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("zlib");

/***/ })

/******/ })));
//# sourceMappingURL=index.js.map