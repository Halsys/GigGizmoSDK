/**
 * Created by corynull on 4/7/17.
 */

import API from "./API";
import { default as RESTModel } from "./RESTModel";

export default class GooglePlace extends RESTModel {
	static ModelName = "GooglePlace";

	get placeId() {
		return this.getField("placeId");
	}

	set placeId(value) {
		this.setField("placeId", value);
	}

	get details() {
		return this.getField("details");
	}

	set details(value) {
		this.setField("details", value);
	}

	static getPlaceDetails(placeId) {
		return new Promise((resolve, reject) => {
			if (typeof placeId !== "string")
				return reject(new Error("placeId is not a string!"));
			return API.Call("GET", "/API/GooglePlace", { placeId }).then(
				resolve,
				reject
			);
		});
	}

	static queryPlace(text, maybeType) {
		return new Promise((resolve, reject) => {
			const type = maybeType || "locality";
			if (typeof text !== "string")
				return reject(new Error("text is not a string!"));
			if (text === "") return reject(new Error("text is blank"));
			return API.Call("GET", "/API/GooglePlace/Query", {
				term: text,
				type
			}).then(resolve, reject);
		});
	}
}
