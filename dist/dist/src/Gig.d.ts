/**
 * Created by corynull on 4/5/17.
 */
import RESTModel from "./RESTModel";
export default class Gig extends RESTModel {
    static ModelName: string;
    startTime: any;
    stopTime: any;
    location: any;
    venue: any;
    bands: any;
    readonly active: any;
    toBeAnnounced: any;
    bandOwnersAccepted: any;
    venueOwnerAccepted: any;
    owners: any;
    getBands(): Promise<any[]>;
    getVenue(): Promise<any>;
    getLocation(): Promise<any>;
    isValid(): boolean;
    userIsOwner(user: any): boolean;
    static findById(id: string): Promise<any>;
    static findByBand(bandId: string): Promise<Gig[]>;
    static findByVenue(venueId: string): Promise<Gig[]>;
    static getAllOwned(): Promise<any[]>;
    static findMany(criteria: object | null): Promise<any[]>;
    static createGigs(gigData: object): Promise<{}>;
    static getAllInDistance(location: {
        lat: number;
        lng: number;
    }, distance: number): Promise<{}>;
}
