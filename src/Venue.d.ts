/**
 * Created by corynull on 4/5/17.
 */
import Gig from "./Gig";
import RESTModel from "./RESTModel";
export default class Venue extends RESTModel {
    static ModelName: string;
    name: string;
    description: string;
    email: string;
    website: string;
    phone: string;
    location: string;
    openCloseTimes: string;
    icon: string;
    photos: string[];
    owners: string[];
    facebook: string;
    facebookPageId: string;
    facebookPageName: string;
    facebookPageToken: string;
    twitter: string;
    google: string;
    static findOne(criteria: object | null): Promise<any>;
    static findMany(criteria: object | null): Promise<any[]>;
    static findById(id: string): Promise<any>;
    static getAllOwned(): Promise<any[]>;
    save(): any;
    remove(): any;
    getIcon(): Promise<any>;
    getPhotos(): Promise<any[]>;
    getOwners(): Promise<any[]>;
    getGigs(): Promise<Gig[]>;
    getTwitterAccount(): Promise<any>;
    getFacebookAccount(): Promise<any>;
    getLocation(): Promise<any>;
    isValid(): boolean;
    userIsOwner(user: any): boolean;
}