/**
 * Created by corynull on 7/15/17.
 */

// Extras
export { GigGizmoPropTypes } from "./PropTypes";
export { API } from "./API";

// Models
export { Band } from "./Band";
export {
	Conversation,
	ConversationEvent
} from "./Conversation";
export { ErrorReport } from "./ErrorReport";
export { FacebookAccount } from "./FacebookAccount";
export { Gig } from "./Gig";
export { GooglePlace } from "./GooglePlace";
export { Location } from "./Location";
export {
	Notification,
	NotificationAction
} from "./Notification";
export { Page } from "./Page";
export { Post } from "./Post";
export { Request } from "./Request";
export { DocumentI, ModelClass } from "./Model";
export { TwitterAccount } from "./TwitterAccount";
export { Upload } from "./Upload";
export { User } from "./User";
export { Venue } from "./Venue";
export { ModelNameToModel } from "./ModelNameToModel";

if (typeof window !== "undefined") {
	(window as any).GigGizmoAPI = module.exports;
}
