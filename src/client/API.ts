/**
 * Created by corynull on 6/19/17.
 */
import axios, { AxiosRequestConfig, AxiosPromise } from "axios";
import { parse as ParseCookie } from "cookie";
import * as WebSocket from "socket.io-client";
import { version } from "../../package.json";

export default abstract class API {
  public static readonly SessionStorageSupported =
    typeof Storage !== "undefined";
  public static readonly LocalStorageSupported =
    typeof window !== "undefined" && typeof window.localStorage !== "undefined";
  public static readonly ShouldUseSocketIO =
    process && !process.title.includes("node");
  public static dev = false;
  public static secure = !API.dev;
  public static port = 80;
  public static securePort = 443;
  public static hostname = "giggizmo.com";
  private static _token: string | null = null;
  public static useSocketIO = false;
  private static webSocket: SocketIOClient.Socket = null;
  public static get token() {
    if (!API._token && API.LocalStorageSupported)
      // We store it in local storage.
      API._token = localStorage.getItem("token") || null;
    if (!API._token && typeof document !== "undefined" && document.cookie)
      // We store it in the cookie.
      API._token = ParseCookie(document.cookie)["gig-gizmo-token"];
    if (API._token && API.LocalStorageSupported)
      // We store it in local storage if found.
      localStorage.setItem("token", API._token);
    return API._token;
  }
  public static set token(value) {
    if (typeof value === "string" && value.length != 0) {
      if (API.LocalStorageSupported) localStorage.setItem("token", value);
      API._token = value;
    } else {
      if (API.LocalStorageSupported) localStorage.removeItem("token");
      API._token = null;
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
    let fetchRequest: AxiosRequestConfig = {
      headers: {
        "gig-gizmo-token": API.token
      },
      url: `${API.rootURL}${route}`,
      method: method.toLowerCase(),
      data: null,
      params: null,
      withCredentials: true,
      responseType: "json"
    };
    if (data) {
      if (method === "HEAD" || method === "GET") fetchRequest.params = data;
      else fetchRequest.data = data;
    }

    try {
      let response = await axios(fetchRequest);
      if (response.data) return response.data;
      else if (response.statusText) return response.statusText;
      else if (response.status) return null;
    } catch (error) {
      if (error.response) {
        const msg = error.response.data;
        if (typeof msg === "string") throw new Error(msg);
        else if (typeof msg === "object" && msg)
          throw Object.assign(new Error(error.message), {
            name: error.name,
            stack: error.stack,
            message: error.message,
            lineNumber: error.lineNumber,
            columnNumber: error.columnNumber,
            fileName: error.fileName
          });
      } else if (error.request) {
        const x = error.request;
        if (x.response === null) throw new Error("No response");
        throw Object.assign(new Error(x.response), {
          readyState: x.readyState,
          response: x.response,
          status: x.status,
          statusText: x.statusText
        });
      } else throw error;
    }
  }
  public static getSocket() {
    return new Promise((resolve, reject) => {
      if (API.token) {
        if (API.webSocket) return resolve(API.webSocket);
        API.webSocket = WebSocket(API.webSocketRootURL);
        API.webSocket.on("connect", () => resolve(API.webSocket));
        API.webSocket.on("connect_timeout", () => reject(new Error("Timeout")));
        API.webSocket.on("connect_error", (error: any) => reject(error));
        API.webSocket.on("disconnect", () => reject(new Error("Disconnected")));
        API.webSocket.on("error", (error: any) => reject(error));
        return null;
      }
      return resolve(null);
    });
  }
}
