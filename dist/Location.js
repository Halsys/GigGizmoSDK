(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@babel/runtime/core-js/symbol/iterator", "@babel/runtime/core-js/symbol", "@babel/runtime/core-js/object/define-property", "@babel/runtime/core-js/object/get-own-property-descriptor", "@babel/runtime/core-js/reflect/get", "@babel/runtime/core-js/object/get-prototype-of", "@babel/runtime/core-js/object/create", "@babel/runtime/core-js/object/set-prototype-of", "@babel/runtime/core-js/promise", "./API", "./RESTModel", "./GooglePlace"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@babel/runtime/core-js/symbol/iterator"), require("@babel/runtime/core-js/symbol"), require("@babel/runtime/core-js/object/define-property"), require("@babel/runtime/core-js/object/get-own-property-descriptor"), require("@babel/runtime/core-js/reflect/get"), require("@babel/runtime/core-js/object/get-prototype-of"), require("@babel/runtime/core-js/object/create"), require("@babel/runtime/core-js/object/set-prototype-of"), require("@babel/runtime/core-js/promise"), require("./API"), require("./RESTModel"), require("./GooglePlace"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.iterator, global.symbol, global.defineProperty, global.getOwnPropertyDescriptor, global.get, global.getPrototypeOf, global.create, global.setPrototypeOf, global.promise, global.API, global.RESTModel, global.GooglePlace);
    global.Location = mod.exports;
  }
})(this, function (_exports, _iterator, _symbol, _defineProperty2, _getOwnPropertyDescriptor, _get2, _getPrototypeOf2, _create, _setPrototypeOf2, _promise, _API, _RESTModel2, _GooglePlace) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _iterator = _interopRequireDefault(_iterator);
  _symbol = _interopRequireDefault(_symbol);
  _defineProperty2 = _interopRequireDefault(_defineProperty2);
  _getOwnPropertyDescriptor = _interopRequireDefault(_getOwnPropertyDescriptor);
  _get2 = _interopRequireDefault(_get2);
  _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf2);
  _create = _interopRequireDefault(_create);
  _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf2);
  _promise = _interopRequireDefault(_promise);
  _API = _interopRequireDefault(_API);
  _RESTModel2 = _interopRequireDefault(_RESTModel2);
  _GooglePlace = _interopRequireDefault(_GooglePlace);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _typeof(obj) { if (typeof _symbol.default === "function" && typeof _iterator.default === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof _symbol.default === "function" && obj.constructor === _symbol.default && obj !== _symbol.default.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; (0, _defineProperty2.default)(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && _get2.default) { _get = _get2.default; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = (0, _getOwnPropertyDescriptor.default)(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _getPrototypeOf(o) { _getPrototypeOf = _setPrototypeOf2.default ? _getPrototypeOf2.default : function _getPrototypeOf(o) { return o.__proto__ || (0, _getPrototypeOf2.default)(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = (0, _create.default)(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = _setPrototypeOf2.default || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _defineProperty(obj, key, value) { if (key in obj) { (0, _defineProperty2.default)(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var Location =
  /*#__PURE__*/
  function (_RESTModel) {
    _inherits(Location, _RESTModel);

    function Location() {
      _classCallCheck(this, Location);

      return _possibleConstructorReturn(this, _getPrototypeOf(Location).apply(this, arguments));
    }

    _createClass(Location, [{
      key: "valid",
      value: function valid() {
        if (!_get(_getPrototypeOf(Location.prototype), "valid", this).call(this)) return false;
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
        var _this = this;

        return new _promise.default(function (resolve, reject) {
          var _this2 = this;

          _newArrowCheck(this, _this);

          if (!placeId) {
            reject(new Error("Invaild placeId: ".concat(placeId)));
          } else {
            _API.default.Call("GET", "/API/Place/".concat(placeId), {
              token: token
            }).then(function (location) {
              _newArrowCheck(this, _this2);

              if (location) {
                resolve(new Location(location));
              } else {
                reject(new Error("".concat(location, " returned")));
              }
            }.bind(this), reject);
          }
        }.bind(this));
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

  _defineProperty(Location, "ModelName", "Location");
});