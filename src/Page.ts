/**
 * Created by corynull on 8/1/17.
 */

import API from "./API";
import RESTModel from "./RESTModel";

export default class Page extends RESTModel {
	public static ModelName: string = "Page";

	get data() {
		return this.getField("data");
	}

	set data(value: string) {
		this.setField("data", value);
	}

	get metadata() {
		return this.getField("metadata");
	}

	set metadata(value: string) {
		this.setField("metadata", value);
	}

	get title() {
		return this.getField("title");
	}

	set title(value: string) {
		this.setField("title", value);
	}

	get link() {
		return this.getField("link");
	}

	set link(value: string) {
		this.setField("link", value);
	}

	get visits() {
		return this.getField("visits") || 0;
	}

	set visits(value: number) {
		this.setField("visits", value);
	}

	get revisions() {
		return this.getField("revisions") || 0;
	}

	set revisions(value: number) {
		this.setField("revisions", value);
	}

	get hide() {
		const value = this.getField("hide");
		return value === null ? true : Boolean(value);
	}

	set hide(value: boolean) {
		this.setField("hide", value);
	}

	get blog() {
		const value = this.getField("blog");
		return Boolean(value);
	}

	set blog(value: boolean) {
		this.setField("blog", value);
	}

	get doc() {
		const value = this.getField("doc");
		return Boolean(value);
	}

	set doc(value: boolean) {
		this.setField("doc", value);
	}

	get admin() {
		return this.getField("admin");
	}

	set admin(value: string) {
		this.setField("admin", value);
	}

	public static findMany(criteria: any) {
		return RESTModel.findManyBase(Page, criteria);
	}

	public static findOne(criteria: any) {
		return RESTModel.findOneBase(Page, criteria);
	}

	public static findById(id: string) {
		return RESTModel.findByIdBase(Page, id);
	}

	public static findByLink(link: string) {
		return new Promise((resolve, reject) => {
			API.call("GET", `/API/Link/${link}`, null).then(
				(page: any) => {
					resolve(new Page(page));
				},
				reject);
		});
	}

	public isValid() {
		if (!super.isValid()) { return false; }
		if (!this.title) { return false; }
		if (this.title === "") { return false; }
		return true;
	}

	public userIsOwner(user: any) {
		if (typeof user === "string") { return user === this.admin; }
		if (typeof user === "function" && user && user.isValid()) {
			return user._id === this.admin || user.admin;
		}
		return false;
	}
}
