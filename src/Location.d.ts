/**
 * Created by corynull on 9/7/17.
 */
import RESTModel from "./RESTModel";
export default class Location extends RESTModel {
    static ModelName: string;
    type: string;
    placeId: string;
    address: string;
    point: number[];
    utcOffset: number;
    static getLocationByPlaceId(placeId: string): Promise<{}>;
    static findById(id: string): Promise<any>;
    isValid(): boolean;
    getPlaceDetails(): Promise<{}>;
}
