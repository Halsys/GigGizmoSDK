export default async function ModelNameToModel(name: string):
	Promise<any> {
	switch (name) {
		case "Band":
			return (await import("./Band")).default;
		case "Conversation":
			return (await import("./Conversation")).default;
		case "ErrorReport":
			return (await import("./ErrorReport")).default;
		case "FacebookAccount":
			return (await import("./FacebookAccount")).default;
		case "Gig":
			return (await import("./Gig")).default;
		case "GooglePlace":
			return (await import("./GooglePlace")).default;
		case "Location":
			return (await import("./Location")).default;
		case "Notification":
			return (await import("./Notification")).default;
		case "Page":
			return (await import("./Page")).default;
		case "Post":
			return (await import("./Post")).default;
		case "Request":
			return (await import("./Request")).default;
		case "TwitterAccount":
			return (await import("./TwitterAccount")).default;
		case "Upload":
			return (await import("./Upload")).default;
		case "User":
			return (await import("./User")).default;
		case "Venue":
			return (await import("./Venue")).default;
		default:
			return Promise.resolve(null);
	}
}
