import { Request } from "express";


export interface BaseInfo {
    cookie: string;
    // language: string;
}

export enum MetadataKeys {
    "cookie" = "cookie",
}

export type BaseMetaInfo = { meta: Map<any, string> } & BaseInfo;
let baseInfo: BaseMetaInfo;

export async function getBaseInfo(req: Request): Promise<BaseMetaInfo> {
    // const language = getCookieLanguage(req.cookies?.["language"]) || getBrowserLanguageFromHeaders(req.headers?.["accept-language"]) || defaultLang;
    const cookie = req.headers?.["cookie"];
    const meta = new Map([
        [MetadataKeys.cookie, cookie],
    ]);
    baseInfo = { cookie, meta };
    return baseInfo;
}