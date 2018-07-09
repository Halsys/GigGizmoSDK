"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _iterator = _interopRequireDefault(require("@babel/runtime/core-js/symbol/iterator"));

var _symbol = _interopRequireDefault(require("@babel/runtime/core-js/symbol"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/core-js/object/define-property"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/core-js/object/get-prototype-of"));

var _create = _interopRequireDefault(require("@babel/runtime/core-js/object/create"));

var _setPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/core-js/object/set-prototype-of"));

var _promise = _interopRequireDefault(require("@babel/runtime/core-js/promise"));

var _index = require("./index");

var _API = _interopRequireDefault(require("./API"));

var _RESTModel2 = _interopRequireDefault(require("./RESTModel"));

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

var GooglePlace =
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
}(_RESTModel2.default);

exports.default = GooglePlace;

_defineProperty(GooglePlace, "ModelName", "GooglePlace");