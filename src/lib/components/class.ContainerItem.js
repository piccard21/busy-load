import {Component} from './class.Component.js';
const get = require("lodash/get");

export class ContainerItem extends Component {
    constructor(busyLoadOptions) { 

        let flexDirection = get(busyLoadOptions, "textPosition",  "right");

        switch (flexDirection) {
            case "top":
                flexDirection = "column";
                break; 
            case "bottom":
                flexDirection = "column-reverse";
                break;
            case "right":
                flexDirection = "row-reverse";
                break;
            case "left":
                flexDirection = "row";
                break;
            default:
                throw `don't know textPosition: ${flexDirection}`
        }

        super('div', {
            "class":  get(busyLoadOptions, "containerItemClass"), 
            "css": {
                "background": "none",
                "display": "flex",
                "justify-content": "center",
                "align-items": "center",
                "flex-direction": flexDirection
            }
        }, busyLoadOptions);
    } 
}