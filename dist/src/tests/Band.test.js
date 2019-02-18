"use strict";
var expect = require("chai").expect;
global["socket.io-client"] = require("socket.io-client");
global.axios = require("axios");
var _a = require("../../index.js"), Band = _a.Band, User = _a.User;
describe("Band class", function () {
    it("ModelName exists", function () {
        expect(Band.ModelName).to.equal("Band");
    });
    describe("Constructor", function () {
        it("Parse JSON", function () {
            var band = new Band("{\n\t\t\t\t\"name\": \"Basic\",\n\t\t\t\t\"cityPlaceID\": \"Something\",\n\t\t\t\t\"description\": \"Something\",\n\t\t\t\t\"owners\": [\"504e0cd7dd992d9be2f20b6f\"]\n\t\t\t}");
            expect(band.name).to.equal("Basic");
            expect(band.cityPlaceID).to.equal("Something");
            expect(band.description).to.equal("Something");
            expect(band.owners).to.deep.equal(["504e0cd7dd992d9be2f20b6f"]);
        });
        it("Empty", function () {
            var empty = new Band({});
            expect(empty.name).to.equal(null);
        });
        it("Copy Data", function () {
            var copy = new Band({
                cityPlaceID: "Something",
                name: "Basic",
                description: "Something",
                owners: ["504e0cd7dd992d9be2f20b6f"],
            });
            expect(copy.name).to.equal("Basic");
        });
    });
    describe("Validation", function () {
        it("Valid", function () {
            var band = new Band({
                _id: "de4e0cd7dd992d9be2f20b42",
                dateCreated: "2018-04-29T12:00:00Z",
                dateModified: "2018-04-29T12:00:00Z",
                name: "Basic",
                cityPlaceID: "Something",
                description: "Something",
                owners: ["504e0cd7dd992d9be2f20b6f"],
            });
            expect(band.isValid()).to.equal(true);
        });
        it("Missing id", function () {
            var band = new Band({
                dateCreated: "2018-04-29T12:00:00Z",
                dateModified: "2018-04-29T12:00:00Z",
                name: "Basic",
                cityPlaceID: "Something",
                description: "Something",
                owners: ["504e0cd7dd992d9be2f20b6f"],
            });
            expect(band.isValid()).to.equal(false);
        });
        it("Missing dateCreated", function () {
            var band = new Band({
                _id: "de4e0cd7dd992d9be2f20b42",
                dateModified: "2018-04-29T12:00:00Z",
                name: "Basic",
                cityPlaceID: "Something",
                description: "Something",
                owners: ["504e0cd7dd992d9be2f20b6f"],
            });
            expect(band.isValid()).to.equal(false);
        });
        it("Missing dateModified", function () {
            var band = new Band({
                _id: "de4e0cd7dd992d9be2f20b42",
                dateCreated: "2018-04-29T12:00:00Z",
                name: "Basic",
                cityPlaceID: "Something",
                description: "Something",
                owners: ["504e0cd7dd992d9be2f20b6f"],
            });
            expect(band.isValid()).to.equal(false);
        });
        it("Missing name", function () {
            var band = new Band({
                _id: "de4e0cd7dd992d9be2f20b42",
                dateCreated: "2018-04-29T12:00:00Z",
                dateModified: "2018-04-29T12:00:00Z",
                cityPlaceID: "Something",
                description: "Something",
                owners: ["504e0cd7dd992d9be2f20b6f"],
            });
            expect(band.isValid()).to.equal(false);
        });
        it("Missing cityPlaceID", function () {
            var band = new Band({
                _id: "de4e0cd7dd992d9be2f20b42",
                dateCreated: "2018-04-29T12:00:00Z",
                dateModified: "2018-04-29T12:00:00Z",
                name: "Basic",
                description: "Something",
                owners: ["504e0cd7dd992d9be2f20b6f"],
            });
            expect(band.isValid()).to.equal(false);
        });
        it("Missing description", function () {
            var band = new Band({
                _id: "de4e0cd7dd992d9be2f20b42",
                dateCreated: "2018-04-29T12:00:00Z",
                dateModified: "2018-04-29T12:00:00Z",
                name: "Basic",
                cityPlaceID: "Something",
                owners: ["504e0cd7dd992d9be2f20b6f"],
            });
            expect(band.isValid()).to.equal(false);
        });
        it("Missing owners", function () {
            var band = new Band({
                _id: "de4e0cd7dd992d9be2f20b42",
                dateCreated: "2018-04-29T12:00:00Z",
                dateModified: "2018-04-29T12:00:00Z",
                name: "Basic",
                cityPlaceID: "Something",
                description: "Something",
            });
            expect(band.isValid()).to.equal(false);
        });
        it("No owners", function () {
            var band = new Band({
                _id: "de4e0cd7dd992d9be2f20b42",
                dateCreated: "2018-04-29T12:00:00Z",
                dateModified: "2018-04-29T12:00:00Z",
                name: "Basic",
                cityPlaceID: "Something",
                description: "Something",
                owners: [],
            });
            expect(band.isValid()).to.equal(false);
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
        var basicBand = new Band({
            _id: "de4e0cd7dd992d9be2f20b42",
            dateCreated: "2018-04-29T12:00:00Z",
            dateModified: "2018-04-29T12:00:00Z",
            name: "Basic",
            cityPlaceID: "Something",
            description: "Something",
            owners: ["504e0cd7dd992d9be2f20b6f"],
        });
        it("valid id string argument", function () {
            return expect(basicBand.userIsOwner(basicUser.id)).to.equal(true);
        });
        it("valid user object argument", function () {
            return expect(basicBand.userIsOwner(basicUser)).to.equal(true);
        });
        it("pass empty string", function () {
            return expect(basicBand.userIsOwner("")).to.equal(false);
        });
        it("pass empty object", function () {
            return expect(basicBand.userIsOwner({})).to.equal(false);
        });
        it("pass null", function () { return expect(basicBand.userIsOwner(null)).to.equal(false); });
    });
});
//# sourceMappingURL=Band.test.js.map