"use strict";

var _chai = require("chai");

var _ = require("../");

describe("Notification class", function () {
  it("ModelName exists", function () {
    (0, _chai.expect)(_.Notification.ModelName).to.equal("Notification");
  });
  describe("Constructor", function () {
    it("Parse JSON", function () {
      var note = new _.Notification("{\n\t\t\t\t\"userId\": \"504e0cd7dd992d9be2f20b6f\",\n\t\t\t\t\"message\": \"Test\",\n\t\t\t\t\"label\": \"Not a notification\",\n\t\t\t\t\"actions\": [{ \"link\": \"/fake\", \"label\": \"Fake\" }]\n\t\t\t}");
      (0, _chai.expect)(_.RESTModel.isValidId(note.userId)).to.equal(true);
      (0, _chai.expect)(note.userId).to.equal("504e0cd7dd992d9be2f20b6f");
      (0, _chai.expect)(note.message).to.be.a("string");
      (0, _chai.expect)(note.message).to.equal("Test");
      (0, _chai.expect)(note.label).to.be.a("string");
      (0, _chai.expect)(note.label).to.equal("Not a notification");
      (0, _chai.expect)(note.actions).to.deep.equal([{
        link: "/fake",
        label: "Fake"
      }]);
    });
    it("Empty", function () {
      var empty = new _.Notification({});
      (0, _chai.expect)(empty.userId).to.equal(null);
      (0, _chai.expect)(empty.label).to.equal(null);
      (0, _chai.expect)(empty.message).to.equal(null);
      (0, _chai.expect)(empty.actions).to.equal(null);
    });
    it("Copy Data", function () {
      var note = new _.Notification({
        userId: "504e0cd7dd992d9be2f20b6f",
        message: "Test",
        label: "Not a notification",
        actions: [{
          link: "/fake",
          label: "Fake"
        }]
      });
      (0, _chai.expect)(_.RESTModel.isValidId(note.userId)).to.equal(true);
      (0, _chai.expect)(note.userId).to.equal("504e0cd7dd992d9be2f20b6f");
      (0, _chai.expect)(note.message).to.be.a("string");
      (0, _chai.expect)(note.message).to.equal("Test");
      (0, _chai.expect)(note.label).to.be.a("string");
      (0, _chai.expect)(note.label).to.equal("Not a notification");
      (0, _chai.expect)(note.actions).to.deep.equal([{
        link: "/fake",
        label: "Fake"
      }]);
    });
  });
});