const { expect } = require("chai");
global["socket.io-client"] = require("socket.io-client");
global.axios = require("axios");
const {
	ModelNameToModel,
	Band,
	Conversation,
	ErrorReport,
	FacebookAccount,
	Gig,
	GooglePlace,
	Location,
	Notification,
	Page,
	Post,
	Request,
	ModelClass,
	TwitterAccount,
	Upload,
	User,
	Venue,
} = require("../../dist/index.js");

ModelClassKeys = ["ModelName, _id, dateCreated, dateModified"];

describe("ModelClass class", () => {
	describe("Constructor", () => {
		it("Empty", () => {
			const empty = new ModelClass(ModelClassKeys);
			expect(empty._id).to.equal(undefined);
			expect(empty.dateCreated).to.equal(undefined);
			expect(empty.dateModified).to.equal(undefined);
		});
	});

	describe("toObject", () => {
		it("Invalid Object", () => {
			const empty = new ModelClass(ModelClassKeys);
			expect(empty.toObject()).to.equal(null);
		});
		it("Valid Object", () => {
			const copy = new ModelClass(ModelClassKeys, {
				_id: "de4e0cd7dd992d9be2f20b42",
				dateCreated: "2018-04-29T12:00:00Z",
				dateModified: "2018-04-29T12:00:00Z",
			});
			expect(copy.toObject()).to.deep.equal({
				_id: "de4e0cd7dd992d9be2f20b42",
				dateCreated: "2018-04-29T12:00:00Z",
				dateModified: "2018-04-29T12:00:00Z",
			});
		});
	});

	describe("toString", () => {
		it("Invalid Object", () => {
			const empty = new ModelClass(ModelClassKeys);
			expect(empty.toString()).to.equal(`null`);
		});
		it("Valid Object", () => {
			const copy = new ModelClass(ModelClassKeys, {
				_id: "de4e0cd7dd992d9be2f20b42",
				dateCreated: "2018-04-29T12:00:00Z",
				dateModified: "2018-04-29T12:00:00Z",
			});
			const json = copy.toString();
			expect(json).to.equal(
				'{"_id":"de4e0cd7dd992d9be2f20b42","dateCreated":"2018-04-29T12:00:00Z","dateModified":"2018-04-29T12:00:00Z"}',
			);
		});
	});

	describe("Validation", () => {
		it("Valid", () => {
			const doc = new ModelClass(ModelClassKeys, {
				_id: "de4e0cd7dd992d9be2f20b42",
				dateCreated: "2018-04-29T12:00:00Z",
				dateModified: "2018-04-29T12:00:00Z",
			});
			expect(doc.isValid()).to.equal(true);
		});
		it("Missing id", () => {
			const doc = new ModelClass(ModelClassKeys, {
				dateCreated: "2018-04-29T12:00:00Z",
				dateModified: "2018-04-29T12:00:00Z",
			});
			expect(doc.isValid()).to.equal(false);
		});
		it("Missing dateCreated", () => {
			const doc = new ModelClass(ModelClassKeys, {
				_id: "de4e0cd7dd992d9be2f20b42",
				dateModified: "2018-04-29T12:00:00Z",
			});
			expect(doc.isValid()).to.equal(false);
		});
		it("Missing dateModified", () => {
			const doc = new ModelClass(ModelClassKeys, {
				_id: "de4e0cd7dd992d9be2f20b42",
				dateCreated: "2018-04-29T12:00:00Z",
			});
			expect(doc.isValid()).to.equal(false);
		});
	});

	describe("Assign", () => {
		it("Assign to make valid", () => {
			const doc = new ModelClass(ModelClassKeys, {
				_id: "de4e0cd7dd992d9be2f20b42",
				dateCreated: "2018-04-29T12:00:00Z",
				dateModified: "2018-04-29T12:00:00Z",
			});
			expect(doc.toObject()).to.deep.equal({
				_id: "de4e0cd7dd992d9be2f20b42",
				dateCreated: "2018-04-29T12:00:00Z",
				dateModified: "2018-04-29T12:00:00Z",
			});
			expect(doc.isValid()).to.equal(true);
		});
		it("Assign to make invalid", () => {
			const doc = new ModelClass(ModelClassKeys, {
				_id: "de4e0cd7dd992d9be2f20b42",
				dateCreated: "2018-04-29T12:00:00Z",
				dateModified: "2018-04-29T12:00:00Z",
			});
			expect(doc.isValid()).to.equal(true);
			doc.assign({ _id: "null", dateCreated: "null", dateModified: "null" });
			expect(doc.isValid()).to.equal(false);
		});
	});

	describe("isValidId", () => {
		it("Not string", () => expect(ModelClass.isValidId(123)).to.equal(false));
		it("Invalid id", () =>
			expect(ModelClass.isValidId("INVALID")).to.equal(false));
		it("Valid id", () =>
			expect(ModelClass.isValidId("de4e0cd7dd992d9be2f20b42")).to.equal(true));
	});

	describe("getModelName", () => {
		it("Null", () => {
			expect(ModelClass.getModelName(null)).to.equal("");
		});
		it("Band", () => {
			expect(ModelClass.getModelName(Band)).to.equal("Band");
		});
		it("Conversation", () => {
			expect(ModelClass.getModelName(Conversation)).to.equal("Conversation");
		});
		it("ErrorReport", () => {
			expect(ModelClass.getModelName(ErrorReport)).to.equal("ErrorReport");
		});
		it("FacebookAccount", () => {
			expect(ModelClass.getModelName(FacebookAccount)).to.equal(
				"FacebookAccount",
			);
		});
		it("Gig", () => {
			expect(ModelClass.getModelName(Gig)).to.equal("Gig");
		});
		it("GooglePlace", () => {
			expect(ModelClass.getModelName(GooglePlace)).to.equal("GooglePlace");
		});
		it("Location", () => {
			expect(ModelClass.getModelName(Location)).to.equal("Location");
		});
		it("Notification", () => {
			expect(ModelClass.getModelName(Notification)).to.equal("Notification");
		});
		it("Page", () => {
			expect(ModelClass.getModelName(Page)).to.equal("Page");
		});
		it("Post", () => {
			expect(ModelClass.getModelName(Post)).to.equal("Post");
		});
		it("Request", () => {
			expect(ModelClass.getModelName(Request)).to.equal("Request");
		});
		it("TwitterAccount", () => {
			expect(ModelClass.getModelName(TwitterAccount)).to.equal("TwitterAccount");
		});
		it("Upload", () => {
			expect(ModelClass.getModelName(Upload)).to.equal("Upload");
		});
		it("User", () => {
			expect(ModelClass.getModelName(User)).to.equal("User");
		});
		it("Venue", () => {
			expect(ModelClass.getModelName(Venue)).to.equal("Venue");
		});
	});
});
