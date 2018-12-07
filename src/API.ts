/**
 * Created by corynull on 6/19/17.
 */
import { AxiosRequestConfig } from "axios";
import { parse as ParseCookie, serialize as SerializeCookie } from "cookie";
import "socket.io-client";
import { version } from "../package.json";

if(typeof (<any>global)["axios"] === "undefined") {
  (<any>global)["axios"] = <any>require("../node_modules/axios/lib/axios.js");
  if(typeof (<any>global)["axios"] === "undefined")
    throw new Error("Missing axios in global");
}

if(typeof (<any>global)["socket.io-client"] === "undefined") {
  (<any>global)["socket.io-client"] = <any>require("../node_modules/socket.io-client/dist/socket.io.slim.js");
  if(typeof (<any>global)["socket.io-client"] === "undefined")
    throw new Error("Missing socket.io-client in global");
}


export default abstract class API {
  public static readonly WebSocket = (<any>global)["socket.io-client"];;
  public static readonly axios = (<any>global)["axios"];
  public static readonly SessionStorageSupported =
    typeof Storage !== "undefined";
  public static readonly LocalStorageSupported =
    typeof window !== "undefined" && typeof window.localStorage !== "undefined";
  public static readonly ShouldUseSocketIO = true;
  public static dev = false;
  public static secure = !API.dev;
  public static port = 80;
  public static securePort = 443;
  public static hostname = "giggizmo.com";
  private static _token: string | null = null;
  private static _expires: Date | null = null;
  public static useSocketIO = false;
  private static webSocket: SocketIOClient.Socket = null;
  public static get expires() {
    if(!API._expires && API.LocalStorageSupported)
      API._expires = new Date(localStorage.getItem("expires") || null);
    return API._expires;
  }
  public static set expires(value: any) {
    let dateExpires: Date | null = null;
    if(typeof value === "string" || typeof value === "number")
      dateExpires = new Date(value);
    else if(value instanceof Date)
      dateExpires = value;
    if(dateExpires === null) {
      throw new Error(`value for date expires is invalid, expected string, number, or date. Got: ${value}`);
    } else {
      API._expires = dateExpires;
      if(API.LocalStorageSupported)
        localStorage.setItem("expires", API._expires.toISOString());
    }
  }
  public static get token() {
    const dateNow = new Date();
    if (API.expires && dateNow > API.expires) {
      API._token = null;
      if (API.LocalStorageSupported)
        localStorage.removeItem("token");
      return null;
    }
    if (!API._token && API.LocalStorageSupported)
      // We store it in local storage.
      API._token = JSON.parse(localStorage.getItem("token")) || null;
    if (!API._token && typeof document !== "undefined" && document.cookie)
      // We store it in the cookie.
      API._token = ParseCookie(document.cookie)["gig-gizmo-token"];
    if (API._token && API.LocalStorageSupported)
      // We store it in local storage if found.
      localStorage.setItem("token", JSON.stringify(API._token));
    return API._token;
  }
  public static set token(value: any) {
    if(typeof value === "string" && value.length !== 124 && value !== null)
      throw new Error(`Token is not valid: ${value}`);
    else {
      if (typeof value === "string" && value.length != 0) {
        if (API.LocalStorageSupported)
          localStorage.setItem("token", JSON.stringify(value));
        API._token = value;
      } else {
        if (API.LocalStorageSupported)
          localStorage.removeItem("token");
        API._token = null;
      }
      if(typeof document !== "undefined")
        document.cookie = SerializeCookie("gig-gizmo-token", API._token, {
          path: "/",
          sameSite: "strict"
        });
    }
  }
  public static get rootURL(): string {
    let url = "";
    if (API.secure) url += "https://";
    else url += "http://";
    url += `${API.hostname}`;
    if (API.port != 80 && !API.secure) url += `:${API.port}`;
    else if (API.securePort != 443 && API.secure) url += `:${API.securePort}`;
    return url;
  }
  public static get webSocketRootURL(): string {
    let url = "";
    if (API.secure) url += "wss://";
    else url += "ws://";
    url += `${API.hostname}`;
    if (API.port != 80 && !API.secure) url += `:${API.port}`;
    else if (API.securePort != 443 && API.secure) url += `:${API.securePort}`;
    return url;
  }
  private constructor() {
    throw new Error("Cannot instantiate.");
  }
  public static async call(method: string, route: string, data: any) {
    let headers = {
      "x-gig-gizmo-token": API.token ? API._token : null
    };
    let fetchRequest: AxiosRequestConfig = {
      url: `${API.rootURL}${route}`,
      method: method.toLowerCase(),
      data: null,
      params: null,
      responseType: "json",
      xsrfCookieName: "gig-gizmo-token",
      xsrfHeaderName: "x-gig-gizmo-token",
      headers
    };
    if (data) {
      if (method === "HEAD" || method === "GET") fetchRequest.params = data;
      else fetchRequest.data = data;
    }

    let response = await API.axios(fetchRequest);
    if (response.data) return response.data;
    else if (response.statusText) return response.statusText;
    else if (response.status) return null;
  }
  public static getSocket() {
    return new Promise((resolve, reject) => {
      try {
        const killSocket =  (error: any) => {
          if(error) console.error(error);
          API.webSocket.open();
        };
        const onReady = () => {
          if(!API.webSocket) {
            API.webSocket = API.WebSocket();
            API.webSocket.on("connect_timeout", killSocket);
            API.webSocket.on("connect_error", killSocket);
            API.webSocket.on("disconnect", killSocket);
            API.webSocket.on("error", killSocket);
            API.webSocket.open();
          }
          return resolve(API.webSocket);
        };
        if(API.WebSocket) {
          if(typeof document !== "undefined") {
            switch (document.readyState) {
              case "loading":
                document.addEventListener("DOMContentLoaded", onReady);
                break;
              case "interactive":
              case "complete":
                onReady();
                break;
            }
          } else {
            onReady();
          }
        }
        return resolve(null);
      } catch(e) {
        reject(e);
      }
    });
  }
}

if(typeof API.axios !== "undefined") {
  API.axios.defaults.withCredentials = true;
}
