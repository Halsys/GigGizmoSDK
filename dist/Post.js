"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _RESTModel2 = _interopRequireDefault(require("./RESTModel"));

/**
 * Created by corynull on 5/23/17.
 */
var Post =
/*#__PURE__*/
function (_RESTModel) {
  (0, _inherits2.default)(Post, _RESTModel);

  function Post() {
    (0, _classCallCheck2.default)(this, Post);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Post).apply(this, arguments));
  }

  (0, _createClass2.default)(Post, [{
    key: "valid",
    value: function valid() {
      if (!_RESTModel2.default.prototype.valid.call(this)) return false;
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
      return _RESTModel2.default.findById(Post, id, token);
    }
  }, {
    key: "getAllOwned",
    value: function getAllOwned(token) {
      return _RESTModel2.default.findMany(Post, null, token);
    }
  }, {
    key: "findMany",
    value: function findMany(criteria, token) {
      return _RESTModel2.default.findMany(Post, criteria, token);
    }
  }]);
  return Post;
}(_RESTModel2.default);

exports.default = Post;
(0, _defineProperty2.default)(Post, "ModelName", "Post");