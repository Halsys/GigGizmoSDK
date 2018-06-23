"use strict";

exports.__esModule = true;
exports.default = exports.securePort = exports.port = exports.secure = exports.version = exports.dev = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/core-js/object/define-property"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _stringify = _interopRequireDefault(require("@babel/runtime/core-js/json/stringify"));

var _assign = _interopRequireDefault(require("@babel/runtime/core-js/object/assign"));

var _promise = _interopRequireDefault(require("@babel/runtime/core-js/promise"));

var _axios = _interopRequireDefault(require("axios"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _socket = _interopRequireDefault(require("socket.io-client"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new _promise.default(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { _promise.default.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { (0, _defineProperty2.default)(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var dev = typeof process.env.NODE_ENV !== "undefined" ? process.env.NODE_ENV === "development" : false;
exports.dev = dev;
var version = typeof process.env.npm_package_version !== "undefined" ? process.env.npm_package_version : null;
exports.version = version;
var secure = !dev;
exports.secure = secure;
var port = dev ? 58000 : 80;
exports.port = port;
var securePort = dev ? 54430 : 443;
exports.securePort = securePort;

var API =
/*#__PURE__*/
function () {
  function API() {}

  // NOTE: Switch to localhost if testing Facebook... or 127.0.0.1 for Twitter.
  API.findToken = function findToken() {
    var token = API.token || null;
    if (!token && API.LocalStorageSupported) // We store it in session storage.
      token = localStorage.getItem("token") || null;
    if (!token && typeof document !== "undefined" && document.cookie) // We store it in the cookie.
      token = (0, _cookieParser.default)(document.cookie)["gig-gizmo-token"];
    if (token && API.LocalStorageSupported) localStorage.setItem("token", token);
    return token;
  };

  API.Call = function Call(method, callRoute, callData) {
    var _this = this;

    var route = callRoute || "";
    var data = callData || {};
    return new _promise.default(function (resolve, reject) {
      var _this2 = this;

      _newArrowCheck(this, _this);

      var token = data && data.token ? data.token : false;
      if (typeof token !== "undefined" && data) delete data.token;
      token = token || API.findToken();
      var fetchRequest = {
        headers: {
          "gig-gizmo-token": token
        },
        url: "" + API.root + route,
        method: method.toLowerCase(),
        data: null,
        withCredentials: true,
        responseType: "json"
      };

      if (data) {
        if (method === "HEAD" || method === "GET") fetchRequest.params = data;else fetchRequest.data = data;
      }

      (0, _axios.default)(fetchRequest).then(function (response) {
        _newArrowCheck(this, _this2);

        if (response.data) resolve(response.data);else if (response.statusText) resolve(response.statusText);else if (response.status) resolve(null);
      }.bind(this), function (error) {
        _newArrowCheck(this, _this2);

        if (error.response) {
          var msg = error.response.data;
          if (typeof msg === "string") reject(new Error(msg));else if (typeof msg === "object" && msg) {
            var errorObject = new Error();
            (0, _assign.default)(errorObject, {
              name: error.name,
              stack: error.stack,
              message: error.message,
              lineNumber: error.lineNumber,
              columnNumber: error.columnNumber,
              fileName: error.fileName
            });
            reject(errorObject);
          }
        } else if (error.request) {
          var x = error.request;
          if (x.response === null) reject(new Error("No response"));
          reject(new Error((0, _stringify.default)({
            readyState: x.readyState,
            response: x.response,
            status: x.status,
            statusText: x.statusText
          })));
        } else reject(error);
      }.bind(this));
    }.bind(this));
  };

  API.GetSocket =
  /*#__PURE__*/
  function () {
    var _GetSocket = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee(token) {
      var _this3 = this;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (token === void 0) {
                token = API.findToken();
              }

              return _context.abrupt("return", new _promise.default(function (resolve, reject) {
                var _this4 = this;

                _newArrowCheck(this, _this3);

                if (token) {
                  if (API.webSocket) return resolve(API.webSocket);
                  API.webSocket = (0, _socket.default)(API.root);
                  API.webSocket.on("connect", function () {
                    _newArrowCheck(this, _this4);

                    return resolve(API.webSocket);
                  }.bind(this));
                  API.webSocket.on("connect_timeout", function () {
                    _newArrowCheck(this, _this4);

                    return reject(new Error("Timeout"));
                  }.bind(this));
                  API.webSocket.on("connect_error", function (error) {
                    _newArrowCheck(this, _this4);

                    return reject(error);
                  }.bind(this));
                  API.webSocket.on("disconnect", function () {
                    _newArrowCheck(this, _this4);

                    return reject(new Error("Disconnected"));
                  }.bind(this));
                  API.webSocket.on("error", function (error) {
                    _newArrowCheck(this, _this4);

                    return reject(error);
                  }.bind(this));
                  return null;
                }

                return resolve(null);
              }.bind(this)));

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function GetSocket(_x) {
      return _GetSocket.apply(this, arguments);
    };
  }();

  return API;
}();

exports.default = API;

_defineProperty(API, "hostname", dev ? "127.0.0.1:" + (secure ? securePort : port) : "giggizmo.com");

_defineProperty(API, "root", "http" + (secure ? "s" : "") + "://" + API.hostname);

_defineProperty(API, "websocketRoot", "ws://" + API.hostname);

_defineProperty(API, "webSocket", null);

_defineProperty(API, "token", API.findToken());

_defineProperty(API, "SessionStorageSupported", typeof Storage !== "undefined");

_defineProperty(API, "LocalStorageSupported", typeof window !== "undefined" && typeof window.localStorage !== "undefined");

_defineProperty(API, "ShouldUseSocketIO", process && !process.title.includes("node"));

_defineProperty(API, "UseSocketIO", false);