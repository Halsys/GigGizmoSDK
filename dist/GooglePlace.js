(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@babel/runtime/helpers/classCallCheck", "@babel/runtime/helpers/createClass", "@babel/runtime/helpers/possibleConstructorReturn", "@babel/runtime/helpers/getPrototypeOf", "@babel/runtime/helpers/inherits", "./API", "./RESTModel"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@babel/runtime/helpers/classCallCheck"), require("@babel/runtime/helpers/createClass"), require("@babel/runtime/helpers/possibleConstructorReturn"), require("@babel/runtime/helpers/getPrototypeOf"), require("@babel/runtime/helpers/inherits"), require("./API"), require("./RESTModel"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.classCallCheck, global.createClass, global.possibleConstructorReturn, global.getPrototypeOf, global.inherits, global.API, global.RESTModel);
    global.GooglePlace = mod.exports;
  }
})(this, function (_exports, _classCallCheck2, _createClass2, _possibleConstructorReturn2, _getPrototypeOf2, _inherits2, _API, _RESTModel2) {
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
  _inherits2 = _interopRequireDefault(_inherits2);
  _API = _interopRequireDefault(_API);
  _RESTModel2 = _interopRequireDefault(_RESTModel2);

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

  _exports.default = GooglePlace;
  GooglePlace.ModelName = "GooglePlace";
});