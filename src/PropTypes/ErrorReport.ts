import * as PropTypes from "prop-types";

export default  PropTypes.shape({
	_id: PropTypes.string.isRequired,
	dateCreated: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.instanceOf(Date)
	]).isRequired,
	dateModified: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.instanceOf(Date)
	]).isRequired,
	userId: PropTypes.string.isRequired,
	version: PropTypes.string.isRequired,
	stack: PropTypes.string.isRequired,
	message: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	fileName: PropTypes.string,
	columnNumber: PropTypes.number,
	lineNumber: PropTypes.number
});
