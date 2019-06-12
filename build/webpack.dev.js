// Node
const path = require('path');
// Webpack
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
// Config
const config = require('./config');

const isProd = process.env.NODE_ENV === 'production';

const webpackConfig = {
  mode: process.env.NODE_ENV,
  entry: {
    'mango-ui': './examples/entry.js'
  },
  output: {
    path: path.resolve(process.cwd(), './examples/mango-ui/'),
    // publicPath: process.env.CI_ENV || '',
    filename: '[name].[hash:7].js',
    chunkFilename: isProd ? '[name].[hash:7].js' : '[name].js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: config.alias,
    modules: ['node_modules']
  },
  devServer: {
    openPage: 'index.html',
    host: 'localhost',
    port: 4407,
    publicPath: '/',
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.(jsx?|babel|es6)$/,
        include: process.cwd(),
        exclude: config.jsexclude,
        loader: 'babel-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          compilerOptions: {
            preserveWhitespace: false
          }
        }
      },
      {
        test: /\.(scss|css)$/,
        // use: [
        //   isProd ? MiniCssExtractPlugin.loader : 'style-loader',
        //   'css-loader',
        //   'sass-loader'
        // ]
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(svg|otf|ttf|woff2?|eot|gif|png|jpe?g)(\?\S*)?$/,
        loader: 'url-loader',
        query: {
          limit: 8192,
          name: path.posix.join('static', '[name].[hash:7].[ext]')
        }
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './examples/index.html',
      filename: './index.html',
    }),
    new VueLoaderPlugin(),
  ]
}

module.exports = webpackConfig;