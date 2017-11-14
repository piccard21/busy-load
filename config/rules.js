'use strict'
const app = require('./app.js'); 
const rules = [{
    test: /\.js$/,
    exclude: /(node_modules|bower_components)/,
    use: {
        loader: 'babel-loader',
        options: {
            presets: ['env']
        }
    }
}, {
    test: /\.scss$/i,
    include: app.paths.sass,
    use: app.extractCSS.extract([{
        loader: 'css-loader',
        options: {
            minimize: (app.env === 'PRODUCTION') ? true : false,
            importLoaders: 1
        }
    }, 'postcss-loader', 'sass-loader'])
}, {
    test: /\.css$/i, 
    include: app.paths.css,
    use: app.extractCSS.extract([{
        loader: 'css-loader',
        options: {
            minimize: (app.env === 'PRODUCTION') ? true : false,
            importLoaders: 1
        }, 
    }, 'postcss-loader'])
}];

module.exports = {
    rules
}