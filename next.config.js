const webpack = require('webpack');
const { execSync } = require('child_process');

const version = execSync('git rev-parse --verify HEAD', { encoding: 'utf8' })
  .toString()
  .trim();

console.log('build version', version);

module.exports = {
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
};
