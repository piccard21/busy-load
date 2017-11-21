'use strict'
const app = require('./app.js')
const appPath = app.paths.path.resolve(app.paths.src, 'index.js');
const entry = (app.env === 'PRODUCTION') ? {
    "app.min": ['babel-polyfill',
        appPath
    ]
} : {
    app: ['babel-polyfill',
        appPath
    ],
};
module.exports = {
    entry
}