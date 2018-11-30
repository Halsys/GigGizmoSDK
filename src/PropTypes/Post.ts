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
	network: PropTypes.string.isRequired,
	accountId: PropTypes.string.isRequired,
	pageId: PropTypes.string.isRequired,
	postText: PropTypes.string.isRequired,
	postDate: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.instanceOf(Date)
	]).isRequired,
	coordinates: PropTypes.arrayOf(PropTypes.number), // coord = [longitude, latitude]
	error: PropTypes.any,
	done: PropTypes.bool.isRequired
});
