const { expect } = require("chai");
global["socket.io-client"] = require("socket.io-client");
global.axios = require("axios");
const { Upload, User } = require("../../dist/index.js");

describe("Upload class", () => {
	it("ModelName exists", () => {
		expect(Upload.ModelName).to.equal("Upload");
	});

	describe("Constructor", () => {
		it("Empty", () => {
			const empty = new Upload();
			expect(empty.title).to.equal(undefined);
		});
	});

	describe("Validation", () => {
		it("Valid", () => {
			const upload = new Upload({
				ModelName: "Upload",
				_id: "de4e0cd7dd992d9be2f20b42",
				dateCreated: "2018-04-29T12:00:00Z",
				dateModified: "2018-04-29T12:00:00Z",
				title: "Basic",
				description: "Something",
				fileData: "Something",
				width: 100,
				height: 100,
				offsetTop: 0,
				offsetLeft: 0,
				offsetWidth: 100,
				offsetHeight: 100,
				hash: "sadasdsad",
				bytes: 1000,
				owners: ["504e0cd7dd992d9be2f20b6f"],
			});
			expect(upload.isValid()).to.equal(true);
		});
		it("Missing id", () => {
			const upload = new Upload({
				dateCreated: "2018-04-29T12:00:00Z",
				dateModified: "2018-04-29T12:00:00Z",
				title: "Basic",
				description: "Something",
				fileData: "Something",
				owners: ["504e0cd7dd992d9be2f20b6f"],
			});
			expect(upload.isValid()).to.equal(false);
		});
		it("Missing dateCreated", () => {
			const upload = new Upload({
				_id: "de4e0cd7dd992d9be2f20b42",
				dateModified: "2018-04-29T12:00:00Z",
				title: "Basic",
				description: "Something",
				fileData: "Something",
				owners: ["504e0cd7dd992d9be2f20b6f"],
			});
			expect(upload.isValid()).to.equal(false);
		});
		it("Missing dateModified", () => {
			const upload = new Upload({
				_id: "de4e0cd7dd992d9be2f20b42",
				dateCreated: "2018-04-29T12:00:00Z",
				title: "Basic",
				description: "Something",
				fileData: "Something",
				owners: ["504e0cd7dd992d9be2f20b6f"],
			});
			expect(upload.isValid()).to.equal(false);
		});
		it("Missing fileData", () => {
			const upload = new Upload({
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
		it("Missing title", () => {
			const upload = new Upload({
				_id: "de4e0cd7dd992d9be2f20b42",
				dateCreated: "2018-04-29T12:00:00Z",
				dateModified: "2018-04-29T12:00:00Z",
				description: "Something",
				fileData: "Something",
				owners: ["504e0cd7dd992d9be2f20b6f"],
			});
			expect(upload.isValid()).to.equal(false);
		});
		it("Missing owners", () => {
			const upload = new Upload({
				_id: "de4e0cd7dd992d9be2f20b42",
				dateCreated: "2018-04-29T12:00:00Z",
				dateModified: "2018-04-29T12:00:00Z",
				title: "Basic",
				fileData: "Something",
				description: "Something",
			});
			expect(upload.isValid()).to.equal(false);
		});
		it("No owners", () => {
			const upload = new Upload({
				_id: "de4e0cd7dd992d9be2f20b42",
				dateCreated: "2018-04-29T12:00:00Z",
				dateModified: "2018-04-29T12:00:00Z",
				title: "Basic",
				fileData: "Something",
				description: "Something",
				owners: [],
			});
			expect(upload.isValid()).to.equal(false);
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
			email: "user@network.com",
		});
		const basicUpload = new Upload({
			_id: "de4e0cd7dd992d9be2f20b42",
			dateCreated: "2018-04-29T12:00:00Z",
			dateModified: "2018-04-29T12:00:00Z",
			title: "Basic",
			description: "Something",
			fileName: "Something",
			fileData: "Something",
			owners: ["504e0cd7dd992d9be2f20b6f"],
		});
		it("valid id string argument", () =>
			expect(basicUpload.userIsOwner(basicUser.id)).to.equal(true));
		it("valid user object argument", () =>
			expect(basicUpload.userIsOwner(basicUser)).to.equal(true));
		it("pass empty string", () =>
			expect(basicUpload.userIsOwner("")).to.equal(false));
		it("pass empty object", () =>
			expect(basicUpload.userIsOwner({})).to.equal(false));
		it("pass null", () =>
			expect(basicUpload.userIsOwner(null)).to.equal(false));
	});
});
