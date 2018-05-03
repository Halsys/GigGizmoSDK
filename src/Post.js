/**
 * Created by corynull on 5/23/17.
 */
import moment from "moment";
import RESTModel from "./RESTModel";

export default class Post extends RESTModel {
	static ModelName = "Post";

	get userId() {
		return this.document.userId || null;
	}

	set userId(value) {
		this.document.userId = value;
		this.document.dateModified = Date.now();
	}

	get network() {
		return this.document.network || null;
	}

	set network(value) {
		this.document.network = value;
		this.document.dateModified = Date.now();
	}

	get accountId() {
		return this.document.accountId || null;
	}

	set accountId(value) {
		this.document.accountId = value;
		this.document.dateModified = Date.now();
	}

	get pageId() {
		return this.document.pageId || null;
	}

	set pageId(value) {
		this.document.pageId = value;
		this.document.dateModified = Date.now();
	}

	get postText() {
		return this.document.postText || null;
	}

	set postText(value) {
		this.document.postText = value;
		this.document.dateModified = Date.now();
	}

	get postDate() {
		return this.document.postDate ? moment(this.document.postDate) : null;
	}

	set postDate(value) {
		this.document.postDate = moment(value).toISOString();
		this.document.dateModified = Date.now();
	}

	get coordinates() {
		return this.document.coordinates || null;
	}

	set coordinates(value) {
		this.document.coordinates = value;
		this.document.dateModified = Date.now();
	}

	get error() {
		return this.document.error || null;
	}

	set error(value) {
		this.document.error = value;
		this.document.dateModified = Date.now();
	}

	get done() {
		return this.document.done || false;
	}

	set done(value) {
		this.document.done = value;
		this.document.dateModified = Date.now();
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
		return RESTModel.findById(Post, id, token);
	}

	static getAllOwned(token) {
		return RESTModel.findMany(Post, null, token);
	}

	static findMany(criteria, token) {
		return RESTModel.findMany(Post, criteria, token);
	}
}
