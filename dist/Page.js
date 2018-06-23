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

var _API = _interopRequireDefault(require("./API"));

var _RESTModel2 = _interopRequireDefault(require("./RESTModel"));

/**
 * Created by corynull on 8/1/17.
 */
var Page =
/*#__PURE__*/
function (_RESTModel) {
  (0, _inherits2.default)(Page, _RESTModel);

  function Page() {
    (0, _classCallCheck2.default)(this, Page);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Page).apply(this, arguments));
  }

  (0, _createClass2.default)(Page, [{
    key: "valid",
    value: function valid() {
      if (!_RESTModel2.default.prototype.valid.call(this)) return false;
      if (!this.title) return false;
      if (this.title === "") return false;
      return true;
    }
  }, {
    key: "userIsOwner",
    value: function userIsOwner(user) {
      if (user && user.valid()) {
        return user._id === this.admin || user.admin;
      }

      return false;
    }
  }, {
    key: "data",
    get: function get() {
      return this.getField("data");
    },
    set: function set(value) {
      this.setField("data", value);
    }
  }, {
    key: "metadata",
    get: function get() {
      return this.getField("metadata");
    },
    set: function set(value) {
      this.setField("metadata", value);
    }
  }, {
    key: "title",
    get: function get() {
      return this.getField("title");
    },
    set: function set(value) {
      this.setField("title", value);
    }
  }, {
    key: "link",
    get: function get() {
      return this.getField("link");
    },
    set: function set(value) {
      this.setField("link", value);
    }
  }, {
    key: "visits",
    get: function get() {
      return this.getField("visits") || 0;
    },
    set: function set(value) {
      this.setField("visits", value);
    }
  }, {
    key: "revisions",
    get: function get() {
      return this.getField("revisions") || 0;
    },
    set: function set(value) {
      this.setField("revisions", value);
    }
  }, {
    key: "hide",
    get: function get() {
      return typeof this.document.hide !== "undefined" ? this.document.hide : true;
    },
    set: function set(value) {
      this.setField("hide", value);
    }
  }, {
    key: "blog",
    get: function get() {
      return typeof this.document.blog !== "undefined" ? this.document.blog : false;
    },
    set: function set(value) {
      this.setField("blog", value);
    }
  }, {
    key: "doc",
    get: function get() {
      return typeof this.document.doc !== "undefined" ? this.document.doc : false;
    },
    set: function set(value) {
      this.setField("doc", value);
    }
  }, {
    key: "admin",
    get: function get() {
      return this.getField("admin");
    },
    set: function set(value) {
      this.setField("admin", value);
    }
  }], [{
    key: "findMany",
    value: function findMany(criteria, token) {
      return _RESTModel2.default.findMany(Page, criteria, token);
    }
  }, {
    key: "findOne",
    value: function findOne(criteria, token) {
      return _RESTModel2.default.findOne(Page, criteria, token);
    }
  }, {
    key: "findById",
    value: function findById(id, token) {
      return _RESTModel2.default.findById(Page, id, token);
    }
  }, {
    key: "findByLink",
    value: function findByLink(link) {
      return new Promise(function (resolve, reject) {
        _API.default.Call("GET", "/API/Link/".concat(link)).then(function (page) {
          resolve(new Page(page));
        }, reject);
      });
    }
  }]);
  return Page;
}(_RESTModel2.default);

exports.default = Page;
(0, _defineProperty2.default)(Page, "ModelName", "Page");