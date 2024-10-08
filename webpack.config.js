const webpack = require('webpack');

// This is the bundler (Webpack) configuration file.
//
// The bundler's primary responsibility is taking the compiled Javascript file set
// an minifying it into a single densely-packed Javascript file.
//
// Webpack also provides a smart development server which can swap out modules
// in realtime as the source set is modified.

const path = require('path');

// # Import Webpack Plugins

// Official Webpack plugin for including an HTML file in the bundle. It also provides
// a simple templating library which can be used to modify the HTML file based on environment
// variables, development stage, etc.
//
// https://github.com/jantimon/html-webpack-plugin
const HtmlWebpackPlugin = require("html-webpack-plugin");

// React's official Hot-Module-Replacement package react-refresh does not yet provide
// support for Webpack. However, it has been implemented by a third-party package
// using the technique outlined by the React core team here: 
// https://github.com/facebook/react/issues/16604#issuecomment-528663101.
//
// The third party package is implemented here:
// https://github.com/pmmmwh/react-refresh-webpack-plugin
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  // The STAGE environment variable aligns with Webpack's mode values.
  // (Either `development` or `production`)
  mode: process.env.STAGE,

  plugins: (() => {
    const plugins = [];

    // Inject the bundled Javascript into ./index.html using Webpack's official HtmlWebpackPlugin.
    plugins.push(new HtmlWebpackPlugin({
      template: path.join(__dirname, 'index.html'),
    }));

    // During development enable Hot Module Replacement via ReactRefreshWebpackPlugin.
    // This Webpack plugin works in tandem with Facebook's Babel plugin `react-refresh/babel`.
    if (process.env.STAGE === 'development')
      plugins.push(new ReactRefreshWebpackPlugin());

    if (process.env.STAGE === 'development')
      plugins.push(new webpack.SourceMapDevToolPlugin({
        // The URL where the TypeScript source files will be hosted by the
        // Webpack development server. The browser will expect the files to
        // to be publicly available on the network here. This is not a filesystem path
        // it is a URL.
        sourceRoot: '/src'
      }))
    
    return plugins;
  })(),
  
  // The Javascript entry point that webpack will begin bundling from. 
  // This is set to the target directory where Babel emits the compiled javascript.
  entry: './target/babel/main.js',

  // Specify the file and diretory where Webpack will place the bundle it produced.
  output: {
    filename: 'bundle.js', 
    path: path.join(__dirname, 'target/webpack'), 
  },

  devServer: {
    // Enable Hot Module Replacement in Webpack's Dev Server.
    hot: true,
    static: [
      // The compilation might produce assets which are to be exposed by the
      // webpack dev server specifically, but nowhere else. Those assets are
      // written here. For example, the TypeScript sources are placed here so
      // that the browser debugger can step through them.
      // 
      // Files and directories placed here will be made available at the root 
      // by the Webpack dev server. For example: target/webpack-dev-server/example.txt
      // will be made avilable at localhost:port/example.txt.
      path.join(__dirname, 'target/webpack-dev-server'),
      path.join(__dirname, 'public')
    ],
  },
};
