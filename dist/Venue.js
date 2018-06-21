(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@babel/runtime/core-js/symbol/iterator", "@babel/runtime/core-js/symbol", "@babel/runtime/core-js/object/define-property", "@babel/runtime/core-js/object/get-own-property-descriptor", "@babel/runtime/core-js/reflect/get", "@babel/runtime/core-js/object/get-prototype-of", "@babel/runtime/core-js/object/create", "@babel/runtime/core-js/object/set-prototype-of", "@babel/runtime/core-js/promise", "@babel/runtime/core-js/array/from", "./User", "./Upload", "./Gig", "./Location", "./RESTModel", "./TwitterAccount", "./FacebookAccount"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@babel/runtime/core-js/symbol/iterator"), require("@babel/runtime/core-js/symbol"), require("@babel/runtime/core-js/object/define-property"), require("@babel/runtime/core-js/object/get-own-property-descriptor"), require("@babel/runtime/core-js/reflect/get"), require("@babel/runtime/core-js/object/get-prototype-of"), require("@babel/runtime/core-js/object/create"), require("@babel/runtime/core-js/object/set-prototype-of"), require("@babel/runtime/core-js/promise"), require("@babel/runtime/core-js/array/from"), require("./User"), require("./Upload"), require("./Gig"), require("./Location"), require("./RESTModel"), require("./TwitterAccount"), require("./FacebookAccount"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.iterator, global.symbol, global.defineProperty, global.getOwnPropertyDescriptor, global.get, global.getPrototypeOf, global.create, global.setPrototypeOf, global.promise, global.from, global.User, global.Upload, global.Gig, global.Location, global.RESTModel, global.TwitterAccount, global.FacebookAccount);
    global.Venue = mod.exports;
  }
})(this, function (_exports, _iterator, _symbol, _defineProperty2, _getOwnPropertyDescriptor, _get2, _getPrototypeOf2, _create, _setPrototypeOf2, _promise, _from, _User, _Upload, _Gig, _Location, _RESTModel2, _TwitterAccount, _FacebookAccount) {
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
  _from = _interopRequireDefault(_from);
  _User = _interopRequireDefault(_User);
  _Upload = _interopRequireDefault(_Upload);
  _Gig = _interopRequireDefault(_Gig);
  _Location = _interopRequireDefault(_Location);
  _RESTModel2 = _interopRequireDefault(_RESTModel2);
  _TwitterAccount = _interopRequireDefault(_TwitterAccount);
  _FacebookAccount = _interopRequireDefault(_FacebookAccount);

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

  var Venue =
  /*#__PURE__*/
  function (_RESTModel) {
    _inherits(Venue, _RESTModel);

    function Venue() {
      _classCallCheck(this, Venue);

      return _possibleConstructorReturn(this, _getPrototypeOf(Venue).apply(this, arguments));
    }

    _createClass(Venue, [{
      key: "getIcon",
      value: function getIcon(token) {
        var icon = this.icon ? this.icon : null;
        return _Upload.default.findById(icon, token);
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
        return _Gig.default.findByVenue(this._id, token);
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
      key: "getLocation",
      value: function getLocation(token) {
        return _Location.default.findById(this.location, token);
      }
    }, {
      key: "valid",
      value: function valid() {
        if (!_get(_getPrototypeOf(Venue.prototype), "valid", this).call(this)) return false;
        if (!_RESTModel2.default.isValidId(this.location)) return false;
        if (this.location === "") return false;
        if (typeof this.name !== "string") return false;
        if (this.name === "") return false;
        if (typeof this.description !== "string") return false;
        if (this.description === "") return false;
        if (this.description === "<p><br></p>") return false;
        if (!Array.isArray(this.owners)) return false;
        if (this.owners.length === 0) return false;
        return true;
      } // TODO: Create isOpen method

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
      key: "description",
      get: function get() {
        return this.getField("description");
      },
      set: function set(value) {
        this.setField("description", value);
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
      key: "website",
      get: function get() {
        return this.getField("website");
      },
      set: function set(value) {
        this.setField("website", value);
      }
    }, {
      key: "phone",
      get: function get() {
        return this.getField("phone");
      },
      set: function set(value) {
        this.setField("phone", value);
      }
    }, {
      key: "location",
      get: function get() {
        return this.getField("location");
      },
      set: function set(value) {
        this.setField("location", value);
      }
    }, {
      key: "openCloseTimes",
      get: function get() {
        return this.getField("openCloseTimes");
      },
      set: function set(value) {
        this.setField("openCloseTimes", value);
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
        return _RESTModel2.default.findOne(Venue, criteria, token, true);
      }
    }, {
      key: "findMany",
      value: function findMany(criteria, token) {
        return _RESTModel2.default.findMany(Venue, criteria, token, true);
      }
    }, {
      key: "findById",
      value: function findById(id, token) {
        return _RESTModel2.default.findById(Venue, id, token, true);
      }
    }, {
      key: "getAllOwned",
      value: function getAllOwned(token) {
        return _RESTModel2.default.findMany(Venue, null, token, true);
      }
    }]);

    return Venue;
  }(_RESTModel2.default);

  _exports.default = Venue;

  _defineProperty(Venue, "ModelName", "Venue");
});