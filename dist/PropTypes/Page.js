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
	data: _propTypes2.default.string,
	metadata: _propTypes2.default.string,
	title: _propTypes2.default.string,
	link: _propTypes2.default.string,
	visits: _propTypes2.default.number,
	revisions: _propTypes2.default.number,
	hide: _propTypes2.default.bool,
	blog: _propTypes2.default.bool,
	doc: _propTypes2.default.bool
});