/**
 * Created by corynull on 8/1/17.
 */

import { keys } from "ts-transformer-keys";
import { API } from "./API";
import { DocumentI, ModelClass } from "./Model";

interface PageI extends DocumentI {
	admin: string;
	metadata: string;
	data: string;
	title: string;
	link: string;
	visits: number;
	revisions: number;
	hide: boolean;
	blog: boolean;
	doc: boolean;
}

export class Page extends ModelClass<PageI> {
	public static ModelName: string = "Page";

	public static findMany(criteria: any, skip?: number, limit?: number):
		Promise<Page[]> {
		if (criteria) {
			criteria.skip = criteria.skip || skip;
			criteria.limit = criteria.limit || limit;
		}
		return ModelClass.findManyBase(Page, criteria) as Promise<Page[]>;
	}

	public static findOne(criteria: any): Promise<Page | null> {
		return ModelClass.findOneBase(Page, criteria) as Promise<Page | null>;
	}

	public static findById(id: string): Promise<Page | null> {
		return ModelClass.findByIdBase(Page, id) as Promise<Page | null>;
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

	public constructor(props: PageI) {
		super(keys<PageI>(), props);
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
