/**
 * Created by corynull on 8/15/17.
 */
import RESTModel from "./RESTModel";
export default class Notification extends RESTModel {
    static ModelName: string;
    static Callbacks: Map<any, any>;
    private changeCallbacks;
    userId: string;
    label: string;
    message: string;
    actions: string[];
    seenByUser: boolean;
    static onNewNotification(note: any): void;
    static newCallback(callback: any): () => boolean;
    static getNewNotifications(): Promise<Notification[]>;
    static getAllOwned(): Promise<any[]>;
    static findById(id: string): Promise<any>;
    static connectSocket(): void;
    static setUpPushNotifications(): void;
    newChangeCallback(callback: any): () => boolean;
}
