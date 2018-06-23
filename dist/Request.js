"use strict";

exports.__esModule = true;
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/core-js/object/define-property"));

var _create = _interopRequireDefault(require("@babel/runtime/core-js/object/create"));

var _promise = _interopRequireDefault(require("@babel/runtime/core-js/promise"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _assign = _interopRequireDefault(require("@babel/runtime/core-js/object/assign"));

var _API = _interopRequireDefault(require("./API"));

var _RESTModel2 = _interopRequireDefault(require("./RESTModel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new _promise.default(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { _promise.default.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; (0, _defineProperty2.default)(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = (0, _create.default)(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { (0, _defineProperty2.default)(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Request =
/*#__PURE__*/
function (_RESTModel) {
  _inheritsLoose(Request, _RESTModel);

  function Request() {
    return _RESTModel.apply(this, arguments) || this;
  }

  var _proto = Request.prototype;

  _proto.execute =
  /*#__PURE__*/
  function () {
    var _execute = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee(option, token) {
      var request;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _API.default.Call("POST", "/API/Request/" + this._id + "/" + option, {
                token: token
              });

            case 2:
              request = _context.sent;
              (0, _assign.default)(this.document, request);
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
  }();

  Request.createBandOwnershipRequest = function createBandOwnershipRequest(band, from, to, token) {
    var _this = this;

    return new _promise.default(function (resolve, reject) {
      var _this2 = this;

      _newArrowCheck(this, _this);

      _API.default.Call("POST", "/API/Request", {
        from: from,
        to: to,
        type: "BandOwnership",
        userData: {
          bandId: band
        },
        token: token
      }).then(function (data) {
        _newArrowCheck(this, _this2);

        resolve(new Request(data));
      }.bind(this), reject);
    }.bind(this));
  };

  Request.createVenueOwnershipRequest = function createVenueOwnershipRequest(venue, from, to, token) {
    var _this3 = this;

    return new _promise.default(function (resolve, reject) {
      var _this4 = this;

      _newArrowCheck(this, _this3);

      _API.default.Call("POST", "/API/Request", {
        from: from,
        to: to,
        type: "VenueOwnership",
        userData: {
          venueId: venue
        },
        token: token
      }).then(function (data) {
        _newArrowCheck(this, _this4);

        resolve(new Request(data));
      }.bind(this), reject);
    }.bind(this));
  };

  Request.createGigNegotiation = function createGigNegotiation(gig, from, to, token) {
    var _this5 = this;

    return new _promise.default(function (resolve, reject) {
      var _this6 = this;

      _newArrowCheck(this, _this5);

      _API.default.Call("POST", "/API/Request", {
        from: from,
        to: to,
        type: "GigNegotiation",
        userData: {
          gigId: gig
        },
        token: token
      }).then(function (data) {
        _newArrowCheck(this, _this6);

        resolve(new Request(data));
      }.bind(this), reject);
    }.bind(this));
  };

  Request.getAllOwned = function getAllOwned(token) {
    return _RESTModel2.default.findMany(Request, null, token);
  };

  Request.findById = function findById(id, token) {
    return _RESTModel2.default.findById(Request, id, token);
  };

  _createClass(Request, [{
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
  }]);

  return Request;
}(_RESTModel2.default);

exports.default = Request;

_defineProperty(Request, "ModelName", "Request");