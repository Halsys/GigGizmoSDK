/**
 * Created by corynull on 7/15/17.
 */

// Extras
import * as GigGizmoPropTypes from "./PropTypes";
import * as API from "./API";

// Models
import Band from "./Band";
import Conversation from "./Conversation";
import ErrorReport from "./ErrorReport";
import FacebookAccount from "./FacebookAccount";
import Gig from "./Gig";
import GooglePlace from "./GooglePlace";
import Location from "./Location";
import Notification from "./Notification";
import Page from "./Page";
import Post from "./Post";
import Request from "./Request";
import RESTModel from "./RESTModel";
import TwitterAccount from "./TwitterAccount";
import Upload from "./Upload";
import User from "./User";
import Venue from "./Venue";

export function ModelNameToModel(name: string) {
  switch (name) {
    case "Band":
      return Band;
    case "Conversation":
      return Conversation;
    case "ErrorReport":
      return ErrorReport;
    case "FacebookAccount":
      return FacebookAccount;
    case "Gig":
      return Gig;
    case "GooglePlace":
      return GooglePlace;
    case "Location":
      return Location;
    case "Notification":
      return Notification;
    case "Page":
      return Page;
    case "Post":
      return Post;
    case "Request":
      return Request;
    case "TwitterAccount":
      return TwitterAccount;
    case "Upload":
      return Upload;
    case "User":
      return User;
    case "Venue":
      return Venue;
    default:
      return null;
  }
}

const GigGizmoAPI = {
  ModelNameToModel,
  GigGizmoPropTypes,
  Band,
  Conversation,
  ErrorReport,
  FacebookAccount,
  Gig,
  GooglePlace,
  Location,
  Notification,
  Page,
  Post,
  Request,
  RESTModel,
  TwitterAccount,
  Upload,
  User,
  Venue,
  API
};

export default GigGizmoAPI;
