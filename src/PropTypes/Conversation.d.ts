import * as PropTypes from "prop-types";
declare const _default: PropTypes.Requireable<PropTypes.InferProps<{
    _id: PropTypes.Validator<string>;
    dateCreated: PropTypes.Validator<string | Date>;
    dateModified: PropTypes.Validator<string | Date>;
    events: PropTypes.Requireable<PropTypes.InferProps<{
        dateTimePosted: PropTypes.Validator<string>;
        message: PropTypes.Validator<string>;
        user: PropTypes.Validator<string>;
    }>[]>;
    users: PropTypes.Requireable<string[]>;
}>>;
export default _default;
