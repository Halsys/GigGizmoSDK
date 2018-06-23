"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _chai = require("chai");

var _moment = _interopRequireDefault(require("moment"));

var _ = require("../");

describe("User class", function () {
  it("ModelName exists", function () {
    (0, _chai.expect)(_.User.ModelName).to.equal("User");
  });
  describe("Constructor", function () {
    it("Parse JSON", function () {
      var JSONUser = new _.User("{\n\t\t\t\t\"firstName\": \"Basic\",\n\t\t\t\t\"middleName\": \"F\",\n\t\t\t\t\"lastName\": \"User\",\n\t\t\t\t\"birthday\": \"1994-09-04T12:00:00Z\",\n\t\t\t\t\"country\": \"US\",\n\t\t\t\t\"email\": \"user@network.com\"\n\t\t\t}");
      (0, _chai.expect)(JSONUser.firstName).to.equal("Basic");
      (0, _chai.expect)(JSONUser.middleName).to.equal("F");
      (0, _chai.expect)(JSONUser.lastName).to.equal("User");
      (0, _chai.expect)(JSONUser.birthday.toISOString()).to.equal("1994-09-04T12:00:00.000Z");
      (0, _chai.expect)(JSONUser.country).to.equal("US");
      (0, _chai.expect)(JSONUser.email).to.equal("user@network.com");
    });
    it("Empty", function () {
      var emptyUser = new _.User();
      (0, _chai.expect)(emptyUser.firstName).to.equal(null);
      (0, _chai.expect)(emptyUser.middleName).to.equal(null);
      (0, _chai.expect)(emptyUser.lastName).to.equal(null);
      (0, _chai.expect)(emptyUser.birthday).to.equal(null);
      (0, _chai.expect)(emptyUser.country).to.equal(null);
      (0, _chai.expect)(emptyUser.email).to.equal(null);
    });
    it("Copy Data", function () {
      var basicUser = new _.User({
        firstName: "Basic",
        middleName: "F",
        lastName: "User",
        birthday: "1994-09-04T12:00:00Z",
        country: "US",
        email: "user@network.com"
      });
      (0, _chai.expect)(basicUser.firstName).to.equal("Basic");
      (0, _chai.expect)(basicUser.middleName).to.equal("F");
      (0, _chai.expect)(basicUser.lastName).to.equal("User");
      (0, _chai.expect)(basicUser.birthday.toISOString()).to.equal("1994-09-04T12:00:00.000Z");
      (0, _chai.expect)(basicUser.country).to.equal("US");
      (0, _chai.expect)(basicUser.email).to.equal("user@network.com");
    });
  });
  describe("Validation", function () {
    var user = new _.User({
      firstName: "Basic",
      lastName: "User"
    });
    it("Password missing", function () {
      (0, _chai.expect)(user.validatePassword("").message).to.equal("Password missing");
    });
    it("Password short", function () {
      (0, _chai.expect)(user.validatePassword("****").message).to.equal("Password is too short");
    });
    it("Password long", function () {
      var tooLong = "*".repeat(257);
      (0, _chai.expect)(user.validatePassword(tooLong).message).to.equal("Password is too long");
    });
    it("Without number", function () {
      (0, _chai.expect)(user.validatePassword("Deadbeef").message).to.equal("Password does not have atleast one number");
    });
    it("With firstName", function () {
      (0, _chai.expect)(user.validatePassword("De@db33fBasic").message).to.equal("Password cannot contain your first name");
    });
    it("With lastName", function () {
      (0, _chai.expect)(user.validatePassword("De@db33fUser").message).to.equal("Password cannot contain your last name");
    });
    it("Valid password", function () {
      (0, _chai.expect)(user.validatePassword("De@db33f")).to.equal(null);
    });
  });
  describe("Validation", function () {
    it("Valid", function () {
      var user = new _.User({
        _id: "504e0cd7dd992d9be2f20b6f",
        dateCreated: "2018-04-29T12:00:00Z",
        dateModified: "2018-04-29T12:00:00Z",
        firstName: "Basic",
        lastName: "User",
        email: "Basic@network.com"
      });
      (0, _chai.expect)(user.valid()).to.equal(true);
    });
    it("Missing id", function () {
      var user = new _.User({
        _id: "504e0cd7dd992d9be2f20b6f",
        firstName: "Basic",
        lastName: "User",
        email: "Basic@network.com"
      });
      (0, _chai.expect)(user.valid()).to.equal(false);
    });
    it("Missing dateCreated", function () {
      var user = new _.User({
        _id: "504e0cd7dd992d9be2f20b6f",
        dateModified: "2018-04-29T12:00:00Z",
        firstName: "Basic",
        lastName: "User",
        email: "Basic@network.com"
      });
      (0, _chai.expect)(user.valid()).to.equal(false);
    });
    it("Missing dateModified", function () {
      var user = new _.User({
        _id: "504e0cd7dd992d9be2f20b6f",
        dateCreated: "2018-04-29T12:00:00Z",
        firstName: "Basic",
        lastName: "User",
        email: "Basic@network.com"
      });
      (0, _chai.expect)(user.valid()).to.equal(false);
    });
    it("Missing firstName", function () {
      var user = new _.User({
        _id: "504e0cd7dd992d9be2f20b6f",
        dateCreated: "2018-04-29T12:00:00Z",
        dateModified: "2018-04-29T12:00:00Z",
        lastName: "User",
        email: "Basic@network.com"
      });
      (0, _chai.expect)(user.valid()).to.equal(false);
    });
    it("Missing lastName", function () {
      var user = new _.User({
        _id: "504e0cd7dd992d9be2f20b6f",
        dateCreated: "2018-04-29T12:00:00Z",
        dateModified: "2018-04-29T12:00:00Z",
        firstName: "Basic",
        email: "Basic@network.com"
      });
      (0, _chai.expect)(user.valid()).to.equal(false);
    });
    it("Missing email", function () {
      var user = new _.User({
        _id: "504e0cd7dd992d9be2f20b6f",
        dateCreated: "2018-04-29T12:00:00Z",
        dateModified: "2018-04-29T12:00:00Z",
        firstName: "Basic",
        lastName: "User"
      });
      (0, _chai.expect)(user.valid()).to.equal(false);
    });
  });
  describe("User change callback", function () {
    it("Create callback", function () {
      var destructor = _.User.onChange(function () {});

      (0, _chai.expect)(destructor).to.be.a("function");
      destructor();
    });
    it("Try callback vaild", function () {
      var destructor = _.User.onChange(function (user) {
        (0, _chai.expect)(user).to.be.a("object");
      });

      (0, _chai.expect)(destructor).to.be.a("function");

      _.User.setUser({
        _id: "504e0cd7dd992d9be2f20b6f",
        dateCreated: "2018-04-29T12:00:00Z",
        dateModified: "2018-04-29T12:00:00Z",
        firstName: "Basic",
        lastName: "User",
        email: "Basic@network.com"
      });

      destructor();
    });
    it("Try callback null", function () {
      var destructor = _.User.onChange(function (user) {
        (0, _chai.expect)(user).to.equal(null);
      });

      (0, _chai.expect)(destructor).to.be.a("function");

      _.User.setUser(null);

      destructor();
    });
  });
  describe("Get current user", function () {
    it("Valid user", function () {
      _.User.setUser({
        _id: "504e0cd7dd992d9be2f20b6f",
        dateCreated: "2018-04-29T12:00:00Z",
        dateModified: "2018-04-29T12:00:00Z",
        firstName: "Basic",
        lastName: "User",
        email: "Basic@network.com"
      });

      var promise = _.User.getUser(false).then(function (user) {
        (0, _chai.expect)(user).to.be.a("object");
        (0, _chai.expect)(user.id).to.be.a("string");
        (0, _chai.expect)(user.valid()).to.equal(true);
      });

      (0, _chai.expect)(promise).to.be.a("promise");
    });
    it("Null User", function () {
      _.User.setUser(null);

      var promise = _.User.getUser(false).then(function (user) {
        (0, _chai.expect)(user).to.equal(null);
      });

      (0, _chai.expect)(promise).to.be.a("promise");
    });
  });
});