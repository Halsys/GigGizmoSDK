/**
 * Created by corynull on 5/17/17.
 */

import { keys } from "ts-transformer-keys";
import { API } from "./API";
import { DocumentI, ModelClass } from "./Model";
import { User } from "./User";

interface TwitterAccountI extends DocumentI {
	userId: string;
	accountId: string;
	accessToken: string;
	tokenSecret: string;
	profile: any;
}

export class TwitterAccount extends ModelClass<TwitterAccountI> {
	public static ModelName: string = "TwitterAccount";

	public static findOne(criteria: object | null): Promise<TwitterAccount | null> {
		return ModelClass.findOneBase(TwitterAccount, criteria) as
			Promise<TwitterAccount | null>;
	}

	public static findMany(criteria: object | null): Promise<TwitterAccount[]> {
		return ModelClass.findManyBase(TwitterAccount, criteria) as
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

	public constructor(props: TwitterAccountI) {
		super(keys<TwitterAccountI>(), props);
	}

	public getUser(): Promise<User | null> {
		return ModelClass.findByIdBase(User, this.userId) as
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
