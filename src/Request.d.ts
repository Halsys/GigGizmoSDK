/**
 * Created by corynull on Nov 30 2017 5:27 AM.
 */
import RESTModel from "./RESTModel";
export default class Request extends RESTModel {
		public static ModelName: string;
		public to: string;
		public from: string;
		public status: string;
		public options: string[];
		public type: string;
		public userData: any;
		public emailSent: boolean;
		public static createBandOwnershipRequest(band: string, from: string, to: string): Promise<{}>;
		public static createVenueOwnershipRequest(venue: string, from: string, to: string): Promise<{}>;
		public static createGigNegotiation(gig: string, from: string, to: string): Promise<{}>;
		public static getAllOwned(): Promise<any[]>;
		public static findById(id: string): Promise<any>;
		public execute(option: string): Promise<this>;
}
