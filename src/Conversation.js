/**
 * Created by corynull on Dec 30 2017 11:14:11 AM.
 */
import moment from "moment";

import { ModelNameToModel } from "./index";
import API from "./API";
import RESTModel from "./RESTModel";

export default class Conversation extends RESTModel {
	static ModelName = "Conversation";
	static Callbacks = new Map();

	get events() {
		return this.getField("events") || [];
	}

	set events(value) {
		this.setField("events", value);
	}

	get users() {
		return this.getField("users") || [];
	}

	set users(value) {
		this.setField("users", value);
	}

	valid() {
		if (!super.valid()) return false;
		// TODO: do more tests...
		return true;
	}

	pushMessage(user, message, token) {
		const { events } = this;
		events.push({
			user,
			message,
			dateTimePosted: moment()
		});
		this.events = events;
		return this.save(token);
	}

	// TODO: inviteNewUser(user, newUser, token) {}

	static newCallback(callback) {
		const callbackId = Date.now();
		Conversation.Callbacks.set(callbackId, callback);
		return () => Conversation.Callbacks.delete(callbackId);
	}

	static connectSocket(token) {
		if (token)
			API.GetSocket(token).then(socket => {
				socket.on("/API/Conversation/Update", data => {
					if (data) {
						let conv = RESTModel.Cache.get(data._id) || null;
						if (conv) conv = Object.assign(conv, data);
						else conv = new Conversation(data);
						RESTModel.Cache.set(conv._id, conv);
						Conversation.Callbacks.forEach(cb => cb(conv));
					}
				});
			}, console.error);
	}

	static findById(id, token) {
		return RESTModel.findById("Conversation", id, token, true);
	}

	static getAllOwned(token) {
		return RESTModel.findMany("Conversation", null, token, true);
	}
}
