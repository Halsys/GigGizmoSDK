import * as PropTypes from "prop-types";
export const FacebookAccount: PropTypes.Requireable<PropTypes.InferProps<{
		_id: PropTypes.Validator<string>;
		accountId: PropTypes.Validator<string>;
		dateCreated: PropTypes.Validator<string | Date>;
		dateModified: PropTypes.Validator<string | Date>;
		profile: PropTypes.Requireable<any>;
		userAccessToken: PropTypes.Requireable<string>;
		userId: PropTypes.Validator<string>;
		userRefreshToken: PropTypes.Requireable<string>;
}>>;
