/**
 * Created by corynull on Jan 8 2018 8:58:54 PM.
 */

import RESTModel from "./RESTModel";

export default class ErrorReport extends RESTModel {
	public static ModelName: string = "ErrorReport";

	get version(): string {
		return this.getField("version");
	}

	set version(value: string) {
		this.setField("version", value);
	}

	get userId(): string {
		return this.getField("userId");
	}

	set userId(value: string) {
		this.setField("userId", value);
	}

	get stack(): string {
		return this.getField("stack");
	}

	set stack(value: string) {
		this.setField("stack", value);
	}

	get message(): string {
		return this.getField("message");
	}

	set message(value: string) {
		this.setField("message", value);
	}

	get name(): string {
		return this.getField("name");
	}

	set name(value: string) {
		this.setField("name", value);
	}

	get fileName(): string {
		return this.getField("fileName");
	}

	set fileName(value: string) {
		this.setField("fileName", value);
	}

	get columnNumber(): number {
		return this.getField("columnNumber");
	}

	set columnNumber(value: number) {
		this.setField("columnNumber", value);
	}

	get lineNumber(): number {
		return this.getField("lineNumber");
	}

	set lineNumber(value: number) {
		this.setField("lineNumber", value);
	}

	public static findById(id: string): Promise<ErrorReport | null> {
		return RESTModel.findByIdBase(ErrorReport, id) as
			Promise<ErrorReport | null>;
	}

	public static findMany(criteria: object | null) {
		return RESTModel.findManyBase(ErrorReport, criteria) as
			Promise<ErrorReport[]>;
	}

	public isValid(): boolean {
		if (!super.isValid()) { return false; }
		// TODO: do more tests...
		return true;
	}

}
