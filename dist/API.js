"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.securePort = exports.port = exports.secure = exports.version = exports.dev = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _axios = _interopRequireDefault(require("axios"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _socket = _interopRequireDefault(require("socket.io-client"));

/**
 * Created by corynull on 6/19/17.
 */
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
    (0, _classCallCheck2.default)(this, API);
  }

  (0, _createClass2.default)(API, null, [{
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
      return new Promise(function (resolve, reject) {
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
            if (typeof msg === "string") reject(new Error(msg));else if ((0, _typeof2.default)(msg) === "object" && msg) {
              var errorObject = new Error();
              Object.assign(errorObject, {
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
            reject(new Error(JSON.stringify({
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
      var _GetSocket = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee() {
        var token,
            _args = arguments;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                token = _args.length > 0 && _args[0] !== undefined ? _args[0] : API.findToken();
                return _context.abrupt("return", new Promise(function (resolve, reject) {
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
(0, _defineProperty2.default)(API, "hostname", dev ? "127.0.0.1:".concat(secure ? securePort : port) : "giggizmo.com");
(0, _defineProperty2.default)(API, "root", "http".concat(secure ? "s" : "", "://").concat(API.hostname));
(0, _defineProperty2.default)(API, "websocketRoot", "ws://".concat(API.hostname));
(0, _defineProperty2.default)(API, "webSocket", null);
(0, _defineProperty2.default)(API, "token", API.findToken());
(0, _defineProperty2.default)(API, "SessionStorageSupported", typeof Storage !== "undefined");
(0, _defineProperty2.default)(API, "LocalStorageSupported", typeof window !== "undefined" && typeof window.localStorage !== "undefined");
(0, _defineProperty2.default)(API, "ShouldUseSocketIO", process && !process.title.includes("node"));
(0, _defineProperty2.default)(API, "UseSocketIO", false);