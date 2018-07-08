(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["chai", "../"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("chai"), require("../"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.chai, global._);
    global.UploadTest = mod.exports;
  }
})(this, function (_chai, _) {
  "use strict";

  var _this = void 0;

  function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

  describe("Upload class", function () {
    var _this2 = this;

    _newArrowCheck(this, _this);

    it("ModelName exists", function () {
      _newArrowCheck(this, _this2);

      (0, _chai.expect)(_.Upload.ModelName).to.equal("Upload");
    }.bind(this));
    describe("Constructor", function () {
      var _this3 = this;

      _newArrowCheck(this, _this2);

      it("Parse JSON", function () {
        _newArrowCheck(this, _this3);

        var upload = new _.Upload("{\n\t\t\t\t\"title\": \"Basic\",\n\t\t\t\t\"description\": \"Something\",\n\t\t\t\t\"fileName\": \"Something\",\n\t\t\t\t\"fileData\": \"Something\",\n\t\t\t\t\"owners\": [\"504e0cd7dd992d9be2f20b6f\"]\n\t\t\t}");
        (0, _chai.expect)(upload.title).to.equal("Basic");
        (0, _chai.expect)(upload.description).to.equal("Something");
        (0, _chai.expect)(upload.fileName).to.equal("Something");
        (0, _chai.expect)(upload.fileData).to.equal("Something");
        (0, _chai.expect)(upload.owners).to.deep.equal(["504e0cd7dd992d9be2f20b6f"]);
      }.bind(this));
      it("Empty", function () {
        _newArrowCheck(this, _this3);

        var empty = new _.Upload({});
        (0, _chai.expect)(empty.title).to.equal(null);
      }.bind(this));
      it("Copy Data", function () {
        _newArrowCheck(this, _this3);

        var copy = new _.Upload({
          title: "Basic",
          description: "Something",
          fileName: "Something",
          fileData: "Something",
          owners: ["504e0cd7dd992d9be2f20b6f"]
        });
        (0, _chai.expect)(copy.title).to.equal("Basic");
      }.bind(this));
    }.bind(this));
    describe("Validation", function () {
      var _this4 = this;

      _newArrowCheck(this, _this2);

      it("Valid", function () {
        _newArrowCheck(this, _this4);

        var upload = new _.Upload({
          _id: "de4e0cd7dd992d9be2f20b42",
          dateCreated: "2018-04-29T12:00:00Z",
          dateModified: "2018-04-29T12:00:00Z",
          title: "Basic",
          description: "Something",
          fileName: "Something",
          fileData: "Something",
          owners: ["504e0cd7dd992d9be2f20b6f"]
        });
        (0, _chai.expect)(upload.valid()).to.equal(true);
      }.bind(this));
      it("Missing id", function () {
        _newArrowCheck(this, _this4);

        var upload = new _.Upload({
          dateCreated: "2018-04-29T12:00:00Z",
          dateModified: "2018-04-29T12:00:00Z",
          title: "Basic",
          description: "Something",
          fileName: "Something",
          fileData: "Something",
          owners: ["504e0cd7dd992d9be2f20b6f"]
        });
        (0, _chai.expect)(upload.valid()).to.equal(false);
      }.bind(this));
      it("Missing dateCreated", function () {
        _newArrowCheck(this, _this4);

        var upload = new _.Upload({
          _id: "de4e0cd7dd992d9be2f20b42",
          dateModified: "2018-04-29T12:00:00Z",
          title: "Basic",
          description: "Something",
          fileName: "Something",
          fileData: "Something",
          owners: ["504e0cd7dd992d9be2f20b6f"]
        });
        (0, _chai.expect)(upload.valid()).to.equal(false);
      }.bind(this));
      it("Missing dateModified", function () {
        _newArrowCheck(this, _this4);

        var upload = new _.Upload({
          _id: "de4e0cd7dd992d9be2f20b42",
          dateCreated: "2018-04-29T12:00:00Z",
          title: "Basic",
          description: "Something",
          fileName: "Something",
          fileData: "Something",
          owners: ["504e0cd7dd992d9be2f20b6f"]
        });
        (0, _chai.expect)(upload.valid()).to.equal(false);
      }.bind(this));
      it("Missing fileName", function () {
        _newArrowCheck(this, _this4);

        var upload = new _.Upload({
          _id: "de4e0cd7dd992d9be2f20b42",
          dateCreated: "2018-04-29T12:00:00Z",
          dateModified: "2018-04-29T12:00:00Z",
          title: "Basic",
          description: "Something",
          fileData: "Something",
          owners: ["504e0cd7dd992d9be2f20b6f"]
        });
        (0, _chai.expect)(upload.valid()).to.equal(false);
      }.bind(this));
      it("Missing fileData", function () {
        _newArrowCheck(this, _this4);

        var upload = new _.Upload({
          _id: "de4e0cd7dd992d9be2f20b42",
          dateCreated: "2018-04-29T12:00:00Z",
          dateModified: "2018-04-29T12:00:00Z",
          title: "Basic",
          description: "Something",
          fileName: "Something",
          owners: ["504e0cd7dd992d9be2f20b6f"]
        });
        (0, _chai.expect)(upload.valid()).to.equal(false);
      }.bind(this));
      it("Missing title", function () {
        _newArrowCheck(this, _this4);

        var upload = new _.Upload({
          _id: "de4e0cd7dd992d9be2f20b42",
          dateCreated: "2018-04-29T12:00:00Z",
          dateModified: "2018-04-29T12:00:00Z",
          description: "Something",
          fileName: "Something",
          fileData: "Something",
          owners: ["504e0cd7dd992d9be2f20b6f"]
        });
        (0, _chai.expect)(upload.valid()).to.equal(false);
      }.bind(this));
      it("Missing owners", function () {
        _newArrowCheck(this, _this4);

        var upload = new _.Upload({
          _id: "de4e0cd7dd992d9be2f20b42",
          dateCreated: "2018-04-29T12:00:00Z",
          dateModified: "2018-04-29T12:00:00Z",
          title: "Basic",
          fileName: "Something",
          fileData: "Something",
          description: "Something"
        });
        (0, _chai.expect)(upload.valid()).to.equal(false);
      }.bind(this));
      it("No owners", function () {
        _newArrowCheck(this, _this4);

        var upload = new _.Upload({
          _id: "de4e0cd7dd992d9be2f20b42",
          dateCreated: "2018-04-29T12:00:00Z",
          dateModified: "2018-04-29T12:00:00Z",
          title: "Basic",
          fileName: "Something",
          fileData: "Something",
          description: "Something",
          owners: []
        });
        (0, _chai.expect)(upload.valid()).to.equal(false);
      }.bind(this));
    }.bind(this));
    describe("userIsOwner", function () {
      var _this5 = this;

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
      var basicUpload = new _.Upload({
        _id: "de4e0cd7dd992d9be2f20b42",
        dateCreated: "2018-04-29T12:00:00Z",
        dateModified: "2018-04-29T12:00:00Z",
        title: "Basic",
        description: "Something",
        fileName: "Something",
        fileData: "Something",
        owners: ["504e0cd7dd992d9be2f20b6f"]
      });
      it("valid id string argument", function () {
        _newArrowCheck(this, _this5);

        return (0, _chai.expect)(basicUpload.userIsOwner(basicUser.id)).to.equal(true);
      }.bind(this));
      it("valid user object argument", function () {
        _newArrowCheck(this, _this5);

        return (0, _chai.expect)(basicUpload.userIsOwner(basicUser)).to.equal(true);
      }.bind(this));
      it("pass empty string", function () {
        _newArrowCheck(this, _this5);

        return (0, _chai.expect)(basicUpload.userIsOwner("")).to.equal(false);
      }.bind(this));
      it("pass empty object", function () {
        _newArrowCheck(this, _this5);

        return (0, _chai.expect)(basicUpload.userIsOwner({})).to.equal(false);
      }.bind(this));
      it("pass null", function () {
        _newArrowCheck(this, _this5);

        return (0, _chai.expect)(basicUpload.userIsOwner(null)).to.equal(false);
      }.bind(this));
    }.bind(this));
  }.bind(void 0));
});