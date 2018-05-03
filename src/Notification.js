/**
 * Created by corynull on 8/15/17.
 */

import API from "./API";
import RESTModel from "./RESTModel";

export default class Notification extends RESTModel {
	static ModelName = "Notification";
	static Callbacks = new Map();

	get userId() {
		return this.document.userId || null;
	}

	set userId(value) {
		this.document.userId = value;
		this.document.dateModified = Date.now();
	}

	get label() {
		return this.document.label || null;
	}

	set label(value) {
		this.document.label = value;
		this.document.dateModified = Date.now();
	}

	get message() {
		return this.document.message || null;
	}

	set message(value) {
		this.document.message = value;
		this.document.dateModified = Date.now();
	}

	get actions() {
		return this.document.actions || null;
	}

	set actions(value) {
		this.document.actions = value;
		this.document.dateModified = Date.now();
	}

	get seenByUser() {
		return this.document.seenByUser || null;
	}

	set seenByUser(value) {
		this.document.seenByUser = value;
		this.document.dateModified = Date.now();
	}

	constructor(data) {
		super(data);
		this.changeCallbacks = {};
	}

	newChangeCallback(callback) {
		const i = Date.now();
		this.changeCallbacks[i] = callback;
		return () => {
			delete this.changeCallbacks[i];
		};
	}

	static onNewNotification(note) {
		Notification.Callbacks.forEach(callback => {
			callback(note);
		});
	}

	static newCallback(callback) {
		const callbackId = Date.now();
		Notification.Callbacks.set(callbackId, callback);
		return () => {
			Notification.Callbacks.delete(callbackId);
		};
	}

	static getNewNotifications(token) {
		return new Promise((resolve, reject) => {
			API.Call("GET", "/API/Notification", { token, returnNew: true }).then(
				notes => {
					resolve(
						Array.from(notes || []).map(item => {
							const note = new Notification(item);
							return note;
						})
					);
				},
				reject
			);
		});
	}

	static getAllOwned(token) {
		return RESTModel.findMany(Notification, null, token);
	}

	static findById(id, token) {
		return RESTModel.findById(Notification, id, token);
	}

	static connectSocket(token) {
		if (token) {
			API.GetSocket(token).then(socket => {
				socket.on("notification", data => {
					const notification = new Notification(data);
					Notification.onNewNotification(notification);
				});
			}, console.error);
		}
	}
}
