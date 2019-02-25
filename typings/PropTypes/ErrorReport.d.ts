import * as PropTypes from "prop-types";
export const ErrorReport: PropTypes.Requireable<PropTypes.InferProps<{
		_id: PropTypes.Validator<string>;
		columnNumber: PropTypes.Requireable<number>;
		dateCreated: PropTypes.Validator<string | Date>;
		dateModified: PropTypes.Validator<string | Date>;
		fileName: PropTypes.Requireable<string>;
		lineNumber: PropTypes.Requireable<number>;
		message: PropTypes.Validator<string>;
		name: PropTypes.Validator<string>;
		stack: PropTypes.Validator<string>;
		userId: PropTypes.Validator<string>;
		version: PropTypes.Validator<string>;
}>>;
