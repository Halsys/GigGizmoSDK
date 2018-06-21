"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

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

exports.default = _default;