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
	title: _propTypes2.default.string.isRequired,
	description: _propTypes2.default.string,
	fileName: _propTypes2.default.string.isRequired,
	fileData: _propTypes2.default.string.isRequired,
	owners: _propTypes2.default.arrayOf(_propTypes2.default.string).isRequired
});