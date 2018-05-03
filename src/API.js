/**
 * Created by corynull on 6/19/17.
 */

import axios from "axios";
import io from "socket.io-client";
import { parse as ParseCookie } from "cookie";

export const version =
	typeof process !== "undefined" &&
	typeof process.env.npm_package_version !== "undefined"
		? process.env.npm_package_version
		: null;

export default class API {
	static hostname = "giggizmo.com";
	static root = `https://${API.hostname}`;
	static websocketRoot = `ws://${API.hostname}`;
	static webSocket = null;
	static token = API.findToken();
	static SessionStorageSupported = typeof Storage !== "undefined";
	static ShouldUseSocketIO = process && !process.title.includes("node");
	static UseSocketIO = false;

	static findToken() {
		let token = API.token || null;
		if (!token && API.SessionStorageSupported) {
			// We store it in session storage.
			token = sessionStorage.getItem("token") || null;
		}
		if (!token && typeof document !== "undefined" && document.cookie) {
			// We store it in the cookie.
			const cookieToken = ParseCookie(document.cookie)["gig-gizmo-token"];
			token = cookieToken;
		}
		if (token && API.SessionStorageSupported) {
			sessionStorage.setItem("token", token);
		}
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
					} else if (error.request) reject(new Error(error.request));
					else reject(new Error(error.message));
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
