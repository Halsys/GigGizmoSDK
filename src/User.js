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
    const birthday = this.getField("birthday");
    return birthday ? moment(birthday) : null;
  }

  set birthday(value) {
    this.setField("birthday", moment(value).toISOString());
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

  get lastLoginDate() {
    return moment(this.getField("lastLoginDate"));
  }

  set lastLoginDate(value) {
    this.setField("lastLoginDate", moment(value).toISOString());
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

  save(token) {
    return RESTModel.prototype.save.call(this, token, true);
  }

  remove(token) {
    return RESTModel.prototype.remove.call(this, token, true);
  }

  static verifyEmail(id, secret) {
    return API.Call("GET", "/API/User/Verify", {
      token: null,
      id,
      secret
    });
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
    limit = Number.POSITIVE_INFINITY,
    token = API.findToken()
  ) {
    return new Promise((resolve, reject) => {
      if (q === "") {
        resolve();
      } else {
        const data = { q };
        if (modelName != null) data.model = modelName;

        if (skip !== 0) data.skip = skip;

        if (Number.isFinite(limit)) data.limit = limit;
        const Return = results => {
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
        };
        if (API.UseSocketIO && API.ShouldUseSocketIO) {
          API.GetSocket(token).then(socket => {
            socket.emit("/API/TextSearch", data, Return);
          }, reject);
        } else {
          API.Call("GET", "/API/TextSearch", { ...data, token }).then(
            Return,
            reject
          );
        }
      }
    });
  }

  static findMany(criteria, token) {
    return RESTModel.findMany(User, criteria, token, true);
  }

  static findOne(criteria, token) {
    return RESTModel.findOne(User, criteria, token, true);
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
          if (API.SessionStorageSupported) sessionStorage.removeItem("user");
          if (API.LocalStorageSupported) localStorage.removeItem("token");
          if (typeof document !== "undefined") document.cookie = "";
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
    let data = null;
    if (!force && User.Current)
      /* If we already have the current user cached, return it... */
      return User.Current;
    else if (API.SessionStorageSupported) {
      /* If the user is stored in session storage. */
      data = JSON.parse(sessionStorage.getItem("user"));
      if (data) return User.setUser(data);
    }
    if (API.UseSocketIO && API.ShouldUseSocketIO) {
      data = await new Promise((resolve, reject) => {
        if (token)
          API.GetSocket(token).then(socket => {
            socket.emit("/API/User/Retreive", null, resolve);
          }, reject);
        else resolve(null);
      });
    } else data = await API.Call("GET", "/API/User", { token });
    if (data) return User.setUser(data);
    return User.setUser(null);
  }

  static findById(id, token) {
    return RESTModel.findById(User, id, token, true);
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
            if (API.LocalStorageSupported) {
              localStorage.setItem("token", response.token);
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

      if (API.UseSocketIO && API.ShouldUseSocketIO) {
        return new Promise((resolve, reject) => {
          if (token)
            API.GetSocket().then(socket => {
              socket.emit("/API/User/Create", userData, resolve);
            }, reject);
          else resolve(null);
        });
      }
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
