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
  name: _propTypes.default.string.isRequired,
  description: _propTypes.default.string.isRequired,
  website: _propTypes.default.string,
  phone: _propTypes.default.string,
  email: _propTypes.default.string,
  location: _propTypes.default.string.isRequired,
  openCloseTimes: _propTypes.default.arrayOf(_propTypes.default.shape({
    open: _propTypes.default.bool,
    openingTime: _propTypes.default.string,
    closingTime: _propTypes.default.string
  })),
  icon: _propTypes.default.string,
  photos: _propTypes.default.arrayOf(_propTypes.default.string),
  owners: _propTypes.default.arrayOf(_propTypes.default.string),
  facebook: _propTypes.default.string,
  twitter: _propTypes.default.string,
  google: _propTypes.default.string,
  metaData: _propTypes.default.string,
  facebookPageId: _propTypes.default.string,
  facebookPageName: _propTypes.default.string,
  facebookPageToken: _propTypes.default.string
});

exports.default = _default;