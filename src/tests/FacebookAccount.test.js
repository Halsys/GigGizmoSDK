const { expect } = require("chai");
global["socket.io-client"] = require("socket.io-client");
global["axios"] = require("axios");
const { FacebookAccount, User, RESTModel } = require("../../dist/bundle.js");

describe("FacebookAccount class", () => {
  it("ModelName exists", () => {
    expect(FacebookAccount.ModelName).to.equal("FacebookAccount");
  });

  describe("Constructor", () => {
    it("Parse JSON", () => {
      // / Note: Facebook has number id's... or indices?
      const acc = new FacebookAccount(`{
				"userId": "504e0cd7dd992d9be2f20b6f",
				"accountId": 12139127392167393,
				"userAccessToken": "Something",
				"userRefreshToken": "Something"
			}`);
      expect(RESTModel.isValidId(acc.userId)).to.equal(true);
      expect(acc.userId).to.equal("504e0cd7dd992d9be2f20b6f");
      expect(acc.accountId).to.be.a("number");
      expect(acc.accountId).to.equal(12139127392167393);
      expect(acc.userAccessToken).to.be.a("string");
      expect(acc.userAccessToken).to.equal("Something");
      expect(acc.userRefreshToken).to.be.a("string");
      expect(acc.userRefreshToken).to.equal("Something");
    });
    it("Empty", () => {
      const empty = new FacebookAccount({});
      expect(empty.userId).to.equal(null);
    });
    it("Copy Data", () => {
      const acc = new FacebookAccount({
        userId: "504e0cd7dd992d9be2f20b6f",
        accountId: 12139127392167393,
        userAccessToken: "Something",
        userRefreshToken: "Something"
      });
      expect(RESTModel.isValidId(acc.userId)).to.equal(true);
      expect(acc.userId).to.equal("504e0cd7dd992d9be2f20b6f");
      expect(acc.accountId).to.be.a("number");
      expect(acc.accountId).to.equal(12139127392167393);
      expect(acc.userAccessToken).to.be.a("string");
      expect(acc.userAccessToken).to.equal("Something");
      expect(acc.userRefreshToken).to.be.a("string");
      expect(acc.userRefreshToken).to.equal("Something");
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
    const acc = new FacebookAccount({
      userId: "504e0cd7dd992d9be2f20b6f",
      accountId: 12139127392167393,
      userAccessToken: "Something",
      userRefreshToken: "Something"
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
