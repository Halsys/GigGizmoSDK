"use strict";

var _Object$getOwnPropertyDescriptor = require("@babel/runtime/core-js/object/get-own-property-descriptor");

var _Object$defineProperty = require("@babel/runtime/core-js/object/define-property");

exports.__esModule = true;
exports.ModelNameToModel = ModelNameToModel;

var _PropTypes = _interopRequireDefault(require("./PropTypes"));

exports.GigGizmoPropTypes = _PropTypes.default;

var _API = _interopRequireWildcard(require("./API"));

exports.API = _API.default;
exports.version = _API.version;

var _Band = _interopRequireDefault(require("./Band"));

exports.Band = _Band.default;

var _Conversation = _interopRequireDefault(require("./Conversation"));

exports.Conversation = _Conversation.default;

var _ErrorReport = _interopRequireDefault(require("./ErrorReport"));

exports.ErrorReport = _ErrorReport.default;

var _FacebookAccount = _interopRequireDefault(require("./FacebookAccount"));

exports.FacebookAccount = _FacebookAccount.default;

var _Gig = _interopRequireDefault(require("./Gig"));

exports.Gig = _Gig.default;

var _GooglePlace = _interopRequireDefault(require("./GooglePlace"));

exports.GooglePlace = _GooglePlace.default;

var _Location = _interopRequireDefault(require("./Location"));

exports.Location = _Location.default;

var _Notification = _interopRequireDefault(require("./Notification"));

exports.Notification = _Notification.default;

var _Page = _interopRequireDefault(require("./Page"));

exports.Page = _Page.default;

var _Post = _interopRequireDefault(require("./Post"));

exports.Post = _Post.default;

var _Request = _interopRequireDefault(require("./Request"));

exports.Request = _Request.default;

var _RESTModel = _interopRequireDefault(require("./RESTModel"));

exports.RESTModel = _RESTModel.default;

var _TwitterAccount = _interopRequireDefault(require("./TwitterAccount"));

exports.TwitterAccount = _TwitterAccount.default;

var _Upload = _interopRequireDefault(require("./Upload"));

exports.Upload = _Upload.default;

var _User = _interopRequireDefault(require("./User"));

exports.User = _User.default;

var _Venue = _interopRequireDefault(require("./Venue"));

exports.Venue = _Venue.default;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { _Object$defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by corynull on 7/15/17.
 */
// Extras
// Models
function ModelNameToModel(name) {
  switch (name) {
    case "Band":
      return _Band.default;

    case "Conversation":
      return _Conversation.default;

    case "ErrorReport":
      return _ErrorReport.default;

    case "FacebookAccount":
      return _FacebookAccount.default;

    case "Gig":
      return _Gig.default;

    case "GooglePlace":
      return _GooglePlace.default;

    case "Location":
      return _Location.default;

    case "Notification":
      return _Notification.default;

    case "Page":
      return _Page.default;

    case "Post":
      return _Post.default;

    case "Request":
      return _Request.default;

    case "TwitterAccount":
      return _TwitterAccount.default;

    case "Upload":
      return _Upload.default;

    case "User":
      return _User.default;

    case "Venue":
      return _Venue.default;

    default:
      return null;
  }
}

if (typeof window !== "undefined") window.GigGizmoAPI = exports;
if (typeof process !== "undefined") process.GigGizmoAPI = exports;