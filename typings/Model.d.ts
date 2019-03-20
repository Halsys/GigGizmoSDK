export interface DocumentI {
	ModelName: string;
	_id: string;
	readonly dateCreated: string;
	dateModified: string;
	[propName: string]: any;
}

export class ModelClass<D extends DocumentI> {
		public static ModelName: string;
		public static Cache: Map<string, ModelClass<any>>;
		public static findMany: ((criteria: any) =>
			Promise<Array<ModelClass<any>>>);
		public static findOne: ((criteria: any) => Promise<ModelClass<any> | null>);
		public static findById: ((id: string) => Promise<ModelClass<any> | null>);
		private expiration: number;
		private changes: any;
		private document: any;
		public readonly dateCreated: string | null;
		public dateModified: string | null;
		public id: string | null;
		public _id: string | null;
		[propName: string]: any;
		public static CacheGet(id: string): ModelClass<any> | null;
		public static CacheSet(data: ModelClass<any>): ModelClass<any> | null;
		public static CacheRemove(id: string): void;
		public static deduceModelAndName(ModelMaybe: any):
			Promise<{ Model: any; modelName: string; }>;
		public static isValidId(id: any): boolean;
		public static getModelName(Model: any): string;
		public static findByIdBase<
			ModelT extends ModelClass<any>
			>(ModelMaybe: any, id: string):
				Promise<ModelT|null>;
		public static findOneBase<
			ModelT extends ModelClass<any>
			>(ModelMaybe: any, criteria: any):
				Promise<ModelT|null>;
		public static findManyBase<
			ModelT extends ModelClass<any>
			>(ModelMaybe: any, criteria: any):
				Promise<ModelT[]>;
		constructor(dataMaybe?: D);
		protected setField(name: string, value: any): void;
		protected getField(name: string): any;
		public clearChanges(): void;
		public toObject(): any;
		public toString(): string;
		public anyErrors(): Error | null;
		public isValid(): boolean;
		public assign(data: object): this;
		public save(): Promise<this>;
		public remove(): Promise<this>;
}
