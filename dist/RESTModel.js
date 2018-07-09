"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _map = _interopRequireDefault(require("@babel/runtime/core-js/map"));

var _getOwnPropertyDescriptor = _interopRequireDefault(require("@babel/runtime/core-js/object/get-own-property-descriptor"));

var _getOwnPropertySymbols = _interopRequireDefault(require("@babel/runtime/core-js/object/get-own-property-symbols"));

var _iterator = _interopRequireDefault(require("@babel/runtime/core-js/symbol/iterator"));

var _symbol = _interopRequireDefault(require("@babel/runtime/core-js/symbol"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/core-js/object/define-property"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _promise = _interopRequireDefault(require("@babel/runtime/core-js/promise"));

var _keys = _interopRequireDefault(require("@babel/runtime/core-js/object/keys"));

require("core-js/modules/web.dom.iterable");

require("regenerator-runtime/runtime");

var _stringify = _interopRequireDefault(require("@babel/runtime/core-js/json/stringify"));

var _assign = _interopRequireDefault(require("@babel/runtime/core-js/object/assign"));

var _moment = _interopRequireDefault(require("moment"));

var _index = require("./index");

var _API = _interopRequireDefault(require("./API"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = (0, _keys.default)(source); if (typeof _getOwnPropertySymbols.default === 'function') { ownKeys = ownKeys.concat((0, _getOwnPropertySymbols.default)(source).filter(function (sym) { return (0, _getOwnPropertyDescriptor.default)(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { _promise.default.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new _promise.default(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _typeof(obj) { if (typeof _symbol.default === "function" && typeof _iterator.default === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof _symbol.default === "function" && obj.constructor === _symbol.default && obj !== _symbol.default.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; (0, _defineProperty2.default)(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { (0, _defineProperty2.default)(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var RESTModel =
/*#__PURE__*/
function () {
  _createClass(RESTModel, [{
    key: "setField",
    value: function setField(name, value) {
      var currentValue = this.getField(name) || undefined;

      if (currentValue !== value) {
        this.changes[name] = value;
        this.dateModified = Date.now();
      }
    }
  }, {
    key: "getField",
    value: function getField(name) {
      var data = this.changes[name];
      if (typeof data !== "undefined") return data;
      data = this.document[name];
      if (typeof data !== "undefined") return data;
      return null;
    }
  }, {
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
    _classCallCheck(this, RESTModel);

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
      if (_typeof(dataMaybe.document) === "object") (0, _assign.default)(this.document, dataMaybe.document);else (0, _assign.default)(this.document, dataMaybe);
    }
  }

  _createClass(RESTModel, [{
    key: "toObject",
    value: function toObject() {
      return this.valid() ? (0, _assign.default)({}, this.changes, this.document) : null;
    }
  }, {
    key: "toString",
    value: function toString() {
      return this.valid() ? (0, _stringify.default)((0, _assign.default)({}, this.changes, this.document)) : "null";
    }
  }, {
    key: "valid",
    value: function valid() {
      if (!RESTModel.isValidId(this.id)) return false;
      if (!this.dateModified || !this.dateModified.isValid()) return false;
      if (!this.dateCreated || !this.dateCreated.isValid()) return false;
      return true;
    }
  }, {
    key: "assign",
    value: function assign() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      (0, _assign.default)(this.changes, data);
      return this;
    }
  }, {
    key: "save",
    value: function () {
      var _save = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(token) {
        var _this = this;

        var hasWebSocket,
            modelName,
            response,
            id,
            data,
            _args = arguments;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                hasWebSocket = _args.length > 1 && _args[1] !== undefined ? _args[1] : false;
                modelName = this.ModelName;
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

                    return socket.emit("/API/".concat(modelName, "/Update"), data, resolve);
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

                    return socket.emit("/API/".concat(modelName, "/Create"), data, resolve);
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
                return _API.default.Call("PUT", "/API/".concat(modelName, "/").concat(id), data);

              case 23:
                response = _context.sent;
                _context.next = 29;
                break;

              case 26:
                _context.next = 28;
                return _API.default.Call("POST", "/API/".concat(modelName, "/"), data);

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
                throw new Error("returned ".concat(response));

              case 36:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function save(_x) {
        return _save.apply(this, arguments);
      };
    }()
  }, {
    key: "remove",
    value: function () {
      var _remove = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2(token) {
        var _this4 = this;

        var hasWebSocket,
            id,
            response,
            modelName,
            _args2 = arguments;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                hasWebSocket = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : false;
                id = this._id || null;

                if (!RESTModel.isValidId(id)) {
                  _context2.next = 16;
                  break;
                }

                response = null;
                modelName = this.ModelName;

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

                    return socket.emit("/API/".concat(modelName, "/Delete"), id, function (res) {
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
                return _API.default.Call("DELETE", "/API/".concat(modelName, "/").concat(id), {
                  token: token
                });

              case 13:
                response = _context2.sent;

              case 14:
                RESTModel.Cache.set(id, null);
                return _context2.abrupt("return", response);

              case 16:
                throw new Error("Invalid id: ".concat(id));

              case 17:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function remove(_x2) {
        return _remove.apply(this, arguments);
      };
    }()
  }], [{
    key: "isValidId",
    value: function isValidId(id) {
      return typeof id === "string" && /^([0-9a-fA-F]{24}|[0-9a-fA-F]{12})$/.test(id);
    }
  }, {
    key: "getModelName",
    value: function getModelName(Model) {
      if (Model == null) return null;
      if (Model.ModelName) return Model.ModelName;
      if (Model.constructor && Model.constructor.ModelName) return Model.constructor.ModelName;
    }
  }, {
    key: "findById",
    value: function () {
      var _findById = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee3(ModelMaybe, id, token) {
        var _this7 = this;

        var hasWebSocket,
            data,
            Model,
            modelName,
            _args3 = arguments;
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                hasWebSocket = _args3.length > 3 && _args3[3] !== undefined ? _args3[3] : false;

                if (!RESTModel.isValidId(id)) {
                  _context3.next = 22;
                  break;
                }

                data = null;
                Model = ModelMaybe || null;
                modelName = null;

                if (!(Model === null)) {
                  _context3.next = 7;
                  break;
                }

                throw new Error("Model Name or Model Missing");

              case 7:
                if (typeof Model === "string") Model = (0, _index.ModelNameToModel)(ModelMaybe);
                if (typeof Model === "function") modelName = RESTModel.getModelName(Model);

                if (modelName) {
                  _context3.next = 11;
                  break;
                }

                throw new Error("Missing model name");

              case 11:
                if (!(_API.default.UseSocketIO && _API.default.ShouldUseSocketIO && hasWebSocket)) {
                  _context3.next = 16;
                  break;
                }

                if (!socket) {
                  _context3.next = 16;
                  break;
                }

                _context3.next = 15;
                return new _promise.default(function (resolve, reject) {
                  var _this8 = this;

                  _newArrowCheck(this, _this7);

                  return _API.default.GetSocket(token).then(function (socket) {
                    _newArrowCheck(this, _this8);

                    return socket.emit("/API/".concat(modelName, "/Retreive"), id, resolve);
                  }.bind(this), reject);
                }.bind(this));

              case 15:
                data = _context3.sent;

              case 16:
                if (data) {
                  _context3.next = 20;
                  break;
                }

                _context3.next = 19;
                return _API.default.Call("GET", "/API/".concat(modelName, "/").concat(id), {
                  token: token
                });

              case 19:
                data = _context3.sent;

              case 20:
                if (!(data && RESTModel.isValidId(data._id))) {
                  _context3.next = 22;
                  break;
                }

                return _context3.abrupt("return", new Model(data));

              case 22:
                return _context3.abrupt("return", null);

              case 23:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function findById(_x3, _x4, _x5) {
        return _findById.apply(this, arguments);
      };
    }()
  }, {
    key: "findOne",
    value: function () {
      var _findOne = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee4(ModelMaybe, criteriaMaybe, token) {
        var _this9 = this;

        var hasWebSocket,
            criteria,
            data,
            Model,
            modelName,
            route,
            _socket,
            _args4 = arguments;

        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                hasWebSocket = _args4.length > 3 && _args4[3] !== undefined ? _args4[3] : false;
                criteria = criteriaMaybe || {};
                data = null;
                Model = ModelMaybe || null;
                modelName = null;

                if (!(Model === null)) {
                  _context4.next = 7;
                  break;
                }

                throw new Error("Model Name or Model Missing");

              case 7:
                if (typeof Model === "string") Model = (0, _index.ModelNameToModel)(ModelMaybe);
                if (typeof Model === "function") modelName = RESTModel.getModelName(Model);

                if (modelName) {
                  _context4.next = 11;
                  break;
                }

                throw new Error("Missing model name");

              case 11:
                route = "/API/".concat(modelName, "/FindOne");

                if (!(_API.default.UseSocketIO && _API.default.ShouldUseSocketIO && hasWebSocket)) {
                  _context4.next = 20;
                  break;
                }

                _context4.next = 15;
                return _API.default.GetSocket(token);

              case 15:
                _socket = _context4.sent;

                if (!_socket) {
                  _context4.next = 20;
                  break;
                }

                _context4.next = 19;
                return new _promise.default(function (resolve, reject) {
                  _newArrowCheck(this, _this9);

                  try {
                    _socket.emit(route, criteria, resolve);
                  } catch (e) {
                    reject(e);
                  }
                }.bind(this));

              case 19:
                data = _context4.sent;

              case 20:
                if (data) {
                  _context4.next = 24;
                  break;
                }

                _context4.next = 23;
                return _API.default.Call("GET", route, _objectSpread({}, criteria, {
                  token: token
                }));

              case 23:
                data = _context4.sent;

              case 24:
                if (!(data && RESTModel.isValidId(data._id))) {
                  _context4.next = 26;
                  break;
                }

                return _context4.abrupt("return", new Model(data));

              case 26:
                return _context4.abrupt("return", null);

              case 27:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function findOne(_x6, _x7, _x8) {
        return _findOne.apply(this, arguments);
      };
    }()
  }, {
    key: "findMany",
    value: function () {
      var _findMany = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee5(ModelMaybe, criteriaMaybe, token) {
        var _this10 = this;

        var hasWebSocket,
            criteria,
            data,
            Model,
            modelName,
            route,
            _args5 = arguments;
        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                hasWebSocket = _args5.length > 3 && _args5[3] !== undefined ? _args5[3] : false;
                criteria = criteriaMaybe || null;
                data = null;
                Model = ModelMaybe || null;
                modelName = null;

                if (!(Model === null)) {
                  _context5.next = 7;
                  break;
                }

                throw new Error("Model Name or Model Missing");

              case 7:
                if (typeof Model === "string") Model = (0, _index.ModelNameToModel)(ModelMaybe);
                if (typeof Model === "function") modelName = RESTModel.getModelName(Model);

                if (modelName) {
                  _context5.next = 11;
                  break;
                }

                throw new Error("Missing model name");

              case 11:
                route = "/API/".concat(modelName, "/FindMany");

                if (!(_API.default.UseSocketIO && _API.default.ShouldUseSocketIO && hasWebSocket)) {
                  _context5.next = 16;
                  break;
                }

                _context5.next = 15;
                return new _promise.default(function (resolve, reject) {
                  var _this11 = this;

                  _newArrowCheck(this, _this10);

                  return _API.default.GetSocket(token).then(function (socket) {
                    _newArrowCheck(this, _this11);

                    return socket.emit(route, criteria, resolve);
                  }.bind(this), reject);
                }.bind(this));

              case 15:
                data = _context5.sent;

              case 16:
                criteria = criteria || {};

                if (data) {
                  _context5.next = 21;
                  break;
                }

                _context5.next = 20;
                return _API.default.Call("GET", route, _objectSpread({}, criteria, {
                  token: token
                }));

              case 20:
                data = _context5.sent;

              case 21:
                if (!Array.isArray(data)) {
                  _context5.next = 23;
                  break;
                }

                return _context5.abrupt("return", data.map(function (itemData) {
                  _newArrowCheck(this, _this10);

                  var item = new Model(itemData);
                  RESTModel.Cache.set(item._id, item);
                  return item;
                }.bind(this)));

              case 23:
                return _context5.abrupt("return", []);

              case 24:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      return function findMany(_x9, _x10, _x11) {
        return _findMany.apply(this, arguments);
      };
    }()
  }]);

  return RESTModel;
}();

exports.default = RESTModel;

_defineProperty(RESTModel, "Cache", new _map.default
/* [String, Object] */
());