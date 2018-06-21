"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _iterator = _interopRequireDefault(require("@babel/runtime/core-js/symbol/iterator"));

var _symbol = _interopRequireDefault(require("@babel/runtime/core-js/symbol"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/core-js/object/define-property"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/core-js/object/get-prototype-of"));

var _create = _interopRequireDefault(require("@babel/runtime/core-js/object/create"));

var _setPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/core-js/object/set-prototype-of"));

var _promise = _interopRequireDefault(require("@babel/runtime/core-js/promise"));

var _RESTModel2 = _interopRequireDefault(require("./RESTModel"));

var _User = _interopRequireDefault(require("./User"));

var _API = _interopRequireDefault(require("./API"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var FacebookAccount =
/*#__PURE__*/
function (_RESTModel) {
  _inherits(FacebookAccount, _RESTModel);

  function FacebookAccount() {
    _classCallCheck(this, FacebookAccount);

    return _possibleConstructorReturn(this, _getPrototypeOf(FacebookAccount).apply(this, arguments));
  }

  _createClass(FacebookAccount, [{
    key: "getUser",
    value: function getUser() {
      return _User.default.getUserById(this.userId);
    }
  }, {
    key: "userIsOwner",
    value: function userIsOwner(user) {
      if (typeof user === "string") return user === this.userId;else if (_typeof(user) === "object" && user) return user._id === this.userId;
      return false;
    }
  }, {
    key: "valid",
    value: function valid() {
      if (!_RESTModel2.default.prototype.valid.call(this)) return false;
      if (!this.userId || typeof this.userId !== "string") return false;
      if (!this.profile || _typeof(this.profile) !== "object") return false;
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
      return new _promise.default(function (resolve, reject) {
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
      return new _promise.default(function (resolve, reject) {
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
      return new _promise.default(function (resolve, reject) {
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

exports.default = FacebookAccount;

_defineProperty(FacebookAccount, "ModelName", "FacebookAccount");