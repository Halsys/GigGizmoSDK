import * as PropTypes from "prop-types";

export const Gig = PropTypes.shape({
	_id: PropTypes.string.isRequired,
	bandOwnerAccepted: PropTypes.string,
	bands: PropTypes.arrayOf(PropTypes.string).isRequired,
	dateCreated: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.instanceOf(Date)
	]).isRequired,
	dateModified: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.instanceOf(Date)
	]).isRequired,
	location: PropTypes.string.isRequired,
	owners: PropTypes.arrayOf(PropTypes.string),
	startTime: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.instanceOf(Date)
	]).isRequired, // Date,
	stopTime: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.instanceOf(Date)
	]).isRequired, // Date,
	toBeAnnounced: PropTypes.bool,
	venue: PropTypes.string.isRequired,
	venueOwnerAccepted: PropTypes.string
});
