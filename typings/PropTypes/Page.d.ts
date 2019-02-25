import * as PropTypes from "prop-types";
export const Page: PropTypes.Requireable<PropTypes.InferProps<{
		_id: PropTypes.Validator<string>;
		blog: PropTypes.Requireable<boolean>;
		data: PropTypes.Requireable<string>;
		dateCreated: PropTypes.Validator<string | Date>;
		dateModified: PropTypes.Validator<string | Date>;
		doc: PropTypes.Requireable<boolean>;
		hide: PropTypes.Requireable<boolean>;
		link: PropTypes.Requireable<string>;
		metadata: PropTypes.Requireable<string>;
		revisions: PropTypes.Requireable<number>;
		title: PropTypes.Requireable<string>;
		visits: PropTypes.Requireable<number>;
}>>;
