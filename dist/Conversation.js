"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = require("babel-runtime/helpers/get");

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

var _API = require("./API");

var _API2 = _interopRequireDefault(_API);

var _RESTModel2 = require("./RESTModel");

var _RESTModel3 = _interopRequireDefault(_RESTModel2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Conversation = function (_RESTModel) {
	(0, _inherits3.default)(Conversation, _RESTModel);

	function Conversation() {
		(0, _classCallCheck3.default)(this, Conversation);
		return (0, _possibleConstructorReturn3.default)(this, (Conversation.__proto__ || Object.getPrototypeOf(Conversation)).apply(this, arguments));
	}

	(0, _createClass3.default)(Conversation, [{
		key: "valid",
		value: function valid() {
			if (!(0, _get3.default)(Conversation.prototype.__proto__ || Object.getPrototypeOf(Conversation.prototype), "valid", this).call(this)) return false;
			// TODO: do more tests...
			return true;
		}
	}, {
		key: "pushMessage",
		value: function pushMessage(user, message, token) {
			var events = this.events;

			events.push({
				user: user,
				message: message,
				dateTimePosted: (0, _moment2.default)()
			});
			this.events = events;
			return this.save(token);
		}

		// TODO: inviteNewUser(user, newUser, token) {}

	}, {
		key: "events",
		get: function get() {
			return this.getField("events");
		},
		set: function set(value) {
			this.setField("events", value);
		}
	}, {
		key: "users",
		get: function get() {
			return this.getField("users");
		},
		set: function set(value) {
			this.setField("users", value);
		}
	}], [{
		key: "newCallback",
		value: function newCallback(callback) {
			var callbackId = Date.now();
			Conversation.Callbacks.set(callbackId, callback);
			return function () {
				Conversation.Callbacks.delete(callbackId);
			};
		}
	}, {
		key: "connectSocket",
		value: function connectSocket(token) {
			if (token) {
				_API2.default.GetSocket(token).then(function (socket) {
					socket.on("/API/Conversation/Update", function (data) {
						if (data && data._id) {
							var conv = _RESTModel3.default.Cache.get(data._id) || null;
							if (conv) conv = Object.assign(conv, data);else conv = new Conversation(data);
							_RESTModel3.default.Cache.set(conv._id, conv);
							Conversation.Callbacks.forEach(function (cb) {
								if (cb) cb(conv);
							});
						}
					});
				}, console.error);
			}
		}
	}, {
		key: "findById",
		value: function findById(id, token) {
			return _RESTModel3.default.findById(Conversation, id, token, true);
		}
	}, {
		key: "getAllOwned",
		value: function getAllOwned(token) {
			return _RESTModel3.default.findMany(Conversation, null, token, true);
		}
	}]);
	return Conversation;
}(_RESTModel3.default); /**
                         * Created by corynull on Dec 30 2017 11:14:11 AM.
                         */


Conversation.ModelName = "Conversation";
Conversation.Callbacks = new Map();
exports.default = Conversation;