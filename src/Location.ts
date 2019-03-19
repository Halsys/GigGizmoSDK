/**
 * Created by corynull on 9/7/17.
 */

import { API } from "./API";
import { GooglePlace } from "./GooglePlace";
import { DocumentI, ModelClass } from "./Model";

type LocationType = "Point" | "LineString" | "Polygon";

interface LocationI extends DocumentI {
	type: LocationType;
	placeId: string;
	address: string;
	point: number[];
	utcOffset: number;
}

export class Location extends ModelClass<LocationI> {
	public static ModelName: string = "Location";

	public static getLocationByPlaceId(placeId: string): Promise<Location> {
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

	public static findById(id: string): Promise<Location | null> {
		return ModelClass.findByIdBase(Location, id) as
			Promise<Location | null>;
	}

	public static findOne(criteria: any): Promise<Location | null> {
		return ModelClass.findOneBase(Location, criteria) as
			Promise<Location | null>;
	}

	public static findMany(criteria: any): Promise<Location[]> {
		return ModelClass.findManyBase(Location, criteria) as
			Promise<Location[]>;
	}

	public isValid(): boolean {
		if (!super.isValid()) { return false; }
		if (!this.placeId) { return false; }
		if (!this.address) { return false; }
		if (!this.utcOffset) { return false; }
		if (!Array.isArray(this.point)) { return false; }
		return true;
	}

	public getPlaceDetails(): Promise<any> {
		return GooglePlace.getPlaceDetails(this.placeId);
	}
}
