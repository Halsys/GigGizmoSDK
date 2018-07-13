/**
 * Created by corynull on 4/5/17.
 */

const { ModelNameToModel } = require("./index");
const Gig = require("./Gig");
const RESTModel = require("./RESTModel");

class Venue extends RESTModel {
	get name() {
		return this.getField("name");
	}

	set name(value) {
		this.setField("name", value);
	}

	get description() {
		return this.getField("description");
	}

	set description(value) {
		this.setField("description", value);
	}

	get email() {
		return this.getField("email");
	}

	set email(value) {
		this.setField("email", value);
	}

	get website() {
		return this.getField("website");
	}

	set website(value) {
		this.setField("website", value);
	}

	get phone() {
		return this.getField("phone");
	}

	set phone(value) {
		this.setField("phone", value);
	}

	get location() {
		return this.getField("location");
	}

	set location(value) {
		this.setField("location", value);
	}

	get openCloseTimes() {
		return this.getField("openCloseTimes");
	}

	set openCloseTimes(value) {
		this.setField("openCloseTimes", value);
	}

	get icon() {
		return this.getField("icon");
	}

	set icon(value) {
		this.setField("icon", value);
	}

	get photos() {
		return this.getField("photos");
	}

	set photos(value) {
		this.setField("photos", value);
	}

	get owners() {
		return this.getField("owners");
	}

	set owners(value) {
		this.setField("owners", value);
	}

	get facebook() {
		return this.getField("facebook");
	}

	set facebook(value) {
		this.setField("facebook", value);
	}

	get facebookPageId() {
		return this.getField("facebookPageId");
	}

	set facebookPageId(value) {
		this.setField("facebookPageId", value);
	}

	get facebookPageName() {
		return this.getField("facebookPageName");
	}

	set facebookPageName(value) {
		this.setField("facebookPageName", value);
	}

	get facebookPageToken() {
		return this.getField("facebookPageToken");
	}

	set facebookPageToken(value) {
		this.setField("facebookPageToken", value);
	}

	get twitter() {
		return this.getField("twitter");
	}

	set twitter(value) {
		this.setField("twitter", value);
	}

	get google() {
		return this.getField("google");
	}

	set google(value) {
		this.setField("google", value);
	}

	getIcon(token) {
		return RESTModel.findById("Upload", this.icon, token, true);
	}

	getPhotos(token) {
		const photos = Array.from(this.photos);
		if (photos.length !== 0)
			return RESTModel.findMany(
				"Upload",
				{
					_id: photos
				},
				token,
				true
			);
		return Promise.resolve([]);
	}

	getOwners(token) {
		const owners = Array.from(this.owners);
		if (owners.length !== 0)
			return RESTModel.findMany(
				"User",
				{
					_id: owners
				},
				token,
				true
			);
		return Promise.resolve([]);
	}

	getGigs(token) {
		const GigClass = Gig || ModelNameToModel("Gig");
		return GigClass.findByVenue(this._id, token);
	}

	getTwitterAccount(token) {
		return RESTModel.findById("TwitterAccount", this.twitter, token, true);
	}

	getFacebookAccount(token) {
		return RESTModel.findById("FacebookAccount", this.facebook, token, true);
	}

	getLocation(token) {
		return RESTModel.findById("Location", this.location, token, true);
	}

	valid() {
		const self = this;
		if (!super.valid()) return false;

		if (!RESTModel.isValidId(this.location)) return false;
		if (this.location === "") return false;

		if (typeof this.name !== "string") return false;
		if (this.name === "") return false;

		if (typeof this.description !== "string") return false;
		if (this.description === "") return false;
		if (this.description === "<p><br></p>") return false;

		if (!Array.isArray(this.owners)) return false;
		if (this.owners.length === 0) return false;
		if (!this.owners.every(owner => self.userIsOwner(owner))) return false;

		return true;
	}

	// TODO: Create isOpen method

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
		return RESTModel.findOne("Venue", criteria, token, true);
	}

	static findMany(criteria, token) {
		return RESTModel.findMany("Venue", criteria, token, true);
	}

	static findById(id, token) {
		return RESTModel.findById("Venue", id, token, true);
	}

	static getAllOwned(token) {
		return RESTModel.findMany("Venue", null, token, true);
	}
}

Venue.ModelName = "Venue";

module.exports = Venue;
