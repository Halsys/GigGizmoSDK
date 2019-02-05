/**
 * Created by corynull on 8/15/17.
 */

import API from "./API";
import RESTModel from "./RESTModel";

export default class Notification extends RESTModel {
  public static ModelName: string = "Notification";
  public static Callbacks = new Map();
  private changeCallbacks = new Map();

  get userId() {
    return this.getField("userId");
  }

  set userId(value: string) {
    this.setField("userId", value);
  }

  get label() {
    return this.getField("label");
  }

  set label(value: string) {
    this.setField("label", value);
  }

  get message() {
    return this.getField("message");
  }

  set message(value: string) {
    this.setField("message", value);
  }

  get actions() {
    return this.getField("actions");
  }

  set actions(value: string[]) {
    this.setField("actions", value);
  }

  get seenByUser() {
    return this.getField("seenByUser");
  }

  set seenByUser(value: boolean) {
    this.setField("seenByUser", value);
  }

  public static onNewNotification(note: any) {
    Notification.Callbacks.forEach((callback: any) => callback(note));
  }

  public static newCallback(callback: any) {
    const callbackId = Date.now();
    Notification.Callbacks.set(callbackId, callback);
    return () => Notification.Callbacks.delete(callbackId);
  }

  public static async getNewNotifications() {
    if (API.token !== null) {
      const notes = await API.call("GET", "/API/Notification", {
        returnNew: true
      });
      return Array.from(notes).map((item: any) => new Notification(item));
    } else {
      return [];
    }
  }

  public static getAllOwned() {
    return RESTModel.findManyBase("Notification", null, true);
  }

  public static findById(id: string) {
    return RESTModel.findByIdBase("Notification", id, true);
  }

  public static connectSocket() {
    API.getSocket().then(
      (socket: SocketIOClient.Socket) => {
        if (socket) {
          socket.on("notification", (data: any) =>
            Notification.onNewNotification(new Notification(data))
          );
        }
      },
      console.error);
  }

  public static setUpPushNotifications() {
    const PushSupported =
      typeof window !== "undefined" &&
      typeof (window as any).Notification !== "undefined";
    const webNotification = (PushSupported) ? (window as any).Notification : null;
    if (PushSupported) {
      const setup = (permission: string) => {
        if (permission === "granted") {
          Notification.onNewNotification((note: Notification) => {
            return new webNotification(note.label, {
              body: note.message,
              data: note,
              icon: "/LogoSmall.png",
              timestamp: note.dateCreated
            });
          });
        }
      };
      if (webNotification.permission === "granted") {
        setup(webNotification.permission);
      } else {
        webNotification.requestPermission(setup);
      }
    }
  }

  public newChangeCallback(callback: any) {
    const i = Date.now();
    this.changeCallbacks.set(i, callback);
    return () => this.changeCallbacks.delete(i);
  }
}
