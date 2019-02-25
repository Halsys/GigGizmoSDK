export async function ModelNameToModel(name: string):
	Promise<any> {
	switch (name) {
		case "Band":
			return (await import("./Band")).Band;
		case "Conversation":
			return (await import("./Conversation")).Conversation;
		case "ErrorReport":
			return (await import("./ErrorReport")).ErrorReport;
		case "FacebookAccount":
			return (await import("./FacebookAccount")).FacebookAccount;
		case "Gig":
			return (await import("./Gig")).Gig;
		case "GooglePlace":
			return (await import("./GooglePlace")).GooglePlace;
		case "Location":
			return (await import("./Location")).Location;
		case "Notification":
			return (await import("./Notification")).Notification;
		case "Page":
			return (await import("./Page")).Page;
		case "Post":
			return (await import("./Post")).Post;
		case "Request":
			return (await import("./Request")).Request;
		case "TwitterAccount":
			return (await import("./TwitterAccount")).TwitterAccount;
		case "Upload":
			return (await import("./Upload")).Upload;
		case "User":
			return (await import("./User")).User;
		case "Venue":
			return (await import("./Venue")).Venue;
		default:
			return Promise.resolve(null);
	}
}
