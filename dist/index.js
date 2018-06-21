var _Object$getOwnPropertyDescriptor = require("@babel/runtime/core-js/object/get-own-property-descriptor");

var _Object$defineProperty = require("@babel/runtime/core-js/object/define-property");

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./PropTypes", "./API", "./Band", "./Conversation", "./ErrorReport", "./FacebookAccount", "./Gig", "./GooglePlace", "./Location", "./Notification", "./Page", "./Post", "./Request", "./RESTModel", "./TwitterAccount", "./Upload", "./User", "./Venue"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./PropTypes"), require("./API"), require("./Band"), require("./Conversation"), require("./ErrorReport"), require("./FacebookAccount"), require("./Gig"), require("./GooglePlace"), require("./Location"), require("./Notification"), require("./Page"), require("./Post"), require("./Request"), require("./RESTModel"), require("./TwitterAccount"), require("./Upload"), require("./User"), require("./Venue"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.PropTypes, global.API, global.Band, global.Conversation, global.ErrorReport, global.FacebookAccount, global.Gig, global.GooglePlace, global.Location, global.Notification, global.Page, global.Post, global.Request, global.RESTModel, global.TwitterAccount, global.Upload, global.User, global.Venue);
    global.index = mod.exports;
  }
})(this, function (_exports, _PropTypes, _API, _Band, _Conversation, _ErrorReport, _FacebookAccount, _Gig, _GooglePlace, _Location, _Notification, _Page, _Post, _Request, _RESTModel, _TwitterAccount, _Upload, _User, _Venue) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.ModelNameToModel = ModelNameToModel;
  Object.defineProperty(_exports, "GigGizmoPropTypes", {
    enumerable: true,
    get: function get() {
      return _PropTypes.default;
    }
  });
  Object.defineProperty(_exports, "API", {
    enumerable: true,
    get: function get() {
      return _API.default;
    }
  });
  Object.defineProperty(_exports, "version", {
    enumerable: true,
    get: function get() {
      return _API.version;
    }
  });
  Object.defineProperty(_exports, "Band", {
    enumerable: true,
    get: function get() {
      return _Band.default;
    }
  });
  Object.defineProperty(_exports, "Conversation", {
    enumerable: true,
    get: function get() {
      return _Conversation.default;
    }
  });
  Object.defineProperty(_exports, "ErrorReport", {
    enumerable: true,
    get: function get() {
      return _ErrorReport.default;
    }
  });
  Object.defineProperty(_exports, "FacebookAccount", {
    enumerable: true,
    get: function get() {
      return _FacebookAccount.default;
    }
  });
  Object.defineProperty(_exports, "Gig", {
    enumerable: true,
    get: function get() {
      return _Gig.default;
    }
  });
  Object.defineProperty(_exports, "GooglePlace", {
    enumerable: true,
    get: function get() {
      return _GooglePlace.default;
    }
  });
  Object.defineProperty(_exports, "Location", {
    enumerable: true,
    get: function get() {
      return _Location.default;
    }
  });
  Object.defineProperty(_exports, "Notification", {
    enumerable: true,
    get: function get() {
      return _Notification.default;
    }
  });
  Object.defineProperty(_exports, "Page", {
    enumerable: true,
    get: function get() {
      return _Page.default;
    }
  });
  Object.defineProperty(_exports, "Post", {
    enumerable: true,
    get: function get() {
      return _Post.default;
    }
  });
  Object.defineProperty(_exports, "Request", {
    enumerable: true,
    get: function get() {
      return _Request.default;
    }
  });
  Object.defineProperty(_exports, "RESTModel", {
    enumerable: true,
    get: function get() {
      return _RESTModel.default;
    }
  });
  Object.defineProperty(_exports, "TwitterAccount", {
    enumerable: true,
    get: function get() {
      return _TwitterAccount.default;
    }
  });
  Object.defineProperty(_exports, "Upload", {
    enumerable: true,
    get: function get() {
      return _Upload.default;
    }
  });
  Object.defineProperty(_exports, "User", {
    enumerable: true,
    get: function get() {
      return _User.default;
    }
  });
  Object.defineProperty(_exports, "Venue", {
    enumerable: true,
    get: function get() {
      return _Venue.default;
    }
  });
  _PropTypes = _interopRequireDefault(_PropTypes);
  _API = _interopRequireWildcard(_API);
  _Band = _interopRequireDefault(_Band);
  _Conversation = _interopRequireDefault(_Conversation);
  _ErrorReport = _interopRequireDefault(_ErrorReport);
  _FacebookAccount = _interopRequireDefault(_FacebookAccount);
  _Gig = _interopRequireDefault(_Gig);
  _GooglePlace = _interopRequireDefault(_GooglePlace);
  _Location = _interopRequireDefault(_Location);
  _Notification = _interopRequireDefault(_Notification);
  _Page = _interopRequireDefault(_Page);
  _Post = _interopRequireDefault(_Post);
  _Request = _interopRequireDefault(_Request);
  _RESTModel = _interopRequireDefault(_RESTModel);
  _TwitterAccount = _interopRequireDefault(_TwitterAccount);
  _Upload = _interopRequireDefault(_Upload);
  _User = _interopRequireDefault(_User);
  _Venue = _interopRequireDefault(_Venue);

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
});