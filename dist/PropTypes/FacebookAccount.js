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
	userId: _propTypes2.default.string.isRequired,
	accountId: _propTypes2.default.string.isRequired,
	userAccessToken: _propTypes2.default.string,
	userRefreshToken: _propTypes2.default.string,
	profile: _propTypes2.default.any
});