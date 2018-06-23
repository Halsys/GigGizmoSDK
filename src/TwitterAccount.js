/**
 * Created by corynull on 5/17/17.
 */

import { default as RESTModel } from "./RESTModel";
import { default as User } from "./User";
import API from "./API";

export default class TwitterAccount extends RESTModel {
	static ModelName = "TwitterAccount";

	get userId() {
		return this.getField("userId");
	}

	set userId(value) {
		this.setField("userId", value);
	}

	get accessToken() {
		return this.getField("accessToken");
	}

	set accessToken(value) {
		this.setField("accessToken", value);
	}

	get tokenSecret() {
		return this.getField("tokenSecret");
	}

	set tokenSecret(value) {
		this.setField("tokenSecret", value);
	}

	get profile() {
		return this.getField("profile");
	}

	set profile(value) {
		this.setField("profile", value);
	}

	get accountId() {
		return this.getField("accountId");
	}

	set accountId(value) {
		this.setField("accountId", value);
	}

	getUser() {
		return User.getUserById(this.userId);
	}

	userIsOwner(user) {
		return user._id === this.userId;
	}

	goToTwitterAccount() {
		if (typeof window !== "undefined") {
			// We are on a browser
			window.location.href = `https://twitter.com?profile_id=${this.accountId}`;
		}
	}

	valid() {
		if (!RESTModel.prototype.valid.call(this)) return false;
		if (!this.userId || typeof this.userId !== "string") return false;
		if (!this.profile || typeof this.profile !== "object") return false;
		return true;
	}

	static findById(id) {
		return new Promise((resolve, reject) => {
			if (typeof id === "string" && id !== "")
				API.Call("GET", `/API/TwitterAccount/${id}`).then(response => {
					const account = response || null;
					if (account) resolve(new TwitterAccount(account));
					else reject(new Error(`${account} returned`));
				}, reject);
			else resolve(null);
		});
	}
}
