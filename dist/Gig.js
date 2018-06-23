"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _moment = _interopRequireDefault(require("moment"));

var _Band = _interopRequireDefault(require("./Band"));

var _Venue = _interopRequireDefault(require("./Venue"));

var _Location = _interopRequireDefault(require("./Location"));

var _API = _interopRequireDefault(require("./API"));

var _RESTModel2 = _interopRequireDefault(require("./RESTModel"));

/**
 * Created by corynull on 4/5/17.
 */
var Gig =
/*#__PURE__*/
function (_RESTModel) {
  (0, _inherits2.default)(Gig, _RESTModel);

  function Gig() {
    (0, _classCallCheck2.default)(this, Gig);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Gig).apply(this, arguments));
  }

  (0, _createClass2.default)(Gig, [{
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
      if (!(0, _get2.default)((0, _getPrototypeOf2.default)(Gig.prototype), "valid", this).call(this)) return false;
      if (!Array.isArray(this.owners)) return false;
      if (this.owners.length === 0) return false;
      return true;
    }
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
      var _findByBand = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(bandId, token) {
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
                  var item = new Gig(itemData);

                  _RESTModel2.default.Cache.set(item._id, item);

                  return item;
                }));

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
      var _findByVenue = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2(venueId, token) {
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
                  var item = new Gig(itemData);

                  _RESTModel2.default.Cache.set(item._id, item);

                  return item;
                }));

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
      return new Promise(function (resolve, reject) {
        var data = gigData || {};

        if (data && (0, _typeof2.default)(data) === "object") {
          if (!data.band || data.band === "") return reject(new Error("Band is required"));
          if (!data.venue || data.venue === "") return reject(new Error("Venue is required"));
          if (!data.times || data.times.length === 0) return reject(new Error("Times is required"));
          var filtered = data.times.filter(function (time, i) {
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
          });
          if (filtered.length !== data.times.length) return reject(new Error("Not all times were valid"));
          data.times = filtered;
          data.token = token;

          var request = _API.default.Call("POST", "/API/Gig", data);

          return request.then(function (response) {
            var gigs = Array.from(response || []);
            gigs = gigs.map(function (itemData) {
              var gig = new Gig(itemData);
              return gig;
            });
            resolve(gigs);
          }, reject);
        }

        return null;
      });
    }
  }, {
    key: "getAllInDistance",
    value: function getAllInDistance(location, distance) {
      return new Promise(function (resolve, reject) {
        if ((0, _typeof2.default)(location) !== "object") return reject(new Error("location is not a object!"));
        if (typeof location.lat !== "number" || typeof location.lng !== "number") return reject(new Error("location does not contain lat or lng!"));
        if (typeof distance !== "number") return reject(new Error("radius is not a number!"));
        return _API.default.Call("GET", "/API/Gig/InDistance", {
          lat: location.lat,
          lng: location.lng,
          dis: distance
        }).then(function (gigs) {
          resolve(Array.from(gigs || []).map(function (item) {
            var gig = new Gig(item);
            return gig;
          }));
        }, reject);
      });
    }
  }]);
  return Gig;
}(_RESTModel2.default);

exports.default = Gig;
(0, _defineProperty2.default)(Gig, "ModelName", "Gig");