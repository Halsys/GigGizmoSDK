const { expect } = require("chai");
const {
  ModelNameToModel,
  Band,
  Conversation,
  ErrorReport,
  FacebookAccount,
  Gig,
  GooglePlace,
  Location,
  Notification,
  Page,
  Post,
  Request,
  RESTModel,
  TwitterAccount,
  Upload,
  User,
  Venue
} = require("../../dist/bundle.js");

describe("RESTModel class", () => {
  describe("Constructor", () => {
    it("Parse JSON", () => {
      const doc = new RESTModel(`{
			  "_id": "de4e0cd7dd992d9be2f20b42",
			  "dateCreated": "2018-04-29T12:00:00Z",
			  "dateModified": "2018-04-29T12:00:00Z"
			}`);
      expect(doc._id).to.equal("de4e0cd7dd992d9be2f20b42");
      expect(doc.dateCreated.toString()).to.equal(
        new Date("2018-04-29T12:00:00Z").toString()
      );
      expect(doc.dateModified.toString()).to.equal(
        new Date("2018-04-29T12:00:00Z").toString()
      );
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
      expect(copy.dateCreated).to.deep.equal(new Date("2018-04-29T12:00:00Z"));
      expect(copy.dateModified).to.deep.equal(new Date("2018-04-29T12:00:00Z"));
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

  describe("getModelName", () => {
    it("Null", () => {
      expect(RESTModel.getModelName(null)).to.equal(null);
    });
    it("Band", () => {
      expect(RESTModel.getModelName(Band)).to.equal("Band");
    });
    it("Conversation", () => {
      expect(RESTModel.getModelName(Conversation)).to.equal("Conversation");
    });
    it("ErrorReport", () => {
      expect(RESTModel.getModelName(ErrorReport)).to.equal("ErrorReport");
    });
    it("FacebookAccount", () => {
      expect(RESTModel.getModelName(FacebookAccount)).to.equal(
        "FacebookAccount"
      );
    });
    it("Gig", () => {
      expect(RESTModel.getModelName(Gig)).to.equal("Gig");
    });
    it("GooglePlace", () => {
      expect(RESTModel.getModelName(GooglePlace)).to.equal("GooglePlace");
    });
    it("Location", () => {
      expect(RESTModel.getModelName(Location)).to.equal("Location");
    });
    it("Notification", () => {
      expect(RESTModel.getModelName(Notification)).to.equal("Notification");
    });
    it("Page", () => {
      expect(RESTModel.getModelName(Page)).to.equal("Page");
    });
    it("Post", () => {
      expect(RESTModel.getModelName(Post)).to.equal("Post");
    });
    it("Request", () => {
      expect(RESTModel.getModelName(Request)).to.equal("Request");
    });
    it("TwitterAccount", () => {
      expect(RESTModel.getModelName(TwitterAccount)).to.equal("TwitterAccount");
    });
    it("Upload", () => {
      expect(RESTModel.getModelName(Upload)).to.equal("Upload");
    });
    it("User", () => {
      expect(RESTModel.getModelName(User)).to.equal("User");
    });
    it("Venue", () => {
      expect(RESTModel.getModelName(Venue)).to.equal("Venue");
    });
  });
});
