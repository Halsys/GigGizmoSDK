"use strict";

var _iterator = _interopRequireDefault(require("@babel/runtime/core-js/symbol/iterator"));

var _symbol = _interopRequireDefault(require("@babel/runtime/core-js/symbol"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/core-js/object/get-prototype-of"));

var _create = _interopRequireDefault(require("@babel/runtime/core-js/object/create"));

var _setPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/core-js/object/set-prototype-of"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/core-js/object/define-property"));

var _map = _interopRequireDefault(require("@babel/runtime/core-js/map"));

var _from = _interopRequireDefault(require("@babel/runtime/core-js/array/from"));

var _promise = _interopRequireDefault(require("@babel/runtime/core-js/promise"));

require("core-js/modules/web.dom.iterable");

var _API = _interopRequireDefault(require("./API"));

var _RESTModel2 = _interopRequireDefault(require("./RESTModel"));

var _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof _symbol.default === "function" && typeof _iterator.default === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof _symbol.default === "function" && obj.constructor === _symbol.default && obj !== _symbol.default.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = _setPrototypeOf2.default ? _getPrototypeOf2.default : function _getPrototypeOf(o) { return o.__proto__ || (0, _getPrototypeOf2.default)(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; (0, _defineProperty2.default)(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = (0, _create.default)(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = _setPrototypeOf2.default || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { (0, _defineProperty2.default)(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

module.exports = (_temp = _class =
/*#__PURE__*/
function (_RESTModel) {
  _inherits(Notification, _RESTModel);

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

    _classCallCheck(this, Notification);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Notification).call(this, data));
    _this.changeCallbacks = {};
    return _this;
  }

  _createClass(Notification, [{
    key: "newChangeCallback",
    value: function newChangeCallback(callback) {
      var _this2 = this;

      var i = Date.now();
      this.changeCallbacks[i] = callback;
      return function () {
        _newArrowCheck(this, _this2);

        return delete this.changeCallbacks[i];
      }.bind(this);
    }
  }], [{
    key: "onNewNotification",
    value: function onNewNotification(note) {
      var _this3 = this;

      Notification.Callbacks.forEach(function (callback) {
        _newArrowCheck(this, _this3);

        return callback(note);
      }.bind(this));
    }
  }, {
    key: "newCallback",
    value: function newCallback(callback) {
      var _this4 = this;

      var callbackId = Date.now();
      Notification.Callbacks.set(callbackId, callback);
      return function () {
        _newArrowCheck(this, _this4);

        return Notification.Callbacks.delete(callbackId);
      }.bind(this);
    }
  }, {
    key: "getNewNotifications",
    value: function getNewNotifications(token) {
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
    }
  }, {
    key: "getAllOwned",
    value: function getAllOwned(token) {
      return _RESTModel2.default.findMany(Notification, null, token, true);
    }
  }, {
    key: "findById",
    value: function findById(id, token) {
      return _RESTModel2.default.findById(Notification, id, token, true);
    }
  }, {
    key: "connectSocket",
    value: function connectSocket(token) {
      var _this8 = this;

      if (token) _API.default.GetSocket(token).then(function (socket) {
        var _this9 = this;

        _newArrowCheck(this, _this8);

        socket.on("notification", function (data) {
          _newArrowCheck(this, _this9);

          return Notification.onNewNotification(new Notification(data));
        }.bind(this));
      }.bind(this), console.error);
    }
  }]);

  return Notification;
}(_RESTModel2.default), _defineProperty(_class, "ModelName", "Notification"), _defineProperty(_class, "Callbacks", new _map.default()), _temp);