import './sass/sass.scss';
import {
    busyLoad,
    busyLoadSetup,
    busyLoadFull
} from './lib/busy-load.js'
import defaults from './lib/defaults.js';
 
jQuery = require('jquery');

(function($) {
    $.fn.busyLoad = busyLoad;
    $.busyLoadSetup = busyLoadSetup;
    $.busyLoadFull = busyLoadFull;
    $.fn.busyLoad.defaults = defaults;


    $.busyLoadSetup({
        background: "rgba(0, 51, 101, 0.83)",
        image: "http://cafe-serendipity.com/wp-content/uploads/2018/01/tardis.gif",
    });
    let showHide = (event, tag, options = {}) => {
        event.preventDefault();
        event.stopPropagation();
        $(tag).busyLoad("show", options);
        $(tag).click(".busy-load-container", function() {
            $(tag).busyLoad("hide");
        });
    };
    // fullscreen
    $('.btn-fullscreen').click(function() {
        $.busyLoadFull('show', {
            animation: "slide"
        });
        $("body>.busy-load-container").click(function() {
            $.busyLoadFull('hide', {
                animation: "fade"
            });
        });
    });
    // spinners
    $(".spinner-01").click(function(e) {
        showHide(e, "#spinner-01");
    });
    $(".spinner-02").click(function(e) {
        showHide(e, "#spinner-02", {
            spinner: "accordion"
        });
    });


}(jQuery));