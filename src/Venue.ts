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

	get name(): string | null {
		return this.getField("name");
	}

	set name(value: string | null) {
		this.setField("name", value);
	}

	get description(): string | null {
		return this.getField("description");
	}

	set description(value: string | null) {
		this.setField("description", value);
	}

	get email(): string | null {
		return this.getField("email");
	}

	set email(value: string | null) {
		this.setField("email", value);
	}

	get website(): string | null {
		return this.getField("website");
	}

	set website(value: string | null) {
		this.setField("website", value);
	}

	get phone(): string | null {
		return this.getField("phone");
	}

	set phone(value: string | null) {
		this.setField("phone", value);
	}

	get location(): string | null {
		return this.getField("location");
	}

	set location(value: string | null) {
		this.setField("location", value);
	}

	get openCloseTimes(): string {
		return this.getField("openCloseTimes");
	}

	set openCloseTimes(value: string) {
		this.setField("openCloseTimes", value);
	}

	get icon(): string | null {
		return this.getField("icon");
	}

	set icon(value: string | null) {
		this.setField("icon", value);
	}

	get photos(): string[] {
		return this.getField("photos");
	}

	set photos(value: string[]) {
		this.setField("photos", value);
	}

	get owners(): string[] {
		return this.getField("owners");
	}

	set owners(value: string[]) {
		this.setField("owners", value);
	}

	get facebook(): string | null {
		return this.getField("facebook");
	}

	set facebook(value: string | null) {
		this.setField("facebook", value);
	}

	get facebookPageId(): string | null {
		return this.getField("facebookPageId");
	}

	set facebookPageId(value: string | null) {
		this.setField("facebookPageId", value);
	}

	get facebookPageName(): string | null {
		return this.getField("facebookPageName");
	}

	set facebookPageName(value: string | null) {
		this.setField("facebookPageName", value);
	}

	get facebookPageToken(): string | null {
		return this.getField("facebookPageToken");
	}

	set facebookPageToken(value: string | null) {
		this.setField("facebookPageToken", value);
	}

	get twitter(): string | null {
		return this.getField("twitter");
	}

	set twitter(value: string | null) {
		this.setField("twitter", value);
	}

	get google(): string | null {
		return this.getField("google");
	}

	set google(value: string | null) {
		this.setField("google", value);
	}

	public static findOne(criteria: object | null): Promise<Venue | null> {
		return RESTModel.findOneBase(Venue, criteria, true) as
			Promise<Venue | null>;
	}

	public static findMany(criteria: object | null): Promise<Venue[]> {
		return RESTModel.findManyBase(Venue, criteria, true) as
			Promise<Venue[]>;
	}

	public static findById(id: string): Promise<Venue> {
		return RESTModel.findByIdBase(Venue, id, true) as
			Promise<Venue>;
	}

	public static getAllOwned(): Promise<Venue[]> {
		return RESTModel.findManyBase(Venue, null, true) as
			Promise<Venue[]>;
	}

	public save(): Promise<this> {
		return super.save(true);
	}

	public remove(): Promise<this> {
		return super.remove(true);
	}

	public getIcon(): Promise<Upload | null> {
		return RESTModel.findByIdBase(Upload, this.icon || "", true) as
			Promise<Upload | null>;
	}

	public getPhotos(): Promise<Upload[]> {
		const photos = Array.from(this.photos);
		if (photos.length !== 0) {
			return RESTModel.findManyBase(
				Upload,
				{
					_id: photos
				},
				true
			) as Promise<Upload[]>;
		}
		return Promise.resolve([]);
	}

	public getOwners(): Promise<User[]> {
		const owners = Array.from(this.owners);
		if (owners.length !== 0) {
			return RESTModel.findManyBase(
				User,
				{
					_id: owners
				},
				true
			) as Promise<User[]>;
		}
		return Promise.resolve([]);
	}

	public getGigs(): Promise<Gig[]> {
		return Gig.findByVenue(this._id || "") as Promise<Gig[]>;
	}

	public getTwitterAccount(): Promise<TwitterAccount | null> {
		return RESTModel.findByIdBase(TwitterAccount, this.twitter || "", true) as
			Promise<TwitterAccount | null>;
	}

	public getFacebookAccount(): Promise<FacebookAccount | null> {
		return RESTModel.findByIdBase(FacebookAccount, this.facebook || "", true) as
			Promise<FacebookAccount | null>;
	}

	public getLocation(): Promise<Location | null> {
		return RESTModel.findByIdBase(Location, this.location || "", true) as
			Promise<Location | null>;
	}

	public isValid(): boolean {
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

	public userIsOwner(user: any): boolean {
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
