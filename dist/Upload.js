"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _iterator = _interopRequireDefault(require("@babel/runtime/core-js/symbol/iterator"));

var _symbol = _interopRequireDefault(require("@babel/runtime/core-js/symbol"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/core-js/object/define-property"));

var _getOwnPropertyDescriptor = _interopRequireDefault(require("@babel/runtime/core-js/object/get-own-property-descriptor"));

var _get2 = _interopRequireDefault(require("@babel/runtime/core-js/reflect/get"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/core-js/object/get-prototype-of"));

var _create = _interopRequireDefault(require("@babel/runtime/core-js/object/create"));

var _setPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/core-js/object/set-prototype-of"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

require("regenerator-runtime/runtime");

var _promise = _interopRequireDefault(require("@babel/runtime/core-js/promise"));

var _from = _interopRequireDefault(require("@babel/runtime/core-js/array/from"));

var _User = _interopRequireDefault(require("./User"));

var _RESTModel2 = _interopRequireDefault(require("./RESTModel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new _promise.default(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { _promise.default.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

function _typeof(obj) { if (typeof _symbol.default === "function" && typeof _iterator.default === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof _symbol.default === "function" && obj.constructor === _symbol.default && obj !== _symbol.default.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; (0, _defineProperty2.default)(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && _get2.default) { _get = _get2.default; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = (0, _getOwnPropertyDescriptor.default)(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = _setPrototypeOf2.default ? _getPrototypeOf2.default : function _getPrototypeOf(o) { return o.__proto__ || (0, _getPrototypeOf2.default)(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = (0, _create.default)(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = _setPrototypeOf2.default || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { (0, _defineProperty2.default)(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Upload =
/*#__PURE__*/
function (_RESTModel) {
  _inherits(Upload, _RESTModel);

  function Upload() {
    _classCallCheck(this, Upload);

    return _possibleConstructorReturn(this, _getPrototypeOf(Upload).apply(this, arguments));
  }

  _createClass(Upload, [{
    key: "getOwners",
    value: function getOwners(token) {
      var owners = (0, _from.default)(this.owners);
      if (owners.length !== 0) return _User.default.findMany({
        _id: owners
      }, token);
      return _promise.default.resolve([]);
    }
  }, {
    key: "userIsOwner",
    value: function userIsOwner(user) {
      var _this = this;

      if (Array.isArray(this.owners)) {
        var userId = null;
        if (typeof user === "string") userId = user;else if (_typeof(user) === "object" && user) userId = user._id;
        return this.owners.find(function (id) {
          _newArrowCheck(this, _this);

          return id === userId;
        }.bind(this)) !== undefined;
      }

      return false;
    }
  }, {
    key: "valid",
    value: function valid() {
      if (!_get(_getPrototypeOf(Upload.prototype), "valid", this).call(this)) return false;
      if (!this.title) return false;
      if (!this.description) return false;
      if (!this.fileData) return false;
      if (!this.fileName) return false;
      if (!Array.isArray(this.owners)) return false;
      if (this.owners.length === 0) return false;
      return true;
    }
  }, {
    key: "fileName",
    get: function get() {
      return this.getField("fileName");
    },
    set: function set(value) {
      this.setField("fileName", value);
    }
  }, {
    key: "fileData",
    get: function get() {
      return this.getField("fileData");
    },
    set: function set(value) {
      this.setField("fileData", value);
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
    key: "description",
    get: function get() {
      return this.getField("description");
    },
    set: function set(value) {
      this.setField("description", value);
    }
  }, {
    key: "owners",
    get: function get() {
      return this.getField("owners");
    },
    set: function set(value) {
      this.setField("owners", value);
    }
  }], [{
    key: "uploadFile",
    value: function () {
      var _uploadFile = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(dataUrl, fileName, token) {
        var upload;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                upload = new Upload({
                  fileData: dataUrl,
                  fileName: fileName
                });
                _context.next = 3;
                return upload.save(token, true);

              case 3:
                upload = _context.sent;
                return _context.abrupt("return", upload);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function uploadFile(_x, _x2, _x3) {
        return _uploadFile.apply(this, arguments);
      };
    }()
  }, {
    key: "findById",
    value: function findById(id, token) {
      return _RESTModel2.default.findById(Upload, id, token, true);
    }
  }, {
    key: "findMany",
    value: function findMany(criteria, token) {
      return _RESTModel2.default.findMany(Upload, criteria, token, true);
    }
  }, {
    key: "getAllOwned",
    value: function getAllOwned(token) {
      return _RESTModel2.default.findMany(Upload, null, token, true);
    }
  }]);

  return Upload;
}(_RESTModel2.default);

exports.default = Upload;

_defineProperty(Upload, "ModelName", "Upload");