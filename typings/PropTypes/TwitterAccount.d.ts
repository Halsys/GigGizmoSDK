import * as PropTypes from "prop-types";
export const TwitterAccount: PropTypes.Requireable<PropTypes.InferProps<{
		_id: PropTypes.Validator<string>;
		accessToken: PropTypes.Requireable<string>;
		accountId: PropTypes.Validator<string>;
		dateCreated: PropTypes.Validator<string | Date>;
		dateModified: PropTypes.Validator<string | Date>;
		profile: PropTypes.Requireable<any>;
		tokenSecret: PropTypes.Requireable<string>;
		userId: PropTypes.Validator<string>;
}>>;
