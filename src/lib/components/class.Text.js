import {
    Component
} from './class.Component.js';
const get = require("lodash/get");

export class Text extends Component {
    constructor(busyLoadOptions) { 
        super('span', {
            "class": get(busyLoadOptions, "textClass"),
            "css": {
                "color":  get(busyLoadOptions, 'textColor', get(busyLoadOptions, 'color', "#fff")),
                "font-size": get(busyLoadOptions, 'fontSize', "1rem"),
            },
            "text": get(busyLoadOptions, "text", "Loading ...")
        }, busyLoadOptions);
        

        // set margin
        let flexDirection = get(busyLoadOptions, "textPosition",  "right");
        let marginDirection = "margin-left";

        switch (flexDirection) {
            case "top":
                marginDirection = "margin-bottom";
                break; 
            case "bottom":
                marginDirection = "margin-top";
                break; 
            case "left":
                marginDirection = "margin-right";
                break;
        }

        this.tag.css(marginDirection, get(busyLoadOptions, 'textMargin', ".5rem"));
    } 
}