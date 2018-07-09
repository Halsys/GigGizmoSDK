"use strict";

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = _propTypes.default.shape({
  _id: _propTypes.default.string.isRequired,
  dateCreated: _propTypes.default.object.isRequired,
  dateModified: _propTypes.default.object.isRequired,
  userId: _propTypes.default.string.isRequired,
  label: _propTypes.default.string.isRequired,
  message: _propTypes.default.string.isRequired,
  actions: _propTypes.default.arrayOf(_propTypes.default.shape({
    request: _propTypes.default.string,
    link: _propTypes.default.string,
    label: _propTypes.default.string.isRequired
  })),
  seenByUser: _propTypes.default.bool
});