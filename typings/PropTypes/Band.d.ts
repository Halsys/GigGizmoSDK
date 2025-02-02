import * as PropTypes from "prop-types";
export const Band: PropTypes.Requireable<PropTypes.InferProps<{
		_id: PropTypes.Validator<string>;
		cityName: PropTypes.Requireable<string>;
		cityPlaceID: PropTypes.Requireable<string>;
		dateCreated: PropTypes.Validator<string | Date>;
		dateModified: PropTypes.Validator<string | Date>;
		description: PropTypes.Requireable<string>;
		email: PropTypes.Requireable<string>;
		facebook: PropTypes.Requireable<string>;
		facebookPageId: PropTypes.Requireable<string>;
		facebookPageName: PropTypes.Requireable<string>;
		facebookPageToken: PropTypes.Requireable<string>;
		google: PropTypes.Requireable<string>;
		icon: PropTypes.Requireable<string>;
		metadata: PropTypes.Requireable<string>;
		name: PropTypes.Validator<string>;
		owners: PropTypes.Requireable<string[]>;
		photos: PropTypes.Requireable<string[]>;
		twitter: PropTypes.Requireable<string>;
		website: PropTypes.Requireable<string>;
}>>;
