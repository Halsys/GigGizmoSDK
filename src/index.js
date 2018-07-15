/**
 * Created by corynull on 7/15/17.
 */

// Extras
const GigGizmoPropTypes = require("./PropTypes");
const API = require("./API");

// Models
const Band = require("./Band");
const Conversation = require("./Conversation");
const ErrorReport = require("./ErrorReport");
const FacebookAccount = require("./FacebookAccount");
const Gig = require("./Gig");
const GooglePlace = require("./GooglePlace");
const Location = require("./Location");
const Notification = require("./Notification");
const Page = require("./Page");
const Post = require("./Post");
const Request = require("./Request");
const RESTModel = require("./RESTModel");
const TwitterAccount = require("./TwitterAccount");
const Upload = require("./Upload");
const User = require("./User");
const Venue = require("./Venue");

function ModelNameToModel(name) {
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

module.exports = GigGizmoAPI;

if (typeof window !== "undefined") window.GigGizmoAPI = GigGizmoAPI;
if (typeof process !== "undefined") process.GigGizmoAPI = GigGizmoAPI;
