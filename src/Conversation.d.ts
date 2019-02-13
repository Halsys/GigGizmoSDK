/**
 * Created by corynull on Dec 30 2017 11:14:11 AM.
 */
import RESTModel from "./RESTModel";
export default class Conversation extends RESTModel {
		public static ModelName: string;
		public static Callbacks: Map<any, any>;
		public events: any[];
		public users: string[];
		public static newCallback(callback: any): () => boolean;
		public static connectSocket(): void;
		public static findById(id: string): Promise<any>;
		public static getAllOwned(): Promise<any[]>;
		public isValid(): boolean;
		public pushMessage(user: string, message: string): Promise<this>;
}
