const app = require('./app.js'); 
const {rules} = require('./rules.js')
const {output} = require('./output.js')
const {entry} = require('./entry.js')
const {plugins} = require('./plugins.js')

// general options
/* 
 lodash is not included in the module, it's an requirement in package.json
 if you want it inside, uncomment it
 if you don't want it, delete it, but also from dependencies in package.json and the import statement in index.js
 */
let options = {
    externals: {
        lodash: {
            commonjs: 'lodash',
            commonjs2: 'lodash',
            amd: 'lodash',
            root: '_'
        }
    }, 
    entry,
    plugins,
    output,
    module: {rules}
};

// add sourcemap
if (app.sourcemap) {
   options.devtool= 'source-map';
}

// dev-server
if (app.env === 'DEVELOPMENT-SERVER') {
    options.devServer= {
        contentBase: app.paths.dist,
        hot: true
    }
}

module.exports=options;