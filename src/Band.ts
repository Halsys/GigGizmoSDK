/**
 * Created by corynull on 4/3/17.
 */

import FacebookAccount from "./FacebookAccount";
import Gig from "./Gig";
import RESTModel from "./RESTModel";
import TwitterAccount from "./TwitterAccount";
import Upload from "./Upload";
import User from "./User";

export default class Band extends RESTModel {
  public static ModelName: string = "Band";
  get name() {
    return this.getField("name");
  }

  set name(value: string) {
    this.setField("name", value);
  }

  get website() {
    return this.getField("website");
  }

  set website(value: string) {
    this.setField("website", value);
  }

  get email() {
    return this.getField("email");
  }

  set email(value: string) {
    this.setField("email", value);
  }

  get cityName() {
    return this.getField("cityName");
  }

  set cityName(value: string) {
    this.setField("cityName", value);
  }

  get cityPlaceID() {
    return this.getField("cityPlaceID");
  }

  set cityPlaceID(value: string) {
    this.setField("cityPlaceID", value);
  }

  get description() {
    return this.getField("description");
  }

  set description(value: string) {
    this.setField("description", value);
  }

  get metadata() {
    return this.getField("metadata");
  }

  set metadata(value: string) {
    this.setField("metadata", value);
  }

  get icon() {
    return this.getField("icon");
  }

  set icon(value: string) {
    this.setField("icon", value);
  }

  get photos() {
    return this.getField("photos");
  }

  set photos(value: string[]) {
    this.setField("photos", value);
  }

  get owners() {
    return this.getField("owners");
  }

  set owners(value:  string[]) {
    this.setField("owners", value);
  }

  get facebook() {
    return this.getField("facebook");
  }

  set facebook(value: string) {
    this.setField("facebook", value);
  }

  get facebookPageId() {
    return this.getField("facebookPageId");
  }

  set facebookPageId(value: string) {
    this.setField("facebookPageId", value);
  }

  get facebookPageName() {
    return this.getField("facebookPageName");
  }

  set facebookPageName(value: string) {
    this.setField("facebookPageName", value);
  }

  get facebookPageToken() {
    return this.getField("facebookPageToken");
  }

  set facebookPageToken(value: string) {
    this.setField("facebookPageToken", value);
  }

  get twitter() {
    return this.getField("twitter");
  }

  set twitter(value: string) {
    this.setField("twitter", value);
  }

  get google() {
    return this.getField("google");
  }

  set google(value: string) {
    this.setField("google", value);
  }

  public static findOne(criteria: object | null) {
    return RESTModel.findOneBase(Band, criteria, true);
  }

  public static findMany(criteria: object | null) {
    return RESTModel.findManyBase(Band, criteria, true);
  }

  public static findById(id: string) {
    return RESTModel.findByIdBase(Band, id, true);
  }

  public static getAllOwned() {
    return RESTModel.findManyBase(Band, null, true);
  }

  public save() {
    return super.save(true);
  }

  public remove() {
    return super.remove(true);
  }

  public getIcon() {
    return RESTModel.findByIdBase(Upload, this.icon, true);
  }

  public getPhotos() {
    const photos = Array.from(this.photos);
    if (photos.length !== 0) {
        return RESTModel.findManyBase(
          Upload,
          {
            _id: photos
          },
          true
        );
    }
    return Promise.resolve([]);
  }

  public getOwners() {
    const owners = Array.from(this.owners);
    if (owners.length !== 0) {
      return RESTModel.findManyBase(
        User,
        {
          _id: owners
        },
        true
      );
    }
    return Promise.resolve([]);
  }

  public getGigs() {
    return Gig.findByBand(this._id);
  }

  public getTwitterAccount() {
    return RESTModel.findByIdBase(TwitterAccount, this.twitter, true);
  }

  public getFacebookAccount() {
    return RESTModel.findByIdBase(FacebookAccount, this.facebook, true);
  }

  public isValid() {
    const self = this;
    if (!super.isValid()) { return false; }

    if (typeof this.cityPlaceID !== "string") { return false; }
    if (this.cityPlaceID === "") { return false; }

    if (typeof this.name !== "string") { return false; }
    if (this.name === "") { return false; }

    if (typeof this.description !== "string") { return false; }
    if (this.description === "") { return false; }
    if (this.description === "<p><br></p>") { return false; }

    if (!Array.isArray(this.owners)) { return false; }
    if (this.owners.length === 0) { return false; }
    if (!this.owners.every((owner: string) => self.userIsOwner(owner))) { return false; }

    return true;
  }

  public userIsOwner(user: any) {
    if (Array.isArray(this.owners)) {
      let userId: string;
      if (typeof user === "string") {
        userId = user;
      } else if (typeof user === "object" && user) {
        userId = user._id;
      }
      return this.owners.find((id: string) => id === userId) !== undefined;
    }
    return false;
  }
}
