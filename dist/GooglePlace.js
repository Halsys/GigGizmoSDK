(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@babel/runtime/core-js/symbol/iterator", "@babel/runtime/core-js/symbol", "@babel/runtime/core-js/object/get-prototype-of", "@babel/runtime/core-js/object/create", "@babel/runtime/core-js/object/set-prototype-of", "@babel/runtime/core-js/object/define-property", "@babel/runtime/core-js/promise", "./API", "./RESTModel"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@babel/runtime/core-js/symbol/iterator"), require("@babel/runtime/core-js/symbol"), require("@babel/runtime/core-js/object/get-prototype-of"), require("@babel/runtime/core-js/object/create"), require("@babel/runtime/core-js/object/set-prototype-of"), require("@babel/runtime/core-js/object/define-property"), require("@babel/runtime/core-js/promise"), require("./API"), require("./RESTModel"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.iterator, global.symbol, global.getPrototypeOf, global.create, global.setPrototypeOf, global.defineProperty, global.promise, global.API, global.RESTModel);
    global.GooglePlace = mod.exports;
  }
})(this, function (_iterator, _symbol, _getPrototypeOf2, _create, _setPrototypeOf2, _defineProperty2, _promise, _API, _RESTModel2) {
  "use strict";

  _iterator = _interopRequireDefault(_iterator);
  _symbol = _interopRequireDefault(_symbol);
  _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf2);
  _create = _interopRequireDefault(_create);
  _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf2);
  _defineProperty2 = _interopRequireDefault(_defineProperty2);
  _promise = _interopRequireDefault(_promise);
  _API = _interopRequireDefault(_API);
  _RESTModel2 = _interopRequireDefault(_RESTModel2);

  var _class, _temp;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _typeof(obj) { if (typeof _symbol.default === "function" && typeof _iterator.default === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof _symbol.default === "function" && obj.constructor === _symbol.default && obj !== _symbol.default.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; (0, _defineProperty2.default)(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _getPrototypeOf(o) { _getPrototypeOf = _setPrototypeOf2.default ? _getPrototypeOf2.default : function _getPrototypeOf(o) { return o.__proto__ || (0, _getPrototypeOf2.default)(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = (0, _create.default)(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = _setPrototypeOf2.default || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _defineProperty(obj, key, value) { if (key in obj) { (0, _defineProperty2.default)(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  module.exports = (_temp = _class =
  /*#__PURE__*/
  function (_RESTModel) {
    _inherits(GooglePlace, _RESTModel);

    function GooglePlace() {
      _classCallCheck(this, GooglePlace);

      return _possibleConstructorReturn(this, _getPrototypeOf(GooglePlace).apply(this, arguments));
    }

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
    }], [{
      key: "getPlaceDetails",
      value: function getPlaceDetails(placeId) {
        var _this = this;

        return new _promise.default(function (resolve, reject) {
          _newArrowCheck(this, _this);

          if (typeof placeId !== "string") return reject(new Error("placeId is not a string!"));
          return _API.default.Call("GET", "/API/GooglePlace", {
            placeId: placeId
          }).then(resolve, reject);
        }.bind(this));
      }
    }, {
      key: "queryPlace",
      value: function queryPlace(text, maybeType) {
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
      }
    }]);

    return GooglePlace;
  }(_RESTModel2.default), _defineProperty(_class, "ModelName", "GooglePlace"), _temp);
});