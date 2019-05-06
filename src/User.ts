/**
 * Created by corynull on 4/1/17.
 */

import { keys } from "ts-transformer-keys";
import { API } from "./API";
import { Band } from "./Band";
import { Conversation } from "./Conversation";
import { FacebookAccount } from "./FacebookAccount";
import { Gig } from "./Gig";
import { Location } from "./Location";
import { DocumentI, ModelClass } from "./Model";
import { Notification } from "./Notification";
import { Page } from "./Page";
import { Post } from "./Post";
import { TwitterAccount } from "./TwitterAccount";
import { Upload } from "./Upload";
import { Venue } from "./Venue";

export type UserCallback = (user: User | null) => void;
export type UserCallbackDestroyer = () => void;

type OnlineStatusTypes = "default" | "offline" | "busy";

interface UserI extends DocumentI {
	icon: string | null;
	firstName: string;
	middleName: string;
	lastName: string;
	birthday: Date;
	country: string;
	bandManager: boolean;
	venueManager: boolean;
	password?: string;
	confirmPassword?: string;
	betaFeatureUser: boolean;
	sendAnonymousReports: boolean;
	sendErrorReports: boolean;
	sendEmails: boolean;
	sendPromotions: boolean;
	useCookies: boolean;
	description: string;
	active: boolean;
	paypal: string | null;
	facebook: string | null;
	twitter: string | null;
	emailVerified: boolean;
	canFind: boolean;
	payment: string | null;
	verificationSecret: string | null;
	admin: boolean;
	attempts: number;
	lastLogin: Date;
	lastLoginIP: string;
	options: any;
	connections: string[];
	blocked: string[];
	email: string;
	hash: string;
	salt: string;
	onlineStatus: OnlineStatusTypes;
}

export class User extends ModelClass<UserI> {

	get fullName(): string {
		return `${this.firstName || ""} ${this.middleName || ""} ${this.lastName ||
			""}`;
	}
	public static ModelName: string = "User";
	public static Current: User | null = null;
	public static Callbacks: Map<number, UserCallback> = new Map();
	public static agreement: any = null;

	public static EmailRegex: RegExp = // tslint:disable-next-line
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	public static async verifyEmail(id: string, secret: string): Promise<any> {
		if (API.useSocketIO && API.ShouldUseSocketIO) {
			const socket = await API.getSocket();
			if (socket) {
				return new Promise((resovle) => {
					socket.emit("/API/User/Verify", { id, secret }, resovle);
				});
			}
		} else {
			return API.call("GET", "/API/User/Verify", {
				id,
				secret
			});
		}
	}

	public static async sendEmailVerification(): Promise<any> {
		if (API.useSocketIO && API.ShouldUseSocketIO) {
			const socket = await API.getSocket();
			if (socket) {
				return new Promise((resovle) => {
					socket.emit("/API/User/Verify", null, resovle);
				});
			}
		} else {
			return API.call("POST", "/API/User/Verify", null);
		}
	}

	public static getAllConnections(): Promise<User[]> {
		return ModelClass.findManyBase(User, null) as
			Promise<User[]>;
	}

	public static getAllConversations(): Promise<Conversation[]> {
		return ModelClass.findManyBase(Conversation, null) as
			Promise<Conversation[]>;
	}

	public static getAllNotifications(): Promise<Notification[]> {
		return ModelClass.findManyBase(Notification, null) as
			Promise<Notification[]>;
	}

	public static getAllPosts(): Promise<Post[]> {
		return ModelClass.findManyBase(Post, null) as
			Promise<Post[]>;
	}

	public static getAllBands(): Promise<Band[]> {
		return ModelClass.findManyBase(Band, null) as
			Promise<Band[]>;
	}

	public static getAllVenues(): Promise<Venue[]> {
		return ModelClass.findManyBase(Venue, null) as
			Promise<Venue[]>;
	}

	public static getAllGigs(): Promise<Gig[]> {
		return ModelClass.findManyBase(Gig, null) as
			Promise<Gig[]>;
	}

	public static getAllUploads(): Promise<Upload[]> {
		return ModelClass.findManyBase(Upload, null) as
			Promise<Upload[]>;
	}

	public static findFacebookPages(term: string): Promise<any> {
		return new Promise((resolve, reject) => {
			if (term === "") {
				resolve();
			} else {
				API.call("GET", "/API/FacebookAccount/FindPages", { term }).then(
					resolve,
					reject
				);
			}
		});
	}

	public static search(
		q: string,
		modelName: string | null = null,
		skip: number = 0,
		limit: number = Number.POSITIVE_INFINITY
	): Promise<Array<Band | Location | Page | Upload | User | Venue>> {
		return new Promise(
			(resolve: ((query: Array<Band | Location | Page | Upload | User | Venue>) => void),
			 reject: ((error: any) => void)) => {
			if (q === "" || q === undefined) {
				resolve([]);
			} else {
				const data: {
					limit: number | undefined;
					model: string | undefined;
					q: string | undefined;
					skip: number | undefined;
				} = {
					limit: undefined,
					model: undefined,
					q: undefined,
					skip: undefined
				};
				data.q = q;
				if (modelName !== null && modelName !== "null") {
					data.model = modelName;
				}

				if (skip !== 0 && Number.isFinite(Number(skip))) {
					data.skip = Number(skip);
				}

				if (Number.isFinite(Number(limit))) {
					data.limit = Number(limit);
				}

				const Return = (results: any) => {
					const query = results.query;
					if (!query) { reject(query); }
					API.deserializeData(query).then(resolve, reject);
				};
				if (API.useSocketIO && API.ShouldUseSocketIO) {
					API.getSocket().then(
						(socket: SocketIOClient.Socket | null) => {
							if (socket) {
								socket.emit("/API/TextSearch", data, Return);
							}
						},
						reject);
				} else {
					API.call("GET", "/API/TextSearch", data).then(Return, reject);
				}
			}
		});
	}

	public static findMany(criteria: object | null): Promise<User[]> {
		return ModelClass.findManyBase(User, criteria) as Promise<User[]>;
	}

	public static findOne(criteria: object | null): Promise<User | null> {
		return ModelClass.findOneBase(User, criteria) as Promise<User>;
	}

	public static onChange(callback: (user: User | null) => void):
		UserCallbackDestroyer {
		const id = Date.now();
		User.Callbacks.set(id, callback);
		return () => {
			User.Callbacks.delete(id);
		};
	}

	public static async setUser(data: UserI | null): Promise<User | null> {
		try {
			if (typeof data === "object" && data) {
				User.Current = new User(data);
				if (API.SessionStorageSupported) {
					sessionStorage.setItem("user", JSON.stringify(data));
				}
				User.Callbacks.forEach((callback: any) => callback(User.Current));
			} else {
				User.Current = null;
				API.token = null;
				API.expires = null;
				if (API.SessionStorageSupported) { sessionStorage.removeItem("user"); }
				User.Callbacks.forEach((callback: any) => callback(null));
			}
		} catch (e) {
			console.error(e);
		}
		return User.Current;
	}

	public static async getUser(force: boolean): Promise<User | null> {
		let data = null;
		const dateNow = new Date();
		if (!force && API.expires && dateNow < API.expires) {
			if (User.Current !== null) {
				/* If we already have the current user cached, return it... */
				return User.Current;
			} else if (API.SessionStorageSupported) {
				/* If the user is stored in session storage. */
				try {
					const saved = sessionStorage.getItem("user") || "";
					data = JSON.parse(saved);
				} catch (e) {
					data = "";
				}
				if (data) { return User.setUser(data); }
			}
		}

		if (API.useSocketIO && API.ShouldUseSocketIO) {
			data = await new Promise((resolve, reject) => {
				API.getSocket().then(
					(socket: SocketIOClient.Socket | null) => {
						if (socket) {
							socket.emit("/API/User/FindOne", null, resolve);
						}
					},
					reject);
			});
		} else { data = await API.call("GET", "/API/User", null); }
		if (data) { return User.setUser(data); }
		return User.setUser(null);
	}

	public static findById(id: string): Promise<User | null> {
		return ModelClass.findByIdBase(User, id) as Promise<User | null>;
	}

	public static connectFacebook() {
		window.location.href = `${API.rootURL}/API/Auth/Facebook`;
	}

	public static facebookLogIn() {
		window.location.href = `${API.rootURL}/API/Login/Facebook`;
	}

	public static payPalLogIn() {
		window.location.href = `${API.rootURL}/API/Auth/PayPal`;
	}

	public static async userLogIn(email: string, password: string): Promise<User | null> {
		if (!email || email === "") {
			throw new Error("No email");
		} else if (!password || password === "") {
			throw new Error("No password");
		} else {
			let response = null;
			if (API.useSocketIO && API.ShouldUseSocketIO) {
				response = await new Promise((resolve, reject) => {
					API.getSocket().then(
						(socket: SocketIOClient.Socket | null) => {
							if (socket) {
								socket.emit(
									"/API/User/SignIn", {
										email,
										password
									},
									resolve);
							}
						},
						reject);
				});
			} else {
				response = await API.call("POST", "/API/User/SignIn", {
					email,
					password
				});
			}
			// TODO: Create error for unauthorized access vs general error
			if (response && response.user && response.token && response.expires) {
				API.expires = new Date(response.expires);
				API.token = response.token;
				return User.setUser(response.user);
			} else { throw new Error(`Unauthorized`); }
		}
	}

	public static async userLogOut(): Promise<User | null> {
		if (API.useSocketIO && API.ShouldUseSocketIO) {
			await new Promise((resolve, reject) => {
				API.getSocket().then(
					(socket: SocketIOClient.Socket | null) => {
						if (socket) {
							socket.emit("/API/User/SignOut", null, resolve);
						}
					},
					reject);
			});
		} else {
			await API.call("POST", "/API/User/SignOut", null);
		}
		const user = await User.setUser(null);
		if (user && user.isValid()) {
			throw new Error(`${JSON.stringify(user)} returned, failed to log out?`);
		} else { return user; }
	}

	public static sendPasswordResetEmail(email: string): Promise<any> {
		return API.call("POST", "/User/Reset", { email });
	}

	public static registerUser(userData: any): Promise<User> {
		return new Promise((resolve, reject) => {
			if (userData && typeof userData === "object") {
				if (userData.email !== null || userData.email !== "") {
					if (User.EmailRegex[Symbol.search](userData.email) !== 0) {
						return reject(new Error("Invalid email address"));
					}
				} else { return reject(new Error("Email is required")); }
				if (userData.password) {
					const symbolTest = /[^a-zA-Z0-9]/gu;
					const numberTest = /[0-9]/g;
					const lowercasePassword = userData.password.toLowerCase();
					if (userData.password === "") {
						return reject(new Error("Password is required"));
					} else if (userData.password.length < 8) {
						return reject(new Error("Password is too short"));
					} else if (userData.password.length > 256) {
						return reject(new Error("Password is too long"));
					} else if (!symbolTest.test(userData.password)) {
						return reject(
							new Error("Password does not contain at least one symbol")
						);
					} else if (!numberTest.test(userData.password)) {
						return reject(
							new Error("Password does not contain at least one number")
						);
					} else if (
						userData.firstName &&
						userData.firstName.length !== 0 &&
						lowercasePassword.indexOf(userData.firstName.toLowerCase()) !== -1
					) {
						return reject(
							new Error("Password can not contain your first name")
						);
					} else if (
						userData.lastName &&
						userData.lastName.length !== 0 &&
						lowercasePassword.indexOf(userData.lastName.toLowerCase()) !== -1
					) {
						return reject(new Error("Password can not contain your last name"));
					}
				} else { return reject(new Error("Password is required")); }

				if (userData.firstName) {
					if (userData.firstName.length !== 0) {
						if (userData.firstName[0] === userData.firstName[0].toLowerCase()) {
							return reject(new Error("First name is not title case"));
						}
					} else { return reject(new Error("First name is required")); }
				} else { return reject(new Error("First name is required")); }

				if (userData.lastName) {
					if (userData.lastName.length !== 0) {
						if (userData.lastName[0] === userData.lastName[0].toLowerCase()) {
							return reject(new Error("Last name is not title case"));
						}
					} else { return reject(new Error("Last name is required")); }
				} else { return reject(new Error("Last name is required")); }
			} else { return reject(new Error("User data is not an object")); }

			if (API.useSocketIO && API.ShouldUseSocketIO) {
				return new Promise((res, rej) => {
					API.getSocket().then(
						(socket: SocketIOClient.Socket | null) => {
							if (socket) {
								socket.emit("/API/User/Create", userData, res);
							}
						},
						rej);
				});
			}
			return API.call("POST", "/API/User", userData).then(
				(data) => {
					if (data) {
						User.setUser(data).then(
							(user: any) => {
								resolve(user);
							},
							reject);
					} else {
						reject(new Error(`${JSON.stringify(data)} returned`));
					}
				},
				reject);
		});
	}

	public static NotifyAdminsOfError() {
		console.error("Not implemented yet.");
	}

	public constructor(props: UserI) {
		super(keys<UserI>(), props);
	}

	public getIcon(): Promise<Upload | null> {
		return ModelClass.findByIdBase(Upload, this.icon || "") as
			Promise<Upload | null>;
	}

	public getTwitterAccount(): Promise<TwitterAccount | null> {
		return ModelClass.findByIdBase(TwitterAccount, this.twitter || "") as
			Promise<TwitterAccount | null>;
	}

	public getFacebookAccount(): Promise<FacebookAccount | null> {
		return ModelClass.findByIdBase(FacebookAccount, this.facebook || "") as
			Promise<FacebookAccount | null>;
	}

	public getConnections(): Promise<Array<User | null>> {
		return Promise.all(
			this.connections.map((id: string) => User.findById(id)) as
			Array<Promise<User | null>>);
	}

	public getBlocked(): Promise<Array<User | null>> {
		return Promise.all(
			this.blocked.map((id: string) => User.findById(id)) as
			Array<Promise<User | null>>);
	}

	public validatePassword(maybePassword: string): Error | null {
		const password = maybePassword || "";
		const decimalTest = /\d/;
		const symbolTest = /\W/;
		const lowercasePassword = password.toLowerCase();
		const lowercaseFirstName =
			this.firstName ? this.firstName.toLowerCase() : "";
		const lowercaseLastName =
			this.lastName ? this.lastName.toLowerCase() : "";
		if (password === "") {
			return new Error("Password missing");
		} else if (password.length < 8) {
			return new Error("Password is too short");
		} else if (password.length > 256) {
			return new Error("Password is too long");
		} else if (!decimalTest.test(password)) {
			return new Error("Password does not have atleast one number");
		} else if (!symbolTest.test(password)) {
			return new Error("Password does not have atleast one symbol");
		} else if (lowercasePassword.indexOf(lowercaseFirstName) !== -1) {
			return new Error("Password cannot contain your first name");
		} else if (lowercasePassword.indexOf(lowercaseLastName) !== -1) {
			return new Error("Password cannot contain your last name");
		}
		return null;
	}

	public isValid(): boolean {
		if (!super.isValid()) { return false; }
		// Type checks
		if (typeof this.firstName !== "string") { return false; }
		if (typeof this.lastName !== "string") { return false; }
		if (typeof this.email !== "string") { return false; }
		// Value checks
		if (this.firstName === "") { return false; }
		if (this.lastName === "") { return false; }
		if (this.email === "") { return false; }
		// TODO: More validation checks?
		return true;
	}

	public anyErrors(): Error | null {
		const superError = super.anyErrors();
		if (superError) { return superError; }

		if (this.id) {
			// Type checks
			if (!["string", "undefined"].includes(typeof this.changes.firstName)) {
				return new Error(`Invalid firstName: ${this.changes.firstName}`);
			}
			if (!["string", "undefined"].includes(typeof this.changes.lastName)) {
				return new Error(`Invalid lastName: ${this.changes.lastName}`);
			}
			if (!["string", "undefined"].includes(typeof this.changes.password)) {
				return new Error(`Invalid password: ${this.changes.password}`);
			}
			if (!["string", "undefined"].includes(typeof this.changes.confirmPassword)) {
				return new Error(`Invalid confirmPassword: ${this.changes.confirmPassword}`);
			}
			if (!["string", "undefined"].includes(typeof this.changes.email)) {
				return new Error(`Invalid email: ${this.changes.email}`);
			}
			// Value checks
			if (this.changes.firstName === "") {
				return new Error("Blank firstName");
			}
			if (this.changes.lastName === "") {
				return new Error("Blank lastName");
			}
			if (this.changes.password) {
				const error = this.validatePassword(this.changes.password);
				if (error) { return error; }
			}
			if (this.changes.password !== this.changes.confirmPassword) {
				return new Error("Passwords do not match");
			}
		} else {
			// Type checks
			if (typeof this.changes.firstName !== "string") {
				return new Error(`Invalid firstName: ${this.changes.firstName}`);
			}
			if (typeof this.changes.lastName !== "string") {
				return new Error(`Invalid lastName: ${this.changes.lastName}`);
			}
			if (typeof this.changes.password !== "string") {
				return new Error(`Invalid password: ${this.changes.password}`);
			}
			if (typeof this.changes.confirmPassword !== "string") {
				return new Error(`Invalid confirmPassword: ${this.changes.confirmPassword}`);
			}
			// Value checks
			if (this.changes.firstName === "") {
				return new Error("Blank firstName");
			}
			if (this.changes.lastName === "") {
				return new Error("Blank lastName");
			}
			if (this.changes.password) {
				const error = this.validatePassword(this.changes.password);
				if (error) { return error; }
			}
			if (this.changes.password !== this.changes.confirmPassword) {
				return new Error("Passwords do not match");
			}
		}

		// TODO: More validation checks?
		return null;
	}
}
