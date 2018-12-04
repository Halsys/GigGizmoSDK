import * as PropTypes from "prop-types";
declare const _default: PropTypes.Requireable<PropTypes.InferProps<{
    _id: PropTypes.Validator<string>;
    dateCreated: PropTypes.Validator<string | Date>;
    dateModified: PropTypes.Validator<string | Date>;
    startTime: PropTypes.Validator<string | Date>;
    stopTime: PropTypes.Validator<string | Date>;
    location: PropTypes.Validator<string>;
    venue: PropTypes.Validator<string>;
    bands: PropTypes.Validator<string[]>;
    toBeAnnounced: PropTypes.Requireable<boolean>;
    bandOwnerAccepted: PropTypes.Requireable<string>;
    venueOwnerAccepted: PropTypes.Requireable<string>;
    owners: PropTypes.Requireable<string[]>;
}>>;
export default _default;
