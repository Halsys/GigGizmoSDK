/**
 * Created by corynull on 4/5/17.
 */
import { Band } from "./Band";
import { Location } from "./Location";
import { RESTModel } from "./RESTModel";
import { Venue } from "./Venue";

interface Coord {
		lat: number;
		lng: number;
}

export class Gig extends RESTModel {
		public static ModelName: string;
		public startTime: Date;
		public stopTime: Date;
		public location: string;
		public venue: string;
		public bands: string[];
		public readonly active: any;
		public toBeAnnounced: boolean;
		public bandOwnersAccepted: string[];
		public venueOwnerAccepted: string;
		public owners: string[];
		public static findById(id: string): Promise<Gig | null>;
		public static findMany(criteria: object | null): Promise<Gig[]>;
		public static findOne(criteria: object | null): Promise<Gig | null>;
		public static findByBand(bandId: string): Promise<Gig[]>;
		public static findByVenue(venueId: string): Promise<Gig[]>;
		public static getAllOwned(): Promise<Gig[]>;
		public static createGigs(gigData: object): Promise<Gig[]>;
		public static getAllInDistance(location: Coord, distance: number):
			Promise<Gig[]>;
		public getBands(): Promise<Band[]>;
		public getVenue(): Promise<Venue | null>;
		public getLocation(): Promise<Location | null>;
		public isValid(): boolean;
		public userIsOwner(user: any): boolean;
}
