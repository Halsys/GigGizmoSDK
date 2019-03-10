/**
 * Created by corynull on 9/7/17.
 */

import { API } from "./API";
import { GooglePlace } from "./GooglePlace";
import { Document, RESTModel } from "./RESTModel";

type LocationType = "Point" | "LineString" | "Polygon";

interface LocationI extends Document {
	type: LocationType;
	placeId: string;
	address: string;
	point: number[];
	utcOffset: number;
}

export class Location extends RESTModel<LocationI> {
	public static ModelName: string = "Location";

	get type(): LocationType { return this.getField("type") || "Point"; }
	set type(value: LocationType) { this.setField("type", value); }

	get placeId(): string { return this.getField("placeId"); }
	set placeId(value: string) { this.setField("placeId", value); }

	get address(): string { return this.getField("address"); }
	set address(value: string) { this.setField("address", value); }

	get point(): number[] { return this.getField("point"); }
	set point(value: number[]) { this.setField("point", value); }

	get utcOffset(): number { return this.getField("utcOffset"); }
	set utcOffset(value: number) { this.setField("utcOffset", value); }

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
		return RESTModel.findByIdBase(Location, id) as
			Promise<Location | null>;
	}

	public static findOne(criteria: any): Promise<Location | null> {
		return RESTModel.findOneBase(Location, criteria) as
			Promise<Location | null>;
	}

	public static findMany(criteria: any): Promise<Location[]> {
		return RESTModel.findManyBase(Location, criteria, false) as
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
