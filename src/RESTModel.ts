import ModelNameToModel from "./ModelNameToModel";
import API from "./API";

export default abstract class RESTModel {
  static ModelName: string = "RESTModel";
  static Cache = new Map();
  private expiration: Number = (
    (new Date())
      .getTime() +
    1 * // Hours
    60 * // Minutes
    60 * // Seconds
    1000 // Milliseconds
  );
  private changes: any = new Object();
  private document: any = new Object();

  static async deduceModelAndName(ModelMaybe: any) {
    if (ModelMaybe === null)
      throw new Error("Model Name or Model Missing");

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

  setField(name: string, value: any) {
    if(this) {
      const currentValue = this.getField(name) || undefined;
      if (currentValue !== value) {
        this.changes[name] = value;
        this.dateModified = Date.now();
      }
    }
  }

  getField(name: string) {
    if(this) {
      let data = this.changes[name];
      if (typeof data !== "undefined") return data;
      data = this.document[name];
      if (typeof data !== "undefined") return data;
    }
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
    this.changes.dateModified = new Date(value || undefined).toJSON();
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
        if (data !== null && typeof data.ModelName !== "undefined")
          delete data.ModelName;
        Object.assign(this.document, data);
      } catch (e) {
        console.log(dataMaybe);
        console.error(e);
      }
    } else if (dataMaybe) {
      if (typeof dataMaybe.document === "object" && dataMaybe.document)
        Object.assign(this.document, dataMaybe.document);
      if (typeof dataMaybe.changes === "object" && dataMaybe.changes)
        Object.assign(this.changes, dataMaybe.changes);
      else Object.assign(this.document, dataMaybe);
    }
  }

  toObject() {
    const object = this.valid() ?
      Object.assign({}, this.changes, this.document) : null;
    if (typeof object === "object" && object) {
      if (typeof object.id !== "undefined") delete object.id;
      if (typeof object._id !== "undefined")
        object._id = (object._id.toString() ? object._id : null);
    }
    return object;
  }

  toString() {
    const object = this.toObject();
    return JSON.stringify(object);
  }

  valid() {
    if (!RESTModel.isValidId(this.id))
      throw new Error(`Invalid id: ${this.id}`);
    if (!this.dateModified || Date.parse(this.dateModified) === NaN)
      throw new Error(`Invalid dateModified: ${this.dateModified}`);
    if (!this.dateCreated || Date.parse(this.dateCreated) === NaN)
      throw new Error(`Invalid dateCreated: ${this.dateCreated}`);
    return true;
  }

  isValid() {
    if (!RESTModel.isValidId(this.id))
      return false;
    if (!this.dateModified || Date.parse(this.dateModified) === NaN)
      return false;
    if (!this.dateCreated || Date.parse(this.dateCreated) === NaN)
      return false;
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
    const pattern = RegExp("^([0-9a-fA-F]{24}|[0-9a-fA-F]{12})$", "g");
    return (
      typeof id === "string" && pattern.test(id)
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
        if (RESTModel.Cache.has(id)) {
          const cache = RESTModel.Cache.get(id);
          if (cache && new Date(cache.expiration) < new Date())
            return cache;
        }
        let data: any = null;
        let { Model, modelName } = await RESTModel.deduceModelAndName(ModelMaybe);

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
        if (data && RESTModel.isValidId(data._id)) {
          data = new Model(data);
          RESTModel.Cache.set(data._id, data);
          return data;
        }
    }
    return null;
  }

  static async findOneBase(
    ModelMaybe: any,
    criteria: any = {},
    hasWebSocket: boolean = false
  ) {
    if(criteria === null) criteria = {};
    if(Array.from(Object.keys(criteria)).length === 1 && typeof criteria._id === "string") {
      const id = criteria._id;
      if(RESTModel.Cache.has(id)) {
        const cache = RESTModel.Cache.get(id);
        if (cache && new Date(cache.expiration) < new Date())
          return cache;
      }
    }
    let data: any = null;
    let { Model, modelName } = await RESTModel.deduceModelAndName(ModelMaybe);
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
    if (data && RESTModel.isValidId(data._id)) {
      data = new Model(data);
      RESTModel.Cache.set(data._id, data);
      return data;
    }
    return null;
  }

  static async findManyBase(
    ModelMaybe: any,
    criteria: any = {},
    hasWebSocket: boolean = false
  ) {
    if(criteria === null) criteria = {};
    if(Array.from(Object.keys(criteria)).length === 1 && Array.isArray((criteria._id || criteria.id))) {
      const items: RESTModel[] = [];
      (criteria._id || criteria.id).forEach((id: string) => {
        if(typeof id === "string" && RESTModel.Cache.has(id)) {
          const cache = RESTModel.Cache.get(id);
          if (cache && new Date(cache.expiration) < new Date())
            items.push(cache);
        }
      });
      if(items.length === (criteria._id || criteria.id)) return items;
    }
    let data: any = null;
    let { Model, modelName } = await RESTModel.deduceModelAndName(ModelMaybe);
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
