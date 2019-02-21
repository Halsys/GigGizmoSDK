/**
 * Created by corynull on 5/17/17.
 */

import API from "./API";
import RESTModel from "./RESTModel";
import User from "./User";

export default class TwitterAccount extends RESTModel {
	public static ModelName: string = "TwitterAccount";

	get userId(): string {
		return this.getField("userId");
	}

	set userId(value: string) {
		this.setField("userId", value);
	}

	get accessToken(): string {
		return this.getField("accessToken");
	}

	set accessToken(value: string) {
		this.setField("accessToken", value);
	}

	get tokenSecret(): string {
		return this.getField("tokenSecret");
	}

	set tokenSecret(value: string) {
		this.setField("tokenSecret", value);
	}

	get profile(): any {
		return this.getField("profile");
	}

	set profile(value: any) {
		this.setField("profile", value);
	}

	get accountId(): string {
		return this.getField("accountId");
	}

	set accountId(value: string) {
		this.setField("accountId", value);
	}

	public static findOne(criteria: object | null): Promise<TwitterAccount | null> {
		return RESTModel.findOneBase(TwitterAccount, criteria, true) as
			Promise<TwitterAccount | null>;
	}

	public static findMany(criteria: object | null): Promise<TwitterAccount[]> {
		return RESTModel.findManyBase(TwitterAccount, criteria, true) as
			Promise<TwitterAccount[]>;
	}

	public static findById(id: string): Promise<TwitterAccount | null> {
		return new Promise((resolve, reject) => {
			if (typeof id === "string" && id !== "") {
				API.call("GET", `/API/TwitterAccount/${id}`, null).then(
					(response: any) => {
						const account = response || null;
						if (account) {
							resolve(new TwitterAccount(account));
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

	public getUser(): Promise<User | null> {
		return RESTModel.findByIdBase(User, this.userId, true) as
			Promise<User | null>;
	}

	public userIsOwner(user: any): boolean {
		if (typeof user === "string") { return user === this.userId; }
		if (typeof user === "function") { return user._id === this.userId; }
		return false;
	}

	public goToTwitterAccount(): void {
		if (typeof window !== "undefined") {
			// We are on a browser
			window.location.href = `https://twitter.com?profile_id=${this.accountId}`;
		}
	}

	public isValid(): boolean {
		if (!super.isValid()) { return false; }
		if (!this.userId || typeof this.userId !== "string") { return false; }
		if (!this.profile || typeof this.profile !== "object") { return false; }
		return true;
	}
}
