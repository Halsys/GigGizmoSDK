/**
 * Created by corynull on 5/17/17.
 */
import RESTModel from "./RESTModel";
import User from "./User";

export default class TwitterAccount extends RESTModel {
		public static ModelName: string;
		public userId: string;
		public accessToken: string;
		public tokenSecret: string;
		public profile: any;
		public accountId: string;
		public static findById(id: string): Promise<TwitterAccount | null>;
		public static findOne(criteria: object | null):
			Promise<TwitterAccount | null>;
		public static findMany(criteria: object | null):
			Promise<TwitterAccount[]>;
		public getUser(): Promise<User | null>;
		public userIsOwner(user: any): boolean;
		public goToTwitterAccount(): void;
		public isValid(): boolean;
}
