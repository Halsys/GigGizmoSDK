/**
 * Created by corynull on 8/1/17.
 */

import API from "./API";
import RESTModel from "./RESTModel";

export default class Page extends RESTModel {
  static ModelName: string = "Page";

  get data() {
    return this.getField("data");
  }

  set data(value) {
    this.setField("data", value);
  }

  get metadata() {
    return this.getField("metadata");
  }

  set metadata(value) {
    this.setField("metadata", value);
  }

  get title() {
    return this.getField("title");
  }

  set title(value) {
    this.setField("title", value);
  }

  get link() {
    return this.getField("link");
  }

  set link(value) {
    this.setField("link", value);
  }

  get visits() {
    return this.getField("visits") || 0;
  }

  set visits(value) {
    this.setField("visits", value);
  }

  get revisions() {
    return this.getField("revisions") || 0;
  }

  set revisions(value) {
    this.setField("revisions", value);
  }

  get hide() {
    let value = this.getField("hide");
    return value === null ? true : Boolean(value);
  }

  set hide(value) {
    this.setField("hide", value);
  }

  get blog() {
    let value = this.getField("blog");
    return Boolean(value);
  }

  set blog(value) {
    this.setField("blog", value);
  }

  get doc() {
    let value = this.getField("doc");
    return Boolean(value);
  }

  set doc(value) {
    this.setField("doc", value);
  }

  get admin() {
    return this.getField("admin");
  }

  set admin(value) {
    this.setField("admin", value);
  }

  isValid() {
    if (!super.isValid()) return false;
    if (!this.title) return false;
    if (this.title === "") return false;
    return true;
  }

  userIsOwner(user: any) {
    if (typeof user === "string") return user === this.admin;
    if (typeof user === "function" && user && user.isValid()) {
      return user._id === this.admin || user.admin;
    }
    return false;
  }

  static findMany(criteria: any) {
    return RESTModel.findManyBase("Page", criteria);
  }

  static findOne(criteria: any) {
    return RESTModel.findOneBase("Page", criteria);
  }

  static findById(id: string) {
    return RESTModel.findByIdBase("Page", id);
  }

  static findByLink(link: string) {
    return new Promise((resolve, reject) => {
      API.call("GET", `/API/Link/${link}`, null).then((page: any) => {
        resolve(new Page(page));
      }, reject);
    });
  }
}
