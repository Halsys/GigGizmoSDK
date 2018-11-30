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
	icon: PropTypes.string,
	email: PropTypes.string,
	firstName: PropTypes.string.isRequired,
	middleName: PropTypes.string,
	lastName: PropTypes.string.isRequired,
	birthday: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.instanceOf(Date)
	]).isRequired,
	country: PropTypes.string.isRequired,
	bandManager: PropTypes.bool,
	venueManager: PropTypes.bool,
	betaFeatureUser: PropTypes.bool,
	sendAnonymousReports: PropTypes.bool,
	sendErrorReports: PropTypes.bool,
	sendEmails: PropTypes.bool,
	sendPromotions: PropTypes.bool,
	useCookies: PropTypes.bool,
	description: PropTypes.string,
	active: PropTypes.bool,
	paypal: PropTypes.string,
	facebook: PropTypes.string,
	twitter: PropTypes.string,
	emailVerified: PropTypes.bool,
	payment: PropTypes.string,
	admin: PropTypes.bool,
	attempts: PropTypes.number,
	lastLogin: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.instanceOf(Date)
	]).isRequired,
	lastLoginIP: PropTypes.string.isRequired
});
