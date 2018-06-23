(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@babel/runtime/helpers/classCallCheck", "@babel/runtime/helpers/possibleConstructorReturn", "@babel/runtime/helpers/getPrototypeOf", "@babel/runtime/helpers/createClass", "@babel/runtime/helpers/inherits", "./API", "./RESTModel"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@babel/runtime/helpers/classCallCheck"), require("@babel/runtime/helpers/possibleConstructorReturn"), require("@babel/runtime/helpers/getPrototypeOf"), require("@babel/runtime/helpers/createClass"), require("@babel/runtime/helpers/inherits"), require("./API"), require("./RESTModel"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.classCallCheck, global.possibleConstructorReturn, global.getPrototypeOf, global.createClass, global.inherits, global.API, global.RESTModel);
    global.Notification = mod.exports;
  }
})(this, function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf2, _createClass2, _inherits2, _API, _RESTModel2) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _possibleConstructorReturn2 = _interopRequireDefault(_possibleConstructorReturn2);
  _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf2);
  _createClass2 = _interopRequireDefault(_createClass2);
  _inherits2 = _interopRequireDefault(_inherits2);
  _API = _interopRequireDefault(_API);
  _RESTModel2 = _interopRequireDefault(_RESTModel2);

  /**
   * Created by corynull on 8/15/17.
   */
  var Notification =
  /*#__PURE__*/
  function (_RESTModel) {
    (0, _inherits2.default)(Notification, _RESTModel);
    (0, _createClass2.default)(Notification, [{
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

      (0, _classCallCheck2.default)(this, Notification);
      _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Notification).call(this, data));
      _this.changeCallbacks = {};
      return _this;
    }

    (0, _createClass2.default)(Notification, [{
      key: "newChangeCallback",
      value: function newChangeCallback(callback) {
        var _this2 = this;

        var i = Date.now();
        this.changeCallbacks[i] = callback;
        return function () {
          return delete _this2.changeCallbacks[i];
        };
      }
    }], [{
      key: "onNewNotification",
      value: function onNewNotification(note) {
        Notification.Callbacks.forEach(function (callback) {
          return callback(note);
        });
      }
    }, {
      key: "newCallback",
      value: function newCallback(callback) {
        var callbackId = Date.now();
        Notification.Callbacks.set(callbackId, callback);
        return function () {
          return Notification.Callbacks.delete(callbackId);
        };
      }
    }, {
      key: "getNewNotifications",
      value: function getNewNotifications(token) {
        return new Promise(function (resolve, reject) {
          _API.default.Call("GET", "/API/Notification", {
            token: token,
            returnNew: true
          }).then(function (notes) {
            resolve(Array.from(notes || []).map(function (item) {
              return new Notification(item);
            }));
          }, reject);
        });
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
        if (token) _API.default.GetSocket(token).then(function (socket) {
          socket.on("notification", function (data) {
            return Notification.onNewNotification(new Notification(data));
          });
        }, console.error);
      }
    }]);
    return Notification;
  }(_RESTModel2.default);

  _exports.default = Notification;
  Notification.ModelName = "Notification";
  Notification.Callbacks = new Map();
});