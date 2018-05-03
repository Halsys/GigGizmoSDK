import moment from "moment";
import { expect } from "chai";
import { Gig, User, RESTModel } from "../";

describe("Gig class", () => {
	it("ModelName exists", () => {
		expect(Gig.ModelName).to.equal("Gig");
	});

	describe("Constructor", () => {
		it("Parse JSON", () => {
			const gig = new Gig(`{
				"startTime": "2018-04-29T12:00:00Z",
				"stopTime": "2018-04-29T14:00:00Z",
				"location": "d7dd992d9be2f20b6f504e0c",
				"venue": "2d9be2f20b6f504e0cd7dd99",
				"band": "f20b6f504e0cd7dd992d9be2"
			}`);
			expect(RESTModel.isValidId(gig.location)).to.equal(true);
			expect(RESTModel.isValidId(gig.venue)).to.equal(true);
			expect(RESTModel.isValidId(gig.band)).to.equal(true);
			expect(gig.location).to.equal("d7dd992d9be2f20b6f504e0c");
			expect(gig.venue).to.equal("2d9be2f20b6f504e0cd7dd99");
			expect(gig.band).to.equal("f20b6f504e0cd7dd992d9be2");
			expect(gig.startTime).to.deep.equal(moment("2018-04-29T12:00:00Z"));
			expect(gig.stopTime).to.deep.equal(moment("2018-04-29T14:00:00Z"));
		});
		it("Empty", () => {
			const empty = new Gig({});
			expect(empty.startTime).to.equal(null);
			expect(empty.stopTime).to.equal(null);
			expect(empty.location).to.equal(null);
			expect(empty.venue).to.equal(null);
			expect(empty.band).to.equal(null);
		});
		it("Copy Data", () => {
			const gig = new Gig({
				startTime: "2018-04-29T12:00:00Z",
				stopTime: "2018-04-29T14:00:00Z",
				location: "d7dd992d9be2f20b6f504e0c",
				venue: "2d9be2f20b6f504e0cd7dd99",
				band: "f20b6f504e0cd7dd992d9be2"
			});
			expect(RESTModel.isValidId(gig.location)).to.equal(true);
			expect(RESTModel.isValidId(gig.venue)).to.equal(true);
			expect(RESTModel.isValidId(gig.band)).to.equal(true);
			expect(gig.location).to.equal("d7dd992d9be2f20b6f504e0c");
			expect(gig.venue).to.equal("2d9be2f20b6f504e0cd7dd99");
			expect(gig.band).to.equal("f20b6f504e0cd7dd992d9be2");
			expect(gig.startTime).to.deep.equal(moment("2018-04-29T12:00:00Z"));
			expect(gig.stopTime).to.deep.equal(moment("2018-04-29T14:00:00Z"));
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
				band: "f20b6f504e0cd7dd992d9be2",
				owners: ["504e0cd7dd992d9be2f20b6f"]
			});
			expect(gig.valid()).to.equal(true);
		});
		it("Missing id", () => {
			const gig = new Gig({
				dateCreated: "2018-04-29T12:00:00Z",
				dateModified: "2018-04-29T12:00:00Z",
				startTime: "2018-04-29T12:00:00Z",
				stopTime: "2018-04-29T14:00:00Z",
				location: "d7dd992d9be2f20b6f504e0c",
				venue: "2d9be2f20b6f504e0cd7dd99",
				band: "f20b6f504e0cd7dd992d9be2",
				owners: ["504e0cd7dd992d9be2f20b6f"]
			});
			expect(gig.valid()).to.equal(false);
		});
		it("Missing dateCreated", () => {
			const gig = new Gig({
				_id: "de4e0cd7dd992d9be2f20b42",
				dateModified: "2018-04-29T12:00:00Z",
				startTime: "2018-04-29T12:00:00Z",
				stopTime: "2018-04-29T14:00:00Z",
				location: "d7dd992d9be2f20b6f504e0c",
				venue: "2d9be2f20b6f504e0cd7dd99",
				band: "f20b6f504e0cd7dd992d9be2",
				owners: ["504e0cd7dd992d9be2f20b6f"]
			});
			expect(gig.valid()).to.equal(false);
		});
		it("Missing dateModified", () => {
			const gig = new Gig({
				_id: "de4e0cd7dd992d9be2f20b42",
				dateCreated: "2018-04-29T12:00:00Z",
				startTime: "2018-04-29T12:00:00Z",
				stopTime: "2018-04-29T14:00:00Z",
				location: "d7dd992d9be2f20b6f504e0c",
				venue: "2d9be2f20b6f504e0cd7dd99",
				band: "f20b6f504e0cd7dd992d9be2",
				owners: ["504e0cd7dd992d9be2f20b6f"]
			});
			expect(gig.valid()).to.equal(false);
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
			email: "user@network.com"
		});
		const gig = new Gig({
			startTime: "2018-04-29T12:00:00Z",
			stopTime: "2018-04-29T14:00:00Z",
			location: "d7dd992d9be2f20b6f504e0c",
			venue: "2d9be2f20b6f504e0cd7dd99",
			band: "f20b6f504e0cd7dd992d9be2",
			owners: ["504e0cd7dd992d9be2f20b6f"]
		});
		it("valid id string argument", () =>
			expect(gig.userIsOwner(basicUser.id)).to.equal(true));
		it("valid user object argument", () =>
			expect(gig.userIsOwner(basicUser)).to.equal(true));
		it("pass empty string", () =>
			expect(gig.userIsOwner("")).to.equal(false));
		it("pass empty object", () =>
			expect(gig.userIsOwner({})).to.equal(false));
		it("pass null", () => expect(gig.userIsOwner(null)).to.equal(false));
	});
});
