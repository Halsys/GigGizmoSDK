/**
 * Created by corynull on 4/10/17.
 */

import { Document, RESTModel } from "./RESTModel";
import { User } from "./User";

interface UploadI extends Document {
	fileData: string;
	srcMIMEType: string;
	croppedFileData: string;
	owners: string[];
	description: string;
	hash: string;
	bytes: number;
	width: number;
	height: number;
	offsetWidth: number;
	offsetHeight: number;
	offsetLeft: number;
	offsetTop: number;
}

export class Upload extends RESTModel<UploadI> {
	public static ModelName: string = "Upload";

	get fileData(): string { return this.getField("fileData"); }
	set fileData(value: string) { this.setField("fileData", value); }

	get croppedFileData(): string { return this.getField("croppedFileData"); }
	set croppedFileData(value: string) { this.setField("croppedFileData", value); }

	get description(): string { return this.getField("description"); }
	set description(value: string) { this.setField("description", value); }

	get owners(): string[] { return this.getField("owners"); }
	set owners(value: string[]) { this.setField("owners", value); }

	get hash(): string { return this.getField("hash"); }
	set hash(value: string) { this.setField("hash", value); }

	get bytes(): number { return this.getField("bytes"); }
	set bytes(value: number) { this.setField("bytes", value); }

	get width(): number { return this.getField("width"); }
	set width(value: number) { this.setField("width", value); }

	get height(): number { return this.getField("height"); }
	set height(value: number) { this.setField("height", value); }

	get offsetWidth(): number { return this.getField("offsetWidth"); }
	set offsetWidth(value: number) { this.setField("offsetWidth", value); }

	get offsetHeight(): number { return this.getField("offsetHeight"); }
	set offsetHeight(value: number) { this.setField("offsetHeight", value); }

	get offsetLeft(): number { return this.getField("offsetLeft"); }
	set offsetLeft(value: number) { this.setField("offsetLeft", value); }

	get offsetTop(): number { return this.getField("offsetTop"); }
	set offsetTop(value: number) { this.setField("offsetTop", value); }

	public static async uploadFile(dataUrl: string): Promise<Upload> {
		let upload = new Upload({ fileData: dataUrl });
		upload = await upload.save(true);
		return upload;
	}

	public static findById(id: string): Promise<Upload | null> {
		return RESTModel.findByIdBase<Upload>(Upload, id);
	}

	public static findMany(criteria: any): Promise<Upload[]> {
		return RESTModel.findManyBase<Upload>(Upload, criteria, true);
	}

	public static findOne(criteria: any): Promise<Upload | null> {
		return RESTModel.findOneBase<Upload>(Upload, criteria);
	}

	public static getAllOwned(): Promise<Upload[]> {
		return RESTModel.findManyBase<Upload>(Upload, null, true);
	}

	public getOwners(): Promise<User[]> {
		const owners = Array.from(this.owners);
		if (owners.length !== 0) {
			return RESTModel.findManyBase<User>(
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

	public anyErrors(): Error | null {
		const superError = super.anyErrors();
		if (superError) { return superError; }

		if (!this.description) { return new Error(`Invalid description: ${this.description}`); }
		if (!this.fileData) { return new Error(`Invalid fileData: ${this.fileData}`); }
		if (!this.width) { return new Error(`Invalid width: ${this.width}`); }
		if (!this.height) { return new Error(`Invalid height: ${this.height}`); }
		if (!this.offsetWidth) { return new Error(`Invalid offsetWidth: ${this.offsetWidth}`); }
		if (!this.offsetHeight) { return new Error(`Invalid offsetHeight: ${this.offsetHeight}`); }
		if (typeof this.offsetLeft !== "number" ||
			this.offsetLeft < 0) {
				return new Error(`Invalid offsetLeft: ${this.offsetLeft}`);
			}
		if (typeof this.offsetTop !== "number" ||
			this.offsetTop < 0) {
			return new Error(`Invalid offsetTop: ${this.offsetTop}`);
		}

		if (!this.document.hash) { return new Error(`Invalid hash: ${this.document.hash}`); }
		if (!this.document.bytes) { return new Error(`Invalid bytes: ${this.document.bytes}`); }
		if (!Array.isArray(this.document.owners) ||
			this.document.owners.length === 0) {
			return new Error(`Invalid owners: ${this.document.owners}`);
		}

		return null;
	}
}
