"use strict";

var _chai = require("chai");

var _ = require("../");

var _this = void 0;

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

describe("FacebookAccount class", function () {
  var _this2 = this;

  _newArrowCheck(this, _this);

  it("ModelName exists", function () {
    _newArrowCheck(this, _this2);

    (0, _chai.expect)(_.FacebookAccount.ModelName).to.equal("FacebookAccount");
  }.bind(this));
  describe("Constructor", function () {
    var _this3 = this;

    _newArrowCheck(this, _this2);

    it("Parse JSON", function () {
      _newArrowCheck(this, _this3);

      // / Note: Facebook has number id's... or indices?
      var acc = new _.FacebookAccount("{\n\t\t\t\t\"userId\": \"504e0cd7dd992d9be2f20b6f\",\n\t\t\t\t\"accountId\": 12139127392167393,\n\t\t\t\t\"userAccessToken\": \"Something\",\n\t\t\t\t\"userRefreshToken\": \"Something\"\n\t\t\t}");
      (0, _chai.expect)(_.RESTModel.isValidId(acc.userId)).to.equal(true);
      (0, _chai.expect)(acc.userId).to.equal("504e0cd7dd992d9be2f20b6f");
      (0, _chai.expect)(acc.accountId).to.be.a("number");
      (0, _chai.expect)(acc.accountId).to.equal(12139127392167393);
      (0, _chai.expect)(acc.userAccessToken).to.be.a("string");
      (0, _chai.expect)(acc.userAccessToken).to.equal("Something");
      (0, _chai.expect)(acc.userRefreshToken).to.be.a("string");
      (0, _chai.expect)(acc.userRefreshToken).to.equal("Something");
    }.bind(this));
    it("Empty", function () {
      _newArrowCheck(this, _this3);

      var empty = new _.FacebookAccount({});
      (0, _chai.expect)(empty.userId).to.equal(null);
    }.bind(this));
    it("Copy Data", function () {
      _newArrowCheck(this, _this3);

      var acc = new _.FacebookAccount({
        userId: "504e0cd7dd992d9be2f20b6f",
        accountId: 12139127392167393,
        userAccessToken: "Something",
        userRefreshToken: "Something"
      });
      (0, _chai.expect)(_.RESTModel.isValidId(acc.userId)).to.equal(true);
      (0, _chai.expect)(acc.userId).to.equal("504e0cd7dd992d9be2f20b6f");
      (0, _chai.expect)(acc.accountId).to.be.a("number");
      (0, _chai.expect)(acc.accountId).to.equal(12139127392167393);
      (0, _chai.expect)(acc.userAccessToken).to.be.a("string");
      (0, _chai.expect)(acc.userAccessToken).to.equal("Something");
      (0, _chai.expect)(acc.userRefreshToken).to.be.a("string");
      (0, _chai.expect)(acc.userRefreshToken).to.equal("Something");
    }.bind(this));
  }.bind(this));
  describe("userIsOwner", function () {
    var _this4 = this;

    _newArrowCheck(this, _this2);

    var basicUser = new _.User({
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
    var acc = new _.FacebookAccount({
      userId: "504e0cd7dd992d9be2f20b6f",
      accountId: 12139127392167393,
      userAccessToken: "Something",
      userRefreshToken: "Something"
    });
    it("valid id string argument", function () {
      _newArrowCheck(this, _this4);

      return (0, _chai.expect)(acc.userIsOwner(basicUser.id)).to.equal(true);
    }.bind(this));
    it("valid user object argument", function () {
      _newArrowCheck(this, _this4);

      return (0, _chai.expect)(acc.userIsOwner(basicUser)).to.equal(true);
    }.bind(this));
    it("pass empty string", function () {
      _newArrowCheck(this, _this4);

      return (0, _chai.expect)(acc.userIsOwner("")).to.equal(false);
    }.bind(this));
    it("pass empty object", function () {
      _newArrowCheck(this, _this4);

      return (0, _chai.expect)(acc.userIsOwner({})).to.equal(false);
    }.bind(this));
    it("pass null", function () {
      _newArrowCheck(this, _this4);

      return (0, _chai.expect)(acc.userIsOwner(null)).to.equal(false);
    }.bind(this));
  }.bind(this));
}.bind(void 0));