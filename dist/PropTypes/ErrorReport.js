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
	version: _propTypes2.default.string.isRequired,
	stack: _propTypes2.default.string.isRequired,
	message: _propTypes2.default.string.isRequired,
	name: _propTypes2.default.string.isRequired,
	fileName: _propTypes2.default.string,
	columnNumber: _propTypes2.default.number,
	lineNumber: _propTypes2.default.number
});