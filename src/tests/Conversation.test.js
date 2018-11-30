const { expect } = require("chai");
global["socket.io-client"] = require("socket.io-client");
global["axios"] = require("axios");
const { Conversation, User } = require("../../dist/bundle.js");

describe("Conversation class", () => {
  it("ModelName exists", () => {
    expect(Conversation.ModelName).to.equal("Conversation");
  });

  describe("Constructor", () => {
    it("Parse JSON", () => {
      const con = new Conversation(`{
				"events": [],
				"users": []
			}`);
      expect(con.events).to.be.a("array");
      expect(con.users).to.be.a("array");
    });
    it("Empty", () => {
      const empty = new Conversation({});
      expect(empty.events).to.be.a("array");
    });
    it("Copy Data", () => {
      const copy = new Conversation({
        events: [],
        users: []
      });
      expect(copy.events).to.be.a("array");
      expect(copy.users).to.be.a("array");
    });
  });
});
