/**
 * Created by corynull on 4/10/17.
 */

import { RESTModel } from "./RESTModel";
import { User } from "./User";

export class Upload extends RESTModel {
	public static ModelName: string = "Upload";

	get fileName(): string {
		return this.getField("fileName");
	}

	set fileName(value: string) {
		this.setField("fileName", value);
	}

	get fileData(): string {
		return this.getField("fileData");
	}

	set fileData(value: string) {
		this.setField("fileData", value);
	}

	get title(): string {
		return this.getField("title");
	}

	set title(value: string) {
		this.setField("title", value);
	}

	get description(): string {
		return this.getField("description");
	}

	set description(value: string) {
		this.setField("description", value);
	}

	get owners(): string[] {
		return this.getField("owners");
	}

	set owners(value: string[]) {
		this.setField("owners", value);
	}

	public static async uploadFile(dataUrl: string, fileName: string): Promise<Upload> {
		let upload = new Upload({ fileData: dataUrl, fileName });
		upload = await upload.save(true);
		return upload;
	}

	public static findById(id: string): Promise<Upload | null> {
		return RESTModel.findByIdBase(Upload, id) as Promise<Upload | null>;
	}

	public static findMany(criteria: any): Promise<Upload[]> {
		return RESTModel.findManyBase(Upload, criteria, true) as Promise<Upload[]>;
	}

	public static findOne(criteria: any): Promise<Upload | null> {
		return RESTModel.findOneBase(Upload, criteria) as Promise<Upload | null>;
	}

	public static getAllOwned(): Promise<Upload[]> {
		return RESTModel.findManyBase(Upload, null, true) as Promise<Upload[]>;
	}

	public getOwners(): Promise<User[]> {
		const owners = Array.from(this.owners);
		if (owners.length !== 0) {
			return RESTModel.findManyBase(
				User,
				{
					_id: owners
				},
				true
			) as Promise<User[]>;
		}
		return Promise.resolve([]);
	}

	public userIsOwner(user: any): boolean {
		if (Array.isArray(this.owners)) {
			let userId: string;
			if (typeof user === "string") {
				userId = user;
			} else if (typeof user === "object" && user) {
				userId = user._id;
			}
			return this.owners.find((id: string) => id === userId) !== undefined;
		}
		return false;
	}

	public isValid(): boolean {
		if (!super.isValid()) { return false; }
		if (!this.title) { return false; }
		if (!this.description) { return false; }
		if (!this.fileData) { return false; }
		if (!this.fileName) { return false; }
		if (!Array.isArray(this.owners)) { return false; }
		if (this.owners.length === 0) { return false; }
		return true;
	}
}
