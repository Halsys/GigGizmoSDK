"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _moment = _interopRequireDefault(require("moment"));

var _API = _interopRequireDefault(require("./API"));

var _RESTModel2 = _interopRequireDefault(require("./RESTModel"));

/**
 * Created by corynull on Dec 30 2017 11:14:11 AM.
 */
var Conversation =
/*#__PURE__*/
function (_RESTModel) {
  (0, _inherits2.default)(Conversation, _RESTModel);

  function Conversation() {
    (0, _classCallCheck2.default)(this, Conversation);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Conversation).apply(this, arguments));
  }

  (0, _createClass2.default)(Conversation, [{
    key: "valid",
    value: function valid() {
      if (!(0, _get2.default)((0, _getPrototypeOf2.default)(Conversation.prototype), "valid", this).call(this)) return false; // TODO: do more tests...

      return true;
    }
  }, {
    key: "pushMessage",
    value: function pushMessage(user, message, token) {
      var events = this.events;
      events.push({
        user: user,
        message: message,
        dateTimePosted: (0, _moment.default)()
      });
      this.events = events;
      return this.save(token);
    } // TODO: inviteNewUser(user, newUser, token) {}

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
        return Conversation.Callbacks.delete(callbackId);
      };
    }
  }, {
    key: "connectSocket",
    value: function connectSocket(token) {
      if (token) _API.default.GetSocket(token).then(function (socket) {
        socket.on("/API/Conversation/Update", function (data) {
          if (data) {
            var conv = _RESTModel2.default.Cache.get(data._id) || null;
            if (conv) conv = Object.assign(conv, data);else conv = new Conversation(data);

            _RESTModel2.default.Cache.set(conv._id, conv);

            Conversation.Callbacks.forEach(function (cb) {
              return cb(conv);
            });
          }
        });
      }, console.error);
    }
  }, {
    key: "findById",
    value: function findById(id, token) {
      return _RESTModel2.default.findById(Conversation, id, token, true);
    }
  }, {
    key: "getAllOwned",
    value: function getAllOwned(token) {
      return _RESTModel2.default.findMany(Conversation, null, token, true);
    }
  }]);
  return Conversation;
}(_RESTModel2.default);

exports.default = Conversation;
(0, _defineProperty2.default)(Conversation, "ModelName", "Conversation");
(0, _defineProperty2.default)(Conversation, "Callbacks", new Map());