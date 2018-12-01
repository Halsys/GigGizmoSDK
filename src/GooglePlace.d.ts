/**
 * Created by corynull on 4/7/17.
 */
import RESTModel from "./RESTModel";
export default class GooglePlace extends RESTModel {
    static ModelName: string;
    placeId: any;
    details: any;
    static getPlaceDetails(placeId: string): Promise<{}>;
    static queryPlace(text: string, maybeType: string): Promise<{}>;
}
