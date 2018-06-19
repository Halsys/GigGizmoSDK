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

var _RESTModel2 = require("./RESTModel");

var _RESTModel3 = _interopRequireDefault(_RESTModel2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
			return this.getField("userId");
		},
		set: function set(value) {
			this.setField("userId", value);
		}
	}, {
		key: "network",
		get: function get() {
			return this.getField("network");
		},
		set: function set(value) {
			this.setField("network", value);
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
		key: "pageId",
		get: function get() {
			return this.getField("pageId");
		},
		set: function set(value) {
			this.setField("pageId", value);
		}
	}, {
		key: "postText",
		get: function get() {
			return this.getField("postText");
		},
		set: function set(value) {
			this.setField("postText", value);
		}
	}, {
		key: "postDate",
		get: function get() {
			return this.getField("postDate");
		},
		set: function set(value) {
			this.setField("postDate", value);
		}
	}, {
		key: "coordinates",
		get: function get() {
			return this.getField("coordinates");
		},
		set: function set(value) {
			this.setField("coordinates", value);
		}
	}, {
		key: "error",
		get: function get() {
			return this.getField("error");
		},
		set: function set(value) {
			this.setField("error", value);
		}
	}, {
		key: "done",
		get: function get() {
			return this.getField("done");
		},
		set: function set(value) {
			this.setField("done", value);
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
}(_RESTModel3.default); /**
                         * Created by corynull on 5/23/17.
                         */


Post.ModelName = "Post";
exports.default = Post;