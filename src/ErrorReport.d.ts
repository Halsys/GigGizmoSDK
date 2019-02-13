/**
 * Created by corynull on Jan 8 2018 8:58:54 PM.
 */
import RESTModel from "./RESTModel";
export default class ErrorReport extends RESTModel {
		public static ModelName: string;
		public version: string;
		public userId: string;
		public stack: string;
		public message: string;
		public name: string;
		public fileName: string;
		public columnNumber: number;
		public lineNumber: number;
		public static findById(id: string): Promise<any>;
		public static findMany(criteria: object | null): Promise<any[]>;
		public isValid(): boolean;
}
