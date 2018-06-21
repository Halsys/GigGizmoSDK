"use strict";

var _chai = require("chai");

var _moment = _interopRequireDefault(require("moment"));

var _ = require("../");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("RESTModel class", function () {
  describe("Constructor", function () {
    it("Parse JSON", function () {
      var doc = new _.RESTModel("{\n\t\t\t  \"_id\": \"de4e0cd7dd992d9be2f20b42\",\n\t\t\t  \"dateCreated\": \"2018-04-29T12:00:00Z\",\n\t\t\t  \"dateModified\": \"2018-04-29T12:00:00Z\"\n\t\t\t}");
      (0, _chai.expect)(doc._id).to.equal("de4e0cd7dd992d9be2f20b42");
      (0, _chai.expect)(doc.dateCreated).to.deep.equal((0, _moment.default)("2018-04-29T12:00:00Z"));
      (0, _chai.expect)(doc.dateModified).to.deep.equal((0, _moment.default)("2018-04-29T12:00:00Z"));
    });
    it("Empty", function () {
      var empty = new _.RESTModel({});
      (0, _chai.expect)(empty._id).to.equal(null);
      (0, _chai.expect)(empty.dateCreated).to.equal(null);
      (0, _chai.expect)(empty.dateModified).to.equal(null);
    });
    it("Copy Data", function () {
      var copy = new _.RESTModel({
        _id: "de4e0cd7dd992d9be2f20b42",
        dateCreated: "2018-04-29T12:00:00Z",
        dateModified: "2018-04-29T12:00:00Z"
      });
      (0, _chai.expect)(copy._id).to.equal("de4e0cd7dd992d9be2f20b42");
      (0, _chai.expect)(copy.dateCreated).to.deep.equal((0, _moment.default)("2018-04-29T12:00:00Z"));
      (0, _chai.expect)(copy.dateModified).to.deep.equal((0, _moment.default)("2018-04-29T12:00:00Z"));
    });
  });
  describe("toObject", function () {
    it("Invalid Object", function () {
      var empty = new _.RESTModel({});
      (0, _chai.expect)(empty.toObject()).to.deep.equal(null);
    });
    it("Valid Object", function () {
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
    });
  });
  describe("toString", function () {
    it("Invalid Object", function () {
      var empty = new _.RESTModel({});
      (0, _chai.expect)(empty.toString()).to.deep.equal("null");
    });
    it("Valid Object", function () {
      var copy = new _.RESTModel({
        _id: "de4e0cd7dd992d9be2f20b42",
        dateCreated: "2018-04-29T12:00:00Z",
        dateModified: "2018-04-29T12:00:00Z"
      });
      var json = copy.toString();
      (0, _chai.expect)(json).to.equal('{"_id":"de4e0cd7dd992d9be2f20b42","dateCreated":"2018-04-29T12:00:00Z","dateModified":"2018-04-29T12:00:00Z"}');
    });
  });
  describe("Validation", function () {
    it("Valid", function () {
      var doc = new _.RESTModel({
        _id: "de4e0cd7dd992d9be2f20b42",
        dateCreated: "2018-04-29T12:00:00Z",
        dateModified: "2018-04-29T12:00:00Z"
      });
      (0, _chai.expect)(doc.valid()).to.equal(true);
    });
    it("Missing id", function () {
      var doc = new _.RESTModel({
        dateCreated: "2018-04-29T12:00:00Z",
        dateModified: "2018-04-29T12:00:00Z"
      });
      (0, _chai.expect)(doc.valid()).to.equal(false);
    });
    it("Missing dateCreated", function () {
      var doc = new _.RESTModel({
        _id: "de4e0cd7dd992d9be2f20b42",
        dateModified: "2018-04-29T12:00:00Z"
      });
      (0, _chai.expect)(doc.valid()).to.equal(false);
    });
    it("Missing dateModified", function () {
      var doc = new _.RESTModel({
        _id: "de4e0cd7dd992d9be2f20b42",
        dateCreated: "2018-04-29T12:00:00Z"
      });
      (0, _chai.expect)(doc.valid()).to.equal(false);
    });
  });
  describe("Assign", function () {
    it("Assign to make valid", function () {
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
    });
    it("Assign to make invalid", function () {
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
    });
  });
  describe("isValidId", function () {
    it("Not string", function () {
      return (0, _chai.expect)(_.RESTModel.isValidId(123)).to.equal(false);
    });
    it("Invalid id", function () {
      return (0, _chai.expect)(_.RESTModel.isValidId("INVALID")).to.equal(false);
    });
    it("Valid id", function () {
      return (0, _chai.expect)(_.RESTModel.isValidId("de4e0cd7dd992d9be2f20b42")).to.equal(true);
    });
  });
});