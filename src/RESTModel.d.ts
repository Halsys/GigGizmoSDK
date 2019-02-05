export default abstract class RESTModel {
    static ModelName: string;
    static Cache: Map<any, any>;
    private expiration;
    private changes;
    private document;
    readonly dateCreated: any;
    dateModified: any;
    id: string;
    _id: string;
    static deduceModelAndName(ModelMaybe: any): Promise<{
        Model: any;
        modelName: string;
    }>;
    static isValidId(id: string): boolean;
    static getModelName(Model: object): any;
    static findByIdBase(ModelMaybe: any, id: string, hasWebSocket?: boolean): Promise<any>;
    static findOneBase(ModelMaybe: any, criteria?: any, hasWebSocket?: boolean): Promise<any>;
    static findManyBase(ModelMaybe: any, criteria?: any, hasWebSocket?: boolean): Promise<any[]>;
    constructor(dataMaybe: any);
    protected setField(name: string, value: any): void;
    protected getField(name: string): any;
    toObject(): any;
    toString(): string;
    valid(): boolean;
    isValid(): boolean;
    assign(data?: object): this;
    save(hasWebSocket?: boolean): Promise<this>;
    remove(hasWebSocket?: boolean): Promise<any>;
}
