/**
 * Created by corynull on 4/7/17.
 */

import { keys } from "ts-transformer-keys";
import { API } from "./API";
import { DocumentI, ModelClass } from "./Model";

interface GooglePlaceI extends DocumentI {
	placeId: string;
	details: any;
}

export class GooglePlace extends ModelClass<GooglePlaceI> {
	public static ModelName: string = "GooglePlace";

	public static findById(id: string): Promise<GooglePlace | null> {
		return ModelClass.findByIdBase(GooglePlace, id) as
			Promise<GooglePlace | null>;
	}

	public static findOne(criteria: any): Promise<GooglePlace | null> {
		return ModelClass.findOneBase(GooglePlace, criteria) as
			Promise<GooglePlace | null>;
	}

	public static findMany(criteria: any): Promise<GooglePlace[]> {
		return ModelClass.findManyBase(GooglePlace, criteria) as
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

	public constructor(props: GooglePlaceI) {
		super(keys<GooglePlaceI>(), props);
	}
}
