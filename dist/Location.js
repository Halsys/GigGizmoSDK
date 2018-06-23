"use strict";

exports.__esModule = true;
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/core-js/object/define-property"));

var _create = _interopRequireDefault(require("@babel/runtime/core-js/object/create"));

var _promise = _interopRequireDefault(require("@babel/runtime/core-js/promise"));

var _API = _interopRequireDefault(require("./API"));

var _RESTModel2 = _interopRequireDefault(require("./RESTModel"));

var _GooglePlace = _interopRequireDefault(require("./GooglePlace"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; (0, _defineProperty2.default)(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = (0, _create.default)(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { (0, _defineProperty2.default)(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Location =
/*#__PURE__*/
function (_RESTModel) {
  _inheritsLoose(Location, _RESTModel);

  function Location() {
    return _RESTModel.apply(this, arguments) || this;
  }

  var _proto = Location.prototype;

  _proto.valid = function valid() {
    if (!_RESTModel.prototype.valid.call(this)) return false;
    if (!this.placeId) return false;
    if (!this.address) return false;
    if (!this.utcOffset) return false;
    if (!this.point) return false;
    return true;
  };

  _proto.getPlaceDetails = function getPlaceDetails() {
    return _GooglePlace.default.getPlaceDetails(this.placeId);
  };

  Location.getLocationByPlaceId = function getLocationByPlaceId(placeId, token) {
    var _this = this;

    return new _promise.default(function (resolve, reject) {
      var _this2 = this;

      _newArrowCheck(this, _this);

      if (!placeId) {
        reject(new Error("Invaild placeId: " + placeId));
      } else {
        _API.default.Call("GET", "/API/Place/" + placeId, {
          token: token
        }).then(function (location) {
          _newArrowCheck(this, _this2);

          if (location) {
            resolve(new Location(location));
          } else {
            reject(new Error(location + " returned"));
          }
        }.bind(this), reject);
      }
    }.bind(this));
  };

  Location.findById = function findById(id, token) {
    return _RESTModel2.default.findById(Location, id, token, true);
  };

  _createClass(Location, [{
    key: "type",
    get: function get() {
      return this.getField("type") || "Point";
    },
    set: function set(value) {
      this.setField("type", value);
    }
  }, {
    key: "placeId",
    get: function get() {
      return this.getField("placeId");
    },
    set: function set(value) {
      this.setField("placeId", value);
    }
  }, {
    key: "address",
    get: function get() {
      return this.getField("address");
    },
    set: function set(value) {
      this.setField("address", value);
    }
  }, {
    key: "point",
    get: function get() {
      return this.getField("point");
    },
    set: function set(value) {
      this.setField("point", value);
    }
  }, {
    key: "utcOffset",
    get: function get() {
      return this.getField("utcOffset");
    },
    set: function set(value) {
      this.setField("utcOffset", value);
    }
  }]);

  return Location;
}(_RESTModel2.default);

exports.default = Location;

_defineProperty(Location, "ModelName", "Location");