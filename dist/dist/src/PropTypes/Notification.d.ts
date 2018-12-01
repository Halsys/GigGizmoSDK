import * as PropTypes from "prop-types";
declare const _default: PropTypes.Requireable<PropTypes.InferProps<{
    _id: PropTypes.Validator<string>;
    dateCreated: PropTypes.Validator<string | Date>;
    dateModified: PropTypes.Validator<string | Date>;
    userId: PropTypes.Validator<string>;
    label: PropTypes.Validator<string>;
    message: PropTypes.Validator<string>;
    actions: PropTypes.Requireable<PropTypes.InferProps<{
        request: PropTypes.Requireable<string>;
        link: PropTypes.Requireable<string>;
        label: PropTypes.Validator<string>;
    }>[]>;
    seenByUser: PropTypes.Requireable<boolean>;
}>>;
export default _default;
