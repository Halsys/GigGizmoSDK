"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

var _API = require("./API");

var _API2 = _interopRequireDefault(_API);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RESTModel = function () {
  (0, _createClass3.default)(RESTModel, [{
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
      return dateCreated ? (0, _moment2.default)(dateCreated) : dateCreated;
    }
  }, {
    key: "dateModified",
    get: function get() {
      var dateModified = this.getField("dateModified") || null;
      return dateModified ? (0, _moment2.default)(dateModified) : dateModified;
    },
    set: function set(value) {
      this.changes.dateModified = (0, _moment2.default)(value || undefined).toISOString();
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
    (0, _classCallCheck3.default)(this, RESTModel);

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
      if ((0, _typeof3.default)(dataMaybe.document) === "object") Object.assign(this.document, dataMaybe.document);else Object.assign(this.document, dataMaybe);
    }
  }

  (0, _createClass3.default)(RESTModel, [{
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
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(token) {
        var _this = this;

        var hasWebSocket = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var modelName, response, id, data, socket;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                modelName = this.ModelName || this.constructor.ModelName;
                response = null;
                id = this.document.id || null;
                data = this.changes;

                Object.keys(this.changes).forEach(function (key) {
                  if (data[key] === _this.document[key]) delete data[key];
                });
                data.id = this.changes._id || this.document._id || null;

                if (!(_API2.default.UseSocketIO && _API2.default.ShouldUseSocketIO && hasWebSocket)) {
                  _context.next = 21;
                  break;
                }

                _context.next = 9;
                return _API2.default.GetSocket(token);

              case 9:
                socket = _context.sent;

                if (!RESTModel.isValidId(id)) {
                  _context.next = 16;
                  break;
                }

                _context.next = 13;
                return new Promise(function (resolve) {
                  return socket.emit("/API/" + modelName + "/Update", data, resolve);
                });

              case 13:
                response = _context.sent;
                _context.next = 19;
                break;

              case 16:
                _context.next = 18;
                return new Promise(function (resolve) {
                  return socket.emit("/API/" + modelName + "/Create", data, resolve);
                });

              case 18:
                response = _context.sent;

              case 19:
                _context.next = 31;
                break;

              case 21:
                data.token = token;

                if (!RESTModel.isValidId(id)) {
                  _context.next = 28;
                  break;
                }

                _context.next = 25;
                return _API2.default.Call("PUT", "/API/" + modelName + "/" + id, data);

              case 25:
                response = _context.sent;
                _context.next = 31;
                break;

              case 28:
                _context.next = 30;
                return _API2.default.Call("POST", "/API/" + modelName + "/", data);

              case 30:
                response = _context.sent;

              case 31:
                if (!(response && response._id)) {
                  _context.next = 37;
                  break;
                }

                this.document = response;
                this.changes = {};
                RESTModel.Cache.delete(id);
                RESTModel.Cache.set(response._id, this);
                return _context.abrupt("return", this);

              case 37:
                throw new Error("returned " + response);

              case 38:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function save(_x2) {
        return _ref.apply(this, arguments);
      }

      return save;
    }()
  }, {
    key: "remove",
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(token) {
        var hasWebSocket = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var id, response, modelName, socket;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                id = this._id || null;

                if (!RESTModel.isValidId(id)) {
                  _context2.next = 18;
                  break;
                }

                response = null;
                modelName = this.ModelName || this.constructor.ModelName;

                if (!(_API2.default.UseSocketIO && _API2.default.ShouldUseSocketIO && hasWebSocket)) {
                  _context2.next = 13;
                  break;
                }

                _context2.next = 7;
                return _API2.default.GetSocket(token);

              case 7:
                socket = _context2.sent;
                _context2.next = 10;
                return new Promise(function (resolve) {
                  socket.emit("/API/" + modelName + "/Delete", id, function (res) {
                    return resolve(res);
                  });
                });

              case 10:
                response = _context2.sent;
                _context2.next = 16;
                break;

              case 13:
                _context2.next = 15;
                return _API2.default.Call("DELETE", "/API/" + modelName + "/" + id, {
                  token: token
                });

              case 15:
                response = _context2.sent;

              case 16:

                RESTModel.Cache.set(id, null);
                return _context2.abrupt("return", response);

              case 18:
                throw new Error("Invalid id: " + id);

              case 19:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function remove(_x4) {
        return _ref2.apply(this, arguments);
      }

      return remove;
    }()
  }], [{
    key: "isValidId",
    value: function isValidId(id) {
      return typeof id === "string" && /^([0-9a-fA-F]{24}|[0-9a-fA-F]{12})$/.test(id);
    }
  }, {
    key: "findById",
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(Model, id, token) {
        var hasWebSocket = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        var data, modelName, socket;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!RESTModel.isValidId(id)) {
                  _context3.next = 17;
                  break;
                }

                data = null;
                modelName = Model.ModelName || Model.constructor.ModelName;

                if (!(_API2.default.UseSocketIO && _API2.default.ShouldUseSocketIO && hasWebSocket)) {
                  _context3.next = 11;
                  break;
                }

                _context3.next = 6;
                return _API2.default.GetSocket(token);

              case 6:
                socket = _context3.sent;

                if (!socket) {
                  _context3.next = 11;
                  break;
                }

                _context3.next = 10;
                return new Promise(function (resolve) {
                  socket.emit("/API/" + modelName + "/Retreive", id, resolve);
                });

              case 10:
                data = _context3.sent;

              case 11:
                if (data) {
                  _context3.next = 15;
                  break;
                }

                _context3.next = 14;
                return _API2.default.Call("GET", "/API/" + modelName + "/" + id, {
                  token: token
                });

              case 14:
                data = _context3.sent;

              case 15:
                if (!(data && RESTModel.isValidId(data._id))) {
                  _context3.next = 17;
                  break;
                }

                return _context3.abrupt("return", new Model(data));

              case 17:
                return _context3.abrupt("return", null);

              case 18:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function findById(_x6, _x7, _x8) {
        return _ref3.apply(this, arguments);
      }

      return findById;
    }()
  }, {
    key: "findOne",
    value: function () {
      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(Model, criteriaMaybe, token) {
        var hasWebSocket = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        var criteria, data, modelName, route, socket;
        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                criteria = criteriaMaybe || {};
                data = null;
                modelName = Model.ModelName || Model.constructor.ModelName;
                route = "/API/" + modelName + "/FindOne";

                if (!(_API2.default.UseSocketIO && _API2.default.ShouldUseSocketIO && hasWebSocket)) {
                  _context4.next = 12;
                  break;
                }

                _context4.next = 7;
                return _API2.default.GetSocket(token);

              case 7:
                socket = _context4.sent;

                if (!socket) {
                  _context4.next = 12;
                  break;
                }

                _context4.next = 11;
                return new Promise(function (resolve, reject) {
                  try {
                    socket.emit(route, criteria, resolve);
                  } catch (e) {
                    reject(e);
                  }
                });

              case 11:
                data = _context4.sent;

              case 12:
                if (data) {
                  _context4.next = 16;
                  break;
                }

                _context4.next = 15;
                return _API2.default.Call("GET", route, (0, _extends3.default)({}, criteria, { token: token }));

              case 15:
                data = _context4.sent;

              case 16:
                if (!(data && RESTModel.isValidId(data._id))) {
                  _context4.next = 18;
                  break;
                }

                return _context4.abrupt("return", new Model(data));

              case 18:
                return _context4.abrupt("return", null);

              case 19:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function findOne(_x10, _x11, _x12) {
        return _ref4.apply(this, arguments);
      }

      return findOne;
    }()
  }, {
    key: "findMany",
    value: function () {
      var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(Model, criteriaMaybe, token) {
        var hasWebSocket = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        var criteria, data, modelName, route, socket;
        return _regenerator2.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                criteria = criteriaMaybe || null;
                data = null;
                modelName = Model.ModelName || Model.constructor.ModelName;
                route = "/API/" + modelName + "/FindMany";

                if (!(_API2.default.UseSocketIO && _API2.default.ShouldUseSocketIO && hasWebSocket)) {
                  _context5.next = 12;
                  break;
                }

                _context5.next = 7;
                return _API2.default.GetSocket(token);

              case 7:
                socket = _context5.sent;

                if (!socket) {
                  _context5.next = 12;
                  break;
                }

                _context5.next = 11;
                return new Promise(function (resolve, reject) {
                  try {
                    socket.emit(route, criteria, resolve);
                  } catch (e) {
                    reject(e);
                  }
                });

              case 11:
                data = _context5.sent;

              case 12:
                criteria = criteria || {};

                if (data) {
                  _context5.next = 17;
                  break;
                }

                _context5.next = 16;
                return _API2.default.Call("GET", route, (0, _extends3.default)({}, criteria, { token: token }));

              case 16:
                data = _context5.sent;

              case 17:
                if (!Array.isArray(data)) {
                  _context5.next = 19;
                  break;
                }

                return _context5.abrupt("return", data.map(function (itemData) {
                  var item = new Model(itemData);
                  RESTModel.Cache.set(item._id, item);
                  return item;
                }));

              case 19:
                return _context5.abrupt("return", []);

              case 20:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function findMany(_x14, _x15, _x16) {
        return _ref5.apply(this, arguments);
      }

      return findMany;
    }()
  }]);
  return RESTModel;
}();

RESTModel.Cache = new Map /* [String, Object] */();
exports.default = RESTModel;