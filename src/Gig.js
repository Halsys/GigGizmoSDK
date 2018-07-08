/**
 * Created by corynull on 4/5/17.
 */
import moment from "moment";
import Band from "./Band";
import Venue from "./Venue";
import Location from "./Location";
import API from "./API";
import RESTModel from "./RESTModel";

module.exports = class Gig extends RESTModel {
	static ModelName = "Gig";

	get startTime() {
		const startTime = this.getField("startTime");
		return startTime ? moment(startTime) : startTime;
	}

	set startTime(value) {
		this.setField("startTime", value);
	}

	get stopTime() {
		const stopTime = this.getField("stopTime");
		return stopTime ? moment(stopTime) : stopTime;
	}

	set stopTime(value) {
		this.setField("stopTime", value);
	}

	get location() {
		return this.getField("location");
	}

	set location(value) {
		this.setField("location", value);
	}

	get venue() {
		return this.getField("venue");
	}

	set venue(value) {
		this.setField("venue", value);
	}

	get bands() {
		return this.getField("bands");
	}

	set bands(value) {
		this.setField("bands", value);
	}

	get active() {
		return this.getField("active");
	}

	get toBeAnnounced() {
		return this.getField("toBeAnnounced");
	}

	set toBeAnnounced(value) {
		this.setField("toBeAnnounced", value);
	}

	get bandOwnersAccepted() {
		return this.getField("bandOwnersAccepted");
	}

	set bandOwnersAccepted(value) {
		this.setField("bandOwnersAccepted", value);
	}

	get venueOwnerAccepted() {
		return this.getField("venueOwnerAccepted");
	}

	set venueOwnerAccepted(value) {
		this.setField("venueOwnerAccepted", value);
	}

	get owners() {
		return this.getField("owners");
	}

	set owners(value) {
		this.setField("owners", value);
	}

	getBands(token) {
		return Band.findMany({ _id: this.bands }, token);
	}

	getVenue(token) {
		return Venue.findById(this.venue, token);
	}

	getLocation(token) {
		return Location.findById(this.location, token);
	}

	valid() {
		if (!super.valid()) return false;
		if (!Array.isArray(this.owners)) return false;
		if (this.owners.length === 0) return false;
		return true;
	}

	userIsOwner(user) {
		if (Array.isArray(this.owners)) {
			let userId = null;
			if (typeof user === "string") userId = user;
			else if (typeof user === "object" && user) userId = user._id;
			return this.owners.find(id => id === userId) !== undefined;
		}
		return false;
	}

	static findById(id, token) {
		return RESTModel.findById(Gig, id, token, true);
	}

	static async findByBand(bandId, token) {
		const data = await API.Call("GET", `/API/Band/${bandId}/Gigs`, {
			token
		});
		if (data && Array.isArray(data))
			return data.map(itemData => {
				const item = new Gig(itemData);
				RESTModel.Cache.set(item._id, item);
				return item;
			});
		throw new Error(`Expected Array, got ${data}`);
	}

	static async findByVenue(venueId, token) {
		const data = await API.Call("GET", `/API/Venue/${venueId}/Gigs`, {
			token
		});
		if (data && Array.isArray(data))
			return data.map(itemData => {
				const item = new Gig(itemData);
				RESTModel.Cache.set(item._id, item);
				return item;
			});
		throw new Error(`Expected Array, got ${data}`);
	}

	static getAllOwned(token) {
		return RESTModel.findMany(Gig, null, token, true);
	}

	static findMany(criteria, token) {
		return RESTModel.findMany(Gig, criteria, token, true);
	}

	static createGigs(gigData, token) {
		return new Promise((resolve, reject) => {
			const data = gigData || {};
			if (data && typeof data === "object") {
				if (!data.band || data.band === "")
					return reject(new Error("Band is required"));
				if (!data.venue || data.venue === "")
					return reject(new Error("Venue is required"));
				if (!data.times || data.times.length === 0)
					return reject(new Error("Times is required"));
				const filtered = data.times.filter((time, i) => {
					if (time.dayDate && time.startTime && time.stopTime) {
						const dayDate = moment(time.dayDate);

						const startTime = moment(time.startTime);
						startTime.year(dayDate.year());
						startTime.month(dayDate.month());
						startTime.date(dayDate.date());

						const stopTime = moment(time.stopTime);
						stopTime.year(dayDate.year());
						stopTime.month(dayDate.month());
						stopTime.date(dayDate.date());
						data.times[i] = {
							startTime: time.startTime,
							stopTime: time.stopTime
						};
						return true;
					} else if (time.startTime && time.stopTime) {
						data.times[i] = {
							startTime: time.startTime,
							stopTime: time.stopTime
						};
						return true;
					}
					return false;
				});
				if (filtered.length !== data.times.length)
					return reject(new Error("Not all times were valid"));
				data.times = filtered;
				data.token = token;
				const request = API.Call("POST", "/API/Gig", data);
				return request.then(response => {
					let gigs = Array.from(response || []);
					gigs = gigs.map(itemData => {
						const gig = new Gig(itemData);
						return gig;
					});
					resolve(gigs);
				}, reject);
			}
			return null;
		});
	}

	static getAllInDistance(location, distance) {
		return new Promise((resolve, reject) => {
			if (typeof location !== "object")
				return reject(new Error("location is not a object!"));
			if (typeof location.lat !== "number" || typeof location.lng !== "number")
				return reject(new Error("location does not contain lat or lng!"));
			if (typeof distance !== "number")
				return reject(new Error("radius is not a number!"));

			return API.Call("GET", "/API/Gig/InDistance", {
				lat: location.lat,
				lng: location.lng,
				dis: distance
			}).then(gigs => {
				resolve(
					Array.from(gigs || []).map(item => {
						const gig = new Gig(item);
						return gig;
					})
				);
			}, reject);
		});
	}
};
