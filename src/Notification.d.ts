/**
 * Created by corynull on 8/15/17.
 */
import RESTModel from "./RESTModel";
export default class Notification extends RESTModel {
		public static ModelName: string;
		public static Callbacks: Map<any, any>;
		private changeCallbacks;
		public userId: string;
		public label: string;
		public message: string;
		public actions: string[];
		public seenByUser: boolean;
		public static onNewNotification(note: any): void;
		public static newCallback(callback: any): () => boolean;
		public static getNewNotifications(): Promise<Notification[]>;
		public static getAllOwned(): Promise<any[]>;
		public static findById(id: string): Promise<any>;
		public static connectSocket(): void;
		public static setUpPushNotifications(): void;
		public newChangeCallback(callback: any): () => boolean;
}
