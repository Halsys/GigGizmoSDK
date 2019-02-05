import * as PropTypes from "prop-types";

export default PropTypes.shape({
  _id: PropTypes.string.isRequired,
  accessToken: PropTypes.string,
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
  tokenSecret: PropTypes.string,
  userId: PropTypes.string.isRequired
});
