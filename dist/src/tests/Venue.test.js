"use strict";
var expect = require("chai").expect;
global["socket.io-client"] = require("socket.io-client");
global.axios = require("axios");
var _a = require("../../index.js"), Venue = _a.Venue, User = _a.User;
describe("Venue class", function () {
    it("ModelName exists", function () {
        expect(Venue.ModelName).to.equal("Venue");
    });
    describe("Constructor", function () {
        it("Parse JSON", function () {
            var venue = new Venue("{\n\t\t\t\t\"name\": \"Basic\",\n\t\t\t\t\"location\": \"2d9be2f20b6f504e0cd7dd99\",\n\t\t\t\t\"description\": \"Something\",\n\t\t\t\t\"owners\": [\"504e0cd7dd992d9be2f20b6f\"]\n\t\t\t}");
            expect(venue.name).to.equal("Basic");
            expect(venue.location).to.equal("2d9be2f20b6f504e0cd7dd99");
            expect(venue.description).to.equal("Something");
            expect(venue.owners).to.deep.equal(["504e0cd7dd992d9be2f20b6f"]);
        });
        it("Empty", function () {
            var empty = new Venue({});
            expect(empty.name).to.equal(null);
        });
        it("Copy Data", function () {
            var copy = new Venue({
                name: "Basic",
                location: "2d9be2f20b6f504e0cd7dd99",
                description: "Something",
                owners: ["504e0cd7dd992d9be2f20b6f"],
            });
            expect(copy.name).to.equal("Basic");
        });
    });
    describe("Validation", function () {
        it("Valid", function () {
            var venue = new Venue({
                _id: "de4e0cd7dd992d9be2f20b42",
                dateCreated: "2018-04-29T12:00:00Z",
                dateModified: "2018-04-29T12:00:00Z",
                name: "Basic",
                location: "2d9be2f20b6f504e0cd7dd99",
                description: "Something",
                owners: ["504e0cd7dd992d9be2f20b6f"],
            });
            expect(venue.isValid()).to.equal(true);
        });
        it("Missing id", function () {
            var venue = new Venue({
                dateCreated: "2018-04-29T12:00:00Z",
                dateModified: "2018-04-29T12:00:00Z",
                name: "Basic",
                location: "2d9be2f20b6f504e0cd7dd99",
                description: "Something",
                owners: ["504e0cd7dd992d9be2f20b6f"],
            });
            expect(venue.isValid()).to.equal(false);
        });
        it("Missing dateCreated", function () {
            var venue = new Venue({
                _id: "de4e0cd7dd992d9be2f20b42",
                dateModified: "2018-04-29T12:00:00Z",
                name: "Basic",
                location: "2d9be2f20b6f504e0cd7dd99",
                description: "Something",
                owners: ["504e0cd7dd992d9be2f20b6f"],
            });
            expect(venue.isValid()).to.equal(false);
        });
        it("Missing dateModified", function () {
            var venue = new Venue({
                _id: "de4e0cd7dd992d9be2f20b42",
                dateCreated: "2018-04-29T12:00:00Z",
                name: "Basic",
                location: "2d9be2f20b6f504e0cd7dd99",
                description: "Something",
                owners: ["504e0cd7dd992d9be2f20b6f"],
            });
            expect(venue.isValid()).to.equal(false);
        });
        it("Missing name", function () {
            var venue = new Venue({
                _id: "de4e0cd7dd992d9be2f20b42",
                dateCreated: "2018-04-29T12:00:00Z",
                dateModified: "2018-04-29T12:00:00Z",
                location: "2d9be2f20b6f504e0cd7dd99",
                description: "Something",
                owners: ["504e0cd7dd992d9be2f20b6f"],
            });
            expect(venue.isValid()).to.equal(false);
        });
        it("Missing location", function () {
            var venue = new Venue({
                _id: "de4e0cd7dd992d9be2f20b42",
                dateCreated: "2018-04-29T12:00:00Z",
                dateModified: "2018-04-29T12:00:00Z",
                name: "Basic",
                description: "Something",
                owners: ["504e0cd7dd992d9be2f20b6f"],
            });
            expect(venue.isValid()).to.equal(false);
        });
        it("Missing description", function () {
            var venue = new Venue({
                _id: "de4e0cd7dd992d9be2f20b42",
                dateCreated: "2018-04-29T12:00:00Z",
                dateModified: "2018-04-29T12:00:00Z",
                name: "Basic",
                location: "2d9be2f20b6f504e0cd7dd99",
                owners: ["504e0cd7dd992d9be2f20b6f"],
            });
            expect(venue.isValid()).to.equal(false);
        });
        it("Missing owners", function () {
            var venue = new Venue({
                _id: "de4e0cd7dd992d9be2f20b42",
                dateCreated: "2018-04-29T12:00:00Z",
                dateModified: "2018-04-29T12:00:00Z",
                name: "Basic",
                location: "2d9be2f20b6f504e0cd7dd99",
                description: "Something",
            });
            expect(venue.isValid()).to.equal(false);
        });
        it("No owners", function () {
            var venue = new Venue({
                _id: "de4e0cd7dd992d9be2f20b42",
                dateCreated: "2018-04-29T12:00:00Z",
                dateModified: "2018-04-29T12:00:00Z",
                name: "Basic",
                location: "2d9be2f20b6f504e0cd7dd99",
                description: "Something",
                owners: [],
            });
            expect(venue.isValid()).to.equal(false);
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
        var basicVenue = new Venue({
            _id: "de4e0cd7dd992d9be2f20b42",
            dateCreated: "2018-04-29T12:00:00Z",
            dateModified: "2018-04-29T12:00:00Z",
            name: "Basic",
            location: "2d9be2f20b6f504e0cd7dd99",
            description: "Something",
            owners: ["504e0cd7dd992d9be2f20b6f"],
        });
        it("valid id string argument", function () {
            return expect(basicVenue.userIsOwner(basicUser.id)).to.equal(true);
        });
        it("valid user object argument", function () {
            return expect(basicVenue.userIsOwner(basicUser)).to.equal(true);
        });
        it("pass empty string", function () {
            return expect(basicVenue.userIsOwner("")).to.equal(false);
        });
        it("pass empty object", function () {
            return expect(basicVenue.userIsOwner({})).to.equal(false);
        });
        it("pass null", function () { return expect(basicVenue.userIsOwner(null)).to.equal(false); });
    });
});
//# sourceMappingURL=Venue.test.js.map