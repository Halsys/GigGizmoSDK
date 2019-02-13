import * as PropTypes from "prop-types";

export default PropTypes.shape({
	_id: PropTypes.string.isRequired,
	address: PropTypes.string.isRequired,
	dateCreated: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.instanceOf(Date)
	]).isRequired,
	dateModified: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.instanceOf(Date)
	]).isRequired,
	placeId: PropTypes.string.isRequired,
	point: PropTypes.arrayOf(PropTypes.number).isRequired,
	type: PropTypes.string.isRequired,
	utcOffset: PropTypes.number.isRequired
});
