/**
 * Created by corynull on 5/17/17.
 */

import RESTModel from "./RESTModel";
import User from "./User";
import API from "./API";

export default class TwitterAccount extends RESTModel {
	static ModelName = "TwitterAccount";

	get userId() {
		return this.document.userId || null;
	}

	set userId(value) {
		this.document.userId = value;
		this.document.dateModified = Date.now();
	}

	get accessToken() {
		return this.document.accessToken || null;
	}

	set accessToken(value) {
		this.document.accessToken = value;
		this.document.dateModified = Date.now();
	}

	get tokenSecret() {
		return this.document.tokenSecret || null;
	}

	set tokenSecret(value) {
		this.document.tokenSecret = value;
		this.document.dateModified = Date.now();
	}

	get profile() {
		return this.document.profile || null;
	}

	set profile(value) {
		this.document.profile = value;
		this.document.dateModified = Date.now();
	}

	getUser() {
		return User.getUserById(this.userId);
	}

	userIsOwner(user) {
		return user._id === this.userId;
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
