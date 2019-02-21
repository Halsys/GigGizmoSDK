/**
 * Created by corynull on Dec 30 2017 11:14:11 AM.
 */

import API from "./API";
import RESTModel from "./RESTModel";

export interface ConversationEvent {
	dateTimePosted: Date;
	message: string;
	user: string;
}

export type ConversationCallback = (c: Conversation | null) => void;
export type ConversationCallbackDestroyer = () => void;

export default class Conversation extends RESTModel {
	public static ModelName: string = "Conversation";
	public static Callbacks:
		Map<number, ConversationCallback> = new Map();

	get events(): ConversationEvent[] {
		return this.getField("events") || [];
	}

	set events(value: ConversationEvent[]) {
		this.setField("events", value);
	}

	get users(): string[] {
		return this.getField("users") || [];
	}

	set users(value: string[]) {
		this.setField("users", value);
	}

	public static newCallback(callback: ConversationCallback):
		ConversationCallbackDestroyer {
		const callbackId = Date.now();
		Conversation.Callbacks.set(callbackId, callback);
		return () => Conversation.Callbacks.delete(callbackId);
	}

	public static connectSocket(): void {
		API.getSocket().then(
			(socket: SocketIOClient.Socket | null) => {
				if (socket) {
					socket.on("/API/Conversation/Update", (data: any) => {
						if (data) {
							let conv: Conversation | null =
								RESTModel.CacheGet(data._id) as Conversation | null;
							if (conv) {
								Object.assign(conv, data);
							} else {
								conv = new Conversation(data);
							}
							RESTModel.Cache.set(conv._id, conv);
							Conversation.Callbacks.forEach((cb) => cb(conv));
						}
					});
				}
			},
			console.error);
	}

	public static findById(id: string): Promise<Conversation | null> {
		return RESTModel.findByIdBase(Conversation, id, true) as
			Promise<Conversation | null>;
	}

	public static findOne(criteria: any): Promise<Conversation | null> {
		return RESTModel.findOneBase(Conversation, criteria) as
			Promise<Conversation | null>;
	}

	public static findMany(criteria: any): Promise<Conversation[]> {
		return RESTModel.findManyBase(Conversation, criteria, false) as
			Promise<Conversation[]>;
	}

	public static getAllOwned(): Promise<Conversation[]> {
		return RESTModel.findManyBase(Conversation, null, true) as
			Promise<Conversation[]>;
	}

	public isValid(): boolean {
		if (!super.isValid()) { return false; }
		// TODO: do more tests...
		return true;
	}

	public pushMessage(user: string, message: string):
		Promise<this> {
		this.events.push({
			dateTimePosted: new Date(),
			message,
			user,
		});
		return this.save();
	}

	// TODO: inviteNewUser(user, newUser, token) {}

}
