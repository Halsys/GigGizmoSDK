/**
 * Created by corynull on 6/19/17.
 */
import Axios, { AxiosRequestConfig, AxiosStatic } from "axios";
import { parse as ParseCookie, serialize as SerializeCookie } from "cookie";
import SocketIO from "socket.io-client";
import { ModelNameToModel } from "./ModelNameToModel";

export abstract class API {
	public static SocketIO: SocketIOClientStatic | null = SocketIO;
	public static Axios: AxiosStatic | null = Axios;
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
	public static get expires(): Date | null {
		if (!API._expires && API._token) {
			let value: string | null = null;
			if (API.LocalStorageSupported) {
				value = localStorage.getItem("expires");
			}
			API._expires = (value) ? new Date(value) : new Date();
		}
		return API._expires;
	}
	public static set expires(value: Date | null) {
		API._expires = value;
		if (value === null && API.LocalStorageSupported) {
			localStorage.removeItem("expires");
		} else if (API.LocalStorageSupported && API._expires) {
			localStorage.setItem("expires", API._expires.toISOString());
		}
	}
	public static get token(): string | null {
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
			const value = localStorage.getItem("token");
			if (value && value !== "") {
				API._token = JSON.parse(value);
			}
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
	public static set token(value: string | null) {
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

	public static async deserializeData(data: any): Promise<any> {
		try {
			if (// RESTModel
				typeof data === "object" && data &&
				typeof data._id === "string" &&
				typeof data.ModelName === "string"
			) {
				return new (await ModelNameToModel(data.ModelName))(data);
			} // END of RESTModel
		} catch (e) {
			console.error(e);
		}

		try {
			if (// Map
				Array.isArray(data) &&
				data.length > 0 &&
				data.every((arr) =>
					Array.isArray(arr) &&
					arr.length === 2 &&
					typeof arr[0] === "string" &&
					typeof arr[1] === "object" && arr[1] &&
					typeof arr[1]._id === "string" &&
					typeof arr[1].ModelName === "string"
					)) {
				const mapData: Map<string, any> = new Map();
				const promises: Array<Promise<void>> =
					data.map(async (arr) => {
						const [key, value] = arr;
						let item: any = null;
						if (typeof value === "object" && value) {
							item = await API.deserializeData(value);
						}
						mapData.set(key, item);
					});
				await Promise.all(promises);
				return mapData;
			} // End of Map
		} catch (e) {
			console.error(e);
		}

		try {
			if (// Array
				Array.isArray(data) &&
				data.length > 0 &&
				data.every((item) =>
					typeof item === "object" && item &&
					typeof item._id === "string" &&
					typeof item.ModelName === "string")
			) {
				return Promise.all(
					data.map((item: any) => {
						return API.deserializeData(item);
					})
				);
			}// End of Array
		} catch (e) {
			console.error(e);
		}

		try {
			if (// Object
				typeof data === "object" && data && !Array.isArray(data)
			) {
				const object = {};
				const promises: Array<Promise<void>> = [];
				Object.entries(data).forEach(([key, value]: [string, any]) => {
					if (typeof value === "object" && value) {
						API.deserializeData(value).then((objectValue: any) => {
							object[key] = objectValue;
						});
					} else {
						object[key] = value;
					}
				});
				await Promise.all(promises);
				return object;
			} // End of Object
		} catch (e) {
			console.error(e);
		}

		return data;
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

		if (API.Axios) {
			try {
				const response = await API.Axios(fetchRequest);
				if (response.data) {
					return response.data;
				} else if (response.statusText) {
					return response.statusText;
				} else if (response.status) {
					return null;
				}
			} catch (e) {
				console.error(e);
				return null;
			}
		} else {
			throw new Error("Set Axios in GigGizmo API.");
		}
	}

	public static async getSocket(): Promise<SocketIOClient.Socket | null> {
		const killSocket = (error: any) => {
			if (error) {
				console.error(error);
			}
			if (API.webSocket) {
				API.webSocket.close();
				API.webSocket.open();
			}
		};
		const onReady = () => {
			if (!API.webSocket && API.SocketIO) {
				API.webSocket = API.SocketIO();
				API.webSocket.on("connect_timeout", killSocket);
				API.webSocket.on("connect_error", killSocket);
				API.webSocket.on("disconnect", killSocket);
				API.webSocket.on("error", killSocket);
				API.webSocket.open();
			}
			return API.webSocket;
		};
		if (API.useSocketIO) {
			if (typeof document !== "undefined") {
				switch (document.readyState) {
					case "loading":
						await new Promise((resolve) => {
							document.addEventListener("deviceready", resolve);
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

if (typeof API.Axios !== "undefined" && API.Axios) {
	API.Axios.defaults.withCredentials = true;
}
