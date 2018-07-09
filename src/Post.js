/**
 * Created by corynull on 5/23/17.
 */

import { ModelNameToModel } from "./index";
import RESTModel from "./RESTModel";

export default class Post extends RESTModel {
	static ModelName = "Post";

	get userId() {
		return this.getField("userId");
	}

	set userId(value) {
		this.setField("userId", value);
	}

	get network() {
		return this.getField("network");
	}

	set network(value) {
		this.setField("network", value);
	}

	get accountId() {
		return this.getField("accountId");
	}

	set accountId(value) {
		this.setField("accountId", value);
	}

	get pageId() {
		return this.getField("pageId");
	}

	set pageId(value) {
		this.setField("pageId", value);
	}

	get postText() {
		return this.getField("postText");
	}

	set postText(value) {
		this.setField("postText", value);
	}

	get postDate() {
		return this.getField("postDate");
	}

	set postDate(value) {
		this.setField("postDate", value);
	}

	get coordinates() {
		return this.getField("coordinates");
	}

	set coordinates(value) {
		this.setField("coordinates", value);
	}

	get error() {
		return this.getField("error");
	}

	set error(value) {
		this.setField("error", value);
	}

	get done() {
		return this.getField("done");
	}

	set done(value) {
		this.setField("done", value);
	}

	valid() {
		if (!RESTModel.prototype.valid.call(this)) return false;
		return true;
	}

	canSave() {
		if (!this.postDate) {
			return false;
		}
		if (!this.postText || this.postText === "") {
			return false;
		}
		if (!this.network) {
			// TODO: Do network validation
			return false;
		}
		return true;
	}

	userIsOwner(user) {
		if (user && user.valid()) {
			return user._id === this.userId;
		}
		return false;
	}

	static findById(id, token) {
		return RESTModel.findById("Post", id, token);
	}

	static getAllOwned(token) {
		return RESTModel.findMany("Post", null, token);
	}

	static findMany(criteria, token) {
		return RESTModel.findMany("Post", criteria, token);
	}
}
