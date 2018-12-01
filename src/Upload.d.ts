/**
 * Created by corynull on 4/10/17.
 */
import RESTModel from "./RESTModel";
export default class Upload extends RESTModel {
    static ModelName: string;
    fileName: any;
    fileData: any;
    title: any;
    description: any;
    owners: any;
    getOwners(): Promise<any[]>;
    userIsOwner(user: any): boolean;
    isValid(): boolean;
    static uploadFile(dataUrl: string, fileName: string): Promise<Upload>;
    static findById(id: string): Promise<any>;
    static findMany(criteria: object | null): Promise<any[]>;
    static getAllOwned(): Promise<any[]>;
}
