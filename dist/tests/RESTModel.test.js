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
    global.RESTModelTest = mod.exports;
  }
})(this, function (_chai, _moment, _) {
  "use strict";

  _moment = _interopRequireDefault(_moment);

  var _this = void 0;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

  describe("RESTModel class", function () {
    var _this2 = this;

    _newArrowCheck(this, _this);

    describe("Constructor", function () {
      var _this3 = this;

      _newArrowCheck(this, _this2);

      it("Parse JSON", function () {
        _newArrowCheck(this, _this3);

        var doc = new _.RESTModel("{\n\t\t\t  \"_id\": \"de4e0cd7dd992d9be2f20b42\",\n\t\t\t  \"dateCreated\": \"2018-04-29T12:00:00Z\",\n\t\t\t  \"dateModified\": \"2018-04-29T12:00:00Z\"\n\t\t\t}");
        (0, _chai.expect)(doc._id).to.equal("de4e0cd7dd992d9be2f20b42");
        (0, _chai.expect)(doc.dateCreated).to.deep.equal((0, _moment.default)("2018-04-29T12:00:00Z"));
        (0, _chai.expect)(doc.dateModified).to.deep.equal((0, _moment.default)("2018-04-29T12:00:00Z"));
      }.bind(this));
      it("Empty", function () {
        _newArrowCheck(this, _this3);

        var empty = new _.RESTModel({});
        (0, _chai.expect)(empty._id).to.equal(null);
        (0, _chai.expect)(empty.dateCreated).to.equal(null);
        (0, _chai.expect)(empty.dateModified).to.equal(null);
      }.bind(this));
      it("Copy Data", function () {
        _newArrowCheck(this, _this3);

        var copy = new _.RESTModel({
          _id: "de4e0cd7dd992d9be2f20b42",
          dateCreated: "2018-04-29T12:00:00Z",
          dateModified: "2018-04-29T12:00:00Z"
        });
        (0, _chai.expect)(copy._id).to.equal("de4e0cd7dd992d9be2f20b42");
        (0, _chai.expect)(copy.dateCreated).to.deep.equal((0, _moment.default)("2018-04-29T12:00:00Z"));
        (0, _chai.expect)(copy.dateModified).to.deep.equal((0, _moment.default)("2018-04-29T12:00:00Z"));
      }.bind(this));
    }.bind(this));
    describe("toObject", function () {
      var _this4 = this;

      _newArrowCheck(this, _this2);

      it("Invalid Object", function () {
        _newArrowCheck(this, _this4);

        var empty = new _.RESTModel({});
        (0, _chai.expect)(empty.toObject()).to.deep.equal(null);
      }.bind(this));
      it("Valid Object", function () {
        _newArrowCheck(this, _this4);

        var copy = new _.RESTModel({
          _id: "de4e0cd7dd992d9be2f20b42",
          dateCreated: "2018-04-29T12:00:00Z",
          dateModified: "2018-04-29T12:00:00Z"
        });
        (0, _chai.expect)(copy.toObject()).to.deep.equal({
          _id: "de4e0cd7dd992d9be2f20b42",
          dateCreated: "2018-04-29T12:00:00Z",
          dateModified: "2018-04-29T12:00:00Z"
        });
      }.bind(this));
    }.bind(this));
    describe("toString", function () {
      var _this5 = this;

      _newArrowCheck(this, _this2);

      it("Invalid Object", function () {
        _newArrowCheck(this, _this5);

        var empty = new _.RESTModel({});
        (0, _chai.expect)(empty.toString()).to.deep.equal("null");
      }.bind(this));
      it("Valid Object", function () {
        _newArrowCheck(this, _this5);

        var copy = new _.RESTModel({
          _id: "de4e0cd7dd992d9be2f20b42",
          dateCreated: "2018-04-29T12:00:00Z",
          dateModified: "2018-04-29T12:00:00Z"
        });
        var json = copy.toString();
        (0, _chai.expect)(json).to.equal('{"_id":"de4e0cd7dd992d9be2f20b42","dateCreated":"2018-04-29T12:00:00Z","dateModified":"2018-04-29T12:00:00Z"}');
      }.bind(this));
    }.bind(this));
    describe("Validation", function () {
      var _this6 = this;

      _newArrowCheck(this, _this2);

      it("Valid", function () {
        _newArrowCheck(this, _this6);

        var doc = new _.RESTModel({
          _id: "de4e0cd7dd992d9be2f20b42",
          dateCreated: "2018-04-29T12:00:00Z",
          dateModified: "2018-04-29T12:00:00Z"
        });
        (0, _chai.expect)(doc.valid()).to.equal(true);
      }.bind(this));
      it("Missing id", function () {
        _newArrowCheck(this, _this6);

        var doc = new _.RESTModel({
          dateCreated: "2018-04-29T12:00:00Z",
          dateModified: "2018-04-29T12:00:00Z"
        });
        (0, _chai.expect)(doc.valid()).to.equal(false);
      }.bind(this));
      it("Missing dateCreated", function () {
        _newArrowCheck(this, _this6);

        var doc = new _.RESTModel({
          _id: "de4e0cd7dd992d9be2f20b42",
          dateModified: "2018-04-29T12:00:00Z"
        });
        (0, _chai.expect)(doc.valid()).to.equal(false);
      }.bind(this));
      it("Missing dateModified", function () {
        _newArrowCheck(this, _this6);

        var doc = new _.RESTModel({
          _id: "de4e0cd7dd992d9be2f20b42",
          dateCreated: "2018-04-29T12:00:00Z"
        });
        (0, _chai.expect)(doc.valid()).to.equal(false);
      }.bind(this));
    }.bind(this));
    describe("Assign", function () {
      var _this7 = this;

      _newArrowCheck(this, _this2);

      it("Assign to make valid", function () {
        _newArrowCheck(this, _this7);

        var doc = new _.RESTModel({
          _id: "de4e0cd7dd992d9be2f20b42",
          dateCreated: "2018-04-29T12:00:00Z",
          dateModified: "2018-04-29T12:00:00Z"
        });
        (0, _chai.expect)(doc.toObject()).to.deep.equal({
          _id: "de4e0cd7dd992d9be2f20b42",
          dateCreated: "2018-04-29T12:00:00Z",
          dateModified: "2018-04-29T12:00:00Z"
        });
        (0, _chai.expect)(doc.valid()).to.equal(true);
      }.bind(this));
      it("Assign to make invalid", function () {
        _newArrowCheck(this, _this7);

        var doc = new _.RESTModel({
          _id: "de4e0cd7dd992d9be2f20b42",
          dateCreated: "2018-04-29T12:00:00Z",
          dateModified: "2018-04-29T12:00:00Z"
        });
        (0, _chai.expect)(doc.valid()).to.equal(true);
        doc.assign({
          _id: "",
          dateCreated: "",
          dateModified: ""
        });
        (0, _chai.expect)(doc.valid()).to.equal(false);
      }.bind(this));
    }.bind(this));
    describe("isValidId", function () {
      var _this8 = this;

      _newArrowCheck(this, _this2);

      it("Not string", function () {
        _newArrowCheck(this, _this8);

        return (0, _chai.expect)(_.RESTModel.isValidId(123)).to.equal(false);
      }.bind(this));
      it("Invalid id", function () {
        _newArrowCheck(this, _this8);

        return (0, _chai.expect)(_.RESTModel.isValidId("INVALID")).to.equal(false);
      }.bind(this));
      it("Valid id", function () {
        _newArrowCheck(this, _this8);

        return (0, _chai.expect)(_.RESTModel.isValidId("de4e0cd7dd992d9be2f20b42")).to.equal(true);
      }.bind(this));
    }.bind(this));
  }.bind(void 0));
});