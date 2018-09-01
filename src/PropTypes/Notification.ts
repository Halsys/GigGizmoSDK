import * as PropTypes from "prop-types";

export default  PropTypes.shape({
	_id: PropTypes.string.isRequired,
	dateCreated: PropTypes.object.isRequired,
	dateModified: PropTypes.object.isRequired,
	userId: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	message: PropTypes.string.isRequired,
	actions: PropTypes.arrayOf(
		PropTypes.shape({
			request: PropTypes.string,
			link: PropTypes.string,
			label: PropTypes.string.isRequired
		})
	),
	seenByUser: PropTypes.bool
});
