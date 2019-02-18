"use strict";
/**
 * Created by corynull on 4/7/17.
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
var GooglePlace = /** @class */ (function (_super) {
    __extends(GooglePlace, _super);
    function GooglePlace() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(GooglePlace.prototype, "placeId", {
        get: function () {
            return this.getField("placeId");
        },
        set: function (value) {
            this.setField("placeId", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GooglePlace.prototype, "details", {
        get: function () {
            return this.getField("details");
        },
        set: function (value) {
            this.setField("details", value);
        },
        enumerable: true,
        configurable: true
    });
    GooglePlace.getPlaceDetails = function (placeId) {
        return new Promise(function (resolve, reject) {
            if (typeof placeId !== "string") {
                return reject(new Error("placeId is not a string!"));
            }
            return API_1.default.call("GET", "/API/GooglePlace", { placeId: placeId }).then(resolve, reject);
        });
    };
    GooglePlace.queryPlace = function (text, maybeType) {
        return new Promise(function (resolve, reject) {
            var type = maybeType || "locality";
            if (typeof text !== "string") {
                return reject(new Error("text is not a string!"));
            }
            if (text.length === 0) {
                return reject(new Error("text is blank"));
            }
            return API_1.default.call("GET", "/API/GooglePlace/Query", {
                term: text,
                type: type
            }).then(resolve, reject);
        });
    };
    GooglePlace.ModelName = "GooglePlace";
    return GooglePlace;
}(RESTModel_1.default));
exports.default = GooglePlace;
//# sourceMappingURL=GooglePlace.js.map