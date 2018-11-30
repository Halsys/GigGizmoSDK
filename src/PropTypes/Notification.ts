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
