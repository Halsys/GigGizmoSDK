(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./Band", "./Conversation", "./ErrorReport", "./FacebookAccount", "./Gig", "./Location", "./Notification", "./Page", "./Post", "./TwitterAccount", "./Upload", "./User", "./Venue"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./Band"), require("./Conversation"), require("./ErrorReport"), require("./FacebookAccount"), require("./Gig"), require("./Location"), require("./Notification"), require("./Page"), require("./Post"), require("./TwitterAccount"), require("./Upload"), require("./User"), require("./Venue"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Band, global.Conversation, global.ErrorReport, global.FacebookAccount, global.Gig, global.Location, global.Notification, global.Page, global.Post, global.TwitterAccount, global.Upload, global.User, global.Venue);
    global.index = mod.exports;
  }
})(this, function (_exports, _Band, _Conversation, _ErrorReport, _FacebookAccount, _Gig, _Location, _Notification, _Page, _Post, _TwitterAccount, _Upload, _User, _Venue) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _Band = _interopRequireDefault(_Band);
  _Conversation = _interopRequireDefault(_Conversation);
  _ErrorReport = _interopRequireDefault(_ErrorReport);
  _FacebookAccount = _interopRequireDefault(_FacebookAccount);
  _Gig = _interopRequireDefault(_Gig);
  _Location = _interopRequireDefault(_Location);
  _Notification = _interopRequireDefault(_Notification);
  _Page = _interopRequireDefault(_Page);
  _Post = _interopRequireDefault(_Post);
  _TwitterAccount = _interopRequireDefault(_TwitterAccount);
  _Upload = _interopRequireDefault(_Upload);
  _User = _interopRequireDefault(_User);
  _Venue = _interopRequireDefault(_Venue);
  var _default = {
    Band: _Band.default,
    Conversation: _Conversation.default,
    ErrorReport: _ErrorReport.default,
    FacebookAccount: _FacebookAccount.default,
    Gig: _Gig.default,
    Location: _Location.default,
    Notification: _Notification.default,
    Page: _Page.default,
    Post: _Post.default,
    TwitterAccount: _TwitterAccount.default,
    Upload: _Upload.default,
    User: _User.default,
    Venue: _Venue.default
  };
  _exports.default = _default;
});