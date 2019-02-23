import * as Axios from "axios";
import * as SocketIOClient from "socket.io-client";

export default abstract class API {
	public static SocketIO: SocketIOClientStatic;
	public static Axios: Axios.AxiosStatic;
	public static readonly SessionStorageSupported: boolean;
	public static readonly LocalStorageSupported: boolean;
	public static readonly ShouldUseSocketIO: boolean;
	public static dev: boolean;
	public static secure: boolean;
	public static port: number;
	public static securePort: number;
	public static hostname: string;
	private static _token: string | null;
	private static _expires: Date | null;
	public static useSocketIO: boolean;
	private static webSocket: SocketIOClient.Socket | null;
	public static expires: Date | null;
	public static token: string | null;
	public static readonly rootURL: string;
	public static readonly webSocketRootURL: string;
	public static call(
			method: string,
			route: string,
			data: any): Promise<any>;
	public static getSocket():
		Promise<SocketIOClient.Socket | null>;
	private constructor();
}
