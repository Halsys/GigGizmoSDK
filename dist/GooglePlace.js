"use strict";

exports.__esModule = true;
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/core-js/object/define-property"));

var _create = _interopRequireDefault(require("@babel/runtime/core-js/object/create"));

var _promise = _interopRequireDefault(require("@babel/runtime/core-js/promise"));

var _API = _interopRequireDefault(require("./API"));

var _RESTModel2 = _interopRequireDefault(require("./RESTModel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; (0, _defineProperty2.default)(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = (0, _create.default)(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { (0, _defineProperty2.default)(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var GooglePlace =
/*#__PURE__*/
function (_RESTModel) {
  _inheritsLoose(GooglePlace, _RESTModel);

  function GooglePlace() {
    return _RESTModel.apply(this, arguments) || this;
  }

  GooglePlace.getPlaceDetails = function getPlaceDetails(placeId) {
    var _this = this;

    return new _promise.default(function (resolve, reject) {
      _newArrowCheck(this, _this);

      if (typeof placeId !== "string") return reject(new Error("placeId is not a string!"));
      return _API.default.Call("GET", "/API/GooglePlace", {
        placeId: placeId
      }).then(resolve, reject);
    }.bind(this));
  };

  GooglePlace.queryPlace = function queryPlace(text, maybeType) {
    var _this2 = this;

    return new _promise.default(function (resolve, reject) {
      _newArrowCheck(this, _this2);

      var type = maybeType || "locality";
      if (typeof text !== "string") return reject(new Error("text is not a string!"));
      if (text === "") return reject(new Error("text is blank"));
      return _API.default.Call("GET", "/API/GooglePlace/Query", {
        term: text,
        type: type
      }).then(resolve, reject);
    }.bind(this));
  };

  _createClass(GooglePlace, [{
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
  }]);

  return GooglePlace;
}(_RESTModel2.default);

exports.default = GooglePlace;

_defineProperty(GooglePlace, "ModelName", "GooglePlace");