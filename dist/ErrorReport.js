(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@babel/runtime/helpers/classCallCheck", "@babel/runtime/helpers/createClass", "@babel/runtime/helpers/possibleConstructorReturn", "@babel/runtime/helpers/getPrototypeOf", "@babel/runtime/helpers/get", "@babel/runtime/helpers/inherits", "./RESTModel"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@babel/runtime/helpers/classCallCheck"), require("@babel/runtime/helpers/createClass"), require("@babel/runtime/helpers/possibleConstructorReturn"), require("@babel/runtime/helpers/getPrototypeOf"), require("@babel/runtime/helpers/get"), require("@babel/runtime/helpers/inherits"), require("./RESTModel"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.classCallCheck, global.createClass, global.possibleConstructorReturn, global.getPrototypeOf, global.get, global.inherits, global.RESTModel);
    global.ErrorReport = mod.exports;
  }
})(this, function (_exports, _classCallCheck2, _createClass2, _possibleConstructorReturn2, _getPrototypeOf2, _get2, _inherits2, _RESTModel2) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _createClass2 = _interopRequireDefault(_createClass2);
  _possibleConstructorReturn2 = _interopRequireDefault(_possibleConstructorReturn2);
  _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf2);
  _get2 = _interopRequireDefault(_get2);
  _inherits2 = _interopRequireDefault(_inherits2);
  _RESTModel2 = _interopRequireDefault(_RESTModel2);

  /**
   * Created by corynull on Jan 8 2018 8:58:54 PM.
   */
  var ErrorReport =
  /*#__PURE__*/
  function (_RESTModel) {
    (0, _inherits2.default)(ErrorReport, _RESTModel);

    function ErrorReport() {
      (0, _classCallCheck2.default)(this, ErrorReport);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ErrorReport).apply(this, arguments));
    }

    (0, _createClass2.default)(ErrorReport, [{
      key: "valid",
      value: function valid() {
        if (!(0, _get2.default)((0, _getPrototypeOf2.default)(ErrorReport.prototype), "valid", this).call(this)) return false; // TODO: do more tests...

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
        return _RESTModel2.default.findById(ErrorReport, id, token);
      }
    }, {
      key: "findMany",
      value: function findMany(criteria, token) {
        return _RESTModel2.default.findMany(ErrorReport, criteria, token);
      }
    }]);
    return ErrorReport;
  }(_RESTModel2.default);

  _exports.default = ErrorReport;
  ErrorReport.ModelName = "ErrorReport";
});