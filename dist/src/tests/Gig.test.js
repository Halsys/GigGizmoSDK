"use strict";
var expect = require("chai").expect;
global["socket.io-client"] = require("socket.io-client");
global.axios = require("axios");
var _a = require("../../index.js"), Gig = _a.Gig, User = _a.User, RESTModel = _a.RESTModel;
describe("Gig class", function () {
    it("ModelName exists", function () {
        expect(Gig.ModelName).to.equal("Gig");
    });
    describe("Constructor", function () {
        it("Parse JSON", function () {
            var gig = new Gig("{\n\t\t\t\t\"startTime\": \"2018-04-29T12:00:00Z\",\n\t\t\t\t\"stopTime\": \"2018-04-29T14:00:00Z\",\n\t\t\t\t\"location\": \"d7dd992d9be2f20b6f504e0c\",\n\t\t\t\t\"venue\": \"2d9be2f20b6f504e0cd7dd99\",\n\t\t\t\t\"bands\": [ \"f20b6f504e0cd7dd992d9be2\" ]\n\t\t\t}");
            expect(RESTModel.isValidId(gig.location)).to.equal(true);
            expect(RESTModel.isValidId(gig.venue)).to.equal(true);
            expect(gig.location).to.equal("d7dd992d9be2f20b6f504e0c");
            expect(gig.venue).to.equal("2d9be2f20b6f504e0cd7dd99");
            expect(gig.bands).to.deep.equal(["f20b6f504e0cd7dd992d9be2"]);
            expect(gig.startTime).to.deep.equal(new Date("2018-04-29T12:00:00Z"));
            expect(gig.stopTime).to.deep.equal(new Date("2018-04-29T14:00:00Z"));
        });
        it("Empty", function () {
            var empty = new Gig();
            expect(empty.startTime).to.equal(null);
            expect(empty.stopTime).to.equal(null);
            expect(empty.location).to.equal(null);
            expect(empty.venue).to.equal(null);
            expect(empty.bands).to.equal(null);
        });
        it("Copy Data", function () {
            var gig = new Gig({
                startTime: "2018-04-29T12:00:00Z",
                stopTime: "2018-04-29T14:00:00Z",
                location: "d7dd992d9be2f20b6f504e0c",
                venue: "2d9be2f20b6f504e0cd7dd99",
                bands: ["f20b6f504e0cd7dd992d9be2"],
            });
            expect(RESTModel.isValidId(gig.location)).to.equal(true);
            expect(RESTModel.isValidId(gig.venue)).to.equal(true);
            expect(gig.location).to.equal("d7dd992d9be2f20b6f504e0c");
            expect(gig.venue).to.equal("2d9be2f20b6f504e0cd7dd99");
            expect(gig.bands).to.deep.equal(["f20b6f504e0cd7dd992d9be2"]);
            expect(gig.startTime).to.deep.equal(new Date("2018-04-29T12:00:00Z"));
            expect(gig.stopTime).to.deep.equal(new Date("2018-04-29T14:00:00Z"));
        });
    });
    describe("Validation", function () {
        it("Valid", function () {
            var gig = new Gig({
                _id: "de4e0cd7dd992d9be2f20b42",
                dateCreated: "2018-04-29T12:00:00Z",
                dateModified: "2018-04-29T12:00:00Z",
                startTime: "2018-04-29T12:00:00Z",
                stopTime: "2018-04-29T14:00:00Z",
                location: "d7dd992d9be2f20b6f504e0c",
                venue: "2d9be2f20b6f504e0cd7dd99",
                bands: ["f20b6f504e0cd7dd992d9be2"],
                owners: ["504e0cd7dd992d9be2f20b6f"],
            });
            expect(gig.isValid()).to.equal(true);
        });
        it("Missing id", function () {
            var gig = new Gig({
                dateCreated: "2018-04-29T12:00:00Z",
                dateModified: "2018-04-29T12:00:00Z",
                startTime: "2018-04-29T12:00:00Z",
                stopTime: "2018-04-29T14:00:00Z",
                location: "d7dd992d9be2f20b6f504e0c",
                venue: "2d9be2f20b6f504e0cd7dd99",
                bands: ["f20b6f504e0cd7dd992d9be2"],
                owners: ["504e0cd7dd992d9be2f20b6f"],
            });
            expect(gig.isValid()).to.equal(false);
        });
        it("Missing dateCreated", function () {
            var gig = new Gig({
                _id: "de4e0cd7dd992d9be2f20b42",
                dateModified: "2018-04-29T12:00:00Z",
                startTime: "2018-04-29T12:00:00Z",
                stopTime: "2018-04-29T14:00:00Z",
                location: "d7dd992d9be2f20b6f504e0c",
                venue: "2d9be2f20b6f504e0cd7dd99",
                bands: ["f20b6f504e0cd7dd992d9be2"],
                owners: ["504e0cd7dd992d9be2f20b6f"],
            });
            expect(gig.isValid()).to.equal(false);
        });
        it("Missing dateModified", function () {
            var gig = new Gig({
                _id: "de4e0cd7dd992d9be2f20b42",
                dateCreated: "2018-04-29T12:00:00Z",
                startTime: "2018-04-29T12:00:00Z",
                stopTime: "2018-04-29T14:00:00Z",
                location: "d7dd992d9be2f20b6f504e0c",
                venue: "2d9be2f20b6f504e0cd7dd99",
                bands: ["f20b6f504e0cd7dd992d9be2"],
                owners: ["504e0cd7dd992d9be2f20b6f"],
            });
            expect(gig.isValid()).to.equal(false);
        });
    });
    describe("userIsOwner", function () {
        var basicUser = new User({
            _id: "504e0cd7dd992d9be2f20b6f",
            dateCreated: "2018-04-29T12:00:00Z",
            dateModified: "2018-04-29T12:00:00Z",
            firstName: "Basic",
            middleName: "F",
            lastName: "User",
            birthday: "1994-09-04T12:00:00Z",
            country: "US",
            email: "user@network.com",
        });
        var gig = new Gig({
            startTime: "2018-04-29T12:00:00Z",
            stopTime: "2018-04-29T14:00:00Z",
            location: "d7dd992d9be2f20b6f504e0c",
            venue: "2d9be2f20b6f504e0cd7dd99",
            bands: ["f20b6f504e0cd7dd992d9be2"],
            owners: ["504e0cd7dd992d9be2f20b6f"],
        });
        it("valid id string argument", function () {
            return expect(gig.userIsOwner(basicUser.id)).to.equal(true);
        });
        it("valid user object argument", function () {
            return expect(gig.userIsOwner(basicUser)).to.equal(true);
        });
        it("pass empty string", function () { return expect(gig.userIsOwner("")).to.equal(false); });
        it("pass empty object", function () { return expect(gig.userIsOwner({})).to.equal(false); });
        it("pass null", function () { return expect(gig.userIsOwner(null)).to.equal(false); });
    });
});
//# sourceMappingURL=Gig.test.js.map