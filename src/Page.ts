/**
 * Created by corynull on 8/1/17.
 */

import API from "./API";
import RESTModel from "./RESTModel";

export default class Page extends RESTModel {
	public static ModelName: string = "Page";

	get data(): string {
		return this.getField("data");
	}

	set data(value: string) {
		this.setField("data", value);
	}

	get metadata(): string {
		return this.getField("metadata");
	}

	set metadata(value: string) {
		this.setField("metadata", value);
	}

	get title(): string {
		return this.getField("title");
	}

	set title(value: string) {
		this.setField("title", value);
	}

	get link(): string {
		return this.getField("link");
	}

	set link(value: string) {
		this.setField("link", value);
	}

	get visits(): number {
		return this.getField("visits") || 0;
	}

	set visits(value: number) {
		this.setField("visits", value);
	}

	get revisions(): number {
		return this.getField("revisions") || 0;
	}

	set revisions(value: number) {
		this.setField("revisions", value);
	}

	get hide(): boolean {
		const value = this.getField("hide");
		return value === null ? true : Boolean(value);
	}

	set hide(value: boolean) {
		this.setField("hide", value);
	}

	get blog(): boolean {
		const value = this.getField("blog");
		return Boolean(value);
	}

	set blog(value: boolean) {
		this.setField("blog", value);
	}

	get doc(): boolean {
		const value = this.getField("doc");
		return Boolean(value);
	}

	set doc(value: boolean) {
		this.setField("doc", value);
	}

	get admin(): string {
		return this.getField("admin");
	}

	set admin(value: string) {
		this.setField("admin", value);
	}

	public static findMany(criteria: any, skip?: number, limit?: number):
		Promise<Page[]> {
		if (criteria) {
			criteria.skip = criteria.skip || skip;
			criteria.limit = criteria.limit || limit;
		}
		return RESTModel.findManyBase(Page, criteria) as Promise<Page[]>;
	}

	public static findOne(criteria: any): Promise<Page | null> {
		return RESTModel.findOneBase(Page, criteria) as Promise<Page | null>;
	}

	public static findById(id: string): Promise<Page | null> {
		return RESTModel.findByIdBase(Page, id) as Promise<Page | null>;
	}

	public static findByLink(link: string): Promise<Page | null> {
		return new Promise((resolve, reject) => {
			API.call("GET", `/API/Link/${link}`, null).then(
				(page: any) => {
					resolve(new Page(page));
				},
				reject);
		});
	}

	public isValid(): boolean {
		if (!super.isValid()) { return false; }
		if (!this.title) { return false; }
		if (this.title === "") { return false; }
		return true;
	}

	public userIsOwner(user: any): boolean {
		if (typeof user === "string") { return user === this.admin; }
		if (typeof user === "function" && user && user.isValid()) {
			return user._id === this.admin || user.admin;
		}
		return false;
	}
}
