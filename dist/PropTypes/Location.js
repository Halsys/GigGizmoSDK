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
	placeId: _propTypes2.default.string.isRequired,
	address: _propTypes2.default.string.isRequired,
	type: _propTypes2.default.string.isRequired,
	point: _propTypes2.default.any.isRequired,
	utcOffset: _propTypes2.default.number.isRequired
});