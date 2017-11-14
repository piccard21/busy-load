'use strict'
const path = require('path')
const root = path.resolve(__dirname, '..');
const config = path.resolve(root, 'config');
const dist = path.resolve(root, 'dist');
const src = path.resolve(root, 'src');
const css = path.resolve(src, 'css');
const sass = path.resolve(src, 'sass');

module.exports = {
    path,
    root,
    config,
    dist,
    src,
    css,
    sass
}