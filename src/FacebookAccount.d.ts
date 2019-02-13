/**
 * Created by corynull on Nov 30 2017 9:08 AM.
 */
import RESTModel from "./RESTModel";
export default class FacebookAccount extends RESTModel {
		public static ModelName: string;
		public userId: string;
		public accountId: string;
		public userAccessToken: string;
		public userRefreshToken: string;
		public readonly profile: any;
		public static findById(id: string): Promise<{}>;
		public static findPage(pageName: string): Promise<{}>;
		public static PostToPage(format: string, text: string, pageId: string, postDateTime: string): Promise<{}>;
		public getUser(): Promise<any[]>;
		public userIsOwner(user: any): boolean;
		public isValid(): boolean;
}
