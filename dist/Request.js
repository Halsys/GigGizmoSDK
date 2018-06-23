(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@babel/runtime/regenerator", "@babel/runtime/helpers/asyncToGenerator", "@babel/runtime/helpers/classCallCheck", "@babel/runtime/helpers/createClass", "@babel/runtime/helpers/possibleConstructorReturn", "@babel/runtime/helpers/getPrototypeOf", "@babel/runtime/helpers/inherits", "./API", "./RESTModel"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@babel/runtime/regenerator"), require("@babel/runtime/helpers/asyncToGenerator"), require("@babel/runtime/helpers/classCallCheck"), require("@babel/runtime/helpers/createClass"), require("@babel/runtime/helpers/possibleConstructorReturn"), require("@babel/runtime/helpers/getPrototypeOf"), require("@babel/runtime/helpers/inherits"), require("./API"), require("./RESTModel"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.regenerator, global.asyncToGenerator, global.classCallCheck, global.createClass, global.possibleConstructorReturn, global.getPrototypeOf, global.inherits, global.API, global.RESTModel);
    global.Request = mod.exports;
  }
})(this, function (_exports, _regenerator, _asyncToGenerator2, _classCallCheck2, _createClass2, _possibleConstructorReturn2, _getPrototypeOf2, _inherits2, _API, _RESTModel2) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _regenerator = _interopRequireDefault(_regenerator);
  _asyncToGenerator2 = _interopRequireDefault(_asyncToGenerator2);
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _createClass2 = _interopRequireDefault(_createClass2);
  _possibleConstructorReturn2 = _interopRequireDefault(_possibleConstructorReturn2);
  _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf2);
  _inherits2 = _interopRequireDefault(_inherits2);
  _API = _interopRequireDefault(_API);
  _RESTModel2 = _interopRequireDefault(_RESTModel2);

  /**
   * Created by corynull on Nov 30 2017 5:27 AM.
   */
  var Request =
  /*#__PURE__*/
  function (_RESTModel) {
    (0, _inherits2.default)(Request, _RESTModel);

    function Request() {
      (0, _classCallCheck2.default)(this, Request);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Request).apply(this, arguments));
    }

    (0, _createClass2.default)(Request, [{
      key: "execute",
      value: function () {
        var _execute = (0, _asyncToGenerator2.default)(
        /*#__PURE__*/
        _regenerator.default.mark(function _callee(option, token) {
          var request;
          return _regenerator.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return _API.default.Call("POST", "/API/Request/".concat(this._id, "/").concat(option), {
                    token: token
                  });

                case 2:
                  request = _context.sent;
                  Object.assign(this.document, request);
                  return _context.abrupt("return", this);

                case 5:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        return function execute(_x, _x2) {
          return _execute.apply(this, arguments);
        };
      }()
    }, {
      key: "to",
      get: function get() {
        return this.getField("to");
      },
      set: function set(value) {
        this.setField("to", value);
      }
    }, {
      key: "from",
      get: function get() {
        return this.getField("from");
      },
      set: function set(value) {
        this.setField("from", value);
      }
    }, {
      key: "status",
      get: function get() {
        return this.getField("status");
      },
      set: function set(value) {
        this.setField("status", value);
      }
    }, {
      key: "options",
      get: function get() {
        return this.getField("options");
      },
      set: function set(value) {
        this.setField("options", value);
      }
    }, {
      key: "type",
      get: function get() {
        return this.getField("type");
      },
      set: function set(value) {
        this.setField("type", value);
      }
    }, {
      key: "userData",
      get: function get() {
        return this.getField("userData");
      },
      set: function set(value) {
        this.setField("userData", value);
      }
    }, {
      key: "emailSent",
      get: function get() {
        return this.getField("emailSent");
      },
      set: function set(value) {
        this.setField("emailSent", value);
      }
    }], [{
      key: "createBandOwnershipRequest",
      value: function createBandOwnershipRequest(band, from, to, token) {
        return new Promise(function (resolve, reject) {
          _API.default.Call("POST", "/API/Request", {
            from: from,
            to: to,
            type: "BandOwnership",
            userData: {
              bandId: band
            },
            token: token
          }).then(function (data) {
            resolve(new Request(data));
          }, reject);
        });
      }
    }, {
      key: "createVenueOwnershipRequest",
      value: function createVenueOwnershipRequest(venue, from, to, token) {
        return new Promise(function (resolve, reject) {
          _API.default.Call("POST", "/API/Request", {
            from: from,
            to: to,
            type: "VenueOwnership",
            userData: {
              venueId: venue
            },
            token: token
          }).then(function (data) {
            resolve(new Request(data));
          }, reject);
        });
      }
    }, {
      key: "createGigNegotiation",
      value: function createGigNegotiation(gig, from, to, token) {
        return new Promise(function (resolve, reject) {
          _API.default.Call("POST", "/API/Request", {
            from: from,
            to: to,
            type: "GigNegotiation",
            userData: {
              gigId: gig
            },
            token: token
          }).then(function (data) {
            resolve(new Request(data));
          }, reject);
        });
      }
    }, {
      key: "getAllOwned",
      value: function getAllOwned(token) {
        return _RESTModel2.default.findMany(Request, null, token);
      }
    }, {
      key: "findById",
      value: function findById(id, token) {
        return _RESTModel2.default.findById(Request, id, token);
      }
    }]);
    return Request;
  }(_RESTModel2.default);

  _exports.default = Request;
  Request.ModelName = "Request";
});