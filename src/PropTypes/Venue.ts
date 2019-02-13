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
	description: PropTypes.string.isRequired,
	email: PropTypes.string,
	facebook: PropTypes.string,
	facebookPageId: PropTypes.string,
	facebookPageName: PropTypes.string,
	facebookPageToken: PropTypes.string,
	google: PropTypes.string,
	icon: PropTypes.string,
	location: PropTypes.string.isRequired,
	metaData: PropTypes.string,
	name: PropTypes.string.isRequired,
	openCloseTimes: PropTypes.arrayOf(
		PropTypes.shape({
			closingTime: PropTypes.string,
			open: PropTypes.bool,
			openingTime: PropTypes.string
		})
	),
	owners: PropTypes.arrayOf(PropTypes.string),
	phone: PropTypes.string,
	photos: PropTypes.arrayOf(PropTypes.string),
	twitter: PropTypes.string,
	website: PropTypes.string
});
