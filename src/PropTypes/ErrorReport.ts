import * as PropTypes from "prop-types";

export default PropTypes.shape({
  _id: PropTypes.string.isRequired,
  columnNumber: PropTypes.number,
  dateCreated: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Date)
  ]).isRequired,
  dateModified: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Date)
  ]).isRequired,
  fileName: PropTypes.string,
  lineNumber: PropTypes.number,
  message: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  stack: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
  version: PropTypes.string.isRequired,
});
