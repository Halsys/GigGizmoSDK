/**
 * Created by corynull on 8/1/17.
 */
import RESTModel from "./RESTModel";
export default class Page extends RESTModel {
		public static ModelName: string;
		public data: string;
		public metadata: string;
		public title: string;
		public link: string;
		public visits: number;
		public revisions: number;
		public hide: boolean;
		public blog: boolean;
		public doc: boolean;
		public admin: string;
		public static findMany(criteria: any): Promise<any[]>;
		public static findOne(criteria: any): Promise<any>;
		public static findById(id: string): Promise<any>;
		public static findByLink(link: string): Promise<{}>;
		public isValid(): boolean;
		public userIsOwner(user: any): any;
}
