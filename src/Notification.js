/**
 * Created by corynull on 8/15/17.
 */

import API from "./API";
import { default as RESTModel } from "./RESTModel";

export default class Notification extends RESTModel {
	static ModelName = "Notification";
	static Callbacks = new Map();

	get userId() {
		return this.getField("userId");
	}

	set userId(value) {
		this.setField("userId", value);
	}

	get label() {
		return this.getField("label");
	}

	set label(value) {
		this.setField("label", value);
	}

	get message() {
		return this.getField("message");
	}

	set message(value) {
		this.setField("message", value);
	}

	get actions() {
		return this.getField("actions");
	}

	set actions(value) {
		this.setField("actions", value);
	}

	get seenByUser() {
		return this.getField("seenByUser");
	}

	set seenByUser(value) {
		this.setField("seenByUser", value);
	}

	constructor(data) {
		super(data);
		this.changeCallbacks = {};
	}

	newChangeCallback(callback) {
		const i = Date.now();
		this.changeCallbacks[i] = callback;
		return () => delete this.changeCallbacks[i];
	}

	static onNewNotification(note) {
		Notification.Callbacks.forEach(callback => callback(note));
	}

	static newCallback(callback) {
		const callbackId = Date.now();
		Notification.Callbacks.set(callbackId, callback);
		return () => Notification.Callbacks.delete(callbackId);
	}

	static getNewNotifications(token) {
		return new Promise((resolve, reject) => {
			API.Call("GET", "/API/Notification", {
				token,
				returnNew: true
			}).then(notes => {
				resolve(Array.from(notes || []).map(item => new Notification(item)));
			}, reject);
		});
	}

	static getAllOwned(token) {
		return RESTModel.findMany(Notification, null, token, true);
	}

	static findById(id, token) {
		return RESTModel.findById(Notification, id, token, true);
	}

	static connectSocket(token) {
		if (token)
			API.GetSocket(token).then(socket => {
				socket.on("notification", data =>
					Notification.onNewNotification(new Notification(data))
				);
			}, console.error);
	}
}
