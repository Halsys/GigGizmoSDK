import * as PropTypes from "prop-types";

export default PropTypes.shape({
	_id: PropTypes.string.isRequired,
	cityName: PropTypes.string,
	cityPlaceID: PropTypes.string,
	dateCreated: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.instanceOf(Date)
	]).isRequired,
	dateModified: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.instanceOf(Date)
	]).isRequired,
	description: PropTypes.string,
	email: PropTypes.string,
	facebook: PropTypes.string,
	facebookPageId: PropTypes.string,
	facebookPageName: PropTypes.string,
	facebookPageToken: PropTypes.string,
	google: PropTypes.string,
	icon: PropTypes.string,
	metadata: PropTypes.string,
	name: PropTypes.string.isRequired,
	owners: PropTypes.arrayOf(PropTypes.string),
	photos: PropTypes.arrayOf(PropTypes.string),
	twitter: PropTypes.string,
	website: PropTypes.string
});
