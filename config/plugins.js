'use strict'
const app = require('./app.js')
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const uglifyJSPlugin = require('uglifyjs-webpack-plugin');
const pathsToClean = ['dist'];
const cleanOptions = {
    root: app.paths.root,
    verbose: true,
    dry: false
}
const plugins = [
    app.extractCSS
];

if (app.env === 'DEVELOPMENT') {
    plugins.push(new cleanWebpackPlugin(app.paths.dist, cleanOptions));
}

if (app.env === 'PRODUCTION') {
    let uglify = new uglifyJSPlugin({
        include: /\.js$/,
        sourceMap: true
    });
    plugins.push(uglify);
}

if (app.env === 'DEVELOPMENT-SERVER') {
    let htmlPlugin = new htmlWebpackPlugin({
        title: app.htmlTitle,
        template: app.paths.path.resolve(app.paths.src, 'template', 'index.ejs'),
    });
    plugins.push(new cleanWebpackPlugin(app.paths.dist, cleanOptions), htmlPlugin, new webpack.NamedModulesPlugin(), new webpack.HotModuleReplacementPlugin());
}

module.exports = {
    plugins
}