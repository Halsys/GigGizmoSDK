import * as PropTypes from "prop-types";
export const Upload: PropTypes.Requireable<PropTypes.InferProps<{
		_id: PropTypes.Validator<string>;
		dateCreated: PropTypes.Validator<string | Date>;
		dateModified: PropTypes.Validator<string | Date>;
		description: PropTypes.Requireable<string>;
		fileData: PropTypes.Validator<string>;
		fileName: PropTypes.Validator<string>;
		owners: PropTypes.Validator<string[]>;
		title: PropTypes.Validator<string>;
}>>;
