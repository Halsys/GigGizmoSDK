"use strict";

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = _propTypes.default.shape({
  _id: _propTypes.default.string.isRequired,
  dateCreated: _propTypes.default.object.isRequired,
  dateModified: _propTypes.default.object.isRequired,
  placeId: _propTypes.default.string.isRequired,
  address: _propTypes.default.string.isRequired,
  type: _propTypes.default.string.isRequired,
  point: _propTypes.default.any.isRequired,
  utcOffset: _propTypes.default.number.isRequired
});