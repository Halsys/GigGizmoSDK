const { expect } = require("chai");
global["socket.io-client"] = require("socket.io-client");
global.axios = require("axios");
const { Conversation, User } = require("../../dist/index.js");

describe("Conversation class", () => {
	it("ModelName exists", () => {
		expect(Conversation.ModelName).to.equal("Conversation");
	});

	describe("Constructor", () => {
		it("Empty", () => {
			const empty = new Conversation();
			expect(empty.events).to.equal(undefined);
		});
	});
});
