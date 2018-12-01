export default abstract class RESTModel {
    static ModelName: string;
    static Cache: Map<any, any>;
    private changes;
    private document;
    static deduceModelAndName(ModelMaybe: any): Promise<{
        Model: any;
        modelName: string;
    }>;
    setField(name: string, value: any): void;
    getField(name: string): any;
    readonly dateCreated: any;
    dateModified: any;
    id: string;
    _id: string;
    constructor(dataMaybe: any);
    toObject(): any;
    toString(): string;
    valid(): boolean;
    isValid(): boolean;
    assign(data?: object): this;
    save(hasWebSocket?: boolean): Promise<this>;
    remove(hasWebSocket?: boolean): Promise<any>;
    static isValidId(id: string): boolean;
    static getModelName(Model: object): any;
    static findByIdBase(ModelMaybe: any, id: string, hasWebSocket?: boolean): Promise<any>;
    static findOneBase(ModelMaybe: any, criteriaMaybe: object | null, hasWebSocket?: boolean): Promise<any>;
    static findManyBase(ModelMaybe: any, criteriaMaybe: object | null, hasWebSocket?: boolean): Promise<any[]>;
}
