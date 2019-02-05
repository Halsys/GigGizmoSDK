/**
 * Created by corynull on 5/23/17.
 */
import RESTModel from "./RESTModel";
export default class Post extends RESTModel {
    static ModelName: string;
    userId: string;
    network: string;
    accountId: string;
    pageId: string;
    postText: string;
    postDate: string;
    coordinates: number[];
    error: string;
    done: boolean;
    static findById(id: string): Promise<any>;
    static getAllOwned(): Promise<any[]>;
    static findMany(criteria: object | null): Promise<any[]>;
    isValid(): boolean;
    canSave(): boolean;
    userIsOwner(user: any): boolean;
}
