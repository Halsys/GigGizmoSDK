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
  userId: _propTypes.default.string.isRequired,
  version: _propTypes.default.string.isRequired,
  stack: _propTypes.default.string.isRequired,
  message: _propTypes.default.string.isRequired,
  name: _propTypes.default.string.isRequired,
  fileName: _propTypes.default.string,
  columnNumber: _propTypes.default.number,
  lineNumber: _propTypes.default.number
});

exports.default = _default;