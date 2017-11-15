import { Component } from './class.Component.js';

export class Container extends Component {
    constructor(busyLoadOptions) { 
        
        super('div', {
            "class": _.get(busyLoadOptions, "containerClass"),
            "css": {
                "position": _.get(busyLoadOptions, "fullScreen",  false)  ? "fixed" : "absolute",
                "top": 0,
                "left": 0,
                "background": _.get(busyLoadOptions, "background",  "#fff"),
                "color": _.get(busyLoadOptions, "color", "#0000001a"),
                "display": "flex",
                "align-items": "center",
                "justify-content": "center",
                "width": "100%",
                "height": "100%" 
            }
        }, busyLoadOptions); 
    } 
}