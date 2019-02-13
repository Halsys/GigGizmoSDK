/**
 * Created by corynull on 5/23/17.
 */
import RESTModel from "./RESTModel";
export default class Post extends RESTModel {
		public static ModelName: string;
		public userId: string;
		public network: string;
		public accountId: string;
		public pageId: string;
		public postText: string;
		public postDate: string;
		public coordinates: number[];
		public error: string;
		public done: boolean;
		public static findById(id: string): Promise<any>;
		public static getAllOwned(): Promise<any[]>;
		public static findMany(criteria: object | null): Promise<any[]>;
		public isValid(): boolean;
		public canSave(): boolean;
		public userIsOwner(user: any): boolean;
}
