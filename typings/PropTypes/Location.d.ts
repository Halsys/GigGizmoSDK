import * as PropTypes from "prop-types";
export const Location: PropTypes.Requireable<PropTypes.InferProps<{
		_id: PropTypes.Validator<string>;
		address: PropTypes.Validator<string>;
		dateCreated: PropTypes.Validator<string | Date>;
		dateModified: PropTypes.Validator<string | Date>;
		placeId: PropTypes.Validator<string>;
		point: PropTypes.Validator<number[]>;
		type: PropTypes.Validator<string>;
		utcOffset: PropTypes.Validator<number>;
}>>;
