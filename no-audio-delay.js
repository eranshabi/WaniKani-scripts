// ==UserScript==
// @name         WaniKani no audio delay
// @description remove WaniKani audio delay by fetching the audio before you get answer
// @version      0.1
// @author       eranshabi
// @include     /^https?://(www\.)?wanikani\.com/review/session/?$/
// @homepageURL https://github.com/eranshabi/WaniKani-scripts/blob/master/no-audio-delay.js
// @grant        none
// ==/UserScript==

$(document).ready(function() {
var oldSet = $.jStorage.set;
        $.jStorage.set = function(key, value, options) {
            var ret = oldSet.apply(this, [key, value, options]);

            if (key === 'currentItem') {
                fetch(value.aud)
            }

            return ret;
        };
});
