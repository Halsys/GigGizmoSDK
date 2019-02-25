import * as PropTypes from "prop-types";
export const Post: PropTypes.Requireable<PropTypes.InferProps<{
		_id: PropTypes.Validator<string>;
		accountId: PropTypes.Validator<string>;
		coordinates: PropTypes.Requireable<number[]>;
		dateCreated: PropTypes.Validator<string | Date>;
		dateModified: PropTypes.Validator<string | Date>;
		done: PropTypes.Validator<boolean>;
		error: PropTypes.Requireable<any>;
		network: PropTypes.Validator<string>;
		pageId: PropTypes.Validator<string>;
		postDate: PropTypes.Validator<string | Date>;
		postText: PropTypes.Validator<string>;
		userId: PropTypes.Validator<string>;
}>>;
