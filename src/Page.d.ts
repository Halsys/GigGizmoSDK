/**
 * Created by corynull on 8/1/17.
 */
import RESTModel from "./RESTModel";
export default class Page extends RESTModel {
    static ModelName: string;
    data: string;
    metadata: string;
    title: string;
    link: string;
    visits: number;
    revisions: number;
    hide: boolean;
    blog: boolean;
    doc: boolean;
    admin: string;
    static findMany(criteria: any): Promise<any[]>;
    static findOne(criteria: any): Promise<any>;
    static findById(id: string): Promise<any>;
    static findByLink(link: string): Promise<{}>;
    isValid(): boolean;
    userIsOwner(user: any): any;
}
