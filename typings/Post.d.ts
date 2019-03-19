/**
 * Created by corynull on 5/23/17.
 */
import { ModelClass } from "./Model";
export class Post extends ModelClass<any> {
		public static ModelName: string;
		public userId: string;
		public network: string;
		public accountId: string;
		public pageId: string;
		public postText: string;
		public postDate: string;
		public coordinates: number[];
		public error: string;
		public done: boolean;
		public static findById(id: string): Promise<Post | null>;
		public static findOne(criteria: any): Promise<Post | null>;
		public static getAllOwned(): Promise<Post[]>;
		public static findMany(criteria: any): Promise<Post[]>;
		public isValid(): boolean;
		public canSave(): boolean;
		public userIsOwner(user: any): boolean;
}
