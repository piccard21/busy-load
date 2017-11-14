import _ from 'lodash';
import {
    Component
} from './class.Component.js';

export class Text extends Component {
    constructor(busyLoadOptions) { 
        super('span', {
            "class": _.get(busyLoadOptions, "textClass"),
            "css": {
                "color":  _.get(busyLoadOptions, 'textColor', _.get(busyLoadOptions, 'color', "#fff")),
                "font-size": _.get(busyLoadOptions, 'fontSize', "1rem"),
            },
            "text": _.get(busyLoadOptions, "text", "Loading ...")
        }, busyLoadOptions);



        // set margin
        let flexDirection = _.get(busyLoadOptions, "textPosition",  "right");
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

        this.tag.css(marginDirection, _.get(busyLoadOptions, 'textMargin', ".5rem"));

    } 
}