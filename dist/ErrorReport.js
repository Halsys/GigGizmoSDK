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

var ErrorReport =
/*#__PURE__*/
function (_RESTModel) {
  _inheritsLoose(ErrorReport, _RESTModel);

  function ErrorReport() {
    return _RESTModel.apply(this, arguments) || this;
  }

  var _proto = ErrorReport.prototype;

  _proto.valid = function valid() {
    if (!_RESTModel.prototype.valid.call(this)) return false; // TODO: do more tests...

    return true;
  };

  ErrorReport.findById = function findById(id, token) {
    return _RESTModel2.default.findById(ErrorReport, id, token);
  };

  ErrorReport.findMany = function findMany(criteria, token) {
    return _RESTModel2.default.findMany(ErrorReport, criteria, token);
  };

  _createClass(ErrorReport, [{
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
  }]);

  return ErrorReport;
}(_RESTModel2.default);

exports.default = ErrorReport;

_defineProperty(ErrorReport, "ModelName", "ErrorReport");