/**
 * Created by corynull on 4/5/17.
 */

import FacebookAccount from "./FacebookAccount";
import Gig from "./Gig";
import Location from "./Location";
import RESTModel from "./RESTModel";
import TwitterAccount from "./TwitterAccount";
import Upload from "./Upload";
import User from "./User";

export default class Venue extends RESTModel {
  public static ModelName: string = "Venue";

  get name() {
    return this.getField("name");
  }

  set name(value: string) {
    this.setField("name", value);
  }

  get description() {
    return this.getField("description");
  }

  set description(value: string) {
    this.setField("description", value);
  }

  get email() {
    return this.getField("email");
  }

  set email(value: string) {
    this.setField("email", value);
  }

  get website() {
    return this.getField("website");
  }

  set website(value: string) {
    this.setField("website", value);
  }

  get phone() {
    return this.getField("phone");
  }

  set phone(value: string) {
    this.setField("phone", value);
  }

  get location() {
    return this.getField("location");
  }

  set location(value: string) {
    this.setField("location", value);
  }

  get openCloseTimes() {
    return this.getField("openCloseTimes");
  }

  set openCloseTimes(value: string) {
    this.setField("openCloseTimes", value);
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

  set owners(value: string[]) {
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
    return RESTModel.findOneBase(Venue, criteria, true);
  }

  public static findMany(criteria: object | null) {
    return RESTModel.findManyBase(Venue, criteria, true);
  }

  public static findById(id: string) {
    return RESTModel.findByIdBase(Venue, id, true);
  }

  public static getAllOwned() {
    return RESTModel.findManyBase(Venue, null, true);
  }

  public save() {
    return RESTModel.prototype.save.call(this, true);
  }

  public remove() {
    return RESTModel.prototype.remove.call(this, true);
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
    return Gig.findByVenue(this._id);
  }

  public getTwitterAccount() {
    return RESTModel.findByIdBase(TwitterAccount, this.twitter, true);
  }

  public getFacebookAccount() {
    return RESTModel.findByIdBase(FacebookAccount, this.facebook, true);
  }

  public getLocation() {
    return RESTModel.findByIdBase(Location, this.location, true);
  }

  public isValid() {
    const self = this;
    if (!super.isValid()) { return false; }

    if (!RESTModel.isValidId(this.location)) { return false; }
    if (this.location === "") { return false; }

    if (typeof this.name !== "string") { return false; }
    if (this.name === "") { return false; }

    if (typeof this.description !== "string") { return false; }
    if (this.description === "") { return false; }
    if (this.description === "<p><br></p>") { return false; }

    if (!Array.isArray(this.owners)) { return false; }
    if (this.owners.length === 0) { return false; }
    if (!this.owners.every((owner) => self.userIsOwner(owner))) { return false; }

    return true;
  }

  // TODO: Create isOpen method

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
