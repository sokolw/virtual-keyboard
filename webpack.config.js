const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  entry: './src/js/main.js',

  output: {
    filename: 'script.js',
    path: path.resolve(__dirname, 'dist'),
  },

  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              url: false,
            },
          },
          'sass-loader',
        ],
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
    new HtmlWebpackPlugin(
      {
        title: 'Virtual keyboard',
        filename: 'index.html',
        favicon: './assets/keyboard_icon.ico',
        meta: { viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
      },
    ),
    new ESLintPlugin({
      fix: false,
    }),
  ],
};
