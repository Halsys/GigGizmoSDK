"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _API = require("./API");

var _API2 = _interopRequireDefault(_API);

var _RESTModel2 = require("./RESTModel");

var _RESTModel3 = _interopRequireDefault(_RESTModel2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by corynull on Nov 30 2017 5:27 AM.
 */

var Request = function (_RESTModel) {
	(0, _inherits3.default)(Request, _RESTModel);

	function Request() {
		(0, _classCallCheck3.default)(this, Request);
		return (0, _possibleConstructorReturn3.default)(this, (Request.__proto__ || Object.getPrototypeOf(Request)).apply(this, arguments));
	}

	(0, _createClass3.default)(Request, [{
		key: "execute",
		value: function () {
			var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(option, token) {
				var request;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								_context.next = 2;
								return _API2.default.Call("POST", "/API/Request/" + this._id + "/" + option, {
									token: token
								});

							case 2:
								request = _context.sent;

								Object.assign(this, request);
								return _context.abrupt("return", this);

							case 5:
							case "end":
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function execute(_x, _x2) {
				return _ref.apply(this, arguments);
			}

			return execute;
		}()
	}, {
		key: "to",
		get: function get() {
			return this.document.to || null;
		},
		set: function set(value) {
			this.document.to = value;
			this.document.dateModified = Date.now();
		}
	}, {
		key: "from",
		get: function get() {
			return this.document.from || null;
		},
		set: function set(value) {
			this.document.from = value;
			this.document.dateModified = Date.now();
		}
	}, {
		key: "status",
		get: function get() {
			return this.document.status || "Undecided";
		},
		set: function set(value) {
			this.document.status = value;
			this.document.dateModified = Date.now();
		}
	}, {
		key: "options",
		get: function get() {
			return this.document.options || null;
		},
		set: function set(value) {
			this.document.options = value;
			this.document.dateModified = Date.now();
		}
	}, {
		key: "type",
		get: function get() {
			return this.document.type || null;
		},
		set: function set(value) {
			this.document.type = value;
			this.document.dateModified = Date.now();
		}
	}, {
		key: "userData",
		get: function get() {
			return this.document.userData || null;
		},
		set: function set(value) {
			this.document.userData = value;
			this.document.dateModified = Date.now();
		}
	}, {
		key: "emailSent",
		get: function get() {
			return this.document.emailSent;
		},
		set: function set(value) {
			this.document.emailSent = value;
			this.document.dateModified = Date.now();
		}
	}], [{
		key: "createBandOwnershipRequest",
		value: function createBandOwnershipRequest(band, from, to, token) {
			return new Promise(function (resolve, reject) {
				_API2.default.Call("POST", "/API/Request", {
					from: from,
					to: to,
					type: "BandOwnership",
					data: {
						bandId: band
					},
					token: token
				}).then(function (data) {
					var request = new Request(data);
					resolve(request);
				}, reject);
			});
		}
	}, {
		key: "createVenueOwnershipRequest",
		value: function createVenueOwnershipRequest(venue, from, to, token) {
			return new Promise(function (resolve, reject) {
				_API2.default.Call("POST", "/API/Request", {
					from: from,
					to: to,
					type: "VenueOwnership",
					data: {
						venueId: venue
					},
					token: token
				}).then(function (data) {
					var request = new Request(data);
					resolve(request);
				}, reject);
			});
		}
	}, {
		key: "createGigNegotiation",
		value: function createGigNegotiation(gig, from, to, token) {
			return new Promise(function (resolve, reject) {
				_API2.default.Call("POST", "/API/Request", {
					from: from,
					to: to,
					type: "GigNegotiation",
					data: {
						gigId: gig
					},
					token: token
				}).then(function (data) {
					var request = new Request(data);
					resolve(request);
				}, reject);
			});
		}
	}, {
		key: "getAllOwned",
		value: function getAllOwned(token) {
			return _RESTModel3.default.findMany(Request, null, token);
		}
	}, {
		key: "findById",
		value: function findById(id, token) {
			return _RESTModel3.default.findById(Request, id, token);
		}
	}]);
	return Request;
}(_RESTModel3.default);

Request.ModelName = "Request";
exports.default = Request;