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
    global.ErrorReportTest = mod.exports;
  }
})(this, function (_chai, _) {
  "use strict";

  describe("ErrorReport class", function () {
    it("ModelName exists", function () {
      (0, _chai.expect)(_.ErrorReport.ModelName).to.equal("ErrorReport");
    });
    describe("Constructor", function () {
      it("Parse JSON", function () {
        var report = new _.ErrorReport("{\n\t\t\t\t\"userId\": \"504e0cd7dd992d9be2f20b6f\",\n\t\t\t\t\"version\": \"1.0.0\",\n\t\t\t\t\"message\": \"Test\",\n\t\t\t\t\"name\": \"Not an error\"\n\t\t\t}");
        (0, _chai.expect)(_.RESTModel.isValidId(report.userId)).to.equal(true);
        (0, _chai.expect)(report.userId).to.equal("504e0cd7dd992d9be2f20b6f");
        (0, _chai.expect)(report.version).to.be.a("string");
        (0, _chai.expect)(report.version).to.equal("1.0.0");
        (0, _chai.expect)(report.message).to.be.a("string");
        (0, _chai.expect)(report.message).to.equal("Test");
        (0, _chai.expect)(report.name).to.be.a("string");
        (0, _chai.expect)(report.name).to.equal("Not an error");
      });
      it("Empty", function () {
        var empty = new _.ErrorReport({});
        (0, _chai.expect)(empty.userId).to.equal(null);
      });
      it("Copy Data", function () {
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
      });
    });
  });
});