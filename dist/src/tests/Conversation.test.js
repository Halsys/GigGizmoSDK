"use strict";
var expect = require("chai").expect;
global["socket.io-client"] = require("socket.io-client");
global.axios = require("axios");
var _a = require("../../index.js"), Conversation = _a.Conversation, User = _a.User;
describe("Conversation class", function () {
    it("ModelName exists", function () {
        expect(Conversation.ModelName).to.equal("Conversation");
    });
    describe("Constructor", function () {
        it("Parse JSON", function () {
            var con = new Conversation("{\n\t\t\t\t\"events\": [],\n\t\t\t\t\"users\": []\n\t\t\t}");
            expect(con.events).to.be.a("array");
            expect(con.users).to.be.a("array");
        });
        it("Empty", function () {
            var empty = new Conversation({});
            expect(empty.events).to.be.a("array");
        });
        it("Copy Data", function () {
            var copy = new Conversation({
                events: [],
                users: [],
            });
            expect(copy.events).to.be.a("array");
            expect(copy.users).to.be.a("array");
        });
    });
});
//# sourceMappingURL=Conversation.test.js.map