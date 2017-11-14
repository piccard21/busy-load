'use strict' 
const app = require('./app.js') 
const output = {
    path: app.paths.dist,
    filename: '[name].js',
    library: app.libraryVarName,
    libraryTarget: app.libraryTarget
}

module.exports = {
    output
}