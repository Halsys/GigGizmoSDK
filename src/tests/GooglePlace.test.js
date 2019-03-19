const { expect } = require("chai");
global["socket.io-client"] = require("socket.io-client");
global.axios = require("axios");
const { GooglePlace } = require("../../dist/index.js");

describe("GooglePlace class", () => {
	it("ModelName exists", () => {
		expect(GooglePlace.ModelName).to.equal("GooglePlace");
	});

	describe("Constructor", () => {
		it("Empty", () => {
			const empty = new GooglePlace();
			expect(empty.placeId).to.equal(undefined);
			expect(empty.details).to.equal(undefined);
		});
	});
});
