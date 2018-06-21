"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.securePort = exports.port = exports.secure = exports.version = exports.dev = void 0;

var _iterator = _interopRequireDefault(require("@babel/runtime/core-js/symbol/iterator"));

var _symbol = _interopRequireDefault(require("@babel/runtime/core-js/symbol"));

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

function _typeof(obj) { if (typeof _symbol.default === "function" && typeof _iterator.default === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof _symbol.default === "function" && obj.constructor === _symbol.default && obj !== _symbol.default.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; (0, _defineProperty2.default)(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
  function API() {
    _classCallCheck(this, API);
  }

  _createClass(API, null, [{
    key: "findToken",
    // NOTE: Switch to localhost if testing Facebook... or 127.0.0.1 for Twitter.
    value: function findToken() {
      var token = API.token || null;
      if (!token && API.LocalStorageSupported) // We store it in session storage.
        token = localStorage.getItem("token") || null;
      if (!token && typeof document !== "undefined" && document.cookie) // We store it in the cookie.
        token = (0, _cookieParser.default)(document.cookie)["gig-gizmo-token"];
      if (token && API.LocalStorageSupported) localStorage.setItem("token", token);
      return token;
    }
  }, {
    key: "Call",
    value: function Call(method, callRoute, callData) {
      var route = callRoute || "";
      var data = callData || {};
      return new _promise.default(function (resolve, reject) {
        var token = data && data.token ? data.token : false;
        if (typeof token !== "undefined" && data) delete data.token;
        token = token || API.findToken();
        var fetchRequest = {
          headers: {
            "gig-gizmo-token": token
          },
          url: "".concat(API.root).concat(route),
          method: method.toLowerCase(),
          data: null,
          withCredentials: true,
          responseType: "json"
        };

        if (data) {
          if (method === "HEAD" || method === "GET") fetchRequest.params = data;else fetchRequest.data = data;
        }

        (0, _axios.default)(fetchRequest).then(function (response) {
          if (response.data) resolve(response.data);else if (response.statusText) resolve(response.statusText);else if (response.status) resolve(null);
        }, function (error) {
          if (error.response) {
            var msg = error.response.data;
            if (typeof msg === "string") reject(new Error(msg));else if (_typeof(msg) === "object" && msg) {
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
        });
      });
    }
  }, {
    key: "GetSocket",
    value: function () {
      var _GetSocket = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee() {
        var token,
            _args = arguments;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                token = _args.length > 0 && _args[0] !== undefined ? _args[0] : API.findToken();
                return _context.abrupt("return", new _promise.default(function (resolve, reject) {
                  if (token) {
                    if (API.webSocket) return resolve(API.webSocket);
                    API.webSocket = (0, _socket.default)(API.root);
                    API.webSocket.on("connect", function () {
                      return resolve(API.webSocket);
                    });
                    API.webSocket.on("connect_timeout", function () {
                      return reject(new Error("Timeout"));
                    });
                    API.webSocket.on("connect_error", function (error) {
                      return reject(error);
                    });
                    API.webSocket.on("disconnect", function () {
                      return reject(new Error("Disconnected"));
                    });
                    API.webSocket.on("error", function (error) {
                      return reject(error);
                    });
                    return null;
                  }

                  return resolve(null);
                }));

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function GetSocket() {
        return _GetSocket.apply(this, arguments);
      };
    }()
  }]);

  return API;
}();

exports.default = API;

_defineProperty(API, "hostname", dev ? "127.0.0.1:".concat(secure ? securePort : port) : "giggizmo.com");

_defineProperty(API, "root", "http".concat(secure ? "s" : "", "://").concat(API.hostname));

_defineProperty(API, "websocketRoot", "ws://".concat(API.hostname));

_defineProperty(API, "webSocket", null);

_defineProperty(API, "token", API.findToken());

_defineProperty(API, "SessionStorageSupported", typeof Storage !== "undefined");

_defineProperty(API, "LocalStorageSupported", typeof window !== "undefined" && typeof window.localStorage !== "undefined");

_defineProperty(API, "ShouldUseSocketIO", process && !process.title.includes("node"));

_defineProperty(API, "UseSocketIO", false);