"use strict";
var expect = require("chai").expect;
global["socket.io-client"] = require("socket.io-client");
global.axios = require("axios");
var GooglePlace = require("../../index.js").GooglePlace;
describe("GooglePlace class", function () {
    it("ModelName exists", function () {
        expect(GooglePlace.ModelName).to.equal("GooglePlace");
    });
    describe("Constructor", function () {
        it("Parse JSON", function () {
            // / Note: Facebook has number id's... or indices?
            var place = new GooglePlace("{\n\t\t\t\t\"placeId\": \"Something\",\n\t\t\t\t\"details\": {}\n\t\t\t}");
            expect(place.placeId).to.be.a("string");
            expect(place.placeId).to.equal("Something");
            expect(place.details).to.be.a("object");
            expect(place.details).to.deep.equal({});
        });
        it("Empty", function () {
            var empty = new GooglePlace({});
            expect(empty.placeId).to.equal(null);
            expect(empty.details).to.equal(null);
        });
        it("Copy Data", function () {
            var place = new GooglePlace({
                placeId: "Something",
                details: {},
            });
            expect(place.placeId).to.be.a("string");
            expect(place.placeId).to.equal("Something");
            expect(place.details).to.be.a("object");
            expect(place.details).to.deep.equal({});
        });
    });
});
//# sourceMappingURL=GooglePlace.test.js.map