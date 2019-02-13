/**
 * Created by corynull on 9/7/17.
 */

import API from "./API";
import GooglePlace from "./GooglePlace";
import RESTModel from "./RESTModel";

export default class Location extends RESTModel {
	public static ModelName: string = "Location";

	get type() {
		return this.getField("type") || "Point";
	}

	set type(value: string) {
		this.setField("type", value);
	}

	get placeId() {
		return this.getField("placeId");
	}

	set placeId(value: string) {
		this.setField("placeId", value);
	}

	get address() {
		return this.getField("address");
	}

	set address(value: string) {
		this.setField("address", value);
	}

	get point() {
		return this.getField("point");
	}

	set point(value: number[]) {
		this.setField("point", value);
	}

	get utcOffset() {
		return this.getField("utcOffset");
	}

	set utcOffset(value: number) {
		this.setField("utcOffset", value);
	}

	public static getLocationByPlaceId(placeId: string) {
		return new Promise((resolve, reject) => {
			if (!placeId) {
				reject(new Error(`Invaild placeId: ${placeId}`));
			} else {
				API.call("GET", `/API/Place/${placeId}`, null).then(
					((location: any) => {
						if (location) {
							resolve(new Location(location));
						} else {
							reject(new Error(`${location} returned`));
						}
					}),
					reject);
			}
		});
	}

	public static findById(id: string) {
		return RESTModel.findByIdBase(Location, id);
	}

	public isValid() {
		if (!super.isValid()) { return false; }
		if (!this.placeId) { return false; }
		if (!this.address) { return false; }
		if (!this.utcOffset) { return false; }
		if (!Array.isArray(this.point)) { return false; }
		return true;
	}

	public getPlaceDetails() {
		return GooglePlace.getPlaceDetails(this.placeId);
	}
}
