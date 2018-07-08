(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["prop-types"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("prop-types"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.propTypes);
    global.Gig = mod.exports;
  }
})(this, function (_propTypes) {
  "use strict";

  _propTypes = _interopRequireDefault(_propTypes);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  module.exports = _propTypes.default.shape({
    _id: _propTypes.default.string.isRequired,
    dateCreated: _propTypes.default.object.isRequired,
    dateModified: _propTypes.default.object.isRequired,
    startTime: _propTypes.default.object.isRequired,
    // Date,
    stopTime: _propTypes.default.object.isRequired,
    // Date,
    location: _propTypes.default.string.isRequired,
    venue: _propTypes.default.string.isRequired,
    band: _propTypes.default.string,
    toBeAnnounced: _propTypes.default.bool,
    bandOwnerAccepted: _propTypes.default.string,
    venueOwnerAccepted: _propTypes.default.string,
    owners: _propTypes.default.arrayOf(_propTypes.default.string)
  });
});