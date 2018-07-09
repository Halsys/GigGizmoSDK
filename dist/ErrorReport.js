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

var _index = require("./index");

var _RESTModel2 = _interopRequireDefault(require("./RESTModel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var ErrorReport =
/*#__PURE__*/
function (_RESTModel) {
  _inherits(ErrorReport, _RESTModel);

  function ErrorReport() {
    _classCallCheck(this, ErrorReport);

    return _possibleConstructorReturn(this, _getPrototypeOf(ErrorReport).apply(this, arguments));
  }

  _createClass(ErrorReport, [{
    key: "valid",
    value: function valid() {
      if (!_get(_getPrototypeOf(ErrorReport.prototype), "valid", this).call(this)) return false; // TODO: do more tests...

      return true;
    }
  }, {
    key: "version",
    get: function get() {
      return this.getField("version");
    },
    set: function set(value) {
      this.setField("version", value);
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
    key: "stack",
    get: function get() {
      return this.getField("stack");
    },
    set: function set(value) {
      this.setField("stack", value);
    }
  }, {
    key: "message",
    get: function get() {
      return this.getField("message");
    },
    set: function set(value) {
      this.setField("message", value);
    }
  }, {
    key: "name",
    get: function get() {
      return this.getField("name");
    },
    set: function set(value) {
      this.setField("name", value);
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
    key: "columnNumber",
    get: function get() {
      return this.getField("columnNumber");
    },
    set: function set(value) {
      this.setField("columnNumber", value);
    }
  }, {
    key: "lineNumber",
    get: function get() {
      return this.getField("lineNumber");
    },
    set: function set(value) {
      this.setField("lineNumber", value);
    }
  }], [{
    key: "findById",
    value: function findById(id, token) {
      return _RESTModel2.default.findById("ErrorReport", id, token);
    }
  }, {
    key: "findMany",
    value: function findMany(criteria, token) {
      return _RESTModel2.default.findMany("ErrorReport", criteria, token);
    }
  }]);

  return ErrorReport;
}(_RESTModel2.default);

exports.default = ErrorReport;

_defineProperty(ErrorReport, "ModelName", "ErrorReport");