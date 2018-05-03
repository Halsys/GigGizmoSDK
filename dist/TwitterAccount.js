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

var TwitterAccount = function (_RESTModel) {
	(0, _inherits3.default)(TwitterAccount, _RESTModel);

	function TwitterAccount() {
		(0, _classCallCheck3.default)(this, TwitterAccount);
		return (0, _possibleConstructorReturn3.default)(this, (TwitterAccount.__proto__ || Object.getPrototypeOf(TwitterAccount)).apply(this, arguments));
	}

	(0, _createClass3.default)(TwitterAccount, [{
		key: "getUser",
		value: function getUser() {
			return _User2.default.getUserById(this.userId);
		}
	}, {
		key: "userIsOwner",
		value: function userIsOwner(user) {
			return user._id === this.userId;
		}
	}, {
		key: "valid",
		value: function valid() {
			if (!_RESTModel3.default.prototype.valid.call(this)) return false;
			if (!this.userId || typeof this.userId !== "string") return false;
			if (!this.profile || (0, _typeof3.default)(this.profile) !== "object") return false;
			return true;
		}
	}, {
		key: "userId",
		get: function get() {
			return this.document.userId || null;
		},
		set: function set(value) {
			this.document.userId = value;
			this.document.dateModified = Date.now();
		}
	}, {
		key: "accessToken",
		get: function get() {
			return this.document.accessToken || null;
		},
		set: function set(value) {
			this.document.accessToken = value;
			this.document.dateModified = Date.now();
		}
	}, {
		key: "tokenSecret",
		get: function get() {
			return this.document.tokenSecret || null;
		},
		set: function set(value) {
			this.document.tokenSecret = value;
			this.document.dateModified = Date.now();
		}
	}, {
		key: "profile",
		get: function get() {
			return this.document.profile || null;
		},
		set: function set(value) {
			this.document.profile = value;
			this.document.dateModified = Date.now();
		}
	}], [{
		key: "findById",
		value: function findById(id) {
			return new Promise(function (resolve, reject) {
				if (typeof id === "string" && id !== "") _API2.default.Call("GET", "/API/TwitterAccount/" + id).then(function (response) {
					var account = response || null;
					if (account) resolve(new TwitterAccount(account));else reject(new Error(account + " returned"));
				}, reject);else resolve(null);
			});
		}
	}]);
	return TwitterAccount;
}(_RESTModel3.default); /**
                         * Created by corynull on 5/17/17.
                         */

TwitterAccount.ModelName = "TwitterAccount";
exports.default = TwitterAccount;