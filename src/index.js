import './sass/sass.scss';
import {
    busyLoad,
    busyLoadSetup,
    busyLoadFull
} from './lib/busy-load.js'
import {get} from "lodash";
import defaults from './lib/defaults.js';
 
jQuery = require('jquery');


(function($) {
    $.fn.busyLoad = busyLoad;
    $.busyLoadSetup = busyLoadSetup;
    $.busyLoadFull = busyLoadFull;
    $.fn.busyLoad.defaults = defaults;
  
// travis
// events
// phantom-repbuit
// console

    // $.busyLoadSetup({
    //     animation: "slide",
    //     background: "rgba(255, 152, 0, 0.86)"
    // });
    // let showHide = (event, tag, options = {}) => {
    //     event.preventDefault();
    //     event.stopPropagation();
    //     $(tag).busyLoad("show", options);
    //     $(tag).click(".busy-load-container", function() {
    //         $(tag).busyLoad("hide");
    //     });
    // }
    // // fullscreen
    // $('.btn-fullscreen').click(function() {
    //     $.busyLoadFull('show', {
    //         background: "rgba(0, 51, 101, 0.83)",
    //         image: "tardis",
    //         animation: "slide"
    //     });
    //     $("body>.busy-load-container").click(function() {
    //         $.busyLoadFull('hide', {
    //             animation: "fade"
    //         });
    //     });
    // })
    // // spinners
    // $(".spinner-01").click(function(e) {
    //     showHide(e, "#spinner-01");
    // });
}(jQuery));