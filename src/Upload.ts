/**
 * Created by corynull on 4/10/17.
 */

import RESTModel from "./RESTModel";

export default class Upload extends RESTModel {
  static ModelName: string = "Upload";

  get fileName() {
    return this.getField("fileName");
  }

  set fileName(value) {
    this.setField("fileName", value);
  }

  get fileData() {
    return this.getField("fileData");
  }

  set fileData(value) {
    this.setField("fileData", value);
  }

  get title() {
    return this.getField("title");
  }

  set title(value) {
    this.setField("title", value);
  }

  get description() {
    return this.getField("description");
  }

  set description(value) {
    this.setField("description", value);
  }

  get owners() {
    return this.getField("owners");
  }

  set owners(value) {
    this.setField("owners", value);
  }

  getOwners(token: string) {
    const owners = Array.from(this.owners);
    if (owners.length !== 0)
      return RESTModel.findManyBase(
        "User",
        {
          _id: owners
        },
        token,
        true
      );
    return Promise.resolve([]);
  }

  userIsOwner(user: any) {
    if (Array.isArray(this.owners)) {
      let userId: string;
      if (typeof user === "string") userId = user;
      else if (typeof user === "object" && user) userId = user._id;
      return this.owners.find((id: string) => id === userId) !== undefined;
    }
    return false;
  }

  valid() {
    if (!super.valid()) return false;
    if (!this.title) return false;
    if (!this.description) return false;
    if (!this.fileData) return false;
    if (!this.fileName) return false;
    if (!Array.isArray(this.owners)) return false;
    if (this.owners.length === 0) return false;
    return true;
  }

  static async uploadFile(dataUrl: string, fileName: string, token: string) {
    let upload = new Upload({ fileData: dataUrl, fileName });
    upload = await upload.save(token, true);
    return upload;
  }

  static findById(id: string, token: string) {
    return RESTModel.findByIdBase("Upload", id, token, true);
  }

  static findMany(criteria: object | null, token: string) {
    return RESTModel.findManyBase("Upload", criteria, token, true);
  }

  static getAllOwned(token: string) {
    return RESTModel.findManyBase("Upload", null, token, true);
  }
}
