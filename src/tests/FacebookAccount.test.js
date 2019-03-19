const { expect } = require("chai");
global["socket.io-client"] = require("socket.io-client");
global.axios = require("axios");
const { FacebookAccount, User } = require("../../dist/index.js");

describe("FacebookAccount class", () => {
	it("ModelName exists", () => {
		expect(FacebookAccount.ModelName).to.equal("FacebookAccount");
	});

	describe("Constructor", () => {
		it("Empty", () => {
			const empty = new FacebookAccount({});
			expect(empty.userId).to.equal(undefined);
		});
	});
	describe("userIsOwner", () => {
		const basicUser = new User({
			_id: "504e0cd7dd992d9be2f20b6f",
			dateCreated: "2018-04-29T12:00:00Z",
			dateModified: "2018-04-29T12:00:00Z",
			firstName: "Basic",
			middleName: "F",
			lastName: "User",
			birthday: "1994-09-04T12:00:00Z",
			country: "US",
			email: "user@network.com",
		});
		const acc = new FacebookAccount({
			userId: "504e0cd7dd992d9be2f20b6f",
			accountId: 12139127392167393,
			userAccessToken: "Something",
			userRefreshToken: "Something",
		});
		it("valid id string argument", () =>
			expect(acc.userIsOwner(basicUser.id)).to.equal(true));
		it("valid user object argument", () =>
			expect(acc.userIsOwner(basicUser)).to.equal(true));
		it("pass empty string", () => expect(acc.userIsOwner("")).to.equal(false));
		it("pass empty object", () => expect(acc.userIsOwner({})).to.equal(false));
		it("pass null", () => expect(acc.userIsOwner(null)).to.equal(false));
	});
});
