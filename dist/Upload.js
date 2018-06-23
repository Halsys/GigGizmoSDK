"use strict";

exports.__esModule = true;
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/core-js/object/define-property"));

var _create = _interopRequireDefault(require("@babel/runtime/core-js/object/create"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _promise = _interopRequireDefault(require("@babel/runtime/core-js/promise"));

var _from = _interopRequireDefault(require("@babel/runtime/core-js/array/from"));

var _User = _interopRequireDefault(require("./User"));

var _RESTModel2 = _interopRequireDefault(require("./RESTModel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new _promise.default(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { _promise.default.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; (0, _defineProperty2.default)(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = (0, _create.default)(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { (0, _defineProperty2.default)(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Upload =
/*#__PURE__*/
function (_RESTModel) {
  _inheritsLoose(Upload, _RESTModel);

  function Upload() {
    return _RESTModel.apply(this, arguments) || this;
  }

  var _proto = Upload.prototype;

  _proto.getOwners = function getOwners(token) {
    var owners = (0, _from.default)(this.owners);
    if (owners.length !== 0) return _User.default.findMany({
      _id: owners
    }, token);
    return _promise.default.resolve([]);
  };

  _proto.userIsOwner = function userIsOwner(user) {
    var _this = this;

    if (Array.isArray(this.owners)) {
      var userId = null;
      if (typeof user === "string") userId = user;else if (typeof user === "object" && user) userId = user._id;
      return this.owners.find(function (id) {
        _newArrowCheck(this, _this);

        return id === userId;
      }.bind(this)) !== undefined;
    }

    return false;
  };

  _proto.valid = function valid() {
    if (!_RESTModel.prototype.valid.call(this)) return false;
    if (!this.title) return false;
    if (!this.description) return false;
    if (!this.fileData) return false;
    if (!this.fileName) return false;
    if (!Array.isArray(this.owners)) return false;
    if (this.owners.length === 0) return false;
    return true;
  };

  Upload.uploadFile =
  /*#__PURE__*/
  function () {
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
  }();

  Upload.findById = function findById(id, token) {
    return _RESTModel2.default.findById(Upload, id, token, true);
  };

  Upload.findMany = function findMany(criteria, token) {
    return _RESTModel2.default.findMany(Upload, criteria, token, true);
  };

  Upload.getAllOwned = function getAllOwned(token) {
    return _RESTModel2.default.findMany(Upload, null, token, true);
  };

  _createClass(Upload, [{
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
  }]);

  return Upload;
}(_RESTModel2.default);

exports.default = Upload;

_defineProperty(Upload, "ModelName", "Upload");