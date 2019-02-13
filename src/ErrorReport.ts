/**
 * Created by corynull on Jan 8 2018 8:58:54 PM.
 */

import RESTModel from "./RESTModel";

export default class ErrorReport extends RESTModel {
	public static ModelName: string = "ErrorReport";

	get version() {
		return this.getField("version");
	}

	set version(value: string) {
		this.setField("version", value);
	}

	get userId() {
		return this.getField("userId");
	}

	set userId(value: string) {
		this.setField("userId", value);
	}

	get stack() {
		return this.getField("stack");
	}

	set stack(value: string) {
		this.setField("stack", value);
	}

	get message() {
		return this.getField("message");
	}

	set message(value: string) {
		this.setField("message", value);
	}

	get name() {
		return this.getField("name");
	}

	set name(value: string) {
		this.setField("name", value);
	}

	get fileName() {
		return this.getField("fileName");
	}

	set fileName(value: string) {
		this.setField("fileName", value);
	}

	get columnNumber() {
		return this.getField("columnNumber");
	}

	set columnNumber(value: number) {
		this.setField("columnNumber", value);
	}

	get lineNumber() {
		return this.getField("lineNumber");
	}

	set lineNumber(value: number) {
		this.setField("lineNumber", value);
	}

	public static findById(id: string) {
		return RESTModel.findByIdBase(ErrorReport, id);
	}

	public static findMany(criteria: object | null) {
		return RESTModel.findManyBase(ErrorReport, criteria);
	}

	public isValid() {
		if (!super.isValid()) { return false; }
		// TODO: do more tests...
		return true;
	}

}
