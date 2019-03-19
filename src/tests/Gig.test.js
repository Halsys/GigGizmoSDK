const { expect } = require("chai");
global["socket.io-client"] = require("socket.io-client");
global.axios = require("axios");
const { Gig, User } = require("../../dist/index.js");

describe("Gig class", () => {
	it("ModelName exists", () => {
		expect(Gig.ModelName).to.equal("Gig");
	});

	describe("Constructor", () => {
		it("Empty", () => {
			const empty = new Gig();
			expect(empty.startTime).to.equal(undefined);
			expect(empty.stopTime).to.equal(undefined);
			expect(empty.location).to.equal(undefined);
			expect(empty.venue).to.equal(undefined);
			expect(empty.bands).to.equal(undefined);
		});
	});

	describe("Validation", () => {
		it("Valid", () => {
			const gig = new Gig({
				_id: "de4e0cd7dd992d9be2f20b42",
				dateCreated: "2018-04-29T12:00:00Z",
				dateModified: "2018-04-29T12:00:00Z",
				startTime: "2018-04-29T12:00:00Z",
				stopTime: "2018-04-29T14:00:00Z",
				location: "d7dd992d9be2f20b6f504e0c",
				venue: "2d9be2f20b6f504e0cd7dd99",
				bands: ["f20b6f504e0cd7dd992d9be2"],
				owners: ["504e0cd7dd992d9be2f20b6f"],
			});
			expect(gig.isValid()).to.equal(true);
		});
		it("Missing id", () => {
			const gig = new Gig({
				dateCreated: "2018-04-29T12:00:00Z",
				dateModified: "2018-04-29T12:00:00Z",
				startTime: "2018-04-29T12:00:00Z",
				stopTime: "2018-04-29T14:00:00Z",
				location: "d7dd992d9be2f20b6f504e0c",
				venue: "2d9be2f20b6f504e0cd7dd99",
				bands: ["f20b6f504e0cd7dd992d9be2"],
				owners: ["504e0cd7dd992d9be2f20b6f"],
			});
			expect(gig.isValid()).to.equal(false);
		});
		it("Missing dateCreated", () => {
			const gig = new Gig({
				_id: "de4e0cd7dd992d9be2f20b42",
				dateModified: "2018-04-29T12:00:00Z",
				startTime: "2018-04-29T12:00:00Z",
				stopTime: "2018-04-29T14:00:00Z",
				location: "d7dd992d9be2f20b6f504e0c",
				venue: "2d9be2f20b6f504e0cd7dd99",
				bands: ["f20b6f504e0cd7dd992d9be2"],
				owners: ["504e0cd7dd992d9be2f20b6f"],
			});
			expect(gig.isValid()).to.equal(false);
		});
		it("Missing dateModified", () => {
			const gig = new Gig({
				_id: "de4e0cd7dd992d9be2f20b42",
				dateCreated: "2018-04-29T12:00:00Z",
				startTime: "2018-04-29T12:00:00Z",
				stopTime: "2018-04-29T14:00:00Z",
				location: "d7dd992d9be2f20b6f504e0c",
				venue: "2d9be2f20b6f504e0cd7dd99",
				bands: ["f20b6f504e0cd7dd992d9be2"],
				owners: ["504e0cd7dd992d9be2f20b6f"],
			});
			expect(gig.isValid()).to.equal(false);
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
		const gig = new Gig({
			startTime: "2018-04-29T12:00:00Z",
			stopTime: "2018-04-29T14:00:00Z",
			location: "d7dd992d9be2f20b6f504e0c",
			venue: "2d9be2f20b6f504e0cd7dd99",
			bands: ["f20b6f504e0cd7dd992d9be2"],
			owners: ["504e0cd7dd992d9be2f20b6f"],
		});
		it("valid id string argument", () =>
			expect(gig.userIsOwner(basicUser.id)).to.equal(true));
		it("valid user object argument", () =>
			expect(gig.userIsOwner(basicUser)).to.equal(true));
		it("pass empty string", () => expect(gig.userIsOwner("")).to.equal(false));
		it("pass empty object", () => expect(gig.userIsOwner({})).to.equal(false));
		it("pass null", () => expect(gig.userIsOwner(null)).to.equal(false));
	});
});
