(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@babel/runtime/helpers/classCallCheck", "@babel/runtime/helpers/createClass", "@babel/runtime/helpers/possibleConstructorReturn", "@babel/runtime/helpers/getPrototypeOf", "@babel/runtime/helpers/get", "@babel/runtime/helpers/inherits", "./API", "./RESTModel", "./GooglePlace"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@babel/runtime/helpers/classCallCheck"), require("@babel/runtime/helpers/createClass"), require("@babel/runtime/helpers/possibleConstructorReturn"), require("@babel/runtime/helpers/getPrototypeOf"), require("@babel/runtime/helpers/get"), require("@babel/runtime/helpers/inherits"), require("./API"), require("./RESTModel"), require("./GooglePlace"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.classCallCheck, global.createClass, global.possibleConstructorReturn, global.getPrototypeOf, global.get, global.inherits, global.API, global.RESTModel, global.GooglePlace);
    global.Location = mod.exports;
  }
})(this, function (_exports, _classCallCheck2, _createClass2, _possibleConstructorReturn2, _getPrototypeOf2, _get2, _inherits2, _API, _RESTModel2, _GooglePlace) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _createClass2 = _interopRequireDefault(_createClass2);
  _possibleConstructorReturn2 = _interopRequireDefault(_possibleConstructorReturn2);
  _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf2);
  _get2 = _interopRequireDefault(_get2);
  _inherits2 = _interopRequireDefault(_inherits2);
  _API = _interopRequireDefault(_API);
  _RESTModel2 = _interopRequireDefault(_RESTModel2);
  _GooglePlace = _interopRequireDefault(_GooglePlace);

  /**
   * Created by corynull on 9/7/17.
   */
  var Location =
  /*#__PURE__*/
  function (_RESTModel) {
    (0, _inherits2.default)(Location, _RESTModel);

    function Location() {
      (0, _classCallCheck2.default)(this, Location);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Location).apply(this, arguments));
    }

    (0, _createClass2.default)(Location, [{
      key: "valid",
      value: function valid() {
        if (!(0, _get2.default)((0, _getPrototypeOf2.default)(Location.prototype), "valid", this).call(this)) return false;
        if (!this.placeId) return false;
        if (!this.address) return false;
        if (!this.utcOffset) return false;
        if (!this.point) return false;
        return true;
      }
    }, {
      key: "getPlaceDetails",
      value: function getPlaceDetails() {
        return _GooglePlace.default.getPlaceDetails(this.placeId);
      }
    }, {
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
    }], [{
      key: "getLocationByPlaceId",
      value: function getLocationByPlaceId(placeId, token) {
        return new Promise(function (resolve, reject) {
          if (!placeId) {
            reject(new Error("Invaild placeId: ".concat(placeId)));
          } else {
            _API.default.Call("GET", "/API/Place/".concat(placeId), {
              token: token
            }).then(function (location) {
              if (location) {
                resolve(new Location(location));
              } else {
                reject(new Error("".concat(location, " returned")));
              }
            }, reject);
          }
        });
      }
    }, {
      key: "findById",
      value: function findById(id, token) {
        return _RESTModel2.default.findById(Location, id, token, true);
      }
    }]);
    return Location;
  }(_RESTModel2.default);

  _exports.default = Location;
  Location.ModelName = "Location";
});