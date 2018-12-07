/**
 * Created by corynull on 8/15/17.
 */
import RESTModel from "./RESTModel";
export default class Notification extends RESTModel {
    static ModelName: string;
    static Callbacks: Map<any, any>;
    private changeCallbacks;
    userId: any;
    label: any;
    message: any;
    actions: any;
    seenByUser: any;
    newChangeCallback(callback: any): () => boolean;
    static onNewNotification(note: any): void;
    static newCallback(callback: any): () => boolean;
    static getNewNotifications(): Promise<Notification[]>;
    static getAllOwned(): Promise<any[]>;
    static findById(id: string): Promise<any>;
    static connectSocket(): void;
    static setUpPushNotifications(): void;
}
