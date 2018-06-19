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

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _API = require("./API");

var _API2 = _interopRequireDefault(_API);

var _RESTModel2 = require("./RESTModel");

var _RESTModel3 = _interopRequireDefault(_RESTModel2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by corynull on 4/7/17.
 */

var GooglePlace = function (_RESTModel) {
	(0, _inherits3.default)(GooglePlace, _RESTModel);

	function GooglePlace() {
		(0, _classCallCheck3.default)(this, GooglePlace);
		return (0, _possibleConstructorReturn3.default)(this, (GooglePlace.__proto__ || Object.getPrototypeOf(GooglePlace)).apply(this, arguments));
	}

	(0, _createClass3.default)(GooglePlace, [{
		key: "placeId",
		get: function get() {
			return this.getField("placeId");
		},
		set: function set(value) {
			this.setField("placeId", value);
		}
	}, {
		key: "details",
		get: function get() {
			return this.getField("details");
		},
		set: function set(value) {
			this.setField("details", value);
		}
	}], [{
		key: "getPlaceDetails",
		value: function getPlaceDetails(placeId) {
			return new Promise(function (resolve, reject) {
				if (typeof placeId !== "string") return reject(new Error("placeId is not a string!"));
				return _API2.default.Call("GET", "/API/GooglePlace", { placeId: placeId }).then(resolve, reject);
			});
		}
	}, {
		key: "queryPlace",
		value: function queryPlace(text, maybeType) {
			return new Promise(function (resolve, reject) {
				var type = maybeType || "locality";
				if (typeof text !== "string") return reject(new Error("text is not a string!"));
				if (text === "") return reject(new Error("text is blank"));
				return _API2.default.Call("GET", "/API/GooglePlace/Query", {
					term: text,
					type: type
				}).then(resolve, reject);
			});
		}
	}]);
	return GooglePlace;
}(_RESTModel3.default);

GooglePlace.ModelName = "GooglePlace";
exports.default = GooglePlace;