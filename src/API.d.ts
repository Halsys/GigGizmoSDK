export default abstract class API {
		public static readonly WebSocket: SocketIOClientStatic;
		public static readonly axios: import ("axios").AxiosStatic;
		public static readonly SessionStorageSupported: boolean;
		public static readonly LocalStorageSupported: boolean;
		public static readonly ShouldUseSocketIO = true;
		public static dev: boolean;
		public static secure: boolean;
		public static port: number;
		public static securePort: number;
		public static hostname: string;
		private static _token;
		private static _expires;
		public static useSocketIO: boolean;
		private static webSocket;
		public static expires: any;
		public static token: any;
		public static readonly rootURL: string;
		public static readonly webSocketRootURL: string;
		public static call(method: string, route: string, data: any): Promise<any>;
		public static getSocket(): Promise<{}>;
		private constructor();
}
