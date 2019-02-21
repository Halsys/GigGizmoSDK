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
		public static findById(id: string): Promise<ErrorReport | null>;
		public static findOne(criteria: any): Promise<ErrorReport | null>;
		public static findMany(criteria: object | null):
			Promise<ErrorReport[]>;
		public isValid(): boolean;
}
