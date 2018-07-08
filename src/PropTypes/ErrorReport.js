import PropTypes from "prop-types";

module.exports =  PropTypes.shape({
	_id: PropTypes.string.isRequired,
	dateCreated: PropTypes.object.isRequired,
	dateModified: PropTypes.object.isRequired,
	userId: PropTypes.string.isRequired,
	version: PropTypes.string.isRequired,
	stack: PropTypes.string.isRequired,
	message: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	fileName: PropTypes.string,
	columnNumber: PropTypes.number,
	lineNumber: PropTypes.number
});
