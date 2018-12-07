/**
 * Created by corynull on 4/1/17.
 */

import API from "./API";
import Band from "./Band";
import Venue from "./Venue";
import Page from "./Page";
import Upload from "./Upload";
import Location from "./Location";
import Gig from "./Gig";
import FacebookAccount from "./FacebookAccount";
import TwitterAccount from "./TwitterAccount";
import Conversation from "./Conversation";
import Post from "./Post";
import RESTModel from "./RESTModel";

export default class User extends RESTModel {
  static ModelName: string = "User";
  static Current: any = null;
  static Callbacks = new Map();
  static agreement: any = null;

  get password() {
    return this.getField("password");
  }

  set password(value) {
    this.setField("password", value);
  }

  get confirmPassword() {
    return this.getField("confirmPassword");
  }

  set confirmPassword(value) {
    this.setField("confirmPassword", value);
  }

  get icon() {
    return this.getField("icon");
  }

  set icon(value) {
    this.setField("icon", value);
  }

  set active(value) {
    this.setField("active", value);
  }

  get active() {
    return this.getField("active");
  }

  set admin(value) {
    this.setField("admin", value);
  }

  get admin() {
    return this.getField("admin") === true;
  }

  get firstName() {
    return this.getField("firstName");
  }

  set firstName(value) {
    this.setField("firstName", value);
  }

  get middleName() {
    return this.getField("middleName");
  }

  set middleName(value) {
    this.setField("middleName", value);
  }

  get lastName() {
    return this.getField("lastName");
  }

  set lastName(value) {
    this.setField("lastName", value);
  }

  get birthday() {
    const birthday = this.getField("birthday") || null;
    return birthday ? new Date(birthday) : birthday;
  }

  set birthday(value) {
    this.setField("birthday", new Date(value || undefined).toJSON());
  }

  get country() {
    return this.getField("country");
  }

  set country(value) {
    this.setField("country", value);
  }

  get bandManager() {
    return this.getField("bandManager") === true;
  }

  set bandManager(value) {
    this.setField("bandManager", value);
  }

  get venueManager() {
    return this.getField("venueManager") === true;
  }

  set venueManager(value) {
    this.setField("venueManager", value);
  }

  get betaFeatureUser() {
    return this.getField("betaFeatureUser") === true;
  }

  set betaFeatureUser(value) {
    this.setField("betaFeatureUser", value);
  }

  get sendAnonymousReports() {
    return this.getField("sendAnonymousReports") === true;
  }

  set sendAnonymousReports(value) {
    this.setField("sendAnonymousReports", value);
  }

  get sendErrorReports() {
    return this.getField("sendErrorReports") === true;
  }

  set sendErrorReports(value) {
    this.setField("sendErrorReports", value);
  }

  get sendEmails() {
    return this.getField("sendEmails") === true;
  }

  set sendEmails(value) {
    this.setField("sendEmails", value);
  }

  get sendPromotions() {
    return this.getField("sendPromotions") === true;
  }

  set sendPromotions(value) {
    this.setField("sendPromotions", value);
  }

  get useCookies() {
    return this.getField("useCookies") === true;
  }

  set useCookies(value) {
    this.setField("useCookies", value);
  }

  get fullName() {
    return `${this.firstName || ""} ${this.middleName || ""} ${this.lastName ||
      ""}`;
  }

  get email() {
    return this.getField("email");
  }

  set email(value) {
    this.setField("email", value);
  }

  get salt() {
    return this.getField("salt");
  }

  get hash() {
    return this.getField("hash");
  }

  get facebook() {
    return this.getField("facebook");
  }

  set facebook(value) {
    this.setField("facebook", value);
  }

  get twitter() {
    return this.getField("twitter");
  }

  set twitter(value) {
    this.setField("twitter", value);
  }

  get description() {
    return this.getField("description");
  }

  set description(value) {
    this.setField("description", value);
  }

  get emailVerified() {
    return this.getField("emailVerified");
  }

  set emailVerified(value) {
    this.setField("emailVerified", value);
  }

  get attempts() {
    return this.getField("attempts");
  }

  get lastLoginIP() {
    return this.getField("lastLoginIP");
  }

  set lastLoginIP(value) {
    this.setField("lastLoginIP", value);
  }

  get lastLogin() {
    const lastLogin = this.getField("lastLogin") || null;
    return lastLogin ? new Date(lastLogin) : lastLogin;
  }

  set lastLogin(value) {
    this.setField("lastLogin", new Date(value).toJSON());
  }

  get canContact() {
    return this.getField("canContact") === true;
  }

  set canContact(value) {
    this.setField("canContact", value);
  }

  get canFind() {
    return this.getField("canFind") === true;
  }

  set canFind(value) {
    this.setField("canFind", value);
  }

  get options() {
    return this.getField("options");
  }

  set options(value) {
    this.setField("options", value);
  }

  getIcon() {
    return RESTModel.findByIdBase(Upload, this.icon, true);
  }

  getTwitterAccount() {
    return RESTModel.findByIdBase(TwitterAccount, this.twitter);
  }

  getFacebookAccount() {
    return RESTModel.findByIdBase(FacebookAccount, this.facebook);
  }

  validatePassword(maybePassword: string) {
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

  isValid() {
    if (!super.isValid()) return false;
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

  valid() {
    super.valid()
    // Type checks
    if (typeof this.firstName !== "string")
      throw new Error(`Invalid firstName: ${this.firstName}`);
    if (typeof this.lastName !== "string")
      throw new Error(`Invalid lastName: ${this.lastName}`);
    // Value checks
    if (this.firstName === "")
      throw new Error("Blank firstName");
    if (this.lastName === "")
      throw new Error("Blank lastName");
    // TODO: More validation checks?
    return true;
  }

  save() {
    return RESTModel.prototype.save.call(this, true);
  }

  remove() {
    return RESTModel.prototype.remove.call(this, true);
  }

  static verifyEmail(id: string, secret: string) {
    return API.call("GET", "/API/User/Verify", {
      id,
      secret
    });
  }

  static sendEmailVerification() {
    return API.call("POST", "/API/User/Verify", null);
  }

  static getAllConversations() {
    return RESTModel.findManyBase(Conversation, null, true);
  }

  static getAllNotifications() {
    return RESTModel.findManyBase(Notification, null, true);
  }

  static getAllPosts() {
    return RESTModel.findManyBase(Post, null, true);
  }

  static getAllBands() {
    return RESTModel.findManyBase(Band, null, true);
  }

  static getAllVenues() {
    return RESTModel.findManyBase(Venue, null, true);
  }

  static getAllGigs() {
    return RESTModel.findManyBase(Gig, null, true);
  }

  static getAllUploads() {
    return RESTModel.findManyBase(Upload, null, true);
  }

  static findFacebookPages(term: string) {
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

  static search(
    q: string,
    modelName: string = null,
    skip: number = 0,
    limit: number = Number.POSITIVE_INFINITY
  ) {
    return new Promise((resolve, reject) => {
      if (q === "" || q === undefined) {
        resolve();
      } else {
        let data: {
          model: string;
          q: string;
          skip: number;
          limit: number;
        } = {
          model: undefined,
          q: undefined,
          skip: undefined,
          limit: undefined
        };
        data.q = q;
        if (modelName !== null && modelName !== "Any")
          data.model = modelName;

        if (Number.isFinite(Number(skip)))
          data.skip = Number(skip);

        if (Number.isFinite(Number(limit)))
          data.limit = Number(limit);

        const Return = (results: any) => {
          let query = results.query;
          let totalFound = results.totalFound;

          if (!query) reject(query);
          const bands: Band[] = [];
          const venues: Venue[] = [];
          const users: User[] = [];
          const pages: Page[] = [];
          const locations: Location[] = [];
          const uploads: Upload[] = [];
          query.forEach(async (item: any) => {
            if (item && item.ModelName) {
              const mName = item.ModelName;
              if (mName === "Band") bands.push(new Band(item));
              else if (mName === "Venue") venues.push(new Venue(item));
              else if (mName === "User") users.push(new User(item));
              else if (mName === "Page") pages.push(new Page(item));
              else if (mName === "Location") locations.push(new Location(item));
              else if (mName === "Upload") uploads.push(new Upload(item));
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
        };
        if (API.useSocketIO && API.ShouldUseSocketIO) {
          API.getSocket().then((socket: SocketIOClient.Socket) => {
            if(socket) {
              socket.emit("/API/TextSearch", data, Return);
            }
          }, reject);
        } else {
          API.call("GET", "/API/TextSearch", data).then(Return, reject);
        }
      }
    });
  }

  static findMany(criteria: object | null) {
    return RESTModel.findManyBase(User, criteria, true);
  }

  static findOne(criteria: object | null) {
    return RESTModel.findOneBase(User, criteria, true);
  }

  static onChange(callback: any) {
    const id = Date.now();
    User.Callbacks.set(id, callback);
    return () => {
      User.Callbacks.delete(id);
    };
  }

  static async setUser(data: object | null) {
    try {
      if (typeof data === "object" && data) {
        User.Current = new User(data);
        if (API.SessionStorageSupported)
          sessionStorage.setItem("user", JSON.stringify(data));
        User.Callbacks.forEach((callback: any) => callback(User.Current));
      } else {
        User.Current = null;
        API.token = null;
        if (API.SessionStorageSupported) sessionStorage.removeItem("user");
        User.Callbacks.forEach((callback: any) => callback(null));
      }
    } catch (e) {
      console.error(e);
    }
    return User.Current;
  }

  static async getUser(force: boolean) {
    let data = null;
    const dateNow = new Date();
    if(!force && API.expires && dateNow < API.expires) {
      if (User.Current !== null)
        /* If we already have the current user cached, return it... */
        return User.Current;
      else if (API.SessionStorageSupported) {
        /* If the user is stored in session storage. */
        data = JSON.parse(sessionStorage.getItem("user"));
        if (data) return User.setUser(data);
      }
    }

    if (API.useSocketIO && API.ShouldUseSocketIO) {
      data = await new Promise((resolve, reject) => {
        API.getSocket().then((socket: SocketIOClient.Socket) => {
          if(socket) {
            socket.emit("/API/User/Retreive", resolve);
          }
        }, reject);
      });
    } else data = await API.call("GET", "/API/User", null);
    if (data) return User.setUser(data);
    return User.setUser(null);
  }

  static findById(id: string) {
    return RESTModel.findByIdBase(User, id, true);
  }

  static connectFacebook() {
    window.location.href = `${API.rootURL}/API/Auth/Facebook`;
  }

  static facebookLogIn() {
    window.location.href = `${API.rootURL}/API/Login/Facebook`;
  }

  static payPalLogIn() {
    window.location.href = `${API.rootURL}/API/Auth/PayPal`;
  }

  static async userLogIn(email: string, password: string) {
    if (!email) throw new Error("No email");
    else if (!password) throw new Error("No password");
    else {
      let response = null;
      if (API.useSocketIO && API.ShouldUseSocketIO) {
        response = await new Promise((resolve, reject) => {
          API.getSocket().then((socket: SocketIOClient.Socket) => {
            if(socket) {
              socket.emit("/API/User/SignIn", {
                email,
                password
              }, resolve);
            }
          }, reject);
        });
      } else response = await API.call("POST", "/API/User/SignIn", {
        email,
        password
      });
      //TODO: Create error for unauthorized access vs general error
      if (response && response.user && response.token) {
        API.expires = response.expires;
        API.token = response.token.toString();
        return User.setUser(response.user);
      } else throw new Error(`Unauthorized`);
    }
  }

  static async userLogOut() {
    let response = null;
    if (API.useSocketIO && API.ShouldUseSocketIO) {
      response = await new Promise((resolve, reject) => {
        API.getSocket().then((socket: SocketIOClient.Socket) => {
          if(socket) {
            socket.emit("/API/User/SignOut", null, resolve);
          }
        }, reject);
      });
    } else
      response = await API.call("POST", "/API/User/SignOut", null);
    let user = await User.setUser(null);
    if (user && user.valid())
      throw new Error(`${JSON.stringify(user)} returned, failed to log out?`)
    else user;
  }

  static sendPasswordResetEmail(email: string) {
    return API.call("POST", "/User/Reset", { email });
  }

  static registerUser(userData: any) {
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

      if (API.useSocketIO && API.ShouldUseSocketIO) {
        return new Promise((resolve, reject) => {
          API.getSocket().then((socket: SocketIOClient.Socket) => {
            if(socket) {
              socket.emit("/API/User/Create", userData, resolve);
            }
          }, reject);
        });
      }
      return API.call("POST", "/API/User", userData).then(data => {
        if (data)
          User.setUser(data).then((user: any) => {
            resolve(user);
          }, reject);
        else reject(new Error(`${JSON.stringify(data)} returned`));
      }, reject);
    });
  }

  static NotifyAdminsOfError() {
    console.error("Not implemented yet.");
  }
}
