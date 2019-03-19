/**
 * Created by corynull on Dec 30 2017 11:14:11 AM.
 */
import { ModelClass } from "./Model";

export interface ConversationEvent {
	dateTimePosted: Date;
	message: string;
	user: string;
}

export type ConversationCallback = (c: Conversation) => void;
export type ConversationCallbackDestroyer = () => void;

export class Conversation extends ModelClass<any> {
		public static ModelName: string;
		public static Callbacks: Map<any, ConversationCallback>;
		public events: ConversationEvent[];
		public users: string[];
		public static newCallback(callback: ConversationCallback):
			ConversationCallbackDestroyer;
		public static connectSocket(): void;
		public static findById(id: string):
			Promise<Conversation | null>;
		public static findOne(criteria: any):
			Promise<Conversation | null>;
		public static findMany(criteria: any):
			Promise<Conversation[]>;
		public static getAllOwned(): Promise<Conversation[]>;
		public isValid(): boolean;
		public pushMessage(user: string, message: string): Promise<this>;
}
