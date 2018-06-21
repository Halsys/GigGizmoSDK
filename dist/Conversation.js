"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _map = _interopRequireDefault(require("@babel/runtime/core-js/map"));

var _iterator = _interopRequireDefault(require("@babel/runtime/core-js/symbol/iterator"));

var _symbol = _interopRequireDefault(require("@babel/runtime/core-js/symbol"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/core-js/object/define-property"));

var _getOwnPropertyDescriptor = _interopRequireDefault(require("@babel/runtime/core-js/object/get-own-property-descriptor"));

var _get2 = _interopRequireDefault(require("@babel/runtime/core-js/reflect/get"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/core-js/object/get-prototype-of"));

var _create = _interopRequireDefault(require("@babel/runtime/core-js/object/create"));

var _setPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/core-js/object/set-prototype-of"));

var _assign = _interopRequireDefault(require("@babel/runtime/core-js/object/assign"));

var _moment = _interopRequireDefault(require("moment"));

var _API = _interopRequireDefault(require("./API"));

var _RESTModel2 = _interopRequireDefault(require("./RESTModel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof _symbol.default === "function" && typeof _iterator.default === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof _symbol.default === "function" && obj.constructor === _symbol.default && obj !== _symbol.default.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; (0, _defineProperty2.default)(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && _get2.default) { _get = _get2.default; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = (0, _getOwnPropertyDescriptor.default)(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = _setPrototypeOf2.default ? _getPrototypeOf2.default : function _getPrototypeOf(o) { return o.__proto__ || (0, _getPrototypeOf2.default)(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = (0, _create.default)(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = _setPrototypeOf2.default || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { (0, _defineProperty2.default)(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Conversation =
/*#__PURE__*/
function (_RESTModel) {
  _inherits(Conversation, _RESTModel);

  function Conversation() {
    _classCallCheck(this, Conversation);

    return _possibleConstructorReturn(this, _getPrototypeOf(Conversation).apply(this, arguments));
  }

  _createClass(Conversation, [{
    key: "valid",
    value: function valid() {
      if (!_get(_getPrototypeOf(Conversation.prototype), "valid", this).call(this)) return false; // TODO: do more tests...

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
            if (conv) conv = (0, _assign.default)(conv, data);else conv = new Conversation(data);

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

_defineProperty(Conversation, "ModelName", "Conversation");

_defineProperty(Conversation, "Callbacks", new _map.default());