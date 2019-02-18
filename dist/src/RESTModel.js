"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var ModelNameToModel_1 = __importDefault(require("./ModelNameToModel"));
var RESTModel = /** @class */ (function () {
    function RESTModel(dataMaybe) {
        this.expiration = ((new Date())
            .getTime() +
            1 * // Hours
                60 * // Minutes
                60 * // Seconds
                1000 // Milliseconds
        );
        this.changes = new Object();
        this.document = new Object();
        this.document = new Object();
        this.changes = new Object();
        if (typeof dataMaybe === "string") {
            try {
                var data = JSON.parse(dataMaybe);
                if (data !== null && typeof data.ModelName !== "undefined") {
                    delete data.ModelName;
                }
                Object.assign(this.document, data);
            }
            catch (e) {
                console.log(dataMaybe);
                console.error(e);
            }
        }
        else if (dataMaybe) {
            if (typeof dataMaybe.document === "object" && dataMaybe.document) {
                Object.assign(this.document, dataMaybe.document);
            }
            if (typeof dataMaybe.changes === "object" && dataMaybe.changes) {
                Object.assign(this.changes, dataMaybe.changes);
            }
            else {
                Object.assign(this.document, dataMaybe);
            }
        }
    }
    Object.defineProperty(RESTModel.prototype, "dateCreated", {
        get: function () {
            var dateCreated = this.document.dateCreated || null;
            return dateCreated ? new Date(dateCreated) : dateCreated;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RESTModel.prototype, "dateModified", {
        get: function () {
            var dateModified = this.getField("dateModified") || null;
            return dateModified ? new Date(dateModified) : dateModified;
        },
        set: function (value) {
            this.changes.dateModified = new Date(value || undefined).toJSON();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RESTModel.prototype, "id", {
        get: function () {
            return this.getField("_id");
        },
        set: function (value) {
            this.setField("_id", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RESTModel.prototype, "_id", {
        get: function () {
            return this.getField("_id");
        },
        set: function (value) {
            this.setField("_id", value);
        },
        enumerable: true,
        configurable: true
    });
    RESTModel.deduceModelAndName = function (ModelMaybe) {
        return __awaiter(this, void 0, void 0, function () {
            var Model, modelName;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (ModelMaybe === null) {
                            throw new Error("Model Name or Model Missing");
                        }
                        Model = null;
                        modelName = null;
                        if (!(typeof ModelMaybe === "string")) return [3 /*break*/, 2];
                        return [4 /*yield*/, ModelNameToModel_1.default(ModelMaybe)];
                    case 1:
                        Model = _a.sent();
                        modelName = ModelMaybe;
                        return [3 /*break*/, 3];
                    case 2:
                        if (typeof ModelMaybe === "function") {
                            Model = ModelMaybe;
                            modelName = RESTModel.getModelName(ModelMaybe);
                        }
                        else {
                            throw new Error("Invalid first agument, expected string or function, got " + ModelMaybe);
                        }
                        _a.label = 3;
                    case 3:
                        if (typeof modelName !== "string") {
                            throw new Error("Missing model name from " + Model);
                        }
                        if (typeof Model !== "function") {
                            throw new Error("Model name (" + modelName + ") did not map to constructor");
                        }
                        return [2 /*return*/, {
                                Model: Model,
                                modelName: modelName
                            }];
                }
            });
        });
    };
    RESTModel.isValidId = function (id) {
        var pattern = RegExp("^([0-9a-fA-F]{24}|[0-9a-fA-F]{12})$", "g");
        return (typeof id === "string" && pattern.test(id));
    };
    RESTModel.getModelName = function (Model) {
        if (Model == null) {
            return null;
        }
        if (Model.ModelName) {
            return Model.ModelName;
        }
        if (Model.constructor && (Model.constructor.ModelName)) {
            return Model.constructor.ModelName;
        }
    };
    RESTModel.findByIdBase = function (ModelMaybe, id, hasWebSocket) {
        if (hasWebSocket === void 0) { hasWebSocket = false; }
        return __awaiter(this, void 0, void 0, function () {
            var cache, data, _a, Model, modelName_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!RESTModel.isValidId(id)) return [3 /*break*/, 6];
                        if (RESTModel.Cache.has(id)) {
                            cache = RESTModel.Cache.get(id);
                            if (cache && new Date(cache.expiration) < new Date()) {
                                return [2 /*return*/, cache];
                            }
                        }
                        data = null;
                        return [4 /*yield*/, RESTModel.deduceModelAndName(ModelMaybe)];
                    case 1:
                        _a = _b.sent(), Model = _a.Model, modelName_1 = _a.modelName;
                        if (!(API_1.default.useSocketIO && API_1.default.ShouldUseSocketIO && hasWebSocket)) return [3 /*break*/, 3];
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                return API_1.default.getSocket().then(function (socket) {
                                    if (socket) {
                                        socket.emit("/API/" + modelName_1 + "/Retreive", id, resolve);
                                    }
                                }, reject);
                            })];
                    case 2:
                        data = _b.sent();
                        _b.label = 3;
                    case 3:
                        if (!!data) return [3 /*break*/, 5];
                        return [4 /*yield*/, API_1.default.call("GET", "/API/" + modelName_1 + "/" + id, null)];
                    case 4:
                        data = _b.sent();
                        _b.label = 5;
                    case 5:
                        if (data && RESTModel.isValidId(data._id)) {
                            data = new Model(data);
                            RESTModel.Cache.set(data._id, data);
                            return [2 /*return*/, data];
                        }
                        _b.label = 6;
                    case 6: return [2 /*return*/, null];
                }
            });
        });
    };
    RESTModel.findOneBase = function (ModelMaybe, criteria, hasWebSocket) {
        if (criteria === void 0) { criteria = {}; }
        if (hasWebSocket === void 0) { hasWebSocket = false; }
        return __awaiter(this, void 0, void 0, function () {
            var id, cache, data, _a, Model, modelName, route, socket_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (criteria === null) {
                            criteria = {};
                        }
                        if (Array.from(Object.keys(criteria)).length === 1 && typeof criteria._id === "string") {
                            id = criteria._id;
                            if (RESTModel.Cache.has(id)) {
                                cache = RESTModel.Cache.get(id);
                                if (cache && new Date(cache.expiration) < new Date()) {
                                    return [2 /*return*/, cache];
                                }
                            }
                        }
                        data = null;
                        return [4 /*yield*/, RESTModel.deduceModelAndName(ModelMaybe)];
                    case 1:
                        _a = _b.sent(), Model = _a.Model, modelName = _a.modelName;
                        route = "/API/" + modelName + "/FindOne";
                        if (!(API_1.default.useSocketIO && API_1.default.ShouldUseSocketIO && hasWebSocket)) return [3 /*break*/, 4];
                        return [4 /*yield*/, API_1.default.getSocket()];
                    case 2:
                        socket_1 = _b.sent();
                        if (!socket_1) return [3 /*break*/, 4];
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                try {
                                    socket_1.emit(route, criteria, resolve);
                                }
                                catch (e) {
                                    reject(e);
                                }
                            })];
                    case 3:
                        data = _b.sent();
                        _b.label = 4;
                    case 4:
                        if (!!data) return [3 /*break*/, 6];
                        return [4 /*yield*/, API_1.default.call("GET", route, criteria)];
                    case 5:
                        data = _b.sent();
                        _b.label = 6;
                    case 6:
                        if (data && RESTModel.isValidId(data._id)) {
                            data = new Model(data);
                            RESTModel.Cache.set(data._id, data);
                            return [2 /*return*/, data];
                        }
                        return [2 /*return*/, null];
                }
            });
        });
    };
    RESTModel.findManyBase = function (ModelMaybe, criteria, hasWebSocket) {
        if (criteria === void 0) { criteria = {}; }
        if (hasWebSocket === void 0) { hasWebSocket = false; }
        return __awaiter(this, void 0, void 0, function () {
            var items_1, data, _a, Model, modelName, route;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (criteria === null) {
                            criteria = {};
                        }
                        if (Array.from(Object.keys(criteria)).length === 1 && Array.isArray((criteria._id || criteria.id))) {
                            items_1 = [];
                            (criteria._id || criteria.id).forEach(function (id) {
                                if (typeof id === "string" && RESTModel.Cache.has(id)) {
                                    var cache = RESTModel.Cache.get(id);
                                    if (cache && new Date(cache.expiration) < new Date()) {
                                        items_1.push(cache);
                                    }
                                }
                            });
                            if (items_1.length === (criteria._id || criteria.id)) {
                                return [2 /*return*/, items_1];
                            }
                        }
                        data = null;
                        return [4 /*yield*/, RESTModel.deduceModelAndName(ModelMaybe)];
                    case 1:
                        _a = _b.sent(), Model = _a.Model, modelName = _a.modelName;
                        route = "/API/" + modelName + "/FindMany";
                        if (!(API_1.default.useSocketIO && API_1.default.ShouldUseSocketIO && hasWebSocket)) return [3 /*break*/, 3];
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                return API_1.default.getSocket().then(function (socket) {
                                    if (socket) {
                                        socket.emit(route, criteria, resolve);
                                    }
                                }, reject);
                            })];
                    case 2:
                        data = _b.sent();
                        _b.label = 3;
                    case 3:
                        criteria = criteria || {};
                        if (!!data) return [3 /*break*/, 5];
                        return [4 /*yield*/, API_1.default.call("GET", route, criteria)];
                    case 4:
                        data = _b.sent();
                        _b.label = 5;
                    case 5:
                        if (Array.isArray(data)) {
                            return [2 /*return*/, data.map(function (itemData) {
                                    var item = new Model(itemData);
                                    RESTModel.Cache.set(item._id, item);
                                    return item;
                                })];
                        }
                        return [2 /*return*/, []];
                }
            });
        });
    };
    RESTModel.prototype.setField = function (name, value) {
        if (this) {
            var currentValue = this.getField(name) || undefined;
            if (currentValue !== value) {
                this.changes[name] = value;
                this.dateModified = Date.now();
            }
        }
    };
    RESTModel.prototype.getField = function (name) {
        if (this) {
            var data = this.changes[name];
            if (typeof data !== "undefined") {
                return data;
            }
            data = this.document[name];
            if (typeof data !== "undefined") {
                return data;
            }
        }
        return null;
    };
    RESTModel.prototype.toObject = function () {
        var object = this.valid() ? __assign({}, this.changes, this.document) : null;
        if (typeof object === "object" && object) {
            if (typeof object.id !== "undefined") {
                delete object.id;
            }
            if (typeof object._id !== "undefined") {
                object._id = (object._id.toString() ? object._id : null);
            }
        }
        return object;
    };
    RESTModel.prototype.toString = function () {
        var object = this.toObject();
        return JSON.stringify(object);
    };
    RESTModel.prototype.valid = function () {
        if (!RESTModel.isValidId(this.id)) {
            throw new Error("Invalid id: " + this.id);
        }
        if (!this.dateModified || isNaN(Date.parse(this.dateModified))) {
            throw new Error("Invalid dateModified: " + this.dateModified);
        }
        if (!this.dateCreated || isNaN(Date.parse(this.dateCreated))) {
            throw new Error("Invalid dateCreated: " + this.dateCreated);
        }
        return true;
    };
    RESTModel.prototype.isValid = function () {
        if (!RESTModel.isValidId(this.id)) {
            return false;
        }
        if (!this.dateModified || isNaN(Date.parse(this.dateModified))) {
            return false;
        }
        if (!this.dateCreated || isNaN(Date.parse(this.dateCreated))) {
            return false;
        }
        return true;
    };
    RESTModel.prototype.assign = function (data) {
        if (data === void 0) { data = {}; }
        Object.assign(this.changes, data);
        return this;
    };
    RESTModel.prototype.save = function (hasWebSocket) {
        if (hasWebSocket === void 0) { hasWebSocket = false; }
        return __awaiter(this, void 0, void 0, function () {
            var modelName, response, id, data;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        modelName = this.constructor.ModelName;
                        response = null;
                        id = this.document._id || null;
                        data = this.changes;
                        Object.keys(this.changes).forEach(function (key) {
                            if (data[key] === _this.document[key]) {
                                delete data[key];
                            }
                        });
                        data.id = this.changes._id || this.document._id || null;
                        if (!(API_1.default.useSocketIO && API_1.default.ShouldUseSocketIO && hasWebSocket)) return [3 /*break*/, 5];
                        if (!RESTModel.isValidId(id)) return [3 /*break*/, 2];
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                return API_1.default.getSocket().then(function (socket) {
                                    if (socket) {
                                        socket.emit("/API/" + modelName + "/Update", data, resolve);
                                    }
                                }, reject);
                            })];
                    case 1:
                        response = _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, new Promise(function (resolve, reject) {
                            return API_1.default.getSocket().then(function (socket) {
                                if (socket) {
                                    socket.emit("/API/" + modelName + "/Create", data, resolve);
                                }
                            }, reject);
                        })];
                    case 3:
                        response = _a.sent();
                        _a.label = 4;
                    case 4: return [3 /*break*/, 9];
                    case 5:
                        if (!RESTModel.isValidId(id)) return [3 /*break*/, 7];
                        return [4 /*yield*/, API_1.default.call("PUT", "/API/" + modelName + "/" + id, data)];
                    case 6:
                        response = _a.sent();
                        return [3 /*break*/, 9];
                    case 7: return [4 /*yield*/, API_1.default.call("POST", "/API/" + modelName + "/", data)];
                    case 8:
                        response = _a.sent();
                        _a.label = 9;
                    case 9:
                        if (response && response._id) {
                            this.document = response;
                            this.changes = {};
                            RESTModel.Cache.delete(id);
                            RESTModel.Cache.set(response._id, this);
                            return [2 /*return*/, this];
                        }
                        throw new Error("returned " + response);
                }
            });
        });
    };
    RESTModel.prototype.remove = function (hasWebSocket) {
        if (hasWebSocket === void 0) { hasWebSocket = false; }
        return __awaiter(this, void 0, void 0, function () {
            var id, response, modelName_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = this._id || "";
                        if (!RESTModel.isValidId(id)) return [3 /*break*/, 5];
                        response = null;
                        modelName_2 = this.constructor.ModelName;
                        if (!(API_1.default.useSocketIO && API_1.default.ShouldUseSocketIO && hasWebSocket)) return [3 /*break*/, 2];
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                return API_1.default.getSocket().then(function (socket) {
                                    if (socket) {
                                        socket.emit("/API/" + modelName_2 + "/Delete", id, function (res) {
                                            return resolve(res);
                                        });
                                    }
                                }, reject);
                            })];
                    case 1:
                        response = _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, API_1.default.call("DELETE", "/API/" + modelName_2 + "/" + id, null)];
                    case 3:
                        response = _a.sent();
                        _a.label = 4;
                    case 4:
                        RESTModel.Cache.set(id, null);
                        return [2 /*return*/, response];
                    case 5: throw new Error("Invalid id: " + id);
                }
            });
        });
    };
    RESTModel.ModelName = "RESTModel";
    RESTModel.Cache = new Map();
    return RESTModel;
}());
exports.default = RESTModel;
//# sourceMappingURL=RESTModel.js.map