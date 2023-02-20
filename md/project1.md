配置 `babel` 新建`.babelrc`

```
{
  "presets": ["next/babel"]
}

```

配置 ESlint  
[next-eslint 配置](https://www.nextjs.cn/docs/basic-features/eslint)

```
{
  "extends": "next/core-web-vitals"
}
```

自定义 server

根目录下新建`server.js`

server.js 作为入口文件可以启动自定义服务，我们可以在自定义服务中进行路由解析拦截等

安装`express`

```
yarn add express --save
yarn add @types/express @types/node -D
```

server.js 写入

```
const { app, server } = require('./utils/app');
const { rediractLogin, getRedirectUrl } = require('./utils/redirect');
const { replacePath, getLowerCasePath } = require('./utils/utils');

const handle = app.getRequestHandler();
const port = process.env.PORT;
const ip = '127.0.0.1';

app
  .prepare()
  .then(() => {
    server.get('/health', (req, res) => {
      res.status(200);
      res.end('ok');
    });

    async function requestHandle(req, res) {
      const isSSGData = req.url.indexOf('_next/data') > -1;
      const isStaticFile = (!isSSGData && req.url.indexOf('_next') > -1) || req.url.indexOf('/icon.ico') > -1;
      if (isStaticFile) {
        await handle(req, res);
      } else {
        if (isSSGData) {
          await handle(req, res);
        } else {
          const parsedUrl = getLowerCasePath(req.url); // 兼容路由大小写
          const { pathname, query } = parsedUrl;
          req.pathname = pathname;
          // 部分强制登录页面校验
          if (rediractLogin(req, res, pathname)) {
            return;
          }
          if (getRedirectUrl(pathname)) {
            res.redirect(getRedirectUrl(pathname));
            return;
          }
          const rPath = replacePath(pathname, query);
          await app.render(req, res, rPath, query);
        }
      }
    }

    server.get('*', requestHandle);

    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://${ip}:${port}`);
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });


```

根目录下新建 utils 文件夹
新建`app.ts`

```

const next = require("next")
const express = require("express")

export const dev = process.env.NODE_ENV !== "production";
export const app = next({ dev });
export const server = express();

```

新建`redirect.ts`

```
const authPath = [];
/**
 *
 * @param req
 * @param res
 * @param pathname
 * @returns 强制跳转登录
 */
export const rediractLogin = (req, res, pathname) => {
    if (authPath.includes(pathname)) {
        const url = `${req.protocol}://${req.host}${req.url}`;
        res.redirect(`/login?ret=${encodeURIComponent(url)}`);
        return true;
    }
    return false;
}


const redirectMap = {
    aaa: "xxx",
};
/**
 *
 * @param pathname
 * @returns 路由重定向
 */
export const getRedirectUrl = (pathname) => {
    return redirectMap[pathname] || "";
}
```

新建`utils.ts`

```
const { parse } = require("url");

const REPLACE_MAP = {
    // "/flashdeal": [/^\/?quickbuy\.html$/i]
};

/**
 *
 * @param pathname
 * @param query
 * @returns 指定路由替换
 */
export const replacePath = (pathname, query) => {
    let newPath = pathname;
    Object.keys(REPLACE_MAP).some((originPath) => {
        const regexList = REPLACE_MAP[originPath];
        const isFindPage = regexList.some((reg) => reg.test(pathname));
        if (isFindPage) {
            newPath = originPath;
        }
        return isFindPage;
    });
    newPath = newPath.replace(/\.html$/, "");
    return newPath;
};

/**
 *
 * @param url
 * @returns 路由大小写转换
 */
export const getLowerCasePath = (url) => {
    const parsedUrl = parse(url, true);
    parsedUrl.pathname = (parsedUrl.pathname || "").toLowerCase();
    return parsedUrl;
};

```

修改`Script`命令

```
 "scripts": {
    "dev": "yarn && set PORT=3000 &&  node server.js",
    "start": "set PORT=3001 && set NODE_ENV=production && node server.js",
    "build":"next build",
  },

```
