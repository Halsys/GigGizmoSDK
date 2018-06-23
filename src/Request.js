/**
 * Created by corynull on Nov 30 2017 5:27 AM.
 */

import API from "./API";
import { default as RESTModel } from "./RESTModel";

export default class Request extends RESTModel {
	static ModelName = "Request";

	get to() {
		return this.getField("to");
	}

	set to(value) {
		this.setField("to", value);
	}

	get from() {
		return this.getField("from");
	}

	set from(value) {
		this.setField("from", value);
	}

	get status() {
		return this.getField("status");
	}

	set status(value) {
		this.setField("status", value);
	}

	get options() {
		return this.getField("options");
	}

	set options(value) {
		this.setField("options", value);
	}

	get type() {
		return this.getField("type");
	}

	set type(value) {
		this.setField("type", value);
	}

	get userData() {
		return this.getField("userData");
	}

	set userData(value) {
		this.setField("userData", value);
	}

	get emailSent() {
		return this.getField("emailSent");
	}

	set emailSent(value) {
		this.setField("emailSent", value);
	}

	async execute(option, token) {
		const request = await API.Call(
			"POST",
			`/API/Request/${this._id}/${option}`,
			{
				token
			}
		);
		Object.assign(this.document, request);
		return this;
	}

	static createBandOwnershipRequest(band, from, to, token) {
		return new Promise((resolve, reject) => {
			API.Call("POST", "/API/Request", {
				from,
				to,
				type: "BandOwnership",
				userData: {
					bandId: band
				},
				token
			}).then(data => {
				resolve(new Request(data));
			}, reject);
		});
	}

	static createVenueOwnershipRequest(venue, from, to, token) {
		return new Promise((resolve, reject) => {
			API.Call("POST", "/API/Request", {
				from,
				to,
				type: "VenueOwnership",
				userData: {
					venueId: venue
				},
				token
			}).then(data => {
				resolve(new Request(data));
			}, reject);
		});
	}

	static createGigNegotiation(gig, from, to, token) {
		return new Promise((resolve, reject) => {
			API.Call("POST", "/API/Request", {
				from,
				to,
				type: "GigNegotiation",
				userData: {
					gigId: gig
				},
				token
			}).then(data => {
				resolve(new Request(data));
			}, reject);
		});
	}

	static getAllOwned(token) {
		return RESTModel.findMany(Request, null, token);
	}

	static findById(id, token) {
		return RESTModel.findById(Request, id, token);
	}
}
