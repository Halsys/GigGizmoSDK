(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@babel/runtime/core-js/map", "@babel/runtime/core-js/symbol/iterator", "@babel/runtime/core-js/symbol", "@babel/runtime/core-js/object/define-property", "@babel/runtime/core-js/object/get-own-property-descriptor", "@babel/runtime/core-js/reflect/get", "@babel/runtime/core-js/object/get-prototype-of", "@babel/runtime/core-js/object/create", "@babel/runtime/core-js/object/set-prototype-of", "core-js/modules/web.dom.iterable", "@babel/runtime/core-js/object/assign", "moment", "./API", "./RESTModel"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@babel/runtime/core-js/map"), require("@babel/runtime/core-js/symbol/iterator"), require("@babel/runtime/core-js/symbol"), require("@babel/runtime/core-js/object/define-property"), require("@babel/runtime/core-js/object/get-own-property-descriptor"), require("@babel/runtime/core-js/reflect/get"), require("@babel/runtime/core-js/object/get-prototype-of"), require("@babel/runtime/core-js/object/create"), require("@babel/runtime/core-js/object/set-prototype-of"), require("core-js/modules/web.dom.iterable"), require("@babel/runtime/core-js/object/assign"), require("moment"), require("./API"), require("./RESTModel"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.map, global.iterator, global.symbol, global.defineProperty, global.getOwnPropertyDescriptor, global.get, global.getPrototypeOf, global.create, global.setPrototypeOf, global.webDom, global.assign, global.moment, global.API, global.RESTModel);
    global.Conversation = mod.exports;
  }
})(this, function (_exports, _map, _iterator, _symbol, _defineProperty2, _getOwnPropertyDescriptor, _get2, _getPrototypeOf2, _create, _setPrototypeOf2, _webDom, _assign, _moment, _API, _RESTModel2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _map = _interopRequireDefault(_map);
  _iterator = _interopRequireDefault(_iterator);
  _symbol = _interopRequireDefault(_symbol);
  _defineProperty2 = _interopRequireDefault(_defineProperty2);
  _getOwnPropertyDescriptor = _interopRequireDefault(_getOwnPropertyDescriptor);
  _get2 = _interopRequireDefault(_get2);
  _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf2);
  _create = _interopRequireDefault(_create);
  _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf2);
  _assign = _interopRequireDefault(_assign);
  _moment = _interopRequireDefault(_moment);
  _API = _interopRequireDefault(_API);
  _RESTModel2 = _interopRequireDefault(_RESTModel2);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _typeof(obj) { if (typeof _symbol.default === "function" && typeof _iterator.default === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof _symbol.default === "function" && obj.constructor === _symbol.default && obj !== _symbol.default.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

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
        var _this = this;

        var callbackId = Date.now();
        Conversation.Callbacks.set(callbackId, callback);
        return function () {
          _newArrowCheck(this, _this);

          return Conversation.Callbacks.delete(callbackId);
        }.bind(this);
      }
    }, {
      key: "connectSocket",
      value: function connectSocket(token) {
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

  _defineProperty(Conversation, "ModelName", "Conversation");

  _defineProperty(Conversation, "Callbacks", new _map.default());
});