"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _propTypes2.default.shape({
	_id: _propTypes2.default.string.isRequired,
	dateCreated: _propTypes2.default.object.isRequired,
	dateModified: _propTypes2.default.object.isRequired,
	startTime: _propTypes2.default.object.isRequired, // Date,
	stopTime: _propTypes2.default.object.isRequired, // Date,
	location: _propTypes2.default.string.isRequired,
	venue: _propTypes2.default.string.isRequired,
	band: _propTypes2.default.string,
	toBeAnnounced: _propTypes2.default.bool,
	bandOwnerAccepted: _propTypes2.default.string,
	venueOwnerAccepted: _propTypes2.default.string,
	owners: _propTypes2.default.arrayOf(_propTypes2.default.string)
});