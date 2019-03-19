const { expect } = require("chai");
global["socket.io-client"] = require("socket.io-client");
global.axios = require("axios");
const { Page, User, RESTModel } = require("../../dist/index.js");

describe("Page class", () => {
	it("ModelName exists", () => {
		expect(Page.ModelName).to.equal("Page");
	});

	describe("Constructor", () => {
		it("Empty", () => {
			const page = new Page();
			expect(page.data).to.equal(undefined);
			expect(page.metadata).to.equal(undefined);
			expect(page.title).to.equal(undefined);
			expect(page.link).to.equal(undefined);
			expect(page.visits).to.equal(undefined);
			expect(page.revisions).to.equal(undefined);
			expect(page.hide).to.equal(undefined);
			expect(page.blog).to.equal(undefined);
			expect(page.doc).to.equal(undefined);
		});
	});
});
