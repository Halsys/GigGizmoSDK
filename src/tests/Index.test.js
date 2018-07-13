const { expect } = require("chai");
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
	RESTModel,
	TwitterAccount,
	Upload,
	User,
	Venue
} = require("../index");

describe("ModelNameToModel", () => {
	it("Null", () => {
		const Model = ModelNameToModel();
		expect(Model).to.equal(null);
	});
	it("Band", () => {
		const Model = ModelNameToModel("Band");
		expect(Model).to.equal(Band);
	});
	it("Conversation", () => {
		const Model = ModelNameToModel("Conversation");
		expect(Model).to.equal(Conversation);
	});
	it("ErrorReport", () => {
		const Model = ModelNameToModel("ErrorReport");
		expect(Model).to.equal(ErrorReport);
	});
	it("FacebookAccount", () => {
		const Model = ModelNameToModel("FacebookAccount");
		expect(Model).to.equal(FacebookAccount);
	});
	it("Gig", () => {
		const Model = ModelNameToModel("Gig");
		expect(Model).to.equal(Gig);
	});
	it("GooglePlace", () => {
		const Model = ModelNameToModel("GooglePlace");
		expect(Model).to.equal(GooglePlace);
	});
	it("Location", () => {
		const Model = ModelNameToModel("Location");
		expect(Model).to.equal(Location);
	});
	it("Notification", () => {
		const Model = ModelNameToModel("Notification");
		expect(Model).to.equal(Notification);
	});
	it("Page", () => {
		const Model = ModelNameToModel("Page");
		expect(Model).to.equal(Page);
	});
	it("Post", () => {
		const Model = ModelNameToModel("Post");
		expect(Model).to.equal(Post);
	});
	it("Request", () => {
		const Model = ModelNameToModel("Request");
		expect(Model).to.equal(Request);
	});
	it("TwitterAccount", () => {
		const Model = ModelNameToModel("TwitterAccount");
		expect(Model).to.equal(TwitterAccount);
	});
	it("Upload", () => {
		const Model = ModelNameToModel("Upload");
		expect(Model).to.equal(Upload);
	});
	it("User", () => {
		const Model = ModelNameToModel("User");
		expect(Model).to.equal(User);
	});
	it("Venue", () => {
		const Model = ModelNameToModel("Venue");
		expect(Model).to.equal(Venue);
	});
});
