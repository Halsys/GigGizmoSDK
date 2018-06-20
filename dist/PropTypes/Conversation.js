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
	users: _propTypes2.default.arrayOf(_propTypes2.default.string.isRequired),
	events: _propTypes2.default.arrayOf(_propTypes2.default.shape({
		user: _propTypes2.default.string.isRequired,
		message: _propTypes2.default.string.isRequired,
		dateTimePosted: _propTypes2.default.string.isRequired
	}))
});