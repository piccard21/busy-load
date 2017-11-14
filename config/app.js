'use strict'
// primary module-configuration
const libraryVarName = 'npmEs6WebpackSkeleton';
const libraryTarget = 'umd';
const sourcemap = (process.env.NODE_ENV === 'PRODUCTION') ? true : false;

// general vars
const paths = require('./paths.js');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractCSS = new ExtractTextPlugin({
    filename: '[name].css',
    allChunks: true
});

module.exports = {
    extractCSS: extractCSS,
    libraryVarName: libraryVarName,
    libraryTarget: libraryTarget,
    paths,
    env: process.env.NODE_ENV,
    sourcemap
}