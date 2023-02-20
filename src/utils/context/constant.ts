import { UserInfo } from "./context";



export interface Constants {
    customerId: string;
}
export function getConstants(baseInfo?: any, hostname?: string): Constants {
    const params: Partial<Constants> = {
        customerId: String(baseInfo?.customerId || ""),
    };
    return {
        ...params,
    } as Constants;
}

export const browserConstants = getConstants(null, __SERVER__ ? "" : location.hostname);
interface Meta {
    cookie?: string;
    customerInfo?: any;
}


const meta: Meta = {
    cookie: "",
    customerInfo: undefined,
};



export default class Constant {

    public static set cookie(cookie: string) {
        try {
            meta.cookie = cookie;
        } catch (e) {
            console.error(e);
        }
    }

    public static get cookie(): string {
        return meta.cookie;
    }


    public static set customerInfo(info: UserInfo) {
        try {
            meta.customerInfo = info;
        } catch (e) {
            console.error(e);
        }
    }

    public static get customerInfo(): UserInfo | undefined {
        return meta.customerInfo;
    }

}
