"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _RESTModel2 = require("./RESTModel");

var _RESTModel3 = _interopRequireDefault(_RESTModel2);

var _User = require("./User");

var _User2 = _interopRequireDefault(_User);

var _API = require("./API");

var _API2 = _interopRequireDefault(_API);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FacebookAccount = function (_RESTModel) {
	(0, _inherits3.default)(FacebookAccount, _RESTModel);

	function FacebookAccount() {
		(0, _classCallCheck3.default)(this, FacebookAccount);
		return (0, _possibleConstructorReturn3.default)(this, (FacebookAccount.__proto__ || Object.getPrototypeOf(FacebookAccount)).apply(this, arguments));
	}

	(0, _createClass3.default)(FacebookAccount, [{
		key: "getUser",
		value: function getUser() {
			return _User2.default.getUserById(this.userId);
		}
	}, {
		key: "userIsOwner",
		value: function userIsOwner(user) {
			if (typeof user === "string") return user === this.userId;else if ((typeof user === "undefined" ? "undefined" : (0, _typeof3.default)(user)) === "object" && user) return user._id === this.userId;
			return false;
		}
	}, {
		key: "valid",
		value: function valid() {
			if (!_RESTModel3.default.prototype.valid.call(this)) return false;
			if (!this.userId || typeof this.userId !== "string") return false;
			if (!this.profile || (0, _typeof3.default)(this.profile) !== "object") return false;
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
				if (typeof id === "string" && id !== "") _API2.default.Call("GET", "/API/FacebookAccount/" + id, { token: token }).then(function (found) {
					var account = found || null;
					if (account) resolve(new FacebookAccount(account));else reject(new Error(account + " returned"));
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
					_API2.default.Call("GET", "/API/Facebook/Page/Find", {
						name: pageName
					}).then(resolve, reject);
				}
			});
		}
	}, {
		key: "PostToPage",
		value: function PostToPage(format, text, pageId, postDateTime) {
			return new Promise(function (resolve, reject) {
				_API2.default.Call("POST", "/API/Facebook/Page/Post", {
					post_format: format,
					post_text: text,
					fb_page_id: pageId,
					publish_time: postDateTime // .getTime() / 1000
				}).then(resolve, reject);
			});
		}
	}]);
	return FacebookAccount;
}(_RESTModel3.default); /**
                         * Created by corynull on Nov 30 2017 9:08 AM.
                         */

FacebookAccount.ModelName = "FacebookAccount";
exports.default = FacebookAccount;