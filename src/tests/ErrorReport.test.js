const { expect } = require("chai");
global["socket.io-client"] = require("socket.io-client");
global.axios = require("axios");
const { ErrorReport, User, RESTModel } = require("../../index.js");

describe("ErrorReport class", () => {
  it("ModelName exists", () => {
    expect(ErrorReport.ModelName).to.equal("ErrorReport");
  });

  describe("Constructor", () => {
    it("Parse JSON", () => {
      const report = new ErrorReport(`{
				"userId": "504e0cd7dd992d9be2f20b6f",
				"version": "1.0.0",
				"message": "Test",
				"name": "Not an error"
			}`);
      expect(RESTModel.isValidId(report.userId)).to.equal(true);
      expect(report.userId).to.equal("504e0cd7dd992d9be2f20b6f");
      expect(report.version).to.be.a("string");
      expect(report.version).to.equal("1.0.0");
      expect(report.message).to.be.a("string");
      expect(report.message).to.equal("Test");
      expect(report.name).to.be.a("string");
      expect(report.name).to.equal("Not an error");
    });
    it("Empty", () => {
      const empty = new ErrorReport({});
      expect(empty.userId).to.equal(null);
    });
    it("Copy Data", () => {
      const copy = new ErrorReport({
        userId: "504e0cd7dd992d9be2f20b6f",
        version: "1.0.0",
        message: "Test",
        name: "Not an error",
      });
      expect(RESTModel.isValidId(copy.userId)).to.equal(true);
      expect(copy.userId).to.equal("504e0cd7dd992d9be2f20b6f");
      expect(copy.version).to.be.a("string");
      expect(copy.version).to.equal("1.0.0");
      expect(copy.message).to.be.a("string");
      expect(copy.message).to.equal("Test");
      expect(copy.name).to.be.a("string");
      expect(copy.name).to.equal("Not an error");
    });
  });
});
