import { expect } from "chai";
import moment from "moment";
import { RESTModel } from "../";

describe("RESTModel class", () => {
  describe("Constructor", () => {
    it("Parse JSON", () => {
      const doc = new RESTModel(`{
			  "_id": "de4e0cd7dd992d9be2f20b42",
			  "dateCreated": "2018-04-29T12:00:00Z",
			  "dateModified": "2018-04-29T12:00:00Z"
			}`);
      expect(doc._id).to.equal("de4e0cd7dd992d9be2f20b42");
      expect(doc.dateCreated).to.deep.equal(moment("2018-04-29T12:00:00Z"));
      expect(doc.dateModified).to.deep.equal(moment("2018-04-29T12:00:00Z"));
    });
    it("Empty", () => {
      const empty = new RESTModel({});
      expect(empty._id).to.equal(null);
      expect(empty.dateCreated).to.equal(null);
      expect(empty.dateModified).to.equal(null);
    });
    it("Copy Data", () => {
      const copy = new RESTModel({
        _id: "de4e0cd7dd992d9be2f20b42",
        dateCreated: "2018-04-29T12:00:00Z",
        dateModified: "2018-04-29T12:00:00Z"
      });
      expect(copy._id).to.equal("de4e0cd7dd992d9be2f20b42");
      expect(copy.dateCreated).to.deep.equal(moment("2018-04-29T12:00:00Z"));
      expect(copy.dateModified).to.deep.equal(moment("2018-04-29T12:00:00Z"));
    });
  });

  describe("toObject", () => {
    it("Invalid Object", () => {
      const empty = new RESTModel({});
      expect(empty.toObject()).to.deep.equal(null);
    });
    it("Valid Object", () => {
      const copy = new RESTModel({
        _id: "de4e0cd7dd992d9be2f20b42",
        dateCreated: "2018-04-29T12:00:00Z",
        dateModified: "2018-04-29T12:00:00Z"
      });
      expect(copy.toObject()).to.deep.equal({
        _id: "de4e0cd7dd992d9be2f20b42",
        dateCreated: "2018-04-29T12:00:00Z",
        dateModified: "2018-04-29T12:00:00Z"
      });
    });
  });

  describe("toString", () => {
    it("Invalid Object", () => {
      const empty = new RESTModel({});
      expect(empty.toString()).to.deep.equal("null");
    });
    it("Valid Object", () => {
      const copy = new RESTModel({
        _id: "de4e0cd7dd992d9be2f20b42",
        dateCreated: "2018-04-29T12:00:00Z",
        dateModified: "2018-04-29T12:00:00Z"
      });
      const json = copy.toString();
      expect(json).to.equal(
        '{"_id":"de4e0cd7dd992d9be2f20b42","dateCreated":"2018-04-29T12:00:00Z","dateModified":"2018-04-29T12:00:00Z"}'
      );
    });
  });

  describe("Validation", () => {
    it("Valid", () => {
      const doc = new RESTModel({
        _id: "de4e0cd7dd992d9be2f20b42",
        dateCreated: "2018-04-29T12:00:00Z",
        dateModified: "2018-04-29T12:00:00Z"
      });
      expect(doc.valid()).to.equal(true);
    });
    it("Missing id", () => {
      const doc = new RESTModel({
        dateCreated: "2018-04-29T12:00:00Z",
        dateModified: "2018-04-29T12:00:00Z"
      });
      expect(doc.valid()).to.equal(false);
    });
    it("Missing dateCreated", () => {
      const doc = new RESTModel({
        _id: "de4e0cd7dd992d9be2f20b42",
        dateModified: "2018-04-29T12:00:00Z"
      });
      expect(doc.valid()).to.equal(false);
    });
    it("Missing dateModified", () => {
      const doc = new RESTModel({
        _id: "de4e0cd7dd992d9be2f20b42",
        dateCreated: "2018-04-29T12:00:00Z"
      });
      expect(doc.valid()).to.equal(false);
    });
  });

  describe("Assign", () => {
    it("Assign to make valid", () => {
      const doc = new RESTModel({
        _id: "de4e0cd7dd992d9be2f20b42",
        dateCreated: "2018-04-29T12:00:00Z",
        dateModified: "2018-04-29T12:00:00Z"
      });
      expect(doc.toObject()).to.deep.equal({
        _id: "de4e0cd7dd992d9be2f20b42",
        dateCreated: "2018-04-29T12:00:00Z",
        dateModified: "2018-04-29T12:00:00Z"
      });
      expect(doc.valid()).to.equal(true);
    });
    it("Assign to make invalid", () => {
      const doc = new RESTModel({
        _id: "de4e0cd7dd992d9be2f20b42",
        dateCreated: "2018-04-29T12:00:00Z",
        dateModified: "2018-04-29T12:00:00Z"
      });
      expect(doc.valid()).to.equal(true);
      doc.assign({ _id: "", dateCreated: "", dateModified: "" });
      expect(doc.valid()).to.equal(false);
    });
  });

  describe("isValidId", () => {
    it("Not string", () => expect(RESTModel.isValidId(123)).to.equal(false));
    it("Invalid id", () =>
      expect(RESTModel.isValidId("INVALID")).to.equal(false));
    it("Valid id", () =>
      expect(RESTModel.isValidId("de4e0cd7dd992d9be2f20b42")).to.equal(true));
  });
});
