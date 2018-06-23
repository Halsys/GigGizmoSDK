"use strict";

exports.__esModule = true;
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/core-js/object/define-property"));

var _create = _interopRequireDefault(require("@babel/runtime/core-js/object/create"));

var _promise = _interopRequireDefault(require("@babel/runtime/core-js/promise"));

var _RESTModel2 = _interopRequireDefault(require("./RESTModel"));

var _User = _interopRequireDefault(require("./User"));

var _API = _interopRequireDefault(require("./API"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; (0, _defineProperty2.default)(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = (0, _create.default)(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { (0, _defineProperty2.default)(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var FacebookAccount =
/*#__PURE__*/
function (_RESTModel) {
  _inheritsLoose(FacebookAccount, _RESTModel);

  function FacebookAccount() {
    return _RESTModel.apply(this, arguments) || this;
  }

  var _proto = FacebookAccount.prototype;

  _proto.getUser = function getUser() {
    return _User.default.getUserById(this.userId);
  };

  _proto.userIsOwner = function userIsOwner(user) {
    if (typeof user === "string") return user === this.userId;else if (typeof user === "object" && user) return user._id === this.userId;
    return false;
  };

  _proto.valid = function valid() {
    if (!_RESTModel2.default.prototype.valid.call(this)) return false;
    if (!this.userId || typeof this.userId !== "string") return false;
    if (!this.profile || typeof this.profile !== "object") return false;
    if (!this.accountId || typeof this.accountId !== "string") return false;
    return true;
  };

  FacebookAccount.findById = function findById(id, token) {
    var _this = this;

    return new _promise.default(function (resolve, reject) {
      var _this2 = this;

      _newArrowCheck(this, _this);

      if (typeof id === "string" && id !== "") _API.default.Call("GET", "/API/FacebookAccount/" + id, {
        token: token
      }).then(function (found) {
        _newArrowCheck(this, _this2);

        var account = found || null;
        if (account) resolve(new FacebookAccount(account));else reject(new Error(account + " returned"));
      }.bind(this), reject);else resolve(null);
    }.bind(this));
  };

  FacebookAccount.findPage = function findPage(pageName) {
    var _this3 = this;

    return new _promise.default(function (resolve, reject) {
      _newArrowCheck(this, _this3);

      if (typeof pageName !== "string") {
        reject(new Error("pageName is not a string!"));
      } else {
        _API.default.Call("GET", "/API/Facebook/Page/Find", {
          name: pageName
        }).then(resolve, reject);
      }
    }.bind(this));
  };

  FacebookAccount.PostToPage = function PostToPage(format, text, pageId, postDateTime) {
    var _this4 = this;

    return new _promise.default(function (resolve, reject) {
      _newArrowCheck(this, _this4);

      _API.default.Call("POST", "/API/Facebook/Page/Post", {
        post_format: format,
        post_text: text,
        fb_page_id: pageId,
        publish_time: postDateTime // .getTime() / 1000

      }).then(resolve, reject);
    }.bind(this));
  };

  _createClass(FacebookAccount, [{
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
  }]);

  return FacebookAccount;
}(_RESTModel2.default);

exports.default = FacebookAccount;

_defineProperty(FacebookAccount, "ModelName", "FacebookAccount");