/**
 * Created by corynull on 6/19/17.
 */
import Axios, { AxiosRequestConfig } from "axios";
import { parse as ParseCookie, serialize as SerializeCookie } from "cookie";
import * as SocketIO from "socket.io-client";
import { version } from "../package.json";

export default abstract class API {
  public static readonly WebSocket = SocketIO;
  public static readonly axios = Axios;
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
  private static webSocket: SocketIOClient.Socket | null = null;
  public static get expires() {
    if (!API._expires && API.LocalStorageSupported) {
      const expires: any =
        localStorage.getItem("expires") || null;
      API._expires = new Date(expires);
    }
    return API._expires;
  }
  public static set expires(value: any) {
    let dateExpires: Date | null = null;
    if (typeof value === "string" || typeof value === "number") {

        dateExpires = new Date(value);
    } else if (value instanceof Date) {
      dateExpires = value;
    }
    if (dateExpires === null) {
      throw new Error(`value for date expires is invalid, expected string, number, or date. Got: ${value}`);
    } else {
      API._expires = dateExpires;
      if (API.LocalStorageSupported) {
        localStorage.setItem("expires", API._expires.toISOString());
      }
    }
  }
  public static get token() {
    const dateNow = new Date();
    if (API.expires && dateNow > API.expires) {
      API._token = null;
      if (API.LocalStorageSupported) {
        localStorage.removeItem("token");
      }
      return null;
    }
    if (!API._token && API.LocalStorageSupported) {
      // We store it in local storage.
      API._token = JSON.parse(localStorage.getItem("token") || "");
    }
    if (!API._token && typeof document !== "undefined" && document.cookie) {
      // We store it in the cookie.
      API._token = ParseCookie(document.cookie)["gig-gizmo-token"];
    }
    if (API._token && API.LocalStorageSupported) {
      // We store it in local storage if found.
      localStorage.setItem("token", JSON.stringify(API._token));
    }
    return API._token;
  }
  public static set token(value: any) {
    if (typeof value === "string" && value.length !== 124 && value !== null) {
      throw new Error(`Token is not valid: ${value}`);
    } else {
      if (typeof value === "string" && value.length !== 0) {
        if (API.LocalStorageSupported) {
          localStorage.setItem("token", JSON.stringify(value));
        }
        API._token = value;
      } else {
        if (API.LocalStorageSupported) {
          localStorage.removeItem("token");
        }
        API._token = null;
      }
      if (typeof document !== "undefined") {
        document.cookie = SerializeCookie("gig-gizmo-token", API._token || "", {
          path: "/",
          sameSite: "strict"
        });
      }
    }
  }
  public static get rootURL(): string {
    let url = "";
    if (API.secure) {
      url += "https://";
    } else {
      url += "http://";
    }
    url += `${API.hostname}`;
    if (API.port !== 80 && !API.secure) {
      url += `:${API.port}`;
    } else if (API.securePort !== 443 && API.secure) {
      url += `:${API.securePort}`;
    }
    return url;
  }
  public static get webSocketRootURL(): string {
    let url = "";
    if (API.secure) {
      url += "wss://";
    } else {
      url += "ws://";
    }
    url += `${API.hostname}`;
    if (API.port !== 80 && !API.secure) {
      url += `:${API.port}`;
    } else if (API.securePort !== 443 && API.secure) {
      url += `:${API.securePort}`;
    }
    return url;
  }
  public static async call(method: string, route: string, data: any) {
    const headers = {
      "x-gig-gizmo-token": API.token ? API._token : null
    };
    const fetchRequest: AxiosRequestConfig = {
      data: null,
      headers,
      method: method.toLowerCase(),
      params: null,
      responseType: "json",
      url: `${API.rootURL}${route}`,
      xsrfCookieName: "gig-gizmo-token",
      xsrfHeaderName: "x-gig-gizmo-token",
    };
    if (data) {
      if (method === "HEAD" || method === "GET") {
        fetchRequest.params = data;
      } else {
        fetchRequest.data = data;
      }
    }

    const response = await API.axios(fetchRequest);
    if (response.data) {
      return response.data;
    } else if (response.statusText) {
      return response.statusText;
    } else if (response.status) {
      return null;
    }
  }
  public static async getSocket(): Promise<SocketIOClient.Socket | null> {
    const killSocket = (error: any) => {
      if (error) {
        console.error(error);
      }
      if (API.webSocket) {
        API.webSocket.open();
      }
    };
    const onReady = () => {
      if (!API.webSocket) {
        API.webSocket = API.WebSocket.default();
        API.webSocket.on("connect_timeout", killSocket);
        API.webSocket.on("connect_error", killSocket);
        API.webSocket.on("disconnect", killSocket);
        API.webSocket.on("error", killSocket);
        API.webSocket.open();
      }
      return API.webSocket;
    };
    if (API.WebSocket) {
      if (typeof document !== "undefined") {
        switch (document.readyState) {
          case "loading":
            await new Promise((resolve) => {
              document.addEventListener("DOMContentLoaded", resolve);
            });
            return onReady();
          case "interactive":
          case "complete":
            return onReady();
          default:
            throw new Error(`Unexpected readyState: ${document.readyState}`);
        }
      } else {
        return onReady();
      }
    }
    return null;
  }
  private constructor() {
    throw new Error("Cannot instantiate.");
  }
}

if (typeof API.axios !== "undefined") {
  API.axios.defaults.withCredentials = true;
}
