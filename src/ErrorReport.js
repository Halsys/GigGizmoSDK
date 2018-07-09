/**
 * Created by corynull on Jan 8 2018 8:58:54 PM.
 */

import { ModelNameToModel } from "./index";
import RESTModel from "./RESTModel";

export default class ErrorReport extends RESTModel {
	static ModelName = "ErrorReport";

	get version() {
		return this.getField("version");
	}

	set version(value) {
		this.setField("version", value);
	}

	get userId() {
		return this.getField("userId");
	}

	set userId(value) {
		this.setField("userId", value);
	}

	get stack() {
		return this.getField("stack");
	}

	set stack(value) {
		this.setField("stack", value);
	}

	get message() {
		return this.getField("message");
	}

	set message(value) {
		this.setField("message", value);
	}

	get name() {
		return this.getField("name");
	}

	set name(value) {
		this.setField("name", value);
	}

	get fileName() {
		return this.getField("fileName");
	}

	set fileName(value) {
		this.setField("fileName", value);
	}

	get columnNumber() {
		return this.getField("columnNumber");
	}

	set columnNumber(value) {
		this.setField("columnNumber", value);
	}

	get lineNumber() {
		return this.getField("lineNumber");
	}

	set lineNumber(value) {
		this.setField("lineNumber", value);
	}

	valid() {
		if (!super.valid()) return false;
		// TODO: do more tests...
		return true;
	}

	static findById(id, token) {
		return RESTModel.findById("ErrorReport", id, token);
	}

	static findMany(criteria, token) {
		return RESTModel.findMany("ErrorReport", criteria, token);
	}
}
