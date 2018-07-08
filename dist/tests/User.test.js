(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["chai", "moment", "../"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("chai"), require("moment"), require("../"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.chai, global.moment, global._);
    global.UserTest = mod.exports;
  }
})(this, function (_chai, _moment, _) {
  "use strict";

  _moment = _interopRequireDefault(_moment);

  var _this = void 0;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

  describe("User class", function () {
    var _this2 = this;

    _newArrowCheck(this, _this);

    it("ModelName exists", function () {
      _newArrowCheck(this, _this2);

      (0, _chai.expect)(_.User.ModelName).to.equal("User");
    }.bind(this));
    describe("Constructor", function () {
      var _this3 = this;

      _newArrowCheck(this, _this2);

      it("Parse JSON", function () {
        _newArrowCheck(this, _this3);

        var JSONUser = new _.User("{\n\t\t\t\t\"firstName\": \"Basic\",\n\t\t\t\t\"middleName\": \"F\",\n\t\t\t\t\"lastName\": \"User\",\n\t\t\t\t\"birthday\": \"1994-09-04T12:00:00Z\",\n\t\t\t\t\"country\": \"US\",\n\t\t\t\t\"email\": \"user@network.com\"\n\t\t\t}");
        (0, _chai.expect)(JSONUser.firstName).to.equal("Basic");
        (0, _chai.expect)(JSONUser.middleName).to.equal("F");
        (0, _chai.expect)(JSONUser.lastName).to.equal("User");
        (0, _chai.expect)(JSONUser.birthday.toISOString()).to.equal("1994-09-04T12:00:00.000Z");
        (0, _chai.expect)(JSONUser.country).to.equal("US");
        (0, _chai.expect)(JSONUser.email).to.equal("user@network.com");
      }.bind(this));
      it("Empty", function () {
        _newArrowCheck(this, _this3);

        var emptyUser = new _.User();
        (0, _chai.expect)(emptyUser.firstName).to.equal(null);
        (0, _chai.expect)(emptyUser.middleName).to.equal(null);
        (0, _chai.expect)(emptyUser.lastName).to.equal(null);
        (0, _chai.expect)(emptyUser.birthday).to.equal(null);
        (0, _chai.expect)(emptyUser.country).to.equal(null);
        (0, _chai.expect)(emptyUser.email).to.equal(null);
      }.bind(this));
      it("Copy Data", function () {
        _newArrowCheck(this, _this3);

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
      }.bind(this));
    }.bind(this));
    describe("Validation", function () {
      var _this4 = this;

      _newArrowCheck(this, _this2);

      var user = new _.User({
        firstName: "Basic",
        lastName: "User"
      });
      it("Password missing", function () {
        _newArrowCheck(this, _this4);

        (0, _chai.expect)(user.validatePassword("").message).to.equal("Password missing");
      }.bind(this));
      it("Password short", function () {
        _newArrowCheck(this, _this4);

        (0, _chai.expect)(user.validatePassword("****").message).to.equal("Password is too short");
      }.bind(this));
      it("Password long", function () {
        _newArrowCheck(this, _this4);

        var tooLong = "*".repeat(257);
        (0, _chai.expect)(user.validatePassword(tooLong).message).to.equal("Password is too long");
      }.bind(this));
      it("Without number", function () {
        _newArrowCheck(this, _this4);

        (0, _chai.expect)(user.validatePassword("Deadbeef").message).to.equal("Password does not have atleast one number");
      }.bind(this));
      it("With firstName", function () {
        _newArrowCheck(this, _this4);

        (0, _chai.expect)(user.validatePassword("De@db33fBasic").message).to.equal("Password cannot contain your first name");
      }.bind(this));
      it("With lastName", function () {
        _newArrowCheck(this, _this4);

        (0, _chai.expect)(user.validatePassword("De@db33fUser").message).to.equal("Password cannot contain your last name");
      }.bind(this));
      it("Valid password", function () {
        _newArrowCheck(this, _this4);

        (0, _chai.expect)(user.validatePassword("De@db33f")).to.equal(null);
      }.bind(this));
    }.bind(this));
    describe("Validation", function () {
      var _this5 = this;

      _newArrowCheck(this, _this2);

      it("Valid", function () {
        _newArrowCheck(this, _this5);

        var user = new _.User({
          _id: "504e0cd7dd992d9be2f20b6f",
          dateCreated: "2018-04-29T12:00:00Z",
          dateModified: "2018-04-29T12:00:00Z",
          firstName: "Basic",
          lastName: "User",
          email: "Basic@network.com"
        });
        (0, _chai.expect)(user.valid()).to.equal(true);
      }.bind(this));
      it("Missing id", function () {
        _newArrowCheck(this, _this5);

        var user = new _.User({
          _id: "504e0cd7dd992d9be2f20b6f",
          firstName: "Basic",
          lastName: "User",
          email: "Basic@network.com"
        });
        (0, _chai.expect)(user.valid()).to.equal(false);
      }.bind(this));
      it("Missing dateCreated", function () {
        _newArrowCheck(this, _this5);

        var user = new _.User({
          _id: "504e0cd7dd992d9be2f20b6f",
          dateModified: "2018-04-29T12:00:00Z",
          firstName: "Basic",
          lastName: "User",
          email: "Basic@network.com"
        });
        (0, _chai.expect)(user.valid()).to.equal(false);
      }.bind(this));
      it("Missing dateModified", function () {
        _newArrowCheck(this, _this5);

        var user = new _.User({
          _id: "504e0cd7dd992d9be2f20b6f",
          dateCreated: "2018-04-29T12:00:00Z",
          firstName: "Basic",
          lastName: "User",
          email: "Basic@network.com"
        });
        (0, _chai.expect)(user.valid()).to.equal(false);
      }.bind(this));
      it("Missing firstName", function () {
        _newArrowCheck(this, _this5);

        var user = new _.User({
          _id: "504e0cd7dd992d9be2f20b6f",
          dateCreated: "2018-04-29T12:00:00Z",
          dateModified: "2018-04-29T12:00:00Z",
          lastName: "User",
          email: "Basic@network.com"
        });
        (0, _chai.expect)(user.valid()).to.equal(false);
      }.bind(this));
      it("Missing lastName", function () {
        _newArrowCheck(this, _this5);

        var user = new _.User({
          _id: "504e0cd7dd992d9be2f20b6f",
          dateCreated: "2018-04-29T12:00:00Z",
          dateModified: "2018-04-29T12:00:00Z",
          firstName: "Basic",
          email: "Basic@network.com"
        });
        (0, _chai.expect)(user.valid()).to.equal(false);
      }.bind(this));
      it("Missing email", function () {
        _newArrowCheck(this, _this5);

        var user = new _.User({
          _id: "504e0cd7dd992d9be2f20b6f",
          dateCreated: "2018-04-29T12:00:00Z",
          dateModified: "2018-04-29T12:00:00Z",
          firstName: "Basic",
          lastName: "User"
        });
        (0, _chai.expect)(user.valid()).to.equal(false);
      }.bind(this));
    }.bind(this));
    describe("User change callback", function () {
      var _this6 = this;

      _newArrowCheck(this, _this2);

      it("Create callback", function () {
        var _this7 = this;

        _newArrowCheck(this, _this6);

        var destructor = _.User.onChange(function () {
          _newArrowCheck(this, _this7);
        }.bind(this));

        (0, _chai.expect)(destructor).to.be.a("function");
        destructor();
      }.bind(this));
      it("Try callback vaild", function () {
        var _this8 = this;

        _newArrowCheck(this, _this6);

        var destructor = _.User.onChange(function (user) {
          _newArrowCheck(this, _this8);

          (0, _chai.expect)(user).to.be.a("object");
        }.bind(this));

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
      }.bind(this));
      it("Try callback null", function () {
        var _this9 = this;

        _newArrowCheck(this, _this6);

        var destructor = _.User.onChange(function (user) {
          _newArrowCheck(this, _this9);

          (0, _chai.expect)(user).to.equal(null);
        }.bind(this));

        (0, _chai.expect)(destructor).to.be.a("function");

        _.User.setUser(null);

        destructor();
      }.bind(this));
    }.bind(this));
    describe("Get current user", function () {
      var _this10 = this;

      _newArrowCheck(this, _this2);

      it("Valid user", function () {
        var _this11 = this;

        _newArrowCheck(this, _this10);

        _.User.setUser({
          _id: "504e0cd7dd992d9be2f20b6f",
          dateCreated: "2018-04-29T12:00:00Z",
          dateModified: "2018-04-29T12:00:00Z",
          firstName: "Basic",
          lastName: "User",
          email: "Basic@network.com"
        });

        var promise = _.User.getUser(false).then(function (user) {
          _newArrowCheck(this, _this11);

          (0, _chai.expect)(user).to.be.a("object");
          (0, _chai.expect)(user.id).to.be.a("string");
          (0, _chai.expect)(user.valid()).to.equal(true);
        }.bind(this));

        (0, _chai.expect)(promise).to.be.a("promise");
      }.bind(this));
      it("Null User", function () {
        var _this12 = this;

        _newArrowCheck(this, _this10);

        _.User.setUser(null);

        var promise = _.User.getUser(false).then(function (user) {
          _newArrowCheck(this, _this12);

          (0, _chai.expect)(user).to.equal(null);
        }.bind(this));

        (0, _chai.expect)(promise).to.be.a("promise");
      }.bind(this));
    }.bind(this));
  }.bind(void 0));
});