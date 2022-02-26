const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('node:path');

let win;

app.on('will-quit', console.log);
app.on('before-quit', console.log);
app.on('quit', console.log);
process.on('unhandledRejection', console.log);
process.on('uncaughtException', console.log);

try {
  app.whenReady().then(() => {
    win = new BrowserWindow({
      frame: false,
      transparent: true,
      show: false,
      autoHideMenuBar: true,
      webPreferences: {
        preload: path.join(__dirname, 'preload.js'),
        contextIsolation: true,
        nodeIntegration: false,
      },
    });

    // transparent window for fun, but wait to show so it works on all platforms :)
    setTimeout(() => {
      win.show();
      win.webContents.openDevTools({ mode: 'detach', activate: false });
    }, 2000);

    win.loadFile('./index.html');

    ipcMain.on('close', () => app.quit());
  });
} catch (error) {
  console.log({ error });
}
