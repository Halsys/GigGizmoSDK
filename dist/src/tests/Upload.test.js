"use strict";
var expect = require("chai").expect;
global["socket.io-client"] = require("socket.io-client");
global.axios = require("axios");
var _a = require("../../index.js"), Upload = _a.Upload, User = _a.User;
describe("Upload class", function () {
    it("ModelName exists", function () {
        expect(Upload.ModelName).to.equal("Upload");
    });
    describe("Constructor", function () {
        it("Parse JSON", function () {
            var upload = new Upload("{\n\t\t\t\t\"title\": \"Basic\",\n\t\t\t\t\"description\": \"Something\",\n\t\t\t\t\"fileName\": \"Something\",\n\t\t\t\t\"fileData\": \"Something\",\n\t\t\t\t\"owners\": [\"504e0cd7dd992d9be2f20b6f\"]\n\t\t\t}");
            expect(upload.title).to.equal("Basic");
            expect(upload.description).to.equal("Something");
            expect(upload.fileName).to.equal("Something");
            expect(upload.fileData).to.equal("Something");
            expect(upload.owners).to.deep.equal(["504e0cd7dd992d9be2f20b6f"]);
        });
        it("Empty", function () {
            var empty = new Upload({});
            expect(empty.title).to.equal(null);
        });
        it("Copy Data", function () {
            var copy = new Upload({
                title: "Basic",
                description: "Something",
                fileName: "Something",
                fileData: "Something",
                owners: ["504e0cd7dd992d9be2f20b6f"],
            });
            expect(copy.title).to.equal("Basic");
        });
    });
    describe("Validation", function () {
        it("Valid", function () {
            var upload = new Upload({
                _id: "de4e0cd7dd992d9be2f20b42",
                dateCreated: "2018-04-29T12:00:00Z",
                dateModified: "2018-04-29T12:00:00Z",
                title: "Basic",
                description: "Something",
                fileName: "Something",
                fileData: "Something",
                owners: ["504e0cd7dd992d9be2f20b6f"],
            });
            expect(upload.isValid()).to.equal(true);
        });
        it("Missing id", function () {
            var upload = new Upload({
                dateCreated: "2018-04-29T12:00:00Z",
                dateModified: "2018-04-29T12:00:00Z",
                title: "Basic",
                description: "Something",
                fileName: "Something",
                fileData: "Something",
                owners: ["504e0cd7dd992d9be2f20b6f"],
            });
            expect(upload.isValid()).to.equal(false);
        });
        it("Missing dateCreated", function () {
            var upload = new Upload({
                _id: "de4e0cd7dd992d9be2f20b42",
                dateModified: "2018-04-29T12:00:00Z",
                title: "Basic",
                description: "Something",
                fileName: "Something",
                fileData: "Something",
                owners: ["504e0cd7dd992d9be2f20b6f"],
            });
            expect(upload.isValid()).to.equal(false);
        });
        it("Missing dateModified", function () {
            var upload = new Upload({
                _id: "de4e0cd7dd992d9be2f20b42",
                dateCreated: "2018-04-29T12:00:00Z",
                title: "Basic",
                description: "Something",
                fileName: "Something",
                fileData: "Something",
                owners: ["504e0cd7dd992d9be2f20b6f"],
            });
            expect(upload.isValid()).to.equal(false);
        });
        it("Missing fileName", function () {
            var upload = new Upload({
                _id: "de4e0cd7dd992d9be2f20b42",
                dateCreated: "2018-04-29T12:00:00Z",
                dateModified: "2018-04-29T12:00:00Z",
                title: "Basic",
                description: "Something",
                fileData: "Something",
                owners: ["504e0cd7dd992d9be2f20b6f"],
            });
            expect(upload.isValid()).to.equal(false);
        });
        it("Missing fileData", function () {
            var upload = new Upload({
                _id: "de4e0cd7dd992d9be2f20b42",
                dateCreated: "2018-04-29T12:00:00Z",
                dateModified: "2018-04-29T12:00:00Z",
                title: "Basic",
                description: "Something",
                fileName: "Something",
                owners: ["504e0cd7dd992d9be2f20b6f"],
            });
            expect(upload.isValid()).to.equal(false);
        });
        it("Missing title", function () {
            var upload = new Upload({
                _id: "de4e0cd7dd992d9be2f20b42",
                dateCreated: "2018-04-29T12:00:00Z",
                dateModified: "2018-04-29T12:00:00Z",
                description: "Something",
                fileName: "Something",
                fileData: "Something",
                owners: ["504e0cd7dd992d9be2f20b6f"],
            });
            expect(upload.isValid()).to.equal(false);
        });
        it("Missing owners", function () {
            var upload = new Upload({
                _id: "de4e0cd7dd992d9be2f20b42",
                dateCreated: "2018-04-29T12:00:00Z",
                dateModified: "2018-04-29T12:00:00Z",
                title: "Basic",
                fileName: "Something",
                fileData: "Something",
                description: "Something",
            });
            expect(upload.isValid()).to.equal(false);
        });
        it("No owners", function () {
            var upload = new Upload({
                _id: "de4e0cd7dd992d9be2f20b42",
                dateCreated: "2018-04-29T12:00:00Z",
                dateModified: "2018-04-29T12:00:00Z",
                title: "Basic",
                fileName: "Something",
                fileData: "Something",
                description: "Something",
                owners: [],
            });
            expect(upload.isValid()).to.equal(false);
        });
    });
    describe("userIsOwner", function () {
        var basicUser = new User({
            _id: "504e0cd7dd992d9be2f20b6f",
            dateCreated: "2018-04-29T12:00:00Z",
            dateModified: "2018-04-29T12:00:00Z",
            firstName: "Basic",
            middleName: "F",
            lastName: "User",
            birthday: "1994-09-04T12:00:00Z",
            country: "US",
            email: "user@network.com",
        });
        var basicUpload = new Upload({
            _id: "de4e0cd7dd992d9be2f20b42",
            dateCreated: "2018-04-29T12:00:00Z",
            dateModified: "2018-04-29T12:00:00Z",
            title: "Basic",
            description: "Something",
            fileName: "Something",
            fileData: "Something",
            owners: ["504e0cd7dd992d9be2f20b6f"],
        });
        it("valid id string argument", function () {
            return expect(basicUpload.userIsOwner(basicUser.id)).to.equal(true);
        });
        it("valid user object argument", function () {
            return expect(basicUpload.userIsOwner(basicUser)).to.equal(true);
        });
        it("pass empty string", function () {
            return expect(basicUpload.userIsOwner("")).to.equal(false);
        });
        it("pass empty object", function () {
            return expect(basicUpload.userIsOwner({})).to.equal(false);
        });
        it("pass null", function () {
            return expect(basicUpload.userIsOwner(null)).to.equal(false);
        });
    });
});
//# sourceMappingURL=Upload.test.js.map