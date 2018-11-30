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
	accountId: PropTypes.string.isRequired,
	accessToken: PropTypes.string,
	tokenSecret: PropTypes.string,
	profile: PropTypes.any
});
