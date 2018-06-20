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
	name: _propTypes2.default.string.isRequired,
	description: _propTypes2.default.string.isRequired,
	website: _propTypes2.default.string,
	phone: _propTypes2.default.string,
	email: _propTypes2.default.string,
	location: _propTypes2.default.string.isRequired,
	openCloseTimes: _propTypes2.default.arrayOf(_propTypes2.default.shape({
		open: _propTypes2.default.bool,
		openingTime: _propTypes2.default.string,
		closingTime: _propTypes2.default.string
	})),
	icon: _propTypes2.default.string,
	photos: _propTypes2.default.arrayOf(_propTypes2.default.string),
	owners: _propTypes2.default.arrayOf(_propTypes2.default.string),
	facebook: _propTypes2.default.string,
	twitter: _propTypes2.default.string,
	google: _propTypes2.default.string,
	metaData: _propTypes2.default.string,
	facebookPageId: _propTypes2.default.string,
	facebookPageName: _propTypes2.default.string,
	facebookPageToken: _propTypes2.default.string
});