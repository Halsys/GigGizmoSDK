import * as PropTypes from "prop-types";

export default PropTypes.shape({
	_id: PropTypes.string.isRequired,
	accountId: PropTypes.string.isRequired,
	dateCreated: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.instanceOf(Date)
	]).isRequired,
	dateModified: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.instanceOf(Date)
	]).isRequired,
	profile: PropTypes.any,
	userAccessToken: PropTypes.string,
	userId: PropTypes.string.isRequired,
	userRefreshToken: PropTypes.string,
});
