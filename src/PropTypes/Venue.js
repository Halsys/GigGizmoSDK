const PropTypes = require("prop-types");

module.exports =  PropTypes.shape({
	_id: PropTypes.string.isRequired,
	dateCreated: PropTypes.object.isRequired,
	dateModified: PropTypes.object.isRequired,
	name: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	website: PropTypes.string,
	phone: PropTypes.string,
	email: PropTypes.string,
	location: PropTypes.string.isRequired,
	openCloseTimes: PropTypes.arrayOf(
		PropTypes.shape({
			open: PropTypes.bool,
			openingTime: PropTypes.string,
			closingTime: PropTypes.string
		})
	),
	icon: PropTypes.string,
	photos: PropTypes.arrayOf(PropTypes.string),
	owners: PropTypes.arrayOf(PropTypes.string),
	facebook: PropTypes.string,
	twitter: PropTypes.string,
	google: PropTypes.string,
	metaData: PropTypes.string,
	facebookPageId: PropTypes.string,
	facebookPageName: PropTypes.string,
	facebookPageToken: PropTypes.string
});
