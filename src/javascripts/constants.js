(function() {
    'use strict';

    //-----------private helpers-------------

    var path = function(pathname) {
            //Add an ending slash if it's required.
            var endSlash = (/\/$/.exec(pathname) == null) ? '/' : '';
            return __dirname + '/' + pathname + endSlash;
        },
        remap = function(obj) {
            var key,
                remapped = {};

            for (key in obj) {
                remapped[ obj[key] ] = key;
            }

            return remapped;
        }

    //---------------------------------------
    //Global because a lot of the paths are used for require statments anyway.
    window.constants = {
        settings : {
            initialRom : 'jumpman.gbc',
            screenId : 'screen',
            frameRate : 1000/80, //60fps
        },
        paths : {
            javascripts : path('javascripts'),
            ROM : path('../ROM')
        },
        keys : remap({
            up : 38,
            left : 37,
            right : 39,
            down : 40,
            a : 88,
            b : 90,
            start : 13,
            select : 16,
        })
    }

}());
