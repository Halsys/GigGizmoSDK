/**
 * Created by corynull on Nov 30 2017 5:27 AM.
 */
import { ModelClass } from "./Model";

export class Request extends ModelClass<any> {
		public static ModelName: string;
		public to: string;
		public from: string;
		public status: string;
		public options: string[];
		public type: string;
		public userData: any;
		public emailSent: boolean;
		public static createBandOwnershipRequest(band: string, from: string, to: string): Promise<Request | null>;
		public static createVenueOwnershipRequest(venue: string, from: string, to: string): Promise<Request | null>;
		public static createGigNegotiation(gig: string, from: string, to: string): Promise<Request | null>;
		public static getAllOwned(): Promise<Request[]>;
		public static findById(id: string): Promise<Request | null>;
		public static findOne(criteria: any): Promise<Request | null>;
		public static findMany(criteria: any): Promise<Request[]>;
		public execute(option: string): Promise<this>;
}
