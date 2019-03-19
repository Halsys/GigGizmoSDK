/**
 * Created by corynull on 5/23/17.
 */

import { keys } from "ts-transformer-keys";
import { DocumentI, ModelClass } from "./Model";

interface PostI extends DocumentI {
	accountId: string;
	coordinates: number[];
	done: boolean;
	error: any;
	network: string;
	pageId: string;
	postDate: Date;
	postText: string;
	userId: string;
}

export class Post extends ModelClass<PostI> {
	public static ModelName: string = "Post";

	public static findById(id: string): Promise<Post | null> {
		return ModelClass.findByIdBase(Post, id) as Promise<Post | null>;
	}

	public static findOne(criteria: any): Promise<Post | null> {
		return ModelClass.findOneBase(Post, criteria) as Promise<Post | null>;
	}

	public static getAllOwned(): Promise<Post[]> {
		return ModelClass.findManyBase(Post, null) as Promise<Post[]>;
	}

	public static findMany(criteria: object | null): Promise<Post[]> {
		return ModelClass.findManyBase(Post, criteria) as Promise<Post[]>;
	}

	public constructor(props: PostI) {
		super(keys<PostI>(), props);
	}

	public isValid(): boolean {
		if (!super.isValid()) { return false; }
		return true;
	}

	public canSave(): boolean {
		if (!this.postDate) { return false; }
		if (!this.postText || this.postText === "") { return false; }
		if (!this.network) {
			// TODO: Do network validation
			return false;
		}
		return true;
	}

	public userIsOwner(user: any): boolean {
		if (typeof user === "string") { return user === this.userId; }
		if (typeof user === "function" && user && user.isValid()) {
			return user._id === this.userId;
		}
		return false;
	}
}
