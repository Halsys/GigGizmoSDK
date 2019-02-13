const expect = require("chai").expect;
global["socket.io-client"] = require("socket.io-client");
global.axios = require("axios");
const { Band, User } = require("../../index.js");

describe("Band class", () => {
  it("ModelName exists", () => {
    expect(Band.ModelName).to.equal("Band");
  });

  describe("Constructor", () => {
    it("Parse JSON", () => {
      const band = new Band(`{
				"name": "Basic",
				"cityPlaceID": "Something",
				"description": "Something",
				"owners": ["504e0cd7dd992d9be2f20b6f"]
			}`);
      expect(band.name).to.equal("Basic");
      expect(band.cityPlaceID).to.equal("Something");
      expect(band.description).to.equal("Something");
      expect(band.owners).to.deep.equal(["504e0cd7dd992d9be2f20b6f"]);
    });
    it("Empty", () => {
      const empty = new Band({});
      expect(empty.name).to.equal(null);
    });
    it("Copy Data", () => {
      const copy = new Band({
        cityPlaceID: "Something",
        name: "Basic",
        description: "Something",
        owners: ["504e0cd7dd992d9be2f20b6f"],
      });
      expect(copy.name).to.equal("Basic");
    });
  });

  describe("Validation", () => {
    it("Valid", () => {
      const band = new Band({
        _id: "de4e0cd7dd992d9be2f20b42",
        dateCreated: "2018-04-29T12:00:00Z",
        dateModified: "2018-04-29T12:00:00Z",
        name: "Basic",
        cityPlaceID: "Something",
        description: "Something",
        owners: ["504e0cd7dd992d9be2f20b6f"],
      });
      expect(band.isValid()).to.equal(true);
    });
    it("Missing id", () => {
      const band = new Band({
        dateCreated: "2018-04-29T12:00:00Z",
        dateModified: "2018-04-29T12:00:00Z",
        name: "Basic",
        cityPlaceID: "Something",
        description: "Something",
        owners: ["504e0cd7dd992d9be2f20b6f"],
      });
      expect(band.isValid()).to.equal(false);
    });
    it("Missing dateCreated", () => {
      const band = new Band({
        _id: "de4e0cd7dd992d9be2f20b42",
        dateModified: "2018-04-29T12:00:00Z",
        name: "Basic",
        cityPlaceID: "Something",
        description: "Something",
        owners: ["504e0cd7dd992d9be2f20b6f"],
      });
      expect(band.isValid()).to.equal(false);
    });
    it("Missing dateModified", () => {
      const band = new Band({
        _id: "de4e0cd7dd992d9be2f20b42",
        dateCreated: "2018-04-29T12:00:00Z",
        name: "Basic",
        cityPlaceID: "Something",
        description: "Something",
        owners: ["504e0cd7dd992d9be2f20b6f"],
      });
      expect(band.isValid()).to.equal(false);
    });
    it("Missing name", () => {
      const band = new Band({
        _id: "de4e0cd7dd992d9be2f20b42",
        dateCreated: "2018-04-29T12:00:00Z",
        dateModified: "2018-04-29T12:00:00Z",
        cityPlaceID: "Something",
        description: "Something",
        owners: ["504e0cd7dd992d9be2f20b6f"],
      });
      expect(band.isValid()).to.equal(false);
    });
    it("Missing cityPlaceID", () => {
      const band = new Band({
        _id: "de4e0cd7dd992d9be2f20b42",
        dateCreated: "2018-04-29T12:00:00Z",
        dateModified: "2018-04-29T12:00:00Z",
        name: "Basic",
        description: "Something",
        owners: ["504e0cd7dd992d9be2f20b6f"],
      });
      expect(band.isValid()).to.equal(false);
    });
    it("Missing description", () => {
      const band = new Band({
        _id: "de4e0cd7dd992d9be2f20b42",
        dateCreated: "2018-04-29T12:00:00Z",
        dateModified: "2018-04-29T12:00:00Z",
        name: "Basic",
        cityPlaceID: "Something",
        owners: ["504e0cd7dd992d9be2f20b6f"],
      });
      expect(band.isValid()).to.equal(false);
    });
    it("Missing owners", () => {
      const band = new Band({
        _id: "de4e0cd7dd992d9be2f20b42",
        dateCreated: "2018-04-29T12:00:00Z",
        dateModified: "2018-04-29T12:00:00Z",
        name: "Basic",
        cityPlaceID: "Something",
        description: "Something",
      });
      expect(band.isValid()).to.equal(false);
    });
    it("No owners", () => {
      const band = new Band({
        _id: "de4e0cd7dd992d9be2f20b42",
        dateCreated: "2018-04-29T12:00:00Z",
        dateModified: "2018-04-29T12:00:00Z",
        name: "Basic",
        cityPlaceID: "Something",
        description: "Something",
        owners: [],
      });
      expect(band.isValid()).to.equal(false);
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
    const basicBand = new Band({
      _id: "de4e0cd7dd992d9be2f20b42",
      dateCreated: "2018-04-29T12:00:00Z",
      dateModified: "2018-04-29T12:00:00Z",
      name: "Basic",
      cityPlaceID: "Something",
      description: "Something",
      owners: ["504e0cd7dd992d9be2f20b6f"],
    });
    it("valid id string argument", () =>
      expect(basicBand.userIsOwner(basicUser.id)).to.equal(true));
    it("valid user object argument", () =>
      expect(basicBand.userIsOwner(basicUser)).to.equal(true));
    it("pass empty string", () =>
      expect(basicBand.userIsOwner("")).to.equal(false));
    it("pass empty object", () =>
      expect(basicBand.userIsOwner({})).to.equal(false));
    it("pass null", () => expect(basicBand.userIsOwner(null)).to.equal(false));
  });
});
