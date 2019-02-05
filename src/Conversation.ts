/**
 * Created by corynull on Dec 30 2017 11:14:11 AM.
 */

import API from "./API";
import RESTModel from "./RESTModel";

export default class Conversation extends RESTModel {
  public static ModelName: string = "Conversation";
  public static Callbacks = new Map();
  get events() {
    return this.getField("events") || [];
  }

  set events(value: any[]) {
    this.setField("events", value);
  }

  get users() {
    return this.getField("users") || [];
  }

  set users(value: string[]) {
    this.setField("users", value);
  }

  public static newCallback(callback: any) {
    const callbackId = Date.now();
    Conversation.Callbacks.set(callbackId, callback);
    return () => Conversation.Callbacks.delete(callbackId);
  }

  public static connectSocket() {
    API.getSocket().then(
      (socket: SocketIOClient.Socket) => {
        if (socket) {
          socket.on("/API/Conversation/Update", (data: any) => {
            if (data) {
              let conv = RESTModel.Cache.get(data._id) || null;
              if (conv) {
                Object.assign(conv, data);
              } else {
                conv = new Conversation(data);
              }
              RESTModel.Cache.set(conv._id, conv);
              Conversation.Callbacks.forEach((cb) => cb(conv));
            }
          });
        }
      },
      console.error);
  }

  public static findById(id: string) {
    return RESTModel.findByIdBase(Conversation, id, true);
  }

  public static getAllOwned() {
    return RESTModel.findManyBase(Conversation, null, true);
  }

  public isValid() {
    if (!super.isValid()) { return false; }
    // TODO: do more tests...
    return true;
  }

  public pushMessage(user: string, message: string) {
    this.events.push({
      dateTimePosted: new Date(),
      message,
      user,
    });
    return this.save();
  }

  // TODO: inviteNewUser(user, newUser, token) {}

}
