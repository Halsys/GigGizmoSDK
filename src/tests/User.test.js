const { expect } = require("chai");
const moment = require("moment");
const { User } = require("../");

describe("User class", () => {
  it("ModelName exists", () => {
    expect(User.ModelName).to.equal("User");
  });

  describe("Constructor", () => {
    it("Parse JSON", () => {
      const JSONUser = new User(`{
				"firstName": "Basic",
				"middleName": "F",
				"lastName": "User",
				"birthday": "1994-09-04T12:00:00Z",
				"country": "US",
				"email": "user@network.com"
			}`);
      expect(JSONUser.firstName).to.equal("Basic");
      expect(JSONUser.middleName).to.equal("F");
      expect(JSONUser.lastName).to.equal("User");
      expect(JSONUser.birthday.toISOString()).to.equal(
        "1994-09-04T12:00:00.000Z"
      );
      expect(JSONUser.country).to.equal("US");
      expect(JSONUser.email).to.equal("user@network.com");
    });
    it("Empty", () => {
      const emptyUser = new User();
      expect(emptyUser.firstName).to.equal(null);
      expect(emptyUser.middleName).to.equal(null);
      expect(emptyUser.lastName).to.equal(null);
      expect(emptyUser.birthday).to.equal(null);
      expect(emptyUser.country).to.equal(null);
      expect(emptyUser.email).to.equal(null);
    });
    it("Copy Data", () => {
      const basicUser = new User({
        firstName: "Basic",
        middleName: "F",
        lastName: "User",
        birthday: "1994-09-04T12:00:00Z",
        country: "US",
        email: "user@network.com"
      });
      expect(basicUser.firstName).to.equal("Basic");
      expect(basicUser.middleName).to.equal("F");
      expect(basicUser.lastName).to.equal("User");
      expect(basicUser.birthday.toISOString()).to.equal(
        "1994-09-04T12:00:00.000Z"
      );
      expect(basicUser.country).to.equal("US");
      expect(basicUser.email).to.equal("user@network.com");
    });
  });

  describe("Validation", () => {
    const user = new User({
      firstName: "Basic",
      lastName: "User"
    });
    it("Password missing", () => {
      expect(user.validatePassword("").message).to.equal("Password missing");
    });
    it("Password short", () => {
      expect(user.validatePassword("****").message).to.equal(
        "Password is too short"
      );
    });
    it("Password long", () => {
      const tooLong = "*".repeat(257);
      expect(user.validatePassword(tooLong).message).to.equal(
        "Password is too long"
      );
    });
    it("Without number", () => {
      expect(user.validatePassword("Deadbeef").message).to.equal(
        "Password does not have atleast one number"
      );
    });
    it("With firstName", () => {
      expect(user.validatePassword("De@db33fBasic").message).to.equal(
        "Password cannot contain your first name"
      );
    });
    it("With lastName", () => {
      expect(user.validatePassword("De@db33fUser").message).to.equal(
        "Password cannot contain your last name"
      );
    });
    it("Valid password", () => {
      expect(user.validatePassword("De@db33f")).to.equal(null);
    });
  });

  describe("Validation", () => {
    it("Valid", () => {
      const user = new User({
        _id: "504e0cd7dd992d9be2f20b6f",
        dateCreated: "2018-04-29T12:00:00Z",
        dateModified: "2018-04-29T12:00:00Z",
        firstName: "Basic",
        lastName: "User",
        email: "Basic@network.com"
      });
      expect(user.valid()).to.equal(true);
    });
    it("Missing id", () => {
      const user = new User({
        _id: "504e0cd7dd992d9be2f20b6f",
        firstName: "Basic",
        lastName: "User",
        email: "Basic@network.com"
      });
      expect(user.valid()).to.equal(false);
    });
    it("Missing dateCreated", () => {
      const user = new User({
        _id: "504e0cd7dd992d9be2f20b6f",
        dateModified: "2018-04-29T12:00:00Z",
        firstName: "Basic",
        lastName: "User",
        email: "Basic@network.com"
      });
      expect(user.valid()).to.equal(false);
    });
    it("Missing dateModified", () => {
      const user = new User({
        _id: "504e0cd7dd992d9be2f20b6f",
        dateCreated: "2018-04-29T12:00:00Z",
        firstName: "Basic",
        lastName: "User",
        email: "Basic@network.com"
      });
      expect(user.valid()).to.equal(false);
    });
    it("Missing firstName", () => {
      const user = new User({
        _id: "504e0cd7dd992d9be2f20b6f",
        dateCreated: "2018-04-29T12:00:00Z",
        dateModified: "2018-04-29T12:00:00Z",
        lastName: "User",
        email: "Basic@network.com"
      });
      expect(user.valid()).to.equal(false);
    });
    it("Missing lastName", () => {
      const user = new User({
        _id: "504e0cd7dd992d9be2f20b6f",
        dateCreated: "2018-04-29T12:00:00Z",
        dateModified: "2018-04-29T12:00:00Z",
        firstName: "Basic",
        email: "Basic@network.com"
      });
      expect(user.valid()).to.equal(false);
    });
    it("Missing email", () => {
      const user = new User({
        _id: "504e0cd7dd992d9be2f20b6f",
        dateCreated: "2018-04-29T12:00:00Z",
        dateModified: "2018-04-29T12:00:00Z",
        firstName: "Basic",
        lastName: "User"
      });
      expect(user.valid()).to.equal(false);
    });
  });

  describe("User change callback", () => {
    it("Create callback", () => {
      const destructor = User.onChange(() => {});
      expect(destructor).to.be.a("function");
      destructor();
    });
    it("Try callback vaild", () => {
      const destructor = User.onChange(user => {
        expect(user).to.be.a("object");
      });
      expect(destructor).to.be.a("function");
      User.setUser({
        _id: "504e0cd7dd992d9be2f20b6f",
        dateCreated: "2018-04-29T12:00:00Z",
        dateModified: "2018-04-29T12:00:00Z",
        firstName: "Basic",
        lastName: "User",
        email: "Basic@network.com"
      });
      destructor();
    });
    it("Try callback null", () => {
      const destructor = User.onChange(user => {
        expect(user).to.equal(null);
      });
      expect(destructor).to.be.a("function");
      User.setUser(null);
      destructor();
    });
  });

  describe("Get current user", () => {
    it("Valid user", () => {
      User.setUser({
        _id: "504e0cd7dd992d9be2f20b6f",
        dateCreated: "2018-04-29T12:00:00Z",
        dateModified: "2018-04-29T12:00:00Z",
        firstName: "Basic",
        lastName: "User",
        email: "Basic@network.com"
      });
      const promise = User.getUser(false).then(user => {
        expect(user).to.be.a("object");
        expect(user.id).to.be.a("string");
        expect(user.valid()).to.equal(true);
      });
      expect(promise).to.be.a("promise");
    });
    it("Null User", () => {
      User.setUser(null);
      const promise = User.getUser(false).then(user => {
        expect(user).to.equal(null);
      });
      expect(promise).to.be.a("promise");
    });
  });
});
