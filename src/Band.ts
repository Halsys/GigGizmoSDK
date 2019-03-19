/**
 * Created by corynull on 4/3/17.
 */

import { FacebookAccount } from "./FacebookAccount";
import { Gig } from "./Gig";
import { DocumentI, ModelClass } from "./Model";
import { TwitterAccount } from "./TwitterAccount";
import { Upload } from "./Upload";
import { User } from "./User";

interface BandI extends DocumentI {
	name: string;
	website: string;
	email: string;
	cityName: string;
	cityPlaceID: string;
	description: string;
	metadata: string;
	icon: string | null;
	photos: string[];
	owners: string[];
	facebook: string | null;
	facebookPageId: string | null;
	facebookPageName: string | null;
	facebookPageToken: string | null;
	twitter: string | null;
	google: string | null;
}

export class Band extends ModelClass<BandI> {
	public static ModelName: string = "Band";

	public static findOne(criteria: object | null): Promise<Band | null> {
		return ModelClass.findOneBase(Band, criteria) as
			Promise<Band | null>;
	}

	public static findMany(criteria: object | null): Promise<Band[]> {
		return ModelClass.findManyBase(Band, criteria) as
			Promise<Band[]>;
	}

	public static findById(id: string): Promise<Band | null> {
		return ModelClass.findByIdBase(Band, id) as
			Promise<Band | null>;
	}

	public static getAllOwned(): Promise<Band[]> {
		return ModelClass.findManyBase(Band, null) as
			Promise<Band[]>;
	}

	public getIcon(): Promise<Upload | null> {
		if (this.icon) {
			return ModelClass.findByIdBase(Upload, this.icon) as
				Promise<Upload | null>;
		}
		return Promise.resolve(null);
	}

	public getPhotos(): Promise<Upload[]> {
		const photos = Array.from(this.photos);
		if (photos.length !== 0) {
				return ModelClass.findManyBase(
					Upload, { _id: photos }
				) as Promise<Upload[]>;
		}
		return Promise.resolve([]);
	}

	public getOwners(): Promise<User[]> {
		const owners = Array.from(this.owners);
		if (owners.length !== 0) {
			return ModelClass.findManyBase(
				User, { _id: owners }
			) as Promise<User[]>;
		}
		return Promise.resolve([]);
	}

	public getGigs(): Promise<Gig[]> {
		return Gig.findByBand(this._id || "") as Promise<Gig[]>;
	}

	public getTwitterAccount(): Promise<TwitterAccount | null> {
		if (!this.twitter) { return Promise.resolve(null); }
		return ModelClass.findByIdBase(TwitterAccount, this.twitter) as
			Promise<TwitterAccount | null>;
	}

	public getFacebookAccount(): Promise<FacebookAccount | null> {
		if (!this.facebook) { return Promise.resolve(null); }
		return ModelClass.findByIdBase(FacebookAccount, this.facebook) as
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
