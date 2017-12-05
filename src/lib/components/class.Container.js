import { Component } from './class.Component.js';
const get = require("lodash/get");

export class Container extends Component {
    constructor(busyLoadOptions) { 
        super('div', {
            "class": get(busyLoadOptions, "containerClass"),
            "css": {
                "position": get(busyLoadOptions, "fullScreen",  false)  ? "fixed" : "absolute",
                "top": 0,
                "left": 0,
                "background": get(busyLoadOptions, "background",  "#fff"),
                "color": get(busyLoadOptions, "color", "#0000001a"),
                "display": "flex",
                "align-items": "center",
                "justify-content": "center",
                "width": "100%",
                "height": "100%",
                "z-index": 9999
            }
        }, busyLoadOptions); 
    } 
}