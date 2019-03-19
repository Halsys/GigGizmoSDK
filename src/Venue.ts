/**
 * Created by corynull on 4/5/17.
 */

import { keys } from "ts-transformer-keys";
import { FacebookAccount } from "./FacebookAccount";
import { Gig } from "./Gig";
import { Location } from "./Location";
import { DocumentI, ModelClass } from "./Model";
import { TwitterAccount } from "./TwitterAccount";
import { Upload } from "./Upload";
import { User } from "./User";

interface VenueI extends DocumentI {
	owners: string[];
	name: string;
	description: string;
	website: string;
	phone: string;
	email: string;
	location: string;
	openCloseTimes: Array<{
		open: boolean;
		openingTime: string;
		closingTime: string;
	}>;
	icon: string | null;
	photos: string[];
	facebook: string | null;
	twitter: string | null;
	google: string | null;
	metadata: string;
	facebookPageId: string;
	facebookPageName: string;
	facebookPageToken: string;
}

export class Venue extends ModelClass<VenueI> {
	public static ModelName: string = "Venue";

	public static findOne(criteria: object | null): Promise<Venue | null> {
		return ModelClass.findOneBase(Venue, criteria) as
			Promise<Venue | null>;
	}

	public static findMany(criteria: object | null): Promise<Venue[]> {
		return ModelClass.findManyBase(Venue, criteria) as
			Promise<Venue[]>;
	}

	public static findById(id: string): Promise<Venue> {
		return ModelClass.findByIdBase(Venue, id) as
			Promise<Venue>;
	}

	public static getAllOwned(): Promise<Venue[]> {
		return ModelClass.findManyBase(Venue, null) as
			Promise<Venue[]>;
	}

	public constructor(props: VenueI) {
		super(keys<VenueI>(), props);
	}

	public getIcon(): Promise<Upload | null> {
		return ModelClass.findByIdBase(Upload, this.icon || "") as
			Promise<Upload | null>;
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
		return Gig.findByVenue(this._id || "") as Promise<Gig[]>;
	}

	public getTwitterAccount(): Promise<TwitterAccount | null> {
		return ModelClass.findByIdBase(TwitterAccount, this.twitter || "") as
			Promise<TwitterAccount | null>;
	}

	public getFacebookAccount(): Promise<FacebookAccount | null> {
		return ModelClass.findByIdBase(FacebookAccount, this.facebook || "") as
			Promise<FacebookAccount | null>;
	}

	public getLocation(): Promise<Location | null> {
		return ModelClass.findByIdBase(Location, this.location || "") as
			Promise<Location | null>;
	}

	public isValid(): boolean {
		const self = this;
		if (!super.isValid()) { return false; }

		if (!ModelClass.isValidId(this.location)) { return false; }
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
