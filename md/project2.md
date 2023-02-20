自定义配置 webpack 配置

安装`yarn add @next/bundle-analyzer  @zeit/next-source-maps`
`yarn add url-loader`

```
const webpack = require('webpack');
const withSourceMaps = require('@zeit/next-source-maps');
const { execSync } = require('child_process');
const version = execSync('git rev-parse --verify HEAD', { encoding: 'utf8' })
  .toString()
  .trim();
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
console.log('build version: ', version);
module.exports = withBundleAnalyzer(
  withSourceMaps({
    inlineImageLimit: 20480,
    webpack: (config, { isServer }) => {
      config.plugins.push(
        new webpack.DefinePlugin({
          __SERVER__: isServer,
        })
      );
      config.module.rules.push(
        {
          test: /\.(jpe?g|png|gif)$/i,
          use: [
            {
              loader: 'url-loader',
              options: {
                esModule: false,
                limit: 20480,
                name: 'images/[name]_[hash:base64:5].[ext]',
                publicPath: `/_next/static/images/`,
                outputPath: 'static/images/',
              },
            },
          ],
        },
        {
          test: /\.svg$/i,
          use: [
            {
              loader: 'url-loader',
              options: {
                esModule: false,
                limit: 10240,
                name: 'images/[name]_[hash:base64:5].[ext]',
                publicPath: `/_next/static/images/`,
                outputPath: 'static/images/',
              },
            },
          ],
        }
      );
      return config;
    },
  })
);

```

增加命令

```
  "scripts": {
    "analyzer": "ANALYZE=true next build"
  },
```

安装 `query-string` 解析 url 参数

引入 mobx store

安装`yarn add mobx mobx-react`
