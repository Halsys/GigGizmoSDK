(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@babel/runtime/core-js/symbol/iterator", "@babel/runtime/core-js/symbol", "@babel/runtime/core-js/object/define-property", "@babel/runtime/core-js/object/get-prototype-of", "@babel/runtime/core-js/object/create", "@babel/runtime/core-js/object/set-prototype-of", "@babel/runtime/core-js/promise", "./API", "./RESTModel"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@babel/runtime/core-js/symbol/iterator"), require("@babel/runtime/core-js/symbol"), require("@babel/runtime/core-js/object/define-property"), require("@babel/runtime/core-js/object/get-prototype-of"), require("@babel/runtime/core-js/object/create"), require("@babel/runtime/core-js/object/set-prototype-of"), require("@babel/runtime/core-js/promise"), require("./API"), require("./RESTModel"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.iterator, global.symbol, global.defineProperty, global.getPrototypeOf, global.create, global.setPrototypeOf, global.promise, global.API, global.RESTModel);
    global.Page = mod.exports;
  }
})(this, function (_exports, _iterator, _symbol, _defineProperty2, _getPrototypeOf2, _create, _setPrototypeOf2, _promise, _API, _RESTModel2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _iterator = _interopRequireDefault(_iterator);
  _symbol = _interopRequireDefault(_symbol);
  _defineProperty2 = _interopRequireDefault(_defineProperty2);
  _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf2);
  _create = _interopRequireDefault(_create);
  _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf2);
  _promise = _interopRequireDefault(_promise);
  _API = _interopRequireDefault(_API);
  _RESTModel2 = _interopRequireDefault(_RESTModel2);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _typeof(obj) { if (typeof _symbol.default === "function" && typeof _iterator.default === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof _symbol.default === "function" && obj.constructor === _symbol.default && obj !== _symbol.default.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; (0, _defineProperty2.default)(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _getPrototypeOf(o) { _getPrototypeOf = _setPrototypeOf2.default ? _getPrototypeOf2.default : function _getPrototypeOf(o) { return o.__proto__ || (0, _getPrototypeOf2.default)(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = (0, _create.default)(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = _setPrototypeOf2.default || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _defineProperty(obj, key, value) { if (key in obj) { (0, _defineProperty2.default)(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var Page =
  /*#__PURE__*/
  function (_RESTModel) {
    _inherits(Page, _RESTModel);

    function Page() {
      _classCallCheck(this, Page);

      return _possibleConstructorReturn(this, _getPrototypeOf(Page).apply(this, arguments));
    }

    _createClass(Page, [{
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
        var _this = this;

        return new _promise.default(function (resolve, reject) {
          var _this2 = this;

          _newArrowCheck(this, _this);

          _API.default.Call("GET", "/API/Link/".concat(link)).then(function (page) {
            _newArrowCheck(this, _this2);

            resolve(new Page(page));
          }.bind(this), reject);
        }.bind(this));
      }
    }]);

    return Page;
  }(_RESTModel2.default);

  _exports.default = Page;

  _defineProperty(Page, "ModelName", "Page");
});