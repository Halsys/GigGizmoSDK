import * as PropTypes from "prop-types";

export default PropTypes.shape({
  _id: PropTypes.string.isRequired,
  dateCreated: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Date)
  ]).isRequired,
  dateModified: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Date)
  ]).isRequired,
  description: PropTypes.string,
  fileData: PropTypes.string.isRequired,
  fileName: PropTypes.string.isRequired,
  owners: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired
});
