const { merge } = require('webpack-merge');
const OptimizeCSSAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin');
const cssnano = require('cssnano');
const baseConfig = require('./webpack.base');

const prodConfig = {
  mode: 'production',
  rules: [
    {
      test: /\.css$/,
      use: 'ignore-loader',
    },
    {
      test: /\.less$/,
      use: 'ignore-loader',
    },
  ],
  plugins: [
    new OptimizeCSSAssetsWebpackPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: cssnano,
    }),
    new HtmlWebpackExternalsPlugin({
      externals: [
        {
          module: 'react',
          entry: '', // 可本地路径，一般cdn 路径
          global: 'React',
        },
        {
          module: 'react',
          entry: '',
          global: 'React',
        },
      ],
    }),
  ],
  optimization: {
    splitChunks: {
      minSize: 0,
      cacheGroups: {
        commons: {
          name: 'commons',
          chunks: 'all',
          minChunks: 2,
        },
        vendors: {
          test: /(react|react-dom)/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
};

module.exports = merge(baseConfig, prodConfig);
