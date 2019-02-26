/**
 * Created by corynull on 8/15/17.
 */

import { API } from "./API";
import { RESTModel } from "./RESTModel";

export interface NotificationAction {
	label: string;
	link: string;
	request: string;
}

export type NotificationCallback = (note: Notification) => void;
export type NotificationCallbackDestroyer = () => void;

export class Notification extends RESTModel {
	public static ModelName: string = "Notification";
	public static Callbacks: Map<number, NotificationCallback> = new Map();
	private changeCallbacks: Map<number, NotificationCallback> = new Map();

	get userId(): string {
		return this.getField("userId");
	}

	set userId(value: string) {
		this.setField("userId", value);
	}

	get label(): string {
		return this.getField("label");
	}

	set label(value: string) {
		this.setField("label", value);
	}

	get message(): string {
		return this.getField("message");
	}

	set message(value: string) {
		this.setField("message", value);
	}

	get actions(): NotificationAction[] {
		return this.getField("actions");
	}

	set actions(value: NotificationAction[]) {
		this.setField("actions", value);
	}

	get seenByUser(): boolean {
		return this.getField("seenByUser");
	}

	set seenByUser(value: boolean) {
		this.setField("seenByUser", value);
	}

	public static onNewNotification(note: any) {
		Notification.Callbacks.forEach((callback: any) => callback(note));
	}

	public static newCallback(callback: any): NotificationCallbackDestroyer {
		const callbackId = Date.now();
		Notification.Callbacks.set(callbackId, callback);
		return () => Notification.Callbacks.delete(callbackId);
	}

	public static async getNewNotifications(): Promise<Notification[]> {
		if (API.token !== null) {
			const notes = await API.call("GET", "/API/Notification", {
				returnNew: true
			});
			if (Array.isArray(notes)) {
				return notes.map((item: any) => new Notification(item));
			}
		}
		return [];
	}

	public static getAllOwned(): Promise<Notification[]> {
		return RESTModel.findManyBase("Notification", null, true) as Promise<Notification[]>;
	}

	public static findById(id: string): Promise<Notification | null> {
		return RESTModel.findByIdBase("Notification", id, true) as Promise<Notification | null>;
	}

	public static connectSocket() {
		API.getSocket().then(
			(socket: SocketIOClient.Socket | null) => {
				if (socket) {
					socket.on("notification", (data: any) =>
						Notification.onNewNotification(new Notification(data))
					);
				}
			},
			console.error);
	}

	public static setUpPushNotifications() {
		const PushSupported =
			typeof window !== "undefined" &&
			typeof (window as any).Notification !== "undefined";
		const webNotification = (PushSupported) ? (window as any).Notification : null;
		if (PushSupported) {
			const setup = (permission: string) => {
				if (permission === "granted") {
					Notification.onNewNotification((note: Notification) => {
						return new webNotification(note.label, {
							body: note.message,
							data: note,
							icon: "/LogoSmall.png",
							timestamp: note.dateCreated
						});
					});
				}
			};
			if (webNotification.permission === "granted") {
				setup(webNotification.permission);
			} else {
				webNotification.requestPermission(setup);
			}
		}
	}

	public newChangeCallback(callback: any): NotificationCallbackDestroyer {
		const i = Date.now();
		this.changeCallbacks.set(i, callback);
		return () => { this.changeCallbacks.delete(i); };
	}
}
