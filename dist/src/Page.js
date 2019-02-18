"use strict";
/**
 * Created by corynull on 8/1/17.
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
var Page = /** @class */ (function (_super) {
    __extends(Page, _super);
    function Page() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Page.prototype, "data", {
        get: function () {
            return this.getField("data");
        },
        set: function (value) {
            this.setField("data", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Page.prototype, "metadata", {
        get: function () {
            return this.getField("metadata");
        },
        set: function (value) {
            this.setField("metadata", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Page.prototype, "title", {
        get: function () {
            return this.getField("title");
        },
        set: function (value) {
            this.setField("title", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Page.prototype, "link", {
        get: function () {
            return this.getField("link");
        },
        set: function (value) {
            this.setField("link", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Page.prototype, "visits", {
        get: function () {
            return this.getField("visits") || 0;
        },
        set: function (value) {
            this.setField("visits", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Page.prototype, "revisions", {
        get: function () {
            return this.getField("revisions") || 0;
        },
        set: function (value) {
            this.setField("revisions", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Page.prototype, "hide", {
        get: function () {
            var value = this.getField("hide");
            return value === null ? true : Boolean(value);
        },
        set: function (value) {
            this.setField("hide", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Page.prototype, "blog", {
        get: function () {
            var value = this.getField("blog");
            return Boolean(value);
        },
        set: function (value) {
            this.setField("blog", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Page.prototype, "doc", {
        get: function () {
            var value = this.getField("doc");
            return Boolean(value);
        },
        set: function (value) {
            this.setField("doc", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Page.prototype, "admin", {
        get: function () {
            return this.getField("admin");
        },
        set: function (value) {
            this.setField("admin", value);
        },
        enumerable: true,
        configurable: true
    });
    Page.findMany = function (criteria, skip, limit) {
        return RESTModel_1.default.findManyBase(Page, criteria);
    };
    Page.findOne = function (criteria) {
        return RESTModel_1.default.findOneBase(Page, criteria);
    };
    Page.findById = function (id) {
        return RESTModel_1.default.findByIdBase(Page, id);
    };
    Page.findByLink = function (link) {
        return new Promise(function (resolve, reject) {
            API_1.default.call("GET", "/API/Link/" + link, null).then(function (page) {
                resolve(new Page(page));
            }, reject);
        });
    };
    Page.prototype.isValid = function () {
        if (!_super.prototype.isValid.call(this)) {
            return false;
        }
        if (!this.title) {
            return false;
        }
        if (this.title === "") {
            return false;
        }
        return true;
    };
    Page.prototype.userIsOwner = function (user) {
        if (typeof user === "string") {
            return user === this.admin;
        }
        if (typeof user === "function" && user && user.isValid()) {
            return user._id === this.admin || user.admin;
        }
        return false;
    };
    Page.ModelName = "Page";
    return Page;
}(RESTModel_1.default));
exports.default = Page;
//# sourceMappingURL=Page.js.map