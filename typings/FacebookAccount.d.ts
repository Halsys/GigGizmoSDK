/**
 * Created by corynull on Nov 30 2017 9:08 AM.
 */
import { ModelClass } from "./Model";
import { User } from "./User";
export class FacebookAccount extends ModelClass<any> {
		public static ModelName: string;
		public userId: string;
		public accountId: string;
		public userAccessToken: string;
		public userRefreshToken: string;
		public readonly profile: any;
		public static findById(id: string): Promise<FacebookAccount | null>;
		public static findOne(criteria: any): Promise<FacebookAccount | null>;
		public static findMany(criteria: any): Promise<FacebookAccount[]>;
		public static findPage(pageName: string): Promise<any>;
		public static PostToPage(format: string, text: string, pageId: string, postDateTime: string): Promise<any>;
		public getUser(): Promise<User | null>;
		public userIsOwner(user: any): boolean;
		public isValid(): boolean;
}
