/**
 * Created by corynull on 9/7/17.
 */

import API from "./API";
import RESTModel from "./RESTModel";
import GooglePlace from "./GooglePlace";

export default class Location extends RESTModel {
  static ModelName: string = "Location";

  get type() {
    return this.getField("type") || "Point";
  }

  set type(value) {
    this.setField("type", value);
  }

  get placeId() {
    return this.getField("placeId");
  }

  set placeId(value) {
    this.setField("placeId", value);
  }

  get address() {
    return this.getField("address");
  }

  set address(value) {
    this.setField("address", value);
  }

  get point() {
    return this.getField("point");
  }

  set point(value) {
    this.setField("point", value);
  }

  get utcOffset() {
    return this.getField("utcOffset");
  }

  set utcOffset(value) {
    this.setField("utcOffset", value);
  }

  isValid() {
    if (!super.isValid()) return false;
    if (!this.placeId) return false;
    if (!this.address) return false;
    if (!this.utcOffset) return false;
    if (!Array.isArray(this.point)) return false;
    return true;
  }

  getPlaceDetails() {
    return GooglePlace.getPlaceDetails(this.placeId);
  }

  static getLocationByPlaceId(placeId: string) {
    return new Promise((resolve, reject) => {
      if (!placeId) {
        reject(new Error(`Invaild placeId: ${placeId}`));
      } else {
        API.call("GET", `/API/Place/${placeId}`, null).then((location: any) => {
          if (location) {
            resolve(new Location(location));
          } else {
            reject(new Error(`${location} returned`));
          }
        }, reject);
      }
    });
  }

  static findById(id: string) {
    return RESTModel.findByIdBase(Location, id);
  }
}
