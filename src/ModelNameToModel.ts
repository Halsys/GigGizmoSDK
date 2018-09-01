export default function ModelNameToModel(name: string) {
  switch (name) {
    case "Band":
      return import("./Band");
    case "Conversation":
      return import("./Conversation");
    case "ErrorReport":
      return import("./ErrorReport");
    case "FacebookAccount":
      return import("./FacebookAccount");
    case "Gig":
      return import("./Gig");
    case "GooglePlace":
      return import("./GooglePlace");
    case "Location":
      return import("./Location");
    case "Notification":
      return import("./Notification");
    case "Page":
      return import("./Page");
    case "Post":
      return import("./Post");
    case "Request":
      return import("./Request");
    case "TwitterAccount":
      return import("./TwitterAccount");
    case "Upload":
      return import("./Upload");
    case "User":
      return import("./User");
    case "Venue":
      return import("./Venue");
    default:
      return null;
  }
}
