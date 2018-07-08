(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "prop-types"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("prop-types"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.propTypes);
    global.User = mod.exports;
  }
})(this, function (_exports, _propTypes) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _propTypes = _interopRequireDefault(_propTypes);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var _default = _propTypes.default.shape({
    _id: _propTypes.default.string.isRequired,
    dateCreated: _propTypes.default.object.isRequired,
    dateModified: _propTypes.default.object.isRequired,
    icon: _propTypes.default.string,
    email: _propTypes.default.string,
    firstName: _propTypes.default.string.isRequired,
    middleName: _propTypes.default.string,
    lastName: _propTypes.default.string.isRequired,
    birthday: _propTypes.default.object.isRequired,
    country: _propTypes.default.string.isRequired,
    bandManager: _propTypes.default.bool,
    venueManager: _propTypes.default.bool,
    betaFeatureUser: _propTypes.default.bool,
    sendAnonymousReports: _propTypes.default.bool,
    sendErrorReports: _propTypes.default.bool,
    sendEmails: _propTypes.default.bool,
    sendPromotions: _propTypes.default.bool,
    useCookies: _propTypes.default.bool,
    description: _propTypes.default.string,
    active: _propTypes.default.bool,
    paypal: _propTypes.default.string,
    facebook: _propTypes.default.string,
    twitter: _propTypes.default.string,
    emailVerified: _propTypes.default.bool,
    payment: _propTypes.default.string,
    admin: _propTypes.default.bool,
    attempts: _propTypes.default.number,
    lastLoginDate: _propTypes.default.object,
    lastLoginIP: _propTypes.default.string
  });

  _exports.default = _default;
});