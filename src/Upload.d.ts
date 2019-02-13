/**
 * Created by corynull on 4/10/17.
 */
import RESTModel from "./RESTModel";
export default class Upload extends RESTModel {
		public static ModelName: string;
		public fileName: string;
		public fileData: string;
		public title: string;
		public description: string;
		public owners: string[];
		public static uploadFile(dataUrl: string, fileName: string): Promise<Upload>;
		public static findById(id: string): Promise<any>;
		public static findMany(criteria: object | null): Promise<any[]>;
		public static getAllOwned(): Promise<any[]>;
		public getOwners(): Promise<any[]>;
		public userIsOwner(user: any): boolean;
		public isValid(): boolean;
}
