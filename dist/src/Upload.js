"use strict";
/**
 * Created by corynull on 4/10/17.
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
var RESTModel_1 = __importDefault(require("./RESTModel"));
var User_1 = __importDefault(require("./User"));
var Upload = /** @class */ (function (_super) {
    __extends(Upload, _super);
    function Upload() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Upload.prototype, "fileName", {
        get: function () {
            return this.getField("fileName");
        },
        set: function (value) {
            this.setField("fileName", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Upload.prototype, "fileData", {
        get: function () {
            return this.getField("fileData");
        },
        set: function (value) {
            this.setField("fileData", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Upload.prototype, "title", {
        get: function () {
            return this.getField("title");
        },
        set: function (value) {
            this.setField("title", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Upload.prototype, "description", {
        get: function () {
            return this.getField("description");
        },
        set: function (value) {
            this.setField("description", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Upload.prototype, "owners", {
        get: function () {
            return this.getField("owners");
        },
        set: function (value) {
            this.setField("owners", value);
        },
        enumerable: true,
        configurable: true
    });
    Upload.uploadFile = function (dataUrl, fileName) {
        return __awaiter(this, void 0, void 0, function () {
            var upload;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        upload = new Upload({ fileData: dataUrl, fileName: fileName });
                        return [4 /*yield*/, upload.save(true)];
                    case 1:
                        upload = _a.sent();
                        return [2 /*return*/, upload];
                }
            });
        });
    };
    Upload.findById = function (id) {
        return RESTModel_1.default.findByIdBase(Upload, id);
    };
    Upload.findMany = function (criteria) {
        return RESTModel_1.default.findManyBase(Upload, criteria, true);
    };
    Upload.getAllOwned = function () {
        return RESTModel_1.default.findManyBase(Upload, null, true);
    };
    Upload.prototype.getOwners = function () {
        var owners = Array.from(this.owners);
        if (owners.length !== 0) {
            return RESTModel_1.default.findManyBase(User_1.default, {
                _id: owners
            }, true);
        }
        return Promise.resolve([]);
    };
    Upload.prototype.userIsOwner = function (user) {
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
    Upload.prototype.isValid = function () {
        if (!_super.prototype.isValid.call(this)) {
            return false;
        }
        if (!this.title) {
            return false;
        }
        if (!this.description) {
            return false;
        }
        if (!this.fileData) {
            return false;
        }
        if (!this.fileName) {
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
    Upload.ModelName = "Upload";
    return Upload;
}(RESTModel_1.default));
exports.default = Upload;
//# sourceMappingURL=Upload.js.map