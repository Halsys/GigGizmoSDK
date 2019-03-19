const { expect } = require("chai");
global["socket.io-client"] = require("socket.io-client");
global.axios = require("axios");
const { Notification, User, RESTModel } = require("../../dist/index.js");

describe("Notification class", () => {
	it("ModelName exists", () => {
		expect(Notification.ModelName).to.equal("Notification");
	});

	describe("Constructor", () => {
		it("Empty", () => {
			const empty = new Notification();
			expect(empty.userId).to.equal(undefined);
			expect(empty.label).to.equal(undefined);
			expect(empty.message).to.equal(undefined);
			expect(empty.actions).to.equal(undefined);
		});
	});
});
