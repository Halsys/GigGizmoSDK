(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@babel/runtime/helpers/typeof", "@babel/runtime/helpers/classCallCheck", "@babel/runtime/helpers/createClass", "@babel/runtime/helpers/possibleConstructorReturn", "@babel/runtime/helpers/getPrototypeOf", "@babel/runtime/helpers/inherits", "./RESTModel", "./User", "./API"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@babel/runtime/helpers/typeof"), require("@babel/runtime/helpers/classCallCheck"), require("@babel/runtime/helpers/createClass"), require("@babel/runtime/helpers/possibleConstructorReturn"), require("@babel/runtime/helpers/getPrototypeOf"), require("@babel/runtime/helpers/inherits"), require("./RESTModel"), require("./User"), require("./API"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global._typeof, global.classCallCheck, global.createClass, global.possibleConstructorReturn, global.getPrototypeOf, global.inherits, global.RESTModel, global.User, global.API);
    global.TwitterAccount = mod.exports;
  }
})(this, function (_exports, _typeof2, _classCallCheck2, _createClass2, _possibleConstructorReturn2, _getPrototypeOf2, _inherits2, _RESTModel2, _User, _API) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _typeof2 = _interopRequireDefault(_typeof2);
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _createClass2 = _interopRequireDefault(_createClass2);
  _possibleConstructorReturn2 = _interopRequireDefault(_possibleConstructorReturn2);
  _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf2);
  _inherits2 = _interopRequireDefault(_inherits2);
  _RESTModel2 = _interopRequireDefault(_RESTModel2);
  _User = _interopRequireDefault(_User);
  _API = _interopRequireDefault(_API);

  /**
   * Created by corynull on 5/17/17.
   */
  var TwitterAccount =
  /*#__PURE__*/
  function (_RESTModel) {
    (0, _inherits2.default)(TwitterAccount, _RESTModel);

    function TwitterAccount() {
      (0, _classCallCheck2.default)(this, TwitterAccount);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(TwitterAccount).apply(this, arguments));
    }

    (0, _createClass2.default)(TwitterAccount, [{
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
        if (!this.profile || (0, _typeof2.default)(this.profile) !== "object") return false;
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
        return new Promise(function (resolve, reject) {
          if (typeof id === "string" && id !== "") _API.default.Call("GET", "/API/TwitterAccount/".concat(id)).then(function (response) {
            var account = response || null;
            if (account) resolve(new TwitterAccount(account));else reject(new Error("".concat(account, " returned")));
          }, reject);else resolve(null);
        });
      }
    }]);
    return TwitterAccount;
  }(_RESTModel2.default);

  _exports.default = TwitterAccount;
  TwitterAccount.ModelName = "TwitterAccount";
});