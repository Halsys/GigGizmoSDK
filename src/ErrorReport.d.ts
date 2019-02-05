/**
 * Created by corynull on Jan 8 2018 8:58:54 PM.
 */
import RESTModel from "./RESTModel";
export default class ErrorReport extends RESTModel {
    static ModelName: string;
    version: string;
    userId: string;
    stack: string;
    message: string;
    name: string;
    fileName: string;
    columnNumber: number;
    lineNumber: number;
    static findById(id: string): Promise<any>;
    static findMany(criteria: object | null): Promise<any[]>;
    isValid(): boolean;
}
