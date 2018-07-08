(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@babel/runtime/helpers/typeof", "@babel/runtime/helpers/classCallCheck", "@babel/runtime/helpers/createClass", "@babel/runtime/helpers/possibleConstructorReturn", "@babel/runtime/helpers/getPrototypeOf", "@babel/runtime/helpers/get", "@babel/runtime/helpers/inherits", "./User", "./Upload", "./Gig", "./Location", "./RESTModel", "./TwitterAccount", "./FacebookAccount"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@babel/runtime/helpers/typeof"), require("@babel/runtime/helpers/classCallCheck"), require("@babel/runtime/helpers/createClass"), require("@babel/runtime/helpers/possibleConstructorReturn"), require("@babel/runtime/helpers/getPrototypeOf"), require("@babel/runtime/helpers/get"), require("@babel/runtime/helpers/inherits"), require("./User"), require("./Upload"), require("./Gig"), require("./Location"), require("./RESTModel"), require("./TwitterAccount"), require("./FacebookAccount"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global._typeof, global.classCallCheck, global.createClass, global.possibleConstructorReturn, global.getPrototypeOf, global.get, global.inherits, global.User, global.Upload, global.Gig, global.Location, global.RESTModel, global.TwitterAccount, global.FacebookAccount);
    global.Venue = mod.exports;
  }
})(this, function (_exports, _typeof2, _classCallCheck2, _createClass2, _possibleConstructorReturn2, _getPrototypeOf2, _get2, _inherits2, _User, _Upload, _Gig, _Location, _RESTModel2, _TwitterAccount, _FacebookAccount) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _typeof2 = _interopRequireDefault(_typeof2);
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _createClass2 = _interopRequireDefault(_createClass2);
  _possibleConstructorReturn2 = _interopRequireDefault(_possibleConstructorReturn2);
  _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf2);
  _get2 = _interopRequireDefault(_get2);
  _inherits2 = _interopRequireDefault(_inherits2);
  _User = _interopRequireDefault(_User);
  _Upload = _interopRequireDefault(_Upload);
  _Gig = _interopRequireDefault(_Gig);
  _Location = _interopRequireDefault(_Location);
  _RESTModel2 = _interopRequireDefault(_RESTModel2);
  _TwitterAccount = _interopRequireDefault(_TwitterAccount);
  _FacebookAccount = _interopRequireDefault(_FacebookAccount);

  /**
   * Created by corynull on 4/5/17.
   */
  var Venue =
  /*#__PURE__*/
  function (_RESTModel) {
    (0, _inherits2.default)(Venue, _RESTModel);

    function Venue() {
      (0, _classCallCheck2.default)(this, Venue);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Venue).apply(this, arguments));
    }

    (0, _createClass2.default)(Venue, [{
      key: "getIcon",
      value: function getIcon(token) {
        var icon = this.icon ? this.icon : null;
        return _Upload.default.findById(icon, token);
      }
    }, {
      key: "getPhotos",
      value: function getPhotos(token) {
        var photos = Array.from(this.photos);
        if (photos.length !== 0) return _Upload.default.findMany({
          _id: photos
        }, token);
        return Promise.resolve([]);
      }
    }, {
      key: "getOwners",
      value: function getOwners(token) {
        var owners = Array.from(this.owners);
        if (owners.length !== 0) return _User.default.findMany({
          _id: owners
        }, token);
        return Promise.resolve([]);
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
        var self = this;
        if (!(0, _get2.default)((0, _getPrototypeOf2.default)(Venue.prototype), "valid", this).call(this)) return false;
        if (!_RESTModel2.default.isValidId(this.location)) return false;
        if (this.location === "") return false;
        if (typeof this.name !== "string") return false;
        if (this.name === "") return false;
        if (typeof this.description !== "string") return false;
        if (this.description === "") return false;
        if (this.description === "<p><br></p>") return false;
        if (!Array.isArray(this.owners)) return false;
        if (this.owners.length === 0) return false;
        if (!this.owners.every(function (owner) {
          return self.userIsOwner(owner);
        })) return false;
        return true;
      } // TODO: Create isOpen method

    }, {
      key: "userIsOwner",
      value: function userIsOwner(user) {
        if (Array.isArray(this.owners)) {
          var userId = null;
          if (typeof user === "string") userId = user;else if ((0, _typeof2.default)(user) === "object" && user) userId = user._id;
          return this.owners.find(function (id) {
            return id === userId;
          }) !== undefined;
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
  Venue.ModelName = "Venue";
});