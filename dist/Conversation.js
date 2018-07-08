(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@babel/runtime/helpers/classCallCheck", "@babel/runtime/helpers/createClass", "@babel/runtime/helpers/possibleConstructorReturn", "@babel/runtime/helpers/getPrototypeOf", "@babel/runtime/helpers/get", "@babel/runtime/helpers/inherits", "moment", "./API", "./RESTModel"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@babel/runtime/helpers/classCallCheck"), require("@babel/runtime/helpers/createClass"), require("@babel/runtime/helpers/possibleConstructorReturn"), require("@babel/runtime/helpers/getPrototypeOf"), require("@babel/runtime/helpers/get"), require("@babel/runtime/helpers/inherits"), require("moment"), require("./API"), require("./RESTModel"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.classCallCheck, global.createClass, global.possibleConstructorReturn, global.getPrototypeOf, global.get, global.inherits, global.moment, global.API, global.RESTModel);
    global.Conversation = mod.exports;
  }
})(this, function (_exports, _classCallCheck2, _createClass2, _possibleConstructorReturn2, _getPrototypeOf2, _get2, _inherits2, _moment, _API, _RESTModel2) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _createClass2 = _interopRequireDefault(_createClass2);
  _possibleConstructorReturn2 = _interopRequireDefault(_possibleConstructorReturn2);
  _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf2);
  _get2 = _interopRequireDefault(_get2);
  _inherits2 = _interopRequireDefault(_inherits2);
  _moment = _interopRequireDefault(_moment);
  _API = _interopRequireDefault(_API);
  _RESTModel2 = _interopRequireDefault(_RESTModel2);

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
        return this.getField("events") || [];
      },
      set: function set(value) {
        this.setField("events", value);
      }
    }, {
      key: "users",
      get: function get() {
        return this.getField("users") || [];
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

  _exports.default = Conversation;
  Conversation.ModelName = "Conversation";
  Conversation.Callbacks = new Map();
});