const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('__API', { close: () => ipcRenderer.send('close') });
