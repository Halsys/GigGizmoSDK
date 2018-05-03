/**
 * Created by corynull on 4/10/17.
 */

import User from "./User";
import RESTModel from "./RESTModel";

export default class Upload extends RESTModel {
	static ModelName = "Upload";

	get fileName() {
		return this.document.fileName || null;
	}

	set fileName(value) {
		this.document.fileName = value;
		this.document.dateModified = Date.now();
	}

	get fileData() {
		return this.document.fileData || null;
	}

	set fileData(value) {
		this.document.fileData = value;
		this.document.dateModified = Date.now();
	}

	get title() {
		return this.document.title || null;
	}

	set title(value) {
		this.document.title = value;
		this.document.dateModified = Date.now();
	}

	get description() {
		return this.document.description || null;
	}

	set description(value) {
		this.document.description = value;
		this.document.dateModified = Date.now();
	}

	get owners() {
		return this.document.owners || [];
	}

	set owners(value) {
		this.document.owners = value || [];
		this.document.dateModified = Date.now();
	}

	getOwners(token) {
		const owners = Array.from(this.owners);
		if (owners.length !== 0)
			return User.findMany(
				{
					_id: owners
				},
				token
			);
		return Promise.resolve([]);
	}

	userIsOwner(user) {
		if (Array.isArray(this.owners)) {
			let userId = null;
			if (typeof user === "string") userId = user;
			else if (typeof user === "object" && user) userId = user._id;
			return this.owners.find(id => id === userId) !== undefined;
		}
		return false;
	}

	valid() {
		if (!super.valid()) return false;
		if (!this.title) return false;
		if (!this.description) return false;
		if (!this.fileData) return false;
		if (!this.fileName) return false;
		if (!Array.isArray(this.owners)) return false;
		if (this.owners.length === 0) return false;
		return true;
	}

	static async uploadFile(dataUrl, fileName, token) {
		let upload = new Upload({ fileData: dataUrl, fileName });
		upload = await upload.save(token);
		return upload;
	}

	static findById(id, token) {
		return RESTModel.findById(Upload, id, token);
	}

	static findMany(criteria, token) {
		return RESTModel.findMany(Upload, criteria, token);
	}

	static getAllOwned(token) {
		return RESTModel.findMany(Upload, null, token);
	}
}
