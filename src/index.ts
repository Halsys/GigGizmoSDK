/**
 * Created by corynull on 7/15/17.
 */

// Extras
export { default as GigGizmoPropTypes } from "./PropTypes";
export { default as API } from "./API";

// Models
export { default as Band } from "./Band";
export { default as Conversation } from "./Conversation";
export { default as ErrorReport } from "./ErrorReport";
export { default as FacebookAccount } from "./FacebookAccount";
export { default as Gig } from "./Gig";
export { default as GooglePlace } from "./GooglePlace";
export { default as Location } from "./Location";
export { default as Notification } from "./Notification";
export { default as Page } from "./Page";
export { default as Post } from "./Post";
export { default as Request } from "./Request";
export { default as RESTModel } from "./RESTModel";
export { default as TwitterAccount } from "./TwitterAccount";
export { default as Upload } from "./Upload";
export { default as User } from "./User";
export { default as Venue } from "./Venue";
export { default as ModelNameToModel } from "./ModelNameToModel";

if(typeof window !== "undefined") {
  (<any>window).GigGizmoAPI = module.exports;
}
