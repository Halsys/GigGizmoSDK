"use strict";

var _chai = require("chai");

var _ = require("../");

var _this = void 0;

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

describe("Location class", function () {
  var _this2 = this;

  _newArrowCheck(this, _this);

  it("ModelName exists", function () {
    _newArrowCheck(this, _this2);

    (0, _chai.expect)(_.Location.ModelName).to.equal("Location");
  }.bind(this));
  describe("Constructor", function () {
    var _this3 = this;

    _newArrowCheck(this, _this2);

    it("Parse JSON", function () {
      _newArrowCheck(this, _this3);

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
    }.bind(this));
    it("Empty", function () {
      _newArrowCheck(this, _this3);

      var empty = new _.Location({});
      (0, _chai.expect)(empty.placeId).to.equal(null);
      (0, _chai.expect)(empty.address).to.equal(null);
      (0, _chai.expect)(empty.point).to.equal(null);
      (0, _chai.expect)(empty.utcOffset).to.equal(null);
      (0, _chai.expect)(empty.type).to.equal("Point");
    }.bind(this));
    it("Copy Data", function () {
      _newArrowCheck(this, _this3);

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
    }.bind(this));
  }.bind(this));
  describe("Validation", function () {
    var _this4 = this;

    _newArrowCheck(this, _this2);

    it("Valid", function () {
      _newArrowCheck(this, _this4);

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
    }.bind(this));
    it("Missing id", function () {
      _newArrowCheck(this, _this4);

      var place = new _.Location({
        dateCreated: "2018-04-29T12:00:00Z",
        dateModified: "2018-04-29T12:00:00Z",
        placeId: "Something",
        address: "Something Street",
        point: [0, 0],
        utcOffset: -600
      });
      (0, _chai.expect)(place.valid()).to.equal(false);
    }.bind(this));
    it("Missing dateCreated", function () {
      _newArrowCheck(this, _this4);

      var place = new _.Location({
        _id: "de4e0cd7dd992d9be2f20b42",
        dateModified: "2018-04-29T12:00:00Z",
        placeId: "Something",
        address: "Something Street",
        point: [0, 0],
        utcOffset: -600
      });
      (0, _chai.expect)(place.valid()).to.equal(false);
    }.bind(this));
    it("Missing dateModified", function () {
      _newArrowCheck(this, _this4);

      var place = new _.Location({
        _id: "de4e0cd7dd992d9be2f20b42",
        dateCreated: "2018-04-29T12:00:00Z",
        placeId: "Something",
        address: "Something Street",
        point: [0, 0],
        utcOffset: -600
      });
      (0, _chai.expect)(place.valid()).to.equal(false);
    }.bind(this));
    it("Missing placeId", function () {
      _newArrowCheck(this, _this4);

      var place = new _.Location({
        _id: "de4e0cd7dd992d9be2f20b42",
        dateCreated: "2018-04-29T12:00:00Z",
        dateModified: "2018-04-29T12:00:00Z",
        address: "Something Street",
        point: [0, 0],
        utcOffset: -600
      });
      (0, _chai.expect)(place.valid()).to.equal(false);
    }.bind(this));
    it("Missing address", function () {
      _newArrowCheck(this, _this4);

      var place = new _.Location({
        _id: "de4e0cd7dd992d9be2f20b42",
        dateCreated: "2018-04-29T12:00:00Z",
        dateModified: "2018-04-29T12:00:00Z",
        placeId: "Something",
        point: [0, 0],
        utcOffset: -600
      });
      (0, _chai.expect)(place.valid()).to.equal(false);
    }.bind(this));
    it("Missing utcOffset", function () {
      _newArrowCheck(this, _this4);

      var place = new _.Location({
        _id: "de4e0cd7dd992d9be2f20b42",
        dateCreated: "2018-04-29T12:00:00Z",
        dateModified: "2018-04-29T12:00:00Z",
        placeId: "Something",
        address: "Something Street",
        point: [0, 0]
      });
      (0, _chai.expect)(place.valid()).to.equal(false);
    }.bind(this));
    it("Missing coordinates", function () {
      _newArrowCheck(this, _this4);

      var place = new _.Location({
        _id: "de4e0cd7dd992d9be2f20b42",
        dateCreated: "2018-04-29T12:00:00Z",
        dateModified: "2018-04-29T12:00:00Z",
        placeId: "Something",
        address: "Something Street",
        utcOffset: -600
      });
      (0, _chai.expect)(place.valid()).to.equal(false);
    }.bind(this));
  }.bind(this));
}.bind(void 0));