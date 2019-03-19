/**
 * Created by corynull on 4/10/17.
 */

import { keys } from "ts-transformer-keys";
import { DocumentI, ModelClass } from "./Model";
import { User } from "./User";

interface UploadI extends DocumentI {
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

export class Upload extends ModelClass<UploadI> {
	public static ModelName: string = "Upload";

	public static findById(id: string): Promise<Upload | null> {
		return ModelClass.findByIdBase<Upload>(Upload, id);
	}

	public static findMany(criteria: any): Promise<Upload[]> {
		return ModelClass.findManyBase<Upload>(Upload, criteria);
	}

	public static findOne(criteria: any): Promise<Upload | null> {
		return ModelClass.findOneBase<Upload>(Upload, criteria);
	}

	public static getAllOwned(): Promise<Upload[]> {
		return ModelClass.findManyBase<Upload>(Upload, null);
	}

	public constructor(props: UploadI) {
		super(keys<UploadI>(), props);
	}

	public getOwners(): Promise<User[]> {
		const owners = Array.from(this.owners);
		if (owners.length !== 0) {
			return ModelClass.findManyBase<User>(
				User, { _id: owners }
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
