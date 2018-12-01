/**
 * Created by corynull on 5/23/17.
 */
import RESTModel from "./RESTModel";
export default class Post extends RESTModel {
    static ModelName: string;
    userId: any;
    network: any;
    accountId: any;
    pageId: any;
    postText: any;
    postDate: any;
    coordinates: any;
    error: any;
    done: any;
    isValid(): boolean;
    canSave(): boolean;
    userIsOwner(user: any): boolean;
    static findById(id: string): Promise<any>;
    static getAllOwned(): Promise<any[]>;
    static findMany(criteria: object | null): Promise<any[]>;
}
