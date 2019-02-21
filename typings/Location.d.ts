/**
 * Created by corynull on 9/7/17.
 */
import RESTModel from "./RESTModel";
export default class Location extends RESTModel {
		public static ModelName: string;
		public type: string;
		public placeId: string;
		public address: string;
		public point: number[];
		public utcOffset: number;
		public static getLocationByPlaceId(placeId: string): Promise<Location>;
		public static findById(id: string): Promise<Location | null>;
		public static findOne(criteria: any): Promise<Location | null>;
		public static findMany(criteria: any): Promise<Location[]>;
		public isValid(): boolean;
		public getPlaceDetails(): Promise<any>;
}