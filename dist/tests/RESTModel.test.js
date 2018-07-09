"use strict";

var _chai = require("chai");

var _moment = _interopRequireDefault(require("moment"));

var _ = require("../");

var _this = void 0;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

describe("RESTModel class", function () {
  var _this2 = this;

  _newArrowCheck(this, _this);

  describe("Constructor", function () {
    var _this3 = this;

    _newArrowCheck(this, _this2);

    it("Parse JSON", function () {
      _newArrowCheck(this, _this3);

      var doc = new _.RESTModel("{\n\t\t\t  \"_id\": \"de4e0cd7dd992d9be2f20b42\",\n\t\t\t  \"dateCreated\": \"2018-04-29T12:00:00Z\",\n\t\t\t  \"dateModified\": \"2018-04-29T12:00:00Z\"\n\t\t\t}");
      (0, _chai.expect)(doc._id).to.equal("de4e0cd7dd992d9be2f20b42");
      (0, _chai.expect)(doc.dateCreated).to.deep.equal((0, _moment.default)("2018-04-29T12:00:00Z"));
      (0, _chai.expect)(doc.dateModified).to.deep.equal((0, _moment.default)("2018-04-29T12:00:00Z"));
    }.bind(this));
    it("Empty", function () {
      _newArrowCheck(this, _this3);

      var empty = new _.RESTModel({});
      (0, _chai.expect)(empty._id).to.equal(null);
      (0, _chai.expect)(empty.dateCreated).to.equal(null);
      (0, _chai.expect)(empty.dateModified).to.equal(null);
    }.bind(this));
    it("Copy Data", function () {
      _newArrowCheck(this, _this3);

      var copy = new _.RESTModel({
        _id: "de4e0cd7dd992d9be2f20b42",
        dateCreated: "2018-04-29T12:00:00Z",
        dateModified: "2018-04-29T12:00:00Z"
      });
      (0, _chai.expect)(copy._id).to.equal("de4e0cd7dd992d9be2f20b42");
      (0, _chai.expect)(copy.dateCreated).to.deep.equal((0, _moment.default)("2018-04-29T12:00:00Z"));
      (0, _chai.expect)(copy.dateModified).to.deep.equal((0, _moment.default)("2018-04-29T12:00:00Z"));
    }.bind(this));
  }.bind(this));
  describe("toObject", function () {
    var _this4 = this;

    _newArrowCheck(this, _this2);

    it("Invalid Object", function () {
      _newArrowCheck(this, _this4);

      var empty = new _.RESTModel({});
      (0, _chai.expect)(empty.toObject()).to.deep.equal(null);
    }.bind(this));
    it("Valid Object", function () {
      _newArrowCheck(this, _this4);

      var copy = new _.RESTModel({
        _id: "de4e0cd7dd992d9be2f20b42",
        dateCreated: "2018-04-29T12:00:00Z",
        dateModified: "2018-04-29T12:00:00Z"
      });
      (0, _chai.expect)(copy.toObject()).to.deep.equal({
        _id: "de4e0cd7dd992d9be2f20b42",
        dateCreated: "2018-04-29T12:00:00Z",
        dateModified: "2018-04-29T12:00:00Z"
      });
    }.bind(this));
  }.bind(this));
  describe("toString", function () {
    var _this5 = this;

    _newArrowCheck(this, _this2);

    it("Invalid Object", function () {
      _newArrowCheck(this, _this5);

      var empty = new _.RESTModel({});
      (0, _chai.expect)(empty.toString()).to.deep.equal("null");
    }.bind(this));
    it("Valid Object", function () {
      _newArrowCheck(this, _this5);

      var copy = new _.RESTModel({
        _id: "de4e0cd7dd992d9be2f20b42",
        dateCreated: "2018-04-29T12:00:00Z",
        dateModified: "2018-04-29T12:00:00Z"
      });
      var json = copy.toString();
      (0, _chai.expect)(json).to.equal('{"_id":"de4e0cd7dd992d9be2f20b42","dateCreated":"2018-04-29T12:00:00Z","dateModified":"2018-04-29T12:00:00Z"}');
    }.bind(this));
  }.bind(this));
  describe("Validation", function () {
    var _this6 = this;

    _newArrowCheck(this, _this2);

    it("Valid", function () {
      _newArrowCheck(this, _this6);

      var doc = new _.RESTModel({
        _id: "de4e0cd7dd992d9be2f20b42",
        dateCreated: "2018-04-29T12:00:00Z",
        dateModified: "2018-04-29T12:00:00Z"
      });
      (0, _chai.expect)(doc.valid()).to.equal(true);
    }.bind(this));
    it("Missing id", function () {
      _newArrowCheck(this, _this6);

      var doc = new _.RESTModel({
        dateCreated: "2018-04-29T12:00:00Z",
        dateModified: "2018-04-29T12:00:00Z"
      });
      (0, _chai.expect)(doc.valid()).to.equal(false);
    }.bind(this));
    it("Missing dateCreated", function () {
      _newArrowCheck(this, _this6);

      var doc = new _.RESTModel({
        _id: "de4e0cd7dd992d9be2f20b42",
        dateModified: "2018-04-29T12:00:00Z"
      });
      (0, _chai.expect)(doc.valid()).to.equal(false);
    }.bind(this));
    it("Missing dateModified", function () {
      _newArrowCheck(this, _this6);

      var doc = new _.RESTModel({
        _id: "de4e0cd7dd992d9be2f20b42",
        dateCreated: "2018-04-29T12:00:00Z"
      });
      (0, _chai.expect)(doc.valid()).to.equal(false);
    }.bind(this));
  }.bind(this));
  describe("Assign", function () {
    var _this7 = this;

    _newArrowCheck(this, _this2);

    it("Assign to make valid", function () {
      _newArrowCheck(this, _this7);

      var doc = new _.RESTModel({
        _id: "de4e0cd7dd992d9be2f20b42",
        dateCreated: "2018-04-29T12:00:00Z",
        dateModified: "2018-04-29T12:00:00Z"
      });
      (0, _chai.expect)(doc.toObject()).to.deep.equal({
        _id: "de4e0cd7dd992d9be2f20b42",
        dateCreated: "2018-04-29T12:00:00Z",
        dateModified: "2018-04-29T12:00:00Z"
      });
      (0, _chai.expect)(doc.valid()).to.equal(true);
    }.bind(this));
    it("Assign to make invalid", function () {
      _newArrowCheck(this, _this7);

      var doc = new _.RESTModel({
        _id: "de4e0cd7dd992d9be2f20b42",
        dateCreated: "2018-04-29T12:00:00Z",
        dateModified: "2018-04-29T12:00:00Z"
      });
      (0, _chai.expect)(doc.valid()).to.equal(true);
      doc.assign({
        _id: "",
        dateCreated: "",
        dateModified: ""
      });
      (0, _chai.expect)(doc.valid()).to.equal(false);
    }.bind(this));
  }.bind(this));
  describe("isValidId", function () {
    var _this8 = this;

    _newArrowCheck(this, _this2);

    it("Not string", function () {
      _newArrowCheck(this, _this8);

      return (0, _chai.expect)(_.RESTModel.isValidId(123)).to.equal(false);
    }.bind(this));
    it("Invalid id", function () {
      _newArrowCheck(this, _this8);

      return (0, _chai.expect)(_.RESTModel.isValidId("INVALID")).to.equal(false);
    }.bind(this));
    it("Valid id", function () {
      _newArrowCheck(this, _this8);

      return (0, _chai.expect)(_.RESTModel.isValidId("de4e0cd7dd992d9be2f20b42")).to.equal(true);
    }.bind(this));
  }.bind(this));
  describe("getModelName", function () {
    var _this9 = this;

    _newArrowCheck(this, _this2);

    it("Null", function () {
      _newArrowCheck(this, _this9);

      (0, _chai.expect)(_.RESTModel.getModelName(null)).to.equal(null);
    }.bind(this));
    it("Band", function () {
      _newArrowCheck(this, _this9);

      (0, _chai.expect)(_.RESTModel.getModelName(_.Band)).to.equal("Band");
    }.bind(this));
    it("Conversation", function () {
      _newArrowCheck(this, _this9);

      (0, _chai.expect)(_.RESTModel.getModelName(_.Conversation)).to.equal("Conversation");
    }.bind(this));
    it("ErrorReport", function () {
      _newArrowCheck(this, _this9);

      (0, _chai.expect)(_.RESTModel.getModelName(_.ErrorReport)).to.equal("ErrorReport");
    }.bind(this));
    it("FacebookAccount", function () {
      _newArrowCheck(this, _this9);

      (0, _chai.expect)(_.RESTModel.getModelName(_.FacebookAccount)).to.equal("FacebookAccount");
    }.bind(this));
    it("Gig", function () {
      _newArrowCheck(this, _this9);

      (0, _chai.expect)(_.RESTModel.getModelName(_.Gig)).to.equal("Gig");
    }.bind(this));
    it("GooglePlace", function () {
      _newArrowCheck(this, _this9);

      (0, _chai.expect)(_.RESTModel.getModelName(_.GooglePlace)).to.equal("GooglePlace");
    }.bind(this));
    it("Location", function () {
      _newArrowCheck(this, _this9);

      (0, _chai.expect)(_.RESTModel.getModelName(_.Location)).to.equal("Location");
    }.bind(this));
    it("Notification", function () {
      _newArrowCheck(this, _this9);

      (0, _chai.expect)(_.RESTModel.getModelName(_.Notification)).to.equal("Notification");
    }.bind(this));
    it("Page", function () {
      _newArrowCheck(this, _this9);

      (0, _chai.expect)(_.RESTModel.getModelName(_.Page)).to.equal("Page");
    }.bind(this));
    it("Post", function () {
      _newArrowCheck(this, _this9);

      (0, _chai.expect)(_.RESTModel.getModelName(_.Post)).to.equal("Post");
    }.bind(this));
    it("Request", function () {
      _newArrowCheck(this, _this9);

      (0, _chai.expect)(_.RESTModel.getModelName(_.Request)).to.equal("Request");
    }.bind(this));
    it("TwitterAccount", function () {
      _newArrowCheck(this, _this9);

      (0, _chai.expect)(_.RESTModel.getModelName(_.TwitterAccount)).to.equal("TwitterAccount");
    }.bind(this));
    it("Upload", function () {
      _newArrowCheck(this, _this9);

      (0, _chai.expect)(_.RESTModel.getModelName(_.Upload)).to.equal("Upload");
    }.bind(this));
    it("User", function () {
      _newArrowCheck(this, _this9);

      (0, _chai.expect)(_.RESTModel.getModelName(_.User)).to.equal("User");
    }.bind(this));
    it("Venue", function () {
      _newArrowCheck(this, _this9);

      (0, _chai.expect)(_.RESTModel.getModelName(_.Venue)).to.equal("Venue");
    }.bind(this));
  }.bind(this));
}.bind(void 0));