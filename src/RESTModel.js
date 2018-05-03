import moment from "moment";
import API from "./API";

export default class RESTModel {
	static Cache = new Map /* [String, Object] */();

	get ModelName() {
		return this.document.ModelName || null;
	}

	get dateCreated() {
		return typeof this.document.dateCreated !== "undefined"
			? moment(this.document.dateCreated)
			: null;
	}

	get dateModified() {
		return typeof this.document.dateModified !== "undefined"
			? moment(this.document.dateModified)
			: null;
	}

	set dateModified(value) {
		this.document.dateModified = moment(value).toISOString();
	}

	get id() {
		return this.document._id || null;
	}

	set id(value) {
		this.document._id = value;
		this.dateModified = Date.now();
	}

	get _id() {
		return this.document._id || null;
	}

	set _id(value) {
		this.document._id = value;
		this.dateModified = Date.now();
	}

	constructor(dataMaybe) {
		const dataType = typeof dataMaybe;
		this.document = {};
		if (dataType === "string") {
			try {
				const data = JSON.parse(dataMaybe);
				if (typeof data.ModelName !== "undefined") delete data.ModelName;
				this.assign(data);
			} catch (e) {
				console.error(e);
			}
		} else if (dataType === "object" && dataMaybe) {
			if (typeof dataMaybe.document === "object")
				this.assign(dataMaybe.document);
			else this.assign(dataMaybe);
		} else throw new Error(`${dataMaybe} given`);
	}

	toObject() {
		return this.valid() ? Object.assign({}, this.document) : null;
	}

	toString() {
		return this.valid() ? JSON.stringify(this.document) : "null";
	}

	valid() {
		if (!RESTModel.isValidId(this.id)) return false;
		if (!moment(this.dateModified).isValid()) return false;
		if (!moment(this.dateCreated).isValid()) return false;
		return true;
	}

	assign(data = {}) {
		Object.assign(this.document, data);
		return this;
	}

	async save(token) {
		const modelName = this.ModelName || this.constructor.ModelName;
		let response = null;
		const id = this.id || null;
		const data = Object.assign({}, this.document);
		data.dateCreated = data.dateCreated || Date.now();
		data.dateModified = Date.now();
		if (API.UseSocketIO && API.ShouldUseSocketIO) {
			const socket = await API.GetSocket(token);
			if (RESTModel.isValidId(id)) {
				response = await new Promise(resolve => {
					socket.emit(`GigGizmo/${modelName}/Update`, data, resolve);
				});
			} else {
				response = await new Promise(resolve => {
					socket.emit(`GigGizmo/${modelName}/Create`, data, resolve);
				});
			}
		} else {
			data.token = token;
			if (RESTModel.isValidId(id)) {
				response = await API.Call("PUT", `/API/${modelName}/${id}`, data);
			} else {
				response = await API.Call("POST", `/API/${modelName}/`, data);
			}
		}
		if (response && response._id) {
			this.assign(response);
			RESTModel.Cache.set(this.id, this);
			return this;
		}
		throw new Error(`returned ${response}`);
	}

	async remove(token) {
		const id = this._id || null;
		if (RESTModel.isValidId(id)) {
			let response = null;
			const modelName = this.ModelName || this.constructor.ModelName;
			if (API.UseSocketIO && API.ShouldUseSocketIO) {
				const socket = await API.GetSocket(token);
				response = await new Promise(resolve => {
					socket.emit(`GigGizmo/${modelName}/Delete`, id, res => {
						resolve(res);
					});
				});
			} else {
				response = await API.Call("DELETE", `/API/${modelName}/${id}`, {
					token
				});
			}

			RESTModel.Cache.set(id, null);
			return response;
		}
		throw new Error(`Invalid id: ${id}`);
	}

	static isValidId(id) {
		return (
			typeof id === "string" &&
			/^([0-9a-fA-F]{24}|[0-9a-fA-F]{12})$/.test(id)
		);
	}

	static async findById(Model, id, token) {
		if (RESTModel.isValidId(id)) {
			let data = null;
			const modelName = Model.ModelName || Model.constructor.ModelName;
			if (API.UseSocketIO && API.ShouldUseSocketIO) {
				const socket = await API.GetSocket(token);
				if (socket) {
					data = await new Promise(resolve => {
						socket.emit(`GigGizmo/${modelName}/Retreive`, id, resolve);
					});
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

	static async findOne(Model, criteriaMaybe, token) {
		const criteria = criteriaMaybe || {};
		let data = null;
		const modelName = Model.ModelName || Model.constructor.ModelName;
		if (API.UseSocketIO && API.ShouldUseSocketIO) {
			const socket = await API.GetSocket(token);
			if (socket) {
				data = await new Promise(resolve => {
					socket.emit(`GigGizmo/${modelName}/FindOne`, criteria, resolve);
				});
			}
		}
		if (!data) {
			data = await API.Call(
				"GET",
				`/API/${modelName}/FindOne`,
				Object.assign(criteria, { token })
			);
		}
		if (data && RESTModel.isValidId(data._id)) {
			return new Model(data);
		}
		return null;
	}

	static async findMany(Model, criteriaMaybe, token) {
		const criteria = criteriaMaybe || {};
		let data = null;
		const modelName = Model.ModelName || Model.constructor.ModelName;
		if (API.UseSocketIO && API.ShouldUseSocketIO) {
			const socket = await API.GetSocket(token);
			if (socket) {
				data = await new Promise(resolve => {
					socket.emit(`GigGizmo/${modelName}/FindMany`, criteria, resolve);
				});
			}
		}
		if (!data) {
			data = await API.Call(
				"GET",
				`/API/${modelName}/FindMany`,
				Object.assign(criteria, { token })
			);
		}
		if (Array.isArray(data)) {
			return data.map(itemData => {
				const item = new Model(itemData);
				RESTModel.Cache.set(item._id, item);
				return item;
			});
		}
		return [];
	}
}
