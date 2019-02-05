import * as PropTypes from "prop-types";

export default PropTypes.shape({
  _id: PropTypes.string.isRequired,
  accountId: PropTypes.string.isRequired,
  coordinates: PropTypes.arrayOf(PropTypes.number), // coord = [longitude, latitude]
  dateCreated: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Date)
  ]).isRequired,
  dateModified: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Date)
  ]).isRequired,
  done: PropTypes.bool.isRequired,
  error: PropTypes.any,
  network: PropTypes.string.isRequired,
  pageId: PropTypes.string.isRequired,
  postDate: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Date)
  ]).isRequired,
  postText: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
});
