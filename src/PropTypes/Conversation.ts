import * as PropTypes from "prop-types";

export const Conversation = PropTypes.shape({
	_id: PropTypes.string.isRequired,
	dateCreated: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.instanceOf(Date)
	]).isRequired,
	dateModified: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.instanceOf(Date)
	]).isRequired,
	events: PropTypes.arrayOf(
		PropTypes.shape({
			dateTimePosted: PropTypes.string.isRequired,
			message: PropTypes.string.isRequired,
			user: PropTypes.string.isRequired
		})
	),
	users: PropTypes.arrayOf(PropTypes.string.isRequired)
});
