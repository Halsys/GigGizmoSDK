(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["chai", "../"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("chai"), require("../"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.chai, global._);
    global.BandTest = mod.exports;
  }
})(this, function (_chai, _) {
  "use strict";

  describe("Band class", function () {
    it("ModelName exists", function () {
      (0, _chai.expect)(_.Band.ModelName).to.equal("Band");
    });
    describe("Constructor", function () {
      it("Parse JSON", function () {
        var band = new _.Band("{\n\t\t\t\t\"name\": \"Basic\",\n\t\t\t\t\"cityPlaceID\": \"Something\",\n\t\t\t\t\"description\": \"Something\",\n\t\t\t\t\"owners\": [\"504e0cd7dd992d9be2f20b6f\"]\n\t\t\t}");
        (0, _chai.expect)(band.name).to.equal("Basic");
        (0, _chai.expect)(band.cityPlaceID).to.equal("Something");
        (0, _chai.expect)(band.description).to.equal("Something");
        (0, _chai.expect)(band.owners).to.deep.equal(["504e0cd7dd992d9be2f20b6f"]);
      });
      it("Empty", function () {
        var empty = new _.Band({});
        (0, _chai.expect)(empty.name).to.equal(null);
      });
      it("Copy Data", function () {
        var copy = new _.Band({
          name: "Basic",
          cityPlaceID: "Something",
          description: "Something",
          owners: ["504e0cd7dd992d9be2f20b6f"]
        });
        (0, _chai.expect)(copy.name).to.equal("Basic");
      });
    });
    describe("Validation", function () {
      it("Valid", function () {
        var band = new _.Band({
          _id: "de4e0cd7dd992d9be2f20b42",
          dateCreated: "2018-04-29T12:00:00Z",
          dateModified: "2018-04-29T12:00:00Z",
          name: "Basic",
          cityPlaceID: "Something",
          description: "Something",
          owners: ["504e0cd7dd992d9be2f20b6f"]
        });
        (0, _chai.expect)(band.valid()).to.equal(true);
      });
      it("Missing id", function () {
        var band = new _.Band({
          dateCreated: "2018-04-29T12:00:00Z",
          dateModified: "2018-04-29T12:00:00Z",
          name: "Basic",
          cityPlaceID: "Something",
          description: "Something",
          owners: ["504e0cd7dd992d9be2f20b6f"]
        });
        (0, _chai.expect)(band.valid()).to.equal(false);
      });
      it("Missing dateCreated", function () {
        var band = new _.Band({
          _id: "de4e0cd7dd992d9be2f20b42",
          dateModified: "2018-04-29T12:00:00Z",
          name: "Basic",
          cityPlaceID: "Something",
          description: "Something",
          owners: ["504e0cd7dd992d9be2f20b6f"]
        });
        (0, _chai.expect)(band.valid()).to.equal(false);
      });
      it("Missing dateModified", function () {
        var band = new _.Band({
          _id: "de4e0cd7dd992d9be2f20b42",
          dateCreated: "2018-04-29T12:00:00Z",
          name: "Basic",
          cityPlaceID: "Something",
          description: "Something",
          owners: ["504e0cd7dd992d9be2f20b6f"]
        });
        (0, _chai.expect)(band.valid()).to.equal(false);
      });
      it("Missing name", function () {
        var band = new _.Band({
          _id: "de4e0cd7dd992d9be2f20b42",
          dateCreated: "2018-04-29T12:00:00Z",
          dateModified: "2018-04-29T12:00:00Z",
          cityPlaceID: "Something",
          description: "Something",
          owners: ["504e0cd7dd992d9be2f20b6f"]
        });
        (0, _chai.expect)(band.valid()).to.equal(false);
      });
      it("Missing cityPlaceID", function () {
        var band = new _.Band({
          _id: "de4e0cd7dd992d9be2f20b42",
          dateCreated: "2018-04-29T12:00:00Z",
          dateModified: "2018-04-29T12:00:00Z",
          name: "Basic",
          description: "Something",
          owners: ["504e0cd7dd992d9be2f20b6f"]
        });
        (0, _chai.expect)(band.valid()).to.equal(false);
      });
      it("Missing description", function () {
        var band = new _.Band({
          _id: "de4e0cd7dd992d9be2f20b42",
          dateCreated: "2018-04-29T12:00:00Z",
          dateModified: "2018-04-29T12:00:00Z",
          name: "Basic",
          cityPlaceID: "Something",
          owners: ["504e0cd7dd992d9be2f20b6f"]
        });
        (0, _chai.expect)(band.valid()).to.equal(false);
      });
      it("Missing owners", function () {
        var band = new _.Band({
          _id: "de4e0cd7dd992d9be2f20b42",
          dateCreated: "2018-04-29T12:00:00Z",
          dateModified: "2018-04-29T12:00:00Z",
          name: "Basic",
          cityPlaceID: "Something",
          description: "Something"
        });
        (0, _chai.expect)(band.valid()).to.equal(false);
      });
      it("No owners", function () {
        var band = new _.Band({
          _id: "de4e0cd7dd992d9be2f20b42",
          dateCreated: "2018-04-29T12:00:00Z",
          dateModified: "2018-04-29T12:00:00Z",
          name: "Basic",
          cityPlaceID: "Something",
          description: "Something",
          owners: []
        });
        (0, _chai.expect)(band.valid()).to.equal(false);
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
      var basicBand = new _.Band({
        _id: "de4e0cd7dd992d9be2f20b42",
        dateCreated: "2018-04-29T12:00:00Z",
        dateModified: "2018-04-29T12:00:00Z",
        name: "Basic",
        cityPlaceID: "Something",
        description: "Something",
        owners: ["504e0cd7dd992d9be2f20b6f"]
      });
      it("valid id string argument", function () {
        return (0, _chai.expect)(basicBand.userIsOwner(basicUser.id)).to.equal(true);
      });
      it("valid user object argument", function () {
        return (0, _chai.expect)(basicBand.userIsOwner(basicUser)).to.equal(true);
      });
      it("pass empty string", function () {
        return (0, _chai.expect)(basicBand.userIsOwner("")).to.equal(false);
      });
      it("pass empty object", function () {
        return (0, _chai.expect)(basicBand.userIsOwner({})).to.equal(false);
      });
      it("pass null", function () {
        return (0, _chai.expect)(basicBand.userIsOwner(null)).to.equal(false);
      });
    });
  });
});