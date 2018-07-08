import PropTypes from "prop-types";

module.exports =  PropTypes.shape({
	_id: PropTypes.string.isRequired,
	dateCreated: PropTypes.object.isRequired,
	dateModified: PropTypes.object.isRequired,
	placeId: PropTypes.string.isRequired,
	address: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	point: PropTypes.any.isRequired,
	utcOffset: PropTypes.number.isRequired
});
