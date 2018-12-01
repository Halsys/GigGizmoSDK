import * as PropTypes from "prop-types";
declare const _default: PropTypes.Requireable<PropTypes.InferProps<{
    _id: PropTypes.Validator<string>;
    dateCreated: PropTypes.Validator<string | Date>;
    dateModified: PropTypes.Validator<string | Date>;
    title: PropTypes.Validator<string>;
    description: PropTypes.Requireable<string>;
    fileName: PropTypes.Validator<string>;
    fileData: PropTypes.Validator<string>;
    owners: PropTypes.Validator<string[]>;
}>>;
export default _default;
