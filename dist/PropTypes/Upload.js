"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _default = _propTypes.default.shape({
  _id: _propTypes.default.string.isRequired,
  dateCreated: _propTypes.default.object.isRequired,
  dateModified: _propTypes.default.object.isRequired,
  title: _propTypes.default.string.isRequired,
  description: _propTypes.default.string,
  fileName: _propTypes.default.string.isRequired,
  fileData: _propTypes.default.string.isRequired,
  owners: _propTypes.default.arrayOf(_propTypes.default.string).isRequired
});

exports.default = _default;