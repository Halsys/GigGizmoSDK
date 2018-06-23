(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@babel/runtime/helpers/objectSpread", "@babel/runtime/regenerator", "@babel/runtime/helpers/asyncToGenerator", "@babel/runtime/helpers/typeof", "@babel/runtime/helpers/classCallCheck", "@babel/runtime/helpers/createClass", "moment", "./API"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@babel/runtime/helpers/objectSpread"), require("@babel/runtime/regenerator"), require("@babel/runtime/helpers/asyncToGenerator"), require("@babel/runtime/helpers/typeof"), require("@babel/runtime/helpers/classCallCheck"), require("@babel/runtime/helpers/createClass"), require("moment"), require("./API"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.objectSpread, global.regenerator, global.asyncToGenerator, global._typeof, global.classCallCheck, global.createClass, global.moment, global.API);
    global.RESTModel = mod.exports;
  }
})(this, function (_exports, _objectSpread2, _regenerator, _asyncToGenerator2, _typeof2, _classCallCheck2, _createClass2, _moment, _API) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _objectSpread2 = _interopRequireDefault(_objectSpread2);
  _regenerator = _interopRequireDefault(_regenerator);
  _asyncToGenerator2 = _interopRequireDefault(_asyncToGenerator2);
  _typeof2 = _interopRequireDefault(_typeof2);
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _createClass2 = _interopRequireDefault(_createClass2);
  _moment = _interopRequireDefault(_moment);
  _API = _interopRequireDefault(_API);

  var RESTModel =
  /*#__PURE__*/
  function () {
    (0, _createClass2.default)(RESTModel, [{
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
      (0, _classCallCheck2.default)(this, RESTModel);
      this.document = {};
      this.changes = {};

      if (typeof dataMaybe === "string") {
        try {
          var data = JSON.parse(dataMaybe);
          if (typeof data.ModelName !== "undefined") delete data.ModelName;
          Object.assign(this.document, data);
        } catch (e) {
          console.error(e);
        }
      } else if (dataMaybe) {
        if ((0, _typeof2.default)(dataMaybe.document) === "object") Object.assign(this.document, dataMaybe.document);else Object.assign(this.document, dataMaybe);
      }
    }

    (0, _createClass2.default)(RESTModel, [{
      key: "toObject",
      value: function toObject() {
        return this.valid() ? Object.assign({}, this.changes, this.document) : null;
      }
    }, {
      key: "toString",
      value: function toString() {
        return this.valid() ? JSON.stringify(Object.assign({}, this.changes, this.document)) : "null";
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
        Object.assign(this.changes, data);
        return this;
      }
    }, {
      key: "save",
      value: function () {
        var _save = (0, _asyncToGenerator2.default)(
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
                  modelName = Model.ModelName || Model.constructor.ModelName;
                  response = null;
                  id = this.document.id || null;
                  data = this.changes;
                  Object.keys(this.changes).forEach(function (key) {
                    if (data[key] === _this.document[key]) delete data[key];
                  });
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
                  return new Promise(function (resolve, reject) {
                    return _API.default.GetSocket(token).then(function (socket) {
                      return socket.emit("/API/".concat(modelName, "/Update"), data, resolve);
                    }, reject);
                  });

                case 11:
                  response = _context.sent;
                  _context.next = 17;
                  break;

                case 14:
                  _context.next = 16;
                  return new Promise(function (resolve, reject) {
                    return _API.default.GetSocket(token).then(function (socket) {
                      return socket.emit("/API/".concat(modelName, "/Create"), data, resolve);
                    }, reject);
                  });

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
        var _remove = (0, _asyncToGenerator2.default)(
        /*#__PURE__*/
        _regenerator.default.mark(function _callee2(token) {
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
                  modelName = Model.ModelName || Model.constructor.ModelName;

                  if (!(_API.default.UseSocketIO && _API.default.ShouldUseSocketIO && hasWebSocket)) {
                    _context2.next = 11;
                    break;
                  }

                  _context2.next = 8;
                  return new Promise(function (resolve, reject) {
                    return _API.default.GetSocket(token).then(function (socket) {
                      return socket.emit("/API/".concat(modelName, "/Delete"), id, function (res) {
                        return resolve(res);
                      });
                    }, reject);
                  });

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
        if (Model.ModelName) return Model.ModelName;
        if (Model.default.ModelName) return Model.default.ModelName;
        if (Model.constructor.ModelName) return Model.constructor.ModelName;
        if (Model.prototype.ModelName) return Model.prototype.ModelName;
      }
    }, {
      key: "findById",
      value: function () {
        var _findById = (0, _asyncToGenerator2.default)(
        /*#__PURE__*/
        _regenerator.default.mark(function _callee3(ModelMaybe, id, token) {
          var hasWebSocket,
              data,
              _Model,
              modelName,
              _args3 = arguments;

          return _regenerator.default.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  hasWebSocket = _args3.length > 3 && _args3[3] !== undefined ? _args3[3] : false;

                  if (!RESTModel.isValidId(id)) {
                    _context3.next = 17;
                    break;
                  }

                  data = null;
                  _Model = ModelMaybe || null;
                  if (_Model.default) _Model = _Model.default;
                  modelName = RESTModel.getModelName(_Model);

                  if (!(_API.default.UseSocketIO && _API.default.ShouldUseSocketIO && hasWebSocket)) {
                    _context3.next = 11;
                    break;
                  }

                  if (!socket) {
                    _context3.next = 11;
                    break;
                  }

                  _context3.next = 10;
                  return new Promise(function (resolve, reject) {
                    return _API.default.GetSocket(token).then(function (socket) {
                      return socket.emit("/API/".concat(modelName, "/Retreive"), id, resolve);
                    }, reject);
                  });

                case 10:
                  data = _context3.sent;

                case 11:
                  if (data) {
                    _context3.next = 15;
                    break;
                  }

                  _context3.next = 14;
                  return _API.default.Call("GET", "/API/".concat(modelName, "/").concat(id), {
                    token: token
                  });

                case 14:
                  data = _context3.sent;

                case 15:
                  if (!(data && RESTModel.isValidId(data._id))) {
                    _context3.next = 17;
                    break;
                  }

                  return _context3.abrupt("return", new _Model(data));

                case 17:
                  return _context3.abrupt("return", null);

                case 18:
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
        var _findOne = (0, _asyncToGenerator2.default)(
        /*#__PURE__*/
        _regenerator.default.mark(function _callee4(ModelMaybe, criteriaMaybe, token) {
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
                  if (Model.default) Model = Model.default;
                  modelName = RESTModel.getModelName(Model);
                  route = "/API/".concat(modelName, "/FindOne");

                  if (!(_API.default.UseSocketIO && _API.default.ShouldUseSocketIO && hasWebSocket)) {
                    _context4.next = 15;
                    break;
                  }

                  _context4.next = 10;
                  return _API.default.GetSocket(token);

                case 10:
                  _socket = _context4.sent;

                  if (!_socket) {
                    _context4.next = 15;
                    break;
                  }

                  _context4.next = 14;
                  return new Promise(function (resolve, reject) {
                    try {
                      _socket.emit(route, criteria, resolve);
                    } catch (e) {
                      reject(e);
                    }
                  });

                case 14:
                  data = _context4.sent;

                case 15:
                  if (data) {
                    _context4.next = 19;
                    break;
                  }

                  _context4.next = 18;
                  return _API.default.Call("GET", route, (0, _objectSpread2.default)({}, criteria, {
                    token: token
                  }));

                case 18:
                  data = _context4.sent;

                case 19:
                  if (!(data && RESTModel.isValidId(data._id))) {
                    _context4.next = 21;
                    break;
                  }

                  return _context4.abrupt("return", new Model(data));

                case 21:
                  return _context4.abrupt("return", null);

                case 22:
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
        var _findMany = (0, _asyncToGenerator2.default)(
        /*#__PURE__*/
        _regenerator.default.mark(function _callee5(ModelMaybe, criteriaMaybe, token) {
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
                  if (Model.default) Model = Model.default;
                  modelName = RESTModel.getModelName(Model);
                  route = "/API/".concat(modelName, "/FindMany");

                  if (!(_API.default.UseSocketIO && _API.default.ShouldUseSocketIO && hasWebSocket)) {
                    _context5.next = 11;
                    break;
                  }

                  _context5.next = 10;
                  return new Promise(function (resolve, reject) {
                    return _API.default.GetSocket(token).then(function (socket) {
                      return socket.emit(route, criteria, resolve);
                    }, reject);
                  });

                case 10:
                  data = _context5.sent;

                case 11:
                  criteria = criteria || {};

                  if (data) {
                    _context5.next = 16;
                    break;
                  }

                  _context5.next = 15;
                  return _API.default.Call("GET", route, (0, _objectSpread2.default)({}, criteria, {
                    token: token
                  }));

                case 15:
                  data = _context5.sent;

                case 16:
                  if (!Array.isArray(data)) {
                    _context5.next = 18;
                    break;
                  }

                  return _context5.abrupt("return", data.map(function (itemData) {
                    var item = new Model(itemData);
                    RESTModel.Cache.set(item._id, item);
                    return item;
                  }));

                case 18:
                  return _context5.abrupt("return", []);

                case 19:
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

  _exports.default = RESTModel;
  RESTModel.Cache = new Map
  /* [String, Object] */
  ();
});