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
	title: PropTypes.string.isRequired,
	description: PropTypes.string,
	fileName: PropTypes.string.isRequired,
	fileData: PropTypes.string.isRequired,
	owners: PropTypes.arrayOf(PropTypes.string).isRequired
});
