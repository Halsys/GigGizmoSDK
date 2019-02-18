"use strict";
/**
 * Created by corynull on 8/15/17.
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
var RESTModel_1 = __importDefault(require("./RESTModel"));
var Notification = /** @class */ (function (_super) {
    __extends(Notification, _super);
    function Notification() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.changeCallbacks = new Map();
        return _this;
    }
    Object.defineProperty(Notification.prototype, "userId", {
        get: function () {
            return this.getField("userId");
        },
        set: function (value) {
            this.setField("userId", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Notification.prototype, "label", {
        get: function () {
            return this.getField("label");
        },
        set: function (value) {
            this.setField("label", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Notification.prototype, "message", {
        get: function () {
            return this.getField("message");
        },
        set: function (value) {
            this.setField("message", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Notification.prototype, "actions", {
        get: function () {
            return this.getField("actions");
        },
        set: function (value) {
            this.setField("actions", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Notification.prototype, "seenByUser", {
        get: function () {
            return this.getField("seenByUser");
        },
        set: function (value) {
            this.setField("seenByUser", value);
        },
        enumerable: true,
        configurable: true
    });
    Notification.onNewNotification = function (note) {
        Notification.Callbacks.forEach(function (callback) { return callback(note); });
    };
    Notification.newCallback = function (callback) {
        var callbackId = Date.now();
        Notification.Callbacks.set(callbackId, callback);
        return function () { return Notification.Callbacks.delete(callbackId); };
    };
    Notification.getNewNotifications = function () {
        return __awaiter(this, void 0, void 0, function () {
            var notes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(API_1.default.token !== null)) return [3 /*break*/, 2];
                        return [4 /*yield*/, API_1.default.call("GET", "/API/Notification", {
                                returnNew: true
                            })];
                    case 1:
                        notes = _a.sent();
                        return [2 /*return*/, Array.from(notes).map(function (item) { return new Notification(item); })];
                    case 2: return [2 /*return*/, []];
                }
            });
        });
    };
    Notification.getAllOwned = function () {
        return RESTModel_1.default.findManyBase("Notification", null, true);
    };
    Notification.findById = function (id) {
        return RESTModel_1.default.findByIdBase("Notification", id, true);
    };
    Notification.connectSocket = function () {
        API_1.default.getSocket().then(function (socket) {
            if (socket) {
                socket.on("notification", function (data) {
                    return Notification.onNewNotification(new Notification(data));
                });
            }
        }, console.error);
    };
    Notification.setUpPushNotifications = function () {
        var PushSupported = typeof window !== "undefined" &&
            typeof window.Notification !== "undefined";
        var webNotification = (PushSupported) ? window.Notification : null;
        if (PushSupported) {
            var setup = function (permission) {
                if (permission === "granted") {
                    Notification.onNewNotification(function (note) {
                        return new webNotification(note.label, {
                            body: note.message,
                            data: note,
                            icon: "/LogoSmall.png",
                            timestamp: note.dateCreated
                        });
                    });
                }
            };
            if (webNotification.permission === "granted") {
                setup(webNotification.permission);
            }
            else {
                webNotification.requestPermission(setup);
            }
        }
    };
    Notification.prototype.newChangeCallback = function (callback) {
        var _this = this;
        var i = Date.now();
        this.changeCallbacks.set(i, callback);
        return function () { return _this.changeCallbacks.delete(i); };
    };
    Notification.ModelName = "Notification";
    Notification.Callbacks = new Map();
    return Notification;
}(RESTModel_1.default));
exports.default = Notification;
//# sourceMappingURL=Notification.js.map