/**
 * Created by corynull on 4/1/17.
 */

import moment from "moment";
import Band from "./Band";
import Venue from "./Venue";
import Gig from "./Gig";
import Post from "./Post";
import Page from "./Page";
import Location from "./Location";
import API from "./API";
import Upload from "./Upload";
import RESTModel from "./RESTModel";
import Notification from "./Notification";
import TwitterAccount from "./TwitterAccount";
import FacebookAccount from "./FacebookAccount";
import Conversation from "./Conversation";

export default class User extends RESTModel {
	static ModelName = "User";
	static Current = null;
	static Callbacks = new Map();
	static agreement = null;

	get password() {
		return this.document.password || null;
	}

	set password(value) {
		this.document.dateModified = Date.now();
		this.document.password = value;
	}

	get confirmPassword() {
		return this.document.confirmPassword || null;
	}

	set confirmPassword(value) {
		this.document.dateModified = Date.now();
		this.document.confirmPassword = value;
	}

	get icon() {
		return this.document.icon || null;
	}

	set icon(value) {
		this.document.dateModified = Date.now();
		this.document.icon = value;
	}

	set active(value) {
		this.document.dateModified = Date.now();
		this.document.active = value;
	}

	get active() {
		return this.document.active || null;
	}

	set admin(value) {
		this.document.dateModified = Date.now();
		this.document.admin = value;
	}

	get admin() {
		return this.document.admin === true;
	}

	get firstName() {
		return this.document.firstName || null;
	}

	set firstName(value) {
		this.document.dateModified = Date.now();
		this.document.firstName = value;
	}

	get middleName() {
		return this.document.middleName || null;
	}

	set middleName(value) {
		this.document.dateModified = Date.now();
		this.document.middleName = value;
	}

	get lastName() {
		return this.document.lastName || null;
	}

	set lastName(value) {
		this.document.dateModified = Date.now();
		this.document.lastName = value;
	}

	get birthday() {
		return this.document.birthday ? moment(this.document.birthday) : null;
	}

	set birthday(value) {
		this.document.birthday = moment(value).toISOString();
		this.document.dateModified = Date.now();
	}

	get country() {
		return this.document.country || null;
	}

	set country(value) {
		this.document.dateModified = Date.now();
		this.document.country = value;
	}

	get bandManager() {
		return this.document.bandManager || null;
	}

	set bandManager(value) {
		this.document.dateModified = Date.now();
		this.document.bandManager = value;
	}

	get venueManager() {
		return this.document.venueManager || null;
	}

	set venueManager(value) {
		this.document.dateModified = Date.now();
		this.document.venueManager = value;
	}

	get betaFeatureUser() {
		return this.document.betaFeatureUser || null;
	}

	set betaFeatureUser(value) {
		this.document.dateModified = Date.now();
		this.document.betaFeatureUser = value;
	}

	get sendAnonymousReports() {
		return this.document.sendAnonymousReports || null;
	}

	set sendAnonymousReports(value) {
		this.document.dateModified = Date.now();
		this.document.sendAnonymousReports = value;
	}

	get fullName() {
		return `${this.firstName} ${this.lastName}`;
	}

	get email() {
		return this.document.email || null;
	}

	set email(value) {
		this.document.email = value;
		this.document.dateModified = Date.now();
	}

	get salt() {
		return this.document.salt || null;
	}

	get hash() {
		return this.document.hash || null;
	}

	get facebook() {
		return this.document.facebook || null;
	}

	set facebook(value) {
		this.document.facebook = value;
		this.document.dateModified = Date.now();
	}

	get twitter() {
		return this.document.twitter || null;
	}

	set twitter(value) {
		this.document.twitter = value;
		this.document.dateModified = Date.now();
	}

	get description() {
		return this.document.description || null;
	}

	set description(value) {
		this.document.description = value;
		this.document.dateModified = Date.now();
	}

	get verificationSecret() {
		return this.document.verificationSecret || null;
	}

	set verificationSecret(value) {
		this.document.verificationSecret = value;
		this.document.dateModified = Date.now();
	}

	get emailVerified() {
		return this.document.emailVerified || false;
	}

	set emailVerified(value) {
		this.document.emailVerified = value;
		this.document.dateModified = Date.now();
	}

	get attempts() {
		return this.document.attempts || 0;
	}

	get lastLoginIP() {
		return this.document.lastLoginIP || null;
	}

	set lastLoginIP(value) {
		this.document.lastLoginIP = value;
		this.document.dateModified = Date.now();
	}

	get lastLoginDate() {
		return this.document.lastLoginDate
			? moment(this.document.lastLoginDate)
			: null;
	}

	set lastLoginDate(value) {
		this.document.lastLoginDate = moment(value).toISOString();
		this.document.dateModified = Date.now();
	}

	get options() {
		return this.document.options || {};
	}

	set options(value) {
		this.document.options = value;
		this.document.dateModified = Date.now();
	}

	getIcon() {
		const { icon } = this;
		return Upload.findById(icon);
	}

	getTwitterAccount(token) {
		return TwitterAccount.findById(this.twitter, token);
	}

	getFacebookAccount(token) {
		return FacebookAccount.findById(this.facebook, token);
	}

	validatePassword(maybePassword) {
		const regexTest = /^\s*\d?\S+\d+\S+\d?\s*$/gu;
		const password = maybePassword || "";
		const lowercasePassword = password.toLowerCase();
		const lowercaseFirstName = this.firstName.toLowerCase();
		const lowercaseLastName = this.lastName.toLowerCase();
		if (password === "") return "Password missing";
		else if (password.length < 8) return "Password is too short";
		else if (password.length > 256) return "Password is too long";
		else if (!regexTest.test(password))
			return "Password does not have atleast one number or is contiguous";
		else if (lowercasePassword.indexOf(lowercaseFirstName) !== -1)
			return "Password cannot contain your first name";
		else if (lowercasePassword.indexOf(lowercaseLastName) !== -1)
			return "Password cannot contain your last name";

		return null;
	}

	valid() {
		if (!super.valid()) return false;
		// Type checks
		if (typeof this.firstName !== "string") return false;
		if (typeof this.lastName !== "string") return false;
		if (typeof this.email !== "string") return false;
		// Value checks
		if (this.firstName === "") return false;
		if (this.lastName === "") return false;
		if (this.email === "") return false;
		// TODO: More validation checks?
		return true;
	}

	static sendEmailVerification(token) {
		return API.Call("POST", "/API/User/Verify", { token });
	}

	static getAllConversations(token) {
		return Conversation.getAllOwned(token);
	}

	static getAllNotifications(token) {
		return Notification.getAllOwned(token);
	}

	static getAllPosts(token) {
		return Post.getAllOwned(token);
	}

	static getAllBands(token) {
		return Band.getAllOwned(token);
	}

	static getAllVenues(token) {
		return Venue.getAllOwned(token);
	}

	static getAllGigs(token) {
		return Gig.getAllOwned(token);
	}

	static getAllUploads(token) {
		return Upload.getAllOwned(token);
	}

	static findFacebookPages(term) {
		return new Promise((resolve, reject) => {
			if (term === "") {
				resolve();
			} else {
				API.Call("GET", "/API/FacebookAccount/FindPages", { term }).then(
					resolve,
					reject
				);
			}
		});
	}

	static search(
		q,
		modelName = null,
		skip = 0,
		limit = Number.POSITIVE_INFINITY
	) {
		return new Promise((resolve, reject) => {
			if (q === "") {
				resolve();
			} else {
				const data = { q };
				if (modelName != null) data.model = modelName;

				if (skip !== 0) data.skip = skip;

				if (Number.isFinite(limit)) data.limit = limit;

				API.Call("GET", "/API/TextSearch", data).then(results => {
					const { query, totalFound } = results || {};

					if (!query) reject(query);
					const classMap = {
						Band,
						Venue,
						User,
						Page,
						Location,
						Upload
					};
					const bands = [];
					const venues = [];
					const users = [];
					const pages = [];
					const locations = [];
					const uploads = [];
					query.forEach(item => {
						if (item && item.ModelName) {
							const mName = item.ModelName;
							const ClassType = classMap[mName] || null;
							if (ClassType) {
								const instance = new ClassType(item);
								if (mName === "Band") bands.push(instance);
								else if (mName === "Venue") venues.push(instance);
								else if (mName === "User") users.push(instance);
								else if (mName === "Page") pages.push(instance);
								else if (mName === "Location") locations.push(instance);
								else if (mName === "Upload") uploads.push(instance);
							}
						}
					});
					const sorted = {
						totalFound,
						bands,
						venues,
						users,
						pages,
						locations,
						uploads
					};
					resolve(sorted);
				}, reject);
			}
		});
	}

	static findMany(criteria, token) {
		return RESTModel.findMany(User, criteria, token);
	}

	static findOne(criteria, token) {
		return RESTModel.findOne(User, criteria, token);
	}

	static onChange(callback) {
		const id = Date.now();
		User.Callbacks.set(id, callback);
		return () => {
			User.Callbacks.delete(id);
		};
	}

	static setUser(data) {
		return new Promise((resolve, reject) => {
			try {
				if (typeof data === "object" && data) {
					User.Current = new User(data);
					if (API.SessionStorageSupported) {
						sessionStorage.setItem("user", JSON.stringify(data));
					}

					User.Callbacks.forEach(callback => callback(User.Current));
					resolve(User.Current);
				} else {
					User.Current = null;
					API.token = null;
					if (API.SessionStorageSupported) {
						sessionStorage.removeItem("user");
						sessionStorage.removeItem("token");
					}
					if (typeof document !== "undefined") {
						document.cookie = "";
					}
					User.Callbacks.forEach(callback => callback(null));
					resolve(null);
				}
			} catch (e) {
				reject(e);
			}
		});
	}

	static async getUser(force, tokenMaybe) {
		const token = tokenMaybe || API.findToken();
		let user = null;
		let data = null;
		if (!force && User.Current)
			/* If we already have the current user cached, return it... */
			return User.Current;
		else if (API.SessionStorageSupported) {
			/* If the user is stored in session storage. */
			data = JSON.parse(sessionStorage.getItem("user"));
			if (data) user = await User.setUser(data);
		}
		if (API.UseSocketIO && API.ShouldUseSocketIO) {
			data = await new Promise((resolve, reject) => {
				if (token)
					API.GetSocket(token).then(socket => {
						socket.emit("GigGizmo/User/Retreive", null, resolve);
					}, reject);
				else resolve(null);
			});
		} else data = await API.Call("GET", "/API/User", { token });

		if (data) user = await User.setUser(data);
		else {
			await User.setUser(null);
			return null;
		}

		return user;
	}

	static findById(id, token) {
		return RESTModel.findById(User, id, token);
	}

	static connectFacebook() {
		window.location.href = `${API.root}/API/Auth/Facebook`;
	}

	static facebookLogIn() {
		window.location.href = `${API.root}/API/Login/Facebook`;
	}

	static payPalLogIn() {
		window.location.href = `${API.root}/API/Auth/PayPal`;
	}

	static userLogIn(email, password) {
		return new Promise((resolve, reject) => {
			function onError(error) {
				User.setUser(null).then(() => {
					reject(error);
				});
			}
			if (!email) onError(new Error("No email"));
			else if (!password) onError(new Error("No password"));
			else {
				API.Call("POST", "/API/User/SignIn", {
					email,
					password
				}).then(response => {
					if (response && response.user && response.token) {
						if (API.SessionStorageSupported) {
							sessionStorage.setItem("token", response.token);
						}
						API.token = response.token;
						User.setUser(response.user).then(resolve, onError);
					} else onError(new Error(`${JSON.stringify(response)} returned`));
				}, onError);
			}
		});
	}

	static userLogOut(tokenMaybe) {
		const token = tokenMaybe || API.findToken();
		return new Promise((resolve, reject) => {
			API.Call("POST", "/API/User/SignOut", { token }).then(() => {
				User.setUser(null).then(user => {
					if (user && user.valid())
						reject(
							new Error(`${JSON.stringify(user)} returned, failed to log out?`)
						);
					else resolve(user);
				});
			}, reject);
		});
	}

	static sendPasswordResetEmail(email) {
		return API.Call("POST", "/User/Reset", { email });
	}

	static registerUser(userData) {
		return new Promise((resolve, reject) => {
			if (userData && typeof userData === "object") {
				if (userData.email) {
					const re = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
					if (re[Symbol.search](userData.email) !== 0)
						return reject(new Error("Invalid email address"));
				} else return reject(new Error("Email is required"));
				if (userData.password) {
					const symbolTest = /[^a-zA-Z0-9]/gu;
					const numberTest = /[0-9]/g;
					const lowercasePassword = userData.password.toLowerCase();
					if (userData.password === "")
						return reject(new Error("Password is required"));
					else if (userData.password.length < 8)
						return reject(new Error("Password is too short"));
					else if (userData.password.length > 256)
						return reject(new Error("Password is too long"));
					else if (!symbolTest.test(userData.password))
						return reject(
							new Error("Password does not contain at least one symbol")
						);
					else if (!numberTest.test(userData.password))
						return reject(
							new Error("Password does not contain at least one number")
						);
					else if (
						userData.firstName &&
						userData.firstName.length !== 0 &&
						lowercasePassword.indexOf(userData.firstName.toLowerCase()) !== -1
					)
						return reject(
							new Error("Password can not contain your first name")
						);
					else if (
						userData.lastName &&
						userData.lastName.length !== 0 &&
						lowercasePassword.indexOf(userData.lastName.toLowerCase()) !== -1
					)
						return reject(new Error("Password can not contain your last name"));
				} else return reject(new Error("Password is required"));

				if (userData.firstName) {
					if (userData.firstName.length !== 0) {
						if (userData.firstName[0] === userData.firstName[0].toLowerCase())
							return reject(new Error("First name is not title case"));
					} else return reject(new Error("First name is required"));
				} else return reject(new Error("First name is required"));

				if (userData.lastName) {
					if (userData.lastName.length !== 0) {
						if (userData.lastName[0] === userData.lastName[0].toLowerCase())
							return reject(new Error("Last name is not title case"));
					} else return reject(new Error("Last name is required"));
				} else return reject(new Error("Last name is required"));
			} else return reject(new Error("User data is not an object"));

			return API.Call("POST", "/API/User", userData).then(data => {
				if (data)
					User.setUser(data).then(user => {
						resolve(user);
					}, reject);
				else reject(new Error(`${JSON.stringify(data)} returned`));
			}, reject);
		});
	}
}
