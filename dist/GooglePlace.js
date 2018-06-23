"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _API = _interopRequireDefault(require("./API"));

var _RESTModel2 = _interopRequireDefault(require("./RESTModel"));

/**
 * Created by corynull on 4/7/17.
 */
var GooglePlace =
/*#__PURE__*/
function (_RESTModel) {
  (0, _inherits2.default)(GooglePlace, _RESTModel);

  function GooglePlace() {
    (0, _classCallCheck2.default)(this, GooglePlace);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(GooglePlace).apply(this, arguments));
  }

  (0, _createClass2.default)(GooglePlace, [{
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
        return _API.default.Call("GET", "/API/GooglePlace", {
          placeId: placeId
        }).then(resolve, reject);
      });
    }
  }, {
    key: "queryPlace",
    value: function queryPlace(text, maybeType) {
      return new Promise(function (resolve, reject) {
        var type = maybeType || "locality";
        if (typeof text !== "string") return reject(new Error("text is not a string!"));
        if (text === "") return reject(new Error("text is blank"));
        return _API.default.Call("GET", "/API/GooglePlace/Query", {
          term: text,
          type: type
        }).then(resolve, reject);
      });
    }
  }]);
  return GooglePlace;
}(_RESTModel2.default);

exports.default = GooglePlace;
(0, _defineProperty2.default)(GooglePlace, "ModelName", "GooglePlace");