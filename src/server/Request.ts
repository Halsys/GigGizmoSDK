/**
 * Created by corynull on Nov 30 2017 5:27 AM.
 */

import API from "./API";
import RESTModel from "./RESTModel";

export default class Request extends RESTModel {
  static ModelName: string = "Request";

  get to() {
    return this.getField("to");
  }

  set to(value) {
    this.setField("to", value);
  }

  get from() {
    return this.getField("from");
  }

  set from(value) {
    this.setField("from", value);
  }

  get status() {
    return this.getField("status");
  }

  set status(value) {
    this.setField("status", value);
  }

  get options() {
    return this.getField("options");
  }

  set options(value) {
    this.setField("options", value);
  }

  get type() {
    return this.getField("type");
  }

  set type(value) {
    this.setField("type", value);
  }

  get userData() {
    return this.getField("userData");
  }

  set userData(value) {
    this.setField("userData", value);
  }

  get emailSent() {
    return this.getField("emailSent");
  }

  set emailSent(value) {
    this.setField("emailSent", value);
  }

  async execute(option: string) {
    const request = await API.call(
      "POST",
      `/API/Request/${this._id}/${option}`,
      null
    );
    this.assign(request);
    return this;
  }

  static createBandOwnershipRequest(band: string, from: string, to: string) {
    return new Promise((resolve, reject) => {
      API.call("POST", "/API/Request", {
        from,
        to,
        type: "BandOwnership",
        userData: {
          bandId: band
        }
      }).then((data: any) => {
        resolve(new Request(data));
      }, reject);
    });
  }

  static createVenueOwnershipRequest(venue: string, from: string, to: string) {
    return new Promise((resolve, reject) => {
      API.call("POST", "/API/Request", {
        from,
        to,
        type: "VenueOwnership",
        userData: {
          venueId: venue
        }
      }).then((data: any) => {
        resolve(new Request(data));
      }, reject);
    });
  }

  static createGigNegotiation(gig: string, from: string, to: string) {
    return new Promise((resolve, reject) => {
      API.call("POST", "/API/Request", {
        from,
        to,
        type: "GigNegotiation",
        userData: {
          gigId: gig
        }
      }).then((data: any) => {
        resolve(new Request(data));
      }, reject);
    });
  }

  static getAllOwned() {
    return RESTModel.findManyBase("Request", null);
  }

  static findById(id: string) {
    return RESTModel.findByIdBase("Request", id);
  }
}