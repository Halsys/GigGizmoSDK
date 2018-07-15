/**
 * Created by corynull on 6/19/17.
 */

const axios = require("axios");
const ParseCookie = require("cookie-parser");
const io = require("socket.io-client");
const package = require("../package.json");

const dev =
	typeof process.env.NODE_ENV !== "undefined"
		? process.env.NODE_ENV === "development"
		: false;
const { version } = package;
const secure = !dev;
const port = dev ? 58000 : 80;
const securePort = dev ? 54430 : 443;

// NOTE: Switch to localhost if testing Facebook... or 127.0.0.1 for Twitter.
const hostname = dev
	? `127.0.0.1:${secure ? securePort : port}`
	: "giggizmo.com";
const root = `http${secure ? "s" : ""}://${hostname}`;
const websocketRoot = `ws://${hostname}`;
let webSocket = null;
let token = null;
const SessionStorageSupported = typeof Storage !== "undefined";
const LocalStorageSupported =
	typeof window !== "undefined" && typeof window.localStorage !== "undefined";
const ShouldUseSocketIO = process && !process.title.includes("node");
const UseSocketIO = false;

const findToken = () => {
	if (!token && LocalStorageSupported)
		// We store it in session storage.
		token = localStorage.getItem("token") || null;
	if (!token && typeof document !== "undefined" && document.cookie)
		// We store it in the cookie.
		token = ParseCookie(document.cookie)["gig-gizmo-token"];
	if (token && LocalStorageSupported) localStorage.setItem("token", token);
	return token;
};

token = findToken();

const Call = (method, callRoute, callData) => {
	const route = callRoute || "";
	const data = callData || {};
	return new Promise((resolve, reject) => {
		let token = data && data.token ? data.token : false;
		if (typeof token !== "undefined" && data) delete data.token;
		token = token || findToken();
		const fetchRequest = {
			headers: {
				"gig-gizmo-token": token
			},
			url: `${root}${route}`,
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
};

const GetSocket = async (token = findToken()) => {
	return new Promise((resolve, reject) => {
		if (token) {
			if (webSocket) return resolve(webSocket);
			webSocket = io(root);
			webSocket.on("connect", () => resolve(webSocket));
			webSocket.on("connect_timeout", () => reject(new Error("Timeout")));
			webSocket.on("connect_error", error => reject(error));
			webSocket.on("disconnect", () => reject(new Error("Disconnected")));
			webSocket.on("error", error => reject(error));
			return null;
		}
		return resolve(null);
	});
};

module.exports = {
	dev,
	version,
	secure,
	port,
	securePort,
	hostname,
	root,
	websocketRoot,
	webSocket,
	token,
	SessionStorageSupported,
	LocalStorageSupported,
	ShouldUseSocketIO,
	UseSocketIO,
	findToken,
	Call,
	GetSocket
};
