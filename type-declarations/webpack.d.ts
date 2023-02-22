declare const __SERVER__: boolean;
// declare const IS_SSR: boolean;
// declare const IS_FRAME_ONLY: boolean;
// declare const NEXT_PUBLIC_COMMIT_SHA: string;
// declare const NEXT_PUBLIC_SENTRY_DSN: string;
// declare const QRCode: any;
// declare const gio: any;
// declare const TencentCaptcha: any;
// declare const BOOMR: any;
// declare const requestIdleCallback: any;
// declare const HEADER_TYPE: any;
// declare const I18N_NAMESPACE: string[];
// declare const TITLE: string;

declare module "*.css";
declare module "*.scss";
declare module "*.sass";
declare module "*.less";
declare module "*.json";
declare module "*.es6";
declare module "*.po";

declare namespace Global {

	export interface HeadMeta {
		image: string;
		description: string;
		keywords: string;
		type: string;
		url: boolean;
		canonical: boolean;
	}
	export interface Request {
		cookies: object;
		baseInfo: BaseInfo;
		headmeta?: Partial<HeadMeta>;
	}
	export interface Context {
		req: Request;
		query: NodeJS.Dict<string | string[]>;
		params: NodeJS.Dict<string | string[]>;
	}
}
