import moment from "moment";
import API from "./API";
import { ModelNameToModel } from "./index";

module.exports = class RESTModel {
	static Cache = new Map /* [String, Object] */();

	setField(name, value) {
		const currentValue = this.getField(name) || undefined;
		if (currentValue !== value) {
			this.changes[name] = value;
			this.dateModified = Date.now();
		}
	}

	getField(name) {
		let data = this.changes[name];
		if (typeof data !== "undefined") return data;
		data = this.document[name];
		if (typeof data !== "undefined") return data;
		return null;
	}

	get ModelName() {
		return this.constructor.ModelName || this.document.ModelName || null;
	}

	get dateCreated() {
		const dateCreated = this.document.dateCreated || null;
		return dateCreated ? moment(dateCreated) : dateCreated;
	}

	get dateModified() {
		const dateModified = this.getField("dateModified") || null;
		return dateModified ? moment(dateModified) : dateModified;
	}

	set dateModified(value) {
		this.changes.dateModified = moment(value || undefined).toISOString();
	}

	get id() {
		return this.getField("_id");
	}

	set id(value) {
		this.setField("_id", value);
	}

	get _id() {
		return this.getField("_id");
	}

	set _id(value) {
		this.setField("_id", value);
	}

	constructor(dataMaybe) {
		this.document = {};
		this.changes = {};
		if (typeof dataMaybe === "string") {
			try {
				const data = JSON.parse(dataMaybe);
				if (typeof data.ModelName !== "undefined") delete data.ModelName;
				Object.assign(this.document, data);
			} catch (e) {
				console.error(e);
			}
		} else if (dataMaybe) {
			if (typeof dataMaybe.document === "object")
				Object.assign(this.document, dataMaybe.document);
			else Object.assign(this.document, dataMaybe);
		}
	}

	toObject() {
		return this.valid() ? Object.assign({}, this.changes, this.document) : null;
	}

	toString() {
		return this.valid()
			? JSON.stringify(Object.assign({}, this.changes, this.document))
			: "null";
	}

	valid() {
		if (!RESTModel.isValidId(this.id)) return false;
		if (!this.dateModified || !this.dateModified.isValid()) return false;
		if (!this.dateCreated || !this.dateCreated.isValid()) return false;
		return true;
	}

	assign(data = {}) {
		Object.assign(this.changes, data);
		return this;
	}

	async save(token, hasWebSocket = false) {
		const modelName = this.ModelName;
		let response = null;
		const id = this.document.id || null;
		const data = this.changes;
		Object.keys(this.changes).forEach(key => {
			if (data[key] === this.document[key]) delete data[key];
		});
		data.id = this.changes._id || this.document._id || null;
		if (API.UseSocketIO && API.ShouldUseSocketIO && hasWebSocket) {
			if (RESTModel.isValidId(id))
				response = await new Promise((resolve, reject) =>
					API.GetSocket(token).then(
						socket => socket.emit(`/API/${modelName}/Update`, data, resolve),
						reject
					)
				);
			else
				response = await new Promise((resolve, reject) =>
					API.GetSocket(token).then(
						socket => socket.emit(`/API/${modelName}/Create`, data, resolve),
						reject
					)
				);
		} else {
			data.token = token;
			if (RESTModel.isValidId(id))
				response = await API.Call("PUT", `/API/${modelName}/${id}`, data);
			else response = await API.Call("POST", `/API/${modelName}/`, data);
		}
		if (response && response._id) {
			this.document = response;
			this.changes = {};
			RESTModel.Cache.delete(id);
			RESTModel.Cache.set(response._id, this);
			return this;
		}
		throw new Error(`returned ${response}`);
	}

	async remove(token, hasWebSocket = false) {
		const id = this._id || null;
		if (RESTModel.isValidId(id)) {
			let response = null;
			const modelName = this.ModelName;
			if (API.UseSocketIO && API.ShouldUseSocketIO && hasWebSocket) {
				response = await new Promise((resolve, reject) =>
					API.GetSocket(token).then(
						socket =>
							socket.emit(`/API/${modelName}/Delete`, id, res => resolve(res)),
						reject
					)
				);
			} else
				response = await API.Call("DELETE", `/API/${modelName}/${id}`, {
					token
				});

			RESTModel.Cache.set(id, null);
			return response;
		}
		throw new Error(`Invalid id: ${id}`);
	}

	static isValidId(id) {
		return (
			typeof id === "string" && /^([0-9a-fA-F]{24}|[0-9a-fA-F]{12})$/.test(id)
		);
	}

	static getModelName(Model) {
		if (Model == null) return null;
		if (Model.ModelName) return Model.ModelName;
		if (Model.constructor && Model.constructor.ModelName)
			return Model.constructor.ModelName;
	}

	static async findById(ModelMaybe, id, token, hasWebSocket = false) {
		if (RESTModel.isValidId(id)) {
			let data = null;
			let Model = ModelMaybe || null;
			let modelName = "";
			if (Model === null) throw new Error("Model Name or Model Missing");
			if (typeof Model === "string") Model = ModelNameToModel(ModelMaybe);
			if (typeof Model === "object") modelName = RESTModel.getModelName(Model);
			if (API.UseSocketIO && API.ShouldUseSocketIO && hasWebSocket) {
				if (socket) {
					data = await new Promise((resolve, reject) =>
						API.GetSocket(token).then(socket => {
							return socket.emit(`/API/${modelName}/Retreive`, id, resolve);
						}, reject)
					);
				}
			}
			if (!data) {
				data = await API.Call("GET", `/API/${modelName}/${id}`, {
					token
				});
			}
			if (data && RESTModel.isValidId(data._id)) {
				return new Model(data);
			}
		}
		return null;
	}

	static async findOne(ModelMaybe, criteriaMaybe, token, hasWebSocket = false) {
		const criteria = criteriaMaybe || {};
		let data = null;
		let Model = ModelMaybe || null;
		let modelName = "";
		if (Model === null) throw new Error("Model Name or Model Missing");
		if (typeof Model === "string") Model = ModelNameToModel(ModelMaybe);
		if (typeof Model === "object") modelName = RESTModel.getModelName(Model);
		const route = `/API/${modelName}/FindOne`;
		if (API.UseSocketIO && API.ShouldUseSocketIO && hasWebSocket) {
			const socket = await API.GetSocket(token);
			if (socket)
				data = await new Promise((resolve, reject) => {
					try {
						socket.emit(route, criteria, resolve);
					} catch (e) {
						reject(e);
					}
				});
		}
		if (!data) data = await API.Call("GET", route, { ...criteria, token });
		if (data && RESTModel.isValidId(data._id)) return new Model(data);
		return null;
	}

	static async findMany(
		ModelMaybe,
		criteriaMaybe,
		token,
		hasWebSocket = false
	) {
		let criteria = criteriaMaybe || null;
		let data = null;
		let Model = ModelMaybe || null;
		let modelName = "";
		if (Model === null) throw new Error("Model Name or Model Missing");
		if (typeof Model === "string") Model = ModelNameToModel(ModelMaybe);
		if (typeof Model === "object") modelName = RESTModel.getModelName(Model);
		const route = `/API/${modelName}/FindMany`;
		if (API.UseSocketIO && API.ShouldUseSocketIO && hasWebSocket) {
			data = await new Promise((resolve, reject) =>
				API.GetSocket(token).then(
					socket => socket.emit(route, criteria, resolve),
					reject
				)
			);
		}
		criteria = criteria || {};
		if (!data) data = await API.Call("GET", route, { ...criteria, token });
		if (Array.isArray(data))
			return data.map(itemData => {
				const item = new Model(itemData);
				RESTModel.Cache.set(item._id, item);
				return item;
			});
		return [];
	}
};
