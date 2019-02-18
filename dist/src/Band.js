"use strict";
/**
 * Created by corynull on 4/3/17.
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
var FacebookAccount_1 = __importDefault(require("./FacebookAccount"));
var Gig_1 = __importDefault(require("./Gig"));
var RESTModel_1 = __importDefault(require("./RESTModel"));
var TwitterAccount_1 = __importDefault(require("./TwitterAccount"));
var Upload_1 = __importDefault(require("./Upload"));
var User_1 = __importDefault(require("./User"));
var Band = /** @class */ (function (_super) {
    __extends(Band, _super);
    function Band() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Band.prototype, "name", {
        get: function () {
            return this.getField("name");
        },
        set: function (value) {
            this.setField("name", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Band.prototype, "website", {
        get: function () {
            return this.getField("website");
        },
        set: function (value) {
            this.setField("website", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Band.prototype, "email", {
        get: function () {
            return this.getField("email");
        },
        set: function (value) {
            this.setField("email", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Band.prototype, "cityName", {
        get: function () {
            return this.getField("cityName");
        },
        set: function (value) {
            this.setField("cityName", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Band.prototype, "cityPlaceID", {
        get: function () {
            return this.getField("cityPlaceID");
        },
        set: function (value) {
            this.setField("cityPlaceID", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Band.prototype, "description", {
        get: function () {
            return this.getField("description");
        },
        set: function (value) {
            this.setField("description", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Band.prototype, "metadata", {
        get: function () {
            return this.getField("metadata");
        },
        set: function (value) {
            this.setField("metadata", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Band.prototype, "icon", {
        get: function () {
            return this.getField("icon");
        },
        set: function (value) {
            this.setField("icon", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Band.prototype, "photos", {
        get: function () {
            return this.getField("photos");
        },
        set: function (value) {
            this.setField("photos", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Band.prototype, "owners", {
        get: function () {
            return this.getField("owners");
        },
        set: function (value) {
            this.setField("owners", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Band.prototype, "facebook", {
        get: function () {
            return this.getField("facebook");
        },
        set: function (value) {
            this.setField("facebook", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Band.prototype, "facebookPageId", {
        get: function () {
            return this.getField("facebookPageId");
        },
        set: function (value) {
            this.setField("facebookPageId", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Band.prototype, "facebookPageName", {
        get: function () {
            return this.getField("facebookPageName");
        },
        set: function (value) {
            this.setField("facebookPageName", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Band.prototype, "facebookPageToken", {
        get: function () {
            return this.getField("facebookPageToken");
        },
        set: function (value) {
            this.setField("facebookPageToken", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Band.prototype, "twitter", {
        get: function () {
            return this.getField("twitter");
        },
        set: function (value) {
            this.setField("twitter", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Band.prototype, "google", {
        get: function () {
            return this.getField("google");
        },
        set: function (value) {
            this.setField("google", value);
        },
        enumerable: true,
        configurable: true
    });
    Band.findOne = function (criteria) {
        return RESTModel_1.default.findOneBase(Band, criteria, true);
    };
    Band.findMany = function (criteria) {
        return RESTModel_1.default.findManyBase(Band, criteria, true);
    };
    Band.findById = function (id) {
        return RESTModel_1.default.findByIdBase(Band, id, true);
    };
    Band.getAllOwned = function () {
        return RESTModel_1.default.findManyBase(Band, null, true);
    };
    Band.prototype.save = function () {
        return _super.prototype.save.call(this, true);
    };
    Band.prototype.remove = function () {
        return _super.prototype.remove.call(this, true);
    };
    Band.prototype.getIcon = function () {
        return RESTModel_1.default.findByIdBase(Upload_1.default, this.icon, true);
    };
    Band.prototype.getPhotos = function () {
        var photos = Array.from(this.photos);
        if (photos.length !== 0) {
            return RESTModel_1.default.findManyBase(Upload_1.default, {
                _id: photos
            }, true);
        }
        return Promise.resolve([]);
    };
    Band.prototype.getOwners = function () {
        var owners = Array.from(this.owners);
        if (owners.length !== 0) {
            return RESTModel_1.default.findManyBase(User_1.default, {
                _id: owners
            }, true);
        }
        return Promise.resolve([]);
    };
    Band.prototype.getGigs = function () {
        return Gig_1.default.findByBand(this._id);
    };
    Band.prototype.getTwitterAccount = function () {
        return RESTModel_1.default.findByIdBase(TwitterAccount_1.default, this.twitter, true);
    };
    Band.prototype.getFacebookAccount = function () {
        return RESTModel_1.default.findByIdBase(FacebookAccount_1.default, this.facebook, true);
    };
    Band.prototype.isValid = function () {
        var self = this;
        if (!_super.prototype.isValid.call(this)) {
            return false;
        }
        if (typeof this.cityPlaceID !== "string") {
            return false;
        }
        if (this.cityPlaceID === "") {
            return false;
        }
        if (typeof this.name !== "string") {
            return false;
        }
        if (this.name === "") {
            return false;
        }
        if (typeof this.description !== "string") {
            return false;
        }
        if (this.description === "") {
            return false;
        }
        if (this.description === "<p><br></p>") {
            return false;
        }
        if (!Array.isArray(this.owners)) {
            return false;
        }
        if (this.owners.length === 0) {
            return false;
        }
        if (!this.owners.every(function (owner) { return self.userIsOwner(owner); })) {
            return false;
        }
        return true;
    };
    Band.prototype.userIsOwner = function (user) {
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
    Band.ModelName = "Band";
    return Band;
}(RESTModel_1.default));
exports.default = Band;
//# sourceMappingURL=Band.js.map