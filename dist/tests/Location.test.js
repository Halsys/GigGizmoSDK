"use strict";

var _chai = require("chai");

var _ = require("../");

describe("Location class", function () {
  it("ModelName exists", function () {
    (0, _chai.expect)(_.Location.ModelName).to.equal("Location");
  });
  describe("Constructor", function () {
    it("Parse JSON", function () {
      // / Note: Facebook has number id's... or indices?
      var place = new _.Location("{\n\t\t\t\t\"placeId\": \"Something\",\n\t\t\t\t\"address\": \"Something Street\",\n\t\t\t\t\"point\": [0, 0],\n\t\t\t\t\"utcOffset\": -600\n\t\t\t}");
      (0, _chai.expect)(place.placeId).to.be.a("string");
      (0, _chai.expect)(place.placeId).to.equal("Something");
      (0, _chai.expect)(place.address).to.be.a("string");
      (0, _chai.expect)(place.address).to.equal("Something Street");
      (0, _chai.expect)(place.point).to.be.a("array");
      (0, _chai.expect)(place.point).to.deep.equal([0, 0]); // West coast of africa...

      (0, _chai.expect)(place.utcOffset).to.be.a("number");
      (0, _chai.expect)(place.utcOffset).to.equal(-600);
    });
    it("Empty", function () {
      var empty = new _.Location({});
      (0, _chai.expect)(empty.placeId).to.equal(null);
      (0, _chai.expect)(empty.address).to.equal(null);
      (0, _chai.expect)(empty.point).to.equal(null);
      (0, _chai.expect)(empty.utcOffset).to.equal(null);
      (0, _chai.expect)(empty.type).to.equal("Point");
    });
    it("Copy Data", function () {
      var place = new _.Location({
        placeId: "Something",
        address: "Something Street",
        point: [0, 0],
        utcOffset: -600
      });
      (0, _chai.expect)(place.placeId).to.be.a("string");
      (0, _chai.expect)(place.placeId).to.equal("Something");
      (0, _chai.expect)(place.address).to.be.a("string");
      (0, _chai.expect)(place.address).to.equal("Something Street");
      (0, _chai.expect)(place.point).to.be.a("array");
      (0, _chai.expect)(place.point).to.deep.equal([0, 0]); // West coast of africa...

      (0, _chai.expect)(place.utcOffset).to.be.a("number");
      (0, _chai.expect)(place.utcOffset).to.equal(-600);
    });
  });
  describe("Validation", function () {
    it("Valid", function () {
      var place = new _.Location({
        _id: "de4e0cd7dd992d9be2f20b42",
        dateCreated: "2018-04-29T12:00:00Z",
        dateModified: "2018-04-29T12:00:00Z",
        placeId: "Something",
        address: "Something Street",
        point: [0, 0],
        utcOffset: -600
      });
      (0, _chai.expect)(place.valid()).to.equal(true);
    });
    it("Missing id", function () {
      var place = new _.Location({
        dateCreated: "2018-04-29T12:00:00Z",
        dateModified: "2018-04-29T12:00:00Z",
        placeId: "Something",
        address: "Something Street",
        point: [0, 0],
        utcOffset: -600
      });
      (0, _chai.expect)(place.valid()).to.equal(false);
    });
    it("Missing dateCreated", function () {
      var place = new _.Location({
        _id: "de4e0cd7dd992d9be2f20b42",
        dateModified: "2018-04-29T12:00:00Z",
        placeId: "Something",
        address: "Something Street",
        point: [0, 0],
        utcOffset: -600
      });
      (0, _chai.expect)(place.valid()).to.equal(false);
    });
    it("Missing dateModified", function () {
      var place = new _.Location({
        _id: "de4e0cd7dd992d9be2f20b42",
        dateCreated: "2018-04-29T12:00:00Z",
        placeId: "Something",
        address: "Something Street",
        point: [0, 0],
        utcOffset: -600
      });
      (0, _chai.expect)(place.valid()).to.equal(false);
    });
    it("Missing placeId", function () {
      var place = new _.Location({
        _id: "de4e0cd7dd992d9be2f20b42",
        dateCreated: "2018-04-29T12:00:00Z",
        dateModified: "2018-04-29T12:00:00Z",
        address: "Something Street",
        point: [0, 0],
        utcOffset: -600
      });
      (0, _chai.expect)(place.valid()).to.equal(false);
    });
    it("Missing address", function () {
      var place = new _.Location({
        _id: "de4e0cd7dd992d9be2f20b42",
        dateCreated: "2018-04-29T12:00:00Z",
        dateModified: "2018-04-29T12:00:00Z",
        placeId: "Something",
        point: [0, 0],
        utcOffset: -600
      });
      (0, _chai.expect)(place.valid()).to.equal(false);
    });
    it("Missing utcOffset", function () {
      var place = new _.Location({
        _id: "de4e0cd7dd992d9be2f20b42",
        dateCreated: "2018-04-29T12:00:00Z",
        dateModified: "2018-04-29T12:00:00Z",
        placeId: "Something",
        address: "Something Street",
        point: [0, 0]
      });
      (0, _chai.expect)(place.valid()).to.equal(false);
    });
    it("Missing coordinates", function () {
      var place = new _.Location({
        _id: "de4e0cd7dd992d9be2f20b42",
        dateCreated: "2018-04-29T12:00:00Z",
        dateModified: "2018-04-29T12:00:00Z",
        placeId: "Something",
        address: "Something Street",
        utcOffset: -600
      });
      (0, _chai.expect)(place.valid()).to.equal(false);
    });
  });
});