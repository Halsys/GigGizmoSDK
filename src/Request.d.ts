/**
 * Created by corynull on Nov 30 2017 5:27 AM.
 */
import RESTModel from "./RESTModel";
export default class Request extends RESTModel {
    static ModelName: string;
    to: any;
    from: any;
    status: any;
    options: any;
    type: any;
    userData: any;
    emailSent: any;
    execute(option: string): Promise<this>;
    static createBandOwnershipRequest(band: string, from: string, to: string): Promise<{}>;
    static createVenueOwnershipRequest(venue: string, from: string, to: string): Promise<{}>;
    static createGigNegotiation(gig: string, from: string, to: string): Promise<{}>;
    static getAllOwned(): Promise<any[]>;
    static findById(id: string): Promise<any>;
}
