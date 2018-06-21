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
    global.Gig = mod.exports;
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

  _exports.default = _default;
});