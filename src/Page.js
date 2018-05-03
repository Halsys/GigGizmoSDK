/**
 * Created by corynull on 8/1/17.
 */

import API from "./API";
import RESTModel from "./RESTModel";

export default class Page extends RESTModel {
	static ModelName = "Page";

	get data() {
		return this.document.data || null;
	}

	set data(value) {
		this.document.dateModified = Date.now();
		this.document.data = value;
	}

	get metadata() {
		return this.document.metadata || null;
	}

	set metadata(value) {
		this.document.dateModified = Date.now();
		this.document.metadata = value;
	}

	get title() {
		return this.document.title || null;
	}

	set title(value) {
		this.document.dateModified = Date.now();
		this.document.title = value;
	}

	get link() {
		return this.document.link || null;
	}

	set link(value) {
		this.document.dateModified = Date.now();
		this.document.link = value;
	}

	get visits() {
		return this.document.visits || 0;
	}

	set visits(value) {
		this.document.dateModified = Date.now();
		this.document.visits = value;
	}

	get revisions() {
		return this.document.revisions || 0;
	}

	set revisions(value) {
		this.document.dateModified = Date.now();
		this.document.revisions = value;
	}

	get hide() {
		return typeof this.document.hide !== "undefined"
			? this.document.hide
			: true;
	}

	set hide(value) {
		this.document.dateModified = Date.now();
		this.document.hide = value;
	}

	get blog() {
		return typeof this.document.blog !== "undefined"
			? this.document.blog
			: false;
	}

	set blog(value) {
		this.document.dateModified = Date.now();
		this.document.blog = value;
	}

	get doc() {
		return typeof this.document.doc !== "undefined"
			? this.document.doc
			: false;
	}

	set doc(value) {
		this.document.dateModified = Date.now();
		this.document.doc = value;
	}

	get admin() {
		return this.document.admin || null;
	}

	set admin(value) {
		this.document.dateModified = Date.now();
		this.document.admin = value;
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
