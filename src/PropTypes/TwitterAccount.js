import PropTypes from "prop-types";

export default PropTypes.shape({
	_id: PropTypes.string.isRequired,
	dateCreated: PropTypes.object.isRequired,
	dateModified: PropTypes.object.isRequired,
	userId: PropTypes.string.isRequired,
	accountId: PropTypes.string.isRequired,
	accessToken: PropTypes.string,
	tokenSecret: PropTypes.string,
	profile: PropTypes.any
});
