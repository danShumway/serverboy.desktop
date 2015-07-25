var fs = require('fs'),
    Gameboy = require('serverboy'),
    renderer = require(window.constants.paths.javascripts + 'renderer');

//Used internally to maintain operation.
var internals = {
    reset: function() {
        this.gameboy_instance = undefined;
        this.elapsed_time = undefined;
        this.frames = 0;
        this.pressedKeys = [];
    }
}; internals.reset();

//-----------------------------------------
//--------Functions------------------------
//-----------------------------------------

var piglet = function() {
    var x = 0;
    for(var i = 0; i < 60000; i++) {
        x = x+i;
    }
};


var loadROM = function(file_path) {

    //Reset variables.
    internals.reset();
    var rom = fs.readFileSync(file_path);

    //Load it.
    internals.gameboy_instance = new Gameboy();
    internals.gameboy_instance.loadROM(rom);

    console.log('loaded');
};

var running = false;
var loop = function(mainWindow) {
    piglet();
    internals.gameboy_instance.doFrame();

    //Send screen  Should work?
    renderer.render(internals.gameboy_instance.getScreen());

    if (running) {
        setTimeout(loop.bind(this, mainWindow), window.constants.settings.frameRate);
    }
};

window.start = function() {
    console.log('starting core');
    loadROM("./ROM/jumpman.gbc");

    renderer.init('screen');
    console.log(piglet.toString());
    running = true;
    loop();

}
