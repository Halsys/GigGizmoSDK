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

var _API = require("./API");

var _API2 = _interopRequireDefault(_API);

var _RESTModel2 = require("./RESTModel");

var _RESTModel3 = _interopRequireDefault(_RESTModel2);

var _GooglePlace = require("./GooglePlace");

var _GooglePlace2 = _interopRequireDefault(_GooglePlace);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Location = function (_RESTModel) {
	(0, _inherits3.default)(Location, _RESTModel);

	function Location() {
		(0, _classCallCheck3.default)(this, Location);
		return (0, _possibleConstructorReturn3.default)(this, (Location.__proto__ || Object.getPrototypeOf(Location)).apply(this, arguments));
	}

	(0, _createClass3.default)(Location, [{
		key: "valid",
		value: function valid() {
			if (!(0, _get3.default)(Location.prototype.__proto__ || Object.getPrototypeOf(Location.prototype), "valid", this).call(this)) return false;
			if (!this.placeId) return false;
			if (!this.address) return false;
			if (!this.utcOffset) return false;
			if (!this.point) return false;
			return true;
		}
	}, {
		key: "getPlaceDetails",
		value: function getPlaceDetails() {
			return _GooglePlace2.default.getPlaceDetails(this.placeId);
		}
	}, {
		key: "type",
		get: function get() {
			return this.document.type || "Point";
		},
		set: function set(value) {
			this.document.type = value;
			this.document.dateModified = Date.now();
		}
	}, {
		key: "placeId",
		get: function get() {
			return this.document.placeId || null;
		},
		set: function set(value) {
			this.document.placeId = value;
			this.document.dateModified = Date.now();
		}
	}, {
		key: "address",
		get: function get() {
			return this.document.address || null;
		},
		set: function set(value) {
			this.document.address = value;
			this.document.dateModified = Date.now();
		}
	}, {
		key: "point",
		get: function get() {
			return this.document.point || null;
		},
		set: function set(value) {
			this.document.point = value;
			this.document.dateModified = Date.now();
		}
	}, {
		key: "utcOffset",
		get: function get() {
			return this.document.utcOffset || null;
		},
		set: function set(value) {
			this.document.utcOffset = value;
			this.document.dateModified = Date.now();
		}
	}], [{
		key: "getLocationByPlaceId",
		value: function getLocationByPlaceId(placeId, token) {
			return new Promise(function (resolve, reject) {
				if (!placeId) {
					reject(new Error("Invaild placeId: " + placeId));
				} else {
					_API2.default.Call("GET", "/API/Place/" + placeId, { token: token }).then(function (location) {
						if (location) {
							resolve(new Location(location));
						} else {
							reject(new Error(location + " returned"));
						}
					}, reject);
				}
			});
		}
	}, {
		key: "findById",
		value: function findById(id, token) {
			return _RESTModel3.default.findById(Location, id, token);
		}
	}]);
	return Location;
}(_RESTModel3.default); /**
                         * Created by corynull on 9/7/17.
                         */

Location.ModelName = "Location";
exports.default = Location;