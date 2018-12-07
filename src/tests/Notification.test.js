const { expect } = require("chai");
global["socket.io-client"] = require("socket.io-client");
global["axios"] = require("axios");
const { Notification, User, RESTModel } = require("../../index.js");

describe("Notification class", () => {
  it("ModelName exists", () => {
    expect(Notification.ModelName).to.equal("Notification");
  });

  describe("Constructor", () => {
    it("Parse JSON", () => {
      const note = new Notification(`{
				"userId": "504e0cd7dd992d9be2f20b6f",
				"message": "Test",
				"label": "Not a notification",
				"actions": [{ "link": "/fake", "label": "Fake" }]
			}`);
      expect(RESTModel.isValidId(note.userId)).to.equal(true);
      expect(note.userId).to.equal("504e0cd7dd992d9be2f20b6f");
      expect(note.message).to.be.a("string");
      expect(note.message).to.equal("Test");
      expect(note.label).to.be.a("string");
      expect(note.label).to.equal("Not a notification");
      expect(note.actions).to.deep.equal([{ link: "/fake", label: "Fake" }]);
    });
    it("Empty", () => {
      const empty = new Notification({});
      expect(empty.userId).to.equal(null);
      expect(empty.label).to.equal(null);
      expect(empty.message).to.equal(null);
      expect(empty.actions).to.equal(null);
    });
    it("Copy Data", () => {
      const note = new Notification({
        userId: "504e0cd7dd992d9be2f20b6f",
        message: "Test",
        label: "Not a notification",
        actions: [{ link: "/fake", label: "Fake" }]
      });
      expect(RESTModel.isValidId(note.userId)).to.equal(true);
      expect(note.userId).to.equal("504e0cd7dd992d9be2f20b6f");
      expect(note.message).to.be.a("string");
      expect(note.message).to.equal("Test");
      expect(note.label).to.be.a("string");
      expect(note.label).to.equal("Not a notification");
      expect(note.actions).to.deep.equal([{ link: "/fake", label: "Fake" }]);
    });
  });
});
