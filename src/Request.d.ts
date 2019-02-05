/**
 * Created by corynull on Nov 30 2017 5:27 AM.
 */
import RESTModel from "./RESTModel";
export default class Request extends RESTModel {
    static ModelName: string;
    to: string;
    from: string;
    status: string;
    options: string[];
    type: string;
    userData: any;
    emailSent: boolean;
    static createBandOwnershipRequest(band: string, from: string, to: string): Promise<{}>;
    static createVenueOwnershipRequest(venue: string, from: string, to: string): Promise<{}>;
    static createGigNegotiation(gig: string, from: string, to: string): Promise<{}>;
    static getAllOwned(): Promise<any[]>;
    static findById(id: string): Promise<any>;
    execute(option: string): Promise<this>;
}
