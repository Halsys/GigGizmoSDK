/**
 * Created by corynull on Jan 8 2018 8:58:54 PM.
 */

import RESTModel from "./RESTModel";

export default class ErrorReport extends RESTModel {
	static ModelName = "ErrorReport";

	get version() {
		return this.document.version || null;
	}

	set version(value) {
		this.document.version = value;
		this.document.dateModified = Date.now();
	}

	get userId() {
		return this.document.userId || null;
	}

	set userId(value) {
		this.document.userId = value;
		this.document.dateModified = Date.now();
	}

	get stack() {
		return this.document.stack || null;
	}

	set stack(value) {
		this.document.stack = value;
		this.document.dateModified = Date.now();
	}

	get message() {
		return this.document.message || null;
	}

	set message(value) {
		this.document.message = value;
		this.document.dateModified = Date.now();
	}

	get name() {
		return this.document.name || null;
	}

	set name(value) {
		this.document.name = value;
		this.document.dateModified = Date.now();
	}

	get fileName() {
		return this.document.fileName || null;
	}

	set fileName(value) {
		this.document.fileName = value;
		this.document.dateModified = Date.now();
	}

	get columnNumber() {
		return this.document.columnNumber || null;
	}

	set columnNumber(value) {
		this.document.columnNumber = value;
		this.document.dateModified = Date.now();
	}

	get lineNumber() {
		return this.document.lineNumber || null;
	}

	set lineNumber(value) {
		this.document.lineNumber = value;
		this.document.dateModified = Date.now();
	}

	valid() {
		if (!super.valid()) return false;
		// TODO: do more tests...
		return true;
	}

	static findById(id, token) {
		return RESTModel.findById(ErrorReport, id, token);
	}

	static findMany(criteria, token) {
		return RESTModel.findMany(ErrorReport, criteria, token);
	}
}
