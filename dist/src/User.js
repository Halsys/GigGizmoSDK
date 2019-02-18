"use strict";
/**
 * Created by corynull on 4/1/17.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var API_1 = __importDefault(require("./API"));
var Band_1 = __importDefault(require("./Band"));
var Conversation_1 = __importDefault(require("./Conversation"));
var FacebookAccount_1 = __importDefault(require("./FacebookAccount"));
var Gig_1 = __importDefault(require("./Gig"));
var Location_1 = __importDefault(require("./Location"));
var Page_1 = __importDefault(require("./Page"));
var Post_1 = __importDefault(require("./Post"));
var RESTModel_1 = __importDefault(require("./RESTModel"));
var TwitterAccount_1 = __importDefault(require("./TwitterAccount"));
var Upload_1 = __importDefault(require("./Upload"));
var Venue_1 = __importDefault(require("./Venue"));
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(User.prototype, "password", {
        get: function () {
            return this.getField("password");
        },
        set: function (value) {
            this.setField("password", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "confirmPassword", {
        get: function () {
            return this.getField("confirmPassword");
        },
        set: function (value) {
            this.setField("confirmPassword", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "icon", {
        get: function () {
            return this.getField("icon");
        },
        set: function (value) {
            this.setField("icon", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "active", {
        get: function () {
            return this.getField("active");
        },
        set: function (value) {
            this.setField("active", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "admin", {
        get: function () {
            return this.getField("admin") === true;
        },
        set: function (value) {
            this.setField("admin", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "firstName", {
        get: function () {
            return this.getField("firstName");
        },
        set: function (value) {
            this.setField("firstName", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "middleName", {
        get: function () {
            return this.getField("middleName");
        },
        set: function (value) {
            this.setField("middleName", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "lastName", {
        get: function () {
            return this.getField("lastName");
        },
        set: function (value) {
            this.setField("lastName", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "birthday", {
        get: function () {
            var birthday = this.getField("birthday") || null;
            return birthday ? new Date(birthday) : birthday;
        },
        set: function (value) {
            this.setField("birthday", (value || new Date()).toJSON());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "country", {
        get: function () {
            return this.getField("country");
        },
        set: function (value) {
            this.setField("country", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "bandManager", {
        get: function () {
            return this.getField("bandManager") === true;
        },
        set: function (value) {
            this.setField("bandManager", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "venueManager", {
        get: function () {
            return this.getField("venueManager") === true;
        },
        set: function (value) {
            this.setField("venueManager", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "betaFeatureUser", {
        get: function () {
            return this.getField("betaFeatureUser") === true;
        },
        set: function (value) {
            this.setField("betaFeatureUser", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "sendAnonymousReports", {
        get: function () {
            return this.getField("sendAnonymousReports") === true;
        },
        set: function (value) {
            this.setField("sendAnonymousReports", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "sendErrorReports", {
        get: function () {
            return this.getField("sendErrorReports") === true;
        },
        set: function (value) {
            this.setField("sendErrorReports", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "sendEmails", {
        get: function () {
            return this.getField("sendEmails") === true;
        },
        set: function (value) {
            this.setField("sendEmails", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "sendPromotions", {
        get: function () {
            return this.getField("sendPromotions") === true;
        },
        set: function (value) {
            this.setField("sendPromotions", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "useCookies", {
        get: function () {
            return this.getField("useCookies") === true;
        },
        set: function (value) {
            this.setField("useCookies", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "fullName", {
        get: function () {
            return (this.firstName || "") + " " + (this.middleName || "") + " " + (this.lastName ||
                "");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "email", {
        get: function () {
            return this.getField("email");
        },
        set: function (value) {
            this.setField("email", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "salt", {
        get: function () {
            return this.getField("salt");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "hash", {
        get: function () {
            return this.getField("hash");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "facebook", {
        get: function () {
            return this.getField("facebook");
        },
        set: function (value) {
            this.setField("facebook", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "twitter", {
        get: function () {
            return this.getField("twitter");
        },
        set: function (value) {
            this.setField("twitter", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "description", {
        get: function () {
            return this.getField("description");
        },
        set: function (value) {
            this.setField("description", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "emailVerified", {
        get: function () {
            return this.getField("emailVerified");
        },
        set: function (value) {
            this.setField("emailVerified", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "attempts", {
        get: function () {
            return this.getField("attempts");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "lastLoginIP", {
        get: function () {
            return this.getField("lastLoginIP");
        },
        set: function (value) {
            this.setField("lastLoginIP", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "lastLogin", {
        get: function () {
            var lastLogin = this.getField("lastLogin") || null;
            return lastLogin ? new Date(lastLogin) : lastLogin;
        },
        set: function (value) {
            this.setField("lastLogin", (value || new Date()).toJSON());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "canContact", {
        get: function () {
            return this.getField("canContact") === true;
        },
        set: function (value) {
            this.setField("canContact", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "canFind", {
        get: function () {
            return this.getField("canFind") === true;
        },
        set: function (value) {
            this.setField("canFind", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "options", {
        get: function () {
            return this.getField("options");
        },
        set: function (value) {
            this.setField("options", value);
        },
        enumerable: true,
        configurable: true
    });
    User.verifyEmail = function (id, secret) {
        return API_1.default.call("GET", "/API/User/Verify", {
            id: id,
            secret: secret
        });
    };
    User.sendEmailVerification = function () {
        return API_1.default.call("POST", "/API/User/Verify", null);
    };
    User.getAllConversations = function () {
        return RESTModel_1.default.findManyBase(Conversation_1.default, null, true);
    };
    User.getAllNotifications = function () {
        return RESTModel_1.default.findManyBase(Notification, null, true);
    };
    User.getAllPosts = function () {
        return RESTModel_1.default.findManyBase(Post_1.default, null, true);
    };
    User.getAllBands = function () {
        return RESTModel_1.default.findManyBase(Band_1.default, null, true);
    };
    User.getAllVenues = function () {
        return RESTModel_1.default.findManyBase(Venue_1.default, null, true);
    };
    User.getAllGigs = function () {
        return RESTModel_1.default.findManyBase(Gig_1.default, null, true);
    };
    User.getAllUploads = function () {
        return RESTModel_1.default.findManyBase(Upload_1.default, null, true);
    };
    User.findFacebookPages = function (term) {
        return new Promise(function (resolve, reject) {
            if (term === "") {
                resolve();
            }
            else {
                API_1.default.call("GET", "/API/FacebookAccount/FindPages", { term: term }).then(resolve, reject);
            }
        });
    };
    User.search = function (q, modelName, skip, limit) {
        var _this = this;
        if (modelName === void 0) { modelName = null; }
        if (skip === void 0) { skip = 0; }
        if (limit === void 0) { limit = Number.POSITIVE_INFINITY; }
        return new Promise(function (resolve, reject) {
            if (q === "" || q === undefined) {
                resolve();
            }
            else {
                var data_1 = {
                    limit: undefined,
                    model: undefined,
                    q: undefined,
                    skip: undefined
                };
                data_1.q = q;
                if (modelName !== null && modelName !== "Any") {
                    data_1.model = modelName;
                }
                if (Number.isFinite(Number(skip))) {
                    data_1.skip = Number(skip);
                }
                if (Number.isFinite(Number(limit))) {
                    data_1.limit = Number(limit);
                }
                var Return_1 = function (results) {
                    var query = results.query;
                    var totalFound = results.totalFound;
                    if (!query) {
                        reject(query);
                    }
                    var bands = [];
                    var venues = [];
                    var users = [];
                    var pages = [];
                    var locations = [];
                    var uploads = [];
                    query.forEach(function (item) { return __awaiter(_this, void 0, void 0, function () {
                        var mName;
                        return __generator(this, function (_a) {
                            if (item && item.ModelName) {
                                mName = item.ModelName;
                                if (mName === "Band") {
                                    bands.push(new Band_1.default(item));
                                }
                                else if (mName === "Venue") {
                                    venues.push(new Venue_1.default(item));
                                }
                                else if (mName === "User") {
                                    users.push(new User(item));
                                }
                                else if (mName === "Page") {
                                    pages.push(new Page_1.default(item));
                                }
                                else if (mName === "Location") {
                                    locations.push(new Location_1.default(item));
                                }
                                else if (mName === "Upload") {
                                    uploads.push(new Upload_1.default(item));
                                }
                            }
                            return [2 /*return*/];
                        });
                    }); });
                    var sorted = {
                        bands: bands,
                        locations: locations,
                        pages: pages,
                        totalFound: totalFound,
                        uploads: uploads,
                        users: users,
                        venues: venues
                    };
                    resolve(sorted);
                };
                if (API_1.default.useSocketIO && API_1.default.ShouldUseSocketIO) {
                    API_1.default.getSocket().then(function (socket) {
                        if (socket) {
                            socket.emit("/API/TextSearch", data_1, Return_1);
                        }
                    }, reject);
                }
                else {
                    API_1.default.call("GET", "/API/TextSearch", data_1).then(Return_1, reject);
                }
            }
        });
    };
    User.findMany = function (criteria) {
        return RESTModel_1.default.findManyBase(User, criteria, true);
    };
    User.findOne = function (criteria) {
        return RESTModel_1.default.findOneBase(User, criteria, true);
    };
    User.onChange = function (callback) {
        var id = Date.now();
        User.Callbacks.set(id, callback);
        return function () {
            User.Callbacks.delete(id);
        };
    };
    User.setUser = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                try {
                    if (typeof data === "object" && data) {
                        User.Current = new User(data);
                        if (API_1.default.SessionStorageSupported) {
                            sessionStorage.setItem("user", JSON.stringify(data));
                        }
                        User.Callbacks.forEach(function (callback) { return callback(User.Current); });
                    }
                    else {
                        User.Current = null;
                        API_1.default.token = null;
                        if (API_1.default.SessionStorageSupported) {
                            sessionStorage.removeItem("user");
                        }
                        User.Callbacks.forEach(function (callback) { return callback(null); });
                    }
                }
                catch (e) {
                    console.error(e);
                }
                return [2 /*return*/, User.Current];
            });
        });
    };
    User.getUser = function (force) {
        return __awaiter(this, void 0, void 0, function () {
            var data, dateNow;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        data = null;
                        dateNow = new Date();
                        if (!force && API_1.default.expires && dateNow < API_1.default.expires) {
                            if (User.Current !== null) {
                                /* If we already have the current user cached, return it... */
                                return [2 /*return*/, User.Current];
                            }
                            else if (API_1.default.SessionStorageSupported) {
                                /* If the user is stored in session storage. */
                                data = JSON.parse(sessionStorage.getItem("user") || "");
                                if (data) {
                                    return [2 /*return*/, User.setUser(data)];
                                }
                            }
                        }
                        if (!(API_1.default.useSocketIO && API_1.default.ShouldUseSocketIO)) return [3 /*break*/, 2];
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                API_1.default.getSocket().then(function (socket) {
                                    if (socket) {
                                        socket.emit("/API/User/Retreive", resolve);
                                    }
                                }, reject);
                            })];
                    case 1:
                        data = _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, API_1.default.call("GET", "/API/User", null)];
                    case 3:
                        data = _a.sent();
                        _a.label = 4;
                    case 4:
                        if (data) {
                            return [2 /*return*/, User.setUser(data)];
                        }
                        return [2 /*return*/, User.setUser(null)];
                }
            });
        });
    };
    User.findById = function (id) {
        return RESTModel_1.default.findByIdBase(User, id, true);
    };
    User.connectFacebook = function () {
        window.location.href = API_1.default.rootURL + "/API/Auth/Facebook";
    };
    User.facebookLogIn = function () {
        window.location.href = API_1.default.rootURL + "/API/Login/Facebook";
    };
    User.payPalLogIn = function () {
        window.location.href = API_1.default.rootURL + "/API/Auth/PayPal";
    };
    User.userLogIn = function (email, password) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!email) return [3 /*break*/, 1];
                        throw new Error("No email");
                    case 1:
                        if (!!password) return [3 /*break*/, 2];
                        throw new Error("No password");
                    case 2:
                        response = null;
                        if (!(API_1.default.useSocketIO && API_1.default.ShouldUseSocketIO)) return [3 /*break*/, 4];
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                API_1.default.getSocket().then(function (socket) {
                                    if (socket) {
                                        socket.emit("/API/User/SignIn", {
                                            email: email,
                                            password: password
                                        }, resolve);
                                    }
                                }, reject);
                            })];
                    case 3:
                        response = _a.sent();
                        return [3 /*break*/, 6];
                    case 4: return [4 /*yield*/, API_1.default.call("POST", "/API/User/SignIn", {
                            email: email,
                            password: password
                        })];
                    case 5:
                        response = _a.sent();
                        _a.label = 6;
                    case 6:
                        // TODO: Create error for unauthorized access vs general error
                        if (response && response.user && response.token) {
                            API_1.default.expires = response.expires;
                            API_1.default.token = response.token.toString();
                            return [2 /*return*/, User.setUser(response.user)];
                        }
                        else {
                            throw new Error("Unauthorized");
                        }
                        _a.label = 7;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    User.userLogOut = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        response = null;
                        if (!(API_1.default.useSocketIO && API_1.default.ShouldUseSocketIO)) return [3 /*break*/, 2];
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                API_1.default.getSocket().then(function (socket) {
                                    if (socket) {
                                        socket.emit("/API/User/SignOut", null, resolve);
                                    }
                                }, reject);
                            })];
                    case 1:
                        response = _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, API_1.default.call("POST", "/API/User/SignOut", null)];
                    case 3:
                        response = _a.sent();
                        _a.label = 4;
                    case 4: return [4 /*yield*/, User.setUser(null)];
                    case 5:
                        user = _a.sent();
                        if (user && user.valid()) {
                            throw new Error(JSON.stringify(user) + " returned, failed to log out?");
                        }
                        else {
                            return [2 /*return*/, user];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    User.sendPasswordResetEmail = function (email) {
        return API_1.default.call("POST", "/User/Reset", { email: email });
    };
    User.registerUser = function (userData) {
        return new Promise(function (resolve, reject) {
            if (userData && typeof userData === "object") {
                if (userData.email) {
                    var re = new RegExp(["^(([^<>()[].,;:s@\"]+",
                        "(.[^<>()[].,;:s@\"]+)*)|(\".+\"))",
                        "@(([^<>()[].,;:s@\"]+.)+",
                        "[^<>()[].,;:s@\"]{2,})$"].join(""), "i");
                    if (re[Symbol.search](userData.email) !== 0) {
                        return reject(new Error("Invalid email address"));
                    }
                }
                else {
                    return reject(new Error("Email is required"));
                }
                if (userData.password) {
                    var symbolTest = /[^a-zA-Z0-9]/gu;
                    var numberTest = /[0-9]/g;
                    var lowercasePassword = userData.password.toLowerCase();
                    if (userData.password === "") {
                        return reject(new Error("Password is required"));
                    }
                    else if (userData.password.length < 8) {
                        return reject(new Error("Password is too short"));
                    }
                    else if (userData.password.length > 256) {
                        return reject(new Error("Password is too long"));
                    }
                    else if (!symbolTest.test(userData.password)) {
                        return reject(new Error("Password does not contain at least one symbol"));
                    }
                    else if (!numberTest.test(userData.password)) {
                        return reject(new Error("Password does not contain at least one number"));
                    }
                    else if (userData.firstName &&
                        userData.firstName.length !== 0 &&
                        lowercasePassword.indexOf(userData.firstName.toLowerCase()) !== -1) {
                        return reject(new Error("Password can not contain your first name"));
                    }
                    else if (userData.lastName &&
                        userData.lastName.length !== 0 &&
                        lowercasePassword.indexOf(userData.lastName.toLowerCase()) !== -1) {
                        return reject(new Error("Password can not contain your last name"));
                    }
                }
                else {
                    return reject(new Error("Password is required"));
                }
                if (userData.firstName) {
                    if (userData.firstName.length !== 0) {
                        if (userData.firstName[0] === userData.firstName[0].toLowerCase()) {
                            return reject(new Error("First name is not title case"));
                        }
                    }
                    else {
                        return reject(new Error("First name is required"));
                    }
                }
                else {
                    return reject(new Error("First name is required"));
                }
                if (userData.lastName) {
                    if (userData.lastName.length !== 0) {
                        if (userData.lastName[0] === userData.lastName[0].toLowerCase()) {
                            return reject(new Error("Last name is not title case"));
                        }
                    }
                    else {
                        return reject(new Error("Last name is required"));
                    }
                }
                else {
                    return reject(new Error("Last name is required"));
                }
            }
            else {
                return reject(new Error("User data is not an object"));
            }
            if (API_1.default.useSocketIO && API_1.default.ShouldUseSocketIO) {
                return new Promise(function (res, rej) {
                    API_1.default.getSocket().then(function (socket) {
                        if (socket) {
                            socket.emit("/API/User/Create", userData, res);
                        }
                    }, rej);
                });
            }
            return API_1.default.call("POST", "/API/User", userData).then(function (data) {
                if (data) {
                    User.setUser(data).then(function (user) {
                        resolve(user);
                    }, reject);
                }
                else {
                    reject(new Error(JSON.stringify(data) + " returned"));
                }
            }, reject);
        });
    };
    User.NotifyAdminsOfError = function () {
        console.error("Not implemented yet.");
    };
    User.prototype.getIcon = function () {
        return RESTModel_1.default.findByIdBase(Upload_1.default, this.icon || "", true);
    };
    User.prototype.getTwitterAccount = function () {
        return RESTModel_1.default.findByIdBase(TwitterAccount_1.default, this.twitter || "");
    };
    User.prototype.getFacebookAccount = function () {
        return RESTModel_1.default.findByIdBase(FacebookAccount_1.default, this.facebook || "");
    };
    User.prototype.validatePassword = function (maybePassword) {
        var password = maybePassword || "";
        var decimalTest = /\d/;
        var symbolTest = /\W/;
        var lowercasePassword = password.toLowerCase();
        var lowercaseFirstName = this.firstName ? this.firstName.toLowerCase() : "";
        var lowercaseLastName = this.lastName ? this.lastName.toLowerCase() : "";
        if (password === "") {
            return new Error("Password missing");
        }
        else if (password.length < 8) {
            return new Error("Password is too short");
        }
        else if (password.length > 256) {
            return new Error("Password is too long");
        }
        else if (!decimalTest.test(password)) {
            return new Error("Password does not have atleast one number");
        }
        else if (!symbolTest.test(password)) {
            return new Error("Password does not have atleast one symbol");
        }
        else if (lowercasePassword.indexOf(lowercaseFirstName) !== -1) {
            return new Error("Password cannot contain your first name");
        }
        else if (lowercasePassword.indexOf(lowercaseLastName) !== -1) {
            return new Error("Password cannot contain your last name");
        }
        return null;
    };
    User.prototype.isValid = function () {
        if (!_super.prototype.isValid.call(this)) {
            return false;
        }
        // Type checks
        if (typeof this.firstName !== "string") {
            return false;
        }
        if (typeof this.lastName !== "string") {
            return false;
        }
        if (typeof this.email !== "string") {
            return false;
        }
        // Value checks
        if (this.firstName === "") {
            return false;
        }
        if (this.lastName === "") {
            return false;
        }
        if (this.email === "") {
            return false;
        }
        // TODO: More validation checks?
        return true;
    };
    User.prototype.valid = function () {
        _super.prototype.valid.call(this);
        // Type checks
        if (typeof this.firstName !== "string") {
            throw new Error("Invalid firstName: " + this.firstName);
        }
        if (typeof this.lastName !== "string") {
            throw new Error("Invalid lastName: " + this.lastName);
        }
        // Value checks
        if (this.firstName === "") {
            throw new Error("Blank firstName");
        }
        if (this.lastName === "") {
            throw new Error("Blank lastName");
        }
        // TODO: More validation checks?
        return true;
    };
    User.prototype.save = function () {
        return _super.prototype.save.call(this, true);
    };
    User.prototype.remove = function () {
        return _super.prototype.remove.call(this, true);
    };
    User.ModelName = "User";
    User.Current = null;
    User.Callbacks = new Map();
    User.agreement = null;
    User.EmailRegex = new RegExp(["^(([^<>()[].,;:s@\"]+",
        "(.[^<>()[].,;:s@\"]+)*)|(\".+\"))",
        "@(([^<>()[].,;:s@\"]+.)+",
        "[^<>()[].,;:s@\"]{2,})$"].join(""), "i");
    return User;
}(RESTModel_1.default));
exports.default = User;
//# sourceMappingURL=User.js.map