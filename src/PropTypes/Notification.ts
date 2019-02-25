import * as PropTypes from "prop-types";

export const Notification = PropTypes.shape({
	_id: PropTypes.string.isRequired,
	actions: PropTypes.arrayOf(
		PropTypes.shape({
			label: PropTypes.string.isRequired,
			link: PropTypes.string,
			request: PropTypes.string
		})
	),
	dateCreated: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.instanceOf(Date)
	]).isRequired,
	dateModified: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.instanceOf(Date)
	]).isRequired,
	label: PropTypes.string.isRequired,
	message: PropTypes.string.isRequired,
	seenByUser: PropTypes.bool,
	userId: PropTypes.string.isRequired
});
