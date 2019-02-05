import * as PropTypes from "prop-types";
declare const _default: PropTypes.Requireable<PropTypes.InferProps<{
    _id: PropTypes.Validator<string>;
    actions: PropTypes.Requireable<PropTypes.InferProps<{
        label: PropTypes.Validator<string>;
        link: PropTypes.Requireable<string>;
        request: PropTypes.Requireable<string>;
    }>[]>;
    dateCreated: PropTypes.Validator<string | Date>;
    dateModified: PropTypes.Validator<string | Date>;
    label: PropTypes.Validator<string>;
    message: PropTypes.Validator<string>;
    seenByUser: PropTypes.Requireable<boolean>;
    userId: PropTypes.Validator<string>;
}>>;
export default _default;
