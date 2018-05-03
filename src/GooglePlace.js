/**
 * Created by corynull on 4/7/17.
 */

import API from "./API";
import RESTModel from "./RESTModel";

export default class GooglePlace extends RESTModel {
	static ModelName = "GooglePlace";

	get placeId() {
		return this.document.placeId || null;
	}

	set placeId(value) {
		this.document.placeId = value;
		this.document.dateModified = Date.now();
	}

	get details() {
		return this.document.details || null;
	}

	set details(value) {
		this.document.details = value;
		this.document.dateModified = Date.now();
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

	static queryPlace(text, type) {
		return new Promise((resolve, reject) => {
			if (typeof text !== "string")
				return reject(new Error("text is not a string!"));
			if (text === "") return reject(new Error("text is blank"));
			if (typeof type !== "string" && type != null)
				return reject(new Error("type is not a string or null!"));
			return API.Call("GET", "/API/GooglePlace/Query", {
				term: text,
				type
			}).then(resolve, reject);
		});
	}
}
