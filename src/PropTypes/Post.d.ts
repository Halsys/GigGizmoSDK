import * as PropTypes from "prop-types";
declare const _default: PropTypes.Requireable<PropTypes.InferProps<{
    _id: PropTypes.Validator<string>;
    dateCreated: PropTypes.Validator<string | Date>;
    dateModified: PropTypes.Validator<string | Date>;
    userId: PropTypes.Validator<string>;
    network: PropTypes.Validator<string>;
    accountId: PropTypes.Validator<string>;
    pageId: PropTypes.Validator<string>;
    postText: PropTypes.Validator<string>;
    postDate: PropTypes.Validator<string | Date>;
    coordinates: PropTypes.Requireable<number[]>;
    error: PropTypes.Requireable<any>;
    done: PropTypes.Validator<boolean>;
}>>;
export default _default;
