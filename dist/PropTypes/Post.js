"use strict";

exports.__esModule = true;
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _propTypes.default.shape({
  _id: _propTypes.default.string.isRequired,
  dateCreated: _propTypes.default.object.isRequired,
  dateModified: _propTypes.default.object.isRequired,
  userId: _propTypes.default.string.isRequired,
  network: _propTypes.default.string.isRequired,
  accountId: _propTypes.default.string.isRequired,
  pageId: _propTypes.default.string.isRequired,
  postText: _propTypes.default.string.isRequired,
  postDate: _propTypes.default.object.isRequired,
  coordinates: _propTypes.default.arrayOf(_propTypes.default.number),
  // coord = [longitude, latitude]
  error: _propTypes.default.any,
  done: _propTypes.default.bool.isRequired
});

exports.default = _default;