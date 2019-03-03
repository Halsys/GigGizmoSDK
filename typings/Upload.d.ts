/**
 * Created by corynull on 4/10/17.
 */
import { RESTModel } from "./RESTModel";
import { User } from "./User";

export class Upload extends RESTModel {
		public static ModelName: string;
		public fileData: string;
		public description: string;
		public owners: string[];
		public hash: number;
		public bytes: number;
		public width: number;
		public height: number;
		public offsetWidth: number;
		public offsetHeight: number;
		public offsetLeft: number;
		public offsetTop: number;
		public static uploadFile(dataUrl: string, fileName: string): Promise<Upload>;
		public static findById(id: string): Promise<Upload | null>;
		public static findOne(criteria: any): Promise<Upload | null>;
		public static findMany(criteria: any): Promise<Upload[]>;
		public static getAllOwned(): Promise<Upload[]>;
		public getOwners(): Promise<User[]>;
		public userIsOwner(user: any): boolean;
		public isValid(): boolean;
		public anyErrors(): Error | null;
}
