"use strict";

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(require("@babel/runtime/core-js/map"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/core-js/object/define-property"));

var _create = _interopRequireDefault(require("@babel/runtime/core-js/object/create"));

var _from = _interopRequireDefault(require("@babel/runtime/core-js/array/from"));

var _promise = _interopRequireDefault(require("@babel/runtime/core-js/promise"));

var _API = _interopRequireDefault(require("./API"));

var _RESTModel2 = _interopRequireDefault(require("./RESTModel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; (0, _defineProperty2.default)(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = (0, _create.default)(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { (0, _defineProperty2.default)(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Notification =
/*#__PURE__*/
function (_RESTModel) {
  _inheritsLoose(Notification, _RESTModel);

  _createClass(Notification, [{
    key: "userId",
    get: function get() {
      return this.getField("userId");
    },
    set: function set(value) {
      this.setField("userId", value);
    }
  }, {
    key: "label",
    get: function get() {
      return this.getField("label");
    },
    set: function set(value) {
      this.setField("label", value);
    }
  }, {
    key: "message",
    get: function get() {
      return this.getField("message");
    },
    set: function set(value) {
      this.setField("message", value);
    }
  }, {
    key: "actions",
    get: function get() {
      return this.getField("actions");
    },
    set: function set(value) {
      this.setField("actions", value);
    }
  }, {
    key: "seenByUser",
    get: function get() {
      return this.getField("seenByUser");
    },
    set: function set(value) {
      this.setField("seenByUser", value);
    }
  }]);

  function Notification(data) {
    var _this;

    _this = _RESTModel.call(this, data) || this;
    _this.changeCallbacks = {};
    return _this;
  }

  var _proto = Notification.prototype;

  _proto.newChangeCallback = function newChangeCallback(callback) {
    var _this2 = this;

    var i = Date.now();
    this.changeCallbacks[i] = callback;
    return function () {
      _newArrowCheck(this, _this2);

      return delete this.changeCallbacks[i];
    }.bind(this);
  };

  Notification.onNewNotification = function onNewNotification(note) {
    var _this3 = this;

    Notification.Callbacks.forEach(function (callback) {
      _newArrowCheck(this, _this3);

      return callback(note);
    }.bind(this));
  };

  Notification.newCallback = function newCallback(callback) {
    var _this4 = this;

    var callbackId = Date.now();
    Notification.Callbacks.set(callbackId, callback);
    return function () {
      _newArrowCheck(this, _this4);

      return Notification.Callbacks.delete(callbackId);
    }.bind(this);
  };

  Notification.getNewNotifications = function getNewNotifications(token) {
    var _this5 = this;

    return new _promise.default(function (resolve, reject) {
      var _this6 = this;

      _newArrowCheck(this, _this5);

      _API.default.Call("GET", "/API/Notification", {
        token: token,
        returnNew: true
      }).then(function (notes) {
        var _this7 = this;

        _newArrowCheck(this, _this6);

        resolve((0, _from.default)(notes || []).map(function (item) {
          _newArrowCheck(this, _this7);

          return new Notification(item);
        }.bind(this)));
      }.bind(this), reject);
    }.bind(this));
  };

  Notification.getAllOwned = function getAllOwned(token) {
    return _RESTModel2.default.findMany(Notification, null, token, true);
  };

  Notification.findById = function findById(id, token) {
    return _RESTModel2.default.findById(Notification, id, token, true);
  };

  Notification.connectSocket = function connectSocket(token) {
    var _this8 = this;

    if (token) _API.default.GetSocket(token).then(function (socket) {
      var _this9 = this;

      _newArrowCheck(this, _this8);

      socket.on("notification", function (data) {
        _newArrowCheck(this, _this9);

        return Notification.onNewNotification(new Notification(data));
      }.bind(this));
    }.bind(this), console.error);
  };

  return Notification;
}(_RESTModel2.default);

exports.default = Notification;

_defineProperty(Notification, "ModelName", "Notification");

_defineProperty(Notification, "Callbacks", new _map.default());