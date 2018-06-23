"use strict";

exports.__esModule = true;
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/core-js/object/define-property"));

var _create = _interopRequireDefault(require("@babel/runtime/core-js/object/create"));

var _promise = _interopRequireDefault(require("@babel/runtime/core-js/promise"));

var _API = _interopRequireDefault(require("./API"));

var _RESTModel2 = _interopRequireDefault(require("./RESTModel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; (0, _defineProperty2.default)(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = (0, _create.default)(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { (0, _defineProperty2.default)(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Page =
/*#__PURE__*/
function (_RESTModel) {
  _inheritsLoose(Page, _RESTModel);

  function Page() {
    return _RESTModel.apply(this, arguments) || this;
  }

  var _proto = Page.prototype;

  _proto.valid = function valid() {
    if (!_RESTModel2.default.prototype.valid.call(this)) return false;
    if (!this.title) return false;
    if (this.title === "") return false;
    return true;
  };

  _proto.userIsOwner = function userIsOwner(user) {
    if (user && user.valid()) {
      return user._id === this.admin || user.admin;
    }

    return false;
  };

  Page.findMany = function findMany(criteria, token) {
    return _RESTModel2.default.findMany(Page, criteria, token);
  };

  Page.findOne = function findOne(criteria, token) {
    return _RESTModel2.default.findOne(Page, criteria, token);
  };

  Page.findById = function findById(id, token) {
    return _RESTModel2.default.findById(Page, id, token);
  };

  Page.findByLink = function findByLink(link) {
    var _this = this;

    return new _promise.default(function (resolve, reject) {
      var _this2 = this;

      _newArrowCheck(this, _this);

      _API.default.Call("GET", "/API/Link/" + link).then(function (page) {
        _newArrowCheck(this, _this2);

        resolve(new Page(page));
      }.bind(this), reject);
    }.bind(this));
  };

  _createClass(Page, [{
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
  }]);

  return Page;
}(_RESTModel2.default);

exports.default = Page;

_defineProperty(Page, "ModelName", "Page");