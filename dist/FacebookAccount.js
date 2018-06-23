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
    global.FacebookAccount = mod.exports;
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
   * Created by corynull on Nov 30 2017 9:08 AM.
   */
  var FacebookAccount =
  /*#__PURE__*/
  function (_RESTModel) {
    (0, _inherits2.default)(FacebookAccount, _RESTModel);

    function FacebookAccount() {
      (0, _classCallCheck2.default)(this, FacebookAccount);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(FacebookAccount).apply(this, arguments));
    }

    (0, _createClass2.default)(FacebookAccount, [{
      key: "getUser",
      value: function getUser() {
        return _User.default.getUserById(this.userId);
      }
    }, {
      key: "userIsOwner",
      value: function userIsOwner(user) {
        if (typeof user === "string") return user === this.userId;else if ((0, _typeof2.default)(user) === "object" && user) return user._id === this.userId;
        return false;
      }
    }, {
      key: "valid",
      value: function valid() {
        if (!_RESTModel2.default.prototype.valid.call(this)) return false;
        if (!this.userId || typeof this.userId !== "string") return false;
        if (!this.profile || (0, _typeof2.default)(this.profile) !== "object") return false;
        if (!this.accountId || typeof this.accountId !== "string") return false;
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
      key: "accountId",
      get: function get() {
        return this.getField("accountId");
      },
      set: function set(value) {
        this.setField("accountId", value);
      }
    }, {
      key: "userAccessToken",
      get: function get() {
        return this.getField("userAccessToken");
      },
      set: function set(value) {
        this.setField("userAccessToken", value);
      }
    }, {
      key: "userRefreshToken",
      get: function get() {
        return this.getField("userRefreshToken");
      },
      set: function set(value) {
        this.setField("userRefreshToken", value);
      }
    }, {
      key: "profile",
      get: function get() {
        return this.getField("profile");
      }
    }], [{
      key: "findById",
      value: function findById(id, token) {
        return new Promise(function (resolve, reject) {
          if (typeof id === "string" && id !== "") _API.default.Call("GET", "/API/FacebookAccount/".concat(id), {
            token: token
          }).then(function (found) {
            var account = found || null;
            if (account) resolve(new FacebookAccount(account));else reject(new Error("".concat(account, " returned")));
          }, reject);else resolve(null);
        });
      }
    }, {
      key: "findPage",
      value: function findPage(pageName) {
        return new Promise(function (resolve, reject) {
          if (typeof pageName !== "string") {
            reject(new Error("pageName is not a string!"));
          } else {
            _API.default.Call("GET", "/API/Facebook/Page/Find", {
              name: pageName
            }).then(resolve, reject);
          }
        });
      }
    }, {
      key: "PostToPage",
      value: function PostToPage(format, text, pageId, postDateTime) {
        return new Promise(function (resolve, reject) {
          _API.default.Call("POST", "/API/Facebook/Page/Post", {
            post_format: format,
            post_text: text,
            fb_page_id: pageId,
            publish_time: postDateTime // .getTime() / 1000

          }).then(resolve, reject);
        });
      }
    }]);
    return FacebookAccount;
  }(_RESTModel2.default);

  _exports.default = FacebookAccount;
  FacebookAccount.ModelName = "FacebookAccount";
});