/**
 * Created by corynull on 4/5/17.
 */
import RESTModel from "./RESTModel";
export default class Gig extends RESTModel {
    static ModelName: string;
    startTime: string;
    stopTime: Date;
    location: string;
    venue: string;
    bands: string[];
    readonly active: any;
    toBeAnnounced: boolean;
    bandOwnersAccepted: string[];
    venueOwnerAccepted: string;
    owners: string[];
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
    getBands(): Promise<any[]>;
    getVenue(): Promise<any>;
    getLocation(): Promise<any>;
    isValid(): boolean;
    userIsOwner(user: any): boolean;
}
