/**
 * Created by corynull on Nov 30 2017 5:27 AM.
 */

import API from "./API";
import RESTModel from "./RESTModel";

export default class Request extends RESTModel {
	static ModelName = "Request";

	get to() {
		return this.document.to || null;
	}

	set to(value) {
		this.document.to = value;
		this.document.dateModified = Date.now();
	}

	get from() {
		return this.document.from || null;
	}

	set from(value) {
		this.document.from = value;
		this.document.dateModified = Date.now();
	}

	get status() {
		return this.document.status || "Undecided";
	}

	set status(value) {
		this.document.status = value;
		this.document.dateModified = Date.now();
	}

	get options() {
		return this.document.options || null;
	}

	set options(value) {
		this.document.options = value;
		this.document.dateModified = Date.now();
	}

	get type() {
		return this.document.type || null;
	}

	set type(value) {
		this.document.type = value;
		this.document.dateModified = Date.now();
	}

	get userData() {
		return this.document.userData || null;
	}

	set userData(value) {
		this.document.userData = value;
		this.document.dateModified = Date.now();
	}

	get emailSent() {
		return this.document.emailSent;
	}

	set emailSent(value) {
		this.document.emailSent = value;
		this.document.dateModified = Date.now();
	}

	async execute(option, token) {
		const request = await API.Call(
			"POST",
			`/API/Request/${this._id}/${option}`,
			{
				token
			}
		);
		Object.assign(this, request);
		return this;
	}

	static createBandOwnershipRequest(band, from, to, token) {
		return new Promise((resolve, reject) => {
			API.Call("POST", "/API/Request", {
				from,
				to,
				type: "BandOwnership",
				data: {
					bandId: band
				},
				token
			}).then(data => {
				const request = new Request(data);
				resolve(request);
			}, reject);
		});
	}

	static createVenueOwnershipRequest(venue, from, to, token) {
		return new Promise((resolve, reject) => {
			API.Call("POST", "/API/Request", {
				from,
				to,
				type: "VenueOwnership",
				data: {
					venueId: venue
				},
				token
			}).then(data => {
				const request = new Request(data);
				resolve(request);
			}, reject);
		});
	}

	static createGigNegotiation(gig, from, to, token) {
		return new Promise((resolve, reject) => {
			API.Call("POST", "/API/Request", {
				from,
				to,
				type: "GigNegotiation",
				data: {
					gigId: gig
				},
				token
			}).then(data => {
				const request = new Request(data);
				resolve(request);
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
