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

var _get2 = require("babel-runtime/helpers/get");

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _RESTModel2 = require("./RESTModel");

var _RESTModel3 = _interopRequireDefault(_RESTModel2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ErrorReport = function (_RESTModel) {
	(0, _inherits3.default)(ErrorReport, _RESTModel);

	function ErrorReport() {
		(0, _classCallCheck3.default)(this, ErrorReport);
		return (0, _possibleConstructorReturn3.default)(this, (ErrorReport.__proto__ || Object.getPrototypeOf(ErrorReport)).apply(this, arguments));
	}

	(0, _createClass3.default)(ErrorReport, [{
		key: "valid",
		value: function valid() {
			if (!(0, _get3.default)(ErrorReport.prototype.__proto__ || Object.getPrototypeOf(ErrorReport.prototype), "valid", this).call(this)) return false;
			// TODO: do more tests...
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
			return _RESTModel3.default.findById(ErrorReport, id, token);
		}
	}, {
		key: "findMany",
		value: function findMany(criteria, token) {
			return _RESTModel3.default.findMany(ErrorReport, criteria, token);
		}
	}]);
	return ErrorReport;
}(_RESTModel3.default); /**
                         * Created by corynull on Jan 8 2018 8:58:54 PM.
                         */

ErrorReport.ModelName = "ErrorReport";
exports.default = ErrorReport;