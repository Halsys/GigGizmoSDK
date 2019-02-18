"use strict";
/**
 * Created by corynull on 5/17/17.
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
var TwitterAccount = /** @class */ (function (_super) {
    __extends(TwitterAccount, _super);
    function TwitterAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(TwitterAccount.prototype, "userId", {
        get: function () {
            return this.getField("userId");
        },
        set: function (value) {
            this.setField("userId", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TwitterAccount.prototype, "accessToken", {
        get: function () {
            return this.getField("accessToken");
        },
        set: function (value) {
            this.setField("accessToken", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TwitterAccount.prototype, "tokenSecret", {
        get: function () {
            return this.getField("tokenSecret");
        },
        set: function (value) {
            this.setField("tokenSecret", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TwitterAccount.prototype, "profile", {
        get: function () {
            return this.getField("profile");
        },
        set: function (value) {
            this.setField("profile", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TwitterAccount.prototype, "accountId", {
        get: function () {
            return this.getField("accountId");
        },
        set: function (value) {
            this.setField("accountId", value);
        },
        enumerable: true,
        configurable: true
    });
    TwitterAccount.findById = function (id) {
        return new Promise(function (resolve, reject) {
            if (typeof id === "string" && id !== "") {
                API_1.default.call("GET", "/API/TwitterAccount/" + id, null).then(function (response) {
                    var account = response || null;
                    if (account) {
                        resolve(new TwitterAccount(account));
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
    TwitterAccount.prototype.getUser = function () {
        return RESTModel_1.default.findByIdBase(User_1.default, this.userId, true);
    };
    TwitterAccount.prototype.userIsOwner = function (user) {
        if (typeof user === "string") {
            return user === this.userId;
        }
        if (typeof user === "function") {
            return user._id === this.userId;
        }
        return false;
    };
    TwitterAccount.prototype.goToTwitterAccount = function () {
        if (typeof window !== "undefined") {
            // We are on a browser
            window.location.href = "https://twitter.com?profile_id=" + this.accountId;
        }
    };
    TwitterAccount.prototype.isValid = function () {
        if (!_super.prototype.isValid.call(this)) {
            return false;
        }
        if (!this.userId || typeof this.userId !== "string") {
            return false;
        }
        if (!this.profile || typeof this.profile !== "object") {
            return false;
        }
        return true;
    };
    TwitterAccount.ModelName = "TwitterAccount";
    return TwitterAccount;
}(RESTModel_1.default));
exports.default = TwitterAccount;
//# sourceMappingURL=TwitterAccount.js.map