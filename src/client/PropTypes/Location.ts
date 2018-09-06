import * as PropTypes from "prop-types";

export default  PropTypes.shape({
	_id: PropTypes.string.isRequired,
	dateCreated: PropTypes.object.isRequired,
	dateModified: PropTypes.object.isRequired,
	placeId: PropTypes.string.isRequired,
	address: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	point: PropTypes.any.isRequired,
	utcOffset: PropTypes.number.isRequired
});
