import * as PropTypes from "prop-types";

export default PropTypes.shape({
  _id: PropTypes.string.isRequired,
  active: PropTypes.bool,
  admin: PropTypes.bool,
  attempts: PropTypes.number,
  bandManager: PropTypes.bool,
  betaFeatureUser: PropTypes.bool,
  birthday: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Date)
  ]).isRequired,
  country: PropTypes.string.isRequired,
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
  emailVerified: PropTypes.bool,
  facebook: PropTypes.string,
  firstName: PropTypes.string.isRequired,
  icon: PropTypes.string,
  lastLogin: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Date)
  ]).isRequired,
  lastLoginIP: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  middleName: PropTypes.string,
  payment: PropTypes.string,
  paypal: PropTypes.string,
  sendAnonymousReports: PropTypes.bool,
  sendEmails: PropTypes.bool,
  sendErrorReports: PropTypes.bool,
  sendPromotions: PropTypes.bool,
  twitter: PropTypes.string,
  useCookies: PropTypes.bool,
  venueManager: PropTypes.bool,
});
