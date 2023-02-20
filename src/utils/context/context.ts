import { Request, Response } from "express";
import { GetServerSidePropsContext } from "next";
import React from "react";
import { BaseMetaInfo } from "./baseInfo";


export interface UserInfo {
    userId: string
}

export interface BaseRequest extends Request {
    baseInfo?: BaseMetaInfo;
    customerInfo?: UserInfo;
    pathname?: string;
}

export interface BaseContext extends GetServerSidePropsContext {
    req: BaseRequest;
    res: Response;
}

export interface BaseProps {
    countryCode: string;
    language: string;
    isUat: boolean;
    customerInfo: UserInfo;
    localeObj: { [key: string]: string };
}

export const BaseContext = React.createContext<BaseProps>(undefined);
