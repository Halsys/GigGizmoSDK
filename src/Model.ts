import { API } from "./API";
import { ModelNameToModel } from "./ModelNameToModel";

export interface DocumentI {
	ModelName: string;
	_id: string;
	readonly dateCreated: string;
	dateModified: string;
}

export class ModelClass<D extends DocumentI> {
	public static ModelName: string = "RESTModel";
	public static Cache: Map<string, ModelClass<any>> = new Map();
	public static findMany: ((criteria: any) => Promise<Array<ModelClass<any>>>);
	public static findOne: ((criteria: any) => Promise<ModelClass<any> | null>);
	public static findById: ((id: string) => Promise<ModelClass<any> | null>);

	[propName: string]: any;
	public get id(): string | null {
		return this.changes._id || this._id;
	}
	public set id(value: string | null) {
		if (this._id !== value && value) {
			this.changes._id = value;
			this.changes.dateModified = (new Date()).toISOString();
		}
	}
	public changes: D;
	public readonly document: D;
	private expiration: number = (
		(new Date())
		.getTime() +
		1 * // Hours
		60 * // Minutess
		60 * // Seconds
		1000 // Milliseconds
	);

	public static CacheGet<ModelT extends ModelClass<any>>(id: string): ModelT | null {
		if (typeof id === "string" && ModelClass.Cache.has(id)) {
			const cache: ModelT | undefined = ModelClass.Cache.get(id) as ModelT;
			if (cache && new Date(cache.expiration) < new Date()) {
				return cache;
			}
		}
		return null;
	}

	public static CacheSet<ModelT extends ModelClass<any>>(data: ModelClass<any>): ModelT | null {
		if (data._id && ModelClass.isValidId(data._id)) {
			ModelClass.Cache.set(data._id, data);
			return data as ModelT;
		}
		return data as ModelT;
	}

	public static CacheRemove(id: string): void {
		ModelClass.Cache.delete(id);
	}

	public static async deduceModelAndName(ModelMaybe: any): Promise<{
			Model: any;
			modelName: string;
		}> {
		if (ModelMaybe === null) {
			throw new Error("Model Name or Model Missing");
		}

		let Model: any = null;
		let modelName: string | null = null;
		if (typeof ModelMaybe === "string") {
			Model = await ModelNameToModel(ModelMaybe);
			modelName = ModelMaybe;
		} else if (typeof ModelMaybe === "function") {
			Model = ModelMaybe;
			modelName = ModelClass.getModelName(ModelMaybe);
		} else {
			throw new Error(`Invalid first agument, expected string or function, got ${ModelMaybe}`);
		}

		if (typeof modelName !== "string") {
			throw new Error(`Missing model name from ${Model}`);
		}

		if (typeof Model !== "function") {
			throw new Error(`Model name (${modelName}) did not map to constructor`);
		}

		return {
			Model,
			modelName
		};
	}

	public static getModelName(Model: any): string {
		if (Model && Model.ModelName) { return Model.ModelName; }
		if (Model && Model.constructor && ((Model.constructor as any).ModelName)) {
			return (Model.constructor as any).ModelName;
		}
		return "";
	}

	public static isValidId(id: any): boolean {
		const pattern = RegExp("^([0-9a-fA-F]{24}|[0-9a-fA-F]{12})$", "g");
		return (
			typeof id === "string" && pattern.test(id)
		);
	}

	public static async findByIdBase<
		ModelT extends ModelClass<any>
		>(ModelMaybe: any, id: string):
			Promise<ModelT|null> {
		if (ModelClass.isValidId(id)) {
			const cache = ModelClass.CacheGet(id);
			if (!!cache) {
				return cache as ModelT;
			} else {
				let data: any = null;
				const { Model, modelName } = await ModelClass.deduceModelAndName(ModelMaybe);

				if (API.useSocketIO && API.ShouldUseSocketIO) {
					data = await new Promise((resolve, reject) =>
						API.getSocket().then(
							(socket: SocketIOClient.Socket | null) => {
								if (socket) {
									socket.emit(`/API/${modelName}/:id`, id, resolve);
								}
							},
							reject)
					);
				}
				if (!data) {
					data = await API.call("GET", `/API/${modelName}/${id}`, null);
				}
				if (data && ModelClass.isValidId(data._id)) {
					data = new Model(data);
					ModelClass.Cache.set(data._id, data);
					return data;
				}
			}
		}
		return null;
	}

	public static async findOneBase<
		ModelT extends ModelClass<any>
		>(ModelMaybe: any, criteria: any = {}):
			Promise<ModelT|null> {
		if (criteria === null) { criteria = {}; }
		if (Array.from(Object.keys(criteria)).length === 1 && typeof criteria._id === "string") {
			const id = criteria._id;
			const cache = ModelClass.CacheGet(id);
			if (!!cache) {
				return cache as ModelT;
			}
		}
		let data: any = null;
		const { Model, modelName } = await ModelClass.deduceModelAndName(ModelMaybe);
		const route = `/API/${modelName}/FindOne`;
		if (API.useSocketIO && API.ShouldUseSocketIO) {
			const socket: any = await API.getSocket();
			if (!!socket) {
				data = await new Promise((resolve, reject) => {
					try {
						socket.emit(route, criteria, resolve);
					} catch (e) {
						reject(e);
					}
				});
			}
		}
		if (!data) { data = await API.call("GET", route, criteria); }
		if (!!data && ModelClass.isValidId(data._id)) {
			data = new Model(data);
			ModelClass.CacheSet(data);
			return data;
		}
		return null;
	}

	public static async findManyBase<
		ModelT extends ModelClass<any>
		>(ModelMaybe: any, criteria: any = {}):
			Promise<ModelT[]> {
		if (criteria === null) { criteria = {}; }
		if (Array.from(Object.keys(criteria)).length === 1 && Array.isArray((criteria._id || criteria.id))) {
			const items: Array<ModelClass<any>> = [];
			(criteria._id || criteria.id).forEach((id: string) => {
				const cache = ModelClass.CacheGet(id);
				if (cache) {
					items.push(cache);
				}
			});
			if (items.length === (criteria._id || criteria.id)) { return items as ModelT[]; }
		}
		let data: any = null;
		const { Model, modelName } = await ModelClass.deduceModelAndName(ModelMaybe);
		const route = `/API/${modelName}/FindMany`;
		if (API.useSocketIO && API.ShouldUseSocketIO) {
			data = await new Promise((resolve, reject) =>
				API.getSocket().then(
					(socket: SocketIOClient.Socket | null) => {
						if (socket) {
							socket.emit(route, criteria, resolve);
						}
					},
					reject)
			);
		}
		criteria = criteria || {};
		if (!data) { data = await API.call("GET", route, criteria); }
		if (Array.isArray(data)) {
			return data.map((itemData: any) => {
				const item = new Model(itemData);
				ModelClass.CacheSet(item);
				return item;
			});
		}
		return [];
	}

	public constructor(propNames: Array<string | symbol | number>, props?: D) {
		const self = this;
		this.changes = new Object() as D;
		this.document = (props ? props : new Object()) as D;
		propNames.forEach((key) => {
			Object.defineProperty(self, key, {
				get: () => {
					const value = self.changes[key];
					if (value !== undefined) { return value; }
					return self.document[key];
				},
				set: (value: any) => {
					if (self.document[key] !== value) {
						self.changes[key] = value;
						self.changes.dateModified = (new Date()).toISOString();
					}
				},
				enumerable: true,
				configurable: true
			});
		});
	}

	public clearChanges() {
		this.changes = new Object() as D;
	}

	public toObject(): any {
		const object = this.isValid() ? { ...this.document, ...this.changes } : null;
		if (typeof object === "object" && object) {
			if (typeof object._id !== "undefined") {
				object._id = `${object._id}`;
			}
		}
		return object;
	}

	public toString(): string {
		const object = this.toObject();
		return JSON.stringify(object);
	}

	public anyErrors(): Error | null {
		if (typeof this.document._id === "undefined") {
			return new Error("_id is undefined");
		}

		if (this.document._id && !ModelClass.isValidId(this.document._id)) {
			return new Error(`Invalid id: ${this.document._id}`);
		}

		if (typeof this.document.dateModified === "undefined") {
			return new Error("dateModified is undefined");
		}

		if (this.document.dateModified &&
			isNaN(Date.parse(this.document.dateModified))) {
			return new Error(`Invalid dateModified: ${this.document.dateModified}`);
		}

		if (typeof this.document.dateCreated === "undefined") {
			return new Error("dateCreated is undefined");
		}

		if (this.document.dateCreated &&
			isNaN(Date.parse(this.document.dateCreated))) {
			return new Error(`Invalid dateCreated: ${this.document.dateCreated}`);
		}

		if (this.changes._id &&
			!ModelClass.isValidId(this.changes._id)) {
			return new Error(`Invalid id: ${this.changes._id}`);
		}

		if (this.changes.dateModified && isNaN(Date.parse(this.changes.dateModified))) {
			return new Error(`Invalid dateModified: ${this.changes.dateModified}`);
		}

		if (this.changes.dateCreated && isNaN(Date.parse(this.changes.dateCreated))) {
			return new Error(`Invalid dateCreated: ${this.changes.dateCreated}`);
		}

		return null;
	}

	public isValid(): boolean {
		try {
			const superError = this.anyErrors();
			if (superError) { throw superError; }
		} catch (e) {
			return false;
		}
		return true;
	}

	public assign(data: object = {}): this {
		Object.assign(this.changes, data);
		return this;
	}

	public async save(): Promise<this> {
		const modelName = (this.constructor as any).ModelName;
		let response: any = null;
		const id = this._id || null;
		const data = this.changes;
		Object.keys(this.changes).forEach((key) => {
			if (data[key] === this.document[key]) { delete data[key]; }
		});
		data._id = this.changes._id || this._id || undefined;
		if (API.useSocketIO && API.ShouldUseSocketIO) {
			if (ModelClass.isValidId(id)) {
				response = await new Promise((resolve, reject) =>
					API.getSocket().then(
						(socket: SocketIOClient.Socket | null) => {
							if (socket) {
								socket.emit(`/API/${modelName}/:id`, data, resolve);
							}
						},
						reject)
				);
			} else {
				response = await new Promise((resolve, reject) =>
					API.getSocket().then(
						(socket: SocketIOClient.Socket | null) => {
							if (socket) {
								socket.emit(`/API/${modelName}`, data, resolve);
							}
						},
						reject)
				);
			}
		} else {
			if (ModelClass.isValidId(id)) {
				response = await API.call("PUT", `/API/${modelName}/${id}`, data);
			} else {
				response = await API.call("POST", `/API/${modelName}`, data);
			}
		}
		if (response && response._id) {
			Object.assign(this, response);
			this.clearChanges();
			ModelClass.CacheSet(this);
			return this;
		}
		throw new Error(`returned ${response}`);
	}

	public async remove(): Promise<this> {
		const id = this._id || "";
		if (ModelClass.isValidId(id)) {
			const modelName = (this.constructor as any).ModelName;
			if (API.useSocketIO && API.ShouldUseSocketIO) {
				await new Promise((resolve, reject) =>
					API.getSocket().then(
						(socket: SocketIOClient.Socket | null) => {
							if (socket) {
								socket.emit(
									`/API/${modelName}/:id`,
									{
										method: "DELETE",
										id
									},
									(res: any) => resolve(res));
							}
						},
						reject)
				);
			} else {
				await API.call("DELETE", `/API/${modelName}/${id}`, null);
			}

			ModelClass.CacheRemove(id);
			return this;
		}
		throw new Error(`Invalid id: ${id}`);
	}
}
