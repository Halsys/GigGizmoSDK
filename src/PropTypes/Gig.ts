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
	startTime: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.instanceOf(Date)
	]).isRequired, // Date,
	stopTime: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.instanceOf(Date)
	]).isRequired, // Date,
	location: PropTypes.string.isRequired,
	venue: PropTypes.string.isRequired,
	band: PropTypes.string,
	toBeAnnounced: PropTypes.bool,
	bandOwnerAccepted: PropTypes.string,
	venueOwnerAccepted: PropTypes.string,
	owners: PropTypes.arrayOf(PropTypes.string)
});
