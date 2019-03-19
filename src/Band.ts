/**
 * Created by corynull on 4/3/17.
 */

import { keys } from "ts-transformer-keys";
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

	public constructor(props: BandI) {
		super(keys<BandI>(), props);
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

	public anyErrors(): Error | null {
		const error = super.anyErrors();
		if (error) { return error; }

		if (typeof this.cityPlaceID !== "string") {
			return new Error(`cityPlaceID is not a string, it's ${typeof this.cityPlaceID} instead`);
		}
		if (this.cityPlaceID === "") {
			return new Error("cityPlaceID is empty");
		}

		if (typeof this.name !== "string") {
			return new Error("name is not a string");
		}
		if (this.name === "") {
			return new Error("name is empty");
		}

		if (typeof this.description !== "string") {
			return new Error("description is not a string");
		}
		if (this.description === "") {
			return new Error("description is empty");
		}
		if (this.description === "<p><br></p>") {
			return new Error("description is practically empty");
		}

		if (!Array.isArray(this.owners)) {
			return new Error("owners is not an array");
		}
		if (this.owners.length === 0) {
			return new Error("owners does not contain a single id");
		}

		return null;
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
