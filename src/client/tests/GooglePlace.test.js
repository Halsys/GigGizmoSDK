const { expect } = require("chai");
const { GooglePlace } = require("../../../dist/bundle.js");

describe("GooglePlace class", () => {
  it("ModelName exists", () => {
    expect(GooglePlace.ModelName).to.equal("GooglePlace");
  });

  describe("Constructor", () => {
    it("Parse JSON", () => {
      // / Note: Facebook has number id's... or indices?
      const place = new GooglePlace(`{
				"placeId": "Something",
				"details": {}
			}`);
      expect(place.placeId).to.be.a("string");
      expect(place.placeId).to.equal("Something");
      expect(place.details).to.be.a("object");
      expect(place.details).to.deep.equal({});
    });
    it("Empty", () => {
      const empty = new GooglePlace({});
      expect(empty.placeId).to.equal(null);
      expect(empty.details).to.equal(null);
    });
    it("Copy Data", () => {
      const place = new GooglePlace({
        placeId: "Something",
        details: {}
      });
      expect(place.placeId).to.be.a("string");
      expect(place.placeId).to.equal("Something");
      expect(place.details).to.be.a("object");
      expect(place.details).to.deep.equal({});
    });
  });
});
