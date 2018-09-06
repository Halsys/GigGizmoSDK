import * as PropTypes from "prop-types";

export default  PropTypes.shape({
	_id: PropTypes.string.isRequired,
	dateCreated: PropTypes.object.isRequired,
	dateModified: PropTypes.object.isRequired,
	startTime: PropTypes.object.isRequired, // Date,
	stopTime: PropTypes.object.isRequired, // Date,
	location: PropTypes.string.isRequired,
	venue: PropTypes.string.isRequired,
	band: PropTypes.string,
	toBeAnnounced: PropTypes.bool,
	bandOwnerAccepted: PropTypes.string,
	venueOwnerAccepted: PropTypes.string,
	owners: PropTypes.arrayOf(PropTypes.string)
});
