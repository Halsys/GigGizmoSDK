/**
 * Created by corynull on Nov 30 2017 5:27 AM.
 */

import { API } from "./API";
import { DocumentI, ModelClass } from "./Model";

interface RequestI extends DocumentI {
	to: string;
	from: string;
	emailSent: boolean;
	status: string;
	options: string[];
	type: string;
	userData: any;
}

export class Request extends ModelClass<RequestI> {
	public static ModelName: string = "Request";

	public static createBandOwnershipRequest(band: string, from: string, to: string) {
		return new Promise((resolve, reject) => {
			API.call("POST", "/API/Request", {
				from,
				to,
				type: "BandOwnership",
				userData: {
					bandId: band
				}
			}).then(
				(data: any) => {
					resolve(new Request(data));
				},
				reject);
		});
	}

	public static createVenueOwnershipRequest(venue: string, from: string, to: string) {
		return new Promise((resolve, reject) => {
			API.call("POST", "/API/Request", {
				from,
				to,
				type: "VenueOwnership",
				userData: {
					venueId: venue
				}
			}).then(
				(data: any) => {
					resolve(new Request(data));
				},
				reject);
		});
	}

	public static createGigNegotiation(gig: string, from: string, to: string) {
		return new Promise((resolve, reject) => {
			API.call("POST", "/API/Request", {
				from,
				to,
				type: "GigNegotiation",
				userData: {
					gigId: gig
				}
			}).then(
				(data: any) => {
					resolve(new Request(data));
				},
				reject);
		});
	}

	public static getAllOwned() {
		return ModelClass.findManyBase(Request, null);
	}

	public static findById(id: string) {
		return ModelClass.findByIdBase(Request, id);
	}

	public async execute(option: string) {
		const request = await API.call(
			"POST",
			`/API/Request/${this._id}/${option}`,
			null
		);
		this.assign(request);
		return this;
	}
}
