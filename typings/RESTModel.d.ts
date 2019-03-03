export abstract class RESTModel {
		public static ModelName: string;
		public static Cache: Map<string, RESTModel>;
		public static findMany: ((criteria: any) => Promise<RESTModel[]>);
		public static findOne: ((criteria: any) => Promise<RESTModel | null>);
		public static findById: ((id: string) => Promise<RESTModel | null>);
		private expiration: number;
		private changes: any;
		private document: any;
		public readonly dateCreated: Date | null;
		public dateModified: Date | null;
		public id: string | null;
		public _id: string | null;
		public static CacheGet(id: string): RESTModel | null;
		public static CacheSet(data: RESTModel): RESTModel | null;
		public static CacheRemove(id: string): void;
		public static deduceModelAndName(ModelMaybe: any): Promise<{
				Model: any;
				modelName: string;
		}>;
		public static isValidId(id: any): boolean;
		public static getModelName(Model: any): string;
		public static findByIdBase(
			ModelMaybe: any,
			id: string,
			hasWebSocket?: boolean
		): Promise<RESTModel|null>;
		public static findOneBase(
			ModelMaybe: any,
			criteria?: any,
			hasWebSocket?: boolean): Promise<RESTModel|null>;
		public static findManyBase(
			ModelMaybe: any,
			criteria?: any,
			hasWebSocket?: boolean): Promise<RESTModel[]>;
		constructor(dataMaybe?: any);
		protected setField(name: string, value: any): void;
		protected getField(name: string): any;
		public toObject(): any;
		public toString(): string;
		public valid(): boolean;
		public isValid(): boolean;
		public assign(data: object): this;
		public save(hasWebSocket?: boolean): Promise<this>;
		public remove(hasWebSocket?: boolean): Promise<this>;
}
