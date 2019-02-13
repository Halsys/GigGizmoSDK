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
		public static getLocationByPlaceId(placeId: string): Promise<{}>;
		public static findById(id: string): Promise<any>;
		public isValid(): boolean;
		public getPlaceDetails(): Promise<{}>;
}
