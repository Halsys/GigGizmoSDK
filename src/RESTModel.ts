import ModelNameToModel from "./ModelNameToModel";
import API from "./API";

export default abstract class RESTModel {
  static ModelName: string = "RESTModel";
  static Cache = new Map();
  private changes: any = new Object();
  private document: any = new Object();
  setField(name: string, value: any) {
    const currentValue = this.getField(name) || undefined;
    if (currentValue !== value) {
      this.changes[name] = value;
      this.dateModified = Date.now();
    }
  }

  getField(name: string) {
    let data = this.changes[name];
    if (typeof data !== "undefined") return data;
    data = this.document[name];
    if (typeof data !== "undefined") return data;
    return null;
  }

  get dateCreated() {
    const dateCreated = this.document.dateCreated || null;
    return dateCreated ? new Date(dateCreated) : dateCreated;
  }

  get dateModified() {
    const dateModified = this.getField("dateModified") || null;
    return dateModified ? new Date(dateModified) : dateModified;
  }

  set dateModified(value) {
    this.changes.dateModified = new Date(value || undefined).toISOString();
  }

  get id() {
    return this.getField("_id");
  }

  set id(value: string) {
    this.setField("_id", value);
  }

  get _id() {
    return this.getField("_id");
  }

  set _id(value: string) {
    this.setField("_id", value);
  }

  constructor(dataMaybe: any) {
    this.document = new Object();
    this.changes = new Object();
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
    if (!this.dateModified || Date.parse(this.dateModified) === NaN)
      return false;
    if (!this.dateCreated || Date.parse(this.dateCreated) === NaN) return false;
    return true;
  }

  assign(data: object = {}) {
    Object.assign(this.changes, data);
    return this;
  }

  async save(hasWebSocket: boolean = false) {
    const modelName = (<any>this.constructor).ModelName;
    let response: any = null;
    const id = this.document._id || null;
    const data = this.changes;
    Object.keys(this.changes).forEach(key => {
      if (data[key] === this.document[key]) delete data[key];
    });
    data.id = this.changes._id || this.document._id || null;
    if (API.useSocketIO && API.ShouldUseSocketIO && hasWebSocket) {
      if (RESTModel.isValidId(id))
        response = await new Promise((resolve, reject) =>
          API.getSocket().then(
            (socket: SocketIOClient.Socket) =>
              socket.emit(`/API/${modelName}/Update`, data, resolve),
            reject
          )
        );
      else
        response = await new Promise((resolve, reject) =>
          API.getSocket().then(
            (socket: SocketIOClient.Socket) =>
              socket.emit(`/API/${modelName}/Create`, data, resolve),
            reject
          )
        );
    } else {
      if (RESTModel.isValidId(id))
        response = await API.call("PUT", `/API/${modelName}/${id}`, data);
      else response = await API.call("POST", `/API/${modelName}/`, data);
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

  async remove(hasWebSocket: boolean = false) {
    const id = this._id || null;
    if (RESTModel.isValidId(id)) {
      let response: any = null;
      const modelName = (<any>this.constructor).ModelName;
      if (API.useSocketIO && API.ShouldUseSocketIO && hasWebSocket) {
        response = await new Promise((resolve, reject) =>
          API.getSocket().then(
            (socket: SocketIOClient.Socket) =>
              socket.emit(`/API/${modelName}/Delete`, id, (res: any) =>
                resolve(res)
              ),
            reject
          )
        );
      } else
        response = await API.call("DELETE", `/API/${modelName}/${id}`, null);

      RESTModel.Cache.set(id, null);
      return response;
    }
    throw new Error(`Invalid id: ${id}`);
  }

  static isValidId(id: string) {
    return (
      typeof id === "string" && /^([0-9a-fA-F]{24}|[0-9a-fA-F]{12})$/.test(id)
    );
  }

  static getModelName(Model: object) {
    if (Model == null) return null;
    if ((<any>Model).ModelName) return (<any>Model).ModelName;
    if (Model.constructor && (<any>Model.constructor).ModelName)
      return (<any>Model.constructor).ModelName;
  }

  static async findByIdBase(
    ModelMaybe: any,
    id: string,
    hasWebSocket: boolean = false
  ) {
    if (RESTModel.isValidId(id)) {
      let data = null;
      let Model = ModelMaybe || null;
      let modelName: string | null = null;
      if (Model === null) throw new Error("Model Name or Model Missing");
      if (typeof Model === "string") {
        Model = ModelNameToModel(ModelMaybe);
        modelName = ModelMaybe;
      }
      if (typeof Model === "function")
        modelName = RESTModel.getModelName(Model);
      if (!modelName) throw new Error("Missing model name");
      if (API.useSocketIO && API.ShouldUseSocketIO && hasWebSocket) {
        data = await new Promise((resolve, reject) =>
          API.getSocket().then((socket: SocketIOClient.Socket) => {
            return socket.emit(`/API/${modelName}/Retreive`, id, resolve);
          }, reject)
        );
      }
      if (!data) {
        data = await API.call("GET", `/API/${modelName}/${id}`, null);
      }
      if (data && RESTModel.isValidId((<any>data)._id)) {
        return new Model(data);
      }
    }
    return null;
  }

  static async findOneBase(
    ModelMaybe: any,
    criteriaMaybe: object | null,
    hasWebSocket: boolean = false
  ) {
    const criteria = criteriaMaybe || {};
    let data: any = null;
    let Model: any = ModelMaybe || null;
    let modelName: string | null = null;
    if (Model === null) throw new Error("Model Name or Model Missing");
    if (typeof Model === "string") {
      Model = ModelNameToModel(ModelMaybe);
      modelName = ModelMaybe;
    }
    if (typeof Model === "function") modelName = RESTModel.getModelName(Model);
    if (!modelName) throw new Error("Missing model name");
    const route = `/API/${modelName}/FindOne`;
    if (API.useSocketIO && API.ShouldUseSocketIO && hasWebSocket) {
      const socket: any = await API.getSocket();
      if (socket)
        data = await new Promise((resolve, reject) => {
          try {
            socket.emit(route, criteria, resolve);
          } catch (e) {
            reject(e);
          }
        });
    }
    if (!data) data = await API.call("GET", route, criteria);
    if (data && RESTModel.isValidId(data._id)) return new Model(data);
    return null;
  }

  static async findManyBase(
    ModelMaybe: any,
    criteriaMaybe: object | null,
    hasWebSocket: boolean = false
  ) {
    let criteria = criteriaMaybe || null;
    let data: any = null;
    let Model: any = ModelMaybe || null;
    let modelName: string | null = null;
    if (Model === null) throw new Error("Model Name or Model Missing");
    if (typeof Model === "string") {
      Model = ModelNameToModel(ModelMaybe);
      modelName = ModelMaybe;
    }
    if (typeof Model === "function") modelName = RESTModel.getModelName(Model);
    if (!modelName) throw new Error("Missing model name");
    const route = `/API/${modelName}/FindMany`;
    if (API.useSocketIO && API.ShouldUseSocketIO && hasWebSocket) {
      data = await new Promise((resolve, reject) =>
        API.getSocket().then(
          (socket: SocketIOClient.Socket) =>
            socket.emit(route, criteria, resolve),
          reject
        )
      );
    }
    criteria = criteria || {};
    if (!data) data = await API.call("GET", route, criteria);
    if (Array.isArray(data))
      return data.map(itemData => {
        const item = new Model(itemData);
        RESTModel.Cache.set(item._id, item);
        return item;
      });
    return [];
  }
}
