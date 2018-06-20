/**
 * Created by corynull on 6/19/17.
 */

import axios from "axios";
import ParseCookie from "cookie-parser";
import io from "socket.io-client";

export const dev =
  typeof process.env.NODE_ENV !== "undefined"
    ? process.env.NODE_ENV === "development"
    : false;
export const version =
  typeof process.env.npm_package_version !== "undefined"
    ? process.env.npm_package_version
    : null;
export const secure = !dev;
export const port = dev ? 58000 : 80;
export const securePort = dev ? 54430 : 443;

export default class API {
  // NOTE: Switch to localhost if testing Facebook... or 127.0.0.1 for Twitter.
  static hostname = dev
    ? `127.0.0.1:${secure ? securePort : port}`
    : "giggizmo.com";
  static root = `http${secure ? "s" : ""}://${API.hostname}`;
  static websocketRoot = `ws://${API.hostname}`;
  static webSocket = null;
  static token = API.findToken();
  static SessionStorageSupported = typeof Storage !== "undefined";
  static LocalStorageSupported =
    typeof window !== "undefined" && typeof window.localStorage !== "undefined";
  static ShouldUseSocketIO = process && !process.title.includes("node");
  static UseSocketIO = false;

  static findToken() {
    let token = API.token || null;
    if (!token && API.LocalStorageSupported)
      // We store it in session storage.
      token = localStorage.getItem("token") || null;
    if (!token && typeof document !== "undefined" && document.cookie)
      // We store it in the cookie.
      token = ParseCookie(document.cookie)["gig-gizmo-token"];
    if (token && API.LocalStorageSupported)
      localStorage.setItem("token", token);
    return token;
  }

  static Call(method, callRoute, callData) {
    const route = callRoute || "";
    const data = callData || {};
    return new Promise((resolve, reject) => {
      let token = data && data.token ? data.token : false;
      if (typeof token !== "undefined" && data) delete data.token;
      token = token || API.findToken();
      const fetchRequest = {
        headers: {
          "gig-gizmo-token": token
        },
        url: `${API.root}${route}`,
        method: method.toLowerCase(),
        data: null,
        withCredentials: true,
        responseType: "json"
      };
      if (data) {
        if (method === "HEAD" || method === "GET") fetchRequest.params = data;
        else fetchRequest.data = data;
      }

      axios(fetchRequest).then(
        response => {
          if (response.data) resolve(response.data);
          else if (response.statusText) resolve(response.statusText);
          else if (response.status) resolve(null);
        },
        error => {
          if (error.response) {
            const msg = error.response.data;
            if (typeof msg === "string") reject(new Error(msg));
            else if (typeof msg === "object" && msg) {
              const errorObject = new Error();
              Object.assign(errorObject, {
                name: error.name,
                stack: error.stack,
                message: error.message,
                lineNumber: error.lineNumber,
                columnNumber: error.columnNumber,
                fileName: error.fileName
              });
              reject(errorObject);
            }
          } else if (error.request) {
            const x = error.request;
            if (x.response === null) reject(new Error("No response"));
            reject(
              new Error(
                JSON.stringify({
                  readyState: x.readyState,
                  response: x.response,
                  status: x.status,
                  statusText: x.statusText
                })
              )
            );
          } else reject(error);
        }
      );
    });
  }

  static async GetSocket(token = API.findToken()) {
    return new Promise((resolve, reject) => {
      if (token) {
        if (API.webSocket) return resolve(API.webSocket);
        API.webSocket = io(API.root);
        API.webSocket.on("connect", () => resolve(API.webSocket));
        API.webSocket.on("connect_timeout", () => reject(new Error("Timeout")));
        API.webSocket.on("connect_error", error => reject(error));
        API.webSocket.on("disconnect", () => reject(new Error("Disconnected")));
        API.webSocket.on("error", error => reject(error));
        return null;
      }
      return resolve(null);
    });
  }
}
