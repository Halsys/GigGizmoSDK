/**
 * Created by corynull on 5/17/17.
 */
import RESTModel from "./RESTModel";
export default class TwitterAccount extends RESTModel {
		public static ModelName: string;
		public userId: string;
		public accessToken: string;
		public tokenSecret: string;
		public profile: string;
		public accountId: string;
		public static findById(id: string): Promise<{}>;
		public getUser(): Promise<any>;
		public userIsOwner(user: any): boolean;
		public goToTwitterAccount(): void;
		public isValid(): boolean;
}
