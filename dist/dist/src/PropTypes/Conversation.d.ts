import * as PropTypes from "prop-types";
declare const _default: PropTypes.Requireable<PropTypes.InferProps<{
    _id: PropTypes.Validator<string>;
    dateCreated: PropTypes.Validator<string | Date>;
    dateModified: PropTypes.Validator<string | Date>;
    users: PropTypes.Requireable<string[]>;
    events: PropTypes.Requireable<PropTypes.InferProps<{
        user: PropTypes.Validator<string>;
        message: PropTypes.Validator<string>;
        dateTimePosted: PropTypes.Validator<string>;
    }>[]>;
}>>;
export default _default;
