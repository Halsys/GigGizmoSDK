"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _API = require("./API");

var _API2 = _interopRequireDefault(_API);

var _RESTModel2 = require("./RESTModel");

var _RESTModel3 = _interopRequireDefault(_RESTModel2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by corynull on 8/15/17.
 */

var Notification = function (_RESTModel) {
	(0, _inherits3.default)(Notification, _RESTModel);
	(0, _createClass3.default)(Notification, [{
		key: "userId",
		get: function get() {
			return this.document.userId || null;
		},
		set: function set(value) {
			this.document.userId = value;
			this.document.dateModified = Date.now();
		}
	}, {
		key: "label",
		get: function get() {
			return this.document.label || null;
		},
		set: function set(value) {
			this.document.label = value;
			this.document.dateModified = Date.now();
		}
	}, {
		key: "message",
		get: function get() {
			return this.document.message || null;
		},
		set: function set(value) {
			this.document.message = value;
			this.document.dateModified = Date.now();
		}
	}, {
		key: "actions",
		get: function get() {
			return this.document.actions || null;
		},
		set: function set(value) {
			this.document.actions = value;
			this.document.dateModified = Date.now();
		}
	}, {
		key: "seenByUser",
		get: function get() {
			return this.document.seenByUser || null;
		},
		set: function set(value) {
			this.document.seenByUser = value;
			this.document.dateModified = Date.now();
		}
	}]);

	function Notification(data) {
		(0, _classCallCheck3.default)(this, Notification);

		var _this = (0, _possibleConstructorReturn3.default)(this, (Notification.__proto__ || Object.getPrototypeOf(Notification)).call(this, data));

		_this.changeCallbacks = {};
		return _this;
	}

	(0, _createClass3.default)(Notification, [{
		key: "newChangeCallback",
		value: function newChangeCallback(callback) {
			var _this2 = this;

			var i = Date.now();
			this.changeCallbacks[i] = callback;
			return function () {
				delete _this2.changeCallbacks[i];
			};
		}
	}], [{
		key: "onNewNotification",
		value: function onNewNotification(note) {
			Notification.Callbacks.forEach(function (callback) {
				callback(note);
			});
		}
	}, {
		key: "newCallback",
		value: function newCallback(callback) {
			var callbackId = Date.now();
			Notification.Callbacks.set(callbackId, callback);
			return function () {
				Notification.Callbacks.delete(callbackId);
			};
		}
	}, {
		key: "getNewNotifications",
		value: function getNewNotifications(token) {
			return new Promise(function (resolve, reject) {
				_API2.default.Call("GET", "/API/Notification", { token: token, returnNew: true }).then(function (notes) {
					resolve(Array.from(notes || []).map(function (item) {
						var note = new Notification(item);
						return note;
					}));
				}, reject);
			});
		}
	}, {
		key: "getAllOwned",
		value: function getAllOwned(token) {
			return _RESTModel3.default.findMany(Notification, null, token);
		}
	}, {
		key: "findById",
		value: function findById(id, token) {
			return _RESTModel3.default.findById(Notification, id, token);
		}
	}, {
		key: "connectSocket",
		value: function connectSocket(token) {
			if (token) {
				_API2.default.GetSocket(token).then(function (socket) {
					socket.on("notification", function (data) {
						var notification = new Notification(data);
						Notification.onNewNotification(notification);
					});
				}, console.error);
			}
		}
	}]);
	return Notification;
}(_RESTModel3.default);

Notification.ModelName = "Notification";
Notification.Callbacks = new Map();
exports.default = Notification;