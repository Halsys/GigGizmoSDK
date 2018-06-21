"use strict";

var _moment = _interopRequireDefault(require("moment"));

var _chai = require("chai");

var _ = require("../");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("Gig class", function () {
  it("ModelName exists", function () {
    (0, _chai.expect)(_.Gig.ModelName).to.equal("Gig");
  });
  describe("Constructor", function () {
    it("Parse JSON", function () {
      var gig = new _.Gig("{\n\t\t\t\t\"startTime\": \"2018-04-29T12:00:00Z\",\n\t\t\t\t\"stopTime\": \"2018-04-29T14:00:00Z\",\n\t\t\t\t\"location\": \"d7dd992d9be2f20b6f504e0c\",\n\t\t\t\t\"venue\": \"2d9be2f20b6f504e0cd7dd99\",\n\t\t\t\t\"bands\": [ \"f20b6f504e0cd7dd992d9be2\" ]\n\t\t\t}");
      (0, _chai.expect)(_.RESTModel.isValidId(gig.location)).to.equal(true);
      (0, _chai.expect)(_.RESTModel.isValidId(gig.venue)).to.equal(true);
      (0, _chai.expect)(gig.location).to.equal("d7dd992d9be2f20b6f504e0c");
      (0, _chai.expect)(gig.venue).to.equal("2d9be2f20b6f504e0cd7dd99");
      (0, _chai.expect)(gig.bands).to.deep.equal(["f20b6f504e0cd7dd992d9be2"]);
      (0, _chai.expect)(gig.startTime).to.deep.equal((0, _moment.default)("2018-04-29T12:00:00Z"));
      (0, _chai.expect)(gig.stopTime).to.deep.equal((0, _moment.default)("2018-04-29T14:00:00Z"));
    });
    it("Empty", function () {
      var empty = new _.Gig();
      (0, _chai.expect)(empty.startTime).to.equal(null);
      (0, _chai.expect)(empty.stopTime).to.equal(null);
      (0, _chai.expect)(empty.location).to.equal(null);
      (0, _chai.expect)(empty.venue).to.equal(null);
      (0, _chai.expect)(empty.bands).to.equal(null);
    });
    it("Copy Data", function () {
      var gig = new _.Gig({
        startTime: "2018-04-29T12:00:00Z",
        stopTime: "2018-04-29T14:00:00Z",
        location: "d7dd992d9be2f20b6f504e0c",
        venue: "2d9be2f20b6f504e0cd7dd99",
        bands: ["f20b6f504e0cd7dd992d9be2"]
      });
      (0, _chai.expect)(_.RESTModel.isValidId(gig.location)).to.equal(true);
      (0, _chai.expect)(_.RESTModel.isValidId(gig.venue)).to.equal(true);
      (0, _chai.expect)(gig.location).to.equal("d7dd992d9be2f20b6f504e0c");
      (0, _chai.expect)(gig.venue).to.equal("2d9be2f20b6f504e0cd7dd99");
      (0, _chai.expect)(gig.bands).to.deep.equal(["f20b6f504e0cd7dd992d9be2"]);
      (0, _chai.expect)(gig.startTime).to.deep.equal((0, _moment.default)("2018-04-29T12:00:00Z"));
      (0, _chai.expect)(gig.stopTime).to.deep.equal((0, _moment.default)("2018-04-29T14:00:00Z"));
    });
  });
  describe("Validation", function () {
    it("Valid", function () {
      var gig = new _.Gig({
        _id: "de4e0cd7dd992d9be2f20b42",
        dateCreated: "2018-04-29T12:00:00Z",
        dateModified: "2018-04-29T12:00:00Z",
        startTime: "2018-04-29T12:00:00Z",
        stopTime: "2018-04-29T14:00:00Z",
        location: "d7dd992d9be2f20b6f504e0c",
        venue: "2d9be2f20b6f504e0cd7dd99",
        bands: ["f20b6f504e0cd7dd992d9be2"],
        owners: ["504e0cd7dd992d9be2f20b6f"]
      });
      (0, _chai.expect)(gig.valid()).to.equal(true);
    });
    it("Missing id", function () {
      var gig = new _.Gig({
        dateCreated: "2018-04-29T12:00:00Z",
        dateModified: "2018-04-29T12:00:00Z",
        startTime: "2018-04-29T12:00:00Z",
        stopTime: "2018-04-29T14:00:00Z",
        location: "d7dd992d9be2f20b6f504e0c",
        venue: "2d9be2f20b6f504e0cd7dd99",
        bands: ["f20b6f504e0cd7dd992d9be2"],
        owners: ["504e0cd7dd992d9be2f20b6f"]
      });
      (0, _chai.expect)(gig.valid()).to.equal(false);
    });
    it("Missing dateCreated", function () {
      var gig = new _.Gig({
        _id: "de4e0cd7dd992d9be2f20b42",
        dateModified: "2018-04-29T12:00:00Z",
        startTime: "2018-04-29T12:00:00Z",
        stopTime: "2018-04-29T14:00:00Z",
        location: "d7dd992d9be2f20b6f504e0c",
        venue: "2d9be2f20b6f504e0cd7dd99",
        bands: ["f20b6f504e0cd7dd992d9be2"],
        owners: ["504e0cd7dd992d9be2f20b6f"]
      });
      (0, _chai.expect)(gig.valid()).to.equal(false);
    });
    it("Missing dateModified", function () {
      var gig = new _.Gig({
        _id: "de4e0cd7dd992d9be2f20b42",
        dateCreated: "2018-04-29T12:00:00Z",
        startTime: "2018-04-29T12:00:00Z",
        stopTime: "2018-04-29T14:00:00Z",
        location: "d7dd992d9be2f20b6f504e0c",
        venue: "2d9be2f20b6f504e0cd7dd99",
        bands: ["f20b6f504e0cd7dd992d9be2"],
        owners: ["504e0cd7dd992d9be2f20b6f"]
      });
      (0, _chai.expect)(gig.valid()).to.equal(false);
    });
  });
  describe("userIsOwner", function () {
    var basicUser = new _.User({
      _id: "504e0cd7dd992d9be2f20b6f",
      dateCreated: "2018-04-29T12:00:00Z",
      dateModified: "2018-04-29T12:00:00Z",
      firstName: "Basic",
      middleName: "F",
      lastName: "User",
      birthday: "1994-09-04T12:00:00Z",
      country: "US",
      email: "user@network.com"
    });
    var gig = new _.Gig({
      startTime: "2018-04-29T12:00:00Z",
      stopTime: "2018-04-29T14:00:00Z",
      location: "d7dd992d9be2f20b6f504e0c",
      venue: "2d9be2f20b6f504e0cd7dd99",
      bands: ["f20b6f504e0cd7dd992d9be2"],
      owners: ["504e0cd7dd992d9be2f20b6f"]
    });
    it("valid id string argument", function () {
      return (0, _chai.expect)(gig.userIsOwner(basicUser.id)).to.equal(true);
    });
    it("valid user object argument", function () {
      return (0, _chai.expect)(gig.userIsOwner(basicUser)).to.equal(true);
    });
    it("pass empty string", function () {
      return (0, _chai.expect)(gig.userIsOwner("")).to.equal(false);
    });
    it("pass empty object", function () {
      return (0, _chai.expect)(gig.userIsOwner({})).to.equal(false);
    });
    it("pass null", function () {
      return (0, _chai.expect)(gig.userIsOwner(null)).to.equal(false);
    });
  });
});