"use strict";

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = _propTypes.default.shape({
  _id: _propTypes.default.string.isRequired,
  dateCreated: _propTypes.default.object.isRequired,
  dateModified: _propTypes.default.object.isRequired,
  data: _propTypes.default.string,
  metadata: _propTypes.default.string,
  title: _propTypes.default.string,
  link: _propTypes.default.string,
  visits: _propTypes.default.number,
  revisions: _propTypes.default.number,
  hide: _propTypes.default.bool,
  blog: _propTypes.default.bool,
  doc: _propTypes.default.bool
});