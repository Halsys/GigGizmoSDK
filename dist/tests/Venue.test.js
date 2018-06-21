"use strict";

var _chai = require("chai");

var _ = require("../");

describe("Venue class", function () {
  it("ModelName exists", function () {
    (0, _chai.expect)(_.Venue.ModelName).to.equal("Venue");
  });
  describe("Constructor", function () {
    it("Parse JSON", function () {
      var venue = new _.Venue("{\n\t\t\t\t\"name\": \"Basic\",\n\t\t\t\t\"location\": \"2d9be2f20b6f504e0cd7dd99\",\n\t\t\t\t\"description\": \"Something\",\n\t\t\t\t\"owners\": [\"504e0cd7dd992d9be2f20b6f\"]\n\t\t\t}");
      (0, _chai.expect)(venue.name).to.equal("Basic");
      (0, _chai.expect)(venue.location).to.equal("2d9be2f20b6f504e0cd7dd99");
      (0, _chai.expect)(venue.description).to.equal("Something");
      (0, _chai.expect)(venue.owners).to.deep.equal(["504e0cd7dd992d9be2f20b6f"]);
    });
    it("Empty", function () {
      var empty = new _.Venue({});
      (0, _chai.expect)(empty.name).to.equal(null);
    });
    it("Copy Data", function () {
      var copy = new _.Venue({
        name: "Basic",
        location: "2d9be2f20b6f504e0cd7dd99",
        description: "Something",
        owners: ["504e0cd7dd992d9be2f20b6f"]
      });
      (0, _chai.expect)(copy.name).to.equal("Basic");
    });
  });
  describe("Validation", function () {
    it("Valid", function () {
      var venue = new _.Venue({
        _id: "de4e0cd7dd992d9be2f20b42",
        dateCreated: "2018-04-29T12:00:00Z",
        dateModified: "2018-04-29T12:00:00Z",
        name: "Basic",
        location: "2d9be2f20b6f504e0cd7dd99",
        description: "Something",
        owners: ["504e0cd7dd992d9be2f20b6f"]
      });
      (0, _chai.expect)(venue.valid()).to.equal(true);
    });
    it("Missing id", function () {
      var venue = new _.Venue({
        dateCreated: "2018-04-29T12:00:00Z",
        dateModified: "2018-04-29T12:00:00Z",
        name: "Basic",
        location: "2d9be2f20b6f504e0cd7dd99",
        description: "Something",
        owners: ["504e0cd7dd992d9be2f20b6f"]
      });
      (0, _chai.expect)(venue.valid()).to.equal(false);
    });
    it("Missing dateCreated", function () {
      var venue = new _.Venue({
        _id: "de4e0cd7dd992d9be2f20b42",
        dateModified: "2018-04-29T12:00:00Z",
        name: "Basic",
        location: "2d9be2f20b6f504e0cd7dd99",
        description: "Something",
        owners: ["504e0cd7dd992d9be2f20b6f"]
      });
      (0, _chai.expect)(venue.valid()).to.equal(false);
    });
    it("Missing dateModified", function () {
      var venue = new _.Venue({
        _id: "de4e0cd7dd992d9be2f20b42",
        dateCreated: "2018-04-29T12:00:00Z",
        name: "Basic",
        location: "2d9be2f20b6f504e0cd7dd99",
        description: "Something",
        owners: ["504e0cd7dd992d9be2f20b6f"]
      });
      (0, _chai.expect)(venue.valid()).to.equal(false);
    });
    it("Missing name", function () {
      var venue = new _.Venue({
        _id: "de4e0cd7dd992d9be2f20b42",
        dateCreated: "2018-04-29T12:00:00Z",
        dateModified: "2018-04-29T12:00:00Z",
        location: "2d9be2f20b6f504e0cd7dd99",
        description: "Something",
        owners: ["504e0cd7dd992d9be2f20b6f"]
      });
      (0, _chai.expect)(venue.valid()).to.equal(false);
    });
    it("Missing location", function () {
      var venue = new _.Venue({
        _id: "de4e0cd7dd992d9be2f20b42",
        dateCreated: "2018-04-29T12:00:00Z",
        dateModified: "2018-04-29T12:00:00Z",
        name: "Basic",
        description: "Something",
        owners: ["504e0cd7dd992d9be2f20b6f"]
      });
      (0, _chai.expect)(venue.valid()).to.equal(false);
    });
    it("Missing description", function () {
      var venue = new _.Venue({
        _id: "de4e0cd7dd992d9be2f20b42",
        dateCreated: "2018-04-29T12:00:00Z",
        dateModified: "2018-04-29T12:00:00Z",
        name: "Basic",
        location: "2d9be2f20b6f504e0cd7dd99",
        owners: ["504e0cd7dd992d9be2f20b6f"]
      });
      (0, _chai.expect)(venue.valid()).to.equal(false);
    });
    it("Missing owners", function () {
      var venue = new _.Venue({
        _id: "de4e0cd7dd992d9be2f20b42",
        dateCreated: "2018-04-29T12:00:00Z",
        dateModified: "2018-04-29T12:00:00Z",
        name: "Basic",
        location: "2d9be2f20b6f504e0cd7dd99",
        description: "Something"
      });
      (0, _chai.expect)(venue.valid()).to.equal(false);
    });
    it("No owners", function () {
      var venue = new _.Venue({
        _id: "de4e0cd7dd992d9be2f20b42",
        dateCreated: "2018-04-29T12:00:00Z",
        dateModified: "2018-04-29T12:00:00Z",
        name: "Basic",
        location: "2d9be2f20b6f504e0cd7dd99",
        description: "Something",
        owners: []
      });
      (0, _chai.expect)(venue.valid()).to.equal(false);
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
    var basicVenue = new _.Venue({
      _id: "de4e0cd7dd992d9be2f20b42",
      dateCreated: "2018-04-29T12:00:00Z",
      dateModified: "2018-04-29T12:00:00Z",
      name: "Basic",
      location: "2d9be2f20b6f504e0cd7dd99",
      description: "Something",
      owners: ["504e0cd7dd992d9be2f20b6f"]
    });
    it("valid id string argument", function () {
      return (0, _chai.expect)(basicVenue.userIsOwner(basicUser.id)).to.equal(true);
    });
    it("valid user object argument", function () {
      return (0, _chai.expect)(basicVenue.userIsOwner(basicUser)).to.equal(true);
    });
    it("pass empty string", function () {
      return (0, _chai.expect)(basicVenue.userIsOwner("")).to.equal(false);
    });
    it("pass empty object", function () {
      return (0, _chai.expect)(basicVenue.userIsOwner({})).to.equal(false);
    });
    it("pass null", function () {
      return (0, _chai.expect)(basicVenue.userIsOwner(null)).to.equal(false);
    });
  });
});