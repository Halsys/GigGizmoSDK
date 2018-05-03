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

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

var _API = require("./API");

var _API2 = _interopRequireDefault(_API);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RESTModel = function () {
	(0, _createClass3.default)(RESTModel, [{
		key: "ModelName",
		get: function get() {
			return this.document.ModelName || null;
		}
	}, {
		key: "dateCreated",
		get: function get() {
			return typeof this.document.dateCreated !== "undefined" ? (0, _moment2.default)(this.document.dateCreated) : null;
		}
	}, {
		key: "dateModified",
		get: function get() {
			return typeof this.document.dateModified !== "undefined" ? (0, _moment2.default)(this.document.dateModified) : null;
		},
		set: function set(value) {
			this.document.dateModified = (0, _moment2.default)(value).toISOString();
		}
	}, {
		key: "id",
		get: function get() {
			return this.document._id || null;
		},
		set: function set(value) {
			this.document._id = value;
			this.dateModified = Date.now();
		}
	}, {
		key: "_id",
		get: function get() {
			return this.document._id || null;
		},
		set: function set(value) {
			this.document._id = value;
			this.dateModified = Date.now();
		}
	}]);

	function RESTModel(dataMaybe) {
		(0, _classCallCheck3.default)(this, RESTModel);

		var dataType = typeof dataMaybe === "undefined" ? "undefined" : (0, _typeof3.default)(dataMaybe);
		this.document = {};
		if (dataType === "string") {
			try {
				var data = JSON.parse(dataMaybe);
				if (typeof data.ModelName !== "undefined") delete data.ModelName;
				this.assign(data);
			} catch (e) {
				console.error(e);
			}
		} else if (dataType === "object" && dataMaybe) {
			if ((0, _typeof3.default)(dataMaybe.document) === "object") this.assign(dataMaybe.document);else this.assign(dataMaybe);
		} else throw new Error(dataMaybe + " given");
	}

	(0, _createClass3.default)(RESTModel, [{
		key: "toObject",
		value: function toObject() {
			return this.valid() ? Object.assign({}, this.document) : null;
		}
	}, {
		key: "toString",
		value: function toString() {
			return this.valid() ? JSON.stringify(this.document) : "null";
		}
	}, {
		key: "valid",
		value: function valid() {
			if (!RESTModel.isValidId(this.id)) return false;
			if (!(0, _moment2.default)(this.dateModified).isValid()) return false;
			if (!(0, _moment2.default)(this.dateCreated).isValid()) return false;
			return true;
		}
	}, {
		key: "assign",
		value: function assign() {
			var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

			Object.assign(this.document, data);
			return this;
		}
	}, {
		key: "save",
		value: function () {
			var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(token) {
				var modelName, response, id, data, socket;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								modelName = this.ModelName || this.constructor.ModelName;
								response = null;
								id = this.id || null;
								data = Object.assign({}, this.document);

								data.dateCreated = data.dateCreated || Date.now();
								data.dateModified = Date.now();

								if (!(_API2.default.UseSocketIO && _API2.default.ShouldUseSocketIO)) {
									_context.next = 21;
									break;
								}

								_context.next = 9;
								return _API2.default.GetSocket(token);

							case 9:
								socket = _context.sent;

								if (!RESTModel.isValidId(id)) {
									_context.next = 16;
									break;
								}

								_context.next = 13;
								return new Promise(function (resolve) {
									socket.emit("GigGizmo/" + modelName + "/Update", data, resolve);
								});

							case 13:
								response = _context.sent;
								_context.next = 19;
								break;

							case 16:
								_context.next = 18;
								return new Promise(function (resolve) {
									socket.emit("GigGizmo/" + modelName + "/Create", data, resolve);
								});

							case 18:
								response = _context.sent;

							case 19:
								_context.next = 31;
								break;

							case 21:
								data.token = token;

								if (!RESTModel.isValidId(id)) {
									_context.next = 28;
									break;
								}

								_context.next = 25;
								return _API2.default.Call("PUT", "/API/" + modelName + "/" + id, data);

							case 25:
								response = _context.sent;
								_context.next = 31;
								break;

							case 28:
								_context.next = 30;
								return _API2.default.Call("POST", "/API/" + modelName + "/", data);

							case 30:
								response = _context.sent;

							case 31:
								if (!(response && response._id)) {
									_context.next = 35;
									break;
								}

								this.assign(response);
								RESTModel.Cache.set(this.id, this);
								return _context.abrupt("return", this);

							case 35:
								throw new Error("returned " + response);

							case 36:
							case "end":
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function save(_x2) {
				return _ref.apply(this, arguments);
			}

			return save;
		}()
	}, {
		key: "remove",
		value: function () {
			var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(token) {
				var id, response, modelName, socket;
				return _regenerator2.default.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								id = this._id || null;

								if (!RESTModel.isValidId(id)) {
									_context2.next = 18;
									break;
								}

								response = null;
								modelName = this.ModelName || this.constructor.ModelName;

								if (!(_API2.default.UseSocketIO && _API2.default.ShouldUseSocketIO)) {
									_context2.next = 13;
									break;
								}

								_context2.next = 7;
								return _API2.default.GetSocket(token);

							case 7:
								socket = _context2.sent;
								_context2.next = 10;
								return new Promise(function (resolve) {
									socket.emit("GigGizmo/" + modelName + "/Delete", id, function (res) {
										resolve(res);
									});
								});

							case 10:
								response = _context2.sent;
								_context2.next = 16;
								break;

							case 13:
								_context2.next = 15;
								return _API2.default.Call("DELETE", "/API/" + modelName + "/" + id, {
									token: token
								});

							case 15:
								response = _context2.sent;

							case 16:

								RESTModel.Cache.set(id, null);
								return _context2.abrupt("return", response);

							case 18:
								throw new Error("Invalid id: " + id);

							case 19:
							case "end":
								return _context2.stop();
						}
					}
				}, _callee2, this);
			}));

			function remove(_x3) {
				return _ref2.apply(this, arguments);
			}

			return remove;
		}()
	}], [{
		key: "isValidId",
		value: function isValidId(id) {
			return typeof id === "string" && /^([0-9a-fA-F]{24}|[0-9a-fA-F]{12})$/.test(id);
		}
	}, {
		key: "findById",
		value: function () {
			var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(Model, id, token) {
				var data, modelName, socket;
				return _regenerator2.default.wrap(function _callee3$(_context3) {
					while (1) {
						switch (_context3.prev = _context3.next) {
							case 0:
								if (!RESTModel.isValidId(id)) {
									_context3.next = 17;
									break;
								}

								data = null;
								modelName = Model.ModelName || Model.constructor.ModelName;

								if (!(_API2.default.UseSocketIO && _API2.default.ShouldUseSocketIO)) {
									_context3.next = 11;
									break;
								}

								_context3.next = 6;
								return _API2.default.GetSocket(token);

							case 6:
								socket = _context3.sent;

								if (!socket) {
									_context3.next = 11;
									break;
								}

								_context3.next = 10;
								return new Promise(function (resolve) {
									socket.emit("GigGizmo/" + modelName + "/Retreive", id, resolve);
								});

							case 10:
								data = _context3.sent;

							case 11:
								if (data) {
									_context3.next = 15;
									break;
								}

								_context3.next = 14;
								return _API2.default.Call("GET", "/API/" + modelName + "/" + id, {
									token: token
								});

							case 14:
								data = _context3.sent;

							case 15:
								if (!(data && RESTModel.isValidId(data._id))) {
									_context3.next = 17;
									break;
								}

								return _context3.abrupt("return", new Model(data));

							case 17:
								return _context3.abrupt("return", null);

							case 18:
							case "end":
								return _context3.stop();
						}
					}
				}, _callee3, this);
			}));

			function findById(_x4, _x5, _x6) {
				return _ref3.apply(this, arguments);
			}

			return findById;
		}()
	}, {
		key: "findOne",
		value: function () {
			var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(Model, criteriaMaybe, token) {
				var criteria, data, modelName, socket;
				return _regenerator2.default.wrap(function _callee4$(_context4) {
					while (1) {
						switch (_context4.prev = _context4.next) {
							case 0:
								criteria = criteriaMaybe || {};
								data = null;
								modelName = Model.ModelName || Model.constructor.ModelName;

								if (!(_API2.default.UseSocketIO && _API2.default.ShouldUseSocketIO)) {
									_context4.next = 11;
									break;
								}

								_context4.next = 6;
								return _API2.default.GetSocket(token);

							case 6:
								socket = _context4.sent;

								if (!socket) {
									_context4.next = 11;
									break;
								}

								_context4.next = 10;
								return new Promise(function (resolve) {
									socket.emit("GigGizmo/" + modelName + "/FindOne", criteria, resolve);
								});

							case 10:
								data = _context4.sent;

							case 11:
								if (data) {
									_context4.next = 15;
									break;
								}

								_context4.next = 14;
								return _API2.default.Call("GET", "/API/" + modelName + "/FindOne", Object.assign(criteria, { token: token }));

							case 14:
								data = _context4.sent;

							case 15:
								if (!(data && RESTModel.isValidId(data._id))) {
									_context4.next = 17;
									break;
								}

								return _context4.abrupt("return", new Model(data));

							case 17:
								return _context4.abrupt("return", null);

							case 18:
							case "end":
								return _context4.stop();
						}
					}
				}, _callee4, this);
			}));

			function findOne(_x7, _x8, _x9) {
				return _ref4.apply(this, arguments);
			}

			return findOne;
		}()
	}, {
		key: "findMany",
		value: function () {
			var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(Model, criteriaMaybe, token) {
				var criteria, data, modelName, socket;
				return _regenerator2.default.wrap(function _callee5$(_context5) {
					while (1) {
						switch (_context5.prev = _context5.next) {
							case 0:
								criteria = criteriaMaybe || {};
								data = null;
								modelName = Model.ModelName || Model.constructor.ModelName;

								if (!(_API2.default.UseSocketIO && _API2.default.ShouldUseSocketIO)) {
									_context5.next = 11;
									break;
								}

								_context5.next = 6;
								return _API2.default.GetSocket(token);

							case 6:
								socket = _context5.sent;

								if (!socket) {
									_context5.next = 11;
									break;
								}

								_context5.next = 10;
								return new Promise(function (resolve) {
									socket.emit("GigGizmo/" + modelName + "/FindMany", criteria, resolve);
								});

							case 10:
								data = _context5.sent;

							case 11:
								if (data) {
									_context5.next = 15;
									break;
								}

								_context5.next = 14;
								return _API2.default.Call("GET", "/API/" + modelName + "/FindMany", Object.assign(criteria, { token: token }));

							case 14:
								data = _context5.sent;

							case 15:
								if (!Array.isArray(data)) {
									_context5.next = 17;
									break;
								}

								return _context5.abrupt("return", data.map(function (itemData) {
									var item = new Model(itemData);
									RESTModel.Cache.set(item._id, item);
									return item;
								}));

							case 17:
								return _context5.abrupt("return", []);

							case 18:
							case "end":
								return _context5.stop();
						}
					}
				}, _callee5, this);
			}));

			function findMany(_x10, _x11, _x12) {
				return _ref5.apply(this, arguments);
			}

			return findMany;
		}()
	}]);
	return RESTModel;
}();

RESTModel.Cache = new Map /* [String, Object] */();
exports.default = RESTModel;