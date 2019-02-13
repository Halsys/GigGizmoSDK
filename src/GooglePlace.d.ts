/**
 * Created by corynull on 4/7/17.
 */
import RESTModel from "./RESTModel";
export default class GooglePlace extends RESTModel {
		public static ModelName: string;
		public placeId: string;
		public details: string;
		public static getPlaceDetails(placeId: string): Promise<{}>;
		public static queryPlace(text: string, maybeType: string): Promise<{}>;
}
