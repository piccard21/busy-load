export class Component {
    constructor(tag, options, busyLoadOptions) { 
        this._options = options;
        this._busyLoadOptions = busyLoadOptions;
 
        this.setTag(tag);
        // this.debugOptions();
    } 

    /**
     * OPTIONS
     */ 

    get options() {
        return this._options;
    }
  
    set options(newOptions) {
        this._options = newOptions; 
    }
  
    debugOptions() {
        console.log(this._options);
    }

    extendOptions(options) { 
        $.extend(this._options, options);
    } 


    /**
     * TAG
     */
         
    get tag() {
        return this._$tag;
    } 

    set tag($tag) {
        this._$tag = $tag;
    }

    setTag(tag) {
        if (tag instanceof jQuery) { 
            this._$tag = tag;
        } else if (typeof tag === 'string' || tag instanceof String) {
            this._$tag = $("<" + tag + "/>", this._options);
        } else {
            throw "wrong type for creating a tag"; 
        }
    }
}
         