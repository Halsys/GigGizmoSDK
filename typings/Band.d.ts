/**
 * Created by corynull on 4/3/17.
 */
import { FacebookAccount } from "./FacebookAccount";
import { Gig } from "./Gig";
import { RESTModel } from "./RESTModel";
import { TwitterAccount } from "./TwitterAccount";
import { Upload } from "./Upload";
import { User } from "./User";

export class Band extends RESTModel {
		public static ModelName: string;
		public name: string;
		public website: string;
		public email: string;
		public cityName: string;
		public cityPlaceID: string;
		public description: string;
		public metadata: string;
		public icon: string | null;
		public photos: string[];
		public owners: string[];
		public facebook: string | null;
		public facebookPageId: string | null;
		public facebookPageName: string | null;
		public facebookPageToken: string | null;
		public twitter: string | null;
		public google: string | null;
		public static findOne(criteria: object | null):
			Promise<Band | null>;
		public static findMany(criteria: object | null):
			Promise<Band[]>;
		public static findById(id: string):
			Promise<Band | null>;
		public static getAllOwned(): Promise<Band[]>;
		public save(): Promise<this>;
		public remove(): Promise<this>;
		public getIcon(): Promise<Upload | null>;
		public getPhotos(): Promise<Upload[]>;
		public getOwners(): Promise<User[]>;
		public getGigs(): Promise<Gig[]>;
		public getTwitterAccount():
			Promise<TwitterAccount | null>;
		public getFacebookAccount():
			Promise<FacebookAccount | null>;
		public isValid(): boolean;
		public userIsOwner(user: any): boolean;
}
