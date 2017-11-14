import {Component} from './class.Component.js';

export class ContainerItem extends Component {
    constructor(busyLoadOptions) { 

        let flexDirection = _.get(busyLoadOptions, "textPosition",  "right");

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
                throw `don't know textPosition '${flexDirection}'`
        }

        super('div', {
            "class":  _.get(busyLoadOptions, "containerItemClass"), 
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