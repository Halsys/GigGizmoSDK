/**
 * Created by corynull on 4/3/17.
 */
import Gig from "./Gig";
import RESTModel from "./RESTModel";
export default class Band extends RESTModel {
		public static ModelName: string;
		public name: string;
		public website: string;
		public email: string;
		public cityName: string;
		public cityPlaceID: string;
		public description: string;
		public metadata: string;
		public icon: string;
		public photos: string[];
		public owners: string[];
		public facebook: string;
		public facebookPageId: string;
		public facebookPageName: string;
		public facebookPageToken: string;
		public twitter: string;
		public google: string;
		public static findOne(criteria: object | null): Promise<any>;
		public static findMany(criteria: object | null): Promise<any[]>;
		public static findById(id: string): Promise<any>;
		public static getAllOwned(): Promise<any[]>;
		public save(): any;
		public remove(): any;
		public getIcon(): Promise<any>;
		public getPhotos(): Promise<any[]>;
		public getOwners(): Promise<any[]>;
		public getGigs(): Promise<Gig[]>;
		public getTwitterAccount(): Promise<any>;
		public getFacebookAccount(): Promise<any>;
		public isValid(): boolean;
		public userIsOwner(user: any): boolean;
}
