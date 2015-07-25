var app = require('app'),
    BrowserWindow = require('browser-window');
    //client = require("./src/index"); //Note, if this isn't getting imported, try double quotes?

//report crashes.
require('crash-reporter').start();

//Quit on close.
app.on('window-all-closed', function() {
    if(process.platform !== 'darwin') {
        app.quit();
    }
});

//Window will be be closed when this is GBC
var mainWindow = null;
app.on('ready', function() {
    mainWindow = new BrowserWindow({width: 800, height: 600});
    mainWindow.loadUrl('file://' + __dirname + '/index.html');
    mainWindow.openDevTools();


    mainWindow.on('closed', function() {
        mainWindow = null;
    });

    //client(mainWindow);
})
