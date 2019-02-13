/**
 * Created by corynull on 4/5/17.
 */
import RESTModel from "./RESTModel";
export default class Gig extends RESTModel {
		public static ModelName: string;
		public startTime: string;
		public stopTime: Date;
		public location: string;
		public venue: string;
		public bands: string[];
		public readonly active: any;
		public toBeAnnounced: boolean;
		public bandOwnersAccepted: string[];
		public venueOwnerAccepted: string;
		public owners: string[];
		public static findById(id: string): Promise<any>;
		public static findByBand(bandId: string): Promise<Gig[]>;
		public static findByVenue(venueId: string): Promise<Gig[]>;
		public static getAllOwned(): Promise<any[]>;
		public static findMany(criteria: object | null): Promise<any[]>;
		public static createGigs(gigData: object): Promise<{}>;
		public static getAllInDistance(location: {
				lat: number;
				lng: number;
		},                             distance: number): Promise<{}>;
		public getBands(): Promise<any[]>;
		public getVenue(): Promise<any>;
		public getLocation(): Promise<any>;
		public isValid(): boolean;
		public userIsOwner(user: any): boolean;
}
