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
} = require("../../../dist/bundle.js");

describe("ModelNameToModel", () => {
  it("Null", async () => {
    const Model = await ModelNameToModel();
    expect(Model).to.equal(null);
  });
  it("Band", async () => {
    const Model = await ModelNameToModel("Band");
    expect(Model).to.equal(Band);
  });
  it("Conversation", async () => {
    const Model = await ModelNameToModel("Conversation");
    expect(Model).to.equal(Conversation);
  });
  it("ErrorReport", async () => {
    const Model = await ModelNameToModel("ErrorReport");
    expect(Model).to.equal(ErrorReport);
  });
  it("FacebookAccount", async () => {
    const Model = await ModelNameToModel("FacebookAccount");
    expect(Model).to.equal(FacebookAccount);
  });
  it("Gig", async () => {
    const Model = await ModelNameToModel("Gig");
    expect(Model).to.equal(Gig);
  });
  it("GooglePlace", async () => {
    const Model = await ModelNameToModel("GooglePlace");
    expect(Model).to.equal(GooglePlace);
  });
  it("Location", async () => {
    const Model = await ModelNameToModel("Location");
    expect(Model).to.equal(Location);
  });
  it("Notification", async () => {
    const Model = await ModelNameToModel("Notification");
    expect(Model).to.equal(Notification);
  });
  it("Page", async () => {
    const Model = await ModelNameToModel("Page");
    expect(Model).to.equal(Page);
  });
  it("Post", async () => {
    const Model = await ModelNameToModel("Post");
    expect(Model).to.equal(Post);
  });
  it("Request", async () => {
    const Model = await ModelNameToModel("Request");
    expect(Model).to.equal(Request);
  });
  it("TwitterAccount", async () => {
    const Model = await ModelNameToModel("TwitterAccount");
    expect(Model).to.equal(TwitterAccount);
  });
  it("Upload", async () => {
    const Model = await ModelNameToModel("Upload");
    expect(Model).to.equal(Upload);
  });
  it("User", async () => {
    const Model = await ModelNameToModel("User");
    expect(Model).to.equal(User);
  });
  it("Venue", async () => {
    const Model = await ModelNameToModel("Venue");
    expect(Model).to.equal(Venue);
  });
});
