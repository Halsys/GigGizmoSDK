/**
 * Created by corynull on 4/3/17.
 */

import { FacebookAccount } from "./FacebookAccount";
import { Gig } from "./Gig";
import { RESTModel } from "./RESTModel";
import { TwitterAccount } from "./TwitterAccount";
import { Upload } from "./Upload";
import { User } from "./User";

export class Band extends RESTModel {
	public static ModelName: string = "Band";
	get name(): string {
		return this.getField("name");
	}

	set name(value: string) {
		this.setField("name", value);
	}

	get website(): string {
		return this.getField("website");
	}

	set website(value: string) {
		this.setField("website", value);
	}

	get email(): string {
		return this.getField("email");
	}

	set email(value: string) {
		this.setField("email", value);
	}

	get cityName(): string {
		return this.getField("cityName");
	}

	set cityName(value: string) {
		this.setField("cityName", value);
	}

	get cityPlaceID(): string {
		return this.getField("cityPlaceID");
	}

	set cityPlaceID(value: string) {
		this.setField("cityPlaceID", value);
	}

	get description(): string {
		return this.getField("description");
	}

	set description(value: string) {
		this.setField("description", value);
	}

	get metadata(): string {
		return this.getField("metadata");
	}

	set metadata(value: string) {
		this.setField("metadata", value);
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

	public static findOne(criteria: object | null): Promise<Band | null> {
		return RESTModel.findOneBase(Band, criteria, true) as
			Promise<Band | null>;
	}

	public static findMany(criteria: object | null): Promise<Band[]> {
		return RESTModel.findManyBase(Band, criteria, true) as
			Promise<Band[]>;
	}

	public static findById(id: string): Promise<Band | null> {
		return RESTModel.findByIdBase(Band, id, true) as
			Promise<Band | null>;
	}

	public static getAllOwned(): Promise<Band[]> {
		return RESTModel.findManyBase(Band, null, true) as
			Promise<Band[]>;
	}

	public save(): Promise<this> {
		return super.save(true);
	}

	public remove(): Promise<this> {
		return super.remove(true);
	}

	public getIcon(): Promise<Upload | null> {
		if (this.icon) {
			return RESTModel.findByIdBase(Upload, this.icon, true) as
				Promise<Upload | null>;
		}
		return Promise.resolve(null);
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
		return Gig.findByBand(this._id || "") as Promise<Gig[]>;
	}

	public getTwitterAccount(): Promise<TwitterAccount | null> {
		if (!this.twitter) { return Promise.resolve(null); }
		return RESTModel.findByIdBase(TwitterAccount, this.twitter, true) as
			Promise<TwitterAccount | null>;
	}

	public getFacebookAccount(): Promise<FacebookAccount | null> {
		if (!this.facebook) { return Promise.resolve(null); }
		return RESTModel.findByIdBase(FacebookAccount, this.facebook, true) as
			Promise<FacebookAccount | null>;
	}

	public isValid(): boolean {
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
