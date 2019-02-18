"use strict";
/**
 * Created by corynull on 5/23/17.
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
var RESTModel_1 = __importDefault(require("./RESTModel"));
var Post = /** @class */ (function (_super) {
    __extends(Post, _super);
    function Post() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Post.prototype, "userId", {
        get: function () {
            return this.getField("userId");
        },
        set: function (value) {
            this.setField("userId", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Post.prototype, "network", {
        get: function () {
            return this.getField("network");
        },
        set: function (value) {
            this.setField("network", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Post.prototype, "accountId", {
        get: function () {
            return this.getField("accountId");
        },
        set: function (value) {
            this.setField("accountId", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Post.prototype, "pageId", {
        get: function () {
            return this.getField("pageId");
        },
        set: function (value) {
            this.setField("pageId", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Post.prototype, "postText", {
        get: function () {
            return this.getField("postText");
        },
        set: function (value) {
            this.setField("postText", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Post.prototype, "postDate", {
        get: function () {
            return this.getField("postDate");
        },
        set: function (value) {
            this.setField("postDate", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Post.prototype, "coordinates", {
        get: function () {
            return this.getField("coordinates");
        },
        set: function (value) {
            this.setField("coordinates", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Post.prototype, "error", {
        get: function () {
            return this.getField("error");
        },
        set: function (value) {
            this.setField("error", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Post.prototype, "done", {
        get: function () {
            return this.getField("done");
        },
        set: function (value) {
            this.setField("done", value);
        },
        enumerable: true,
        configurable: true
    });
    Post.findById = function (id) {
        return RESTModel_1.default.findByIdBase(Post, id);
    };
    Post.getAllOwned = function () {
        return RESTModel_1.default.findManyBase(Post, null);
    };
    Post.findMany = function (criteria) {
        return RESTModel_1.default.findManyBase(Post, criteria);
    };
    Post.prototype.isValid = function () {
        if (!_super.prototype.isValid.call(this)) {
            return false;
        }
        return true;
    };
    Post.prototype.canSave = function () {
        if (!this.postDate) {
            return false;
        }
        if (!this.postText || this.postText === "") {
            return false;
        }
        if (!this.network) {
            // TODO: Do network validation
            return false;
        }
        return true;
    };
    Post.prototype.userIsOwner = function (user) {
        if (typeof user === "string") {
            return user === this.userId;
        }
        if (typeof user === "function" && user && user.isValid()) {
            return user._id === this.userId;
        }
        return false;
    };
    Post.ModelName = "Post";
    return Post;
}(RESTModel_1.default));
exports.default = Post;
//# sourceMappingURL=Post.js.map