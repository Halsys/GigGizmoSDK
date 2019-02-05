/**
 * Created by corynull on 5/17/17.
 */
import RESTModel from "./RESTModel";
export default class TwitterAccount extends RESTModel {
    static ModelName: string;
    userId: string;
    accessToken: string;
    tokenSecret: string;
    profile: string;
    accountId: string;
    static findById(id: string): Promise<{}>;
    getUser(): Promise<any>;
    userIsOwner(user: any): boolean;
    goToTwitterAccount(): void;
    isValid(): boolean;
}
