/**
 * Created by corynull on 4/3/17.
 */
import Gig from "./Gig";
import RESTModel from "./RESTModel";
export default class Band extends RESTModel {
    static ModelName: string;
    name: any;
    website: any;
    email: any;
    cityName: any;
    cityPlaceID: any;
    description: any;
    metadata: any;
    icon: any;
    photos: any;
    owners: any;
    facebook: any;
    facebookPageId: any;
    facebookPageName: any;
    facebookPageToken: any;
    twitter: any;
    google: any;
    save(): any;
    remove(): any;
    getIcon(): Promise<any>;
    getPhotos(): Promise<any[]>;
    getOwners(): Promise<any[]>;
    getGigs(): Promise<Gig[]>;
    getTwitterAccount(): Promise<any>;
    getFacebookAccount(): Promise<any>;
    isValid(): boolean;
    userIsOwner(user: any): boolean;
    static findOne(criteria: object | null): Promise<any>;
    static findMany(criteria: object | null): Promise<any[]>;
    static findById(id: string): Promise<any>;
    static getAllOwned(): Promise<any[]>;
}
