/**
 * Created by corynull on Dec 30 2017 11:14:11 AM.
 */
import RESTModel from "./RESTModel";
export default class Conversation extends RESTModel {
    static ModelName: string;
    static Callbacks: Map<any, any>;
    events: any[];
    users: string[];
    static newCallback(callback: any): () => boolean;
    static connectSocket(): void;
    static findById(id: string): Promise<any>;
    static getAllOwned(): Promise<any[]>;
    isValid(): boolean;
    pushMessage(user: string, message: string): Promise<this>;
}
