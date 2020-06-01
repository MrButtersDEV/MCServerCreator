const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

//Window Object (init win)
let win;

function createWindow(){
    // create window
    win = new BrowserWindow({width:800, height:600, icon:__dirname+'/img/Main-Blue.png'})

    // load index.html
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }));

    //DEV MODE ONLY - Open devtools
    win.webContents.openDevTools();
    
    win.on('closed', () => {
        win = null;
    });
}

// Run create window when ready
app.on('ready', createWindow);

// Quit when all windows closed
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin'){
        app.quit();
    }
});