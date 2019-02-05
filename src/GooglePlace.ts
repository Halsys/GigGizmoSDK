/**
 * Created by corynull on 4/7/17.
 */

import API from "./API";
import RESTModel from "./RESTModel";

export default class GooglePlace extends RESTModel {
  public static ModelName: string = "GooglePlace";

  get placeId() {
    return this.getField("placeId");
  }

  set placeId(value: string) {
    this.setField("placeId", value);
  }

  get details() {
    return this.getField("details");
  }

  set details(value: string) {
    this.setField("details", value);
  }

  public static getPlaceDetails(placeId: string) {
    return new Promise((resolve, reject) => {
      if (typeof placeId !== "string") {
        return reject(new Error("placeId is not a string!"));
      }
      return API.call("GET", "/API/GooglePlace", { placeId }).then(
        resolve,
        reject
      );
    });
  }

  public static queryPlace(text: string, maybeType: string) {
    return new Promise((resolve, reject) => {
      const type = maybeType || "locality";
      if (typeof text !== "string") {
        return reject(new Error("text is not a string!"));
      }
      if (text.length === 0) {
        return reject(new Error("text is blank"));
      }
      return API.call("GET", "/API/GooglePlace/Query", {
        term: text,
        type
      }).then(resolve, reject);
    });
  }
}
