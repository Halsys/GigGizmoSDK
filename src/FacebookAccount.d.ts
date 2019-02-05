/**
 * Created by corynull on Nov 30 2017 9:08 AM.
 */
import RESTModel from "./RESTModel";
export default class FacebookAccount extends RESTModel {
    static ModelName: string;
    userId: string;
    accountId: string;
    userAccessToken: string;
    userRefreshToken: string;
    readonly profile: any;
    static findById(id: string): Promise<{}>;
    static findPage(pageName: string): Promise<{}>;
    static PostToPage(format: string, text: string, pageId: string, postDateTime: string): Promise<{}>;
    getUser(): Promise<any[]>;
    userIsOwner(user: any): boolean;
    isValid(): boolean;
}
