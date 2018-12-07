const { expect } = require("chai");
global["socket.io-client"] = require("socket.io-client");
global["axios"] = require("axios");
const GigGizmoSDK = require("../../index.js");
const {
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
  TwitterAccount,
  Upload,
  User,
  Venue
} = GigGizmoSDK;
const ModelNameToModel = GigGizmoSDK.ModelNameToModel;

describe("Isomorphic", () => {
  it("Export not null", () => {
    expect(GigGizmoSDK).to.not.equal(null);
  });
  it("Global not null", () => {
    expect(global.GigGizmoSDK).to.not.equal(null);
  });
});

describe("ModelNameToModel", () => {
  it("Null", async () => {
    expect(await ModelNameToModel(null)).to.equal(null);
  });
  it("Band", async () => {
    expect(await ModelNameToModel("Band")).to.equal(Band);
  });
  it("Conversation", async () => {
    expect(await ModelNameToModel("Conversation")).to.equal(Conversation);
  });
  it("ErrorReport", async () => {
    expect(await ModelNameToModel("ErrorReport")).to.equal(ErrorReport);
  });
  it("FacebookAccount", async () => {
    expect(await ModelNameToModel(
      "FacebookAccount"
    )).to.equal(FacebookAccount);
  });
  it("Gig", async () => {
    expect(await ModelNameToModel("Gig")).to.equal(Gig);
  });
  it("GooglePlace", async () => {
    expect(await ModelNameToModel("GooglePlace")).to.equal(GooglePlace);
  });
  it("Location", async () => {
    expect(await ModelNameToModel("Location")).to.equal(Location);
  });
  it("Notification", async () => {
    expect(await ModelNameToModel("Notification")).to.equal(Notification);
  });
  it("Page", async () => {
    expect(await ModelNameToModel("Page")).to.equal(Page);
  });
  it("Post", async () => {
    expect(await ModelNameToModel("Post")).to.equal(Post);
  });
  it("Request", async () => {
    expect(await ModelNameToModel("Request")).to.equal(Request);
  });
  it("TwitterAccount", async () => {
    expect(await ModelNameToModel("TwitterAccount")).to.equal(TwitterAccount);
  });
  it("Upload", async () => {
    expect(await ModelNameToModel("Upload")).to.equal(Upload);
  });
  it("User", async () => {
    expect(await ModelNameToModel("User")).to.equal(User);
  });
  it("Venue", async () => {
    expect(await ModelNameToModel("Venue")).to.equal(Venue);
  });
});
