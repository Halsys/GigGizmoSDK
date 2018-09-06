/**
 * Created by corynull on 4/5/17.
 */

import API from "./API";
import RESTModel from "./RESTModel";

export default class Gig extends RESTModel {
  static ModelName: string = "Gig";

  get startTime() {
    const startTime = this.getField("startTime");
    return startTime ? new Date(startTime) : startTime;
  }

  set startTime(value) {
    this.setField("startTime", value);
  }

  get stopTime() {
    const stopTime = this.getField("stopTime");
    return stopTime ? new Date(stopTime) : stopTime;
  }

  set stopTime(value) {
    this.setField("stopTime", value);
  }

  get location() {
    return this.getField("location");
  }

  set location(value) {
    this.setField("location", value);
  }

  get venue() {
    return this.getField("venue");
  }

  set venue(value) {
    this.setField("venue", value);
  }

  get bands() {
    return this.getField("bands");
  }

  set bands(value) {
    this.setField("bands", value);
  }

  get active() {
    return this.getField("active");
  }

  get toBeAnnounced() {
    return this.getField("toBeAnnounced");
  }

  set toBeAnnounced(value) {
    this.setField("toBeAnnounced", value);
  }

  get bandOwnersAccepted() {
    return this.getField("bandOwnersAccepted");
  }

  set bandOwnersAccepted(value) {
    this.setField("bandOwnersAccepted", value);
  }

  get venueOwnerAccepted() {
    return this.getField("venueOwnerAccepted");
  }

  set venueOwnerAccepted(value) {
    this.setField("venueOwnerAccepted", value);
  }

  get owners() {
    return this.getField("owners");
  }

  set owners(value) {
    this.setField("owners", value);
  }

  getBands() {
    return RESTModel.findManyBase("Band", { _id: this.bands }, true);
  }

  getVenue() {
    return RESTModel.findByIdBase("Venue", this.venue, true);
  }

  getLocation() {
    return RESTModel.findByIdBase("Location", this.location, true);
  }

  valid() {
    if (!super.valid()) return false;
    if (!Array.isArray(this.owners)) return false;
    if (this.owners.length === 0) return false;
    return true;
  }

  userIsOwner(user: any) {
    if (Array.isArray(this.owners)) {
      let userId: string;
      if (typeof user === "string") userId = user;
      else if (typeof user === "object" && user) userId = user._id;
      return this.owners.find(id => id === userId) !== undefined;
    }
    return false;
  }

  static findById(id: string) {
    return RESTModel.findByIdBase("Gig", id, true);
  }

  static async findByBand(bandId: string) {
    const data = await API.call("GET", `/API/Band/${bandId}/Gigs`, null);
    if (data && Array.isArray(data))
      return data.map(itemData => {
        const item = new Gig(itemData);
        RESTModel.Cache.set(item._id, item);
        return item;
      });
    throw new Error(`Expected Array, got ${data}`);
  }

  static async findByVenue(venueId: string) {
    const data = await API.call("GET", `/API/Venue/${venueId}/Gigs`, null);
    if (data && Array.isArray(data))
      return data.map(itemData => {
        const item = new Gig(itemData);
        RESTModel.Cache.set(item._id, item);
        return item;
      });
    throw new Error(`Expected Array, got ${data}`);
  }

  static getAllOwned() {
    return RESTModel.findManyBase("Gig", null, true);
  }

  static findMany(criteria: object | null) {
    return RESTModel.findManyBase("Gig", criteria, true);
  }

  static createGigs(gigData: object) {
    return new Promise((resolve, reject) => {
      const data: any = gigData || {};
      if (data && typeof data === "object") {
        if (!data.band || data.band === "")
          return reject(new Error("Band is required"));
        if (!data.venue || data.venue === "")
          return reject(new Error("Venue is required"));
        if (!data.times || data.times.length === 0)
          return reject(new Error("Times is required"));
        const filtered = data.times.filter(
          (
            time: { dayDate: any; startTime: any; stopTime: any },
            i: number
          ) => {
            if (time.dayDate && time.startTime && time.stopTime) {
              const dayDate = new Date(time.dayDate);

              const startTime = new Date(time.startTime);
              startTime.setFullYear(dayDate.getFullYear());
              startTime.setMonth(dayDate.getMonth());
              startTime.setDate(dayDate.getDay());

              const stopTime = new Date(time.stopTime);
              stopTime.setFullYear(dayDate.getFullYear());
              stopTime.setMonth(dayDate.getMonth());
              stopTime.setDate(dayDate.getDay());
              data.times[i] = {
                startTime: time.startTime,
                stopTime: time.stopTime
              };
              return true;
            } else if (time.startTime && time.stopTime) {
              data.times[i] = {
                startTime: time.startTime,
                stopTime: time.stopTime
              };
              return true;
            }
            return false;
          }
        );
        if (filtered.length !== data.times.length)
          return reject(new Error("Not all times were valid"));
        data.times = filtered;
        const request = API.call("POST", "/API/Gig", data);
        return request.then((response: any) => {
          let gigs = Array.from(response || []);
          gigs = gigs.map((itemData: any) => {
            const gig = new Gig(itemData);
            return gig;
          });
          resolve(gigs);
        }, reject);
      }
      return null;
    });
  }

  static getAllInDistance(
    location: { lat: number; lng: number },
    distance: number
  ) {
    return new Promise((resolve, reject) => {
      if (typeof location !== "object")
        return reject(new Error("location is not a object!"));
      if (typeof location.lat !== "number" || typeof location.lng !== "number")
        return reject(new Error("location does not contain lat or lng!"));
      if (typeof distance !== "number")
        return reject(new Error("radius is not a number!"));

      return API.call("GET", "/API/Gig/InDistance", {
        lat: location.lat,
        lng: location.lng,
        dis: distance
      }).then((gigs: object[]) => {
        resolve(
          Array.from(gigs).map((item: any) => {
            const gig = new Gig(item);
            return gig;
          })
        );
      }, reject);
    });
  }
}
