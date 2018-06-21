"use strict";

var _chai = require("chai");

var _ = require("../");

var _this = void 0;

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

describe("Notification class", function () {
  var _this2 = this;

  _newArrowCheck(this, _this);

  it("ModelName exists", function () {
    _newArrowCheck(this, _this2);

    (0, _chai.expect)(_.Notification.ModelName).to.equal("Notification");
  }.bind(this));
  describe("Constructor", function () {
    var _this3 = this;

    _newArrowCheck(this, _this2);

    it("Parse JSON", function () {
      _newArrowCheck(this, _this3);

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
    }.bind(this));
    it("Empty", function () {
      _newArrowCheck(this, _this3);

      var empty = new _.Notification({});
      (0, _chai.expect)(empty.userId).to.equal(null);
      (0, _chai.expect)(empty.label).to.equal(null);
      (0, _chai.expect)(empty.message).to.equal(null);
      (0, _chai.expect)(empty.actions).to.equal(null);
    }.bind(this));
    it("Copy Data", function () {
      _newArrowCheck(this, _this3);

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
    }.bind(this));
  }.bind(this));
}.bind(void 0));