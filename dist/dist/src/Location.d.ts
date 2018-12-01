/**
 * Created by corynull on 9/7/17.
 */
import RESTModel from "./RESTModel";
export default class Location extends RESTModel {
    static ModelName: string;
    type: any;
    placeId: any;
    address: any;
    point: any;
    utcOffset: any;
    isValid(): boolean;
    getPlaceDetails(): Promise<{}>;
    static getLocationByPlaceId(placeId: string): Promise<{}>;
    static findById(id: string): Promise<any>;
}
