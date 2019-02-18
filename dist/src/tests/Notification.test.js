"use strict";
var expect = require("chai").expect;
global["socket.io-client"] = require("socket.io-client");
global.axios = require("axios");
var _a = require("../../index.js"), Notification = _a.Notification, User = _a.User, RESTModel = _a.RESTModel;
describe("Notification class", function () {
    it("ModelName exists", function () {
        expect(Notification.ModelName).to.equal("Notification");
    });
    describe("Constructor", function () {
        it("Parse JSON", function () {
            var note = new Notification("{\n\t\t\t\t\"userId\": \"504e0cd7dd992d9be2f20b6f\",\n\t\t\t\t\"message\": \"Test\",\n\t\t\t\t\"label\": \"Not a notification\",\n\t\t\t\t\"actions\": [{ \"link\": \"/fake\", \"label\": \"Fake\" }]\n\t\t\t}");
            expect(RESTModel.isValidId(note.userId)).to.equal(true);
            expect(note.userId).to.equal("504e0cd7dd992d9be2f20b6f");
            expect(note.message).to.be.a("string");
            expect(note.message).to.equal("Test");
            expect(note.label).to.be.a("string");
            expect(note.label).to.equal("Not a notification");
            expect(note.actions).to.deep.equal([{ link: "/fake", label: "Fake" }]);
        });
        it("Empty", function () {
            var empty = new Notification({});
            expect(empty.userId).to.equal(null);
            expect(empty.label).to.equal(null);
            expect(empty.message).to.equal(null);
            expect(empty.actions).to.equal(null);
        });
        it("Copy Data", function () {
            var note = new Notification({
                userId: "504e0cd7dd992d9be2f20b6f",
                message: "Test",
                label: "Not a notification",
                actions: [{ link: "/fake", label: "Fake" }],
            });
            expect(RESTModel.isValidId(note.userId)).to.equal(true);
            expect(note.userId).to.equal("504e0cd7dd992d9be2f20b6f");
            expect(note.message).to.be.a("string");
            expect(note.message).to.equal("Test");
            expect(note.label).to.be.a("string");
            expect(note.label).to.equal("Not a notification");
            expect(note.actions).to.deep.equal([{ link: "/fake", label: "Fake" }]);
        });
    });
});
//# sourceMappingURL=Notification.test.js.map