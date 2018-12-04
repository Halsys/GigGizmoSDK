/**
 * Created by corynull on Nov 30 2017 9:08 AM.
 */

import RESTModel from "./RESTModel";
import User from "./User";
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

  getUser() {
    return RESTModel.findManyBase(User, this.userId, true);
  }

  userIsOwner(user: any) {
    if (typeof user === "string") return user === this.userId;
    else if (typeof user === "object" && user) return user._id === this.userId;
    return false;
  }

  isValid() {
    if (!super.isValid()) return false;
    if (!this.userId || typeof this.userId !== "string") return false;
    if (!this.profile || typeof this.profile !== "object") return false;
    if (!this.accountId || typeof this.accountId !== "string") return false;
    return true;
  }

  static findById(id: string) {
    return new Promise((resolve, reject) => {
      if (typeof id === "string" && id !== "")
        API.call("GET", `/API/FacebookAccount/${id}`, null).then(
          (found: any) => {
            const account = found || null;
            if (account) resolve(new FacebookAccount(account));
            else reject(new Error(`${account} returned`));
          },
          reject
        );
      else resolve(null);
    });
  }

  static findPage(pageName: string) {
    return new Promise((resolve, reject) => {
      if (typeof pageName !== "string") {
        reject(new Error("pageName is not a string!"));
      } else {
        API.call("GET", "/API/Facebook/Page/Find", {
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
      API.call("POST", "/API/Facebook/Page/Post", {
        post_format: format,
        post_text: text,
        fb_page_id: pageId,
        publish_time: postDateTime // .getTime() / 1000
      }).then(resolve, reject);
    });
  }
}
