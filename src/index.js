import './sass/sass.scss';
import {
    busyLoad,
    busyLoadSetup,
    busyLoadFull
} from './lib/busy-load.js'
import defaults from './lib/defaults.js';

let jQuery = require('jquery');

(function($) {
    $.fn.busyLoad = busyLoad;
    $.busyLoadSetup = busyLoadSetup;
    $.busyLoadFull = busyLoadFull;
    $.fn.busyLoad.defaults = defaults;
})(jQuery);