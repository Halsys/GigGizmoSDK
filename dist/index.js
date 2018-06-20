"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.version = exports.API = exports.Venue = exports.User = exports.Upload = exports.TwitterAccount = exports.RESTModel = exports.Request = exports.Post = exports.Page = exports.Notification = exports.Location = exports.GooglePlace = exports.Gig = exports.FacebookAccount = exports.ErrorReport = exports.Conversation = exports.Band = exports.GigGizmoPropTypes = undefined;
exports.ModelNameToModel = ModelNameToModel;

var _PropTypes = require("./PropTypes");

var _PropTypes2 = _interopRequireDefault(_PropTypes);

var _API = require("./API");

var _API2 = _interopRequireDefault(_API);

var _Band = require("./Band");

var _Band2 = _interopRequireDefault(_Band);

var _Conversation = require("./Conversation");

var _Conversation2 = _interopRequireDefault(_Conversation);

var _ErrorReport = require("./ErrorReport");

var _ErrorReport2 = _interopRequireDefault(_ErrorReport);

var _FacebookAccount = require("./FacebookAccount");

var _FacebookAccount2 = _interopRequireDefault(_FacebookAccount);

var _Gig = require("./Gig");

var _Gig2 = _interopRequireDefault(_Gig);

var _GooglePlace = require("./GooglePlace");

var _GooglePlace2 = _interopRequireDefault(_GooglePlace);

var _Location = require("./Location");

var _Location2 = _interopRequireDefault(_Location);

var _Notification = require("./Notification");

var _Notification2 = _interopRequireDefault(_Notification);

var _Page = require("./Page");

var _Page2 = _interopRequireDefault(_Page);

var _Post = require("./Post");

var _Post2 = _interopRequireDefault(_Post);

var _Request = require("./Request");

var _Request2 = _interopRequireDefault(_Request);

var _RESTModel = require("./RESTModel");

var _RESTModel2 = _interopRequireDefault(_RESTModel);

var _TwitterAccount = require("./TwitterAccount");

var _TwitterAccount2 = _interopRequireDefault(_TwitterAccount);

var _Upload = require("./Upload");

var _Upload2 = _interopRequireDefault(_Upload);

var _User = require("./User");

var _User2 = _interopRequireDefault(_User);

var _Venue = require("./Venue");

var _Venue2 = _interopRequireDefault(_Venue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Models
/**
 * Created by corynull on 7/15/17.
 */

// Extras
function ModelNameToModel(name) {
  switch (name) {
    case "Band":
      return _Band2.default;
    case "Conversation":
      return _Conversation2.default;
    case "ErrorReport":
      return _ErrorReport2.default;
    case "FacebookAccount":
      return _FacebookAccount2.default;
    case "Gig":
      return _Gig2.default;
    case "GooglePlace":
      return _GooglePlace2.default;
    case "Location":
      return _Location2.default;
    case "Notification":
      return _Notification2.default;
    case "Page":
      return _Page2.default;
    case "Post":
      return _Post2.default;
    case "Request":
      return _Request2.default;
    case "TwitterAccount":
      return _TwitterAccount2.default;
    case "Upload":
      return _Upload2.default;
    case "User":
      return _User2.default;
    case "Venue":
      return _Venue2.default;
    default:
      return null;
  }
}

exports.GigGizmoPropTypes = _PropTypes2.default;
exports.Band = _Band2.default;
exports.Conversation = _Conversation2.default;
exports.ErrorReport = _ErrorReport2.default;
exports.FacebookAccount = _FacebookAccount2.default;
exports.Gig = _Gig2.default;
exports.GooglePlace = _GooglePlace2.default;
exports.Location = _Location2.default;
exports.Notification = _Notification2.default;
exports.Page = _Page2.default;
exports.Post = _Post2.default;
exports.Request = _Request2.default;
exports.RESTModel = _RESTModel2.default;
exports.TwitterAccount = _TwitterAccount2.default;
exports.Upload = _Upload2.default;
exports.User = _User2.default;
exports.Venue = _Venue2.default;
exports.API = _API2.default;
exports.version = _API.version;


if (typeof window !== "undefined") window.GigGizmoAPI = exports;
if (typeof process !== "undefined") process.GigGizmoAPI = exports;