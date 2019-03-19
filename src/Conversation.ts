/**
 * Created by corynull on Dec 30 2017 11:14:11 AM.
 */

import { API } from "./API";
import { DocumentI, ModelClass } from "./Model";

export interface ConversationEvent {
	dateTimePosted: Date;
	message: string;
	user: string;
}

export type ConversationCallback = (c: Conversation | null) => void;
export type ConversationCallbackDestroyer = () => void;

interface ConversationDocument extends DocumentI {
	events: ConversationEvent[];
	users: string[];
}

export class Conversation extends ModelClass<ConversationDocument> {
	public static ModelName: string = "Conversation";
	public static Callbacks:
		Map<number, ConversationCallback> = new Map();

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
								ModelClass.CacheGet(data._id) as Conversation | null;
							if (conv) {
								Object.assign(conv, data);
							} else {
								conv = new Conversation(data);
							}
							ModelClass.CacheSet<Conversation>(conv);
							Conversation.Callbacks.forEach((cb) => cb(conv));
						}
					});
				}
			},
			console.error);
	}

	public static findById(id: string): Promise<Conversation | null> {
		return ModelClass.findByIdBase(Conversation, id) as
			Promise<Conversation | null>;
	}

	public static findOne(criteria: any): Promise<Conversation | null> {
		return ModelClass.findOneBase(Conversation, criteria) as
			Promise<Conversation | null>;
	}

	public static findMany(criteria: any): Promise<Conversation[]> {
		return ModelClass.findManyBase(Conversation, criteria) as
			Promise<Conversation[]>;
	}

	public static getAllOwned(): Promise<Conversation[]> {
		return ModelClass.findManyBase(Conversation, null) as
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
