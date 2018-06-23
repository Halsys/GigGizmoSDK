"use strict";

var _chai = require("chai");

var _ = require("../");

var _this = void 0;

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

describe("ErrorReport class", function () {
  var _this2 = this;

  _newArrowCheck(this, _this);

  it("ModelName exists", function () {
    _newArrowCheck(this, _this2);

    (0, _chai.expect)(_.ErrorReport.ModelName).to.equal("ErrorReport");
  }.bind(this));
  describe("Constructor", function () {
    var _this3 = this;

    _newArrowCheck(this, _this2);

    it("Parse JSON", function () {
      _newArrowCheck(this, _this3);

      var report = new _.ErrorReport("{\n\t\t\t\t\"userId\": \"504e0cd7dd992d9be2f20b6f\",\n\t\t\t\t\"version\": \"1.0.0\",\n\t\t\t\t\"message\": \"Test\",\n\t\t\t\t\"name\": \"Not an error\"\n\t\t\t}");
      (0, _chai.expect)(_.RESTModel.isValidId(report.userId)).to.equal(true);
      (0, _chai.expect)(report.userId).to.equal("504e0cd7dd992d9be2f20b6f");
      (0, _chai.expect)(report.version).to.be.a("string");
      (0, _chai.expect)(report.version).to.equal("1.0.0");
      (0, _chai.expect)(report.message).to.be.a("string");
      (0, _chai.expect)(report.message).to.equal("Test");
      (0, _chai.expect)(report.name).to.be.a("string");
      (0, _chai.expect)(report.name).to.equal("Not an error");
    }.bind(this));
    it("Empty", function () {
      _newArrowCheck(this, _this3);

      var empty = new _.ErrorReport({});
      (0, _chai.expect)(empty.userId).to.equal(null);
    }.bind(this));
    it("Copy Data", function () {
      _newArrowCheck(this, _this3);

      var copy = new _.ErrorReport({
        userId: "504e0cd7dd992d9be2f20b6f",
        version: "1.0.0",
        message: "Test",
        name: "Not an error"
      });
      (0, _chai.expect)(_.RESTModel.isValidId(copy.userId)).to.equal(true);
      (0, _chai.expect)(copy.userId).to.equal("504e0cd7dd992d9be2f20b6f");
      (0, _chai.expect)(copy.version).to.be.a("string");
      (0, _chai.expect)(copy.version).to.equal("1.0.0");
      (0, _chai.expect)(copy.message).to.be.a("string");
      (0, _chai.expect)(copy.message).to.equal("Test");
      (0, _chai.expect)(copy.name).to.be.a("string");
      (0, _chai.expect)(copy.name).to.equal("Not an error");
    }.bind(this));
  }.bind(this));
}.bind(void 0));