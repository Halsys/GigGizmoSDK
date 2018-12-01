/**
 * Created by corynull on Jan 8 2018 8:58:54 PM.
 */
import RESTModel from "./RESTModel";
export default class ErrorReport extends RESTModel {
    static ModelName: string;
    version: any;
    userId: any;
    stack: any;
    message: any;
    name: any;
    fileName: any;
    columnNumber: any;
    lineNumber: any;
    isValid(): boolean;
    static findById(id: string): Promise<any>;
    static findMany(criteria: object | null): Promise<any[]>;
}
