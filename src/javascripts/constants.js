(function() {
    'use strict';

    //-----------private helpers-------------

    var path = function(pathname) {
        //Add an ending slash if it's required.
        var endSlash = (/\/$/.exec(pathname) == null) ? '/' : '';
        return __dirname + '/' + pathname + endSlash;
    }

    //---------------------------------------
    //Global because a lot of the paths are used for require statments anyway.
    window.constants = {
        settings : {
            initialRom : 'jumpman.gbc',
            screenId : 'screen',
            frameRate : 1000/60, //60fps
        },
        paths : {
            javascripts : path('javascripts'),
            ROM : path('../ROM')
        },
    }

}());
