"use strict";
/**
 * Created by corynull on Jan 8 2018 8:58:54 PM.
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
var ErrorReport = /** @class */ (function (_super) {
    __extends(ErrorReport, _super);
    function ErrorReport() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ErrorReport.prototype, "version", {
        get: function () {
            return this.getField("version");
        },
        set: function (value) {
            this.setField("version", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ErrorReport.prototype, "userId", {
        get: function () {
            return this.getField("userId");
        },
        set: function (value) {
            this.setField("userId", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ErrorReport.prototype, "stack", {
        get: function () {
            return this.getField("stack");
        },
        set: function (value) {
            this.setField("stack", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ErrorReport.prototype, "message", {
        get: function () {
            return this.getField("message");
        },
        set: function (value) {
            this.setField("message", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ErrorReport.prototype, "name", {
        get: function () {
            return this.getField("name");
        },
        set: function (value) {
            this.setField("name", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ErrorReport.prototype, "fileName", {
        get: function () {
            return this.getField("fileName");
        },
        set: function (value) {
            this.setField("fileName", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ErrorReport.prototype, "columnNumber", {
        get: function () {
            return this.getField("columnNumber");
        },
        set: function (value) {
            this.setField("columnNumber", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ErrorReport.prototype, "lineNumber", {
        get: function () {
            return this.getField("lineNumber");
        },
        set: function (value) {
            this.setField("lineNumber", value);
        },
        enumerable: true,
        configurable: true
    });
    ErrorReport.findById = function (id) {
        return RESTModel_1.default.findByIdBase(ErrorReport, id);
    };
    ErrorReport.findMany = function (criteria) {
        return RESTModel_1.default.findManyBase(ErrorReport, criteria);
    };
    ErrorReport.prototype.isValid = function () {
        if (!_super.prototype.isValid.call(this)) {
            return false;
        }
        // TODO: do more tests...
        return true;
    };
    ErrorReport.ModelName = "ErrorReport";
    return ErrorReport;
}(RESTModel_1.default));
exports.default = ErrorReport;
//# sourceMappingURL=ErrorReport.js.map