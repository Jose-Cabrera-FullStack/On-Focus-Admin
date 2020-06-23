const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: '/'
    // publicPath: '/' Para Development
    // publicPath: './' Para produccion
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
        {
            test: /\.(js|jsx|jss)$/,
            exclude: /(node_modules[\/\\])(?!mqtt)/,
            use: [
                {
                    loader: 'babel-loader',
                }
            ]
        },
        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
      },
        {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            exclude: /node_modules/,
            loader: 'file-loader',
            options: {
                limit: 1024,
                name: '[name].[ext]',
                mimetype: 'application/font-otf',
                publicPath: 'font/',
                outputPath: 'font/'
            }
        },
        {
            test: /\.(jpg|png|svg)$/,
            exclude: /node_modules/,
            loader: 'file-loader',
            options: {
                limit: 1024,
                name: '[name].[ext]',
                publicPath: 'img/',
                outputPath: 'img/'
            }
        }
    ],
},
  devServer:{
    historyApiFallback:true,
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: './index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/[name].css'
    }),
    new ExtractTextPlugin({
      filename: "bundle.css",
    disable: false,
    allChunks: true}),
  ]
};