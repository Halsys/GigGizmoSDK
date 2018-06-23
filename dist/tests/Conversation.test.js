(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["chai", "../"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("chai"), require("../"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.chai, global._);
    global.ConversationTest = mod.exports;
  }
})(this, function (_chai, _) {
  "use strict";

  describe("Conversation class", function () {
    it("ModelName exists", function () {
      (0, _chai.expect)(_.Conversation.ModelName).to.equal("Conversation");
    });
    describe("Constructor", function () {
      it("Parse JSON", function () {
        var con = new _.Conversation("{\n\t\t\t\t\"events\": [],\n\t\t\t\t\"users\": []\n\t\t\t}");
        (0, _chai.expect)(con.events).to.be.a("array");
        (0, _chai.expect)(con.users).to.be.a("array");
      });
      it("Empty", function () {
        var empty = new _.Conversation({});
        (0, _chai.expect)(empty.events).to.equal(null);
      });
      it("Copy Data", function () {
        var copy = new _.Conversation({
          events: [],
          users: []
        });
        (0, _chai.expect)(copy.events).to.be.a("array");
        (0, _chai.expect)(copy.users).to.be.a("array");
      });
    });
  });
});