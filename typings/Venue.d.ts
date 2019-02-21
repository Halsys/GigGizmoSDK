/**
 * Created by corynull on 4/5/17.
 */
import FacebookAccount from "./FacebookAccount";
import Gig from "./Gig";
import Location from "./Location";
import RESTModel from "./RESTModel";
import TwitterAccount from "./TwitterAccount";
import Upload from "./Upload";
import User from "./User";

export default class Venue extends RESTModel {
		public static ModelName: string;
		public name: string;
		public description: string;
		public email: string;
		public website: string;
		public phone: string;
		public location: string | null;
		public openCloseTimes: string;
		public icon: string | null;
		public photos: string[];
		public owners: string[];
		public facebook: string | null;
		public facebookPageId: string | null;
		public facebookPageName: string | null;
		public facebookPageToken: string | null;
		public twitter: string;
		public google: string;
		public static findOne(criteria: object | null): Promise<Venue | null>;
		public static findMany(criteria: object | null): Promise<Venue[]>;
		public static findById(id: string): Promise<Venue | null>;
		public static getAllOwned(): Promise<Venue[]>;
		public save(): Promise<this>;
		public remove(): Promise<this>;
		public getIcon(): Promise<Upload | null>;
		public getPhotos(): Promise<Upload[]>;
		public getOwners(): Promise<User[]>;
		public getGigs(): Promise<Gig[]>;
		public getTwitterAccount(): Promise<TwitterAccount | null>;
		public getFacebookAccount(): Promise<FacebookAccount | null>;
		public getLocation(): Promise<Location | null>;
		public isValid(): boolean;
		public userIsOwner(user: any): boolean;
}
