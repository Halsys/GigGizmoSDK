/**
 * Created by corynull on Nov 30 2017 5:27 AM.
 */

import { API } from "./API";
import { RESTModel } from "./RESTModel";

export class Request extends RESTModel {
	public static ModelName: string = "Request";

	get to(): string {
		return this.getField("to");
	}

	set to(value: string) {
		this.setField("to", value);
	}

	get from(): string {
		return this.getField("from");
	}

	set from(value: string) {
		this.setField("from", value);
	}

	get status(): string {
		return this.getField("status");
	}

	set status(value: string) {
		this.setField("status", value);
	}

	get options(): string[] {
		return this.getField("options");
	}

	set options(value: string[]) {
		this.setField("options", value);
	}

	get type(): string {
		return this.getField("type");
	}

	set type(value: string) {
		this.setField("type", value);
	}

	get userData(): any {
		return this.getField("userData");
	}

	set userData(value: any) {
		this.setField("userData", value);
	}

	get emailSent(): boolean {
		return this.getField("emailSent");
	}

	set emailSent(value: boolean) {
		this.setField("emailSent", value);
	}

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
		return RESTModel.findManyBase(Request, null);
	}

	public static findById(id: string) {
		return RESTModel.findByIdBase(Request, id);
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
