/**
 * Created by corynull on 5/23/17.
 */

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

	get userId(): string { return this.getField("userId"); }
	set userId(value: string) { this.setField("userId", value); }

	get network(): string { return this.getField("network"); }
	set network(value: string) { this.setField("network", value); }

	get accountId(): string { return this.getField("accountId"); }
	set accountId(value: string) { this.setField("accountId", value); }

	get pageId(): string { return this.getField("pageId"); }
	set pageId(value: string) { this.setField("pageId", value); }

	get postText(): string { return this.getField("postText"); }
	set postText(value: string) { this.setField("postText", value); }

	get postDate(): string { return this.getField("postDate"); }
	set postDate(value: string) { this.setField("postDate", value); }

	get coordinates(): number[] { return this.getField("coordinates"); }
	set coordinates(value: number[]) { this.setField("coordinates", value); }

	get error(): string { return this.getField("error"); }
	set error(value: string) { this.setField("error", value); }

	get done(): boolean { return this.getField("done"); }
	set done(value: boolean) { this.setField("done", value); }

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
