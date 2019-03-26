import { API } from "./API";
import { Band } from "./Band";
import {
	Conversation,
	ConversationCallback,
	ConversationCallbackDestroyer,
	ConversationEvent
} from "./Conversation";
import { ErrorReport } from "./ErrorReport";
import { FacebookAccount } from "./FacebookAccount";
import {
	Coord,
	Gig
} from "./Gig";
import { GooglePlace } from "./GooglePlace";
import { Location } from "./Location";
import { DocumentI, ModelClass } from "./Model";
import { ModelNameToModel } from "./ModelNameToModel";
import {
	Notification,
	NotificationAction,
	NotificationCallback,
	NotificationCallbackDestroyer
} from "./Notification";
import { Page } from "./Page";
import { Post } from "./Post";
import { GigGizmoPropTypes } from "./PropTypes";
import { Request } from "./Request";
import { TwitterAccount } from "./TwitterAccount";
import { Upload } from "./Upload";
import {
	User,
	UserCallback,
	UserCallbackDestroyer
} from "./User";
import { Venue } from "./Venue";

interface GigGizmoSDK {
	API: API;
	Band: Band;
	Conversation: Conversation;
	ConversationCallback: ConversationCallback;
	ConversationCallbackDestroyer: ConversationCallbackDestroyer;
	ConversationEvent: ConversationEvent;
	ErrorReport: ErrorReport;
	FacebookAccount: FacebookAccount;
	Coord: Coord;
	Gig: Gig;
	GooglePlace: GooglePlace;
	Location: Location;
	DocumentI: DocumentI;
	ModelClass: ModelClass<any>;
	ModelNameToModel: (name: string) => Promise<any>;
	Notification: Notification;
	NotificationAction: NotificationAction;
	NotificationCallback: NotificationCallback;
	NotificationCallbackDestroyer: NotificationCallbackDestroyer;
	Page: Page;
	Post: Post;
	GigGizmoPropTypes: any;
	Request: Request;
	TwitterAccount: TwitterAccount;
	Upload: Upload;
	User: User;
	UserCallback: UserCallback;
	UserCallbackDestroyer: UserCallbackDestroyer;
	Venue: Venue;
}

declare global {
	namespace NodeJS {
		interface Global {
				GigGizmoSDK: GigGizmoSDK;
		}
	}
}
