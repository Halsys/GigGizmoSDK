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

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

var _Band = require("./Band");

var _Band2 = _interopRequireDefault(_Band);

var _Venue = require("./Venue");

var _Venue2 = _interopRequireDefault(_Venue);

var _Location = require("./Location");

var _Location2 = _interopRequireDefault(_Location);

var _API = require("./API");

var _API2 = _interopRequireDefault(_API);

var _RESTModel2 = require("./RESTModel");

var _RESTModel3 = _interopRequireDefault(_RESTModel2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by corynull on 4/5/17.
 */
var Gig = function (_RESTModel) {
	(0, _inherits3.default)(Gig, _RESTModel);

	function Gig() {
		(0, _classCallCheck3.default)(this, Gig);
		return (0, _possibleConstructorReturn3.default)(this, (Gig.__proto__ || Object.getPrototypeOf(Gig)).apply(this, arguments));
	}

	(0, _createClass3.default)(Gig, [{
		key: "getBand",
		value: function getBand(token) {
			return _Band2.default.findById(this.band, token);
		}
	}, {
		key: "getVenue",
		value: function getVenue(token) {
			return _Venue2.default.findById(this.venue, token);
		}
	}, {
		key: "getLocation",
		value: function getLocation(token) {
			return _Location2.default.findById(this.location, token);
		}
	}, {
		key: "valid",
		value: function valid() {
			if (!(0, _get3.default)(Gig.prototype.__proto__ || Object.getPrototypeOf(Gig.prototype), "valid", this).call(this)) return false;
			if (!Array.isArray(this.owners)) return false;
			if (this.owners.length === 0) return false;
			return true;
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
		key: "startTime",
		get: function get() {
			return this.document.startTime ? (0, _moment2.default)(this.document.startTime) : null;
		},
		set: function set(value) {
			this.document.startTime = (0, _moment2.default)(value).toISOString();
			this.document.dateModified = Date.now();
		}
	}, {
		key: "stopTime",
		get: function get() {
			return this.document.stopTime ? (0, _moment2.default)(this.document.stopTime) : null;
		},
		set: function set(value) {
			this.document.stopTime = (0, _moment2.default)(value).toISOString();
			this.document.dateModified = Date.now();
		}
	}, {
		key: "location",
		get: function get() {
			return this.document.location || null;
		},
		set: function set(value) {
			this.document.location = value;
			this.document.dateModified = Date.now();
		}
	}, {
		key: "venue",
		get: function get() {
			return this.document.venue || null;
		},
		set: function set(value) {
			this.document.venue = value;
			this.document.dateModified = Date.now();
		}
	}, {
		key: "band",
		get: function get() {
			return this.document.band || null;
		},
		set: function set(value) {
			this.document.band = value;
			this.document.dateModified = Date.now();
		}
	}, {
		key: "active",
		get: function get() {
			return !!this.bandOwnerAccepted && !!this.venueOwnerAccepted;
		}
	}, {
		key: "bandOwnerAccepted",
		get: function get() {
			return this.document.bandOwnerAccepted || null;
		},
		set: function set(value) {
			this.document.bandOwnerAccepted = value;
			this.document.dateModified = Date.now();
		}
	}, {
		key: "venueOwnerAccepted",
		get: function get() {
			return this.document.venueOwnerAccepted || null;
		},
		set: function set(value) {
			this.document.venueOwnerAccepted = value;
			this.document.dateModified = Date.now();
		}
	}, {
		key: "owners",
		get: function get() {
			return this.document.owners || [];
		},
		set: function set(value) {
			this.document.owners = value;
			this.document.dateModified = Date.now();
		}
	}], [{
		key: "findById",
		value: function findById(id, token) {
			return _RESTModel3.default.findById(Gig, id, token);
		}
	}, {
		key: "findByBand",
		value: function () {
			var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(bandId, token) {
				var data;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								_context.next = 2;
								return _API2.default.Call("GET", "/API/Band/" + bandId + "/Gigs", {
									token: token
								});

							case 2:
								data = _context.sent;

								if (!(data && Array.isArray(data))) {
									_context.next = 5;
									break;
								}

								return _context.abrupt("return", data.map(function (itemData) {
									var item = new Gig(itemData);
									_RESTModel3.default.Cache.set(item._id, item);
									return item;
								}));

							case 5:
								throw new Error("Expected Array, got " + data);

							case 6:
							case "end":
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function findByBand(_x, _x2) {
				return _ref.apply(this, arguments);
			}

			return findByBand;
		}()
	}, {
		key: "findByVenue",
		value: function () {
			var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(venueId, token) {
				var data;
				return _regenerator2.default.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								_context2.next = 2;
								return _API2.default.Call("GET", "/API/Venue/" + venueId + "/Gigs", {
									token: token
								});

							case 2:
								data = _context2.sent;

								if (!(data && Array.isArray(data))) {
									_context2.next = 5;
									break;
								}

								return _context2.abrupt("return", data.map(function (itemData) {
									var item = new Gig(itemData);
									_RESTModel3.default.Cache.set(item._id, item);
									return item;
								}));

							case 5:
								throw new Error("Expected Array, got " + data);

							case 6:
							case "end":
								return _context2.stop();
						}
					}
				}, _callee2, this);
			}));

			function findByVenue(_x3, _x4) {
				return _ref2.apply(this, arguments);
			}

			return findByVenue;
		}()
	}, {
		key: "getAllOwned",
		value: function getAllOwned(token) {
			return _RESTModel3.default.findMany(Gig, null, token);
		}
	}, {
		key: "findMany",
		value: function findMany(criteria, token) {
			return _RESTModel3.default.findMany(Gig, criteria, token);
		}
	}, {
		key: "createGigs",
		value: function createGigs(gigData, token) {
			return new Promise(function (resolve, reject) {
				var data = gigData || {};
				if (data && (typeof data === "undefined" ? "undefined" : (0, _typeof3.default)(data)) === "object") {
					if (!data.band || data.band === "") return reject(new Error("Band is required"));
					if (!data.venue || data.venue === "") return reject(new Error("Venue is required"));
					if (!data.times || data.times.length === 0) return reject(new Error("Times is required"));
					var filtered = data.times.filter(function (time, i) {
						if (time.dayDate && time.startTime && time.stopTime) {
							var dayDate = (0, _moment2.default)(time.dayDate);

							var startTime = (0, _moment2.default)(time.startTime);
							startTime.year(dayDate.year());
							startTime.month(dayDate.month());
							startTime.date(dayDate.date());

							var stopTime = (0, _moment2.default)(time.stopTime);
							stopTime.year(dayDate.year());
							stopTime.month(dayDate.month());
							stopTime.date(dayDate.date());
							data.times[i] = {
								startTime: time.startTime,
								stopTime: time.stopTime
							};
							return true;
						} else if (time.startTime && time.stopTime) {
							data.times[i] = {
								startTime: time.startTime,
								stopTime: time.stopTime
							};
							return true;
						}
						return false;
					});
					if (filtered.length !== data.times.length) return reject(new Error("Not all times were valid"));
					data.times = filtered;
					data.token = token;
					var request = _API2.default.Call("POST", "/API/Gig", data);
					return request.then(function (response) {
						var gigs = Array.from(response || []);
						gigs = gigs.map(function (itemData) {
							var gig = new Gig(itemData);
							return gig;
						});
						resolve(gigs);
					}, reject);
				}
				return null;
			});
		}
	}, {
		key: "getAllInDistance",
		value: function getAllInDistance(location, distance) {
			return new Promise(function (resolve, reject) {
				if ((typeof location === "undefined" ? "undefined" : (0, _typeof3.default)(location)) !== "object") return reject(new Error("location is not a object!"));
				if (typeof location.lat !== "number" || typeof location.lng !== "number") return reject(new Error("location does not contain lat or lng!"));
				if (typeof distance !== "number") return reject(new Error("radius is not a number!"));

				return _API2.default.Call("GET", "/API/Gig/InDistance", {
					lat: location.lat,
					lng: location.lng,
					dis: distance
				}).then(function (gigs) {
					resolve(Array.from(gigs || []).map(function (item) {
						var gig = new Gig(item);
						return gig;
					}));
				}, reject);
			});
		}
	}]);
	return Gig;
}(_RESTModel3.default);

Gig.ModelName = "Gig";
exports.default = Gig;