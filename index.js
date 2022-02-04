const { app, BrowserWindow } = require('electron');

function createMainWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  // you have to load the html file
  win.loadFile('pong.html');
}
