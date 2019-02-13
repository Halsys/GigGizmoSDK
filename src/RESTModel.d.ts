export default abstract class RESTModel {
		public static ModelName: string;
		public static Cache: Map<any, any>;
		private expiration;
		private changes;
		private document;
		public readonly dateCreated: any;
		public dateModified: any;
		public id: string;
		public _id: string;
		public static deduceModelAndName(ModelMaybe: any): Promise<{
				Model: any;
				modelName: string;
		}>;
		public static isValidId(id: string): boolean;
		public static getModelName(Model: object): any;
		public static findByIdBase(ModelMaybe: any, id: string, hasWebSocket?: boolean): Promise<any>;
		public static findOneBase(ModelMaybe: any, criteria?: any, hasWebSocket?: boolean): Promise<any>;
		public static findManyBase(ModelMaybe: any, criteria?: any, hasWebSocket?: boolean): Promise<any[]>;
		constructor(dataMaybe: any);
		protected setField(name: string, value: any): void;
		protected getField(name: string): any;
		public toObject(): any;
		public toString(): string;
		public valid(): boolean;
		public isValid(): boolean;
		public assign(data?: object): this;
		public save(hasWebSocket?: boolean): Promise<this>;
		public remove(hasWebSocket?: boolean): Promise<any>;
}
