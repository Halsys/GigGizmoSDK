(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["moment", "chai", "../"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("moment"), require("chai"), require("../"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.moment, global.chai, global._);
    global.GigTest = mod.exports;
  }
})(this, function (_moment, _chai, _) {
  "use strict";

  _moment = _interopRequireDefault(_moment);

  var _this = void 0;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

  describe("Gig class", function () {
    var _this2 = this;

    _newArrowCheck(this, _this);

    it("ModelName exists", function () {
      _newArrowCheck(this, _this2);

      (0, _chai.expect)(_.Gig.ModelName).to.equal("Gig");
    }.bind(this));
    describe("Constructor", function () {
      var _this3 = this;

      _newArrowCheck(this, _this2);

      it("Parse JSON", function () {
        _newArrowCheck(this, _this3);

        var gig = new _.Gig("{\n\t\t\t\t\"startTime\": \"2018-04-29T12:00:00Z\",\n\t\t\t\t\"stopTime\": \"2018-04-29T14:00:00Z\",\n\t\t\t\t\"location\": \"d7dd992d9be2f20b6f504e0c\",\n\t\t\t\t\"venue\": \"2d9be2f20b6f504e0cd7dd99\",\n\t\t\t\t\"bands\": [ \"f20b6f504e0cd7dd992d9be2\" ]\n\t\t\t}");
        (0, _chai.expect)(_.RESTModel.isValidId(gig.location)).to.equal(true);
        (0, _chai.expect)(_.RESTModel.isValidId(gig.venue)).to.equal(true);
        (0, _chai.expect)(gig.location).to.equal("d7dd992d9be2f20b6f504e0c");
        (0, _chai.expect)(gig.venue).to.equal("2d9be2f20b6f504e0cd7dd99");
        (0, _chai.expect)(gig.bands).to.deep.equal(["f20b6f504e0cd7dd992d9be2"]);
        (0, _chai.expect)(gig.startTime).to.deep.equal((0, _moment.default)("2018-04-29T12:00:00Z"));
        (0, _chai.expect)(gig.stopTime).to.deep.equal((0, _moment.default)("2018-04-29T14:00:00Z"));
      }.bind(this));
      it("Empty", function () {
        _newArrowCheck(this, _this3);

        var empty = new _.Gig();
        (0, _chai.expect)(empty.startTime).to.equal(null);
        (0, _chai.expect)(empty.stopTime).to.equal(null);
        (0, _chai.expect)(empty.location).to.equal(null);
        (0, _chai.expect)(empty.venue).to.equal(null);
        (0, _chai.expect)(empty.bands).to.equal(null);
      }.bind(this));
      it("Copy Data", function () {
        _newArrowCheck(this, _this3);

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
      }.bind(this));
    }.bind(this));
    describe("Validation", function () {
      var _this4 = this;

      _newArrowCheck(this, _this2);

      it("Valid", function () {
        _newArrowCheck(this, _this4);

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
      }.bind(this));
      it("Missing id", function () {
        _newArrowCheck(this, _this4);

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
      }.bind(this));
      it("Missing dateCreated", function () {
        _newArrowCheck(this, _this4);

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
      }.bind(this));
      it("Missing dateModified", function () {
        _newArrowCheck(this, _this4);

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
      var gig = new _.Gig({
        startTime: "2018-04-29T12:00:00Z",
        stopTime: "2018-04-29T14:00:00Z",
        location: "d7dd992d9be2f20b6f504e0c",
        venue: "2d9be2f20b6f504e0cd7dd99",
        bands: ["f20b6f504e0cd7dd992d9be2"],
        owners: ["504e0cd7dd992d9be2f20b6f"]
      });
      it("valid id string argument", function () {
        _newArrowCheck(this, _this5);

        return (0, _chai.expect)(gig.userIsOwner(basicUser.id)).to.equal(true);
      }.bind(this));
      it("valid user object argument", function () {
        _newArrowCheck(this, _this5);

        return (0, _chai.expect)(gig.userIsOwner(basicUser)).to.equal(true);
      }.bind(this));
      it("pass empty string", function () {
        _newArrowCheck(this, _this5);

        return (0, _chai.expect)(gig.userIsOwner("")).to.equal(false);
      }.bind(this));
      it("pass empty object", function () {
        _newArrowCheck(this, _this5);

        return (0, _chai.expect)(gig.userIsOwner({})).to.equal(false);
      }.bind(this));
      it("pass null", function () {
        _newArrowCheck(this, _this5);

        return (0, _chai.expect)(gig.userIsOwner(null)).to.equal(false);
      }.bind(this));
    }.bind(this));
  }.bind(void 0));
});