/**
 * Created by corynull on 5/17/17.
 */
import RESTModel from "./RESTModel";
export default class TwitterAccount extends RESTModel {
    static ModelName: string;
    userId: any;
    accessToken: any;
    tokenSecret: any;
    profile: any;
    accountId: any;
    getUser(): Promise<any>;
    userIsOwner(user: any): boolean;
    goToTwitterAccount(): void;
    isValid(): boolean;
    static findById(id: string): Promise<{}>;
}
