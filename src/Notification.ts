/**
 * Created by corynull on 8/15/17.
 */

import { keys } from "ts-transformer-keys";
import { API } from "./API";
import { DocumentI, ModelClass } from "./Model";

export interface NotificationAction {
	label: string;
	link: string;
	request: string;
}

interface NotificationI extends DocumentI {
	actions: NotificationAction[];
	label: string;
	message: string;
	seenByUser: boolean;
	userId: string;
}

export type NotificationCallback = (note: Notification) => void;
export type NotificationCallbackDestroyer = () => void;

export class Notification extends ModelClass<NotificationI> {
	public static ModelName: string = "Notification";
	public static Callbacks: Map<number, NotificationCallback> = new Map();
	private changeCallbacks: Map<number, NotificationCallback> = new Map();

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
			const notes = await API.call("GET", "/API/Notification/FindMany", null);
			if (Array.isArray(notes)) {
				return notes.map((item: any) => new Notification(item));
			}
		}
		return [];
	}

	public static getAllOwned(): Promise<Notification[]> {
		return ModelClass.findManyBase("Notification", null) as Promise<Notification[]>;
	}

	public static findById(id: string): Promise<Notification | null> {
		return ModelClass.findByIdBase("Notification", id) as Promise<Notification | null>;
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

	public constructor(props: NotificationI) {
		super(keys<NotificationI>(), props);
	}

	public newChangeCallback(callback: any): NotificationCallbackDestroyer {
		const i = Date.now();
		this.changeCallbacks.set(i, callback);
		return () => { this.changeCallbacks.delete(i); };
	}
}
