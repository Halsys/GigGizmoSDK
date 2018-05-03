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
			return this.document.version || null;
		},
		set: function set(value) {
			this.document.version = value;
			this.document.dateModified = Date.now();
		}
	}, {
		key: "userId",
		get: function get() {
			return this.document.userId || null;
		},
		set: function set(value) {
			this.document.userId = value;
			this.document.dateModified = Date.now();
		}
	}, {
		key: "stack",
		get: function get() {
			return this.document.stack || null;
		},
		set: function set(value) {
			this.document.stack = value;
			this.document.dateModified = Date.now();
		}
	}, {
		key: "message",
		get: function get() {
			return this.document.message || null;
		},
		set: function set(value) {
			this.document.message = value;
			this.document.dateModified = Date.now();
		}
	}, {
		key: "name",
		get: function get() {
			return this.document.name || null;
		},
		set: function set(value) {
			this.document.name = value;
			this.document.dateModified = Date.now();
		}
	}, {
		key: "fileName",
		get: function get() {
			return this.document.fileName || null;
		},
		set: function set(value) {
			this.document.fileName = value;
			this.document.dateModified = Date.now();
		}
	}, {
		key: "columnNumber",
		get: function get() {
			return this.document.columnNumber || null;
		},
		set: function set(value) {
			this.document.columnNumber = value;
			this.document.dateModified = Date.now();
		}
	}, {
		key: "lineNumber",
		get: function get() {
			return this.document.lineNumber || null;
		},
		set: function set(value) {
			this.document.lineNumber = value;
			this.document.dateModified = Date.now();
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