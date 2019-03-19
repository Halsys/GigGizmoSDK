const { expect } = require("chai");
global["socket.io-client"] = require("socket.io-client");
global.axios = require("axios");
const { Location } = require("../../dist/index.js");

describe("Location class", () => {
	it("ModelName exists", () => {
		expect(Location.ModelName).to.equal("Location");
	});

	describe("Constructor", () => {
		it("Empty", () => {
			const empty = new Location();
			expect(empty.placeId).to.equal(undefined);
			expect(empty.address).to.equal(undefined);
			expect(empty.point).to.equal(undefined);
			expect(empty.utcOffset).to.equal(undefined);
			expect(empty.type).to.equal(undefined);
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
				utcOffset: -600,
			});
			expect(place.isValid()).to.equal(true);
		});
		it("Missing id", () => {
			const place = new Location({
				dateCreated: "2018-04-29T12:00:00Z",
				dateModified: "2018-04-29T12:00:00Z",
				placeId: "Something",
				address: "Something Street",
				point: [0, 0],
				utcOffset: -600,
			});
			expect(place.isValid()).to.equal(false);
		});
		it("Missing dateCreated", () => {
			const place = new Location({
				_id: "de4e0cd7dd992d9be2f20b42",
				dateModified: "2018-04-29T12:00:00Z",
				placeId: "Something",
				address: "Something Street",
				point: [0, 0],
				utcOffset: -600,
			});
			expect(place.isValid()).to.equal(false);
		});
		it("Missing dateModified", () => {
			const place = new Location({
				_id: "de4e0cd7dd992d9be2f20b42",
				dateCreated: "2018-04-29T12:00:00Z",
				placeId: "Something",
				address: "Something Street",
				point: [0, 0],
				utcOffset: -600,
			});
			expect(place.isValid()).to.equal(false);
		});

		it("Missing placeId", () => {
			const place = new Location({
				_id: "de4e0cd7dd992d9be2f20b42",
				dateCreated: "2018-04-29T12:00:00Z",
				dateModified: "2018-04-29T12:00:00Z",
				address: "Something Street",
				point: [0, 0],
				utcOffset: -600,
			});
			expect(place.isValid()).to.equal(false);
		});

		it("Missing address", () => {
			const place = new Location({
				_id: "de4e0cd7dd992d9be2f20b42",
				dateCreated: "2018-04-29T12:00:00Z",
				dateModified: "2018-04-29T12:00:00Z",
				placeId: "Something",
				point: [0, 0],
				utcOffset: -600,
			});
			expect(place.isValid()).to.equal(false);
		});

		it("Missing utcOffset", () => {
			const place = new Location({
				_id: "de4e0cd7dd992d9be2f20b42",
				dateCreated: "2018-04-29T12:00:00Z",
				dateModified: "2018-04-29T12:00:00Z",
				placeId: "Something",
				address: "Something Street",
				point: [0, 0],
			});
			expect(place.isValid()).to.equal(false);
		});

		it("Missing coordinates", () => {
			const place = new Location({
				_id: "de4e0cd7dd992d9be2f20b42",
				dateCreated: "2018-04-29T12:00:00Z",
				dateModified: "2018-04-29T12:00:00Z",
				placeId: "Something",
				address: "Something Street",
				utcOffset: -600,
			});
			expect(place.isValid()).to.equal(false);
		});
	});
});
