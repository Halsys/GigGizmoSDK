export default abstract class API {
    static readonly WebSocket: SocketIOClientStatic;
    static readonly axios: import("axios").AxiosStatic;
    static readonly SessionStorageSupported: boolean;
    static readonly LocalStorageSupported: boolean;
    static readonly ShouldUseSocketIO = true;
    static dev: boolean;
    static secure: boolean;
    static port: number;
    static securePort: number;
    static hostname: string;
    private static _token;
    private static _expires;
    static useSocketIO: boolean;
    private static webSocket;
    static expires: any;
    static token: any;
    static readonly rootURL: string;
    static readonly webSocketRootURL: string;
    static call(method: string, route: string, data: any): Promise<any>;
    static getSocket(): Promise<{}>;
    private constructor();
}
