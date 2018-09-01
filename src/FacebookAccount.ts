/**
 * Created by corynull on Nov 30 2017 9:08 AM.
 */

import RESTModel from "./RESTModel";
import API from "./API";

export default class FacebookAccount extends RESTModel {
  static ModelName: string = "FacebookAccount";

  get userId() {
    return this.getField("userId");
  }

  set userId(value) {
    this.setField("userId", value);
  }

  get accountId() {
    return this.getField("accountId");
  }

  set accountId(value) {
    this.setField("accountId", value);
  }

  get userAccessToken() {
    return this.getField("userAccessToken");
  }

  set userAccessToken(value) {
    this.setField("userAccessToken", value);
  }

  get userRefreshToken() {
    return this.getField("userRefreshToken");
  }

  set userRefreshToken(value) {
    this.setField("userRefreshToken", value);
  }

  get profile() {
    return this.getField("profile");
  }

  getUser(token: string) {
    return RESTModel.findManyBase("User", this.userId, token, true);
  }

  userIsOwner(user: any) {
    if (typeof user === "string") return user === this.userId;
    else if (typeof user === "object" && user) return user._id === this.userId;
    return false;
  }

  valid() {
    if (!RESTModel.prototype.valid.call(this)) return false;
    if (!this.userId || typeof this.userId !== "string") return false;
    if (!this.profile || typeof this.profile !== "object") return false;
    if (!this.accountId || typeof this.accountId !== "string") return false;
    return true;
  }

  static findById(id: string, token: string) {
    return new Promise((resolve, reject) => {
      if (typeof id === "string" && id !== "")
        API.Call("GET", `/API/FacebookAccount/${id}`, { token }).then(found => {
          const account = found || null;
          if (account) resolve(new FacebookAccount(account));
          else reject(new Error(`${account} returned`));
        }, reject);
      else resolve(null);
    });
  }

  static findPage(pageName: string) {
    return new Promise((resolve, reject) => {
      if (typeof pageName !== "string") {
        reject(new Error("pageName is not a string!"));
      } else {
        API.Call("GET", "/API/Facebook/Page/Find", {
          name: pageName
        }).then(resolve, reject);
      }
    });
  }

  static PostToPage(
    format: string,
    text: string,
    pageId: string,
    postDateTime: string
  ) {
    return new Promise((resolve, reject) => {
      API.Call("POST", "/API/Facebook/Page/Post", {
        post_format: format,
        post_text: text,
        fb_page_id: pageId,
        publish_time: postDateTime // .getTime() / 1000
      }).then(resolve, reject);
    });
  }
}
