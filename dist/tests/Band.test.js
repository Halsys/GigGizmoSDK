"use strict";

var _chai = require("chai");

var _ = require("../");

var _this = void 0;

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

describe("Band class", function () {
  var _this2 = this;

  _newArrowCheck(this, _this);

  it("ModelName exists", function () {
    _newArrowCheck(this, _this2);

    (0, _chai.expect)(_.Band.ModelName).to.equal("Band");
  }.bind(this));
  describe("Constructor", function () {
    var _this3 = this;

    _newArrowCheck(this, _this2);

    it("Parse JSON", function () {
      _newArrowCheck(this, _this3);

      var band = new _.Band("{\n\t\t\t\t\"name\": \"Basic\",\n\t\t\t\t\"cityPlaceID\": \"Something\",\n\t\t\t\t\"description\": \"Something\",\n\t\t\t\t\"owners\": [\"504e0cd7dd992d9be2f20b6f\"]\n\t\t\t}");
      (0, _chai.expect)(band.name).to.equal("Basic");
      (0, _chai.expect)(band.cityPlaceID).to.equal("Something");
      (0, _chai.expect)(band.description).to.equal("Something");
      (0, _chai.expect)(band.owners).to.deep.equal(["504e0cd7dd992d9be2f20b6f"]);
    }.bind(this));
    it("Empty", function () {
      _newArrowCheck(this, _this3);

      var empty = new _.Band({});
      (0, _chai.expect)(empty.name).to.equal(null);
    }.bind(this));
    it("Copy Data", function () {
      _newArrowCheck(this, _this3);

      var copy = new _.Band({
        name: "Basic",
        cityPlaceID: "Something",
        description: "Something",
        owners: ["504e0cd7dd992d9be2f20b6f"]
      });
      (0, _chai.expect)(copy.name).to.equal("Basic");
    }.bind(this));
  }.bind(this));
  describe("Validation", function () {
    var _this4 = this;

    _newArrowCheck(this, _this2);

    it("Valid", function () {
      _newArrowCheck(this, _this4);

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
    }.bind(this));
    it("Missing id", function () {
      _newArrowCheck(this, _this4);

      var band = new _.Band({
        dateCreated: "2018-04-29T12:00:00Z",
        dateModified: "2018-04-29T12:00:00Z",
        name: "Basic",
        cityPlaceID: "Something",
        description: "Something",
        owners: ["504e0cd7dd992d9be2f20b6f"]
      });
      (0, _chai.expect)(band.valid()).to.equal(false);
    }.bind(this));
    it("Missing dateCreated", function () {
      _newArrowCheck(this, _this4);

      var band = new _.Band({
        _id: "de4e0cd7dd992d9be2f20b42",
        dateModified: "2018-04-29T12:00:00Z",
        name: "Basic",
        cityPlaceID: "Something",
        description: "Something",
        owners: ["504e0cd7dd992d9be2f20b6f"]
      });
      (0, _chai.expect)(band.valid()).to.equal(false);
    }.bind(this));
    it("Missing dateModified", function () {
      _newArrowCheck(this, _this4);

      var band = new _.Band({
        _id: "de4e0cd7dd992d9be2f20b42",
        dateCreated: "2018-04-29T12:00:00Z",
        name: "Basic",
        cityPlaceID: "Something",
        description: "Something",
        owners: ["504e0cd7dd992d9be2f20b6f"]
      });
      (0, _chai.expect)(band.valid()).to.equal(false);
    }.bind(this));
    it("Missing name", function () {
      _newArrowCheck(this, _this4);

      var band = new _.Band({
        _id: "de4e0cd7dd992d9be2f20b42",
        dateCreated: "2018-04-29T12:00:00Z",
        dateModified: "2018-04-29T12:00:00Z",
        cityPlaceID: "Something",
        description: "Something",
        owners: ["504e0cd7dd992d9be2f20b6f"]
      });
      (0, _chai.expect)(band.valid()).to.equal(false);
    }.bind(this));
    it("Missing cityPlaceID", function () {
      _newArrowCheck(this, _this4);

      var band = new _.Band({
        _id: "de4e0cd7dd992d9be2f20b42",
        dateCreated: "2018-04-29T12:00:00Z",
        dateModified: "2018-04-29T12:00:00Z",
        name: "Basic",
        description: "Something",
        owners: ["504e0cd7dd992d9be2f20b6f"]
      });
      (0, _chai.expect)(band.valid()).to.equal(false);
    }.bind(this));
    it("Missing description", function () {
      _newArrowCheck(this, _this4);

      var band = new _.Band({
        _id: "de4e0cd7dd992d9be2f20b42",
        dateCreated: "2018-04-29T12:00:00Z",
        dateModified: "2018-04-29T12:00:00Z",
        name: "Basic",
        cityPlaceID: "Something",
        owners: ["504e0cd7dd992d9be2f20b6f"]
      });
      (0, _chai.expect)(band.valid()).to.equal(false);
    }.bind(this));
    it("Missing owners", function () {
      _newArrowCheck(this, _this4);

      var band = new _.Band({
        _id: "de4e0cd7dd992d9be2f20b42",
        dateCreated: "2018-04-29T12:00:00Z",
        dateModified: "2018-04-29T12:00:00Z",
        name: "Basic",
        cityPlaceID: "Something",
        description: "Something"
      });
      (0, _chai.expect)(band.valid()).to.equal(false);
    }.bind(this));
    it("No owners", function () {
      _newArrowCheck(this, _this4);

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
    }.bind(this));
  }.bind(this));
  describe("userIsOwner", function () {
    var _this5 = this;

    _newArrowCheck(this, _this2);

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
      _newArrowCheck(this, _this5);

      return (0, _chai.expect)(basicBand.userIsOwner(basicUser.id)).to.equal(true);
    }.bind(this));
    it("valid user object argument", function () {
      _newArrowCheck(this, _this5);

      return (0, _chai.expect)(basicBand.userIsOwner(basicUser)).to.equal(true);
    }.bind(this));
    it("pass empty string", function () {
      _newArrowCheck(this, _this5);

      return (0, _chai.expect)(basicBand.userIsOwner("")).to.equal(false);
    }.bind(this));
    it("pass empty object", function () {
      _newArrowCheck(this, _this5);

      return (0, _chai.expect)(basicBand.userIsOwner({})).to.equal(false);
    }.bind(this));
    it("pass null", function () {
      _newArrowCheck(this, _this5);

      return (0, _chai.expect)(basicBand.userIsOwner(null)).to.equal(false);
    }.bind(this));
  }.bind(this));
}.bind(void 0));