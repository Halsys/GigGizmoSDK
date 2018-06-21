"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _iterator = _interopRequireDefault(require("@babel/runtime/core-js/symbol/iterator"));

var _symbol = _interopRequireDefault(require("@babel/runtime/core-js/symbol"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/core-js/object/define-property"));

var _getOwnPropertyDescriptor = _interopRequireDefault(require("@babel/runtime/core-js/object/get-own-property-descriptor"));

var _get2 = _interopRequireDefault(require("@babel/runtime/core-js/reflect/get"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/core-js/object/get-prototype-of"));

var _create = _interopRequireDefault(require("@babel/runtime/core-js/object/create"));

var _setPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/core-js/object/set-prototype-of"));

var _promise = _interopRequireDefault(require("@babel/runtime/core-js/promise"));

var _from = _interopRequireDefault(require("@babel/runtime/core-js/array/from"));

var _User = _interopRequireDefault(require("./User"));

var _Upload = _interopRequireDefault(require("./Upload"));

var _Gig = _interopRequireDefault(require("./Gig"));

var _RESTModel2 = _interopRequireDefault(require("./RESTModel"));

var _TwitterAccount = _interopRequireDefault(require("./TwitterAccount"));

var _FacebookAccount = _interopRequireDefault(require("./FacebookAccount"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

function _typeof(obj) { if (typeof _symbol.default === "function" && typeof _iterator.default === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof _symbol.default === "function" && obj.constructor === _symbol.default && obj !== _symbol.default.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

var Band =
/*#__PURE__*/
function (_RESTModel) {
  _inherits(Band, _RESTModel);

  function Band() {
    _classCallCheck(this, Band);

    return _possibleConstructorReturn(this, _getPrototypeOf(Band).apply(this, arguments));
  }

  _createClass(Band, [{
    key: "save",
    value: function save(token) {
      return _RESTModel2.default.prototype.save.call(this, token, true);
    }
  }, {
    key: "remove",
    value: function remove(token) {
      return _RESTModel2.default.prototype.remove.call(this, token, true);
    }
  }, {
    key: "getIcon",
    value: function getIcon(token) {
      return _Upload.default.findById(this.icon, token);
    }
  }, {
    key: "getPhotos",
    value: function getPhotos(token) {
      var photos = (0, _from.default)(this.photos);
      if (photos.length !== 0) return _Upload.default.findMany({
        _id: photos
      }, token);
      return _promise.default.resolve([]);
    }
  }, {
    key: "getOwners",
    value: function getOwners(token) {
      var owners = (0, _from.default)(this.owners);
      if (owners.length !== 0) return _User.default.findMany({
        _id: owners
      }, token);
      return _promise.default.resolve([]);
    }
  }, {
    key: "getGigs",
    value: function getGigs(token) {
      return _Gig.default.findByBand(this._id, token);
    }
  }, {
    key: "getTwitterAccount",
    value: function getTwitterAccount(token) {
      return _TwitterAccount.default.findById(this.twitter, token);
    }
  }, {
    key: "getFacebookAccount",
    value: function getFacebookAccount(token) {
      return _FacebookAccount.default.findById(this.facebook, token);
    }
  }, {
    key: "valid",
    value: function valid() {
      if (!_get(_getPrototypeOf(Band.prototype), "valid", this).call(this)) return false;
      if (typeof this.cityPlaceID !== "string") return false;
      if (this.cityPlaceID === "") return false;
      if (typeof this.name !== "string") return false;
      if (this.name === "") return false;
      if (typeof this.description !== "string") return false;
      if (this.description === "") return false;
      if (this.description === "<p><br></p>") return false;
      if (!Array.isArray(this.owners)) return false;
      if (this.owners.length === 0) return false;
      return true;
    }
  }, {
    key: "userIsOwner",
    value: function userIsOwner(user) {
      var _this = this;

      if (Array.isArray(this.owners)) {
        var userId = null;
        if (typeof user === "string") userId = user;else if (_typeof(user) === "object" && user) userId = user._id;
        return this.owners.find(function (id) {
          _newArrowCheck(this, _this);

          return id === userId;
        }.bind(this)) !== undefined;
      }

      return false;
    }
  }, {
    key: "name",
    get: function get() {
      return this.getField("name");
    },
    set: function set(value) {
      this.setField("name", value);
    }
  }, {
    key: "website",
    get: function get() {
      return this.getField("website");
    },
    set: function set(value) {
      this.setField("website", value);
    }
  }, {
    key: "email",
    get: function get() {
      return this.getField("email");
    },
    set: function set(value) {
      this.setField("email", value);
    }
  }, {
    key: "cityName",
    get: function get() {
      return this.getField("cityName");
    },
    set: function set(value) {
      this.setField("cityName", value);
    }
  }, {
    key: "cityPlaceID",
    get: function get() {
      return this.getField("cityPlaceID");
    },
    set: function set(value) {
      this.setField("cityPlaceID", value);
    }
  }, {
    key: "description",
    get: function get() {
      return this.getField("description");
    },
    set: function set(value) {
      this.setField("description", value);
    }
  }, {
    key: "metadata",
    get: function get() {
      return this.getField("metadata");
    },
    set: function set(value) {
      this.setField("metadata", value);
    }
  }, {
    key: "icon",
    get: function get() {
      return this.getField("icon");
    },
    set: function set(value) {
      this.setField("icon", value);
    }
  }, {
    key: "photos",
    get: function get() {
      return this.getField("photos");
    },
    set: function set(value) {
      this.setField("photos", value);
    }
  }, {
    key: "owners",
    get: function get() {
      return this.getField("owners");
    },
    set: function set(value) {
      this.setField("owners", value);
    }
  }, {
    key: "facebook",
    get: function get() {
      return this.getField("facebook");
    },
    set: function set(value) {
      this.setField("facebook", value);
    }
  }, {
    key: "facebookPageId",
    get: function get() {
      return this.getField("facebookPageId");
    },
    set: function set(value) {
      this.setField("facebookPageId", value);
    }
  }, {
    key: "facebookPageName",
    get: function get() {
      return this.getField("facebookPageName");
    },
    set: function set(value) {
      this.setField("facebookPageName", value);
    }
  }, {
    key: "facebookPageToken",
    get: function get() {
      return this.getField("facebookPageToken");
    },
    set: function set(value) {
      this.setField("facebookPageToken", value);
    }
  }, {
    key: "twitter",
    get: function get() {
      return this.getField("twitter");
    },
    set: function set(value) {
      this.setField("twitter", value);
    }
  }, {
    key: "google",
    get: function get() {
      return this.getField("google");
    },
    set: function set(value) {
      this.setField("google", value);
    }
  }], [{
    key: "findOne",
    value: function findOne(criteria, token) {
      return _RESTModel2.default.findOne(Band, criteria, token, true);
    }
  }, {
    key: "findMany",
    value: function findMany(criteria, token) {
      return _RESTModel2.default.findMany(Band, criteria, token, true);
    }
  }, {
    key: "findById",
    value: function findById(id, token) {
      return _RESTModel2.default.findById(Band, id, token, true);
    }
  }, {
    key: "getAllOwned",
    value: function getAllOwned(token) {
      return _RESTModel2.default.findMany(Band, null, token, true);
    }
  }]);

  return Band;
}(_RESTModel2.default);

exports.default = Band;

_defineProperty(Band, "ModelName", "Band");