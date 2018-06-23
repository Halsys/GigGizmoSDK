"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModelNameToModel = ModelNameToModel;
Object.defineProperty(exports, "GigGizmoPropTypes", {
  enumerable: true,
  get: function get() {
    return _PropTypes.default;
  }
});
Object.defineProperty(exports, "API", {
  enumerable: true,
  get: function get() {
    return _API.default;
  }
});
Object.defineProperty(exports, "version", {
  enumerable: true,
  get: function get() {
    return _API.version;
  }
});
Object.defineProperty(exports, "Band", {
  enumerable: true,
  get: function get() {
    return _Band.default;
  }
});
Object.defineProperty(exports, "Conversation", {
  enumerable: true,
  get: function get() {
    return _Conversation.default;
  }
});
Object.defineProperty(exports, "ErrorReport", {
  enumerable: true,
  get: function get() {
    return _ErrorReport.default;
  }
});
Object.defineProperty(exports, "FacebookAccount", {
  enumerable: true,
  get: function get() {
    return _FacebookAccount.default;
  }
});
Object.defineProperty(exports, "Gig", {
  enumerable: true,
  get: function get() {
    return _Gig.default;
  }
});
Object.defineProperty(exports, "GooglePlace", {
  enumerable: true,
  get: function get() {
    return _GooglePlace.default;
  }
});
Object.defineProperty(exports, "Location", {
  enumerable: true,
  get: function get() {
    return _Location.default;
  }
});
Object.defineProperty(exports, "Notification", {
  enumerable: true,
  get: function get() {
    return _Notification.default;
  }
});
Object.defineProperty(exports, "Page", {
  enumerable: true,
  get: function get() {
    return _Page.default;
  }
});
Object.defineProperty(exports, "Post", {
  enumerable: true,
  get: function get() {
    return _Post.default;
  }
});
Object.defineProperty(exports, "Request", {
  enumerable: true,
  get: function get() {
    return _Request.default;
  }
});
Object.defineProperty(exports, "RESTModel", {
  enumerable: true,
  get: function get() {
    return _RESTModel.default;
  }
});
Object.defineProperty(exports, "TwitterAccount", {
  enumerable: true,
  get: function get() {
    return _TwitterAccount.default;
  }
});
Object.defineProperty(exports, "Upload", {
  enumerable: true,
  get: function get() {
    return _Upload.default;
  }
});
Object.defineProperty(exports, "User", {
  enumerable: true,
  get: function get() {
    return _User.default;
  }
});
Object.defineProperty(exports, "Venue", {
  enumerable: true,
  get: function get() {
    return _Venue.default;
  }
});

var _PropTypes = _interopRequireDefault(require("./PropTypes"));

var _API = _interopRequireWildcard(require("./API"));

var _Band = _interopRequireDefault(require("./Band"));

var _Conversation = _interopRequireDefault(require("./Conversation"));

var _ErrorReport = _interopRequireDefault(require("./ErrorReport"));

var _FacebookAccount = _interopRequireDefault(require("./FacebookAccount"));

var _Gig = _interopRequireDefault(require("./Gig"));

var _GooglePlace = _interopRequireDefault(require("./GooglePlace"));

var _Location = _interopRequireDefault(require("./Location"));

var _Notification = _interopRequireDefault(require("./Notification"));

var _Page = _interopRequireDefault(require("./Page"));

var _Post = _interopRequireDefault(require("./Post"));

var _Request = _interopRequireDefault(require("./Request"));

var _RESTModel = _interopRequireDefault(require("./RESTModel"));

var _TwitterAccount = _interopRequireDefault(require("./TwitterAccount"));

var _Upload = _interopRequireDefault(require("./Upload"));

var _User = _interopRequireDefault(require("./User"));

var _Venue = _interopRequireDefault(require("./Venue"));

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