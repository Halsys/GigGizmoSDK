"use strict";
var expect = require("chai").expect;
global["socket.io-client"] = require("socket.io-client");
global.axios = require("axios");
var _a = require("../../index.js"), ModelNameToModel = _a.ModelNameToModel, Band = _a.Band, Conversation = _a.Conversation, ErrorReport = _a.ErrorReport, FacebookAccount = _a.FacebookAccount, Gig = _a.Gig, GooglePlace = _a.GooglePlace, Location = _a.Location, Notification = _a.Notification, Page = _a.Page, Post = _a.Post, Request = _a.Request, RESTModel = _a.RESTModel, TwitterAccount = _a.TwitterAccount, Upload = _a.Upload, User = _a.User, Venue = _a.Venue;
describe("RESTModel class", function () {
    describe("Constructor", function () {
        it("Parse JSON", function () {
            var doc = new RESTModel("{\n\t\t\t  \"_id\": \"de4e0cd7dd992d9be2f20b42\",\n\t\t\t  \"dateCreated\": \"2018-04-29T12:00:00Z\",\n\t\t\t  \"dateModified\": \"2018-04-29T12:00:00Z\"\n\t\t\t}");
            expect(doc._id).to.equal("de4e0cd7dd992d9be2f20b42");
            expect(doc.dateCreated.toString()).to.equal(new Date("2018-04-29T12:00:00Z").toString());
            expect(doc.dateModified.toString()).to.equal(new Date("2018-04-29T12:00:00Z").toString());
        });
        it("Empty", function () {
            var empty = new RESTModel({});
            expect(empty._id).to.equal(null);
            expect(empty.dateCreated).to.equal(null);
            expect(empty.dateModified).to.equal(null);
        });
        it("Copy Data", function () {
            var copy = new RESTModel({
                _id: "de4e0cd7dd992d9be2f20b42",
                dateCreated: "2018-04-29T12:00:00Z",
                dateModified: "2018-04-29T12:00:00Z",
            });
            expect(copy._id).to.equal("de4e0cd7dd992d9be2f20b42");
            expect(copy.dateCreated).to.deep.equal(new Date("2018-04-29T12:00:00Z"));
            expect(copy.dateModified).to.deep.equal(new Date("2018-04-29T12:00:00Z"));
        });
    });
    describe("toObject", function () {
        it("Invalid Object", function () {
            var empty = new RESTModel({});
            expect(function () {
                empty.toObject();
            }).to.throw(/id/);
        });
        it("Valid Object", function () {
            var copy = new RESTModel({
                _id: "de4e0cd7dd992d9be2f20b42",
                dateCreated: "2018-04-29T12:00:00Z",
                dateModified: "2018-04-29T12:00:00Z",
            });
            expect(copy.toObject()).to.deep.equal({
                _id: "de4e0cd7dd992d9be2f20b42",
                dateCreated: "2018-04-29T12:00:00Z",
                dateModified: "2018-04-29T12:00:00Z",
            });
        });
    });
    describe("toString", function () {
        it("Invalid Object", function () {
            var empty = new RESTModel({});
            expect(function () {
                empty.toString();
            }).to.throw(/id/);
        });
        it("Valid Object", function () {
            var copy = new RESTModel({
                _id: "de4e0cd7dd992d9be2f20b42",
                dateCreated: "2018-04-29T12:00:00Z",
                dateModified: "2018-04-29T12:00:00Z",
            });
            var json = copy.toString();
            expect(json).to.equal('{"_id":"de4e0cd7dd992d9be2f20b42","dateCreated":"2018-04-29T12:00:00Z","dateModified":"2018-04-29T12:00:00Z"}');
        });
    });
    describe("Validation", function () {
        it("Valid", function () {
            var doc = new RESTModel({
                _id: "de4e0cd7dd992d9be2f20b42",
                dateCreated: "2018-04-29T12:00:00Z",
                dateModified: "2018-04-29T12:00:00Z",
            });
            expect(doc.isValid()).to.equal(true);
        });
        it("Missing id", function () {
            var doc = new RESTModel({
                dateCreated: "2018-04-29T12:00:00Z",
                dateModified: "2018-04-29T12:00:00Z",
            });
            expect(doc.isValid()).to.equal(false);
        });
        it("Missing dateCreated", function () {
            var doc = new RESTModel({
                _id: "de4e0cd7dd992d9be2f20b42",
                dateModified: "2018-04-29T12:00:00Z",
            });
            expect(doc.isValid()).to.equal(false);
        });
        it("Missing dateModified", function () {
            var doc = new RESTModel({
                _id: "de4e0cd7dd992d9be2f20b42",
                dateCreated: "2018-04-29T12:00:00Z",
            });
            expect(doc.isValid()).to.equal(false);
        });
    });
    describe("Assign", function () {
        it("Assign to make valid", function () {
            var doc = new RESTModel({
                _id: "de4e0cd7dd992d9be2f20b42",
                dateCreated: "2018-04-29T12:00:00Z",
                dateModified: "2018-04-29T12:00:00Z",
            });
            expect(doc.toObject()).to.deep.equal({
                _id: "de4e0cd7dd992d9be2f20b42",
                dateCreated: "2018-04-29T12:00:00Z",
                dateModified: "2018-04-29T12:00:00Z",
            });
            expect(doc.isValid()).to.equal(true);
        });
        it("Assign to make invalid", function () {
            var doc = new RESTModel({
                _id: "de4e0cd7dd992d9be2f20b42",
                dateCreated: "2018-04-29T12:00:00Z",
                dateModified: "2018-04-29T12:00:00Z",
            });
            expect(doc.isValid()).to.equal(true);
            doc.assign({ _id: "", dateCreated: "", dateModified: "" });
            expect(doc.isValid()).to.equal(false);
        });
    });
    describe("isValidId", function () {
        it("Not string", function () { return expect(RESTModel.isValidId(123)).to.equal(false); });
        it("Invalid id", function () {
            return expect(RESTModel.isValidId("INVALID")).to.equal(false);
        });
        it("Valid id", function () {
            return expect(RESTModel.isValidId("de4e0cd7dd992d9be2f20b42")).to.equal(true);
        });
    });
    describe("getModelName", function () {
        it("Null", function () {
            expect(RESTModel.getModelName(null)).to.equal(null);
        });
        it("Band", function () {
            expect(RESTModel.getModelName(Band)).to.equal("Band");
        });
        it("Conversation", function () {
            expect(RESTModel.getModelName(Conversation)).to.equal("Conversation");
        });
        it("ErrorReport", function () {
            expect(RESTModel.getModelName(ErrorReport)).to.equal("ErrorReport");
        });
        it("FacebookAccount", function () {
            expect(RESTModel.getModelName(FacebookAccount)).to.equal("FacebookAccount");
        });
        it("Gig", function () {
            expect(RESTModel.getModelName(Gig)).to.equal("Gig");
        });
        it("GooglePlace", function () {
            expect(RESTModel.getModelName(GooglePlace)).to.equal("GooglePlace");
        });
        it("Location", function () {
            expect(RESTModel.getModelName(Location)).to.equal("Location");
        });
        it("Notification", function () {
            expect(RESTModel.getModelName(Notification)).to.equal("Notification");
        });
        it("Page", function () {
            expect(RESTModel.getModelName(Page)).to.equal("Page");
        });
        it("Post", function () {
            expect(RESTModel.getModelName(Post)).to.equal("Post");
        });
        it("Request", function () {
            expect(RESTModel.getModelName(Request)).to.equal("Request");
        });
        it("TwitterAccount", function () {
            expect(RESTModel.getModelName(TwitterAccount)).to.equal("TwitterAccount");
        });
        it("Upload", function () {
            expect(RESTModel.getModelName(Upload)).to.equal("Upload");
        });
        it("User", function () {
            expect(RESTModel.getModelName(User)).to.equal("User");
        });
        it("Venue", function () {
            expect(RESTModel.getModelName(Venue)).to.equal("Venue");
        });
    });
});
//# sourceMappingURL=RESTModel.test.js.map