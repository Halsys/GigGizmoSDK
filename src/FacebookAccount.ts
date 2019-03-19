/**
 * Created by corynull on Nov 30 2017 9:08 AM.
 */

import { keys } from "ts-transformer-keys";
import { API } from "./API";
import { DocumentI, ModelClass } from "./Model";
import { User } from "./User";

interface FacebookAccountI extends DocumentI {
	accountId: string;
	pageToken: string;
	profile: any;
	userAccessToken: string;
	userRefreshToken: string;
	userId: string;
}

export class FacebookAccount extends ModelClass<FacebookAccountI> {
	public static ModelName: string = "FacebookAccount";

	public static findOne(criteria: object | null): Promise<FacebookAccount | null> {
		return ModelClass.findOneBase(FacebookAccount, criteria) as
			Promise<FacebookAccount | null>;
	}

	public static findMany(criteria: object | null): Promise<FacebookAccount[]> {
		return ModelClass.findManyBase(FacebookAccount, criteria) as
			Promise<FacebookAccount[]>;
	}

	public static findById(id: string):
	 	Promise<FacebookAccount | null> {
		return new Promise((resolve, reject) => {
			if (typeof id === "string" && id !== "") {
				API.call("GET", `/API/FacebookAccount/${id}`, null).then(
					(found: any) => {
						const account = found || null;
						if (account) {
							resolve(new FacebookAccount(account));
						} else {
							reject(new Error(`${account} returned`));
						}
					},
					reject
				);
			} else {
				resolve();
			}
		});
	}

	public static findPage(pageName: string): Promise<any> {
		return new Promise((resolve, reject) => {
			if (typeof pageName !== "string") {
				reject(new Error("pageName is not a string!"));
			} else {
				API.call("GET", "/API/Facebook/Page/Find", {
					name: pageName
				}).then(resolve, reject);
			}
		});
	}

	public static PostToPage(
		format: string,
		text: string,
		pageId: string,
		postDateTime: string
	): Promise<any> {
		return new Promise((resolve, reject) => {
			API.call("POST", "/API/Facebook/Page/Post", {
				fb_page_id: pageId,
				post_format: format,
				post_text: text,
				publish_time: postDateTime // .getTime() / 1000
			}).then(resolve, reject);
		});
	}

	public constructor(props: FacebookAccountI) {
		super(keys<FacebookAccountI>(), props);
	}

	public getUser(): Promise<User | null> {
		return ModelClass.findByIdBase(User, this.userId) as
			Promise<User | null>;
	}

	public userIsOwner(user: any): boolean {
		if (typeof user === "string") {
			return user === this.userId;
		} else if (typeof user === "object" && user) {
			return user._id === this.userId;
		}
		return false;
	}

	public isValid(): boolean {
		if (!super.isValid()) { return false; }
		if (!this.userId || typeof this.userId !== "string") { return false; }
		if (!this.profile || typeof this.profile !== "object") { return false; }
		if (!this.accountId || typeof this.accountId !== "string") { return false; }
		return true;
	}
}
