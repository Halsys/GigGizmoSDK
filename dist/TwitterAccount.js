(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@babel/runtime/core-js/symbol/iterator", "@babel/runtime/core-js/symbol", "@babel/runtime/core-js/object/define-property", "@babel/runtime/core-js/object/get-prototype-of", "@babel/runtime/core-js/object/create", "@babel/runtime/core-js/object/set-prototype-of", "@babel/runtime/core-js/promise", "./RESTModel", "./User", "./API"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@babel/runtime/core-js/symbol/iterator"), require("@babel/runtime/core-js/symbol"), require("@babel/runtime/core-js/object/define-property"), require("@babel/runtime/core-js/object/get-prototype-of"), require("@babel/runtime/core-js/object/create"), require("@babel/runtime/core-js/object/set-prototype-of"), require("@babel/runtime/core-js/promise"), require("./RESTModel"), require("./User"), require("./API"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.iterator, global.symbol, global.defineProperty, global.getPrototypeOf, global.create, global.setPrototypeOf, global.promise, global.RESTModel, global.User, global.API);
    global.TwitterAccount = mod.exports;
  }
})(this, function (_exports, _iterator, _symbol, _defineProperty2, _getPrototypeOf2, _create, _setPrototypeOf2, _promise, _RESTModel2, _User, _API) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _iterator = _interopRequireDefault(_iterator);
  _symbol = _interopRequireDefault(_symbol);
  _defineProperty2 = _interopRequireDefault(_defineProperty2);
  _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf2);
  _create = _interopRequireDefault(_create);
  _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf2);
  _promise = _interopRequireDefault(_promise);
  _RESTModel2 = _interopRequireDefault(_RESTModel2);
  _User = _interopRequireDefault(_User);
  _API = _interopRequireDefault(_API);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

  function _typeof(obj) { if (typeof _symbol.default === "function" && typeof _iterator.default === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof _symbol.default === "function" && obj.constructor === _symbol.default && obj !== _symbol.default.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; (0, _defineProperty2.default)(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _getPrototypeOf(o) { _getPrototypeOf = _setPrototypeOf2.default ? _getPrototypeOf2.default : function _getPrototypeOf(o) { return o.__proto__ || (0, _getPrototypeOf2.default)(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = (0, _create.default)(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = _setPrototypeOf2.default || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _defineProperty(obj, key, value) { if (key in obj) { (0, _defineProperty2.default)(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var TwitterAccount =
  /*#__PURE__*/
  function (_RESTModel) {
    _inherits(TwitterAccount, _RESTModel);

    function TwitterAccount() {
      _classCallCheck(this, TwitterAccount);

      return _possibleConstructorReturn(this, _getPrototypeOf(TwitterAccount).apply(this, arguments));
    }

    _createClass(TwitterAccount, [{
      key: "getUser",
      value: function getUser() {
        return _User.default.getUserById(this.userId);
      }
    }, {
      key: "userIsOwner",
      value: function userIsOwner(user) {
        return user._id === this.userId;
      }
    }, {
      key: "goToTwitterAccount",
      value: function goToTwitterAccount() {
        if (typeof window !== "undefined") {
          // We are on a browser
          window.location.href = "https://twitter.com?profile_id=".concat(this.accountId);
        }
      }
    }, {
      key: "valid",
      value: function valid() {
        if (!_RESTModel2.default.prototype.valid.call(this)) return false;
        if (!this.userId || typeof this.userId !== "string") return false;
        if (!this.profile || _typeof(this.profile) !== "object") return false;
        return true;
      }
    }, {
      key: "userId",
      get: function get() {
        return this.getField("userId");
      },
      set: function set(value) {
        this.setField("userId", value);
      }
    }, {
      key: "accessToken",
      get: function get() {
        return this.getField("accessToken");
      },
      set: function set(value) {
        this.setField("accessToken", value);
      }
    }, {
      key: "tokenSecret",
      get: function get() {
        return this.getField("tokenSecret");
      },
      set: function set(value) {
        this.setField("tokenSecret", value);
      }
    }, {
      key: "profile",
      get: function get() {
        return this.getField("profile");
      },
      set: function set(value) {
        this.setField("profile", value);
      }
    }, {
      key: "accountId",
      get: function get() {
        return this.getField("accountId");
      },
      set: function set(value) {
        this.setField("accountId", value);
      }
    }], [{
      key: "findById",
      value: function findById(id) {
        var _this = this;

        return new _promise.default(function (resolve, reject) {
          var _this2 = this;

          _newArrowCheck(this, _this);

          if (typeof id === "string" && id !== "") _API.default.Call("GET", "/API/TwitterAccount/".concat(id)).then(function (response) {
            _newArrowCheck(this, _this2);

            var account = response || null;
            if (account) resolve(new TwitterAccount(account));else reject(new Error("".concat(account, " returned")));
          }.bind(this), reject);else resolve(null);
        }.bind(this));
      }
    }]);

    return TwitterAccount;
  }(_RESTModel2.default);

  _exports.default = TwitterAccount;

  _defineProperty(TwitterAccount, "ModelName", "TwitterAccount");
});