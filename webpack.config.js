// this is going to be in common js syntax
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  mode: "development",
  // __dirname: current directory
  // you can set multiples entry point by an object
  entry: {
    bundle: path.resolve(__dirname, "src/index.js"),
    bundle1: path.resolve(__dirname, "src/generateJoke.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    // https://webpack.js.org/guides/caching/#root
    /**
     * If we run another build without making any changes, 
     * we'd expect that filename to stay the same. 
     * However, if we were to run it again.
     */
    filename: "[name].[contenthash].js",
    clean: true, // Clean the output directory before emit.
    assetModuleFilename: '[name][ext]'
  },
  devtool: 'source-map',
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist') // what we're serving
    },
    port: 3000,
    open: true, // it'll open the browser automatically,
    hot: true, // reloading
    compress: true, // will enable gzip compression
    historyApiFallback: true,
  },
  // installed the loader but I haven't set them
  module: {
    rules: [
      {
        // any files that end with this extension scss -> apply loaders
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      }
    ],
  },
  plugins: [
    //https://github.com/jantimon/html-webpack-plugin
    new HtmlWebpackPlugin({
      title: 'Web Application',
      filename: 'index.html',
      template: 'src/template.html'
    }),
    new BundleAnalyzerPlugin()
  ]
};