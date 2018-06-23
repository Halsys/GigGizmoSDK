(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@babel/runtime/regenerator", "@babel/runtime/helpers/asyncToGenerator", "@babel/runtime/helpers/typeof", "@babel/runtime/helpers/classCallCheck", "@babel/runtime/helpers/createClass", "@babel/runtime/helpers/possibleConstructorReturn", "@babel/runtime/helpers/getPrototypeOf", "@babel/runtime/helpers/get", "@babel/runtime/helpers/inherits", "./User", "./RESTModel"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@babel/runtime/regenerator"), require("@babel/runtime/helpers/asyncToGenerator"), require("@babel/runtime/helpers/typeof"), require("@babel/runtime/helpers/classCallCheck"), require("@babel/runtime/helpers/createClass"), require("@babel/runtime/helpers/possibleConstructorReturn"), require("@babel/runtime/helpers/getPrototypeOf"), require("@babel/runtime/helpers/get"), require("@babel/runtime/helpers/inherits"), require("./User"), require("./RESTModel"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.regenerator, global.asyncToGenerator, global._typeof, global.classCallCheck, global.createClass, global.possibleConstructorReturn, global.getPrototypeOf, global.get, global.inherits, global.User, global.RESTModel);
    global.Upload = mod.exports;
  }
})(this, function (_exports, _regenerator, _asyncToGenerator2, _typeof2, _classCallCheck2, _createClass2, _possibleConstructorReturn2, _getPrototypeOf2, _get2, _inherits2, _User, _RESTModel2) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _regenerator = _interopRequireDefault(_regenerator);
  _asyncToGenerator2 = _interopRequireDefault(_asyncToGenerator2);
  _typeof2 = _interopRequireDefault(_typeof2);
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _createClass2 = _interopRequireDefault(_createClass2);
  _possibleConstructorReturn2 = _interopRequireDefault(_possibleConstructorReturn2);
  _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf2);
  _get2 = _interopRequireDefault(_get2);
  _inherits2 = _interopRequireDefault(_inherits2);
  _User = _interopRequireDefault(_User);
  _RESTModel2 = _interopRequireDefault(_RESTModel2);

  /**
   * Created by corynull on 4/10/17.
   */
  var Upload =
  /*#__PURE__*/
  function (_RESTModel) {
    (0, _inherits2.default)(Upload, _RESTModel);

    function Upload() {
      (0, _classCallCheck2.default)(this, Upload);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Upload).apply(this, arguments));
    }

    (0, _createClass2.default)(Upload, [{
      key: "getOwners",
      value: function getOwners(token) {
        var owners = Array.from(this.owners);
        if (owners.length !== 0) return _User.default.findMany({
          _id: owners
        }, token);
        return Promise.resolve([]);
      }
    }, {
      key: "userIsOwner",
      value: function userIsOwner(user) {
        if (Array.isArray(this.owners)) {
          var userId = null;
          if (typeof user === "string") userId = user;else if ((0, _typeof2.default)(user) === "object" && user) userId = user._id;
          return this.owners.find(function (id) {
            return id === userId;
          }) !== undefined;
        }

        return false;
      }
    }, {
      key: "valid",
      value: function valid() {
        if (!(0, _get2.default)((0, _getPrototypeOf2.default)(Upload.prototype), "valid", this).call(this)) return false;
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
        var _uploadFile = (0, _asyncToGenerator2.default)(
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

  _exports.default = Upload;
  Upload.ModelName = "Upload";
});