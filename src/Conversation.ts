/**
 * Created by corynull on Dec 30 2017 11:14:11 AM.
 */

import API from "./API";
import RESTModel from "./RESTModel";

export default class Conversation extends RESTModel {
  static ModelName: string = "Conversation";
  static Callbacks = new Map();
  get events() {
    return this.getField("events") || [];
  }

  set events(value) {
    this.setField("events", value);
  }

  get users() {
    return this.getField("users") || [];
  }

  set users(value) {
    this.setField("users", value);
  }

  isValid() {
    if (!super.isValid()) return false;
    // TODO: do more tests...
    return true;
  }

  pushMessage(user: string, message: string) {
    const { events } = this;
    events.push({
      user,
      message,
      dateTimePosted: new Date()
    });
    this.events = events;
    return this.save();
  }

  // TODO: inviteNewUser(user, newUser, token) {}

  static newCallback(callback: any) {
    const callbackId = Date.now();
    Conversation.Callbacks.set(callbackId, callback);
    return () => Conversation.Callbacks.delete(callbackId);
  }

  static connectSocket() {
    API.getSocket().then((socket: SocketIOClient.Socket) => {
      if(socket) {
        socket.on("/API/Conversation/Update", (data: any) => {
          if (data) {
            let conv = RESTModel.Cache.get(data._id) || null;
            if (conv) conv = Object.assign(conv, data);
            else conv = new Conversation(data);
            RESTModel.Cache.set(conv._id, conv);
            Conversation.Callbacks.forEach(cb => cb(conv));
          }
        });
      }
    }, console.error);
  }

  static findById(id: string) {
    return RESTModel.findByIdBase(Conversation, id, true);
  }

  static getAllOwned() {
    return RESTModel.findManyBase(Conversation, null, true);
  }
}
