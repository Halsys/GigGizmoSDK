"use strict";
/**
 * Created by corynull on Dec 30 2017 11:14:11 AM.
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
var Conversation = /** @class */ (function (_super) {
    __extends(Conversation, _super);
    function Conversation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Conversation.prototype, "events", {
        get: function () {
            return this.getField("events") || [];
        },
        set: function (value) {
            this.setField("events", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Conversation.prototype, "users", {
        get: function () {
            return this.getField("users") || [];
        },
        set: function (value) {
            this.setField("users", value);
        },
        enumerable: true,
        configurable: true
    });
    Conversation.newCallback = function (callback) {
        var callbackId = Date.now();
        Conversation.Callbacks.set(callbackId, callback);
        return function () { return Conversation.Callbacks.delete(callbackId); };
    };
    Conversation.connectSocket = function () {
        API_1.default.getSocket().then(function (socket) {
            if (socket) {
                socket.on("/API/Conversation/Update", function (data) {
                    if (data) {
                        var conv_1 = RESTModel_1.default.Cache.get(data._id) || null;
                        if (conv_1) {
                            Object.assign(conv_1, data);
                        }
                        else {
                            conv_1 = new Conversation(data);
                        }
                        RESTModel_1.default.Cache.set(conv_1._id, conv_1);
                        Conversation.Callbacks.forEach(function (cb) { return cb(conv_1); });
                    }
                });
            }
        }, console.error);
    };
    Conversation.findById = function (id) {
        return RESTModel_1.default.findByIdBase(Conversation, id, true);
    };
    Conversation.getAllOwned = function () {
        return RESTModel_1.default.findManyBase(Conversation, null, true);
    };
    Conversation.prototype.isValid = function () {
        if (!_super.prototype.isValid.call(this)) {
            return false;
        }
        // TODO: do more tests...
        return true;
    };
    Conversation.prototype.pushMessage = function (user, message) {
        this.events.push({
            dateTimePosted: new Date(),
            message: message,
            user: user,
        });
        return this.save();
    };
    Conversation.ModelName = "Conversation";
    Conversation.Callbacks = new Map();
    return Conversation;
}(RESTModel_1.default));
exports.default = Conversation;
//# sourceMappingURL=Conversation.js.map