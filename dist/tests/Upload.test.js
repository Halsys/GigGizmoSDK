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

  describe("Upload class", function () {
    it("ModelName exists", function () {
      (0, _chai.expect)(_.Upload.ModelName).to.equal("Upload");
    });
    describe("Constructor", function () {
      it("Parse JSON", function () {
        var upload = new _.Upload("{\n\t\t\t\t\"title\": \"Basic\",\n\t\t\t\t\"description\": \"Something\",\n\t\t\t\t\"fileName\": \"Something\",\n\t\t\t\t\"fileData\": \"Something\",\n\t\t\t\t\"owners\": [\"504e0cd7dd992d9be2f20b6f\"]\n\t\t\t}");
        (0, _chai.expect)(upload.title).to.equal("Basic");
        (0, _chai.expect)(upload.description).to.equal("Something");
        (0, _chai.expect)(upload.fileName).to.equal("Something");
        (0, _chai.expect)(upload.fileData).to.equal("Something");
        (0, _chai.expect)(upload.owners).to.deep.equal(["504e0cd7dd992d9be2f20b6f"]);
      });
      it("Empty", function () {
        var empty = new _.Upload({});
        (0, _chai.expect)(empty.title).to.equal(null);
      });
      it("Copy Data", function () {
        var copy = new _.Upload({
          title: "Basic",
          description: "Something",
          fileName: "Something",
          fileData: "Something",
          owners: ["504e0cd7dd992d9be2f20b6f"]
        });
        (0, _chai.expect)(copy.title).to.equal("Basic");
      });
    });
    describe("Validation", function () {
      it("Valid", function () {
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
      });
      it("Missing id", function () {
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
      });
      it("Missing dateCreated", function () {
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
      });
      it("Missing dateModified", function () {
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
      });
      it("Missing fileName", function () {
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
      });
      it("Missing fileData", function () {
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
      });
      it("Missing title", function () {
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
      });
      it("Missing owners", function () {
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
      });
      it("No owners", function () {
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
      });
    });
    describe("userIsOwner", function () {
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
        return (0, _chai.expect)(basicUpload.userIsOwner(basicUser.id)).to.equal(true);
      });
      it("valid user object argument", function () {
        return (0, _chai.expect)(basicUpload.userIsOwner(basicUser)).to.equal(true);
      });
      it("pass empty string", function () {
        return (0, _chai.expect)(basicUpload.userIsOwner("")).to.equal(false);
      });
      it("pass empty object", function () {
        return (0, _chai.expect)(basicUpload.userIsOwner({})).to.equal(false);
      });
      it("pass null", function () {
        return (0, _chai.expect)(basicUpload.userIsOwner(null)).to.equal(false);
      });
    });
  });
});