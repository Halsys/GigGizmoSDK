/**
 * Created by corynull on 8/15/17.
 */
import RESTModel from "./RESTModel";

export interface NotificationAction {
	label: string;
	link: string;
	request: string;
}
export type NotificationCallback = (note: Notification) => void;
export type NotificationCallbackDestroyer = () => void;

export default class Notification extends RESTModel {
		public static ModelName: string;
		public static Callbacks: Map<string, NotificationCallback>;
		private changeCallbacks: Map<string, NotificationCallback>;
		public userId: string;
		public label: string;
		public message: string;
		public actions: NotificationAction[];
		public seenByUser: boolean;
		public static onNewNotification(note: any): void;
		public static newCallback(callback: NotificationCallback):
			NotificationCallbackDestroyer;
		public static getNewNotifications(): Promise<Notification[]>;
		public static getAllOwned(): Promise<Notification[]>;
		public static findById(id: string): Promise<Notification | null>;
		public static findOne(criteria: any): Promise<Notification | null>;
		public static findMany(criteria: any): Promise<Notification[]>;
		public static connectSocket(): void;
		public static setUpPushNotifications(): void;
		public newChangeCallback(callback: NotificationCallback):
			NotificationCallbackDestroyer;
}
