"use strict";
/**
 * Created by corynull on 9/7/17.
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
var GooglePlace_1 = __importDefault(require("./GooglePlace"));
var RESTModel_1 = __importDefault(require("./RESTModel"));
var Location = /** @class */ (function (_super) {
    __extends(Location, _super);
    function Location() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Location.prototype, "type", {
        get: function () {
            return this.getField("type") || "Point";
        },
        set: function (value) {
            this.setField("type", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Location.prototype, "placeId", {
        get: function () {
            return this.getField("placeId");
        },
        set: function (value) {
            this.setField("placeId", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Location.prototype, "address", {
        get: function () {
            return this.getField("address");
        },
        set: function (value) {
            this.setField("address", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Location.prototype, "point", {
        get: function () {
            return this.getField("point");
        },
        set: function (value) {
            this.setField("point", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Location.prototype, "utcOffset", {
        get: function () {
            return this.getField("utcOffset");
        },
        set: function (value) {
            this.setField("utcOffset", value);
        },
        enumerable: true,
        configurable: true
    });
    Location.getLocationByPlaceId = function (placeId) {
        return new Promise(function (resolve, reject) {
            if (!placeId) {
                reject(new Error("Invaild placeId: " + placeId));
            }
            else {
                API_1.default.call("GET", "/API/Place/" + placeId, null).then((function (location) {
                    if (location) {
                        resolve(new Location(location));
                    }
                    else {
                        reject(new Error(location + " returned"));
                    }
                }), reject);
            }
        });
    };
    Location.findById = function (id) {
        return RESTModel_1.default.findByIdBase(Location, id);
    };
    Location.prototype.isValid = function () {
        if (!_super.prototype.isValid.call(this)) {
            return false;
        }
        if (!this.placeId) {
            return false;
        }
        if (!this.address) {
            return false;
        }
        if (!this.utcOffset) {
            return false;
        }
        if (!Array.isArray(this.point)) {
            return false;
        }
        return true;
    };
    Location.prototype.getPlaceDetails = function () {
        return GooglePlace_1.default.getPlaceDetails(this.placeId);
    };
    Location.ModelName = "Location";
    return Location;
}(RESTModel_1.default));
exports.default = Location;
//# sourceMappingURL=Location.js.map