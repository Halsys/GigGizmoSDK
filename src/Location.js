/**
 * Created by corynull on 9/7/17.
 */

import API from "./API";
import RESTModel from "./RESTModel";
import GooglePlace from "./GooglePlace";

export default class Location extends RESTModel {
	static ModelName = "Location";

	get type() {
		return this.document.type || "Point";
	}

	set type(value) {
		this.document.type = value;
		this.document.dateModified = Date.now();
	}

	get placeId() {
		return this.document.placeId || null;
	}

	set placeId(value) {
		this.document.placeId = value;
		this.document.dateModified = Date.now();
	}

	get address() {
		return this.document.address || null;
	}

	set address(value) {
		this.document.address = value;
		this.document.dateModified = Date.now();
	}

	get point() {
		return this.document.point || null;
	}

	set point(value) {
		this.document.point = value;
		this.document.dateModified = Date.now();
	}

	get utcOffset() {
		return this.document.utcOffset || null;
	}

	set utcOffset(value) {
		this.document.utcOffset = value;
		this.document.dateModified = Date.now();
	}

	valid() {
		if (!super.valid()) return false;
		if (!this.placeId) return false;
		if (!this.address) return false;
		if (!this.utcOffset) return false;
		if (!this.point) return false;
		return true;
	}

	getPlaceDetails() {
		return GooglePlace.getPlaceDetails(this.placeId);
	}

	static getLocationByPlaceId(placeId, token) {
		return new Promise((resolve, reject) => {
			if (!placeId) {
				reject(new Error(`Invaild placeId: ${placeId}`));
			} else {
				API.Call("GET", `/API/Place/${placeId}`, { token }).then(location => {
					if (location) {
						resolve(new Location(location));
					} else {
						reject(new Error(`${location} returned`));
					}
				}, reject);
			}
		});
	}

	static findById(id, token) {
		return RESTModel.findById(Location, id, token);
	}
}
