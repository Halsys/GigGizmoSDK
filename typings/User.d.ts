/**
 * Created by corynull on 4/1/17.
 */
import { Band } from "./Band";
import { Conversation } from "./Conversation";
import { FacebookAccount } from "./FacebookAccount";
import { Gig } from "./Gig";
import { Location } from "./Location";
import { Notification } from "./Notification";
import { Page } from "./Page";
import { Post } from "./Post";
import { RESTModel } from "./RESTModel";
import { TwitterAccount } from "./TwitterAccount";
import { Upload } from "./Upload";
import { Venue } from "./Venue";

export type UserCallback = (user: User | null) => void;
export type UserCallbackDestroyer = () => void;

export class User extends RESTModel {
		public static ModelName: string;
		public static Current: any;
		public static Callbacks: Map<number, UserCallback>;
		public static agreement: any;
		public static EmailRegex: RegExp;
		public password: string | null;
		public confirmPassword: string | null;
		public icon: string | null;
		public active: boolean;
		public admin: boolean;
		public firstName: string;
		public middleName: string;
		public lastName: string;
		public birthday: Date;
		public country: string;
		public bandManager: boolean;
		public venueManager: boolean;
		public betaFeatureUser: boolean;
		public sendAnonymousReports: boolean;
		public sendErrorReports: boolean;
		public sendEmails: boolean;
		public sendPromotions: boolean;
		public useCookies: boolean;
		public readonly fullName: string;
		public email: string;
		public readonly salt: string;
		public readonly hash: string;
		public facebook: string | null;
		public twitter: string | null;
		public description: string;
		public emailVerified: boolean;
		public readonly attempts: number;
		public lastLoginIP: string;
		public lastLogin: Date;
		public canContact: boolean;
		public canFind: boolean;
		public options: any;
		public connections: string[];
		public blocked: string[];
		public static verifyEmail(id: string, secret: string): Promise<any>;
		public static sendEmailVerification(): Promise<any>;
		public static getAllConversations(): Promise<Conversation[]>;
		public static getAllNotifications(): Promise<Notification[]>;
		public static getAllPosts(): Promise<Post[]>;
		public static getAllBands(): Promise<Band[]>;
		public static getAllVenues(): Promise<Venue[]>;
		public static getAllGigs(): Promise<Gig[]>;
		public static getAllUploads(): Promise<Upload[]>;
		public static findFacebookPages(term: string): Promise<any>;
		public static search(
			q: string,
			modelName: string | null,
			skip?: number,
			limit?: number): Promise<Array<Band | Location | Page | Upload | User | Venue>>;
		public static findMany(criteria: object | null): Promise<User[]>;
		public static findOne(criteria: object | null): Promise<User | null>;
		public static onChange(callback: UserCallback): UserCallbackDestroyer;
		public static setUser(data: object | null): Promise<User | null>;
		public static getUser(force: boolean): Promise<User | null>;
		public static findById(id: string): Promise<User | null>;
		public static connectFacebook(): void;
		public static facebookLogIn(): void;
		public static payPalLogIn(): void;
		public static userLogIn(email: string, password: string):
			Promise<User | null>;
		public static userLogOut(): Promise<User | null>;
		public static sendPasswordResetEmail(email: string): Promise<any>;
		public static registerUser(userData: any): Promise<User>;
		public static NotifyAdminsOfError(): void;
		public getIcon(): Promise<Upload | null>;
		public getTwitterAccount(): Promise<TwitterAccount | null>;
		public getFacebookAccount(): Promise<FacebookAccount | null>;
		public validatePassword(maybePassword: string): Error | null;
		public isValid(): boolean;
		public anyErrors(): Error | null;
		public save(): Promise<this>;
		public remove(): Promise<this>;
}
