import { API } from "./API";
import { ModelNameToModel } from "./ModelNameToModel";

export interface Document {
	ModelName: string;
	_id: string;
	id: string;
	dateCreated: string;
	dateModified: string;
}

export abstract class RESTModel<D extends Document> {
	public static ModelName: string = "RESTModel";
	public static Cache: Map<string, RESTModel<any>> = new Map();
	public static findMany: ((criteria: any) => Promise<Array<RESTModel<any>>>);
	public static findOne: ((criteria: any) => Promise<RESTModel<any> | null>);
	public static findById: ((id: string) => Promise<RESTModel<any> | null>);

	private expiration: number = (
		(new Date())
			.getTime() +
		1 * // Hours
		60 * // Minutess
		60 * // Seconds
		1000 // Milliseconds
	);
	protected changes: D;
	protected document: D;

	get ModelName(): string {
		return this.document.ModelName || this.ModelName;
	}

	get dateCreated(): Date {
		const dateCreated =
			this.document.dateCreated || null;
		return dateCreated ?
			new Date(dateCreated) :
			new Date();
	}

	get dateModified(): Date {
		const dateModified =
			this.getField<string>("dateModified");
		return dateModified ?
			new Date(dateModified) :
			new Date();
	}

	set dateModified(value: Date) {
		this.changes.dateModified = value.toJSON();
	}

	get id(): string | null {
		return this.getField("_id");
	}

	set id(value: string | null) {
		this.setField("_id", value);
	}

	get _id(): string | null {
		return this.getField("_id");
	}

	set _id(value: string | null) {
		this.setField("_id", value);
	}

	public static CacheGet<ModelT extends RESTModel<any>>(id: string): ModelT | null {
		if (typeof id === "string" && RESTModel.Cache.has(id)) {
			const cache: ModelT | undefined = RESTModel.Cache.get(id) as ModelT;
			if (cache && new Date(cache.expiration) < new Date()) {
				return cache;
			}
		}
		return null;
	}

	public static CacheSet<ModelT extends RESTModel<any>>(data: RESTModel<any>): ModelT | null {
		if (data._id && RESTModel.isValidId(data._id)) {
			RESTModel.Cache.set(data._id, data);
			return data as ModelT;
		}
		return data as ModelT;
	}

	public static CacheRemove(id: string): void {
		RESTModel.Cache.delete(id);
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
			modelName = RESTModel.getModelName(ModelMaybe);
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

	public static isValidId(id: any): boolean {
		const pattern = RegExp("^([0-9a-fA-F]{24}|[0-9a-fA-F]{12})$", "g");
		return (
			typeof id === "string" && pattern.test(id)
		);
	}

	public static getModelName(Model: any): string {
		if (Model && Model.ModelName) { return Model.ModelName; }
		if (Model.constructor && ((Model.constructor as any).ModelName)) {
			return (Model.constructor as any).ModelName;
		}
		return "";
	}

	public static async findByIdBase<ModelT extends RESTModel<any>>(
		ModelMaybe: any,
		id: string,
		hasWebSocket?: boolean
	): Promise<ModelT|null> {
		if (RESTModel.isValidId(id)) {
			const cache = RESTModel.CacheGet(id);
			if (cache) {
				return cache as ModelT;
			} else {
				let data: any = null;
				const { Model, modelName } = await RESTModel.deduceModelAndName(ModelMaybe);

				if (API.useSocketIO && API.ShouldUseSocketIO && hasWebSocket) {
					data = await new Promise((resolve, reject) =>
						API.getSocket().then(
							(socket: SocketIOClient.Socket | null) => {
								if (socket) {
									socket.emit(`/API/${modelName}/Retreive`, id, resolve);
								}
							},
							reject)
					);
				}
				if (!data) {
					data = await API.call("GET", `/API/${modelName}/${id}`, null);
				}
				if (data && RESTModel.isValidId(data._id)) {
					data = new Model(data);
					RESTModel.Cache.set(data._id, data);
					return data;
				}
			}
		}
		return null;
	}

	public static async findOneBase<ModelT extends RESTModel<any>>(
		ModelMaybe: any,
		criteria: any = {},
		hasWebSocket?: boolean
	): Promise<ModelT|null> {
		if (criteria === null) { criteria = {}; }
		if (Array.from(Object.keys(criteria)).length === 1 && typeof criteria._id === "string") {
			const id = criteria._id;
			const cache = RESTModel.CacheGet(id);
			if (cache) {
				return cache as ModelT;
			}
		}
		let data: any = null;
		const { Model, modelName } = await RESTModel.deduceModelAndName(ModelMaybe);
		const route = `/API/${modelName}/FindOne`;
		if (API.useSocketIO && API.ShouldUseSocketIO && hasWebSocket) {
			const socket: any = await API.getSocket();
			if (socket) {
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
		if (data && RESTModel.isValidId(data._id)) {
			data = new Model(data);
			RESTModel.CacheSet(data);
			return data;
		}
		return null;
	}

	public static async findManyBase<ModelT extends RESTModel<any>>(
		ModelMaybe: any,
		criteria: any = {},
		hasWebSocket?: boolean
	): Promise<ModelT[]> {
		if (criteria === null) { criteria = {}; }
		if (Array.from(Object.keys(criteria)).length === 1 && Array.isArray((criteria._id || criteria.id))) {
			const items: Array<RESTModel<any>> = [];
			(criteria._id || criteria.id).forEach((id: string) => {
				const cache = RESTModel.CacheGet(id);
				if (cache) {
					items.push(cache);
				}
			});
			if (items.length === (criteria._id || criteria.id)) { return items as ModelT[]; }
		}
		let data: any = null;
		const { Model, modelName } = await RESTModel.deduceModelAndName(ModelMaybe);
		const route = `/API/${modelName}/FindMany`;
		if (API.useSocketIO && API.ShouldUseSocketIO && hasWebSocket) {
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
				RESTModel.CacheSet(item);
				return item;
			});
		}
		return [];
	}

	public constructor(dataMaybe?: any) {
		this.document = new Object() as D;
		this.changes = new Object() as D;
		if (typeof dataMaybe === "string") {
			try {
				const data = JSON.parse(dataMaybe);
				if (data !== null && typeof data.ModelName !== "undefined") {
					delete data.ModelName;
				}
				Object.assign(this.document, data);
			} catch (e) {
				console.log(dataMaybe);
				console.error(e);
			}
		} else if (dataMaybe) {
			if (typeof dataMaybe.document === "object" && dataMaybe.document) {
				Object.assign(this.document, dataMaybe.document);
			}
			if (typeof dataMaybe.changes === "object" && dataMaybe.changes) {
				Object.assign(this.changes, dataMaybe.changes);
			} else {
				Object.assign(this.document, dataMaybe);
			}
		}
	}

	public clearChanges() {
		this.changes = new Object() as D;
	}

	protected setField<T>(name: string, value: T): void {
		if (this.getField(name) !== value) {
			this.changes[name] = value;
			this.dateModified = new Date();
		}
	}

	protected getField<T>(name: string): T {
		return this.changes[name] || this.document[name];
	}

	public toObject(): any {
		const object = this.isValid() ? { ...this.changes, ...this.document } : null;
		if (typeof object === "object" && object) {
			if (typeof object.id !== "undefined") { delete object.id; }
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
		if (this.document.id &&
			!RESTModel.isValidId(this.document.id)) {
			return new Error(`Invalid id: ${this.document.id}`);
		}

		if (this.document.dateModified && isNaN(Date.parse(this.document.dateModified))) {
			return new Error(`Invalid dateModified: ${this.document.dateModified}`);
		}

		if (this.document.dateCreated && isNaN(Date.parse(this.document.dateCreated))) {
			return new Error(`Invalid dateCreated: ${this.document.dateCreated}`);
		}

		if (this.changes.id &&
			!RESTModel.isValidId(this.changes.id)) {
			return new Error(`Invalid id: ${this.document.id}`);
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

	public async save(hasWebSocket?: boolean): Promise<this> {
		const modelName = (this.constructor as any).ModelName;
		let response: any = null;
		const id = this.document._id || null;
		const data = this.changes;
		Object.keys(this.changes).forEach((key) => {
			if (data[key] === this.document[key]) { delete data[key]; }
		});
		data.id = `${this.changes._id || this.document._id || null}`;
		if (API.useSocketIO && API.ShouldUseSocketIO && hasWebSocket) {
			if (RESTModel.isValidId(id)) {
				response = await new Promise((resolve, reject) =>
					API.getSocket().then(
						(socket: SocketIOClient.Socket | null) => {
							if (socket) {
								socket.emit(`/API/${modelName}/Update`, data, resolve);
							}
						},
						reject)
				);
			} else {
				response = await new Promise((resolve, reject) =>
					API.getSocket().then(
						(socket: SocketIOClient.Socket | null) => {
							if (socket) {
								socket.emit(`/API/${modelName}/Create`, data, resolve);
							}
						},
						reject)
				);
			}
		} else {
			if (RESTModel.isValidId(id)) {
				response = await API.call("PUT", `/API/${modelName}/${id}`, data);
			} else {
				response = await API.call("POST", `/API/${modelName}/`, data);
			}
		}
		if (response && response._id) {
			this.document = response;
			this.clearChanges();
			RESTModel.CacheSet(this);
			return this;
		}
		throw new Error(`returned ${response}`);
	}

	public async remove(hasWebSocket?: boolean): Promise<this> {
		const id = this._id || "";
		if (RESTModel.isValidId(id)) {
			const modelName = (this.constructor as any).ModelName;
			if (API.useSocketIO && API.ShouldUseSocketIO && hasWebSocket) {
				await new Promise((resolve, reject) =>
					API.getSocket().then(
						(socket: SocketIOClient.Socket | null) => {
							if (socket) {
								socket.emit(`/API/${modelName}/Delete`, id, (res: any) =>
									resolve(res));
							}
						},
						reject)
				);
			} else {
				await API.call("DELETE", `/API/${modelName}/${id}`, null);
			}

			RESTModel.CacheRemove(id);
			return this;
		}
		throw new Error(`Invalid id: ${id}`);
	}
}
