"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.securePort = exports.port = exports.secure = exports.version = exports.dev = undefined;

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _axios = require("axios");

var _axios2 = _interopRequireDefault(_axios);

var _cookieParser = require("cookie-parser");

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _socket = require("socket.io-client");

var _socket2 = _interopRequireDefault(_socket);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dev = exports.dev = typeof process.env.NODE_ENV !== "undefined" ? process.env.NODE_ENV === "development" : false; /**
                                                                                                                       * Created by corynull on 6/19/17.
                                                                                                                       */

var version = exports.version = typeof process.env.npm_package_version !== "undefined" ? process.env.npm_package_version : null;
var secure = exports.secure = !dev;
var port = exports.port = dev ? 58000 : 80;
var securePort = exports.securePort = dev ? 54430 : 443;

var API = function () {
  function API() {
    (0, _classCallCheck3.default)(this, API);
  }

  (0, _createClass3.default)(API, null, [{
    key: "findToken",
    value: function findToken() {
      var token = API.token || null;
      if (!token && API.LocalStorageSupported)
        // We store it in session storage.
        token = localStorage.getItem("token") || null;
      if (!token && typeof document !== "undefined" && document.cookie)
        // We store it in the cookie.
        token = (0, _cookieParser2.default)(document.cookie)["gig-gizmo-token"];
      if (token && API.LocalStorageSupported) localStorage.setItem("token", token);
      return token;
    }
    // NOTE: Switch to localhost if testing Facebook... or 127.0.0.1 for Twitter.

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
          url: "" + API.root + route,
          method: method.toLowerCase(),
          data: null,
          withCredentials: true,
          responseType: "json"
        };
        if (data) {
          if (method === "HEAD" || method === "GET") fetchRequest.params = data;else fetchRequest.data = data;
        }

        (0, _axios2.default)(fetchRequest).then(function (response) {
          if (response.data) resolve(response.data);else if (response.statusText) resolve(response.statusText);else if (response.status) resolve(null);
        }, function (error) {
          if (error.response) {
            var msg = error.response.data;
            if (typeof msg === "string") reject(new Error(msg));else if ((typeof msg === "undefined" ? "undefined" : (0, _typeof3.default)(msg)) === "object" && msg) {
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
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var token = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : API.findToken();
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", new Promise(function (resolve, reject) {
                  if (token) {
                    if (API.webSocket) return resolve(API.webSocket);
                    API.webSocket = (0, _socket2.default)(API.root);
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

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function GetSocket() {
        return _ref.apply(this, arguments);
      }

      return GetSocket;
    }()
  }]);
  return API;
}();

API.hostname = dev ? "127.0.0.1:" + (secure ? securePort : port) : "giggizmo.com";
API.root = "http" + (secure ? "s" : "") + "://" + API.hostname;
API.websocketRoot = "ws://" + API.hostname;
API.webSocket = null;
API.token = API.findToken();
API.SessionStorageSupported = typeof Storage !== "undefined";
API.LocalStorageSupported = typeof window !== "undefined" && typeof window.localStorage !== "undefined";
API.ShouldUseSocketIO = process && !process.title.includes("node");
API.UseSocketIO = false;
exports.default = API;