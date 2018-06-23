"use strict";

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(require("@babel/runtime/core-js/map"));

var _getOwnPropertyDescriptor = _interopRequireDefault(require("@babel/runtime/core-js/object/get-own-property-descriptor"));

var _getOwnPropertySymbols = _interopRequireDefault(require("@babel/runtime/core-js/object/get-own-property-symbols"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/core-js/object/define-property"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _promise = _interopRequireDefault(require("@babel/runtime/core-js/promise"));

var _keys = _interopRequireDefault(require("@babel/runtime/core-js/object/keys"));

var _stringify = _interopRequireDefault(require("@babel/runtime/core-js/json/stringify"));

var _assign = _interopRequireDefault(require("@babel/runtime/core-js/object/assign"));

var _moment = _interopRequireDefault(require("moment"));

var _API = _interopRequireDefault(require("./API"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = (0, _keys.default)(source); if (typeof _getOwnPropertySymbols.default === 'function') { ownKeys = ownKeys.concat((0, _getOwnPropertySymbols.default)(source).filter(function (sym) { return (0, _getOwnPropertyDescriptor.default)(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new _promise.default(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { _promise.default.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; (0, _defineProperty2.default)(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { (0, _defineProperty2.default)(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var RESTModel =
/*#__PURE__*/
function () {
  var _proto = RESTModel.prototype;

  _proto.setField = function setField(name, value) {
    var currentValue = this.getField(name) || undefined;

    if (currentValue !== value) {
      this.changes[name] = value;
      this.dateModified = Date.now();
    }
  };

  _proto.getField = function getField(name) {
    var data = this.changes[name];
    if (typeof data !== "undefined") return data;
    data = this.document[name];
    if (typeof data !== "undefined") return data;
    return null;
  };

  _createClass(RESTModel, [{
    key: "ModelName",
    get: function get() {
      return this.constructor.ModelName || this.document.ModelName || null;
    }
  }, {
    key: "dateCreated",
    get: function get() {
      var dateCreated = this.document.dateCreated || null;
      return dateCreated ? (0, _moment.default)(dateCreated) : dateCreated;
    }
  }, {
    key: "dateModified",
    get: function get() {
      var dateModified = this.getField("dateModified") || null;
      return dateModified ? (0, _moment.default)(dateModified) : dateModified;
    },
    set: function set(value) {
      this.changes.dateModified = (0, _moment.default)(value || undefined).toISOString();
    }
  }, {
    key: "id",
    get: function get() {
      return this.getField("_id");
    },
    set: function set(value) {
      this.setField("_id", value);
    }
  }, {
    key: "_id",
    get: function get() {
      return this.getField("_id");
    },
    set: function set(value) {
      this.setField("_id", value);
    }
  }]);

  function RESTModel(dataMaybe) {
    this.document = {};
    this.changes = {};

    if (typeof dataMaybe === "string") {
      try {
        var data = JSON.parse(dataMaybe);
        if (typeof data.ModelName !== "undefined") delete data.ModelName;
        (0, _assign.default)(this.document, data);
      } catch (e) {
        console.error(e);
      }
    } else if (dataMaybe) {
      if (typeof dataMaybe.document === "object") (0, _assign.default)(this.document, dataMaybe.document);else (0, _assign.default)(this.document, dataMaybe);
    }
  }

  _proto.toObject = function toObject() {
    return this.valid() ? (0, _assign.default)({}, this.changes, this.document) : null;
  };

  _proto.toString = function toString() {
    return this.valid() ? (0, _stringify.default)((0, _assign.default)({}, this.changes, this.document)) : "null";
  };

  _proto.valid = function valid() {
    if (!RESTModel.isValidId(this.id)) return false;
    if (!this.dateModified || !this.dateModified.isValid()) return false;
    if (!this.dateCreated || !this.dateCreated.isValid()) return false;
    return true;
  };

  _proto.assign = function assign(data) {
    if (data === void 0) {
      data = {};
    }

    (0, _assign.default)(this.changes, data);
    return this;
  };

  _proto.save =
  /*#__PURE__*/
  function () {
    var _save = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee(token, hasWebSocket) {
      var _this = this;

      var modelName, response, id, data;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (hasWebSocket === void 0) {
                hasWebSocket = false;
              }

              modelName = this.ModelName || this.constructor.ModelName;
              response = null;
              id = this.document.id || null;
              data = this.changes;
              (0, _keys.default)(this.changes).forEach(function (key) {
                _newArrowCheck(this, _this);

                if (data[key] === this.document[key]) delete data[key];
              }.bind(this));
              data.id = this.changes._id || this.document._id || null;

              if (!(_API.default.UseSocketIO && _API.default.ShouldUseSocketIO && hasWebSocket)) {
                _context.next = 19;
                break;
              }

              if (!RESTModel.isValidId(id)) {
                _context.next = 14;
                break;
              }

              _context.next = 11;
              return new _promise.default(function (resolve, reject) {
                var _this2 = this;

                _newArrowCheck(this, _this);

                return _API.default.GetSocket(token).then(function (socket) {
                  _newArrowCheck(this, _this2);

                  return socket.emit("/API/" + modelName + "/Update", data, resolve);
                }.bind(this), reject);
              }.bind(this));

            case 11:
              response = _context.sent;
              _context.next = 17;
              break;

            case 14:
              _context.next = 16;
              return new _promise.default(function (resolve, reject) {
                var _this3 = this;

                _newArrowCheck(this, _this);

                return _API.default.GetSocket(token).then(function (socket) {
                  _newArrowCheck(this, _this3);

                  return socket.emit("/API/" + modelName + "/Create", data, resolve);
                }.bind(this), reject);
              }.bind(this));

            case 16:
              response = _context.sent;

            case 17:
              _context.next = 29;
              break;

            case 19:
              data.token = token;

              if (!RESTModel.isValidId(id)) {
                _context.next = 26;
                break;
              }

              _context.next = 23;
              return _API.default.Call("PUT", "/API/" + modelName + "/" + id, data);

            case 23:
              response = _context.sent;
              _context.next = 29;
              break;

            case 26:
              _context.next = 28;
              return _API.default.Call("POST", "/API/" + modelName + "/", data);

            case 28:
              response = _context.sent;

            case 29:
              if (!(response && response._id)) {
                _context.next = 35;
                break;
              }

              this.document = response;
              this.changes = {};
              RESTModel.Cache.delete(id);
              RESTModel.Cache.set(response._id, this);
              return _context.abrupt("return", this);

            case 35:
              throw new Error("returned " + response);

            case 36:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function save(_x, _x2) {
      return _save.apply(this, arguments);
    };
  }();

  _proto.remove =
  /*#__PURE__*/
  function () {
    var _remove = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee2(token, hasWebSocket) {
      var _this4 = this;

      var id, response, modelName;
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (hasWebSocket === void 0) {
                hasWebSocket = false;
              }

              id = this._id || null;

              if (!RESTModel.isValidId(id)) {
                _context2.next = 16;
                break;
              }

              response = null;
              modelName = this.ModelName || this.constructor.ModelName;

              if (!(_API.default.UseSocketIO && _API.default.ShouldUseSocketIO && hasWebSocket)) {
                _context2.next = 11;
                break;
              }

              _context2.next = 8;
              return new _promise.default(function (resolve, reject) {
                var _this5 = this;

                _newArrowCheck(this, _this4);

                return _API.default.GetSocket(token).then(function (socket) {
                  var _this6 = this;

                  _newArrowCheck(this, _this5);

                  return socket.emit("/API/" + modelName + "/Delete", id, function (res) {
                    _newArrowCheck(this, _this6);

                    return resolve(res);
                  }.bind(this));
                }.bind(this), reject);
              }.bind(this));

            case 8:
              response = _context2.sent;
              _context2.next = 14;
              break;

            case 11:
              _context2.next = 13;
              return _API.default.Call("DELETE", "/API/" + modelName + "/" + id, {
                token: token
              });

            case 13:
              response = _context2.sent;

            case 14:
              RESTModel.Cache.set(id, null);
              return _context2.abrupt("return", response);

            case 16:
              throw new Error("Invalid id: " + id);

            case 17:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    return function remove(_x3, _x4) {
      return _remove.apply(this, arguments);
    };
  }();

  RESTModel.isValidId = function isValidId(id) {
    return typeof id === "string" && /^([0-9a-fA-F]{24}|[0-9a-fA-F]{12})$/.test(id);
  };

  RESTModel.findById =
  /*#__PURE__*/
  function () {
    var _findById = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee3(Model, id, token, hasWebSocket) {
      var _this7 = this;

      var data, modelName;
      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (hasWebSocket === void 0) {
                hasWebSocket = false;
              }

              if (!RESTModel.isValidId(id)) {
                _context3.next = 15;
                break;
              }

              data = null;
              modelName = Model.ModelName || Model.constructor.ModelName;

              if (!(_API.default.UseSocketIO && _API.default.ShouldUseSocketIO && hasWebSocket)) {
                _context3.next = 9;
                break;
              }

              if (!socket) {
                _context3.next = 9;
                break;
              }

              _context3.next = 8;
              return new _promise.default(function (resolve, reject) {
                var _this8 = this;

                _newArrowCheck(this, _this7);

                return _API.default.GetSocket(token).then(function (socket) {
                  _newArrowCheck(this, _this8);

                  return socket.emit("/API/" + modelName + "/Retreive", id, resolve);
                }.bind(this), reject);
              }.bind(this));

            case 8:
              data = _context3.sent;

            case 9:
              if (data) {
                _context3.next = 13;
                break;
              }

              _context3.next = 12;
              return _API.default.Call("GET", "/API/" + modelName + "/" + id, {
                token: token
              });

            case 12:
              data = _context3.sent;

            case 13:
              if (!(data && RESTModel.isValidId(data._id))) {
                _context3.next = 15;
                break;
              }

              return _context3.abrupt("return", new Model(data));

            case 15:
              return _context3.abrupt("return", null);

            case 16:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    return function findById(_x5, _x6, _x7, _x8) {
      return _findById.apply(this, arguments);
    };
  }();

  RESTModel.findOne =
  /*#__PURE__*/
  function () {
    var _findOne = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee4(Model, criteriaMaybe, token, hasWebSocket) {
      var _this9 = this;

      var criteria, data, modelName, route, _socket;

      return _regenerator.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              if (hasWebSocket === void 0) {
                hasWebSocket = false;
              }

              criteria = criteriaMaybe || {};
              data = null;
              modelName = Model.ModelName || Model.constructor.ModelName;
              route = "/API/" + modelName + "/FindOne";

              if (!(_API.default.UseSocketIO && _API.default.ShouldUseSocketIO && hasWebSocket)) {
                _context4.next = 13;
                break;
              }

              _context4.next = 8;
              return _API.default.GetSocket(token);

            case 8:
              _socket = _context4.sent;

              if (!_socket) {
                _context4.next = 13;
                break;
              }

              _context4.next = 12;
              return new _promise.default(function (resolve, reject) {
                _newArrowCheck(this, _this9);

                try {
                  _socket.emit(route, criteria, resolve);
                } catch (e) {
                  reject(e);
                }
              }.bind(this));

            case 12:
              data = _context4.sent;

            case 13:
              if (data) {
                _context4.next = 17;
                break;
              }

              _context4.next = 16;
              return _API.default.Call("GET", route, _objectSpread({}, criteria, {
                token: token
              }));

            case 16:
              data = _context4.sent;

            case 17:
              if (!(data && RESTModel.isValidId(data._id))) {
                _context4.next = 19;
                break;
              }

              return _context4.abrupt("return", new Model(data));

            case 19:
              return _context4.abrupt("return", null);

            case 20:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    return function findOne(_x9, _x10, _x11, _x12) {
      return _findOne.apply(this, arguments);
    };
  }();

  RESTModel.findMany =
  /*#__PURE__*/
  function () {
    var _findMany = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee5(Model, criteriaMaybe, token, hasWebSocket) {
      var _this10 = this;

      var criteria, data, modelName, route;
      return _regenerator.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              if (hasWebSocket === void 0) {
                hasWebSocket = false;
              }

              criteria = criteriaMaybe || null;
              data = null;
              modelName = Model.ModelName || Model.constructor.ModelName;
              route = "/API/" + modelName + "/FindMany";

              if (!(_API.default.UseSocketIO && _API.default.ShouldUseSocketIO && hasWebSocket)) {
                _context5.next = 9;
                break;
              }

              _context5.next = 8;
              return new _promise.default(function (resolve, reject) {
                var _this11 = this;

                _newArrowCheck(this, _this10);

                return _API.default.GetSocket(token).then(function (socket) {
                  _newArrowCheck(this, _this11);

                  return socket.emit(route, criteria, resolve);
                }.bind(this), reject);
              }.bind(this));

            case 8:
              data = _context5.sent;

            case 9:
              criteria = criteria || {};

              if (data) {
                _context5.next = 14;
                break;
              }

              _context5.next = 13;
              return _API.default.Call("GET", route, _objectSpread({}, criteria, {
                token: token
              }));

            case 13:
              data = _context5.sent;

            case 14:
              if (!Array.isArray(data)) {
                _context5.next = 16;
                break;
              }

              return _context5.abrupt("return", data.map(function (itemData) {
                _newArrowCheck(this, _this10);

                var item = new Model(itemData);
                RESTModel.Cache.set(item._id, item);
                return item;
              }.bind(this)));

            case 16:
              return _context5.abrupt("return", []);

            case 17:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));

    return function findMany(_x13, _x14, _x15, _x16) {
      return _findMany.apply(this, arguments);
    };
  }();

  return RESTModel;
}();

exports.default = RESTModel;

_defineProperty(RESTModel, "Cache", new _map.default
/* [String, Object] */
());