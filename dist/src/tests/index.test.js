"use strict";
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
var _this = this;
var expect = require("chai").expect;
global["socket.io-client"] = require("socket.io-client");
global.axios = require("axios");
var GigGizmoSDK = require("../../index.js");
var Band = GigGizmoSDK.Band, Conversation = GigGizmoSDK.Conversation, ErrorReport = GigGizmoSDK.ErrorReport, FacebookAccount = GigGizmoSDK.FacebookAccount, Gig = GigGizmoSDK.Gig, GooglePlace = GigGizmoSDK.GooglePlace, Location = GigGizmoSDK.Location, Notification = GigGizmoSDK.Notification, Page = GigGizmoSDK.Page, Post = GigGizmoSDK.Post, Request = GigGizmoSDK.Request, TwitterAccount = GigGizmoSDK.TwitterAccount, Upload = GigGizmoSDK.Upload, User = GigGizmoSDK.User, Venue = GigGizmoSDK.Venue;
var ModelNameToModel = GigGizmoSDK.ModelNameToModel;
describe("Isomorphic", function () {
    it("Export not null", function () {
        expect(GigGizmoSDK).to.not.equal(null);
    });
    it("Global not null", function () {
        expect(global.GigGizmoSDK).to.not.equal(null);
    });
});
describe("ModelNameToModel", function () {
    it("Null", function () { return __awaiter(_this, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = expect;
                    return [4 /*yield*/, ModelNameToModel(null)];
                case 1:
                    _a.apply(void 0, [_b.sent()]).to.equal(null);
                    return [2 /*return*/];
            }
        });
    }); });
    it("Band", function () { return __awaiter(_this, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = expect;
                    return [4 /*yield*/, ModelNameToModel("Band")];
                case 1:
                    _a.apply(void 0, [_b.sent()]).to.equal(Band);
                    return [2 /*return*/];
            }
        });
    }); });
    it("Conversation", function () { return __awaiter(_this, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = expect;
                    return [4 /*yield*/, ModelNameToModel("Conversation")];
                case 1:
                    _a.apply(void 0, [_b.sent()]).to.equal(Conversation);
                    return [2 /*return*/];
            }
        });
    }); });
    it("ErrorReport", function () { return __awaiter(_this, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = expect;
                    return [4 /*yield*/, ModelNameToModel("ErrorReport")];
                case 1:
                    _a.apply(void 0, [_b.sent()]).to.equal(ErrorReport);
                    return [2 /*return*/];
            }
        });
    }); });
    it("FacebookAccount", function () { return __awaiter(_this, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = expect;
                    return [4 /*yield*/, ModelNameToModel("FacebookAccount")];
                case 1:
                    _a.apply(void 0, [_b.sent()]).to.equal(FacebookAccount);
                    return [2 /*return*/];
            }
        });
    }); });
    it("Gig", function () { return __awaiter(_this, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = expect;
                    return [4 /*yield*/, ModelNameToModel("Gig")];
                case 1:
                    _a.apply(void 0, [_b.sent()]).to.equal(Gig);
                    return [2 /*return*/];
            }
        });
    }); });
    it("GooglePlace", function () { return __awaiter(_this, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = expect;
                    return [4 /*yield*/, ModelNameToModel("GooglePlace")];
                case 1:
                    _a.apply(void 0, [_b.sent()]).to.equal(GooglePlace);
                    return [2 /*return*/];
            }
        });
    }); });
    it("Location", function () { return __awaiter(_this, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = expect;
                    return [4 /*yield*/, ModelNameToModel("Location")];
                case 1:
                    _a.apply(void 0, [_b.sent()]).to.equal(Location);
                    return [2 /*return*/];
            }
        });
    }); });
    it("Notification", function () { return __awaiter(_this, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = expect;
                    return [4 /*yield*/, ModelNameToModel("Notification")];
                case 1:
                    _a.apply(void 0, [_b.sent()]).to.equal(Notification);
                    return [2 /*return*/];
            }
        });
    }); });
    it("Page", function () { return __awaiter(_this, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = expect;
                    return [4 /*yield*/, ModelNameToModel("Page")];
                case 1:
                    _a.apply(void 0, [_b.sent()]).to.equal(Page);
                    return [2 /*return*/];
            }
        });
    }); });
    it("Post", function () { return __awaiter(_this, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = expect;
                    return [4 /*yield*/, ModelNameToModel("Post")];
                case 1:
                    _a.apply(void 0, [_b.sent()]).to.equal(Post);
                    return [2 /*return*/];
            }
        });
    }); });
    it("Request", function () { return __awaiter(_this, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = expect;
                    return [4 /*yield*/, ModelNameToModel("Request")];
                case 1:
                    _a.apply(void 0, [_b.sent()]).to.equal(Request);
                    return [2 /*return*/];
            }
        });
    }); });
    it("TwitterAccount", function () { return __awaiter(_this, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = expect;
                    return [4 /*yield*/, ModelNameToModel("TwitterAccount")];
                case 1:
                    _a.apply(void 0, [_b.sent()]).to.equal(TwitterAccount);
                    return [2 /*return*/];
            }
        });
    }); });
    it("Upload", function () { return __awaiter(_this, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = expect;
                    return [4 /*yield*/, ModelNameToModel("Upload")];
                case 1:
                    _a.apply(void 0, [_b.sent()]).to.equal(Upload);
                    return [2 /*return*/];
            }
        });
    }); });
    it("User", function () { return __awaiter(_this, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = expect;
                    return [4 /*yield*/, ModelNameToModel("User")];
                case 1:
                    _a.apply(void 0, [_b.sent()]).to.equal(User);
                    return [2 /*return*/];
            }
        });
    }); });
    it("Venue", function () { return __awaiter(_this, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = expect;
                    return [4 /*yield*/, ModelNameToModel("Venue")];
                case 1:
                    _a.apply(void 0, [_b.sent()]).to.equal(Venue);
                    return [2 /*return*/];
            }
        });
    }); });
});
//# sourceMappingURL=index.test.js.map