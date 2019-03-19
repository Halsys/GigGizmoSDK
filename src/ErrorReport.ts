/**
 * Created by corynull on Jan 8 2018 8:58:54 PM.
 */

import { DocumentI, ModelClass } from "./Model";

interface ErrorReportI extends DocumentI {
	worthReporting: boolean;
	userId: string | null;
	version: string;
	stack: string;
	message: string;
	name: string;
	fileName: string;
	lineNumber: number;
	columnNumber: number;
}

export class ErrorReport extends ModelClass<ErrorReportI> {
	public static ModelName: string = "ErrorReport";

	public static findById(id: string): Promise<ErrorReport | null> {
		return ModelClass.findByIdBase(ErrorReport, id) as
			Promise<ErrorReport | null>;
	}

	public static findOne(criteria: any): Promise<ErrorReport | null> {
		return ModelClass.findOneBase(ErrorReport, criteria) as
			Promise<ErrorReport | null>;
	}

	public static findMany(criteria: object | null):
		Promise<ErrorReport[]> {
		return ModelClass.findManyBase(ErrorReport, criteria) as
			Promise<ErrorReport[]>;
	}

	public isValid(): boolean {
		if (!super.isValid()) { return false; }
		// TODO: do more tests...
		return true;
	}

}
