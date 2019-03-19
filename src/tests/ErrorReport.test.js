const { expect } = require("chai");
global["socket.io-client"] = require("socket.io-client");
global.axios = require("axios");
const { ErrorReport } = require("../../dist/index.js");

describe("ErrorReport class", () => {
	it("ModelName exists", () => {
		expect(ErrorReport.ModelName).to.equal("ErrorReport");
	});

	describe("Constructor", () => {
		it("Empty", () => {
			const empty = new ErrorReport({});
			expect(empty.userId).to.equal(undefined);
		});
	});
});
