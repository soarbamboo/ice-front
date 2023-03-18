import App, { AppContext } from "next/app";
import Head from "next/head";
import React from "react";
import { GlobalStyle } from "@/src/common/globalStyles";
import BaseStore from "@/src/store/baseStore";
import BaseLayout from "@/src/components/layout";
import Loading, { LoadingWrapper } from "@/src/components/loading";
import Router from "next/router";
import { BaseRequest } from "@/src/utils/context/context";
import { getBaseInfo } from "@/src/utils/context/baseInfo";
import Constant from "@/src/utils/context/constant";
import { HeaderStaticParams, LayOutTitleType } from "@/src/components/layout/type";


if (!__SERVER__) {
    require("@/src/assets/iconfont/iconfont.js");
    require("@/src/assets/iconfont/iconfont.css");
}
export interface AppProps {
    language: string;
    languageCodes: string[];
    isUat: boolean;
    env: string;
    customerInfo: any;
    localeObj: { [key: string]: string };
    path: string;
    query: Record<string, string>;
}


export default class MyApp extends App {
    /**
     *
     * @param param0
     * 在next.js中，数据的获取能够经过getInitialPorps()完成，这个方法可让咱们在进入某个页面以前获取到这个页面所须要的数据
     * 也可让咱们在App组件中获取全局的数据，还能够经过它实现客户端和服务端数据的同步，它是next.js数据获取的规范.
     * 在next.js中，不推荐使用componentDidMount()等方式获取数据，而应该使用getInitialPorps()
     *
     * getInitialProps()返回了一个对象，其属性能够做为props传递到组件中进行使用
     */
    static async getInitialProps({ Component, router, ctx }: AppContext) {
        let pageProps = {};
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }
        const req = ctx.req as BaseRequest;

        const baseInfo = await getBaseInfo(req);
        const { cookie } = baseInfo;
        Constant.cookie = cookie;

        // const [, userRes] = await e(GetUserInfo)({}, { baseInfo });
        const customerInfo = undefined;
        // Constant.customerInfo = customerInfo;
        req.baseInfo = baseInfo;
        req.customerInfo = undefined;
        req.pathname = ctx.pathname;

        return {
            pageProps,
            customerInfo,
            path: req.path,
            query: req.query,
        };
    }
    componentDidMount() {
        Router.events.on("routeChangeStart", this.start);
        Router.events.on("routeChangeComplete", this.end);
        Router.events.on("routeChangeError", this.end);

    }
    componentWillUnmount() {
        Router.events.off("routeChangeStart", this.start);
        Router.events.off("routeChangeComplete", this.end);
        Router.events.off("routeChangeError", this.end);
    }
    start = () => {
        const modalContainer = document.getElementById("loading");
        if (modalContainer) {
            modalContainer.classList.add("show");
        }
    };
    end = () => {
        const { LOADING } = (this.props.Component as unknown) as { LOADING?: boolean };
        const modalContainer = document.getElementById("loading");
        if (modalContainer && !LOADING) {
            modalContainer.classList.remove("show");
        }
    };
    // 对页面重新渲染
    render() {
        const { Component, pageProps, path, query, customerInfo } = this.props;
        const {
            TITLE,
            NEED_HEADER = true,
            TITLE_TYPE = LayOutTitleType.INDEX
        } = (Component as unknown) as HeaderStaticParams;
        if (!__SERVER__) {
            Constant.customerInfo = customerInfo;
        }
        return (
            <React.Fragment>
                <GlobalStyle />
                <Head>
                    <meta charSet="utf-8" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover"
                    />
                    <title>{pageProps?.title || "Pulse"}</title>
                </Head>
                {
                    NEED_HEADER ? <BaseLayout path={path} query={query} userInfo={customerInfo} LayOutTitleType={TITLE_TYPE}>
                        <Component {...pageProps} baseStore={new BaseStore()} />
                    </BaseLayout> : <Component {...pageProps} baseStore={new BaseStore()} />

                }

                <LoadingWrapper id="loading"><Loading /></LoadingWrapper>
            </React.Fragment>
        );
    }
}
