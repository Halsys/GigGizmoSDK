const { expect } = require("chai");
const { Location } = require("../");

describe("Location class", () => {
	it("ModelName exists", () => {
		expect(Location.ModelName).to.equal("Location");
	});

	describe("Constructor", () => {
		it("Parse JSON", () => {
			// / Note: Facebook has number id's... or indices?
			const place = new Location(`{
				"placeId": "Something",
				"address": "Something Street",
				"point": [0, 0],
				"utcOffset": -600
			}`);
			expect(place.placeId).to.be.a("string");
			expect(place.placeId).to.equal("Something");

			expect(place.address).to.be.a("string");
			expect(place.address).to.equal("Something Street");

			expect(place.point).to.be.a("array");
			expect(place.point).to.deep.equal([0, 0]); // West coast of africa...

			expect(place.utcOffset).to.be.a("number");
			expect(place.utcOffset).to.equal(-600);
		});
		it("Empty", () => {
			const empty = new Location({});
			expect(empty.placeId).to.equal(null);
			expect(empty.address).to.equal(null);
			expect(empty.point).to.equal(null);
			expect(empty.utcOffset).to.equal(null);
			expect(empty.type).to.equal("Point");
		});
		it("Copy Data", () => {
			const place = new Location({
				placeId: "Something",
				address: "Something Street",
				point: [0, 0],
				utcOffset: -600
			});
			expect(place.placeId).to.be.a("string");
			expect(place.placeId).to.equal("Something");

			expect(place.address).to.be.a("string");
			expect(place.address).to.equal("Something Street");

			expect(place.point).to.be.a("array");
			expect(place.point).to.deep.equal([0, 0]); // West coast of africa...

			expect(place.utcOffset).to.be.a("number");
			expect(place.utcOffset).to.equal(-600);
		});
	});

	describe("Validation", () => {
		it("Valid", () => {
			const place = new Location({
				_id: "de4e0cd7dd992d9be2f20b42",
				dateCreated: "2018-04-29T12:00:00Z",
				dateModified: "2018-04-29T12:00:00Z",
				placeId: "Something",
				address: "Something Street",
				point: [0, 0],
				utcOffset: -600
			});
			expect(place.valid()).to.equal(true);
		});
		it("Missing id", () => {
			const place = new Location({
				dateCreated: "2018-04-29T12:00:00Z",
				dateModified: "2018-04-29T12:00:00Z",
				placeId: "Something",
				address: "Something Street",
				point: [0, 0],
				utcOffset: -600
			});
			expect(place.valid()).to.equal(false);
		});
		it("Missing dateCreated", () => {
			const place = new Location({
				_id: "de4e0cd7dd992d9be2f20b42",
				dateModified: "2018-04-29T12:00:00Z",
				placeId: "Something",
				address: "Something Street",
				point: [0, 0],
				utcOffset: -600
			});
			expect(place.valid()).to.equal(false);
		});
		it("Missing dateModified", () => {
			const place = new Location({
				_id: "de4e0cd7dd992d9be2f20b42",
				dateCreated: "2018-04-29T12:00:00Z",
				placeId: "Something",
				address: "Something Street",
				point: [0, 0],
				utcOffset: -600
			});
			expect(place.valid()).to.equal(false);
		});

		it("Missing placeId", () => {
			const place = new Location({
				_id: "de4e0cd7dd992d9be2f20b42",
				dateCreated: "2018-04-29T12:00:00Z",
				dateModified: "2018-04-29T12:00:00Z",
				address: "Something Street",
				point: [0, 0],
				utcOffset: -600
			});
			expect(place.valid()).to.equal(false);
		});

		it("Missing address", () => {
			const place = new Location({
				_id: "de4e0cd7dd992d9be2f20b42",
				dateCreated: "2018-04-29T12:00:00Z",
				dateModified: "2018-04-29T12:00:00Z",
				placeId: "Something",
				point: [0, 0],
				utcOffset: -600
			});
			expect(place.valid()).to.equal(false);
		});

		it("Missing utcOffset", () => {
			const place = new Location({
				_id: "de4e0cd7dd992d9be2f20b42",
				dateCreated: "2018-04-29T12:00:00Z",
				dateModified: "2018-04-29T12:00:00Z",
				placeId: "Something",
				address: "Something Street",
				point: [0, 0]
			});
			expect(place.valid()).to.equal(false);
		});

		it("Missing coordinates", () => {
			const place = new Location({
				_id: "de4e0cd7dd992d9be2f20b42",
				dateCreated: "2018-04-29T12:00:00Z",
				dateModified: "2018-04-29T12:00:00Z",
				placeId: "Something",
				address: "Something Street",
				utcOffset: -600
			});
			expect(place.valid()).to.equal(false);
		});
	});
});
