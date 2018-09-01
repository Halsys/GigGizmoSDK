import * as PropTypes from "prop-types";

export default  PropTypes.shape({
	_id: PropTypes.string.isRequired,
	dateCreated: PropTypes.object.isRequired,
	dateModified: PropTypes.object.isRequired,
	title: PropTypes.string.isRequired,
	description: PropTypes.string,
	fileName: PropTypes.string.isRequired,
	fileData: PropTypes.string.isRequired,
	owners: PropTypes.arrayOf(PropTypes.string).isRequired
});
