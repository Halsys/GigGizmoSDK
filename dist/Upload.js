"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

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

var _User = require("./User");

var _User2 = _interopRequireDefault(_User);

var _RESTModel2 = require("./RESTModel");

var _RESTModel3 = _interopRequireDefault(_RESTModel2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by corynull on 4/10/17.
 */

var Upload = function (_RESTModel) {
	(0, _inherits3.default)(Upload, _RESTModel);

	function Upload() {
		(0, _classCallCheck3.default)(this, Upload);
		return (0, _possibleConstructorReturn3.default)(this, (Upload.__proto__ || Object.getPrototypeOf(Upload)).apply(this, arguments));
	}

	(0, _createClass3.default)(Upload, [{
		key: "getOwners",
		value: function getOwners(token) {
			var owners = Array.from(this.owners);
			if (owners.length !== 0) return _User2.default.findMany({
				_id: owners
			}, token);
			return Promise.resolve([]);
		}
	}, {
		key: "userIsOwner",
		value: function userIsOwner(user) {
			if (Array.isArray(this.owners)) {
				var userId = null;
				if (typeof user === "string") userId = user;else if ((typeof user === "undefined" ? "undefined" : (0, _typeof3.default)(user)) === "object" && user) userId = user._id;
				return this.owners.find(function (id) {
					return id === userId;
				}) !== undefined;
			}
			return false;
		}
	}, {
		key: "valid",
		value: function valid() {
			if (!(0, _get3.default)(Upload.prototype.__proto__ || Object.getPrototypeOf(Upload.prototype), "valid", this).call(this)) return false;
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
			return this.document.fileName || null;
		},
		set: function set(value) {
			this.document.fileName = value;
			this.document.dateModified = Date.now();
		}
	}, {
		key: "fileData",
		get: function get() {
			return this.document.fileData || null;
		},
		set: function set(value) {
			this.document.fileData = value;
			this.document.dateModified = Date.now();
		}
	}, {
		key: "title",
		get: function get() {
			return this.document.title || null;
		},
		set: function set(value) {
			this.document.title = value;
			this.document.dateModified = Date.now();
		}
	}, {
		key: "description",
		get: function get() {
			return this.document.description || null;
		},
		set: function set(value) {
			this.document.description = value;
			this.document.dateModified = Date.now();
		}
	}, {
		key: "owners",
		get: function get() {
			return this.document.owners || [];
		},
		set: function set(value) {
			this.document.owners = value || [];
			this.document.dateModified = Date.now();
		}
	}], [{
		key: "uploadFile",
		value: function () {
			var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(dataUrl, fileName, token) {
				var upload;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								upload = new Upload({ fileData: dataUrl, fileName: fileName });
								_context.next = 3;
								return upload.save(token);

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

			function uploadFile(_x, _x2, _x3) {
				return _ref.apply(this, arguments);
			}

			return uploadFile;
		}()
	}, {
		key: "findById",
		value: function findById(id, token) {
			return _RESTModel3.default.findById(Upload, id, token);
		}
	}, {
		key: "findMany",
		value: function findMany(criteria, token) {
			return _RESTModel3.default.findMany(Upload, criteria, token);
		}
	}, {
		key: "getAllOwned",
		value: function getAllOwned(token) {
			return _RESTModel3.default.findMany(Upload, null, token);
		}
	}]);
	return Upload;
}(_RESTModel3.default);

Upload.ModelName = "Upload";
exports.default = Upload;