"use strict";
/**
 * Created by corynull on Nov 30 2017 9:08 AM.
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var API_1 = __importDefault(require("./API"));
var RESTModel_1 = __importDefault(require("./RESTModel"));
var User_1 = __importDefault(require("./User"));
var FacebookAccount = /** @class */ (function (_super) {
    __extends(FacebookAccount, _super);
    function FacebookAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(FacebookAccount.prototype, "userId", {
        get: function () {
            return this.getField("userId");
        },
        set: function (value) {
            this.setField("userId", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FacebookAccount.prototype, "accountId", {
        get: function () {
            return this.getField("accountId");
        },
        set: function (value) {
            this.setField("accountId", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FacebookAccount.prototype, "userAccessToken", {
        get: function () {
            return this.getField("userAccessToken");
        },
        set: function (value) {
            this.setField("userAccessToken", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FacebookAccount.prototype, "userRefreshToken", {
        get: function () {
            return this.getField("userRefreshToken");
        },
        set: function (value) {
            this.setField("userRefreshToken", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FacebookAccount.prototype, "profile", {
        get: function () {
            return this.getField("profile");
        },
        enumerable: true,
        configurable: true
    });
    FacebookAccount.findById = function (id) {
        return new Promise(function (resolve, reject) {
            if (typeof id === "string" && id !== "") {
                API_1.default.call("GET", "/API/FacebookAccount/" + id, null).then(function (found) {
                    var account = found || null;
                    if (account) {
                        resolve(new FacebookAccount(account));
                    }
                    else {
                        reject(new Error(account + " returned"));
                    }
                }, reject);
            }
            else {
                resolve();
            }
        });
    };
    FacebookAccount.findPage = function (pageName) {
        return new Promise(function (resolve, reject) {
            if (typeof pageName !== "string") {
                reject(new Error("pageName is not a string!"));
            }
            else {
                API_1.default.call("GET", "/API/Facebook/Page/Find", {
                    name: pageName
                }).then(resolve, reject);
            }
        });
    };
    FacebookAccount.PostToPage = function (format, text, pageId, postDateTime) {
        return new Promise(function (resolve, reject) {
            API_1.default.call("POST", "/API/Facebook/Page/Post", {
                fb_page_id: pageId,
                post_format: format,
                post_text: text,
                publish_time: postDateTime // .getTime() / 1000
            }).then(resolve, reject);
        });
    };
    FacebookAccount.prototype.getUser = function () {
        return RESTModel_1.default.findManyBase(User_1.default, this.userId, true);
    };
    FacebookAccount.prototype.userIsOwner = function (user) {
        if (typeof user === "string") {
            return user === this.userId;
        }
        else if (typeof user === "object" && user) {
            return user._id === this.userId;
        }
        return false;
    };
    FacebookAccount.prototype.isValid = function () {
        if (!_super.prototype.isValid.call(this)) {
            return false;
        }
        if (!this.userId || typeof this.userId !== "string") {
            return false;
        }
        if (!this.profile || typeof this.profile !== "object") {
            return false;
        }
        if (!this.accountId || typeof this.accountId !== "string") {
            return false;
        }
        return true;
    };
    FacebookAccount.ModelName = "FacebookAccount";
    return FacebookAccount;
}(RESTModel_1.default));
exports.default = FacebookAccount;
//# sourceMappingURL=FacebookAccount.js.map