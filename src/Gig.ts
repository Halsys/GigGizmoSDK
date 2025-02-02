/**
 * Created by corynull on 4/5/17.
 */

import { keys } from "ts-transformer-keys";
import { API } from "./API";
import { Band } from "./Band";
import { Location } from "./Location";
import { DocumentI, ModelClass } from "./Model";
import { Venue } from "./Venue";

export interface Coord {
	lat: number;
	lng: number;
}

interface GigI extends DocumentI {
	startTime: Date;
	stopTime: Date;
	location: string;
	venue: string;
	bands: string[];
	toBeAnnounced: boolean;
	bandOwnersAccepted: string[];
	venueOwnerAccepted: string;
	owners: string[];
}

export class Gig extends ModelClass<GigI> {
	public static ModelName: string = "Gig";

	public static findById(id: string): Promise<Gig | null> {
		return ModelClass.findByIdBase(Gig, id) as Promise<Gig | null>;
	}

	public static async findByBand(bandId: string): Promise<Gig[]> {
		const data = await API.call("GET", `/API/Band/${bandId}/Gigs`, null);
		if (data && Array.isArray(data)) {
			return data.map((itemData: any) => {
				const item = new Gig(itemData);
				ModelClass.CacheSet<Gig>(item);
				return item;
			});
		}
		throw new Error(`Expected Array, got ${data}`);
	}

	public static async findByVenue(venueId: string): Promise<Gig[]> {
		const data = await API.call("GET", `/API/Venue/${venueId}/Gigs`, null);
		if (data && Array.isArray(data)) {
			return data.map((itemData: any) => {
				const item = new Gig(itemData);
				ModelClass.CacheSet<Gig>(item);
				return item;
			});
		}
		throw new Error(`Expected Array, got ${data}`);
	}

	public static getAllOwned(): Promise<Gig[]> {
		return ModelClass.findManyBase(Gig, null) as Promise<Gig[]>;
	}

	public static findMany(criteria: object | null): Promise<Gig[]> {
		return ModelClass.findManyBase(Gig, criteria) as Promise<Gig[]>;
	}

	public static createGigs(gigData: object): Promise<Gig[]> {
		return new Promise((resolve, reject) => {
			const data: any = gigData || {};
			if (data && typeof data === "object") {
				if (!data.band || data.band === "") {
					return reject(new Error("Band is required"));
				}
				if (!data.venue || data.venue === "") {
					return reject(new Error("Venue is required"));
				}
				if (!data.times || data.times.length === 0) {
					return reject(new Error("Times is required"));
				}
				const filtered = data.times.filter(
					(
						time: { dayDate: any; startTime: any; stopTime: any },
						i: number
					) => {
						if (time.dayDate && time.startTime && time.stopTime) {
							const dayDate = new Date(time.dayDate);

							const startTime = new Date(time.startTime);
							startTime.setFullYear(dayDate.getFullYear());
							startTime.setMonth(dayDate.getMonth());
							startTime.setDate(dayDate.getDay());

							const stopTime = new Date(time.stopTime);
							stopTime.setFullYear(dayDate.getFullYear());
							stopTime.setMonth(dayDate.getMonth());
							stopTime.setDate(dayDate.getDay());
							data.times[i] = {
								startTime: time.startTime,
								stopTime: time.stopTime
							};
							return true;
						} else if (time.startTime && time.stopTime) {
							data.times[i] = {
								startTime: time.startTime,
								stopTime: time.stopTime
							};
							return true;
						}
						return false;
					}
				);
				if (filtered.length !== data.times.length) {
					return reject(new Error("Not all times were valid"));
				}
				data.times = filtered;
				const request = API.call("POST", "/API/Gig", data);
				return request.then(
					((response: any) => {
						let gigs: Gig[] = [];
						gigs = Array.from(response || []).map((itemData: any) => {
							const gig = new Gig(itemData);
							return gig;
						});
						resolve(gigs);
					}),
					reject);
			}
			return null;
		});
	}

	public static getAllInDistance(
		location: Coord,
		distance: number
	): Promise<Gig[]> {
		return new Promise((resolve, reject) => {
			if (typeof location !== "object") {
				return reject(new Error("location is not a object!"));
			}
			if (typeof location.lat !== "number" ||
				typeof location.lng !== "number") {
				return reject(new Error("location does not contain lat or lng!"));
			}
			if (typeof distance !== "number") {
				return reject(new Error("radius is not a number!"));
			}

			return API.call("GET", "/API/Gig/InDistance", {
				dis: distance,
				lat: location.lat,
				lng: location.lng
			}).then(
				((gigs: object[]) => {
					resolve(
						Array.from(gigs).map((item: any) => {
							const gig = new Gig(item);
							return gig;
						})
					);
				}),
				reject);
		});
	}

	public constructor(props: GigI) {
		super(keys<GigI>(), props);
	}

	public getBands(): Promise<Band[]> {
		return ModelClass.findManyBase(Band, { _id: this.bands }) as
			Promise<Band[]>;
	}

	public getVenue(): Promise<Venue> {
		return ModelClass.findByIdBase(Venue, this.venue) as
			Promise<Venue>;
	}

	public getLocation(): Promise<Location> {
		return ModelClass.findByIdBase(Location, this.location) as
			Promise<Location>;
	}

	public isValid(): boolean {
		if (!super.isValid()) { return false; }
		if (!Array.isArray(this.owners)) { return false; }
		if (this.owners.length === 0) { return false; }
		return true;
	}

	public userIsOwner(user: any): boolean {
		if (Array.isArray(this.owners)) {
			let userId: string;
			if (typeof user === "string") {
				userId = user;
			} else if (typeof user === "object" && user) {
				userId = user._id;
			}
			return this.owners.find((id: string) => id === userId) !== undefined;
		}
		return false;
	}
}
