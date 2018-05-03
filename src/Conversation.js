/**
 * Created by corynull on Dec 30 2017 11:14:11 AM.
 */
import moment from "moment";
import API from "./API";
import RESTModel from "./RESTModel";

export default class Conversation extends RESTModel {
	static ModelName = "Conversation";
	static Callbacks = new Map();

	get events() {
		return this.document.events || null;
	}

	set events(value) {
		this.document.events = value;
		this.document.dateModified = Date.now();
	}

	get users() {
		return this.document.users || null;
	}

	set users(value) {
		this.document.users = value;
		this.document.dateModified = Date.now();
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
		return () => {
			Conversation.Callbacks.delete(callbackId);
		};
	}

	static connectSocket(token) {
		if (token) {
			API.GetSocket(token).then(socket => {
				socket.on("GigGizmo/Conversation/Update", data => {
					if (data && data._id) {
						let conv = RESTModel.Cache.get(data._id) || null;
						if (conv) conv = Object.assign(conv, data);
						else conv = new Conversation(data);
						RESTModel.Cache.set(conv._id, conv);
						Conversation.Callbacks.forEach(cb => {
							if (cb) cb(conv);
						});
					}
				});
			}, console.error);
		}
	}

	static findById(id, token) {
		return RESTModel.findById(Conversation, id, token);
	}

	static getAllOwned(token) {
		return RESTModel.findMany(Conversation, null, token);
	}
}
