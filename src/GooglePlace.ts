/**
 * Created by corynull on 4/7/17.
 */

import API from "./API";
import RESTModel from "./RESTModel";

export default class GooglePlace extends RESTModel {
	public static ModelName: string = "GooglePlace";

	get placeId(): string {
		return this.getField("placeId") || this.getField("place_id");
	}

	set placeId(value: string) {
		this.setField("placeId", value);
	}

	get details(): string {
		return this.getField("details");
	}

	set details(value: string) {
		this.setField("details", value);
	}

	get description(): string {
		return this.getField("description");
	}

	set description(value: string) {
		this.setField("description", value);
	}

	public static findById(id: string): Promise<GooglePlace | null> {
		return RESTModel.findByIdBase(GooglePlace, id) as
			Promise<GooglePlace | null>;
	}

	public static findOne(criteria: any): Promise<GooglePlace | null> {
		return RESTModel.findOneBase(GooglePlace, criteria) as
			Promise<GooglePlace | null>;
	}

	public static findMany(criteria: any): Promise<GooglePlace[]> {
		return RESTModel.findManyBase(GooglePlace, criteria, false) as
			Promise<GooglePlace[]>;
	}

	public static getPlaceDetails(placeId: string): Promise<any> {
		return new Promise((resolve, reject) => {
			if (typeof placeId !== "string") {
				return reject(new Error("placeId is not a string!"));
			}
			return API.call("GET", "/API/GooglePlace", { placeId }).then(
				resolve,
				reject
			);
		});
	}

	public static queryPlace(text: string, maybeType: string):
		Promise<GooglePlace[]> {
		return new Promise((resolve, reject) => {
			const type = maybeType || "locality";
			if (typeof text !== "string") {
				return reject(new Error("text is not a string!"));
			}
			if (text.length === 0) {
				return reject(new Error("text is blank"));
			}
			return API.call("GET", "/API/GooglePlace/Query", {
				term: text,
				type
			}).then(resolve, reject);
		});
	}
}
