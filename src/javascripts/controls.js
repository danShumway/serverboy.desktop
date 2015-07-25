var listening = true,
    keysDown = {},
    element;

//Some optimizations really can go here.
module.exports = {
    init : function(screenId) {
        var key;

        element = document.getElementById(screenId);
        element.tabIndex = 1000; //Enable keypresses.

        element.addEventListener('keydown', function(key) {
            if(key.which in window.constants.keys && !(key.which in keysDown)) {
                keysDown[ window.constants.keys[key.which] ] = true;
            }
        });

        element.addEventListener('keyup', function(key) {
            if(key.which in window.constants.keys) {
                delete keysDown[ window.constants.keys[key.which] ];
            }
        });
    },

    getKeys : function() {
        return Object.keys(keysDown);
    }
}
