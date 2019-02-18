"use strict";
var expect = require("chai").expect;
global["socket.io-client"] = require("socket.io-client");
global.axios = require("axios");
var Location = require("../../index.js").Location;
describe("Location class", function () {
    it("ModelName exists", function () {
        expect(Location.ModelName).to.equal("Location");
    });
    describe("Constructor", function () {
        it("Parse JSON", function () {
            // / Note: Facebook has number id's... or indices?
            var place = new Location("{\n\t\t\t\t\"placeId\": \"Something\",\n\t\t\t\t\"address\": \"Something Street\",\n\t\t\t\t\"point\": [0, 0],\n\t\t\t\t\"utcOffset\": -600\n\t\t\t}");
            expect(place.placeId).to.be.a("string");
            expect(place.placeId).to.equal("Something");
            expect(place.address).to.be.a("string");
            expect(place.address).to.equal("Something Street");
            expect(place.point).to.be.a("array");
            expect(place.point).to.deep.equal([0, 0]); // West coast of africa...
            expect(place.utcOffset).to.be.a("number");
            expect(place.utcOffset).to.equal(-600);
        });
        it("Empty", function () {
            var empty = new Location({});
            expect(empty.placeId).to.equal(null);
            expect(empty.address).to.equal(null);
            expect(empty.point).to.equal(null);
            expect(empty.utcOffset).to.equal(null);
            expect(empty.type).to.equal("Point");
        });
        it("Copy Data", function () {
            var place = new Location({
                placeId: "Something",
                address: "Something Street",
                point: [0, 0],
                utcOffset: -600,
            });
            expect(place.placeId).to.be.a("string");
            expect(place.placeId).to.equal("Something");
            expect(place.address).to.be.a("string");
            expect(place.address).to.equal("Something Street");
            expect(place.point).to.be.a("array");
            expect(place.point).to.deep.equal([0, 0]); // West coast of africa...
            expect(place.utcOffset).to.be.a("number");
            expect(place.utcOffset).to.equal(-600);
        });
    });
    describe("Validation", function () {
        it("Valid", function () {
            var place = new Location({
                _id: "de4e0cd7dd992d9be2f20b42",
                dateCreated: "2018-04-29T12:00:00Z",
                dateModified: "2018-04-29T12:00:00Z",
                placeId: "Something",
                address: "Something Street",
                point: [0, 0],
                utcOffset: -600,
            });
            expect(place.isValid()).to.equal(true);
        });
        it("Missing id", function () {
            var place = new Location({
                dateCreated: "2018-04-29T12:00:00Z",
                dateModified: "2018-04-29T12:00:00Z",
                placeId: "Something",
                address: "Something Street",
                point: [0, 0],
                utcOffset: -600,
            });
            expect(place.isValid()).to.equal(false);
        });
        it("Missing dateCreated", function () {
            var place = new Location({
                _id: "de4e0cd7dd992d9be2f20b42",
                dateModified: "2018-04-29T12:00:00Z",
                placeId: "Something",
                address: "Something Street",
                point: [0, 0],
                utcOffset: -600,
            });
            expect(place.isValid()).to.equal(false);
        });
        it("Missing dateModified", function () {
            var place = new Location({
                _id: "de4e0cd7dd992d9be2f20b42",
                dateCreated: "2018-04-29T12:00:00Z",
                placeId: "Something",
                address: "Something Street",
                point: [0, 0],
                utcOffset: -600,
            });
            expect(place.isValid()).to.equal(false);
        });
        it("Missing placeId", function () {
            var place = new Location({
                _id: "de4e0cd7dd992d9be2f20b42",
                dateCreated: "2018-04-29T12:00:00Z",
                dateModified: "2018-04-29T12:00:00Z",
                address: "Something Street",
                point: [0, 0],
                utcOffset: -600,
            });
            expect(place.isValid()).to.equal(false);
        });
        it("Missing address", function () {
            var place = new Location({
                _id: "de4e0cd7dd992d9be2f20b42",
                dateCreated: "2018-04-29T12:00:00Z",
                dateModified: "2018-04-29T12:00:00Z",
                placeId: "Something",
                point: [0, 0],
                utcOffset: -600,
            });
            expect(place.isValid()).to.equal(false);
        });
        it("Missing utcOffset", function () {
            var place = new Location({
                _id: "de4e0cd7dd992d9be2f20b42",
                dateCreated: "2018-04-29T12:00:00Z",
                dateModified: "2018-04-29T12:00:00Z",
                placeId: "Something",
                address: "Something Street",
                point: [0, 0],
            });
            expect(place.isValid()).to.equal(false);
        });
        it("Missing coordinates", function () {
            var place = new Location({
                _id: "de4e0cd7dd992d9be2f20b42",
                dateCreated: "2018-04-29T12:00:00Z",
                dateModified: "2018-04-29T12:00:00Z",
                placeId: "Something",
                address: "Something Street",
                utcOffset: -600,
            });
            expect(place.isValid()).to.equal(false);
        });
    });
});
//# sourceMappingURL=Location.test.js.map