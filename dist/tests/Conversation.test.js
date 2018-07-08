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

  var _this = void 0;

  function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

  describe("Conversation class", function () {
    var _this2 = this;

    _newArrowCheck(this, _this);

    it("ModelName exists", function () {
      _newArrowCheck(this, _this2);

      (0, _chai.expect)(_.Conversation.ModelName).to.equal("Conversation");
    }.bind(this));
    describe("Constructor", function () {
      var _this3 = this;

      _newArrowCheck(this, _this2);

      it("Parse JSON", function () {
        _newArrowCheck(this, _this3);

        var con = new _.Conversation("{\n\t\t\t\t\"events\": [],\n\t\t\t\t\"users\": []\n\t\t\t}");
        (0, _chai.expect)(con.events).to.be.a("array");
        (0, _chai.expect)(con.users).to.be.a("array");
      }.bind(this));
      it("Empty", function () {
        _newArrowCheck(this, _this3);

        var empty = new _.Conversation({});
        (0, _chai.expect)(empty.events).to.equal(null);
      }.bind(this));
      it("Copy Data", function () {
        _newArrowCheck(this, _this3);

        var copy = new _.Conversation({
          events: [],
          users: []
        });
        (0, _chai.expect)(copy.events).to.be.a("array");
        (0, _chai.expect)(copy.users).to.be.a("array");
      }.bind(this));
    }.bind(this));
  }.bind(void 0));
});