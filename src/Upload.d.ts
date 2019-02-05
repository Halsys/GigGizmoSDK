/**
 * Created by corynull on 4/10/17.
 */
import RESTModel from "./RESTModel";
export default class Upload extends RESTModel {
    static ModelName: string;
    fileName: string;
    fileData: string;
    title: string;
    description: string;
    owners: string[];
    static uploadFile(dataUrl: string, fileName: string): Promise<Upload>;
    static findById(id: string): Promise<any>;
    static findMany(criteria: object | null): Promise<any[]>;
    static getAllOwned(): Promise<any[]>;
    getOwners(): Promise<any[]>;
    userIsOwner(user: any): boolean;
    isValid(): boolean;
}
