"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

var _RESTModel2 = require("./RESTModel");

var _RESTModel3 = _interopRequireDefault(_RESTModel2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by corynull on 5/23/17.
 */
var Post = function (_RESTModel) {
	(0, _inherits3.default)(Post, _RESTModel);

	function Post() {
		(0, _classCallCheck3.default)(this, Post);
		return (0, _possibleConstructorReturn3.default)(this, (Post.__proto__ || Object.getPrototypeOf(Post)).apply(this, arguments));
	}

	(0, _createClass3.default)(Post, [{
		key: "valid",
		value: function valid() {
			if (!_RESTModel3.default.prototype.valid.call(this)) return false;
			return true;
		}
	}, {
		key: "canSave",
		value: function canSave() {
			if (!this.postDate) {
				return false;
			}
			if (!this.postText || this.postText === "") {
				return false;
			}
			if (!this.network) {
				// TODO: Do network validation
				return false;
			}
			return true;
		}
	}, {
		key: "userIsOwner",
		value: function userIsOwner(user) {
			if (user && user.valid()) {
				return user._id === this.userId;
			}
			return false;
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
		key: "network",
		get: function get() {
			return this.document.network || null;
		},
		set: function set(value) {
			this.document.network = value;
			this.document.dateModified = Date.now();
		}
	}, {
		key: "accountId",
		get: function get() {
			return this.document.accountId || null;
		},
		set: function set(value) {
			this.document.accountId = value;
			this.document.dateModified = Date.now();
		}
	}, {
		key: "pageId",
		get: function get() {
			return this.document.pageId || null;
		},
		set: function set(value) {
			this.document.pageId = value;
			this.document.dateModified = Date.now();
		}
	}, {
		key: "postText",
		get: function get() {
			return this.document.postText || null;
		},
		set: function set(value) {
			this.document.postText = value;
			this.document.dateModified = Date.now();
		}
	}, {
		key: "postDate",
		get: function get() {
			return this.document.postDate ? (0, _moment2.default)(this.document.postDate) : null;
		},
		set: function set(value) {
			this.document.postDate = (0, _moment2.default)(value).toISOString();
			this.document.dateModified = Date.now();
		}
	}, {
		key: "coordinates",
		get: function get() {
			return this.document.coordinates || null;
		},
		set: function set(value) {
			this.document.coordinates = value;
			this.document.dateModified = Date.now();
		}
	}, {
		key: "error",
		get: function get() {
			return this.document.error || null;
		},
		set: function set(value) {
			this.document.error = value;
			this.document.dateModified = Date.now();
		}
	}, {
		key: "done",
		get: function get() {
			return this.document.done || false;
		},
		set: function set(value) {
			this.document.done = value;
			this.document.dateModified = Date.now();
		}
	}], [{
		key: "findById",
		value: function findById(id, token) {
			return _RESTModel3.default.findById(Post, id, token);
		}
	}, {
		key: "getAllOwned",
		value: function getAllOwned(token) {
			return _RESTModel3.default.findMany(Post, null, token);
		}
	}, {
		key: "findMany",
		value: function findMany(criteria, token) {
			return _RESTModel3.default.findMany(Post, criteria, token);
		}
	}]);
	return Post;
}(_RESTModel3.default);

Post.ModelName = "Post";
exports.default = Post;