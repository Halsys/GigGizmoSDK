import * as PropTypes from "prop-types";
declare const _default: PropTypes.Requireable<PropTypes.InferProps<{
    _id: PropTypes.Validator<string>;
    dateCreated: PropTypes.Validator<string | Date>;
    dateModified: PropTypes.Validator<string | Date>;
    name: PropTypes.Validator<string>;
    description: PropTypes.Validator<string>;
    website: PropTypes.Requireable<string>;
    phone: PropTypes.Requireable<string>;
    email: PropTypes.Requireable<string>;
    location: PropTypes.Validator<string>;
    openCloseTimes: PropTypes.Requireable<PropTypes.InferProps<{
        open: PropTypes.Requireable<boolean>;
        openingTime: PropTypes.Requireable<string>;
        closingTime: PropTypes.Requireable<string>;
    }>[]>;
    icon: PropTypes.Requireable<string>;
    photos: PropTypes.Requireable<string[]>;
    owners: PropTypes.Requireable<string[]>;
    facebook: PropTypes.Requireable<string>;
    twitter: PropTypes.Requireable<string>;
    google: PropTypes.Requireable<string>;
    metaData: PropTypes.Requireable<string>;
    facebookPageId: PropTypes.Requireable<string>;
    facebookPageName: PropTypes.Requireable<string>;
    facebookPageToken: PropTypes.Requireable<string>;
}>>;
export default _default;
