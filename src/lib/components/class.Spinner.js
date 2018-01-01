import { Component } from './class.Component.js';  
import { SpinnerLib } from './class.SpinnerLib.js';  
const get = require("lodash/get");

export class Spinner extends Component {
    constructor(busyLoadOptions) {
        super("span", {}, busyLoadOptions); 

        if (get(this._busyLoadOptions, 'fontawesome')) {
            this.createFontAwesomeTag();
        }
        else if (get(this._busyLoadOptions, 'custom')) {
            this.createCustomTag();
        }
        else if (get(this._busyLoadOptions, 'image')) {
            this.createImageTag();
        }
        else if (get(this._busyLoadOptions, 'spinner')) {
            this.createCssTag(get(this._busyLoadOptions, 'spinner'));
        }
        else {
            this.createCssTag("pump");
        }
        
        this.tag.addClass(get(this._busyLoadOptions, "spinnerClass"));
    } 


    createCssTag(spinnerType) { 
        let spinnerLib = new SpinnerLib(spinnerType, this._busyLoadOptions); 
        this.setTag(spinnerLib.spinner); 
        this.tag.addClass("busy-load-spinner-css");
        this.setMaxMinSize(); 
    }

    createImageTag() {
        this.options = {
            "class": "loader-image",
            "src": this._busyLoadOptions.image
        };

        this.setTag('img');
        this.setMaxMinSize(); 
        this.tag.addClass("busy-load-spinner-image");
    }

    createFontAwesomeTag() {
        this.options = {
            "class": get(this._busyLoadOptions, 'fontawesome', "fa fa-refresh fa-spin fa-2x fa-fw"),
            "css": {
                "color": get(this._busyLoadOptions, 'color', "#fff")
            }
        };

        this.setTag('span');
        this.tag.addClass("busy-load-spinner-fontawesome");

        this._$tag.append($("<span/>", {
            "class": "sr-only",
            "text": "Loading ..."
        })); 
    }

    createCustomTag() { 
        let custom = get(this._busyLoadOptions, 'custom');
        let isJqueryObject = custom instanceof jQuery

        if (!isJqueryObject) {
            throw "wrong type for creating a tag"; 
        }  

        this.setTag(custom);
        this.tag.addClass("busy-load-spinner-custom");
    }

    setMaxMinSize() {
        this.tag.css({
            "max-height": get(this._busyLoadOptions, 'maxSize'),  
            "max-width":  get(this._busyLoadOptions, 'maxSize'),
            "min-height": get(this._busyLoadOptions, 'minSize'),  
            "min-width":  get(this._busyLoadOptions, 'minSize')
        });
    }


    // https://projects.lukehaas.me/css-loaders/
}