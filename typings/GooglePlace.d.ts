/**
 * Created by corynull on 4/7/17.
 */
import RESTModel from "./RESTModel";
export default class GooglePlace extends RESTModel {
		public static ModelName: string;
		public placeId: string;
		public details: string;
		public description: string;
		public static findById(id: string): Promise<GooglePlace | null>;
		public static findOne(criteria: any): Promise<GooglePlace | null>;
		public static findMany(criteria: any): Promise<GooglePlace[]>;
		public static getPlaceDetails(placeId: string): Promise<any>;
		public static queryPlace(text: string, maybeType: string):
			Promise<GooglePlace[]>;
}
