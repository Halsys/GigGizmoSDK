/**
 * Created by corynull on 4/10/17.
 */

import { RESTModel } from "./RESTModel";
import { User } from "./User";

export class Upload extends RESTModel {
	public static ModelName: string = "Upload";

	get fileData(): string {
		return this.getField("fileData");
	}

	set fileData(value: string) {
		this.setField("fileData", value);
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

	get hash(): string {
		return this.getField("hash");
	}

	set hash(value: string) {
		this.setField("hash", value);
	}

	get bytes(): number {
		return this.getField("bytes");
	}

	set bytes(value: number) {
		this.setField("bytes", value);
	}

	get width(): number {
		return this.getField("width");
	}

	set width(value: number) {
		this.setField("width", value);
	}

	get height(): number {
		return this.getField("height");
	}

	set height(value: number) {
		this.setField("height", value);
	}

	get offsetWidth(): number {
		return this.getField("offsetWidth");
	}

	set offsetWidth(value: number) {
		this.setField("offsetWidth", value);
	}

	get offsetHeight(): number {
		return this.getField("offsetHeight");
	}

	set offsetHeight(value: number) {
		this.setField("offsetHeight", value);
	}

	get offsetLeft(): number {
		return this.getField("offsetLeft");
	}

	set offsetLeft(value: number) {
		this.setField("offsetLeft", value);
	}

	get offsetTop(): number {
		return this.getField("offsetTop");
	}

	set offsetTop(value: number) {
		this.setField("offsetTop", value);
	}

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

	public isValid(): boolean {
		if (!super.isValid()) { return false; }
		if (!this.description) { return false; }
		if (!this.fileData) { return false; }
		if (!this.hash) { return false; }
		if (!this.bytes) { return false; }
		if (!this.width) { return false; }
		if (!this.height) { return false; }
		if (!this.offsetWidth) { return false; }
		if (!this.offsetHeight) { return false; }
		if (!this.offsetLeft) { return false; }
		if (!this.offsetTop) { return false; }
		if (!Array.isArray(this.owners)) { return false; }
		if (this.owners.length === 0) { return false; }
		return true;
	}
}
