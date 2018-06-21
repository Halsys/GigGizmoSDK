(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@babel/runtime/core-js/map", "@babel/runtime/core-js/symbol/iterator", "@babel/runtime/core-js/symbol", "@babel/runtime/core-js/object/get-own-property-symbols", "@babel/runtime/core-js/object/keys", "@babel/runtime/core-js/object/define-property", "@babel/runtime/core-js/object/get-own-property-descriptor", "@babel/runtime/core-js/reflect/get", "@babel/runtime/core-js/object/get-prototype-of", "@babel/runtime/core-js/object/create", "@babel/runtime/core-js/object/set-prototype-of", "@babel/runtime/core-js/symbol/search", "@babel/runtime/regenerator", "regenerator-runtime/runtime", "@babel/runtime/core-js/json/stringify", "core-js/modules/web.dom.iterable", "@babel/runtime/core-js/number/is-finite", "@babel/runtime/core-js/promise", "moment", "./Band", "./Venue", "./Gig", "./Post", "./Page", "./Location", "./API", "./Upload", "./RESTModel", "./Notification", "./TwitterAccount", "./FacebookAccount", "./Conversation"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@babel/runtime/core-js/map"), require("@babel/runtime/core-js/symbol/iterator"), require("@babel/runtime/core-js/symbol"), require("@babel/runtime/core-js/object/get-own-property-symbols"), require("@babel/runtime/core-js/object/keys"), require("@babel/runtime/core-js/object/define-property"), require("@babel/runtime/core-js/object/get-own-property-descriptor"), require("@babel/runtime/core-js/reflect/get"), require("@babel/runtime/core-js/object/get-prototype-of"), require("@babel/runtime/core-js/object/create"), require("@babel/runtime/core-js/object/set-prototype-of"), require("@babel/runtime/core-js/symbol/search"), require("@babel/runtime/regenerator"), require("regenerator-runtime/runtime"), require("@babel/runtime/core-js/json/stringify"), require("core-js/modules/web.dom.iterable"), require("@babel/runtime/core-js/number/is-finite"), require("@babel/runtime/core-js/promise"), require("moment"), require("./Band"), require("./Venue"), require("./Gig"), require("./Post"), require("./Page"), require("./Location"), require("./API"), require("./Upload"), require("./RESTModel"), require("./Notification"), require("./TwitterAccount"), require("./FacebookAccount"), require("./Conversation"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.map, global.iterator, global.symbol, global.getOwnPropertySymbols, global.keys, global.defineProperty, global.getOwnPropertyDescriptor, global.get, global.getPrototypeOf, global.create, global.setPrototypeOf, global.search, global.regenerator, global.runtime, global.stringify, global.webDom, global.isFinite, global.promise, global.moment, global.Band, global.Venue, global.Gig, global.Post, global.Page, global.Location, global.API, global.Upload, global.RESTModel, global.Notification, global.TwitterAccount, global.FacebookAccount, global.Conversation);
    global.User = mod.exports;
  }
})(this, function (_exports, _map, _iterator, _symbol, _getOwnPropertySymbols, _keys, _defineProperty2, _getOwnPropertyDescriptor, _get2, _getPrototypeOf2, _create, _setPrototypeOf2, _search, _regenerator, _runtime, _stringify, _webDom, _isFinite, _promise, _moment, _Band, _Venue, _Gig, _Post, _Page, _Location, _API, _Upload, _RESTModel2, _Notification, _TwitterAccount, _FacebookAccount, _Conversation) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _map = _interopRequireDefault(_map);
  _iterator = _interopRequireDefault(_iterator);
  _symbol = _interopRequireDefault(_symbol);
  _getOwnPropertySymbols = _interopRequireDefault(_getOwnPropertySymbols);
  _keys = _interopRequireDefault(_keys);
  _defineProperty2 = _interopRequireDefault(_defineProperty2);
  _getOwnPropertyDescriptor = _interopRequireDefault(_getOwnPropertyDescriptor);
  _get2 = _interopRequireDefault(_get2);
  _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf2);
  _create = _interopRequireDefault(_create);
  _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf2);
  _search = _interopRequireDefault(_search);
  _regenerator = _interopRequireDefault(_regenerator);
  _stringify = _interopRequireDefault(_stringify);
  _isFinite = _interopRequireDefault(_isFinite);
  _promise = _interopRequireDefault(_promise);
  _moment = _interopRequireDefault(_moment);
  _Band = _interopRequireDefault(_Band);
  _Venue = _interopRequireDefault(_Venue);
  _Gig = _interopRequireDefault(_Gig);
  _Post = _interopRequireDefault(_Post);
  _Page = _interopRequireDefault(_Page);
  _Location = _interopRequireDefault(_Location);
  _API = _interopRequireDefault(_API);
  _Upload = _interopRequireDefault(_Upload);
  _RESTModel2 = _interopRequireDefault(_RESTModel2);
  _Notification = _interopRequireDefault(_Notification);
  _TwitterAccount = _interopRequireDefault(_TwitterAccount);
  _FacebookAccount = _interopRequireDefault(_FacebookAccount);
  _Conversation = _interopRequireDefault(_Conversation);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new _promise.default(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { _promise.default.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

  function _typeof(obj) { if (typeof _symbol.default === "function" && typeof _iterator.default === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof _symbol.default === "function" && obj.constructor === _symbol.default && obj !== _symbol.default.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = (0, _keys.default)(source); if (typeof _getOwnPropertySymbols.default === 'function') { ownKeys = ownKeys.concat((0, _getOwnPropertySymbols.default)(source).filter(function (sym) { return (0, _getOwnPropertyDescriptor.default)(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

  function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

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

  var User =
  /*#__PURE__*/
  function (_RESTModel) {
    _inherits(User, _RESTModel);

    function User() {
      _classCallCheck(this, User);

      return _possibleConstructorReturn(this, _getPrototypeOf(User).apply(this, arguments));
    }

    _createClass(User, [{
      key: "getIcon",
      value: function getIcon() {
        var icon = this.icon;
        return _Upload.default.findById(icon);
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
      key: "validatePassword",
      value: function validatePassword(maybePassword) {
        var password = maybePassword || "";
        var decimalTest = /\d/;
        var symbolTest = /\W/;
        var lowercasePassword = password.toLowerCase();
        var lowercaseFirstName = this.firstName.toLowerCase();
        var lowercaseLastName = this.lastName.toLowerCase();

        if (password === "") {
          return new Error("Password missing");
        } else if (password.length < 8) {
          return new Error("Password is too short");
        } else if (password.length > 256) {
          return new Error("Password is too long");
        } else if (!decimalTest.test(password)) {
          return new Error("Password does not have atleast one number");
        } else if (!symbolTest.test(password)) {
          return new Error("Password does not have atleast one symbol");
        } else if (lowercasePassword.indexOf(lowercaseFirstName) !== -1) {
          return new Error("Password cannot contain your first name");
        } else if (lowercasePassword.indexOf(lowercaseLastName) !== -1) {
          return new Error("Password cannot contain your last name");
        }

        return null;
      }
    }, {
      key: "valid",
      value: function valid() {
        if (!_get(_getPrototypeOf(User.prototype), "valid", this).call(this)) return false; // Type checks

        if (typeof this.firstName !== "string") return false;
        if (typeof this.lastName !== "string") return false;
        if (typeof this.email !== "string") return false; // Value checks

        if (this.firstName === "") return false;
        if (this.lastName === "") return false;
        if (this.email === "") return false; // TODO: More validation checks?

        return true;
      }
    }, {
      key: "save",
      value: function save(token) {
        return _RESTModel2.default.prototype.save.call(this, token, true);
      }
    }, {
      key: "remove",
      value: function remove(token) {
        return _RESTModel2.default.prototype.remove.call(this, token, true);
      }
    }, {
      key: "password",
      get: function get() {
        return this.getField("password");
      },
      set: function set(value) {
        this.setField("password", value);
      }
    }, {
      key: "confirmPassword",
      get: function get() {
        return this.getField("confirmPassword");
      },
      set: function set(value) {
        this.setField("confirmPassword", value);
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
      key: "active",
      set: function set(value) {
        this.setField("active", value);
      },
      get: function get() {
        return this.getField("active");
      }
    }, {
      key: "admin",
      set: function set(value) {
        this.setField("admin", value);
      },
      get: function get() {
        return this.getField("admin") === true;
      }
    }, {
      key: "firstName",
      get: function get() {
        return this.getField("firstName");
      },
      set: function set(value) {
        this.setField("firstName", value);
      }
    }, {
      key: "middleName",
      get: function get() {
        return this.getField("middleName");
      },
      set: function set(value) {
        this.setField("middleName", value);
      }
    }, {
      key: "lastName",
      get: function get() {
        return this.getField("lastName");
      },
      set: function set(value) {
        this.setField("lastName", value);
      }
    }, {
      key: "birthday",
      get: function get() {
        var birthday = this.getField("birthday");
        return birthday ? (0, _moment.default)(birthday) : null;
      },
      set: function set(value) {
        this.setField("birthday", (0, _moment.default)(value).toISOString());
      }
    }, {
      key: "country",
      get: function get() {
        return this.getField("country");
      },
      set: function set(value) {
        this.setField("country", value);
      }
    }, {
      key: "bandManager",
      get: function get() {
        return this.getField("bandManager") === true;
      },
      set: function set(value) {
        this.setField("bandManager", value);
      }
    }, {
      key: "venueManager",
      get: function get() {
        return this.getField("venueManager") === true;
      },
      set: function set(value) {
        this.setField("venueManager", value);
      }
    }, {
      key: "betaFeatureUser",
      get: function get() {
        return this.getField("betaFeatureUser") === true;
      },
      set: function set(value) {
        this.setField("betaFeatureUser", value);
      }
    }, {
      key: "sendAnonymousReports",
      get: function get() {
        return this.getField("sendAnonymousReports") === true;
      },
      set: function set(value) {
        this.setField("sendAnonymousReports", value);
      }
    }, {
      key: "sendErrorReports",
      get: function get() {
        return this.getField("sendErrorReports") === true;
      },
      set: function set(value) {
        this.setField("sendErrorReports", value);
      }
    }, {
      key: "sendEmails",
      get: function get() {
        return this.getField("sendEmails") === true;
      },
      set: function set(value) {
        this.setField("sendEmails", value);
      }
    }, {
      key: "sendPromotions",
      get: function get() {
        return this.getField("sendPromotions") === true;
      },
      set: function set(value) {
        this.setField("sendPromotions", value);
      }
    }, {
      key: "useCookies",
      get: function get() {
        return this.getField("useCookies") === true;
      },
      set: function set(value) {
        this.setField("useCookies", value);
      }
    }, {
      key: "fullName",
      get: function get() {
        return "".concat(this.firstName || "", " ").concat(this.middleName || "", " ").concat(this.lastName || "");
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
      key: "salt",
      get: function get() {
        return this.getField("salt");
      }
    }, {
      key: "hash",
      get: function get() {
        return this.getField("hash");
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
      key: "twitter",
      get: function get() {
        return this.getField("twitter");
      },
      set: function set(value) {
        this.setField("twitter", value);
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
      key: "emailVerified",
      get: function get() {
        return this.getField("emailVerified");
      },
      set: function set(value) {
        this.setField("emailVerified", value);
      }
    }, {
      key: "attempts",
      get: function get() {
        return this.getField("attempts");
      }
    }, {
      key: "lastLoginIP",
      get: function get() {
        return this.getField("lastLoginIP");
      },
      set: function set(value) {
        this.setField("lastLoginIP", value);
      }
    }, {
      key: "lastLoginDate",
      get: function get() {
        return (0, _moment.default)(this.getField("lastLoginDate"));
      },
      set: function set(value) {
        this.setField("lastLoginDate", (0, _moment.default)(value).toISOString());
      }
    }, {
      key: "canContact",
      get: function get() {
        return this.getField("canContact") === true;
      },
      set: function set(value) {
        this.setField("canContact", value);
      }
    }, {
      key: "canFind",
      get: function get() {
        return this.getField("canFind") === true;
      },
      set: function set(value) {
        this.setField("canFind", value);
      }
    }, {
      key: "options",
      get: function get() {
        return this.getField("options");
      },
      set: function set(value) {
        this.setField("options", value);
      }
    }], [{
      key: "verifyEmail",
      value: function verifyEmail(id, secret) {
        return _API.default.Call("GET", "/API/User/Verify", {
          token: null,
          id: id,
          secret: secret
        });
      }
    }, {
      key: "sendEmailVerification",
      value: function sendEmailVerification(token) {
        return _API.default.Call("POST", "/API/User/Verify", {
          token: token
        });
      }
    }, {
      key: "getAllConversations",
      value: function getAllConversations(token) {
        return _Conversation.default.getAllOwned(token);
      }
    }, {
      key: "getAllNotifications",
      value: function getAllNotifications(token) {
        return _Notification.default.getAllOwned(token);
      }
    }, {
      key: "getAllPosts",
      value: function getAllPosts(token) {
        return _Post.default.getAllOwned(token);
      }
    }, {
      key: "getAllBands",
      value: function getAllBands(token) {
        return _Band.default.getAllOwned(token);
      }
    }, {
      key: "getAllVenues",
      value: function getAllVenues(token) {
        return _Venue.default.getAllOwned(token);
      }
    }, {
      key: "getAllGigs",
      value: function getAllGigs(token) {
        return _Gig.default.getAllOwned(token);
      }
    }, {
      key: "getAllUploads",
      value: function getAllUploads(token) {
        return _Upload.default.getAllOwned(token);
      }
    }, {
      key: "findFacebookPages",
      value: function findFacebookPages(term) {
        var _this = this;

        return new _promise.default(function (resolve, reject) {
          _newArrowCheck(this, _this);

          if (term === "") {
            resolve();
          } else {
            _API.default.Call("GET", "/API/FacebookAccount/FindPages", {
              term: term
            }).then(resolve, reject);
          }
        }.bind(this));
      }
    }, {
      key: "search",
      value: function search(q) {
        var _this2 = this;

        var modelName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var skip = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        var limit = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : Number.POSITIVE_INFINITY;
        var token = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : _API.default.findToken();
        return new _promise.default(function (resolve, reject) {
          var _this3 = this;

          _newArrowCheck(this, _this2);

          if (q === "") {
            resolve();
          } else {
            var data = {
              q: q
            };
            if (modelName != null) data.model = modelName;
            if (skip !== 0) data.skip = skip;
            if ((0, _isFinite.default)(limit)) data.limit = limit;

            var Return = function Return(results) {
              var _this4 = this;

              _newArrowCheck(this, _this3);

              var _ref = results || {},
                  query = _ref.query,
                  totalFound = _ref.totalFound;

              if (!query) reject(query);
              var classMap = {
                Band: _Band.default,
                Venue: _Venue.default,
                User: User,
                Page: _Page.default,
                Location: _Location.default,
                Upload: _Upload.default
              };
              var bands = [];
              var venues = [];
              var users = [];
              var pages = [];
              var locations = [];
              var uploads = [];
              query.forEach(function (item) {
                _newArrowCheck(this, _this4);

                if (item && item.ModelName) {
                  var mName = item.ModelName;
                  var ClassType = classMap[mName] || null;

                  if (ClassType) {
                    var instance = new ClassType(item);
                    if (mName === "Band") bands.push(instance);else if (mName === "Venue") venues.push(instance);else if (mName === "User") users.push(instance);else if (mName === "Page") pages.push(instance);else if (mName === "Location") locations.push(instance);else if (mName === "Upload") uploads.push(instance);
                  }
                }
              }.bind(this));
              var sorted = {
                totalFound: totalFound,
                bands: bands,
                venues: venues,
                users: users,
                pages: pages,
                locations: locations,
                uploads: uploads
              };
              resolve(sorted);
            }.bind(this);

            if (_API.default.UseSocketIO && _API.default.ShouldUseSocketIO) {
              _API.default.GetSocket(token).then(function (socket) {
                _newArrowCheck(this, _this3);

                socket.emit("/API/TextSearch", data, Return);
              }.bind(this), reject);
            } else {
              _API.default.Call("GET", "/API/TextSearch", _objectSpread({}, data, {
                token: token
              })).then(Return, reject);
            }
          }
        }.bind(this));
      }
    }, {
      key: "findMany",
      value: function findMany(criteria, token) {
        return _RESTModel2.default.findMany(User, criteria, token, true);
      }
    }, {
      key: "findOne",
      value: function findOne(criteria, token) {
        return _RESTModel2.default.findOne(User, criteria, token, true);
      }
    }, {
      key: "onChange",
      value: function onChange(callback) {
        var _this5 = this;

        var id = Date.now();
        User.Callbacks.set(id, callback);
        return function () {
          _newArrowCheck(this, _this5);

          User.Callbacks.delete(id);
        }.bind(this);
      }
    }, {
      key: "setUser",
      value: function setUser(data) {
        var _this6 = this;

        return new _promise.default(function (resolve, reject) {
          var _this7 = this;

          _newArrowCheck(this, _this6);

          try {
            if (_typeof(data) === "object" && data) {
              User.Current = new User(data);

              if (_API.default.SessionStorageSupported) {
                sessionStorage.setItem("user", (0, _stringify.default)(data));
              }

              User.Callbacks.forEach(function (callback) {
                _newArrowCheck(this, _this7);

                return callback(User.Current);
              }.bind(this));
              resolve(User.Current);
            } else {
              User.Current = null;
              _API.default.token = null;
              if (_API.default.SessionStorageSupported) sessionStorage.removeItem("user");
              if (_API.default.LocalStorageSupported) localStorage.removeItem("token");
              if (typeof document !== "undefined") document.cookie = "";
              User.Callbacks.forEach(function (callback) {
                _newArrowCheck(this, _this7);

                return callback(null);
              }.bind(this));
              resolve(null);
            }
          } catch (e) {
            reject(e);
          }
        }.bind(this));
      }
    }, {
      key: "getUser",
      value: function () {
        var _getUser = _asyncToGenerator(
        /*#__PURE__*/
        _regenerator.default.mark(function _callee(force, tokenMaybe) {
          var _this8 = this;

          var token, data;
          return _regenerator.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  token = tokenMaybe || _API.default.findToken();
                  data = null;

                  if (!(!force && User.Current)) {
                    _context.next = 6;
                    break;
                  }

                  return _context.abrupt("return", User.Current);

                case 6:
                  if (!_API.default.SessionStorageSupported) {
                    _context.next = 10;
                    break;
                  }

                  /* If the user is stored in session storage. */
                  data = JSON.parse(sessionStorage.getItem("user"));

                  if (!data) {
                    _context.next = 10;
                    break;
                  }

                  return _context.abrupt("return", User.setUser(data));

                case 10:
                  if (!(_API.default.UseSocketIO && _API.default.ShouldUseSocketIO)) {
                    _context.next = 16;
                    break;
                  }

                  _context.next = 13;
                  return new _promise.default(function (resolve, reject) {
                    var _this9 = this;

                    _newArrowCheck(this, _this8);

                    if (token) _API.default.GetSocket(token).then(function (socket) {
                      _newArrowCheck(this, _this9);

                      socket.emit("/API/User/Retreive", null, resolve);
                    }.bind(this), reject);else resolve(null);
                  }.bind(this));

                case 13:
                  data = _context.sent;
                  _context.next = 19;
                  break;

                case 16:
                  _context.next = 18;
                  return _API.default.Call("GET", "/API/User", {
                    token: token
                  });

                case 18:
                  data = _context.sent;

                case 19:
                  if (!data) {
                    _context.next = 21;
                    break;
                  }

                  return _context.abrupt("return", User.setUser(data));

                case 21:
                  return _context.abrupt("return", User.setUser(null));

                case 22:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        return function getUser(_x, _x2) {
          return _getUser.apply(this, arguments);
        };
      }()
    }, {
      key: "findById",
      value: function findById(id, token) {
        return _RESTModel2.default.findById(User, id, token, true);
      }
    }, {
      key: "connectFacebook",
      value: function connectFacebook() {
        window.location.href = "".concat(_API.default.root, "/API/Auth/Facebook");
      }
    }, {
      key: "facebookLogIn",
      value: function facebookLogIn() {
        window.location.href = "".concat(_API.default.root, "/API/Login/Facebook");
      }
    }, {
      key: "payPalLogIn",
      value: function payPalLogIn() {
        window.location.href = "".concat(_API.default.root, "/API/Auth/PayPal");
      }
    }, {
      key: "userLogIn",
      value: function userLogIn(email, password) {
        var _this10 = this;

        return new _promise.default(function (resolve, reject) {
          var _this12 = this;

          _newArrowCheck(this, _this10);

          function onError(error) {
            var _this11 = this;

            User.setUser(null).then(function () {
              _newArrowCheck(this, _this11);

              reject(error);
            }.bind(this));
          }

          if (!email) onError(new Error("No email"));else if (!password) onError(new Error("No password"));else {
            _API.default.Call("POST", "/API/User/SignIn", {
              email: email,
              password: password
            }).then(function (response) {
              _newArrowCheck(this, _this12);

              if (response && response.user && response.token) {
                if (_API.default.LocalStorageSupported) {
                  localStorage.setItem("token", response.token);
                }

                _API.default.token = response.token;
                User.setUser(response.user).then(resolve, onError);
              } else onError(new Error("".concat((0, _stringify.default)(response), " returned")));
            }.bind(this), onError);
          }
        }.bind(this));
      }
    }, {
      key: "userLogOut",
      value: function userLogOut(tokenMaybe) {
        var _this13 = this;

        var token = tokenMaybe || _API.default.findToken();

        return new _promise.default(function (resolve, reject) {
          var _this14 = this;

          _newArrowCheck(this, _this13);

          _API.default.Call("POST", "/API/User/SignOut", {
            token: token
          }).then(function () {
            var _this15 = this;

            _newArrowCheck(this, _this14);

            User.setUser(null).then(function (user) {
              _newArrowCheck(this, _this15);

              if (user && user.valid()) reject(new Error("".concat((0, _stringify.default)(user), " returned, failed to log out?")));else resolve(user);
            }.bind(this));
          }.bind(this), reject);
        }.bind(this));
      }
    }, {
      key: "sendPasswordResetEmail",
      value: function sendPasswordResetEmail(email) {
        return _API.default.Call("POST", "/User/Reset", {
          email: email
        });
      }
    }, {
      key: "registerUser",
      value: function registerUser(userData) {
        var _this16 = this;

        return new _promise.default(function (resolve, reject) {
          var _this17 = this;

          _newArrowCheck(this, _this16);

          if (userData && _typeof(userData) === "object") {
            if (userData.email) {
              var re = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
              if (re[_search.default](userData.email) !== 0) return reject(new Error("Invalid email address"));
            } else return reject(new Error("Email is required"));

            if (userData.password) {
              var symbolTest = /(?:[\0-\/:-@\[-`\{-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g;
              var numberTest = /[0-9]/g;
              var lowercasePassword = userData.password.toLowerCase();
              if (userData.password === "") return reject(new Error("Password is required"));else if (userData.password.length < 8) return reject(new Error("Password is too short"));else if (userData.password.length > 256) return reject(new Error("Password is too long"));else if (!symbolTest.test(userData.password)) return reject(new Error("Password does not contain at least one symbol"));else if (!numberTest.test(userData.password)) return reject(new Error("Password does not contain at least one number"));else if (userData.firstName && userData.firstName.length !== 0 && lowercasePassword.indexOf(userData.firstName.toLowerCase()) !== -1) return reject(new Error("Password can not contain your first name"));else if (userData.lastName && userData.lastName.length !== 0 && lowercasePassword.indexOf(userData.lastName.toLowerCase()) !== -1) return reject(new Error("Password can not contain your last name"));
            } else return reject(new Error("Password is required"));

            if (userData.firstName) {
              if (userData.firstName.length !== 0) {
                if (userData.firstName[0] === userData.firstName[0].toLowerCase()) return reject(new Error("First name is not title case"));
              } else return reject(new Error("First name is required"));
            } else return reject(new Error("First name is required"));

            if (userData.lastName) {
              if (userData.lastName.length !== 0) {
                if (userData.lastName[0] === userData.lastName[0].toLowerCase()) return reject(new Error("Last name is not title case"));
              } else return reject(new Error("Last name is required"));
            } else return reject(new Error("Last name is required"));
          } else return reject(new Error("User data is not an object"));

          if (_API.default.UseSocketIO && _API.default.ShouldUseSocketIO) {
            return new _promise.default(function (resolve, reject) {
              var _this18 = this;

              _newArrowCheck(this, _this17);

              if (token) _API.default.GetSocket().then(function (socket) {
                _newArrowCheck(this, _this18);

                socket.emit("/API/User/Create", userData, resolve);
              }.bind(this), reject);else resolve(null);
            }.bind(this));
          }

          return _API.default.Call("POST", "/API/User", userData).then(function (data) {
            var _this19 = this;

            _newArrowCheck(this, _this17);

            if (data) User.setUser(data).then(function (user) {
              _newArrowCheck(this, _this19);

              resolve(user);
            }.bind(this), reject);else reject(new Error("".concat((0, _stringify.default)(data), " returned")));
          }.bind(this), reject);
        }.bind(this));
      }
    }]);

    return User;
  }(_RESTModel2.default);

  _exports.default = User;

  _defineProperty(User, "ModelName", "User");

  _defineProperty(User, "Current", null);

  _defineProperty(User, "Callbacks", new _map.default());

  _defineProperty(User, "agreement", null);
});