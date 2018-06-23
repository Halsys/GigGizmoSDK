"use strict";

exports.__esModule = true;
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/core-js/object/define-property"));

var _create = _interopRequireDefault(require("@babel/runtime/core-js/object/create"));

var _RESTModel2 = _interopRequireDefault(require("./RESTModel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; (0, _defineProperty2.default)(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = (0, _create.default)(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { (0, _defineProperty2.default)(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Post =
/*#__PURE__*/
function (_RESTModel) {
  _inheritsLoose(Post, _RESTModel);

  function Post() {
    return _RESTModel.apply(this, arguments) || this;
  }

  var _proto = Post.prototype;

  _proto.valid = function valid() {
    if (!_RESTModel2.default.prototype.valid.call(this)) return false;
    return true;
  };

  _proto.canSave = function canSave() {
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
  };

  _proto.userIsOwner = function userIsOwner(user) {
    if (user && user.valid()) {
      return user._id === this.userId;
    }

    return false;
  };

  Post.findById = function findById(id, token) {
    return _RESTModel2.default.findById(Post, id, token);
  };

  Post.getAllOwned = function getAllOwned(token) {
    return _RESTModel2.default.findMany(Post, null, token);
  };

  Post.findMany = function findMany(criteria, token) {
    return _RESTModel2.default.findMany(Post, criteria, token);
  };

  _createClass(Post, [{
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
  }]);

  return Post;
}(_RESTModel2.default);

exports.default = Post;

_defineProperty(Post, "ModelName", "Post");