"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.version = undefined;

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

var _socket = require("socket.io-client");

var _socket2 = _interopRequireDefault(_socket);

var _cookie = require("cookie");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var version = exports.version = typeof process !== "undefined" && typeof process.env.npm_package_version !== "undefined" ? process.env.npm_package_version : null; /**
                                                                                                                                                                    * Created by corynull on 6/19/17.
                                                                                                                                                                    */

var API = function () {
	function API() {
		(0, _classCallCheck3.default)(this, API);
	}

	(0, _createClass3.default)(API, null, [{
		key: "findToken",
		value: function findToken() {
			var token = API.token || null;
			if (!token && API.SessionStorageSupported) {
				// We store it in session storage.
				token = sessionStorage.getItem("token") || null;
			}
			if (!token && typeof document !== "undefined" && document.cookie) {
				// We store it in the cookie.
				var cookieToken = (0, _cookie.parse)(document.cookie)["gig-gizmo-token"];
				token = cookieToken;
			}
			if (token && API.SessionStorageSupported) {
				sessionStorage.setItem("token", token);
			}
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
					} else if (error.request) reject(new Error(error.request));else reject(new Error(error.message));
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

API.hostname = "giggizmo.com";
API.root = "https://" + API.hostname;
API.websocketRoot = "ws://" + API.hostname;
API.webSocket = null;
API.token = API.findToken();
API.SessionStorageSupported = typeof Storage !== "undefined";
API.ShouldUseSocketIO = process && !process.title.includes("node");
API.UseSocketIO = false;
exports.default = API;