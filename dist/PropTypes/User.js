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
	icon: _propTypes2.default.string,
	email: _propTypes2.default.string,
	firstName: _propTypes2.default.string.isRequired,
	middleName: _propTypes2.default.string,
	lastName: _propTypes2.default.string.isRequired,
	birthday: _propTypes2.default.object.isRequired,
	country: _propTypes2.default.string.isRequired,
	bandManager: _propTypes2.default.bool,
	venueManager: _propTypes2.default.bool,
	betaFeatureUser: _propTypes2.default.bool,
	sendAnonymousReports: _propTypes2.default.bool,
	sendErrorReports: _propTypes2.default.bool,
	sendEmails: _propTypes2.default.bool,
	sendPromotions: _propTypes2.default.bool,
	useCookies: _propTypes2.default.bool,
	description: _propTypes2.default.string,
	active: _propTypes2.default.bool,
	paypal: _propTypes2.default.string,
	facebook: _propTypes2.default.string,
	twitter: _propTypes2.default.string,
	emailVerified: _propTypes2.default.bool,
	payment: _propTypes2.default.string,
	admin: _propTypes2.default.bool,
	attempts: _propTypes2.default.number,
	lastLoginDate: _propTypes2.default.object,
	lastLoginIP: _propTypes2.default.string
});