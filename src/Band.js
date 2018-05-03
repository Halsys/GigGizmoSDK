/**
 * Created by corynull on 4/3/17.
 */

import User from "./User";
import Upload from "./Upload";
import Gig from "./Gig";
import RESTModel from "./RESTModel";
import TwitterAccount from "./TwitterAccount";
import FacebookAccount from "./FacebookAccount";

export default class Band extends RESTModel {
	static ModelName = "Band";

	get name() {
		return this.document.name || null;
	}

	set name(value) {
		this.document.name = value;
		this.document.dateModified = Date.now();
	}

	get website() {
		return this.document.website || null;
	}

	set website(value) {
		this.document.website = value;
		this.document.dateModified = Date.now();
	}

	get email() {
		return this.document.email || null;
	}

	set email(value) {
		this.document.email = value;
		this.document.dateModified = Date.now();
	}

	get cityName() {
		return this.document.cityName || null;
	}

	set cityName(value) {
		this.document.cityName = value;
		this.document.dateModified = Date.now();
	}

	get cityPlaceID() {
		return this.document.cityPlaceID || null;
	}

	set cityPlaceID(value) {
		this.document.cityPlaceID = value;
		this.document.dateModified = Date.now();
	}

	get description() {
		return this.document.description || null;
	}

	set description(value) {
		this.document.description = value;
		this.document.dateModified = Date.now();
	}

	get metadata() {
		return this.document.metadata || null;
	}

	set metadata(value) {
		this.document.metadata = value;
		this.document.dateModified = Date.now();
	}

	get icon() {
		return this.document.icon || null;
	}

	set icon(value) {
		this.document.icon = value;
		this.document.dateModified = Date.now();
	}

	get photos() {
		return this.document.photos || [];
	}

	set photos(value) {
		this.document.photos = value;
		this.document.dateModified = Date.now();
	}

	get owners() {
		return this.document.owners || [];
	}

	set owners(value) {
		this.document.owners = value;
		this.document.dateModified = Date.now();
	}

	get facebook() {
		return this.document.facebook || null;
	}

	set facebook(value) {
		this.document.facebook = value;
		this.document.dateModified = Date.now();
	}

	get facebookPageId() {
		return this.document.facebookPageId || null;
	}

	set facebookPageId(value) {
		this.document.facebookPageId = value;
		this.document.dateModified = Date.now();
	}

	get facebookPageName() {
		return this.document.facebookPageName || null;
	}

	set facebookPageName(value) {
		this.document.facebookPageName = value;
		this.document.dateModified = Date.now();
	}

	get facebookPageToken() {
		return this.document.facebookPageToken || null;
	}

	set facebookPageToken(value) {
		this.document.facebookPageToken = value;
		this.document.dateModified = Date.now();
	}

	get twitter() {
		return this.document.twitter || null;
	}

	set twitter(value) {
		this.document.twitter = value;
		this.document.dateModified = Date.now();
	}

	get google() {
		return this.document.google || null;
	}

	set google(value) {
		this.document.google = value;
		this.document.dateModified = Date.now();
	}

	getIcon(token) {
		return Upload.findById(this.icon, token);
	}

	getPhotos(token) {
		const photos = Array.from(this.photos);
		if (photos.length !== 0)
			return Upload.findMany(
				{
					_id: photos
				},
				token
			);
		return Promise.resolve([]);
	}

	getOwners(token) {
		const owners = Array.from(this.owners);
		if (owners.length !== 0)
			return User.findMany(
				{
					_id: owners
				},
				token
			);
		return Promise.resolve([]);
	}

	getGigs(token) {
		return Gig.findByBand(this._id, token);
	}

	getTwitterAccount(token) {
		return TwitterAccount.findById(this.twitter, token);
	}

	getFacebookAccount(token) {
		return FacebookAccount.findById(this.facebook, token);
	}

	valid() {
		if (!super.valid()) return false;

		if (typeof this.cityPlaceID !== "string") return false;
		if (this.cityPlaceID === "") return false;

		if (typeof this.name !== "string") return false;
		if (this.name === "") return false;

		if (typeof this.description !== "string") return false;
		if (this.description === "") return false;
		if (this.description === "<p><br></p>") return false;

		if (!Array.isArray(this.owners)) return false;
		if (this.owners.length === 0) return false;

		return true;
	}

	userIsOwner(user) {
		if (Array.isArray(this.owners)) {
			let userId = null;
			if (typeof user === "string") userId = user;
			else if (typeof user === "object" && user) userId = user._id;
			return this.owners.find(id => id === userId) !== undefined;
		}
		return false;
	}

	static findOne(criteria, token) {
		return RESTModel.findOne(Band, criteria, token);
	}

	static findMany(criteria, token) {
		return RESTModel.findMany(Band, criteria, token);
	}

	static findById(id, token) {
		return RESTModel.findById(Band, id, token);
	}

	static getAllOwned(token) {
		return RESTModel.findMany(Band, null, token);
	}
}
