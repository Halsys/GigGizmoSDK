import * as PropTypes from "prop-types";
declare const _default: PropTypes.Requireable<PropTypes.InferProps<{
		_id: PropTypes.Validator<string>;
		dateCreated: PropTypes.Validator<string | Date>;
		dateModified: PropTypes.Validator<string | Date>;
		description: PropTypes.Validator<string>;
		email: PropTypes.Requireable<string>;
		facebook: PropTypes.Requireable<string>;
		facebookPageId: PropTypes.Requireable<string>;
		facebookPageName: PropTypes.Requireable<string>;
		facebookPageToken: PropTypes.Requireable<string>;
		google: PropTypes.Requireable<string>;
		icon: PropTypes.Requireable<string>;
		location: PropTypes.Validator<string>;
		metaData: PropTypes.Requireable<string>;
		name: PropTypes.Validator<string>;
		openCloseTimes: PropTypes.Requireable<Array<PropTypes.InferProps<{
				closingTime: PropTypes.Requireable<string>;
				open: PropTypes.Requireable<boolean>;
				openingTime: PropTypes.Requireable<string>;
		}>>>;
		owners: PropTypes.Requireable<string[]>;
		phone: PropTypes.Requireable<string>;
		photos: PropTypes.Requireable<string[]>;
		twitter: PropTypes.Requireable<string>;
		website: PropTypes.Requireable<string>;
}>>;
export default _default;
