/**
 * Created by corynull on 7/15/17.
 */

// Models
import RESTModel from "./RESTModel";
import Band from "./Band";
import Conversation from "./Conversation";
import Gig from "./Gig";
import Notification from "./Notification";
import Request from "./Request";
import Page from "./Page";
import Post from "./Post";
import Upload from "./Upload";
import User from "./User";
import Venue from "./Venue";
import Location from "./Location";
import ErrorReport from "./ErrorReport";
import FacebookAccount from "./FacebookAccount";
import TwitterAccount from "./TwitterAccount";

export function ModelNameToModel(name) {
  switch (name) {
    case "Band":
      return Band;
    case "Conversation":
      return Conversation;
    case "Gig":
      return Gig;
    case "Notification":
      return Notification;
    case "Request":
      return Request;
    case "Page":
      return Page;
    case "Post":
      return Post;
    case "Upload":
      return Upload;
    case "User":
      return User;
    case "Venue":
      return Venue;
    case "Location":
      return Location;
    case "ErrorReport":
      return ErrorReport;
    case "FacebookAccount":
      return FacebookAccount;
    case "TwitterAccount":
      return TwitterAccount;
    default:
      return null;
  }
}

export {
  RESTModel,
  Band,
  Conversation,
  Gig,
  Notification,
  Request,
  Page,
  Post,
  Upload,
  User,
  Venue,
  Location,
  ErrorReport,
  FacebookAccount,
  TwitterAccount
};

// Framework
export { default as API, version } from "./API";
export { default as GooglePlace } from "./GooglePlace";

if (typeof window !== "undefined") window.GigGizmoAPI = exports;
if (typeof process !== "undefined") process.GigGizmoAPI = exports;
