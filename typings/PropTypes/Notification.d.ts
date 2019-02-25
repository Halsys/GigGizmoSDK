import * as PropTypes from "prop-types";
export const Notification: PropTypes.Requireable<PropTypes.InferProps<{
		_id: PropTypes.Validator<string>;
		actions: PropTypes.Requireable<Array<PropTypes.InferProps<{
				label: PropTypes.Validator<string>;
				link: PropTypes.Requireable<string>;
				request: PropTypes.Requireable<string>;
		}>>>;
		dateCreated: PropTypes.Validator<string | Date>;
		dateModified: PropTypes.Validator<string | Date>;
		label: PropTypes.Validator<string>;
		message: PropTypes.Validator<string>;
		seenByUser: PropTypes.Requireable<boolean>;
		userId: PropTypes.Validator<string>;
}>>;
