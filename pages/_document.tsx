import { description, keywords } from "@/src/common/info";
import Document, { DocumentInitialProps, Head, Html, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

interface DocumentProps {

}
export default class MyDocument extends Document<DocumentProps> {
    static async getInitialProps(ctx) {
        // const isuat = ctx?.req?.baseInfo?.isUat;
        const sheet = new ServerStyleSheet();
        // 1.这里采用react里High Order Component的方式，可以重新包装APP和所有渲染的组件
        const originalRenderPage = ctx.renderPage;
        try {
            if (ctx.req) {
                ctx.req.renderStartTime = Date.now();
                ctx.req.renderPageName = ctx.pathname;
            }
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: App => (props) =>
                        // App挂载样式
                        sheet.collectStyles(<App {...props} />)
                });
            // 因为覆盖了Document，所以要重新返回页面的props
            const props = await Document.getInitialProps(ctx);
            return {
                ...props,
                styles: <>{props.styles}{sheet.getStyleElement()}</>
            };
        } finally {
            sheet.seal();
        }
    }
    render() {
        return (
            <Html>
                <Head>
                    <meta name="full-screen" content="yes" />
                    <meta name="apple-mobile-web-app-capable" content="yes" />
                    <meta name="mobile-web-app-capable" content="yes" />
                    <link rel="icon" href="./images/icon.ico" type="image/x-icon" />
                    <link rel="apple-touch-icon" href="/yahu.ico" type="image/x-icon" />
                    {!!description && <meta property="description" content={description} />}
                    {!!keywords && <meta property="keyswords" content={keywords} />}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
