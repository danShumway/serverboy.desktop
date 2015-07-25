//TODO: set up constants.
'use strict';

//------------------PRIVATES-------------------------
var canvas, ctx, imgData;


//-----------------INTERFACE-------------------------

/**
 * Global object that handles drawing frames to the screen.
 * - Should be treated as a singleton.
 *
 * @class renderer
 * @constructor
 */
module.exports = {

    /**
     * Sets up renderer for future use.
     * Entry point for renderer class.
     *
     * @param canvasID
     * @method init
     */
    init : function(canvasId) {
        var index;

        canvas = document.getElementById(canvasId);
        ctx = canvas.getContext('2d');
        imgData = ctx.createImageData(160, 144);

        //Set up blank image data.
        for (index=0; index < imgData.data.length; index++) {
            imgData.data[index] = 0xFF;
        }
    },

    /**
     * Takes a frame output from serverboy.core and draws it to the screen.
     * @param  {array} frame - a 240,000 length array of pixles.  Pixels are compressed, one index per pixel (not RGB)
     * @method render
     */
    render : function(frame) {
        var index, position, color;
        for (index = 0; index < frame.length; index++) {
            color = frame[index];
            position = index + index * 3; //Swap position with where it should go on the imgData.

            imgData.data[position] = (color >> 16) & 0xFF; //Red
            imgData.data[++position] = (color >> 8) & 0xFF; //Green
            imgData.data[++position] = color & 0xFF; //Blue
        }

        ctx.putImageData(imgData, 0, 0);
    }
};
