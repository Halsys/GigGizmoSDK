/**
 * Created by corynull on 8/1/17.
 */

import API from "./API";
import { default as RESTModel } from "./RESTModel";

export default class Page extends RESTModel {
	static ModelName = "Page";

	get data() {
		return this.getField("data");
	}

	set data(value) {
		this.setField("data", value);
	}

	get metadata() {
		return this.getField("metadata");
	}

	set metadata(value) {
		this.setField("metadata", value);
	}

	get title() {
		return this.getField("title");
	}

	set title(value) {
		this.setField("title", value);
	}

	get link() {
		return this.getField("link");
	}

	set link(value) {
		this.setField("link", value);
	}

	get visits() {
		return this.getField("visits") || 0;
	}

	set visits(value) {
		this.setField("visits", value);
	}

	get revisions() {
		return this.getField("revisions") || 0;
	}

	set revisions(value) {
		this.setField("revisions", value);
	}

	get hide() {
		return typeof this.document.hide !== "undefined"
			? this.document.hide
			: true;
	}

	set hide(value) {
		this.setField("hide", value);
	}

	get blog() {
		return typeof this.document.blog !== "undefined"
			? this.document.blog
			: false;
	}

	set blog(value) {
		this.setField("blog", value);
	}

	get doc() {
		return typeof this.document.doc !== "undefined" ? this.document.doc : false;
	}

	set doc(value) {
		this.setField("doc", value);
	}

	get admin() {
		return this.getField("admin");
	}

	set admin(value) {
		this.setField("admin", value);
	}

	valid() {
		if (!RESTModel.prototype.valid.call(this)) return false;
		if (!this.title) return false;
		if (this.title === "") return false;
		return true;
	}

	userIsOwner(user) {
		if (user && user.valid()) {
			return user._id === this.admin || user.admin;
		}
		return false;
	}

	static findMany(criteria, token) {
		return RESTModel.findMany(Page, criteria, token);
	}

	static findOne(criteria, token) {
		return RESTModel.findOne(Page, criteria, token);
	}

	static findById(id, token) {
		return RESTModel.findById(Page, id, token);
	}

	static findByLink(link) {
		return new Promise((resolve, reject) => {
			API.Call("GET", `/API/Link/${link}`).then(page => {
				resolve(new Page(page));
			}, reject);
		});
	}
}
