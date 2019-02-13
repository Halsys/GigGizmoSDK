/**
 * Created by corynull on 4/1/17.
 */

import API from "./API";
import Band from "./Band";
import Conversation from "./Conversation";
import FacebookAccount from "./FacebookAccount";
import Gig from "./Gig";
import Location from "./Location";
import Page from "./Page";
import Post from "./Post";
import RESTModel from "./RESTModel";
import TwitterAccount from "./TwitterAccount";
import Upload from "./Upload";
import Venue from "./Venue";

export default class User extends RESTModel {
  public static ModelName: string = "User";
  public static Current: any = null;
  public static Callbacks: Map<number, (user: User) => any> = new Map();
  public static agreement: any = null;
  public static EmailRegex: RegExp = new RegExp(
    [`^(([^<>()[\].,;:\s@"]+`,
     `(\.[^<>()[\].,;:\s@"]+)*)|(".+"))`,
     `@(([^<>()[\].,;:\s@"]+\.)+`,
     `[^<>()[\].,;:\s@"]{2,})$`].join(""),
    "i");

  get password(): string {
    return this.getField("password");
  }

  set password(value: string) {
    this.setField("password", value);
  }

  get confirmPassword(): string {
    return this.getField("confirmPassword");
  }

  set confirmPassword(value: string) {
    this.setField("confirmPassword", value);
  }

  get icon(): string {
    return this.getField("icon");
  }

  set icon(value: string) {
    this.setField("icon", value);
  }

  set active(value: boolean) {
    this.setField("active", value);
  }

  get active(): boolean {
    return this.getField("active");
  }

  set admin(value: boolean) {
    this.setField("admin", value);
  }

  get admin(): boolean {
    return this.getField("admin") === true;
  }

  get firstName(): string {
    return this.getField("firstName");
  }

  set firstName(value: string) {
    this.setField("firstName", value);
  }

  get middleName(): string {
    return this.getField("middleName");
  }

  set middleName(value: string) {
    this.setField("middleName", value);
  }

  get lastName(): string {
    return this.getField("lastName");
  }

  set lastName(value: string) {
    this.setField("lastName", value);
  }

  get birthday(): Date {
    const birthday = this.getField("birthday") || null;
    return birthday ? new Date(birthday) : birthday;
  }

  set birthday(value: Date) {
    this.setField("birthday", value.toJSON());
  }

  get country(): string {
    return this.getField("country");
  }

  set country(value: string) {
    this.setField("country", value);
  }

  get bandManager(): boolean {
    return this.getField("bandManager") === true;
  }

  set bandManager(value: boolean) {
    this.setField("bandManager", value);
  }

  get venueManager(): boolean {
    return this.getField("venueManager") === true;
  }

  set venueManager(value: boolean) {
    this.setField("venueManager", value);
  }

  get betaFeatureUser(): boolean {
    return this.getField("betaFeatureUser") === true;
  }

  set betaFeatureUser(value: boolean) {
    this.setField("betaFeatureUser", value);
  }

  get sendAnonymousReports(): boolean {
    return this.getField("sendAnonymousReports") === true;
  }

  set sendAnonymousReports(value: boolean) {
    this.setField("sendAnonymousReports", value);
  }

  get sendErrorReports(): boolean {
    return this.getField("sendErrorReports") === true;
  }

  set sendErrorReports(value: boolean) {
    this.setField("sendErrorReports", value);
  }

  get sendEmails(): boolean {
    return this.getField("sendEmails") === true;
  }

  set sendEmails(value: boolean) {
    this.setField("sendEmails", value);
  }

  get sendPromotions(): boolean {
    return this.getField("sendPromotions") === true;
  }

  set sendPromotions(value: boolean) {
    this.setField("sendPromotions", value);
  }

  get useCookies(): boolean {
    return this.getField("useCookies") === true;
  }

  set useCookies(value: boolean) {
    this.setField("useCookies", value);
  }

  get fullName(): string {
    return `${this.firstName || ""} ${this.middleName || ""} ${this.lastName ||
      ""}`;
  }

  get email(): string {
    return this.getField("email");
  }

  set email(value: string) {
    this.setField("email", value);
  }

  get salt(): string {
    return this.getField("salt");
  }

  get hash(): string {
    return this.getField("hash");
  }

  get facebook(): string {
    return this.getField("facebook");
  }

  set facebook(value: string) {
    this.setField("facebook", value);
  }

  get twitter(): string {
    return this.getField("twitter");
  }

  set twitter(value: string) {
    this.setField("twitter", value);
  }

  get description(): string {
    return this.getField("description");
  }

  set description(value: string) {
    this.setField("description", value);
  }

  get emailVerified(): boolean {
    return this.getField("emailVerified");
  }

  set emailVerified(value: boolean) {
    this.setField("emailVerified", value);
  }

  get attempts(): number {
    return this.getField("attempts");
  }

  get lastLoginIP(): string {
    return this.getField("lastLoginIP");
  }

  set lastLoginIP(value: string) {
    this.setField("lastLoginIP", value);
  }

  get lastLogin(): Date {
    const lastLogin = this.getField("lastLogin") || null;
    return lastLogin ? new Date(lastLogin) : lastLogin;
  }

  set lastLogin(value: Date) {
    this.setField("lastLogin", value.toJSON());
  }

  get canContact(): boolean {
    return this.getField("canContact") === true;
  }

  set canContact(value: boolean) {
    this.setField("canContact", value);
  }

  get canFind(): boolean {
    return this.getField("canFind") === true;
  }

  set canFind(value: boolean) {
    this.setField("canFind", value);
  }

  get options(): any {
    return this.getField("options");
  }

  set options(value: any) {
    this.setField("options", value);
  }

  public static verifyEmail(id: string, secret: string) {
    return API.call("GET", "/API/User/Verify", {
      id,
      secret
    });
  }

  public static sendEmailVerification() {
    return API.call("POST", "/API/User/Verify", null);
  }

  public static getAllConversations() {
    return RESTModel.findManyBase(Conversation, null, true);
  }

  public static getAllNotifications() {
    return RESTModel.findManyBase("Notification", null, true);
  }

  public static getAllPosts() {
    return RESTModel.findManyBase(Post, null, true);
  }

  public static getAllBands() {
    return RESTModel.findManyBase(Band, null, true);
  }

  public static getAllVenues() {
    return RESTModel.findManyBase(Venue, null, true);
  }

  public static getAllGigs() {
    return RESTModel.findManyBase(Gig, null, true);
  }

  public static getAllUploads() {
    return RESTModel.findManyBase(Upload, null, true);
  }

  public static findFacebookPages(term: string) {
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
  ) {
    return new Promise((resolve, reject) => {
      if (q === "" || q === undefined) {
        resolve();
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
        if (modelName !== null && modelName !== "Any") {
          data.model = modelName;
        }

        if (Number.isFinite(Number(skip))) {
          data.skip = Number(skip);
        }

        if (Number.isFinite(Number(limit))) {
          data.limit = Number(limit);
        }

        const Return = (results: any) => {
          const query = results.query;
          const totalFound = results.totalFound;

          if (!query) { reject(query); }
          const bands: Band[] = [];
          const venues: Venue[] = [];
          const users: User[] = [];
          const pages: Page[] = [];
          const locations: Location[] = [];
          const uploads: Upload[] = [];
          query.forEach(async (item: any) => {
            if (item && item.ModelName) {
              const mName = item.ModelName;
              if (mName === "Band") {
                bands.push(new Band(item));
              } else if (mName === "Venue") {
                venues.push(new Venue(item));
              } else if (mName === "User") {
                users.push(new User(item));
              } else if (mName === "Page") {
                pages.push(new Page(item));
              } else if (mName === "Location") {
                locations.push(new Location(item));
              } else if (mName === "Upload") {
                uploads.push(new Upload(item));
              }
            }
          });
          const sorted = {
            bands,
            locations,
            pages,
            totalFound,
            uploads,
            users,
            venues
          };
          resolve(sorted);
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

  public static findMany(criteria: object | null) {
    return RESTModel.findManyBase(User, criteria, true);
  }

  public static findOne(criteria: object | null) {
    return RESTModel.findOneBase(User, criteria, true);
  }

  public static onChange(callback: any) {
    const id = Date.now();
    User.Callbacks.set(id, callback);
    return () => {
      User.Callbacks.delete(id);
    };
  }

  public static async setUser(data: object | null) {
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
        if (API.SessionStorageSupported) { sessionStorage.removeItem("user"); }
        User.Callbacks.forEach((callback: any) => callback(null));
      }
    } catch (e) {
      console.error(e);
    }
    return User.Current;
  }

  public static async getUser(force: boolean) {
    let data = null;
    const dateNow = new Date();
    if (!force && API.expires && dateNow < API.expires) {
      if (User.Current !== null) {
        /* If we already have the current user cached, return it... */
        return User.Current;
      } else if (API.SessionStorageSupported) {
        /* If the user is stored in session storage. */
        data = JSON.parse(sessionStorage.getItem("user") || "");
        if (data) { return User.setUser(data); }
      }
    }

    if (API.useSocketIO && API.ShouldUseSocketIO) {
      data = await new Promise((resolve, reject) => {
        API.getSocket().then(
          (socket: SocketIOClient.Socket | null) => {
            if (socket) {
              socket.emit("/API/User/Retreive", resolve);
            }
          },
          reject);
      });
    } else { data = await API.call("GET", "/API/User", null); }
    if (data) { return User.setUser(data); }
    return User.setUser(null);
  }

  public static findById(id: string) {
    return RESTModel.findByIdBase(User, id, true);
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

  public static async userLogIn(email: string, password: string) {
    if (!email) {
      throw new Error("No email");
    } else if (!password) {
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
      if (response && response.user && response.token) {
        API.expires = response.expires;
        API.token = response.token.toString();
        return User.setUser(response.user);
      } else { throw new Error(`Unauthorized`); }
    }
  }

  public static async userLogOut() {
    let response = null;
    if (API.useSocketIO && API.ShouldUseSocketIO) {
      response = await new Promise((resolve, reject) => {
        API.getSocket().then(
          (socket: SocketIOClient.Socket | null) => {
            if (socket) {
              socket.emit("/API/User/SignOut", null, resolve);
            }
          },
          reject);
      });
    } else {
      response = await API.call("POST", "/API/User/SignOut", null);
    }
    const user = await User.setUser(null);
    if (user && user.valid()) {
      throw new Error(`${JSON.stringify(user)} returned, failed to log out?`);
    } else { return user; }
  }

  public static sendPasswordResetEmail(email: string) {
    return API.call("POST", "/User/Reset", { email });
  }

  public static registerUser(userData: any) {
    return new Promise((resolve, reject) => {
      if (userData && typeof userData === "object") {
        if (userData.email) {
          const re = new RegExp(
            [`^(([^<>()[\].,;:\s@"]+`,
             `(\.[^<>()[\].,;:\s@"]+)*)|(".+"))`,
             `@(([^<>()[\].,;:\s@"]+\.)+`,
             `[^<>()[\].,;:\s@"]{2,})$`].join(""),
            "i");
          if (re[Symbol.search](userData.email) !== 0) {
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

  public getIcon() {
    return RESTModel.findByIdBase(Upload, this.icon, true);
  }

  public getTwitterAccount() {
    return RESTModel.findByIdBase(TwitterAccount, this.twitter);
  }

  public getFacebookAccount() {
    return RESTModel.findByIdBase(FacebookAccount, this.facebook);
  }

  public validatePassword(maybePassword: string) {
    const password = maybePassword || "";
    const decimalTest = /\d/;
    const symbolTest = /\W/;
    const lowercasePassword = password.toLowerCase();
    const lowercaseFirstName = this.firstName.toLowerCase();
    const lowercaseLastName = this.lastName.toLowerCase();
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

  public isValid() {
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

  public valid() {
    super.valid();
    // Type checks
    if (typeof this.firstName !== "string") {
      throw new Error(`Invalid firstName: ${this.firstName}`);
    }
    if (typeof this.lastName !== "string") {
      throw new Error(`Invalid lastName: ${this.lastName}`);
    }
    // Value checks
    if (this.firstName === "") {
      throw new Error("Blank firstName");
    }
    if (this.lastName === "") {
      throw new Error("Blank lastName");
    }
    // TODO: More validation checks?
    return true;
  }

  public save() {
    return super.save(true);
  }

  public remove() {
    return super.remove(true);
  }
}
