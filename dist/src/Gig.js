"use strict";
/**
 * Created by corynull on 4/5/17.
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
var Location_1 = __importDefault(require("./Location"));
var RESTModel_1 = __importDefault(require("./RESTModel"));
var Venue_1 = __importDefault(require("./Venue"));
var Gig = /** @class */ (function (_super) {
    __extends(Gig, _super);
    function Gig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Gig.prototype, "startTime", {
        get: function () {
            var startTime = this.getField("startTime");
            return startTime ? new Date(startTime) : startTime;
        },
        set: function (value) {
            this.setField("startTime", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Gig.prototype, "stopTime", {
        get: function () {
            var stopTime = this.getField("stopTime");
            return stopTime ? new Date(stopTime) : stopTime;
        },
        set: function (value) {
            this.setField("stopTime", value.toJSON());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Gig.prototype, "location", {
        get: function () {
            return this.getField("location");
        },
        set: function (value) {
            this.setField("location", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Gig.prototype, "venue", {
        get: function () {
            return this.getField("venue");
        },
        set: function (value) {
            this.setField("venue", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Gig.prototype, "bands", {
        get: function () {
            return this.getField("bands");
        },
        set: function (value) {
            this.setField("bands", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Gig.prototype, "active", {
        get: function () {
            return this.getField("active");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Gig.prototype, "toBeAnnounced", {
        get: function () {
            return this.getField("toBeAnnounced");
        },
        set: function (value) {
            this.setField("toBeAnnounced", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Gig.prototype, "bandOwnersAccepted", {
        get: function () {
            return this.getField("bandOwnersAccepted");
        },
        set: function (value) {
            this.setField("bandOwnersAccepted", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Gig.prototype, "venueOwnerAccepted", {
        get: function () {
            return this.getField("venueOwnerAccepted");
        },
        set: function (value) {
            this.setField("venueOwnerAccepted", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Gig.prototype, "owners", {
        get: function () {
            return this.getField("owners");
        },
        set: function (value) {
            this.setField("owners", value);
        },
        enumerable: true,
        configurable: true
    });
    Gig.findById = function (id) {
        return RESTModel_1.default.findByIdBase(Gig, id, true);
    };
    Gig.findByBand = function (bandId) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, API_1.default.call("GET", "/API/Band/" + bandId + "/Gigs", null)];
                    case 1:
                        data = _a.sent();
                        if (data && Array.isArray(data)) {
                            return [2 /*return*/, data.map(function (itemData) {
                                    var item = new Gig(itemData);
                                    RESTModel_1.default.Cache.set(item._id, item);
                                    return item;
                                })];
                        }
                        throw new Error("Expected Array, got " + data);
                }
            });
        });
    };
    Gig.findByVenue = function (venueId) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, API_1.default.call("GET", "/API/Venue/" + venueId + "/Gigs", null)];
                    case 1:
                        data = _a.sent();
                        if (data && Array.isArray(data)) {
                            return [2 /*return*/, data.map(function (itemData) {
                                    var item = new Gig(itemData);
                                    RESTModel_1.default.Cache.set(item._id, item);
                                    return item;
                                })];
                        }
                        throw new Error("Expected Array, got " + data);
                }
            });
        });
    };
    Gig.getAllOwned = function () {
        return RESTModel_1.default.findManyBase(Gig, null, true);
    };
    Gig.findMany = function (criteria) {
        return RESTModel_1.default.findManyBase(Gig, criteria, true);
    };
    Gig.createGigs = function (gigData) {
        return new Promise(function (resolve, reject) {
            var data = gigData || {};
            if (data && typeof data === "object") {
                if (!data.band || data.band === "") {
                    return reject(new Error("Band is required"));
                }
                if (!data.venue || data.venue === "") {
                    return reject(new Error("Venue is required"));
                }
                if (!data.times || data.times.length === 0) {
                    return reject(new Error("Times is required"));
                }
                var filtered = data.times.filter(function (time, i) {
                    if (time.dayDate && time.startTime && time.stopTime) {
                        var dayDate = new Date(time.dayDate);
                        var startTime = new Date(time.startTime);
                        startTime.setFullYear(dayDate.getFullYear());
                        startTime.setMonth(dayDate.getMonth());
                        startTime.setDate(dayDate.getDay());
                        var stopTime = new Date(time.stopTime);
                        stopTime.setFullYear(dayDate.getFullYear());
                        stopTime.setMonth(dayDate.getMonth());
                        stopTime.setDate(dayDate.getDay());
                        data.times[i] = {
                            startTime: time.startTime,
                            stopTime: time.stopTime
                        };
                        return true;
                    }
                    else if (time.startTime && time.stopTime) {
                        data.times[i] = {
                            startTime: time.startTime,
                            stopTime: time.stopTime
                        };
                        return true;
                    }
                    return false;
                });
                if (filtered.length !== data.times.length) {
                    return reject(new Error("Not all times were valid"));
                }
                data.times = filtered;
                var request = API_1.default.call("POST", "/API/Gig", data);
                return request.then((function (response) {
                    var gigs = [];
                    gigs = Array.from(response || []).map(function (itemData) {
                        var gig = new Gig(itemData);
                        return gig;
                    });
                    resolve(gigs);
                }), reject);
            }
            return null;
        });
    };
    Gig.getAllInDistance = function (location, distance) {
        return new Promise(function (resolve, reject) {
            if (typeof location !== "object") {
                return reject(new Error("location is not a object!"));
            }
            if (typeof location.lat !== "number" ||
                typeof location.lng !== "number") {
                return reject(new Error("location does not contain lat or lng!"));
            }
            if (typeof distance !== "number") {
                return reject(new Error("radius is not a number!"));
            }
            return API_1.default.call("GET", "/API/Gig/InDistance", {
                dis: distance,
                lat: location.lat,
                lng: location.lng
            }).then((function (gigs) {
                resolve(Array.from(gigs).map(function (item) {
                    var gig = new Gig(item);
                    return gig;
                }));
            }), reject);
        });
    };
    Gig.prototype.getBands = function () {
        return RESTModel_1.default.findManyBase(Band_1.default, { _id: this.bands }, true);
    };
    Gig.prototype.getVenue = function () {
        return RESTModel_1.default.findByIdBase(Venue_1.default, this.venue, true);
    };
    Gig.prototype.getLocation = function () {
        return RESTModel_1.default.findByIdBase(Location_1.default, this.location, true);
    };
    Gig.prototype.isValid = function () {
        if (!_super.prototype.isValid.call(this)) {
            return false;
        }
        if (!Array.isArray(this.owners)) {
            return false;
        }
        if (this.owners.length === 0) {
            return false;
        }
        return true;
    };
    Gig.prototype.userIsOwner = function (user) {
        if (Array.isArray(this.owners)) {
            var userId_1;
            if (typeof user === "string") {
                userId_1 = user;
            }
            else if (typeof user === "object" && user) {
                userId_1 = user._id;
            }
            return this.owners.find(function (id) { return id === userId_1; }) !== undefined;
        }
        return false;
    };
    Gig.ModelName = "Gig";
    return Gig;
}(RESTModel_1.default));
exports.default = Gig;
//# sourceMappingURL=Gig.js.map