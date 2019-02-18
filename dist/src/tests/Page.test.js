"use strict";
var expect = require("chai").expect;
global["socket.io-client"] = require("socket.io-client");
global.axios = require("axios");
var _a = require("../../index.js"), Page = _a.Page, User = _a.User, RESTModel = _a.RESTModel;
describe("Page class", function () {
    it("ModelName exists", function () {
        expect(Page.ModelName).to.equal("Page");
    });
    describe("Constructor", function () {
        it("Parse JSON", function () {
            var page = new Page("{\n\t\t\t\t\"data\": \"NOT HTML\",\n\t\t\t\t\"metadata\": \"Test\",\n\t\t\t\t\"title\": \"This is a test\",\n\t\t\t\t\"link\": \"/\",\n\t\t\t\t\"visits\": 0,\n\t\t\t\t\"revisions\": 0,\n\t\t\t\t\"hide\": false,\n\t\t\t\t\"blog\": false,\n\t\t\t\t\"doc\": false\n\t\t\t}");
            expect(page.data).to.equal("NOT HTML");
            expect(page.metadata).to.equal("Test");
            expect(page.title).to.equal("This is a test");
            expect(page.link).to.equal("/");
            expect(page.visits).to.equal(0);
            expect(page.revisions).to.equal(0);
            expect(page.hide).to.equal(false);
            expect(page.blog).to.equal(false);
            expect(page.doc).to.equal(false);
        });
        it("Empty", function () {
            var page = new Page({});
            expect(page.data).to.equal(null);
            expect(page.metadata).to.equal(null);
            expect(page.title).to.equal(null);
            expect(page.link).to.equal(null);
            expect(page.visits).to.equal(0);
            expect(page.revisions).to.equal(0);
            expect(page.hide).to.equal(true);
            expect(page.blog).to.equal(false);
            expect(page.doc).to.equal(false);
        });
        it("Copy Data", function () {
            var page = new Page({
                data: "NOT HTML",
                metadata: "Test",
                title: "This is a test",
                link: "/",
                visits: 0,
                revisions: 0,
                hide: false,
                blog: false,
                doc: false,
            });
            expect(page.data).to.equal("NOT HTML");
            expect(page.metadata).to.equal("Test");
            expect(page.title).to.equal("This is a test");
            expect(page.link).to.equal("/");
            expect(page.visits).to.equal(0);
            expect(page.revisions).to.equal(0);
            expect(page.hide).to.equal(false);
            expect(page.blog).to.equal(false);
            expect(page.doc).to.equal(false);
        });
    });
});
//# sourceMappingURL=Page.test.js.map