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

var _API = require("./API");

var _API2 = _interopRequireDefault(_API);

var _RESTModel2 = require("./RESTModel");

var _RESTModel3 = _interopRequireDefault(_RESTModel2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by corynull on 8/1/17.
 */

var Page = function (_RESTModel) {
  (0, _inherits3.default)(Page, _RESTModel);

  function Page() {
    (0, _classCallCheck3.default)(this, Page);
    return (0, _possibleConstructorReturn3.default)(this, (Page.__proto__ || Object.getPrototypeOf(Page)).apply(this, arguments));
  }

  (0, _createClass3.default)(Page, [{
    key: "valid",
    value: function valid() {
      if (!_RESTModel3.default.prototype.valid.call(this)) return false;
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
      return _RESTModel3.default.findMany(Page, criteria, token);
    }
  }, {
    key: "findOne",
    value: function findOne(criteria, token) {
      return _RESTModel3.default.findOne(Page, criteria, token);
    }
  }, {
    key: "findById",
    value: function findById(id, token) {
      return _RESTModel3.default.findById(Page, id, token);
    }
  }, {
    key: "findByLink",
    value: function findByLink(link) {
      return new Promise(function (resolve, reject) {
        _API2.default.Call("GET", "/API/Link/" + link).then(function (page) {
          resolve(new Page(page));
        }, reject);
      });
    }
  }]);
  return Page;
}(_RESTModel3.default);

Page.ModelName = "Page";
exports.default = Page;