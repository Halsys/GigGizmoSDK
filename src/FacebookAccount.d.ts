/**
 * Created by corynull on Nov 30 2017 9:08 AM.
 */
import RESTModel from "./RESTModel";
export default class FacebookAccount extends RESTModel {
    static ModelName: string;
    userId: any;
    accountId: any;
    userAccessToken: any;
    userRefreshToken: any;
    readonly profile: any;
    getUser(): Promise<any[]>;
    userIsOwner(user: any): boolean;
    isValid(): boolean;
    static findById(id: string): Promise<{}>;
    static findPage(pageName: string): Promise<{}>;
    static PostToPage(format: string, text: string, pageId: string, postDateTime: string): Promise<{}>;
}
