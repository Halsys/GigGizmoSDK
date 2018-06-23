"use strict";

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(require("@babel/runtime/core-js/map"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/core-js/object/define-property"));

var _create = _interopRequireDefault(require("@babel/runtime/core-js/object/create"));

var _assign = _interopRequireDefault(require("@babel/runtime/core-js/object/assign"));

var _moment = _interopRequireDefault(require("moment"));

var _API = _interopRequireDefault(require("./API"));

var _RESTModel2 = _interopRequireDefault(require("./RESTModel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; (0, _defineProperty2.default)(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = (0, _create.default)(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { (0, _defineProperty2.default)(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Conversation =
/*#__PURE__*/
function (_RESTModel) {
  _inheritsLoose(Conversation, _RESTModel);

  function Conversation() {
    return _RESTModel.apply(this, arguments) || this;
  }

  var _proto = Conversation.prototype;

  _proto.valid = function valid() {
    if (!_RESTModel.prototype.valid.call(this)) return false; // TODO: do more tests...

    return true;
  };

  _proto.pushMessage = function pushMessage(user, message, token) {
    var events = this.events;
    events.push({
      user: user,
      message: message,
      dateTimePosted: (0, _moment.default)()
    });
    this.events = events;
    return this.save(token);
  }; // TODO: inviteNewUser(user, newUser, token) {}


  Conversation.newCallback = function newCallback(callback) {
    var _this = this;

    var callbackId = Date.now();
    Conversation.Callbacks.set(callbackId, callback);
    return function () {
      _newArrowCheck(this, _this);

      return Conversation.Callbacks.delete(callbackId);
    }.bind(this);
  };

  Conversation.connectSocket = function connectSocket(token) {
    var _this2 = this;

    if (token) _API.default.GetSocket(token).then(function (socket) {
      var _this3 = this;

      _newArrowCheck(this, _this2);

      socket.on("/API/Conversation/Update", function (data) {
        var _this4 = this;

        _newArrowCheck(this, _this3);

        if (data) {
          var conv = _RESTModel2.default.Cache.get(data._id) || null;
          if (conv) conv = (0, _assign.default)(conv, data);else conv = new Conversation(data);

          _RESTModel2.default.Cache.set(conv._id, conv);

          Conversation.Callbacks.forEach(function (cb) {
            _newArrowCheck(this, _this4);

            return cb(conv);
          }.bind(this));
        }
      }.bind(this));
    }.bind(this), console.error);
  };

  Conversation.findById = function findById(id, token) {
    return _RESTModel2.default.findById(Conversation, id, token, true);
  };

  Conversation.getAllOwned = function getAllOwned(token) {
    return _RESTModel2.default.findMany(Conversation, null, token, true);
  };

  _createClass(Conversation, [{
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
  }]);

  return Conversation;
}(_RESTModel2.default);

exports.default = Conversation;

_defineProperty(Conversation, "ModelName", "Conversation");

_defineProperty(Conversation, "Callbacks", new _map.default());