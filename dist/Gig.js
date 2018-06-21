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

var _from = _interopRequireDefault(require("@babel/runtime/core-js/array/from"));

var _promise = _interopRequireDefault(require("@babel/runtime/core-js/promise"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

require("regenerator-runtime/runtime");

var _moment = _interopRequireDefault(require("moment"));

var _Band = _interopRequireDefault(require("./Band"));

var _Venue = _interopRequireDefault(require("./Venue"));

var _Location = _interopRequireDefault(require("./Location"));

var _API = _interopRequireDefault(require("./API"));

var _RESTModel2 = _interopRequireDefault(require("./RESTModel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new _promise.default(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { _promise.default.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

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

var Gig =
/*#__PURE__*/
function (_RESTModel) {
  _inherits(Gig, _RESTModel);

  function Gig() {
    _classCallCheck(this, Gig);

    return _possibleConstructorReturn(this, _getPrototypeOf(Gig).apply(this, arguments));
  }

  _createClass(Gig, [{
    key: "getBands",
    value: function getBands(token) {
      return _Band.default.findMany({
        _id: this.bands
      }, token);
    }
  }, {
    key: "getVenue",
    value: function getVenue(token) {
      return _Venue.default.findById(this.venue, token);
    }
  }, {
    key: "getLocation",
    value: function getLocation(token) {
      return _Location.default.findById(this.location, token);
    }
  }, {
    key: "valid",
    value: function valid() {
      if (!_get(_getPrototypeOf(Gig.prototype), "valid", this).call(this)) return false;
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
    key: "startTime",
    get: function get() {
      var startTime = this.getField("startTime");
      return startTime ? (0, _moment.default)(startTime) : startTime;
    },
    set: function set(value) {
      this.setField("startTime", value);
    }
  }, {
    key: "stopTime",
    get: function get() {
      var stopTime = this.getField("stopTime");
      return stopTime ? (0, _moment.default)(stopTime) : stopTime;
    },
    set: function set(value) {
      this.setField("stopTime", value);
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
    key: "venue",
    get: function get() {
      return this.getField("venue");
    },
    set: function set(value) {
      this.setField("venue", value);
    }
  }, {
    key: "bands",
    get: function get() {
      return this.getField("bands");
    },
    set: function set(value) {
      this.setField("bands", value);
    }
  }, {
    key: "active",
    get: function get() {
      return this.getField("active");
    }
  }, {
    key: "toBeAnnounced",
    get: function get() {
      return this.getField("toBeAnnounced");
    },
    set: function set(value) {
      this.setField("toBeAnnounced", value);
    }
  }, {
    key: "bandOwnersAccepted",
    get: function get() {
      return this.getField("bandOwnersAccepted");
    },
    set: function set(value) {
      this.setField("bandOwnersAccepted", value);
    }
  }, {
    key: "venueOwnerAccepted",
    get: function get() {
      return this.getField("venueOwnerAccepted");
    },
    set: function set(value) {
      this.setField("venueOwnerAccepted", value);
    }
  }, {
    key: "owners",
    get: function get() {
      return this.getField("owners");
    },
    set: function set(value) {
      this.setField("owners", value);
    }
  }], [{
    key: "findById",
    value: function findById(id, token) {
      return _RESTModel2.default.findById(Gig, id, token, true);
    }
  }, {
    key: "findByBand",
    value: function () {
      var _findByBand = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(bandId, token) {
        var _this2 = this;

        var data;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _API.default.Call("GET", "/API/Band/".concat(bandId, "/Gigs"), {
                  token: token
                });

              case 2:
                data = _context.sent;

                if (!(data && Array.isArray(data))) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt("return", data.map(function (itemData) {
                  _newArrowCheck(this, _this2);

                  var item = new Gig(itemData);

                  _RESTModel2.default.Cache.set(item._id, item);

                  return item;
                }.bind(this)));

              case 5:
                throw new Error("Expected Array, got ".concat(data));

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function findByBand(_x, _x2) {
        return _findByBand.apply(this, arguments);
      };
    }()
  }, {
    key: "findByVenue",
    value: function () {
      var _findByVenue = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2(venueId, token) {
        var _this3 = this;

        var data;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _API.default.Call("GET", "/API/Venue/".concat(venueId, "/Gigs"), {
                  token: token
                });

              case 2:
                data = _context2.sent;

                if (!(data && Array.isArray(data))) {
                  _context2.next = 5;
                  break;
                }

                return _context2.abrupt("return", data.map(function (itemData) {
                  _newArrowCheck(this, _this3);

                  var item = new Gig(itemData);

                  _RESTModel2.default.Cache.set(item._id, item);

                  return item;
                }.bind(this)));

              case 5:
                throw new Error("Expected Array, got ".concat(data));

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function findByVenue(_x3, _x4) {
        return _findByVenue.apply(this, arguments);
      };
    }()
  }, {
    key: "getAllOwned",
    value: function getAllOwned(token) {
      return _RESTModel2.default.findMany(Gig, null, token, true);
    }
  }, {
    key: "findMany",
    value: function findMany(criteria, token) {
      return _RESTModel2.default.findMany(Gig, criteria, token, true);
    }
  }, {
    key: "createGigs",
    value: function createGigs(gigData, token) {
      var _this4 = this;

      return new _promise.default(function (resolve, reject) {
        var _this5 = this;

        _newArrowCheck(this, _this4);

        var data = gigData || {};

        if (data && _typeof(data) === "object") {
          if (!data.band || data.band === "") return reject(new Error("Band is required"));
          if (!data.venue || data.venue === "") return reject(new Error("Venue is required"));
          if (!data.times || data.times.length === 0) return reject(new Error("Times is required"));
          var filtered = data.times.filter(function (time, i) {
            _newArrowCheck(this, _this5);

            if (time.dayDate && time.startTime && time.stopTime) {
              var dayDate = (0, _moment.default)(time.dayDate);
              var startTime = (0, _moment.default)(time.startTime);
              startTime.year(dayDate.year());
              startTime.month(dayDate.month());
              startTime.date(dayDate.date());
              var stopTime = (0, _moment.default)(time.stopTime);
              stopTime.year(dayDate.year());
              stopTime.month(dayDate.month());
              stopTime.date(dayDate.date());
              data.times[i] = {
                startTime: time.startTime,
                stopTime: time.stopTime
              };
              return true;
            } else if (time.startTime && time.stopTime) {
              data.times[i] = {
                startTime: time.startTime,
                stopTime: time.stopTime
              };
              return true;
            }

            return false;
          }.bind(this));
          if (filtered.length !== data.times.length) return reject(new Error("Not all times were valid"));
          data.times = filtered;
          data.token = token;

          var request = _API.default.Call("POST", "/API/Gig", data);

          return request.then(function (response) {
            var _this6 = this;

            _newArrowCheck(this, _this5);

            var gigs = (0, _from.default)(response || []);
            gigs = gigs.map(function (itemData) {
              _newArrowCheck(this, _this6);

              var gig = new Gig(itemData);
              return gig;
            }.bind(this));
            resolve(gigs);
          }.bind(this), reject);
        }

        return null;
      }.bind(this));
    }
  }, {
    key: "getAllInDistance",
    value: function getAllInDistance(location, distance) {
      var _this7 = this;

      return new _promise.default(function (resolve, reject) {
        var _this8 = this;

        _newArrowCheck(this, _this7);

        if (_typeof(location) !== "object") return reject(new Error("location is not a object!"));
        if (typeof location.lat !== "number" || typeof location.lng !== "number") return reject(new Error("location does not contain lat or lng!"));
        if (typeof distance !== "number") return reject(new Error("radius is not a number!"));
        return _API.default.Call("GET", "/API/Gig/InDistance", {
          lat: location.lat,
          lng: location.lng,
          dis: distance
        }).then(function (gigs) {
          var _this9 = this;

          _newArrowCheck(this, _this8);

          resolve((0, _from.default)(gigs || []).map(function (item) {
            _newArrowCheck(this, _this9);

            var gig = new Gig(item);
            return gig;
          }.bind(this)));
        }.bind(this), reject);
      }.bind(this));
    }
  }]);

  return Gig;
}(_RESTModel2.default);

exports.default = Gig;

_defineProperty(Gig, "ModelName", "Gig");