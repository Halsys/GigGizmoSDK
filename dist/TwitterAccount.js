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

var TwitterAccount =
/*#__PURE__*/
function (_RESTModel) {
  _inheritsLoose(TwitterAccount, _RESTModel);

  function TwitterAccount() {
    return _RESTModel.apply(this, arguments) || this;
  }

  var _proto = TwitterAccount.prototype;

  _proto.getUser = function getUser() {
    return _User.default.getUserById(this.userId);
  };

  _proto.userIsOwner = function userIsOwner(user) {
    return user._id === this.userId;
  };

  _proto.goToTwitterAccount = function goToTwitterAccount() {
    if (typeof window !== "undefined") {
      // We are on a browser
      window.location.href = "https://twitter.com?profile_id=" + this.accountId;
    }
  };

  _proto.valid = function valid() {
    if (!_RESTModel2.default.prototype.valid.call(this)) return false;
    if (!this.userId || typeof this.userId !== "string") return false;
    if (!this.profile || typeof this.profile !== "object") return false;
    return true;
  };

  TwitterAccount.findById = function findById(id) {
    var _this = this;

    return new _promise.default(function (resolve, reject) {
      var _this2 = this;

      _newArrowCheck(this, _this);

      if (typeof id === "string" && id !== "") _API.default.Call("GET", "/API/TwitterAccount/" + id).then(function (response) {
        _newArrowCheck(this, _this2);

        var account = response || null;
        if (account) resolve(new TwitterAccount(account));else reject(new Error(account + " returned"));
      }.bind(this), reject);else resolve(null);
    }.bind(this));
  };

  _createClass(TwitterAccount, [{
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
  }]);

  return TwitterAccount;
}(_RESTModel2.default);

exports.default = TwitterAccount;

_defineProperty(TwitterAccount, "ModelName", "TwitterAccount");