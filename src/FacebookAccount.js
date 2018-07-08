/**
 * Created by corynull on Nov 30 2017 9:08 AM.
 */

import RESTModel from "./RESTModel";
import User from "./User";
import API from "./API";

module.exports = class FacebookAccount extends RESTModel {
	static ModelName = "FacebookAccount";

	get userId() {
		return this.getField("userId");
	}

	set userId(value) {
		this.setField("userId", value);
	}

	get accountId() {
		return this.getField("accountId");
	}

	set accountId(value) {
		this.setField("accountId", value);
	}

	get userAccessToken() {
		return this.getField("userAccessToken");
	}

	set userAccessToken(value) {
		this.setField("userAccessToken", value);
	}

	get userRefreshToken() {
		return this.getField("userRefreshToken");
	}

	set userRefreshToken(value) {
		this.setField("userRefreshToken", value);
	}

	get profile() {
		return this.getField("profile");
	}

	getUser() {
		return User.getUserById(this.userId);
	}

	userIsOwner(user) {
		if (typeof user === "string") return user === this.userId;
		else if (typeof user === "object" && user) return user._id === this.userId;
		return false;
	}

	valid() {
		if (!RESTModel.prototype.valid.call(this)) return false;
		if (!this.userId || typeof this.userId !== "string") return false;
		if (!this.profile || typeof this.profile !== "object") return false;
		if (!this.accountId || typeof this.accountId !== "string") return false;
		return true;
	}

	static findById(id, token) {
		return new Promise((resolve, reject) => {
			if (typeof id === "string" && id !== "")
				API.Call("GET", `/API/FacebookAccount/${id}`, { token }).then(found => {
					const account = found || null;
					if (account) resolve(new FacebookAccount(account));
					else reject(new Error(`${account} returned`));
				}, reject);
			else resolve(null);
		});
	}

	static findPage(pageName) {
		return new Promise((resolve, reject) => {
			if (typeof pageName !== "string") {
				reject(new Error("pageName is not a string!"));
			} else {
				API.Call("GET", "/API/Facebook/Page/Find", {
					name: pageName
				}).then(resolve, reject);
			}
		});
	}

	static PostToPage(format, text, pageId, postDateTime) {
		return new Promise((resolve, reject) => {
			API.Call("POST", "/API/Facebook/Page/Post", {
				post_format: format,
				post_text: text,
				fb_page_id: pageId,
				publish_time: postDateTime // .getTime() / 1000
			}).then(resolve, reject);
		});
	}
};
