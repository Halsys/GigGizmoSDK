/**
 * Created by corynull on 8/1/17.
 */
import RESTModel from "./RESTModel";
export default class Page extends RESTModel {
    static ModelName: string;
    data: any;
    metadata: any;
    title: any;
    link: any;
    visits: any;
    revisions: any;
    hide: boolean;
    blog: boolean;
    doc: boolean;
    admin: any;
    isValid(): boolean;
    userIsOwner(user: any): any;
    static findMany(criteria: any): Promise<any[]>;
    static findOne(criteria: any): Promise<any>;
    static findById(id: string): Promise<any>;
    static findByLink(link: string): Promise<{}>;
}
