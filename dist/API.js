(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@babel/runtime/core-js/symbol/iterator", "@babel/runtime/core-js/symbol", "@babel/runtime/regenerator", "regenerator-runtime/runtime", "@babel/runtime/core-js/json/stringify", "@babel/runtime/core-js/object/assign", "@babel/runtime/core-js/promise", "axios", "cookie-parser", "socket.io-client"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@babel/runtime/core-js/symbol/iterator"), require("@babel/runtime/core-js/symbol"), require("@babel/runtime/regenerator"), require("regenerator-runtime/runtime"), require("@babel/runtime/core-js/json/stringify"), require("@babel/runtime/core-js/object/assign"), require("@babel/runtime/core-js/promise"), require("axios"), require("cookie-parser"), require("socket.io-client"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.iterator, global.symbol, global.regenerator, global.runtime, global.stringify, global.assign, global.promise, global.axios, global.cookieParser, global.socket);
    global.API = mod.exports;
  }
})(this, function (_iterator, _symbol, _regenerator, _runtime, _stringify, _assign, _promise, _axios, _cookieParser, _socket) {
  "use strict";

  _iterator = _interopRequireDefault(_iterator);
  _symbol = _interopRequireDefault(_symbol);
  _regenerator = _interopRequireDefault(_regenerator);
  _stringify = _interopRequireDefault(_stringify);
  _assign = _interopRequireDefault(_assign);
  _promise = _interopRequireDefault(_promise);
  _axios = _interopRequireDefault(_axios);
  _cookieParser = _interopRequireDefault(_cookieParser);
  _socket = _interopRequireDefault(_socket);

  var _this = void 0;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { _promise.default.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new _promise.default(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _typeof(obj) { if (typeof _symbol.default === "function" && typeof _iterator.default === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof _symbol.default === "function" && obj.constructor === _symbol.default && obj !== _symbol.default.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

  var dev = typeof process.env.NODE_ENV !== "undefined" ? process.env.NODE_ENV === "development" : false;
  var version = typeof process.env.npm_package_version !== "undefined" ? process.env.npm_package_version : null;
  var secure = !dev;
  var port = dev ? 58000 : 80;
  var securePort = dev ? 54430 : 443; // NOTE: Switch to localhost if testing Facebook... or 127.0.0.1 for Twitter.

  var hostname = dev ? "127.0.0.1:".concat(secure ? securePort : port) : "giggizmo.com";
  var root = "http".concat(secure ? "s" : "", "://").concat(hostname);
  var websocketRoot = "ws://".concat(hostname);
  var webSocket = null;
  var token = null;
  var SessionStorageSupported = typeof Storage !== "undefined";
  var LocalStorageSupported = typeof window !== "undefined" && typeof window.localStorage !== "undefined";
  var ShouldUseSocketIO = process && !process.title.includes("node");
  var UseSocketIO = false;

  var findToken = function findToken() {
    _newArrowCheck(this, _this);

    if (!token && LocalStorageSupported) // We store it in session storage.
      token = localStorage.getItem("token") || null;
    if (!token && typeof document !== "undefined" && document.cookie) // We store it in the cookie.
      token = (0, _cookieParser.default)(document.cookie)["gig-gizmo-token"];
    if (token && LocalStorageSupported) localStorage.setItem("token", token);
    return token;
  }.bind(void 0);

  token = findToken();

  var Call = function Call(method, callRoute, callData) {
    var _this2 = this;

    _newArrowCheck(this, _this);

    var route = callRoute || "";
    var data = callData || {};
    return new _promise.default(function (resolve, reject) {
      var _this3 = this;

      _newArrowCheck(this, _this2);

      var token = data && data.token ? data.token : false;
      if (typeof token !== "undefined" && data) delete data.token;
      token = token || findToken();
      var fetchRequest = {
        headers: {
          "gig-gizmo-token": token
        },
        url: "".concat(root).concat(route),
        method: method.toLowerCase(),
        data: null,
        withCredentials: true,
        responseType: "json"
      };

      if (data) {
        if (method === "HEAD" || method === "GET") fetchRequest.params = data;else fetchRequest.data = data;
      }

      (0, _axios.default)(fetchRequest).then(function (response) {
        _newArrowCheck(this, _this3);

        if (response.data) resolve(response.data);else if (response.statusText) resolve(response.statusText);else if (response.status) resolve(null);
      }.bind(this), function (error) {
        _newArrowCheck(this, _this3);

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
      }.bind(this));
    }.bind(this));
  }.bind(void 0);

  var GetSocket =
  /*#__PURE__*/
  function () {
    var _GetSocket = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee() {
      var _this4 = this;

      var token,
          _args = arguments;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              token = _args.length > 0 && _args[0] !== undefined ? _args[0] : findToken();

              _newArrowCheck(this, _this);

              return _context.abrupt("return", new _promise.default(function (resolve, reject) {
                var _this5 = this;

                _newArrowCheck(this, _this4);

                if (token) {
                  if (webSocket) return resolve(webSocket);
                  webSocket = (0, _socket.default)(root);
                  webSocket.on("connect", function () {
                    _newArrowCheck(this, _this5);

                    return resolve(webSocket);
                  }.bind(this));
                  webSocket.on("connect_timeout", function () {
                    _newArrowCheck(this, _this5);

                    return reject(new Error("Timeout"));
                  }.bind(this));
                  webSocket.on("connect_error", function (error) {
                    _newArrowCheck(this, _this5);

                    return reject(error);
                  }.bind(this));
                  webSocket.on("disconnect", function () {
                    _newArrowCheck(this, _this5);

                    return reject(new Error("Disconnected"));
                  }.bind(this));
                  webSocket.on("error", function (error) {
                    _newArrowCheck(this, _this5);

                    return reject(error);
                  }.bind(this));
                  return null;
                }

                return resolve(null);
              }.bind(this)));

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function GetSocket() {
      return _GetSocket.apply(this, arguments);
    };
  }().bind(void 0);

  module.exports = {
    dev: dev,
    version: version,
    secure: secure,
    port: port,
    securePort: securePort,
    hostname: hostname,
    root: root,
    websocketRoot: websocketRoot,
    webSocket: webSocket,
    token: token,
    SessionStorageSupported: SessionStorageSupported,
    LocalStorageSupported: LocalStorageSupported,
    ShouldUseSocketIO: ShouldUseSocketIO,
    UseSocketIO: UseSocketIO,
    findToken: findToken,
    Call: Call,
    GetSocket: GetSocket
  };
});