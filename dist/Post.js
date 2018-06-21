(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@babel/runtime/core-js/symbol/iterator", "@babel/runtime/core-js/symbol", "@babel/runtime/core-js/object/define-property", "@babel/runtime/core-js/object/get-prototype-of", "@babel/runtime/core-js/object/create", "@babel/runtime/core-js/object/set-prototype-of", "./RESTModel"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@babel/runtime/core-js/symbol/iterator"), require("@babel/runtime/core-js/symbol"), require("@babel/runtime/core-js/object/define-property"), require("@babel/runtime/core-js/object/get-prototype-of"), require("@babel/runtime/core-js/object/create"), require("@babel/runtime/core-js/object/set-prototype-of"), require("./RESTModel"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.iterator, global.symbol, global.defineProperty, global.getPrototypeOf, global.create, global.setPrototypeOf, global.RESTModel);
    global.Post = mod.exports;
  }
})(this, function (_exports, _iterator, _symbol, _defineProperty2, _getPrototypeOf2, _create, _setPrototypeOf2, _RESTModel2) {
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
  _RESTModel2 = _interopRequireDefault(_RESTModel2);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _typeof(obj) { if (typeof _symbol.default === "function" && typeof _iterator.default === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof _symbol.default === "function" && obj.constructor === _symbol.default && obj !== _symbol.default.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; (0, _defineProperty2.default)(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _getPrototypeOf(o) { _getPrototypeOf = _setPrototypeOf2.default ? _getPrototypeOf2.default : function _getPrototypeOf(o) { return o.__proto__ || (0, _getPrototypeOf2.default)(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = (0, _create.default)(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = _setPrototypeOf2.default || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _defineProperty(obj, key, value) { if (key in obj) { (0, _defineProperty2.default)(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var Post =
  /*#__PURE__*/
  function (_RESTModel) {
    _inherits(Post, _RESTModel);

    function Post() {
      _classCallCheck(this, Post);

      return _possibleConstructorReturn(this, _getPrototypeOf(Post).apply(this, arguments));
    }

    _createClass(Post, [{
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

  _exports.default = Post;

  _defineProperty(Post, "ModelName", "Post");
});